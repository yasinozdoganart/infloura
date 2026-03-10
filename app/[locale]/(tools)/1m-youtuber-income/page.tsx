import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: '1M YouTuber Income – How Much Do Million-Sub Channels Earn? | Infloura',
    description: 'How much do YouTubers with 1 million subscribers earn? Complete income analysis including major brand deals, product lines, and diversified creator revenue.',
    openGraph: { title: '1M YouTuber Income – How Much Do Million-Sub Channels Earn?', description: 'Complete income analysis for 1M subscriber YouTube channels.', url: 'https://infloura.com/1m-youtuber-income', siteName: 'Infloura', type: 'website' },
    alternates: { canonical: 'https://infloura.com/1m-youtuber-income' },
}

const faqs = [
    { question: 'How much does a YouTuber with 1 million subscribers make?', answer: 'A YouTuber with 1 million subscribers typically earns $20,000-$100,000+ per month. This includes $5,000-$20,000 from ads, $10,000-$50,000 from sponsorships, $3,000-$15,000 from affiliates/products, and additional income from merchandise, courses, and appearances. Top creators in profitable niches can earn $200,000+/month.' },
    { question: 'What Play Button do you get at 1 million subscribers?', answer: 'YouTube awards the Gold Play Button at 1 million subscribers. This is a prestigious gold-plated plaque and one of the most recognized creator milestones. Only about 35,000 channels worldwide have achieved this milestone, representing the top 0.02% of all YouTube channels.' },
    { question: 'How much do 1M YouTubers make per video?', answer: 'A single video from a 1M subscriber channel typically earns $3,000-$15,000 from ads alone (based on 200K-800K views per video). Adding a sponsorship ($10,000-$50,000), affiliate links ($500-$3,000), and product pushes, a single video can generate $15,000-$70,000+ in total revenue.' },
    { question: 'How long does it take to reach 1 million subscribers?', answer: 'The median time to reach 1M subscribers is approximately 3-5 years of consistent content creation. Some viral creators reach it in under 1 year, while niche channels may take 5-8 years. The journey from 100K to 1M typically takes 1-3 years and accelerates as the algorithm increasingly favors your content.' },
]

export default function OneMillionYoutuberIncomePage() {
    return (
        <CalculatorLayout currentPage="/1m-youtuber-income">
            <JsonLd type="calculator" data={{ name: '1M YouTuber Income Calculator', description: 'Calculate income for YouTube channels with 1 million subscribers.', url: 'https://infloura.com/1m-youtuber-income' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">🏆 Gold Play Button Tier</div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    1M YouTuber{' '}
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Income</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">How much do YouTubers with 1 million subscribers earn? Explore the Gold Play Button tier — where creators operate as media companies with multi-stream revenue.</p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Do Million-Subscriber YouTubers Earn?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>Reaching 1 million subscribers places you among the top 0.02% of all YouTube channels. At this level, content creation is a full-scale media business with revenue streams that rival traditional entertainment companies. The Gold Play Button represents not just clout, but a fundamentally different economic reality.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Monthly Revenue Breakdown at 1M Subscribers</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Ad revenue:</strong> $5,000–$25,000/month (2M-10M monthly views)</li>
                        <li><strong className="text-white">Major brand sponsorships:</strong> $10,000–$50,000+/month (2-4 premium deals)</li>
                        <li><strong className="text-white">Affiliate & product revenue:</strong> $3,000–$15,000/month</li>
                        <li><strong className="text-white">Merchandise:</strong> $2,000–$10,000/month</li>
                        <li><strong className="text-white">Memberships & community:</strong> $1,000–$5,000/month</li>
                        <li><strong className="text-white">Courses, events, licensing:</strong> $5,000–$30,000/month</li>
                        <li><strong className="text-white">Total range:</strong> $20,000–$100,000+/month</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Sponsorship Economy at 1M</h3>
                    <p>Million-subscriber channels command top-tier sponsorship rates. A single sponsored integration costs brands <strong className="text-white">$10,000-$30,000</strong>, while dedicated sponsor videos range from $20,000-$100,000+. Annual brand ambassador contracts provide $50,000-$200,000+ in guaranteed revenue. At this tier, creators often work with professional talent agencies who negotiate deals and handle contracts, typically taking 10-20% commission in exchange for significantly higher rates.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">1M Income by Niche</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Finance & business:</strong> $50,000–$200,000+/month — Premium advertisers + course revenue</li>
                        <li><strong className="text-white">Technology:</strong> $30,000–$100,000/month — High CPM + lucrative product reviews</li>
                        <li><strong className="text-white">Education:</strong> $25,000–$80,000/month — Course empires + steady ads</li>
                        <li><strong className="text-white">Entertainment:</strong> $15,000–$50,000/month — Volume views + merchandise</li>
                        <li><strong className="text-white">Gaming:</strong> $10,000–$40,000/month — Streaming + partnerships + merch</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Building a Creator Business Empire</h3>
                    <p>At 1M subscribers, the smartest creators think beyond content monetization. They launch product lines, build media companies, invest in other creators, and create intellectual property. Some examples: launching a dedicated product brand, creating a podcast network, starting a talent management agency, or developing software tools for their niche. The YouTube channel becomes the top of a revenue funnel rather than the entire business.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Revenue Per Video at 1M</h3>
                    <p>A single well-monetized video from a 1M subscriber channel can generate extraordinary revenue. With 300,000 views (a typical performance), expect: $2,000-$8,000 from ads, $10,000-$30,000 from an integrated sponsorship, $500-$3,000 from affiliate links, and ongoing long-tail revenue as the video continues accumulating views for months or years. Total per-video revenue of <strong className="text-white">$15,000-$50,000+</strong> is common in premium niches.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Beyond YouTube: Multi-Platform Strategy</h3>
                    <p>Million-subscriber YouTubers typically operate across multiple platforms, using their YouTube authority to build presence on Instagram, TikTok, X, and podcasts. Cross-platform presence increases total revenue by 50-200% while reducing dependency on any single platform. For strategic multi-platform planning with AI-powered recommendations, try Infloura&apos;s creator simulation platform.</p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <div className="space-y-4">{faqs.map((faq, i) => (<details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"><summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">{faq.question}<span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span></summary><p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p></details>))}</div>
            </section>

            <RelatedCalculators currentPage="/1m-youtuber-income" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white border-0 shadow-lg shadow-yellow-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
