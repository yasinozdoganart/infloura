import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'YouTube Money Calculator – Estimate Creator Earnings | Infloura',
    description: 'Estimate how much YouTubers earn based on views, niche and country using Infloura\'s free creator revenue simulator.',
    openGraph: {
        title: 'YouTube Money Calculator – Estimate Creator Earnings',
        description: 'Estimate how much YouTubers earn based on views, niche and country using Infloura\'s free creator revenue simulator.',
        url: 'https://infloura.com/youtube-money-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/youtube-money-calculator',
    },
}

const faqs = [
    {
        question: 'How much does YouTube pay per 1,000 views?',
        answer: 'YouTube pays between $1 and $30 per 1,000 views depending on your niche, audience location, and engagement rate. Finance and tech channels earn the highest RPM, while entertainment content tends to earn less. The average across all niches is around $3-5 per 1,000 views.'
    },
    {
        question: 'How many views do you need to make money on YouTube?',
        answer: 'To join the YouTube Partner Program and start earning ad revenue, you need at least 1,000 subscribers and 4,000 watch hours in the past 12 months. However, you can earn through sponsorships and affiliate marketing with even a small audience if your engagement is high.'
    },
    {
        question: 'What niche pays the most on YouTube?',
        answer: 'Finance, investing, and business niches consistently pay the highest RPM on YouTube, often $15-30+ per 1,000 views. Technology and software review channels also earn well. Education and health content fall in the mid-range, while gaming and entertainment typically have lower RPMs but higher view volumes.'
    },
    {
        question: 'Is this YouTube money calculator accurate?',
        answer: 'This calculator provides estimates based on industry-standard RPM data, niche multipliers, and geographic factors. Actual earnings depend on many variables including your specific audience demographics, watch time, and ad engagement. For more precise projections, try Infloura\'s full creator simulation tool.'
    },
]

export default function YouTubeMoneyCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/youtube-money-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'YouTube Money Calculator',
                    description: 'Estimate how much YouTubers earn based on views, niche and country.',
                    url: 'https://infloura.com/youtube-money-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                    Free YouTube Earnings Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube Money{' '}
                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate how much you could earn on YouTube based on your monthly views,
                    content niche, and audience location. Powered by real industry RPM data.
                </p>
            </div>

            {/* Calculator Widget */}
            <CalculatorWidget platform="youtube" />

            {/* SEO Content Section */}
            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How YouTube Earnings Are Calculated</h2>

                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        YouTube creator earnings come from multiple revenue streams, with ad revenue being the most well-known.
                        Understanding how these income sources work is essential for any creator looking to build a sustainable
                        business on the platform.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM and CPM: The Core Metrics</h3>
                    <p>
                        <strong className="text-white">RPM (Revenue Per Mille)</strong> represents how much you earn per 1,000 views
                        after YouTube takes its 45% cut. This is the most accurate measure of your actual earnings.
                        <strong className="text-white"> CPM (Cost Per Mille)</strong> is what advertisers pay per 1,000 ad impressions —
                        a metric that varies dramatically based on your audience&apos;s demographics, location, and the season.
                    </p>
                    <p>
                        The average YouTube RPM ranges from $1 to $30+, with most creators falling between $3 and $8.
                        Finance channels in the US can see RPMs above $25, while entertainment content in developing markets
                        may earn under $1 per 1,000 views.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Ad Revenue: Your Foundation</h3>
                    <p>
                        Google AdSense powers YouTube&apos;s ad revenue system. Once you join the YouTube Partner Program
                        (1,000 subscribers + 4,000 watch hours), ads are displayed on your videos. Your earnings depend on
                        view count, watch time, audience geography, and niche. Longer videos (8+ minutes) can include mid-roll
                        ads, significantly boosting earnings per view.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorships: The Growth Multiplier</h3>
                    <p>
                        Brand sponsorships often become a creator&apos;s largest revenue source as their channel grows.
                        A channel with 100K subscribers can typically charge $2,000-$10,000 per sponsored video, depending
                        on engagement rates and niche relevance. Sponsorship rates are calculated based on your engagement
                        rate, audience demographics, and industry demand. Tech and finance creators command premium rates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Affiliate Marketing: Passive Income</h3>
                    <p>
                        Affiliate links in video descriptions generate commissions when viewers make purchases. Popular
                        programs like Amazon Associates offer 1-10% commissions, while software and digital product affiliates
                        can pay 20-50%. Review channels and tutorial creators typically see the highest affiliate conversion rates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Geographic Impact on Earnings</h3>
                    <p>
                        Your audience&apos;s location significantly affects your RPM. Advertisers pay premium rates for
                        audiences in the United States, United Kingdom, Canada, and Australia. Creators with predominantly
                        US-based audiences can earn 3-5× more per view compared to those with audiences in developing markets.
                        This is why our calculator includes a country multiplier for more accurate estimates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Beyond This Calculator</h3>
                    <p>
                        This free tool gives you a quick estimate based on key factors. For a complete picture of your
                        creator business potential — including 12-month revenue projections, growth modeling, and AI-powered
                        strategy recommendations — try Infloura&apos;s full creator simulation platform.
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

            <RelatedCalculators currentPage="/youtube-money-calculator" />

            {/* Bottom CTA */}
            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
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
