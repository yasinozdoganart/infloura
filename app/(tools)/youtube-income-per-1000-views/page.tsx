import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'YouTube Income Per 1000 Views – CPM & RPM Explained | Infloura',
    description: 'Learn how much YouTube pays per 1,000 views. Understand CPM vs RPM, niche rates, and how to maximize your YouTube earnings per mille.',
    openGraph: {
        title: 'YouTube Income Per 1000 Views – CPM & RPM Explained',
        description: 'Learn how much YouTube pays per 1,000 views. CPM vs RPM, niche rates, and more.',
        url: 'https://infloura.com/youtube-income-per-1000-views',
        siteName: 'Infloura', type: 'website',
    },
    alternates: { canonical: 'https://infloura.com/youtube-income-per-1000-views' },
}

const faqs = [
    { question: 'How much does YouTube pay per 1,000 views?', answer: 'YouTube pays an average of $3-$5 per 1,000 views (RPM) across all niches. However, this varies dramatically: finance channels earn $15-$30 per 1,000 views, tech channels earn $7-$15, while gaming and entertainment channels earn $1-$4. Your audience geography and video length also significantly impact this rate.' },
    { question: 'What is the difference between CPM and RPM?', answer: 'CPM (Cost Per Mille) is what advertisers pay YouTube per 1,000 ad impressions. RPM (Revenue Per Mille) is what you actually earn per 1,000 video views after YouTube\'s 45% cut and accounting for non-monetized views. RPM is always lower than CPM — typically 40-60% of the CPM value.' },
    { question: 'Why is my YouTube RPM so low?', answer: 'Common reasons for low RPM: your audience is primarily in low-CPM countries, your niche has low advertiser demand, your videos are too short for mid-roll ads, many viewers use ad blockers, or you have limited advertiser-friendly content. Improving any of these factors can increase your per-1,000-view earnings.' },
    { question: 'How can I increase my YouTube income per 1,000 views?', answer: 'Key strategies: create content in high-CPM niches, target US/UK/CA audiences, make videos 8+ minutes for mid-roll ads, improve audience retention so viewers watch through ads, avoid demonetization triggers, and publish during Q4 when advertiser spending peaks.' },
]

export default function YouTubeIncomePer1000ViewsPage() {
    return (
        <CalculatorLayout currentPage="/youtube-income-per-1000-views">
            <JsonLd type="calculator" data={{ name: 'YouTube Income Per 1000 Views Calculator', description: 'Calculate YouTube earnings per 1,000 views by niche and country.', url: 'https://infloura.com/youtube-income-per-1000-views' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">Free YouTube CPM/RPM Tool</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube Income Per{' '}
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">1,000 Views</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    How much does YouTube pay per 1,000 views? Understand CPM, RPM, and realistic per-mille earnings across every content niche and audience geography.
                </p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">YouTube Earnings Per 1,000 Views: The Complete Breakdown</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        The question &quot;how much does YouTube pay per 1,000 views?&quot; is one of the most searched topics in the creator economy. The answer involves understanding two key metrics: <strong className="text-white">CPM</strong> (what advertisers pay) and <strong className="text-white">RPM</strong> (what you actually earn). Let&apos;s demystify YouTube&apos;s per-1,000-view payment structure.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">CPM vs RPM: Understanding the Difference</h3>
                    <p>
                        <strong className="text-white">CPM (Cost Per Mille)</strong> represents what advertisers pay YouTube for 1,000 ad impressions. This number can be misleadingly high because it doesn&apos;t account for YouTube&apos;s revenue share or non-monetized views. <strong className="text-white">RPM (Revenue Per Mille)</strong> is the metric that actually matters to creators — it shows your take-home earnings per 1,000 video views after YouTube takes its 45% cut. If your CPM is $10, your RPM might be $4-$6 after YouTube&apos;s share and accounting for the fact that not every view generates an ad impression.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM by Content Niche (Per 1,000 Views)</h3>
                    <p>Here&apos;s what creators actually earn per 1,000 views across the most popular YouTube niches:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Personal finance & investing:</strong> $15–$30 per 1,000 views</li>
                        <li><strong className="text-white">Business & entrepreneurship:</strong> $12–$25 per 1,000 views</li>
                        <li><strong className="text-white">Technology & software:</strong> $7–$15 per 1,000 views</li>
                        <li><strong className="text-white">Education & how-to:</strong> $5–$12 per 1,000 views</li>
                        <li><strong className="text-white">Health & fitness:</strong> $4–$10 per 1,000 views</li>
                        <li><strong className="text-white">Travel & lifestyle:</strong> $3–$8 per 1,000 views</li>
                        <li><strong className="text-white">Gaming:</strong> $2–$5 per 1,000 views</li>
                        <li><strong className="text-white">Entertainment & vlogs:</strong> $1–$4 per 1,000 views</li>
                        <li><strong className="text-white">Music:</strong> $0.50–$2 per 1,000 views</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Geographic Impact on Per-1,000-View Earnings</h3>
                    <p>
                        Viewer location creates enormous differences in per-1,000-view income. US audiences command the highest CPMs, followed by UK, Canada, Australia, and Western Europe. A finance video watched 1,000 times by US viewers might earn $25-$30, while the same video watched by viewers in Southeast Asia might earn $2-$4. This is because advertisers allocate budgets based on the purchasing power of the audience being reached.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Seasonal Fluctuations in Per-1,000-View Rates</h3>
                    <p>
                        YouTube RPM follows predictable seasonal patterns tied to advertiser spending cycles. <strong className="text-white">Q4 (October-December)</strong> sees the highest per-1,000-view rates as brands increase holiday spending — expect 2-3× your normal RPM. <strong className="text-white">January</strong> typically drops 40-60% as advertiser budgets reset. Q2 and Q3 maintain steady average rates. Smart creators publish their highest-quality content during Q4 to maximize per-view earnings.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Video Length and Ad Density</h3>
                    <p>
                        Videos over 8 minutes can include mid-roll ads, potentially doubling your per-1,000-view income. A 15-minute video might show a pre-roll, 2 mid-rolls, and a post-roll ad — significantly more revenue per view than a 5-minute video with only a pre-roll ad. However, forcing longer content risks lower retention, which can hurt algorithmic recommendations. The sweet spot is engaging 10-20 minute content where length serves the topic naturally.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Beyond Ads: True Per-1,000-View Value</h3>
                    <p>
                        Ad revenue only tells part of the story. When you factor in sponsorships ($20-$50 per 1,000 views), affiliate income ($5-$15 per 1,000 views), and product mentions, your total effective RPM can be 3-5× higher than AdSense alone. For a complete revenue analysis including all income streams with 12-month projections, try Infloura&apos;s full creator simulation platform.
                    </p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">{faq.question}<span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <RelatedCalculators currentPage="/youtube-income-per-1000-views" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0 shadow-lg shadow-red-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
