import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

// Note: Stripe webhooks require access to the raw body
// However, next.js app router doesn't allow easy parsing of raw bodies. 
// A workaround is to read it as text
export async function POST(req: Request) {
    const defaultExport = "Webhooks Running"
    try {
        const body = await req.text()
        const headersList = await headers()
        const signature = headersList.get("Stripe-Signature") as string

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(
                body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET!
            )
        } catch (error: any) {
            return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
        }

        const session = event.data.object as Stripe.Checkout.Session

        // We use the service role key to bypass RLS in webhooks
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        if (event.type === "checkout.session.completed") {
            const anySub: any = await stripe.subscriptions.retrieve(
                session.subscription as string
            );

            if (anySub.deleted) {
                return new NextResponse("Subscription is deleted", { status: 400 })
            }

            if (!session?.metadata?.userId) {
                return new NextResponse("User ID missing in metadata", { status: 400 })
            }

            // Update user profile to pro
            const interval = session?.metadata?.interval // 'monthly' config
            const plan_type = interval === 'annual' ? 'pro_annual' : 'pro_monthly'

            await supabase
                .from('profiles')
                .update({
                    stripe_customer_id: anySub.customer as string,
                    stripe_subscription_id: anySub.id,
                    stripe_price_id: anySub.items.data[0].price.id,
                    stripe_current_period_end: new Date((anySub['current_period_end'] as number) * 1000).toISOString(),
                    plan_type: plan_type
                })
                .eq('id', session.metadata.userId)
        }

        if (event.type === "invoice.payment_succeeded") {
            const anySub: any = await stripe.subscriptions.retrieve(
                session.subscription as string
            );

            if (anySub.deleted) {
                return new NextResponse("Subscription is deleted", { status: 400 })
            }

            await supabase
                .from('profiles')
                .update({
                    stripe_price_id: anySub.items.data[0].price.id,
                    stripe_current_period_end: new Date((anySub['current_period_end'] as number) * 1000).toISOString(),
                })
                .eq('stripe_subscription_id', anySub.id)
        }

        return new NextResponse(null, { status: 200 })

    } catch (error) {
        console.error(error)
        return new NextResponse("Internal server error", { status: 500 })
    }
}
