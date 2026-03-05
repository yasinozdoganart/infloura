import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'How Much Do YouTubers Make? Income Breakdown 2026 | Infloura',
    description: 'Discover how much YouTubers make in 2026. Detailed income breakdown by subscriber count, niche, and revenue streams including ads, sponsorships, and affiliates.',
    openGraph: {
        title: 'How Much Do YouTubers Make? Income Breakdown 2026',
        description: 'Detailed income breakdown by subscriber count, niche, and revenue streams.',
        url: 'https://infloura.com/how-much-do-youtubers-make',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: { canonical: 'https://infloura.com/how-much-do-youtubers-make' },
}

const faqs = [
    { question: 'How much do small YouTubers make?', answer: 'Small YouTubers (1K-10K subscribers) typically earn $50-$500 per month from AdSense if posting regularly. Sponsorships can add $100-$500 per video in niche topics. Most small creators earn under $1,000/month from YouTube alone. The key to growing income is focusing on a specific niche and maintaining upload consistency.' },
    { question: 'How much do YouTubers make per 1000 subscribers?', answer: 'Subscriber count doesn\'t directly determine income — views do. However, a channel with 1,000 subscribers typically gets 100-300 views per video, earning $0.30-$3 per video from ads. At 10,000 subscribers, expect 1,000-5,000 views per video ($3-$25 per video). At 100K subscribers, expect 10K-50K views per video ($30-$250 per video).' },
    { question: 'What is the average YouTuber salary?', answer: 'The average full-time YouTuber earns approximately $50,000-$70,000 per year. However, this is skewed by top earners. The median is closer to $30,000-$40,000. The top 3% of YouTubers earn over $100,000/year, while many part-time creators earn under $10,000/year. Revenue varies enormously by niche and audience size.' },
    { question: 'Can you make a living from YouTube?', answer: 'Yes, but it typically requires 50,000+ subscribers and consistent uploads. Full-time YouTube income ($3,000-$5,000+/month) usually comes from multiple streams: AdSense (30%), sponsorships (40%), affiliate marketing (15%), and digital products (15%). Most successful full-time YouTubers took 1-3 years to reach sustainable income.' },
]

export default function HowMuchDoYoutubersMakePage() {
    return (
        <CalculatorLayout currentPage="/how-much-do-youtubers-make">
            <JsonLd type="calculator" data={{ name: 'YouTuber Income Calculator', description: 'Calculate how much YouTubers make based on subscribers and views.', url: 'https://infloura.com/how-much-do-youtubers-make' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                    2026 YouTuber Income Data
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    How Much Do YouTubers{' '}
                    <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Make?</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    The complete guide to YouTuber income in 2026. Real earnings data by subscriber count, content niche, and monetization strategy.
                </p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">YouTuber Income by Subscriber Count</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        YouTube remains the most lucrative platform for long-term creator income. With over 2 billion monthly active users and the most mature ad-sharing model in the industry, YouTube offers creators the clearest path to sustainable income. But how much do YouTubers actually make? The answer depends on several key factors.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Earnings by Channel Size</h3>
                    <p>Here&apos;s what YouTubers typically earn at each subscriber milestone, combining all revenue streams:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">1,000-10,000 subscribers:</strong> $50–$500/month — Mostly AdSense with occasional small sponsorships</li>
                        <li><strong className="text-white">10,000-50,000 subscribers:</strong> $500–$3,000/month — Regular sponsorships begin, affiliate income grows</li>
                        <li><strong className="text-white">50,000-100,000 subscribers:</strong> $3,000–$10,000/month — Consistent brand deals, diversified revenue</li>
                        <li><strong className="text-white">100,000-500,000 subscribers:</strong> $10,000–$40,000/month — Professional-grade partnerships, product lines</li>
                        <li><strong className="text-white">500,000-1,000,000 subscribers:</strong> $40,000–$100,000/month — Premium brand deals, multiple revenue streams</li>
                        <li><strong className="text-white">1,000,000+ subscribers:</strong> $100,000+/month — Top-tier sponsorships, businesses, equity deals</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">How YouTubers Make Money: Revenue Streams</h3>
                    <p>
                        Successful YouTubers never rely on a single income source. The typical revenue split for a professional YouTuber looks like this: <strong className="text-white">Ad revenue (AdSense)</strong> accounts for 25-35% of income and provides a reliable baseline tied directly to views. <strong className="text-white">Brand sponsorships</strong> contribute 35-45% and represent the largest single income source for most creators above 50K subscribers. <strong className="text-white">Affiliate marketing</strong> adds 10-20% through product recommendations. <strong className="text-white">Digital products and courses</strong> contribute 5-15% with the highest margins. <strong className="text-white">Memberships and Super Chat</strong> generate 5-10% from loyal community members.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Average YouTuber Earnings by Niche</h3>
                    <p>
                        Content niche creates massive differences in earning potential. Finance and business YouTubers earn the most per view due to high-CPM advertisers targeting their audience — typically $15-$30 RPM. Technology reviewers benefit from high-value affiliate programs and earn $8-$20 RPM. Education creators falling in the $5-$15 RPM range with strong course selling potential. Lifestyle and travel content averages $4-$10 RPM but offers excellent brand deal opportunities. Gaming and entertainment channels earn $2-$5 RPM but compensate with higher view volumes.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorship Potential for YouTubers</h3>
                    <p>
                        YouTube sponsorships are priced differently than other platforms. The standard rate for a YouTube sponsored integration is <strong className="text-white">$20-$50 per 1,000 views</strong> (CPV) for established channels. A creator averaging 50,000 views per video might earn $1,000-$2,500 per sponsored integration. Dedicated sponsor videos command higher rates. Long-term brand ambassador deals provide stable monthly income of $2,000-$10,000+ depending on channel size.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Realistic Expectations for New YouTubers</h3>
                    <p>
                        Most new YouTubers won&apos;t earn significant income in their first 6-12 months. The YouTube Partner Program requires 1,000 subscribers and 4,000 watch hours to monetize with ads. Focus on content quality, audience retention, and niche expertise first. Income grows exponentially — the jump from 10K to 50K subscribers often means a 5-10× increase in monthly earnings due to unlocked sponsorship opportunities.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Project Your YouTube Income</h3>
                    <p>
                        Want to know how much you could earn as a YouTuber based on your specific niche, audience, and growth rate? Infloura&apos;s full creator simulation platform provides detailed 12-month revenue projections, AI-powered strategy recommendations, and risk assessment to help you plan your creator business.
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

            <RelatedCalculators currentPage="/how-much-do-youtubers-make" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 shadow-lg shadow-red-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
