import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Instagram Reels Earnings Calculator | Infloura',
    description: 'Calculate how much money you can make from Instagram Reels. Estimate monetization via Views, Bonuses, and Brand Sponsorships per reel.',
    openGraph: {
        title: 'Instagram Reels Earnings Calculator',
        description: 'Calculate how much money you can make from Instagram Reels views and sponsorships.',
        url: 'https://infloura.com/instagram-income-per-reel',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/instagram-income-per-reel',
    },
}

const faqs = [
    {
        question: 'Does Instagram pay you directly for Reels views?',
        answer: 'Unlike YouTube AdSense, Instagram does not have a native rev-share program for every Reel. Historically, they offered the "Reels Play Bonus" program, which paid creators directly for hitting monthly view targets, but this program is invite-only and frequently paused or altered by Meta.'
    },
    {
        question: 'How much do brands pay to sponsor one Instagram Reel?',
        answer: 'Brand sponsorships for Reels are incredibly lucrative. A micro-influencer (10k-50k followers) might charge $200-$800 per Reel. A macro-influencer (500k-1M followers) can easily charge $5,000 to $15,000 for a single dedicated sponsored 30-second Reel.'
    },
    {
        question: 'Are Instagram Reels better for making money than TikToks?',
        answer: 'Generally, yes. While TikTok might offer more raw, unpredictable virality, Instagram demographics are older and have higher disposable income. Advertisers know this, leading to significantly higher sponsorship rates on Instagram (often 2x-3x higher than a comparable TikTok integration).'
    },
    {
        question: 'Can you use affiliate links with Instagram Reels?',
        answer: 'Yes, but direct links aren\'t clickable in the Reel caption. Creators monetize views by directing users to "Comment LINK to get it" (using automation tools like ManyChat) or pointing them to an affiliate link repository in their bio (Linktree).'
    },
]

export default function InstagramIncomePerReelPage() {
    return (
        <CalculatorLayout currentPage="/instagram-income-per-reel">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Instagram Reels Earnings Calculator',
                    description: 'Estimate your revenue from a single Instagram Reel via brand sponsorships and bonuses.',
                    url: 'https://infloura.com/instagram-income-per-reel',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                    Free IG Monetization Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Instagram Reels <br />
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        Earnings Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Short form video is dominating Instagram. Find out exactly how much a single 
                    viral Reel is worth to brands, sponsors, and affiliate partners.
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How To Calculate Earnings From A Reel</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Instagram revolutionized its platform to push Reels above static posts and stories. 
                        As organic reach for photos plummeted, video reach exploded. But when it comes to figuring 
                        out the actual <strong>Instagram Reels earnings</strong>, many creators are left confused. 
                        Because Meta does not offer a standardized "pay per view" feature to all creators globally, 
                        the value of a Reel is entirely dependent on how you leverage that attention off-app.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Native Monetization: The Reels Play Bonus</h3>
                    <p>
                        In an attempt to stop creators from migrating to TikTok, Instagram introduced various Bonus programs 
                        over the years. When active, these invite-only programs would pay creators for accumulating views 
                        over a 30-day period. However, the payouts were notoriously unstable. A creator might earn $1,200 
                        for millions of views one month, and be offered a cap of $100 the next. You cannot build a 
                        predictable business relying on Meta&apos;s native bonus payouts.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorships: The True Value of a Reel</h3>
                    <p>
                        The real money on Instagram lies in User Generated Content (UGC) and dedicated brand deals. 
                        A Reel is the perfect format for native advertising. Here are average sponsorship rates per Reel 
                        based on your follower count:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Nano-influencers (1k-10k):</strong> $50 – $250 per Reel</li>
                        <li><strong className="text-white">Micro-influencers (10k-50k):</strong> $250 – $1,000 per Reel</li>
                        <li><strong className="text-white">Mid-tier influencers (50k-500k):</strong> $1,000 – $5,000 per Reel</li>
                        <li><strong className="text-white">Macro-influencers (500k-1M+):</strong> $5,000 – $15,000+ per Reel</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximizing Reel Engagement for Brands</h3>
                    <p>
                        A brand paying you $2,000 for a sponsored Reel doesn&apos;t just care about the views. 
                        They care about conversions. If you want to justify high rates, you need to prove your audience 
                        takes action. The most successful Instagram earners use the "ManyChat" method—telling viewers 
                        "Comment the word LINK and I'll DM you the exact product I used." This drives massive algorithmic 
                        engagement (boosting the view count) while providing the brand with provable sales metrics.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Affiliate Sales via Reels</h3>
                    <p>
                        If you don&apos;t have brand deals yet, you can still monetize every Reel using affiliate programs 
                        like Amazon Storefront, LTK (LikeToKnowIt), or software affiliates. A Reel showcasing a 
                        "life hack" product that hits 500,000 views can easily generate $2,000 in passive affiliate 
                        commissions overnight if the audience is funneled correctly to the bio link.
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
                 <Link href="/instagram-money-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">IG Money Calculator</h3>
                     <p className="text-sm text-zinc-400">Calculate total monthly profile earnings.</p>
                 </Link>
                 <Link href="/influencer-income-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Influencer Earnings</h3>
                     <p className="text-sm text-zinc-400">Estimate holistic cross-platform revenue.</p>
                 </Link>
                 <Link href="/influencer-sponsorship-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Sponsorship Pricing</h3>
                     <p className="text-sm text-zinc-400">Figure out your exact rate card for brands.</p>
                 </Link>
            </section>

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">Turn Your Audience Into A Business</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get detailed 12-month revenue projections and AI-optimized strategy reports specifically for Instagram creators.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Run Profile Simulation <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
