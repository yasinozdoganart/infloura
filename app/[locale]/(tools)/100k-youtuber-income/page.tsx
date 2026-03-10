import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: '100K YouTuber Income – How Much Do 100K Sub Channels Earn? | Infloura',
    description: 'Discover how much YouTubers with 100,000 subscribers earn per month. Detailed income data including premium sponsorships, AdSense, and product revenue.',
    openGraph: { title: '100K YouTuber Income – How Much Do 100K Sub Channels Earn?', description: 'Detailed income data for 100K subscriber YouTube channels.', url: 'https://infloura.com/100k-youtuber-income', siteName: 'Infloura', type: 'website' },
    alternates: { canonical: 'https://infloura.com/100k-youtuber-income' },
}

const faqs = [
    { question: 'How much does a YouTuber with 100K subscribers make?', answer: 'A YouTuber with 100,000 subscribers typically earns $5,000-$25,000 per month from all revenue sources. This includes $1,500-$5,000 from ad revenue, $2,000-$10,000 from sponsorships, $500-$3,000 from affiliates, and additional income from memberships and products. High-CPM niches can exceed $30,000/month.' },
    { question: 'How many views does a 100K subscriber channel get?', answer: 'A healthy 100K subscriber channel typically gets 20,000-80,000 views per video in the first week, with total monthly channel views ranging from 500K-2M+. Videos that perform well can reach 200K-500K+ views. Channels with strong search SEO often get the highest total views.' },
    { question: 'Do YouTubers get a plaque at 100K subscribers?', answer: 'Yes — YouTube awards the Silver Play Button at 100,000 subscribers. This is a physical plaque shipped to creators who apply through YouTube Studio. Beyond the plaque, 100K is significant because it opens doors to YouTube Partner Manager support, advanced features, and premium brand partnerships.' },
    { question: 'Is 100K subscribers enough to quit your job?', answer: 'For most niches, yes. At $5,000-$25,000/month, 100K subscriber channels generate comfortable full-time income. However, creator income fluctuates, so having 6 months of expenses saved before going full-time is recommended. Diversifying revenue across ads, sponsors, and products provides stability.' },
]

export default function HundredKYoutuberIncomePage() {
    return (
        <CalculatorLayout currentPage="/100k-youtuber-income">
            <JsonLd type="calculator" data={{ name: '100K YouTuber Income Calculator', description: 'Calculate income for 100,000 subscriber YouTube channels.', url: 'https://infloura.com/100k-youtuber-income' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">100K Silver Play Button Tier</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    100K YouTuber{' '}
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Income</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">How much do YouTubers earn at the 100K subscriber milestone? The Silver Play Button tier unlocks premium brand deals and professional-level creator income.</p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">Earning Power at 100,000 Subscribers</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>100,000 subscribers is the most celebrated YouTube milestone — marked by the coveted Silver Play Button. But beyond the plaque, 100K represents a fundamental shift in earning power. Creators at this level operate as professional media businesses, attracting premium partnerships and generating substantial monthly income.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Monthly Revenue at 100K Subscribers</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Ad revenue:</strong> $1,500–$5,000/month (500K-2M monthly views)</li>
                        <li><strong className="text-white">Brand sponsorships:</strong> $2,000–$12,000/month (2-4 premium deals)</li>
                        <li><strong className="text-white">Affiliate commissions:</strong> $500–$3,000/month</li>
                        <li><strong className="text-white">Memberships & Super Chat:</strong> $200–$1,500/month</li>
                        <li><strong className="text-white">Digital products/courses:</strong> $500–$5,000/month</li>
                        <li><strong className="text-white">Total range:</strong> $5,000–$25,000/month</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Premium Sponsorships at 100K</h3>
                    <p>At 100K subscribers, you enter the premium sponsorship tier. Brands allocate bigger budgets for channels at this level because of proven audience trust and reach. Expect <strong className="text-white">$2,000-$8,000 per sponsored integration</strong> and $5,000-$15,000+ for dedicated sponsor videos. Multi-video deals spanning 3-6 months provide stable income of $3,000-$10,000/month from a single brand partner. Many 100K creators work with talent agencies who negotiate higher rates.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">100K Income by Niche</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance & investing:</strong> $15,000–$40,000/month</li>
                        <li><strong className="text-white">Technology:</strong> $10,000–$25,000/month</li>
                        <li><strong className="text-white">Business & marketing:</strong> $8,000–$20,000/month</li>
                        <li><strong className="text-white">Education:</strong> $6,000–$18,000/month (strong course revenue)</li>
                        <li><strong className="text-white">Health & fitness:</strong> $5,000–$15,000/month</li>
                        <li><strong className="text-white">Gaming:</strong> $3,000–$10,000/month</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">New Revenue Streams at 100K</h3>
                    <p>The 100K milestone unlocks revenue opportunities unavailable to smaller channels. <strong className="text-white">Course creation</strong> becomes highly profitable — a well-executed online course can generate $5,000-$50,000 in launch revenue. <strong className="text-white">Speaking engagements</strong> at conferences and events pay $1,000-$5,000 per appearance. <strong className="text-white">Consulting</strong> in your area of expertise can generate $200-$500/hour. <strong className="text-white">Merchandise</strong> becomes viable with enough brand recognition.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Building Toward the Gold Play Button</h3>
                    <p>From 100K, reaching the next major milestone of 1 million subscribers typically takes 1-3 years of consistent growth. During this phase, focus on expanding to additional platforms, building owned audience assets (email list, community), creating evergreen content that compounds search traffic, and diversifying beyond platform dependency.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Forecast Your 100K Channel Growth</h3>
                    <p>Whether you&apos;re approaching or already at 100K subscribers, Infloura&apos;s creator simulation provides detailed 12-month revenue projections, identifies your highest-ROI content strategies, and helps you make data-driven decisions about sponsorships, products, and platform expansion.</p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">{faqs.map((faq, i) => (<details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"><summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">{faq.question}<span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span></summary><p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p></details>))}</div>
            </section>

            <RelatedCalculators currentPage="/100k-youtuber-income" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0 shadow-lg shadow-amber-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
