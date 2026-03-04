import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
    try {
        const { priceId, interval } = await req.json()

        const supabase = await createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()

        let customerId = profile?.stripe_customer_id

        if (!customerId) {
            const customer = await stripe.customers.create({
                email: user.email,
                metadata: {
                    supabaseUUID: user.id
                }
            })
            customerId = customer.id
            await supabase.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id)
        }

        const origin = req.headers.get("origin") || 'http://localhost:3000'

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: `${origin}/settings?success=true`,
            cancel_url: `${origin}/settings?canceled=true`,
            customer: customerId,
            mode: 'subscription',
            billing_address_collection: 'auto',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                }
            ],
            metadata: {
                userId: user.id,
                interval: interval
            }
        })

        return NextResponse.json({ url: stripeSession.url })
    } catch (error) {
        console.error("[STRIPE_CHECKOUT]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
