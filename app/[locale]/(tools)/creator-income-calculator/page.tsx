import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Creator Income Calculator – Estimate Social Media Revenue | Infloura',
    description: 'Estimate your total creator income from ads, sponsorships, and affiliate marketing across all platforms. Free creator revenue calculator by Infloura.',
    openGraph: {
        title: 'Creator Income Calculator – Estimate Social Media Revenue',
        description: 'Estimate your total creator income from ads, sponsorships, and affiliate marketing across all platforms.',
        url: 'https://infloura.com/creator-income-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/creator-income-calculator',
    },
}

const faqs = [
    {
        question: 'How much do content creators make on average?',
        answer: 'Creator income varies enormously. A 2025 study found that full-time creators earn a median of $50,000-$70,000 annually, but the range is vast — from under $1,000 to over $1 million per year. The top 10% of full-time creators earn above $200,000, while beginners often earn under $10,000 in their first year.'
    },
    {
        question: 'What is the best platform for making money as a creator?',
        answer: 'YouTube offers the highest ad revenue per view and long-tail content value. Instagram provides the best brand deal rates relative to following size. TikTok offers the fastest audience growth. Most successful creators use 2-3 platforms, repurposing content to maximize reach and diversify income. The "best" platform depends on your content style and niche.'
    },
    {
        question: 'How long does it take to make money as a creator?',
        answer: 'Most creators start earning small amounts within 3-6 months of consistent posting. Reaching $1,000/month typically takes 6-18 months with regular content production. Full-time income ($3,000-$5,000+/month) usually requires 1-3 years of dedicated work. However, viral moments can accelerate this timeline dramatically.'
    },
    {
        question: 'What skills do successful creators need?',
        answer: 'Beyond content creation skills, successful creators need: basic business and financial literacy, understanding of platform algorithms, email marketing, community building, negotiation skills (for brand deals), and consistency. The most successful creators treat their channel as a business from day one, tracking metrics and optimizing revenue streams.'
    },
]

export default function CreatorIncomeCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/creator-income-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Creator Income Calculator',
                    description: 'Estimate your total creator income from ads, sponsorships, and affiliate marketing.',
                    url: 'https://infloura.com/creator-income-calculator',
                }}
            />
            <JsonLd
                type="howTo"
                data={{
                    name: 'How to use the Creator Income Calculator',
                    description: 'Follow these simple steps to calculate your total creator revenue potential.',
                    steps: [
                        { name: 'Enter Audience Metrics', text: 'Enter your audience metrics and average content performance.' },
                        { name: 'Select Niche', text: 'Select your niche to apply relevant industry CPM and RPM rates.' },
                        { name: 'Choose Location', text: 'Select your target audience country for geographic pay adjustments.' },
                        { name: 'Review Total Income', text: 'Review your total projected income from ads, sponsorships, and affiliates.' }
                    ]
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                    Free Creator Revenue Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Creator Income{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Calculate your total creator income across YouTube, TikTok, and Instagram.
                    Get a comprehensive breakdown of ads, sponsorships, and affiliate revenue for any platform.
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">The Complete Guide to Creator Income</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        The creator economy has grown into a $250 billion industry, with millions of people worldwide
                        earning income through content creation. Whether you&apos;re just starting out or looking to
                        scale your existing creator business, understanding the full landscape of creator monetization
                        is essential for making informed decisions about where to invest your time and effort.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Five Pillars of Creator Income</h3>
                    <p>
                        Professional creators typically build income from five key sources. <strong className="text-white">Ad revenue</strong> provides
                        a baseline through YouTube AdSense, TikTok&apos;s Creativity Program, and similar platform programs.
                        <strong className="text-white"> Brand sponsorships</strong> become the largest income source as audiences grow (typically
                        40-60% of total income for established creators). <strong className="text-white">Affiliate marketing</strong> generates
                        passive income through product recommendations. <strong className="text-white">Digital products</strong> (courses, templates,
                        ebooks) offer the highest margins. <strong className="text-white">Community memberships</strong> provide predictable
                        recurring revenue.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Income by Creator Tier</h3>
                    <p>
                        Creator income roughly correlates with audience size, though engagement and niche matter as much
                        as raw numbers. <strong className="text-white">Nano creators</strong> (1K-10K followers) typically
                        earn $100-$1,000/month. <strong className="text-white">Micro creators</strong> (10K-100K) earn
                        $1,000-$5,000/month. <strong className="text-white">Mid-tier creators</strong> (100K-500K) earn
                        $5,000-$20,000/month. <strong className="text-white">Macro creators</strong> (500K-1M) earn
                        $20,000-$50,000/month. <strong className="text-white">Mega creators</strong> (1M+) can earn
                        $50,000-$500,000+ monthly.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Platform Revenue Comparison</h3>
                    <p>
                        Each platform offers different monetization strengths. YouTube leads in ad revenue with average
                        RPMs of $3-$25+, plus long-tail value where older videos continue earning for years. TikTok
                        excels at rapid audience growth and e-commerce through TikTok Shop. Instagram dominates brand
                        deal revenue with premium sponsorship rates. X (Twitter) and LinkedIn are emerging as monetization
                        platforms for thought leaders and professionals. Smart creators choose platforms based on their
                        content style and target audience.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The 80/20 Rule of Creator Revenue</h3>
                    <p>
                        Most successful creators follow an 80/20 pattern: 80% of their revenue comes from 20% of their
                        efforts. The key is identifying your highest-ROI activities early. For many creators, this means
                        focusing on long-form YouTube content (for ad revenue longevity), building email lists (for product
                        launches), and nurturing relationships with 3-5 recurring brand partners rather than constantly
                        chasing one-off deals.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Tax and Business Considerations</h3>
                    <p>
                        Creator income is self-employment income in most countries, which means higher tax obligations.
                        Smart creators set aside 25-35% of earnings for taxes, form business entities (LLC or similar)
                        for liability protection, track all expenses for deductions, and consider working with an
                        accountant who understands creator businesses. Equipment, software, home office, and travel
                        related to content creation are typically deductible.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Building a Sustainable Creator Business</h3>
                    <p>
                        This calculator gives you a quick revenue estimate based on views and platform. For a complete
                        creator business analysis — including 12-month revenue projections, AI-powered growth strategies,
                        risk assessment, and actionable roadmaps — Infloura&apos;s full simulation platform provides
                        everything you need to turn your creator passion into a structured, scalable business.
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

            <RelatedCalculators currentPage="/creator-income-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 shadow-lg shadow-emerald-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
