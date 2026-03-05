import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'YouTube RPM Calculator – Calculate Revenue Per Mille | Infloura',
    description: 'Calculate your YouTube RPM (Revenue Per Mille) based on niche, audience location and content type. Free YouTube RPM estimator by Infloura.',
    openGraph: {
        title: 'YouTube RPM Calculator – Calculate Revenue Per Mille',
        description: 'Calculate your YouTube RPM based on niche, audience location and content type.',
        url: 'https://infloura.com/youtube-rpm-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/youtube-rpm-calculator',
    },
}

const faqs = [
    {
        question: 'What is YouTube RPM?',
        answer: 'RPM (Revenue Per Mille) represents your actual earnings per 1,000 video views after YouTube takes its 45% revenue share. Unlike CPM, which measures what advertisers pay, RPM reflects what you actually receive. RPM includes all revenue sources: ads, YouTube Premium, memberships, and Super Chat.'
    },
    {
        question: 'What is a good YouTube RPM?',
        answer: 'A good YouTube RPM varies by niche. Finance and business channels often see $15-$30+ RPM. Tech reviewers average $7-$15. Gaming channels typically earn $2-$5 RPM. Entertainment content ranges from $1-$4. Any RPM above $5 is considered above average across all niches combined.'
    },
    {
        question: 'How can I increase my YouTube RPM?',
        answer: 'To increase RPM: target high-CPM niches (finance, tech, business), create longer videos (8+ minutes for mid-roll ads), optimize for US/UK/CA/AU audiences, improve audience retention rates, avoid copyright claims that limit ad placement, and create content during Q4 when advertiser spending peaks.'
    },
    {
        question: 'Why does YouTube RPM fluctuate?',
        answer: 'RPM fluctuates due to seasonal advertiser spending (highest in Q4, lowest in Q1), changes in audience demographics, video topic variations, ad format availability, and overall market conditions. Holiday seasons typically see 2-3x higher RPMs due to increased advertiser competition.'
    },
]

export default function YouTubeRpmCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/youtube-rpm-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'YouTube RPM Calculator',
                    description: 'Calculate your YouTube RPM based on niche, audience location and content type.',
                    url: 'https://infloura.com/youtube-rpm-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                    Free YouTube RPM Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube RPM{' '}
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Calculate your YouTube Revenue Per Mille (RPM) based on your content niche, audience geography,
                    and channel size. Understand exactly how much you earn per 1,000 views.
                </p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Understanding YouTube RPM</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        YouTube RPM (Revenue Per Mille) is the most important metric for understanding your actual
                        earnings as a creator. Unlike CPM, which shows what advertisers pay YouTube, RPM shows what
                        <strong className="text-white"> you actually receive</strong> per 1,000 views after YouTube&apos;s
                        45% revenue share.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM vs CPM: What&apos;s the Difference?</h3>
                    <p>
                        <strong className="text-white">CPM</strong> (Cost Per Mille) is the price advertisers pay per
                        1,000 ad impressions. <strong className="text-white">RPM</strong> is your take-home revenue per
                        1,000 video views. The key difference: not every view generates an ad impression. Typically,
                        only 40-60% of views are monetized (due to ad blockers, non-monetizable regions, and viewer
                        behavior). So if your CPM is $10, your RPM might be around $4-$6 after YouTube&apos;s cut and
                        non-monetized views.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM by Niche: Industry Benchmarks</h3>
                    <p>
                        Your content niche is the largest factor determining RPM. Finance, insurance, and legal content
                        commands the highest RPMs, often $20-$40+ per 1,000 views. Technology and software reviews
                        average $8-$20. Education and how-to content falls in the $5-$12 range. Gaming and entertainment
                        typically see the lowest RPMs at $1-$5, but make up for it with higher view volumes.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Geographic Impact on RPM</h3>
                    <p>
                        Where your viewers are located dramatically affects your RPM. US audiences generate the highest
                        ad rates, followed by UK, Canada, and Australia. A finance channel with mostly US viewers might
                        see $30+ RPM, while the same content targeting Indian viewers might earn $2-$4 RPM. This is why
                        our calculator includes a country selector — geography can create a 5-10× difference in earnings.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Seasonal RPM Fluctuations</h3>
                    <p>
                        YouTube RPM follows predictable seasonal patterns. Q4 (October-December) sees the highest RPMs
                        as advertisers increase spending for holiday campaigns — expect 2-3× your normal RPM during
                        November and December. January is typically the lowest month as advertiser budgets reset. Q2 and
                        Q3 maintain steady, average RPMs. Smart creators plan their best content for Q4 to capitalize.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">How to Increase Your YouTube RPM</h3>
                    <p>
                        Several strategies can boost your RPM: create longer videos (8+ minutes) to enable mid-roll ads,
                        target high-CPM keywords in your titles and descriptions, grow your audience in premium markets
                        (US, UK, CA), improve audience retention to keep viewers through ads, and avoid content that gets
                        limited or no ads. Consistency in a profitable niche compounds RPM gains over time.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Beyond RPM: Total Creator Revenue</h3>
                    <p>
                        While RPM measures ad revenue efficiency, successful YouTubers don&apos;t rely on ads alone.
                        Sponsorships, affiliate marketing, channel memberships, and digital products can add 2-5×
                        your ad revenue. For a complete picture including all revenue streams and 12-month projections,
                        try Infloura&apos;s full creator simulation.
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

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 shadow-lg shadow-red-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
