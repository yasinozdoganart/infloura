import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'YouTube Income Per View – How Much Do You Earn Per View? | Infloura',
    description: 'Estimate how much YouTubers earn per view using Infloura\'s creator income simulator. Learn realistic revenue ranges and monetization strategies.',
    openGraph: {
        title: 'YouTube Income Per View – How Much Do You Earn Per View?',
        description: 'Estimate how much YouTubers earn per view. Learn realistic revenue ranges and monetization strategies.',
        url: 'https://infloura.com/youtube-income-per-view',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/youtube-income-per-view',
    },
}

const faqs = [
    {
        question: 'How much does YouTube pay per 1 view?',
        answer: 'YouTube pays approximately $0.003 to $0.005 per view on average, but this varies dramatically. A finance channel might earn $0.02-$0.05 per view, while a gaming channel might earn $0.001-$0.003. The actual amount depends on your niche, audience geography, ad engagement rate, and video length.'
    },
    {
        question: 'How much is 1 million views on YouTube worth?',
        answer: 'One million views on YouTube is worth approximately $3,000-$5,000 on average from AdSense alone. High-CPM niches like finance can earn $15,000-$30,000 per million views, while entertainment content might earn $1,000-$3,000. Adding sponsorships and affiliate revenue can double or triple these figures.'
    },
    {
        question: 'Why do some YouTubers earn more per view than others?',
        answer: 'Earnings per view depend on several factors: content niche (finance and tech pay highest CPMs), audience location (US/UK/CA viewers generate 5-10x more ad revenue than developing markets), video length (8+ minute videos allow mid-roll ads), audience retention (longer watch time = more ads shown), and seasonality (Q4 pays 2-3x more).'
    },
    {
        question: 'Can you earn money with low view counts on YouTube?',
        answer: 'Yes, but primarily through sponsorships and affiliate marketing rather than ad revenue. A channel with 10,000 views per video in a high-value niche like software or finance can earn $500-$2,000 per sponsored video. Niche expertise and engaged audiences are more valuable than raw view counts for brand partnerships.'
    },
]

export default function YouTubeIncomePerViewPage() {
    return (
        <CalculatorLayout currentPage="/youtube-income-per-view">
            <JsonLd
                type="calculator"
                data={{
                    name: 'YouTube Income Per View Calculator',
                    description: 'Calculate how much YouTubers earn per view based on niche, audience, and content type.',
                    url: 'https://infloura.com/youtube-income-per-view',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                    Free YouTube Revenue Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube Income{' '}
                    <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                        Per View
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    How much do YouTubers actually earn per view? Estimate your YouTube income based on
                    views, content niche, and audience location with real industry data.
                </p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Does YouTube Pay Per View?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Understanding YouTube income per view is essential for any creator planning their content
                        strategy. The short answer is that YouTube pays between <strong className="text-white">$0.003
                            and $0.05 per view</strong>, depending on multiple factors. But the reality is far more nuanced
                        than a single number. Let&apos;s break down everything that determines your per-view earnings.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The YouTube Revenue Model Explained</h3>
                    <p>
                        YouTube&apos;s primary revenue model for creators is through the YouTube Partner Program (YPP).
                        When viewers watch your monetized videos, YouTube shows them ads. Advertisers pay YouTube based
                        on CPM (cost per thousand ad impressions), and YouTube shares 55% of that revenue with you.
                        The remaining 45% goes to YouTube. This means your per-view income is directly tied to how
                        much advertisers are willing to pay to reach your specific audience.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Average YouTube Earnings Per View by Niche</h3>
                    <p>
                        Content niche is the single biggest factor in per-view earnings. Here&apos;s what creators
                        typically earn per view across popular niches:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance & investing:</strong> $0.02–$0.05 per view</li>
                        <li><strong className="text-white">Technology & software:</strong> $0.01–$0.03 per view</li>
                        <li><strong className="text-white">Education & tutorials:</strong> $0.008–$0.02 per view</li>
                        <li><strong className="text-white">Health & fitness:</strong> $0.005–$0.015 per view</li>
                        <li><strong className="text-white">Travel & lifestyle:</strong> $0.004–$0.012 per view</li>
                        <li><strong className="text-white">Gaming:</strong> $0.002–$0.005 per view</li>
                        <li><strong className="text-white">Entertainment & comedy:</strong> $0.001–$0.004 per view</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Why Geography Matters for Per-View Income</h3>
                    <p>
                        Your audience&apos;s location dramatically impacts per-view earnings. Advertisers pay premium rates
                        to reach viewers in high-purchasing-power countries. A view from a US-based viewer generates
                        roughly $0.01–$0.03, while the same view from a viewer in India might generate $0.001–$0.003.
                        This 5-10× difference explains why two channels with identical view counts can have vastly
                        different revenue. Channels targeting English-speaking audiences in the US, UK, Canada, and
                        Australia consistently earn the highest per-view rates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Video Length and Ad Placement Impact</h3>
                    <p>
                        Videos longer than 8 minutes unlock mid-roll ad placement, which can increase per-view earnings
                        by 50-100%. A 15-minute video might show 2-3 ads versus just 1 pre-roll ad on a 5-minute video.
                        However, viewer retention matters — if viewers leave before reaching mid-roll ads, those placements
                        generate nothing. The sweet spot is creating engaging content that naturally holds attention for
                        10-20 minutes while delivering value throughout.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Monetization Beyond Ad Revenue</h3>
                    <p>
                        Smart YouTubers don&apos;t rely solely on ad revenue. The most profitable creators earn 2-5×
                        their AdSense income through additional monetization. Sponsorships typically pay $20-$50 CPM
                        (per 1,000 views) — far more than ads. Affiliate marketing adds passive income per video.
                        Channel memberships and Super Chats create recurring revenue. Digital products and courses
                        leverage your audience into high-margin income. Per-view income becomes much higher when
                        all revenue streams are combined.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Realistic Expectations for Small Creators</h3>
                    <p>
                        New creators often overestimate per-view earnings. In your first year, expect lower RPMs as
                        YouTube learns about your audience and optimizes ad placement. Channels with under 10,000
                        subscribers typically earn $1-$3 per 1,000 views. Focus on content quality, audience retention,
                        and niche authority rather than view count. As your channel grows and your audience becomes
                        more defined, per-view earnings naturally increase. For a detailed 12-month revenue projection
                        based on your specific situation, try Infloura&apos;s full simulation tool.
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

            <RelatedCalculators currentPage="/youtube-income-per-view" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.
                </p>
                <Button className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white border-0 shadow-lg shadow-red-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Run Simulation <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
