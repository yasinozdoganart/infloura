import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { createClient } from "@supabase/supabase-js"

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            return new NextResponse("Webhook secret not configured", { status: 500 })
        }

        const body = await req.text()
        const headersList = await headers()
        const signature = headersList.get("Stripe-Signature") as string

        if (!signature) {
            return new NextResponse("No signature found", { status: 400 })
        }

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(
                body,
                signature,
                process.env.STRIPE_WEBHOOK_SECRET
            )
        } catch (error: any) {
            return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
        }

        const session = event.data.object as Stripe.Checkout.Session

        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            return new NextResponse("Database configuration missing", { status: 500 })
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY
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
