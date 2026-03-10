import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'TikTok Earnings Calculator – Estimate Creator Revenue | Infloura',
    description: 'Estimate TikTok creator earnings from the Creativity Program, brand deals, TikTok Shop, and LIVE gifts. Free earnings calculator by Infloura.',
    openGraph: {
        title: 'TikTok Earnings Calculator – Estimate Creator Revenue',
        description: 'Estimate TikTok creator earnings from the Creativity Program, brand deals, and TikTok Shop.',
        url: 'https://infloura.com/tiktok-earnings-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/tiktok-earnings-calculator',
    },
}

const faqs = [
    {
        question: 'How much does TikTok pay per 1 million views?',
        answer: 'Through the Creator Fund, TikTok pays roughly $20-$50 per million views. However, the newer Creativity Program Beta pays significantly more — around $200-$1,000 per million views for longer-form content (1+ minutes). Most creator income on TikTok comes from brand deals and affiliate marketing rather than direct platform payments.'
    },
    {
        question: 'What is the TikTok Creativity Program?',
        answer: 'The TikTok Creativity Program Beta replaced the old Creator Fund for eligible creators. It pays higher rates for original content over 1 minute long. Creators report earning 5-20x more per view compared to the old Creator Fund. Eligibility requires 10K+ followers, 100K+ views in 30 days, and being 18+.'
    },
    {
        question: 'How much do TikTok brand deals pay?',
        answer: 'TikTok brand deal rates depend on follower count and engagement. Nano-influencers (10K-50K) typically earn $200-$1,000 per sponsored video. Mid-tier creators (100K-500K) earn $1,000-$5,000. Top creators (1M+) can command $5,000-$50,000+ per video. Engagement rate and niche relevance are key factors.'
    },
    {
        question: 'Can you make money on TikTok without followers?',
        answer: 'TikTok\'s algorithm can push videos to millions regardless of follower count, but monetization features require minimum thresholds. You need 10,000 followers for the Creativity Program and 1,000 for LIVE gifts. However, you can earn through affiliate links in your bio from day one, and viral videos can lead to brand outreach at any follower count.'
    },
]

export default function TikTokEarningsCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/tiktok-earnings-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'TikTok Earnings Calculator',
                    description: 'Estimate TikTok creator earnings from Creativity Program, brand deals, and TikTok Shop.',
                    url: 'https://infloura.com/tiktok-earnings-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                    Free TikTok Revenue Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    TikTok Earnings{' '}
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate your TikTok earnings from the Creativity Program, brand deals, TikTok Shop commissions,
                    and LIVE gifts. Get a complete breakdown of your potential revenue.
                </p>
            </div>

            <CalculatorWidget platform="tiktok" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How TikTok Creator Earnings Work in 2026</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        TikTok&apos;s creator monetization landscape has evolved dramatically. The platform now offers
                        multiple revenue streams beyond the original Creator Fund, making it increasingly viable as
                        a primary income source for professional content creators. Here&apos;s a comprehensive breakdown
                        of every way to earn on TikTok.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Creativity Program Beta</h3>
                    <p>
                        TikTok&apos;s Creativity Program replaced the Creator Fund with significantly better payouts.
                        Creators report earning $0.50-$1.00 per 1,000 qualified views on videos longer than 1 minute —
                        a massive improvement over the Creator Fund&apos;s $0.02-$0.05 range. The program rewards
                        original, longer-form content that keeps viewers engaged. To qualify, creators need 10,000+
                        followers and 100,000+ video views in the past 30 days.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">TikTok Shop: The E-Commerce Revolution</h3>
                    <p>
                        TikTok Shop has transformed the platform into a powerful e-commerce engine. Creators can sell
                        products directly in their videos, earning commissions of 5-20% per sale. The &quot;TikTok made
                        me buy it&quot; trend has proven the platform&apos;s massive buying intent. Top TikTok Shop
                        affiliates report earning $5,000-$50,000+ monthly from product commissions alone, making it
                        one of the fastest-growing income streams in the creator economy.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Brand Partnerships and Sponsored Content</h3>
                    <p>
                        Brand deals remain TikTok&apos;s most lucrative monetization method for established creators.
                        TikTok&apos;s unique algorithm means that sponsored content can reach millions organically,
                        making it attractive for brands. Rates are typically calculated per-video rather than per-impression,
                        with most creators charging based on a combination of follower count, average view count, and
                        engagement rate. The platform&apos;s Creator Marketplace helps connect brands with relevant creators.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">LIVE Streaming and Virtual Gifts</h3>
                    <p>
                        TikTok LIVE allows creators to receive virtual gifts from viewers, convertible to real money.
                        Successful live streamers can earn $100-$5,000+ per session. The key to LIVE monetization is
                        consistency and community building. Interactive content like Q&As, tutorials, and entertainment
                        performances generate the most gifts. TikTok takes approximately 50% of gift revenue.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Content Strategy for Maximum Earnings</h3>
                    <p>
                        The highest-earning TikTok creators combine multiple revenue streams. A typical breakdown looks
                        like: 40% brand deals, 25% TikTok Shop, 20% Creativity Program, and 15% LIVE gifts and other
                        sources. The key is creating content that serves both the algorithm (for views) and brands (for
                        partnerships). Niches like finance, tech, and beauty offer the best monetization opportunities.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Full Revenue Projection</h3>
                    <p>
                        This calculator provides quick estimates based on industry data. For detailed 12-month projections
                        with AI-powered growth strategies tailored to your specific niche and audience, try Infloura&apos;s
                        full creator simulation platform.
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

            <RelatedCalculators currentPage="/tiktok-earnings-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-teal-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
