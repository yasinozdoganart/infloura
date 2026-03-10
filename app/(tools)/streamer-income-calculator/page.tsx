import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Streamer Income Calculator | Infloura',
    description: 'Calculate streamer revenue across Twitch, YouTube Live, and Kick. Estimate earnings from subscriptions, donations, ads, and sponsorships.',
    openGraph: {
        title: 'Streamer Income Calculator: Twitch, YouTube & Kick',
        description: 'Calculate accurate streamer revenue estimates from subscriptions, donations, and ad payouts.',
        url: 'https://infloura.com/streamer-income-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/streamer-income-calculator',
    },
}

const faqs = [
    {
        question: 'Who pays more: Twitch, YouTube, or Kick?',
        answer: 'For pure subscription revenue splits, Kick pays the most with a 95/5 split in favor of the creator, followed by YouTube Live (70/30), and then Twitch (50/50 for affiliates). However, Twitch has a significantly more developed culture of gifting subs and donating bits, which often offsets the lower split percentage.'
    },
    {
        question: 'How do streamers make money besides subscriptions?',
        answer: 'Streamers generate massive revenue through direct donations (PayPal/Streamlabs), native tipping (Twitch Bits, YouTube SuperChats), running pre-roll and mid-roll advertisements to their live audience, and executing sponsored gaming segments (Bounties) where developers pay them hourly to play a new game.'
    },
    {
        question: 'What is a good CCV (Concurrent Viewers) for sponsorships?',
        answer: 'Brands start taking strong notice around 500-1,000 CCV (Concurrent Viewers). At this level, a streamer has a highly engaged micro-community and can routinely secure $500 to $2,000 per sponsored 2-hour gaming segment.'
    },
    {
        question: 'Should I stream on multiple platforms?',
        answer: 'Multi-streaming (e.g., streaming to Twitch and YouTube simultaneously) has become incredibly popular since Twitch lifted its exclusivity clauses. It is highly recommended for growth, but managing dual-chats and keeping communities engaged across platforms can be exhausting for solo creators.'
    },
]

export default function StreamerIncomeCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/streamer-income-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Streamer Income Calculator',
                    description: 'Calculate live streaming revenue from Twitch, YouTube, Kick, and sponsorships.',
                    url: 'https://infloura.com/streamer-income-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                    Free Livestream Analytics Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Streamer Income <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Whether you are broadcasting on Twitch, YouTube Live, or Kick, find out exactly 
                    how much revenue your CCV (Concurrent Viewers) translates to in reality.
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">The Ecosystem of Livestream Monetization</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Unlike static VOD (Video on Demand) platforms like standard YouTube, livestreaming creates deep, 
                        parasocial relationships over hundreds of hours of live interaction. Because of this high-trust 
                        environment, the <strong>Streamer Income Calculator</strong> model looks vastly different from a 
                        typical influencer&apos;s monetization strategy. The primary drive is community-funded.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Subscriptions: The Baseline</h3>
                    <p>
                        Subscriptions form the reliable foundation of a streamer&apos;s income. Depending on the platform, 
                        the splits differ dramatically:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Kick:</strong> 95/5 split (Creator keeps roughly $4.75 per $4.99 sub). The most aggressive creator-first model currently in the market.</li>
                        <li><strong className="text-white">YouTube Live:</strong> 70/30 split (Creator keeps ~$3.50). Reliable tech infrastructure seamlessly integrated into a creator&apos;s VOD channel.</li>
                        <li><strong className="text-white">Twitch:</strong> 50/50 split for Affiliates, scaling up to 70/30 for top Partners. Despite the lower baseline cut, Twitch produces the highest volume of gifted subs organically.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Donations & "Whales"</h3>
                    <p>
                        While subscriptions act as a baseline salary, spontaneous donations cause income spikes. 
                        In livestreaming culture, there is a phenomenon of viewers affectionately known as "whales." 
                        These are highly affluent community members who occasionally drop $500, $1,000, or even $5,000 
                        in a single donation simply to support the creator and hype the chat. Utilizing third-party 
                        systems like Streamlabs allows streamers to keep 100% of these tips (minus standard 2.9% credit card processing fees), 
                        bypassing the platforms native currencies (like Twitch Bits or YouTube SuperChats, which take roughly 30%).
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Platform Advertisements</h3>
                    <p>
                        Running pre-roll and mid-roll ads used to be discouraged by streamers because they "killed the vibe" 
                        of a live show. Today, however, platforms incentivize streamers with massive ad-bounty programs. 
                        A streamer holding 3,000 Concurrent Viewers (CCV) who agrees to run 3 minutes of ads per hour 
                        can generate thousands of dollars in pure, hands-off ad revenue every single month. Platforms 
                        cater specifically to this revenue model now more than ever.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">#Ad: Sponsored Live Segments</h3>
                    <p>
                        When a new video game or software tool launches, companies spend heavily on livestream influencer marketing. 
                        A game developer might pay a creator to stream their new release for 2 hours with a trackable 
                        download link below the player. Rates for these dedicated live segments usually start around 
                        $0.50 to $1.50 per average CCV per hour. Therefore, a streamer with 2,000 CCV might be paid 
                        $2,000 for a simple 2-hour showcase.
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
                 <Link href="/twitch-income-per-subscriber" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Twitch Sub Earnings</h3>
                     <p className="text-sm text-zinc-400">Deep dive into the 50/50 Twitch splits.</p>
                 </Link>
                 <Link href="/creator-income-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Creator Hub</h3>
                     <p className="text-sm text-zinc-400">Calculate multi-platform revenue projections.</p>
                 </Link>
                 <Link href="/influencer-sponsorship-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Bounty & Sponsorship tool</h3>
                     <p className="text-sm text-zinc-400">Find out how much brands should pay you globally.</p>
                 </Link>
            </section>

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">Scale Your Stream to the Moon</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get detailed 12-month revenue analytics and pitch recommendations on Infloura to secure larger brand deals.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Run a Live Simulation <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
