import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Influencer Income Calculator – Estimate Social Media Earnings | Infloura',
    description: 'Estimate influencer income across YouTube, TikTok, and Instagram. Free earnings calculator powered by real industry data — by Infloura.',
    openGraph: {
        title: 'Influencer Income Calculator – Estimate Social Media Earnings',
        description: 'Estimate influencer income across YouTube, TikTok, and Instagram with real industry data.',
        url: 'https://infloura.com/influencer-income-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/influencer-income-calculator',
    },
}

const faqs = [
    {
        question: 'How much do influencers make per month?',
        answer: 'Influencer income varies enormously. Nano-influencers (1K-10K followers) may earn $100-$500/month, while micro-influencers (10K-100K) earn $500-$5,000. Mid-tier influencers (100K-500K) typically make $5,000-$20,000, and top-tier creators (1M+) can earn $50,000-$500,000+ monthly across all revenue streams.'
    },
    {
        question: 'Which platform pays influencers the most?',
        answer: 'YouTube generally pays the most per view through its ad revenue system, with RPMs ranging from $3-$25+. However, Instagram and TikTok creators often earn more through brand deals relative to their following size. The best strategy is to be active on multiple platforms and diversify income streams.'
    },
    {
        question: 'How do influencers calculate their rates?',
        answer: 'Most influencers use a combination of follower count, engagement rate, and niche value to set their rates. A common formula is charging $100 per 10,000 followers for a single post, adjusted for engagement rate and platform. High-engagement, niche creators often charge 2-5× the standard rate.'
    },
    {
        question: 'Can you make a full-time income as an influencer?',
        answer: 'Yes, thousands of creators earn full-time income as influencers. The key is diversifying revenue across ad revenue, brand deals, affiliate marketing, digital products, and memberships. Most full-time creators earn from 3-5 different income streams rather than relying on any single source.'
    },
]

export default function InfluencerIncomeCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/influencer-income-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Influencer Income Calculator',
                    description: 'Estimate influencer income across YouTube, TikTok, and Instagram.',
                    url: 'https://infloura.com/influencer-income-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                    Free Multi-Platform Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Influencer Income{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate your potential earnings across YouTube, TikTok, and Instagram.
                    Compare platforms, explore revenue streams, and find where your content earns the most.
                </p>
            </div>

            {/* Calculator Widget — Multi-platform */}
            <CalculatorWidget platform="multi" />

            {/* SEO Content Section */}
            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Influencer Income Is Calculated</h2>

                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        The influencer economy has grown into a multi-billion dollar industry where creators across
                        all platforms can build sustainable businesses. Understanding how creator income works across
                        different platforms is essential for maximizing your earning potential. Here&apos;s how influencer
                        income breaks down in today&apos;s creator economy.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Multi-Platform Advantage</h3>
                    <p>
                        Today&apos;s most successful influencers don&apos;t rely on a single platform. They repurpose content
                        across YouTube, TikTok, Instagram, and X (Twitter) to maximize reach and revenue. A YouTube
                        video can become TikTok clips, Instagram Reels, and X threads — multiplying your income
                        from the same creative effort. Studies show that multi-platform creators earn 3-5× more than
                        single-platform creators with similar audience sizes.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Revenue Streams Breakdown</h3>
                    <p>
                        Professional influencers typically earn from five key revenue streams:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-300">
                        <li><strong className="text-white">Ad Revenue</strong> — Platform-specific ad programs (YouTube AdSense, TikTok Creator Fund). Typically 15-30% of total income for established creators.</li>
                        <li><strong className="text-white">Brand Sponsorships</strong> — Direct partnerships with brands for sponsored content. Often the largest income source, accounting for 40-60% of total earnings.</li>
                        <li><strong className="text-white">Affiliate Marketing</strong> — Commission-based income from product recommendations. Provides consistent passive income of 10-20% of total earnings.</li>
                        <li><strong className="text-white">Digital Products</strong> — Courses, ebooks, presets, templates. High-margin products that leverage your expertise.</li>
                        <li><strong className="text-white">Memberships & Subscriptions</strong> — Patreon, YouTube memberships, paid communities. Provides predictable recurring revenue.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Platform Comparison</h3>
                    <p>
                        Each platform has its strengths for monetization. YouTube excels at ad revenue with its high RPMs and
                        long-form content format. TikTok offers explosive growth potential and powerful e-commerce integration
                        through TikTok Shop. Instagram remains the king of brand partnerships and lifestyle sponsorships.
                        The key is understanding where your content resonates most and where your specific audience has
                        the highest purchasing power.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Niche Selection Matters</h3>
                    <p>
                        Your content niche is perhaps the single biggest factor in your earning potential. Finance,
                        technology, and business niches command premium brand deal rates because their audiences have
                        higher disposable income. Beauty and fashion creators benefit from strong affiliate and
                        e-commerce opportunities. Entertainment creators often have larger audiences but lower
                        per-view monetization. Choose a niche at the intersection of your passion and market demand.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Industry Benchmarks</h3>
                    <p>
                        According to industry data, the average influencer earning milestones look like this: creators
                        with 10,000 followers typically earn $200-$2,000 per brand deal. At 100,000 followers, rates
                        jump to $2,000-$15,000 per deal. Creators crossing 500,000 followers often earn $10,000-$50,000
                        per sponsorship. These figures vary significantly by niche, engagement rate, and audience demographics.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Plan Your Creator Business</h3>
                    <p>
                        This calculator gives you a quick estimate, but building a sustainable creator business requires
                        deeper analysis. Infloura&apos;s full simulation platform provides 12-month revenue projections,
                        AI-powered growth strategies, and tools to track your actual performance against your goals.
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
            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base"
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
