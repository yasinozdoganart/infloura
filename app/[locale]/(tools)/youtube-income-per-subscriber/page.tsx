import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'YouTube Income Per Subscriber – How Much Is Each Sub Worth? | Infloura',
    description: 'Learn how much each YouTube subscriber is worth in revenue. Understand the relationship between subscribers, views, and monthly creator income.',
    openGraph: { title: 'YouTube Income Per Subscriber – How Much Is Each Sub Worth?', description: 'Learn how much each YouTube subscriber is worth in revenue.', url: 'https://infloura.com/youtube-income-per-subscriber', siteName: 'Infloura', type: 'website' },
    alternates: { canonical: 'https://infloura.com/youtube-income-per-subscriber' },
}

const faqs = [
    { question: 'How much is one YouTube subscriber worth?', answer: 'On average, one YouTube subscriber is worth $0.50-$2.00 per year in ad revenue. However, this varies enormously: a finance channel subscriber might be worth $5-$10/year, while a music channel subscriber might be worth $0.10-$0.50/year. Subscribers who actively watch generate the most value through consistent views.' },
    { question: 'Do more subscribers mean more money on YouTube?', answer: 'Not directly — YouTube pays based on views, not subscribers. However, subscribers are your guaranteed audience who see new uploads in their feed and watch regularly. More subscribers generally leads to higher view counts, which leads to more ad revenue. A channel with 100K active subscribers typically earns more than one with 500K inactive subscribers.' },
    { question: 'How much do YouTubers earn per 1,000 subscribers?', answer: 'Per 1,000 active subscribers, YouTubers typically earn $50-$200 per month from ad revenue (assuming each subscriber watches 2-3 videos/month). With sponsorships and affiliate income added, this can increase to $150-$500+ per 1,000 subscribers per month in profitable niches.' },
    { question: 'Is it better to have more subscribers or more views?', answer: 'Views directly generate revenue, but subscribers ensure long-term sustainability. A viral video with 10M views from non-subscribers provides a one-time income spike. 100K loyal subscribers provide consistent monthly views and income. The ideal strategy is building subscribers who actively watch, creating both stability and growth potential.' },
]

export default function YouTubeIncomePerSubscriberPage() {
    return (
        <CalculatorLayout currentPage="/youtube-income-per-subscriber">
            <JsonLd type="calculator" data={{ name: 'YouTube Income Per Subscriber Calculator', description: 'Calculate how much each YouTube subscriber is worth.', url: 'https://infloura.com/youtube-income-per-subscriber' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">Free YouTube Subscriber Value Tool</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube Income Per{' '}
                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Subscriber</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">How much is each YouTube subscriber actually worth? Discover the relationship between subscriber count, view rates, and monthly creator revenue.</p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Is a YouTube Subscriber Worth?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>While YouTube doesn&apos;t pay per subscriber, subscribers are the foundation of a sustainable YouTube business. Understanding the monetary value of each subscriber helps you make smarter decisions about content strategy, audience growth, and revenue optimization. Here&apos;s the data behind subscriber economics.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Subscriber-to-Revenue Formula</h3>
                    <p>The value of a subscriber depends on how many of your videos they watch and your per-view earnings. The typical formula: <strong className="text-white">Subscriber Value = Videos watched/month × Average views-to-revenue × RPM/1000</strong>. An active subscriber who watches 3 videos per month on a channel with $5 RPM generates roughly $0.015 per month or $0.18 per year in ad revenue. On a $20 RPM finance channel, that same subscriber generates $0.06/month or $0.72/year.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Subscriber Value by Niche</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance & investing:</strong> $3–$10 per subscriber per year</li>
                        <li><strong className="text-white">Technology & software:</strong> $2–$6 per subscriber per year</li>
                        <li><strong className="text-white">Education:</strong> $1.50–$4 per subscriber per year</li>
                        <li><strong className="text-white">Health & fitness:</strong> $1–$3 per subscriber per year</li>
                        <li><strong className="text-white">Gaming:</strong> $0.50–$2 per subscriber per year</li>
                        <li><strong className="text-white">Entertainment:</strong> $0.30–$1.50 per subscriber per year</li>
                    </ul>
                    <p>These values include ad revenue only. Adding sponsorship and affiliate revenue can multiply these figures by 2-4×.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Active vs. Inactive Subscribers</h3>
                    <p>Not all subscribers are equal. YouTube analytics shows that typically only <strong className="text-white">10-30% of subscribers</strong> watch any given video. This means a channel with 100,000 subscribers might get 10,000-30,000 views from subscribers per video. Channels with high subscriber engagement (above 20% view rate) have significantly higher per-subscriber value. Building an engaged community through consistent uploads, community posts, and responding to comments increases the percentage of active subscribers.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Subscriber Milestones and Income</h3>
                    <p>Subscriber milestones unlock both direct and indirect income opportunities. At <strong className="text-white">1,000 subscribers</strong>, you qualify for the YouTube Partner Program and can start earning ad revenue. At <strong className="text-white">10,000 subscribers</strong>, brands begin reaching out for sponsorship opportunities. At <strong className="text-white">100,000 subscribers</strong>, premium brand deals and speaking opportunities become available. The revenue jump between tiers is often exponential rather than linear.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximizing Per-Subscriber Revenue</h3>
                    <p>To increase the value of each subscriber: publish consistently so subscribers develop a viewing habit, create series content that encourages binge-watching, use community posts and stories to keep subscribers engaged between uploads, optimize notifications to ensure subscribers see new content, and diversify revenue to extract more value per viewer through affiliates, memberships, and products.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Total Subscriber Lifetime Value</h3>
                    <p>The average YouTube subscriber stays active for 2-3 years before becoming inactive. This means the lifetime value of a subscriber ranges from $1-$30+ depending on niche and monetization. High-value subscribers in finance or tech niches can have lifetime values exceeding $50 when factoring in product purchases and course enrollments. For a detailed analysis of your subscriber economics with 12-month projections, try Infloura&apos;s creator simulation platform.</p>
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

            <RelatedCalculators currentPage="/youtube-income-per-subscriber" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-red-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
