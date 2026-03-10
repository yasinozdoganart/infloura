import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Twitch Earnings Per Subscriber Explained | Infloura',
    description: 'Find out exactly how much Twitch streamers earn per subscriber. Decode the 50/50 and 70/30 revenue splits, bits, and ad payouts.',
    openGraph: {
        title: 'Twitch Earnings Per Subscriber Explained',
        description: 'Find out exactly how much Twitch streamers earn per subscriber. Decode the Twitch revenue splits.',
        url: 'https://infloura.com/twitch-income-per-subscriber',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/twitch-income-per-subscriber',
    },
}

const faqs = [
    {
        question: 'How much does a streamer get for a $4.99 sub?',
        answer: 'By default, Twitch Affiliate streamers are on a 50/50 split, meaning they earn approximately $2.50 per Tier 1 ($4.99) sub. Top Partners and those enrolled in the Plus Program can unlock a 70/30 split, earning roughly $3.50 per Tier 1 sub.'
    },
    {
        question: 'Do streamers make money from Prime Gaming subs?',
        answer: 'Yes. When a viewer uses their free monthly Prime Gaming sub, the streamer is paid the exact same base rate as if it were a normal $4.99 Tier 1 subscription (usually $2.50 depending on their split contract).'
    },
    {
        question: 'What is the "Plus Program" on Twitch?',
        answer: 'The Twitch Plus Program (formerly Partner Plus) allows qualifying streamers to earn a 60/40 or 70/30 share of net subscription revenue. To qualify, streamers must maintain a massive baseline of recurring, paid (non-Prime) subscriptions over multiple months.'
    },
    {
        question: 'How much is 100 Bits worth to a streamer?',
        answer: 'Twitch explicitly guarantees that 1 Bit = $0.01 directly to the streamer. Therefore, if a viewer cheers 100 Bits, the streamer earns exactly $1.00. The viewer pays the markup when purchasing the bits from Twitch, so the streamer keep 100% of the bit value cheered.'
    },
]

export default function TwitchIncomePerSubscriberPage() {
    return (
        <CalculatorLayout currentPage="/twitch-income-per-subscriber">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Twitch Subscriber Revenue Calculator',
                    description: 'Estimate comprehensive Twitch streamer earnings based on sub counts, bits, and ad density.',
                    url: 'https://infloura.com/twitch-income-per-subscriber',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                    Free Streamer Finance Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Twitch Earnings{' '}
                    <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                        Per Subscriber
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Decode the complex world of livestreaming payouts. Understand exactly how much money 
                    lands in your bank account for every sub, bit, and hour streamed.
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">The Twitch Monetization Engine</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        For live streamers, building a loyal community that pays a monthly fee is the holy grail. Unlike 
                        YouTube or TikTok—where revenue fluctuates wildly based on daily algorithm performance—Twitch offers 
                        predictable, recurring subscription revenue. But navigating <strong>Twitch earnings per subscriber</strong> 
                        can be confusing due to split agreements, local pricing, and the Plus program.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Standard 50/50 Split (Affiliates)</h3>
                    <p>
                        When you reach Twitch Affiliate status, you unlock the ability for viewers to subscribe to your 
                        channel. A standard Tier 1 subscription costs the viewer $4.99 per month. For the vast majority 
                        of creators, Twitch takes a 50% cut of this transaction. 
                        <strong>This leaves the streamer earning $2.50 per Tier 1 sub.</strong>
                    </p>
                    <p>
                        Tier 2 ($9.99) and Tier 3 ($24.99) subscriptions exist for super-fans. Under the 50/50 split, 
                        streamers earn ~$5.00 for Tier 2 and ~$12.50 for Tier 3 subscriptions.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The 70/30 Tier (Partners & Plus Program)</h3>
                    <p>
                        Historically, top-level Twitch Partners could negotiate custom contracts granting them a 70/30 
                        revenue split, meaning they took home roughly $3.50 per $4.99 sub. To democratize this, Twitch 
                        introduced the Plus Program. Streamers who maintain a minimum of 350 paid subscriber points 
                        (excluding Prime subs) over three consecutive months earn a 70/30 split on all net revenue. 
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Local Subs Pricing</h3>
                    <p>
                        A major variable in calculating per-subscriber income is Local Subscription Pricing. Twitch adjusts 
                        the cost of a $4.99 sub based on the viewer&apos;s country to make it affordable globally. If a viewer in 
                        Mexico subscribes, they might only pay the equivalent of $2.50 USD. Even if the streamer has a 
                        50/50 split, they will only earn $1.25 from that specific Mexican viewer. To calculate your 
                        blended average sub revenue, you must know your audience metrics.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Ad Revenue on Twitch</h3>
                    <p>
                        Subscriber income is great, but Ad Revenue has become increasingly critical. Twitch operates an 
                        Ads Incentive Program (AIP) that guarantees a flat monthly payout if a streamer agrees to run a 
                        fixed density of ads (e.g., 3 minutes of ads per hour). Depending on the CCV (Concurrent Viewers) 
                        and time of year, streamers can earn $3 to $10 RPMs. A streamer averaging 1,000 viewers, streaming 
                        40 hours a month with 3 mins/ad per hour, can easily pull in $1,500+ from ads alone.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Bits and Direct Donations</h3>
                    <p>
                        Subscriptions only tell half the story. The streaming culture revolves heavily around direct tips. 
                        Twitch Bits are clear-cut: 1 Bit = $0.01 to the creator. Third-party donation tools (like Streamlabs) 
                        are even better; the creator keeps 100% of the tip minus mild PayPal/Stripe processing fees. 
                        Often, a streamer with 500 active subscribers will generate an equivalent amount of revenue again 
                        just from Bits and tips.
                    </p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                                {faq.question}
                                <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                 <Link href="/streamer-income-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Streamer Income Tools</h3>
                     <p className="text-sm text-zinc-400">Calculate blended live streaming payouts.</p>
                 </Link>
                 <Link href="/influencer-sponsorship-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Sponsorship Estimator</h3>
                     <p className="text-sm text-zinc-400">Find out how much brands should pay you.</p>
                 </Link>
                 <Link href="/creator-income-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Creator Hub</h3>
                     <p className="text-sm text-zinc-400">Combine YT Videos and Livestream income.</p>
                 </Link>
            </section>

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">Professionalize Your Creator Business</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Stop guessing. Get detailed 12-month revenue analytics and AI strategies to boost your RPM on Infloura.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Try the Infloura Simulator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
