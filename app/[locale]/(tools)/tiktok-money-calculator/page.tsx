import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'TikTok Money Calculator – Estimate Creator Earnings | Infloura',
    description: 'Calculate how much TikTok creators earn from the Creator Fund, brand deals and affiliate marketing with Infloura\'s free earnings estimator.',
    openGraph: {
        title: 'TikTok Money Calculator – Estimate Creator Earnings',
        description: 'Calculate how much TikTok creators earn from the Creator Fund, brand deals and affiliate marketing.',
        url: 'https://infloura.com/tiktok-money-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/tiktok-money-calculator',
    },
}

const faqs = [
    {
        question: 'How much does TikTok pay per 1,000 views?',
        answer: 'TikTok\'s Creator Fund pays approximately $0.02 to $0.05 per 1,000 views. This is significantly lower than YouTube\'s ad revenue. However, TikTok creators often earn more through brand deals, affiliate marketing, and TikTok Shop commissions, which can dramatically increase their total earnings.'
    },
    {
        question: 'How many followers do you need to make money on TikTok?',
        answer: 'To access TikTok\'s Creator Fund, you need at least 10,000 followers and 100,000 video views in the last 30 days. However, creators with as few as 1,000 followers can earn through brand deals if they have strong engagement rates, especially in profitable niches like finance or beauty.'
    },
    {
        question: 'Can you make a living on TikTok?',
        answer: 'Yes, many creators earn full-time income on TikTok, but rarely from the Creator Fund alone. Successful TikTokers diversify with brand partnerships ($500-$50,000+ per post depending on following), affiliate marketing, TikTok Shop, and driving traffic to their own products or services.'
    },
    {
        question: 'Why do TikTokers earn less per view than YouTubers?',
        answer: 'TikTok videos are shorter, which means fewer ad placements per piece of content. YouTube\'s longer format allows mid-roll ads, increasing revenue per view. Additionally, TikTok\'s ad ecosystem is newer and less mature than YouTube\'s Google AdSense system, resulting in lower advertiser bids.'
    },
]

export default function TikTokMoneyCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/tiktok-money-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'TikTok Money Calculator',
                    description: 'Calculate how much TikTok creators earn from views, brand deals and affiliate marketing.',
                    url: 'https://infloura.com/tiktok-money-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                    Free TikTok Earnings Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    TikTok Money{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate your TikTok earnings from the Creator Fund, brand deals, and affiliate marketing.
                    Calculate your potential income based on views, niche, and audience location.
                </p>
            </div>

            {/* Calculator Widget */}
            <CalculatorWidget platform="tiktok" />

            {/* SEO Content Section */}
            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How TikTok Earnings Work</h2>

                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        TikTok has rapidly become one of the most influential platforms for content creators, but its
                        monetization model differs significantly from YouTube. Understanding these differences is key
                        to maximizing your earnings potential on the platform.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The TikTok Creator Fund</h3>
                    <p>
                        TikTok&apos;s Creator Fund pays creators based on video views, engagement, and content quality.
                        The typical payout ranges from $0.02 to $0.05 per 1,000 views, making it one of the
                        lowest-paying direct monetization programs among major platforms. A video with 1 million views
                        might earn only $20-$50 from the Creator Fund alone. However, TikTok has been evolving its
                        monetization with the Creativity Program Beta, which offers higher payouts for longer-form content.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Brand Deals: The Real Revenue Driver</h3>
                    <p>
                        Brand partnerships are where TikTok creators earn the most. Rates vary dramatically based on
                        follower count and engagement. Micro-influencers (10K-100K followers) typically earn $200-$2,000
                        per sponsored post. Mid-tier creators (100K-1M) command $2,000-$20,000, while
                        mega-influencers can earn $20,000-$100,000+ per collaboration. Engagement rate matters more than
                        raw follower count when brands evaluate creators.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">TikTok Shop and Affiliate Marketing</h3>
                    <p>
                        TikTok Shop has become a massive revenue opportunity for creators who sell products directly
                        through their content. Affiliate commissions typically range from 5-20% per sale, and creators
                        with engaged audiences can generate thousands in monthly affiliate income. Product review and
                        &quot;TikTok made me buy it&quot; style content tends to convert best.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Live Gifts and Virtual Tipping</h3>
                    <p>
                        TikTok Live allows creators to receive virtual gifts from viewers, which can be converted to
                        real money. Top live streamers on TikTok can earn hundreds or even thousands of dollars per
                        session. This revenue stream is particularly popular in entertainment, music, and interactive
                        content niches.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Niche Impact on TikTok Earnings</h3>
                    <p>
                        Your content niche plays a crucial role in determining your earning potential. Finance and
                        business creators earn premium brand deal rates because their audience has higher purchasing power.
                        Beauty and fashion creators benefit from TikTok Shop&apos;s product integration features.
                        Entertainment and comedy creators often have higher view counts but lower per-view monetization.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximize Your TikTok Income</h3>
                    <p>
                        The most successful TikTok creators diversify their income streams rather than relying on any
                        single source. They combine Creator Fund earnings with brand partnerships, affiliate marketing,
                        and driving traffic to external products or services. For a complete analysis of your
                        multi-platform earning potential, try Infloura&apos;s full creator simulation.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details
                            key={i}
                            className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
                        >
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                                {faq.question}
                                <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <RelatedCalculators currentPage="/tiktok-money-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 px-8 py-5 text-base"
                    asChild
                >
                    <Link href="/register">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
