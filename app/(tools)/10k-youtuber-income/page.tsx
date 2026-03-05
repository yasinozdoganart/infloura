import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: '10K YouTuber Income – How Much Do 10K Subscriber Channels Earn? | Infloura',
    description: 'Discover how much YouTubers with 10,000 subscribers earn per month. Realistic income breakdown including ads, sponsorships, and affiliates for 10K channels.',
    openGraph: { title: '10K YouTuber Income – How Much Do 10K Sub Channels Earn?', description: 'Realistic income breakdown for 10K subscriber YouTube channels.', url: 'https://infloura.com/10k-youtuber-income', siteName: 'Infloura', type: 'website' },
    alternates: { canonical: 'https://infloura.com/10k-youtuber-income' },
}

const faqs = [
    { question: 'How much does a YouTuber with 10K subscribers make?', answer: 'A YouTuber with 10,000 subscribers typically earns $200-$1,500 per month from all revenue sources. Ad revenue alone usually generates $100-$500/month, while occasional sponsorships add $200-$1,000 per deal. Income varies greatly by niche — a 10K finance channel can earn 3-5x more than a 10K gaming channel.' },
    { question: 'Can you get sponsors at 10K subscribers?', answer: 'Yes! 10,000 subscribers is a key milestone for sponsorships. Small and mid-size brands actively seek micro-influencers at this level because of their higher engagement rates. Expect $200-$1,000 per sponsored video depending on your niche and engagement. Join platforms like Grin, AspireIQ, or reach out to brands directly.' },
    { question: 'How many views does a 10K subscriber channel get?', answer: 'A healthy 10K subscriber channel typically gets 1,000-5,000 views per video in the first 48 hours, with 5,000-15,000 total views within a month. The subscriber-to-view ratio is usually 10-30%. Channels with strong thumbnails and SEO can exceed this significantly through search and suggested traffic.' },
    { question: 'How long does it take to reach 10K subscribers?', answer: 'The average channel takes 12-24 months to reach 10,000 subscribers with consistent weekly uploads. Channels in trending niches with strong SEO can reach it in 6-12 months. The key factors are upload consistency, content quality, thumbnail optimization, and targeting searchable topics in your niche.' },
]

export default function TenKYoutuberIncomePage() {
    return (
        <CalculatorLayout currentPage="/10k-youtuber-income">
            <JsonLd type="calculator" data={{ name: '10K YouTuber Income Calculator', description: 'Calculate income for YouTube channels with 10,000 subscribers.', url: 'https://infloura.com/10k-youtuber-income' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">10K Milestone Income Data</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    10K YouTuber{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Income</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">How much do YouTubers with 10,000 subscribers actually earn? Get realistic income expectations for the 10K milestone with detailed revenue breakdowns.</p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Does a 10K Subscriber YouTuber Earn?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>Reaching 10,000 subscribers is a significant YouTube milestone — it marks the transition from hobbyist to serious creator. At this level, real monetization opportunities begin opening up beyond basic AdSense. Let&apos;s break down exactly what a 10K subscriber channel can expect to earn.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Monthly Income Breakdown at 10K Subscribers</h3>
                    <p>A typical 10K subscriber channel with weekly uploads sees the following monthly revenue:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Ad revenue (AdSense):</strong> $100–$500/month (based on 20K-60K monthly views)</li>
                        <li><strong className="text-white">Sponsorships:</strong> $200–$1,000/month (1-2 deals per month)</li>
                        <li><strong className="text-white">Affiliate marketing:</strong> $50–$300/month (product links in descriptions)</li>
                        <li><strong className="text-white">Total range:</strong> $200–$1,500/month</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">10K Income by Niche</h3>
                    <p>Content niche creates significant income variation at the 10K level:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance/investing:</strong> $600–$2,000/month — High CPMs + premium sponsorships</li>
                        <li><strong className="text-white">Tech/software:</strong> $400–$1,500/month — Good affiliate programs + brand deals</li>
                        <li><strong className="text-white">Education:</strong> $300–$1,000/month — Course selling potential + moderate ads</li>
                        <li><strong className="text-white">Fitness:</strong> $200–$800/month — Supplement sponsors + moderate ads</li>
                        <li><strong className="text-white">Gaming:</strong> $100–$500/month — Low CPMs but growing audience</li>
                        <li><strong className="text-white">Vlogs/entertainment:</strong> $100–$400/month — Low CPMs, less sponsorship demand</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Unlocking Sponsorships at 10K</h3>
                    <p>The 10K milestone is when brand partnerships become realistic. At this subscriber count, brands see you as a credible micro-influencer with real audience trust. To attract sponsors: create a professional media kit with your demographics and engagement metrics, join influencer platforms, reach out proactively to brands you already use, and price your first deals competitively to build a portfolio of case studies.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximizing Revenue at 10K Subscribers</h3>
                    <p>Smart 10K creators focus on three key strategies: first, <strong className="text-white">optimize ad revenue</strong> by making videos over 8 minutes with strong retention for mid-roll ads. Second, <strong className="text-white">actively pursue sponsorships</strong> — don&apos;t wait for brands to find you, reach out to 5-10 relevant brands per month. Third, <strong className="text-white">build affiliate income</strong> by recommending products you genuinely use in every relevant video.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Path from 10K to 50K</h3>
                    <p>Most channels that reach 10K subscribers can grow to 50K within 6-18 months by maintaining consistency and improving content quality. The income jump from 10K to 50K is typically 3-5× as sponsorship rates increase and ad revenue compounds. Focus on search-optimized content, collaboration with similar-sized channels, and building a content series that encourages binge-watching.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Plan Your 10K Creator Income</h3>
                    <p>Want to see detailed revenue projections for your 10K channel? Infloura&apos;s creator simulation provides 12-month forecasts based on your specific niche, upload frequency, and audience demographics — helping you plan when YouTube can become a meaningful income source.</p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">{faqs.map((faq, i) => (<details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"><summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">{faq.question}<span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span></summary><p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p></details>))}</div>
            </section>

            <RelatedCalculators currentPage="/10k-youtuber-income" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 shadow-lg shadow-emerald-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
