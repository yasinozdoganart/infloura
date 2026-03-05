import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'TikTok Income Per View – How Much Does TikTok Pay? | Infloura',
    description: 'Discover how much TikTok pays per view through the Creativity Program, brand deals, and TikTok Shop. Free TikTok income estimator by Infloura.',
    openGraph: {
        title: 'TikTok Income Per View – How Much Does TikTok Pay?',
        description: 'Discover how much TikTok pays per view through the Creativity Program and brand deals.',
        url: 'https://infloura.com/tiktok-income-per-view',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: { canonical: 'https://infloura.com/tiktok-income-per-view' },
}

const faqs = [
    { question: 'How much does TikTok pay per view?', answer: 'Through the Creativity Program Beta, TikTok pays approximately $0.50-$1.00 per 1,000 qualified views for videos over 1 minute. The old Creator Fund paid $0.02-$0.04 per 1,000 views. Most TikTok income comes from brand deals and TikTok Shop rather than direct per-view payments.' },
    { question: 'How much is 1 million views on TikTok worth?', answer: 'One million views on TikTok is worth roughly $200-$1,000 through the Creativity Program Beta. From the older Creator Fund, it was only $20-$40. However, 1 million views can be worth $2,000-$10,000+ when factoring in brand deals and TikTok Shop commissions that viral content attracts.' },
    { question: 'Does TikTok pay more than YouTube per view?', answer: 'No, YouTube pays significantly more per view. YouTube averages $3-$5 per 1,000 views, while TikTok Creativity Program pays $0.50-$1 per 1,000 views. However, TikTok videos can go viral more easily, so total earnings from a single video can sometimes exceed YouTube through sheer volume and brand deal opportunities.' },
    { question: 'How do I qualify for TikTok payments?', answer: 'For the Creativity Program Beta: 10,000+ followers, 100,000+ views in last 30 days, 18+ years old, and videos must be over 1 minute. For LIVE gifts: 1,000+ followers and 18+. For TikTok Shop affiliate: no minimum followers. You can start earning through affiliate links at any follower count.' },
]

export default function TikTokIncomePerViewPage() {
    return (
        <CalculatorLayout currentPage="/tiktok-income-per-view">
            <JsonLd type="calculator" data={{ name: 'TikTok Income Per View Calculator', description: 'Calculate how much TikTok pays per view.', url: 'https://infloura.com/tiktok-income-per-view' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                    Free TikTok Revenue Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    TikTok Income{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Per View</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    How much does TikTok actually pay per view? Discover realistic per-view earnings from the Creativity Program, brand deals, and TikTok Shop commissions.
                </p>
            </div>

            <CalculatorWidget platform="tiktok" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Does TikTok Pay Per View?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        TikTok&apos;s per-view payments have evolved significantly since the platform first introduced creator monetization. Unlike YouTube&apos;s established ad-sharing model, TikTok uses multiple payment structures that can be confusing for new creators. Here&apos;s a comprehensive breakdown of what every TikTok view is actually worth.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">TikTok Creator Fund vs. Creativity Program</h3>
                    <p>
                        The original TikTok Creator Fund was widely criticized for its low payouts — just $0.02-$0.04 per 1,000 views. The newer <strong className="text-white">Creativity Program Beta</strong> offers dramatically better rates: $0.50-$1.00 per 1,000 qualified views. The catch? Videos must be longer than 1 minute, and not all views count. TikTok only counts &quot;qualified views&quot; — views where the user watches a meaningful portion of the video.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Average TikTok Earnings Per View by Content Type</h3>
                    <p>Per-view earnings vary based on content category and the monetization methods used:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance & business tips:</strong> $0.80–$1.50 per 1,000 views (Creativity Program)</li>
                        <li><strong className="text-white">Technology reviews:</strong> $0.60–$1.20 per 1,000 views</li>
                        <li><strong className="text-white">Beauty & skincare:</strong> $0.50–$1.00 per 1,000 views</li>
                        <li><strong className="text-white">Comedy & entertainment:</strong> $0.30–$0.80 per 1,000 views</li>
                        <li><strong className="text-white">Dance & trends:</strong> $0.20–$0.50 per 1,000 views</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">TikTok Shop: The Hidden Per-View Revenue</h3>
                    <p>
                        TikTok Shop has become a massive revenue driver that effectively increases per-view income. When viewers purchase products featured in your videos, you earn 5-20% commission. A single viral video with a well-placed product link can generate thousands in affiliate revenue. For product-focused creators, TikTok Shop income often exceeds Creativity Program payments by 5-10×, making the effective per-view rate much higher.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Brand Deals: Where the Real Money Is</h3>
                    <p>
                        While TikTok&apos;s direct per-view payments are lower than YouTube, brand sponsorships can make up for it. Brands typically pay $10-$30 CPM (per 1,000 views) for sponsored TikTok content — 10-30× more than the Creativity Program pays. A creator averaging 100,000 views per video might earn $50-$100 from TikTok directly, but $1,000-$3,000 from a brand sponsorship on that same video.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">LIVE Streaming Income Per View</h3>
                    <p>
                        TikTok LIVE has its own per-view economics. Viewers send virtual gifts that convert to diamonds, which creators cash out at roughly $0.05 per diamond. A LIVE session with 1,000 concurrent viewers typically generates $50-$500 in gifts, depending on audience engagement and the creator&apos;s ability to encourage gifting. The effective per-view rate for LIVE can be significantly higher than regular videos.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Realistic Expectations for Small Creators</h3>
                    <p>
                        New TikTok creators should set realistic expectations about per-view earnings. Building to the 10,000 followers required for the Creativity Program takes most creators 3-6 months of consistent posting. During this period, focus on growing your audience and testing content formats. Start affiliate marketing from day one with bio links. Once eligible for the Creativity Program, create longer-form content (1+ minutes) to maximize per-view payments. For complete 12-month revenue projections, try Infloura&apos;s creator simulation.
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

            <RelatedCalculators currentPage="/tiktok-income-per-view" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0 shadow-lg shadow-cyan-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
