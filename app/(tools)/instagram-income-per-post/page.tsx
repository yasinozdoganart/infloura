import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Instagram Income Per Post – How Much Do Instagram Posts Pay? | Infloura',
    description: 'Estimate how much Instagram influencers earn per post from sponsorships, Reels bonuses, and affiliate marketing. Free Instagram income calculator by Infloura.',
    openGraph: {
        title: 'Instagram Income Per Post – How Much Do Instagram Posts Pay?',
        description: 'Estimate how much Instagram influencers earn per post from sponsorships and affiliate marketing.',
        url: 'https://infloura.com/instagram-income-per-post',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: { canonical: 'https://infloura.com/instagram-income-per-post' },
}

const faqs = [
    { question: 'How much does Instagram pay per post?', answer: 'Instagram doesn\'t directly pay creators per post. Income comes from brand sponsorships, which average $100 per 10,000 followers per post, adjusted for engagement and niche. Creators with 50,000 followers typically earn $500-$1,500 per sponsored post. Nano-influencers (1K-10K) earn $10-$100 per post.' },
    { question: 'How much do Reels pay on Instagram?', answer: 'Instagram Reels don\'t have a consistent per-view payment like YouTube. The Reels Play Bonus program (invite-only) pays select creators for Reels performance. Sponsored Reels typically command 1.5-3x the rate of a static sponsored post due to higher reach and engagement.' },
    { question: 'How many followers do you need to earn money on Instagram?', answer: 'You can start earning with as few as 1,000 followers if you have strong engagement (5%+). Most brand deals start becoming available at 5,000-10,000 followers. Instagram Shopping and affiliate features are available to business accounts at most follower counts.' },
    { question: 'Is Instagram income per post increasing or decreasing?', answer: 'Instagram per-post rates have been increasing for high-engagement creators, especially those making Reels content. However, the market is becoming more competitive, so creators with average engagement are seeing stable or slightly decreasing rates. Diversifying into Reels, Stories, and e-commerce is key to growing income.' },
]

export default function InstagramIncomePerPostPage() {
    return (
        <CalculatorLayout currentPage="/instagram-income-per-post">
            <JsonLd type="calculator" data={{ name: 'Instagram Income Per Post Calculator', description: 'Calculate how much Instagram influencers earn per post.', url: 'https://infloura.com/instagram-income-per-post' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium mb-6">
                    Free Instagram Revenue Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Instagram Income{' '}
                    <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Per Post</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    How much do Instagram influencers earn per post? Discover realistic sponsorship rates, Reels income, and affiliate revenue based on follower count and engagement.
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Much Do Instagram Posts Actually Pay?</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Unlike YouTube, which shares ad revenue directly with creators, Instagram&apos;s income model is primarily driven by brand partnerships and creator-initiated monetization. There&apos;s no standard &quot;per-post payment&quot; from Instagram itself — your income depends entirely on how effectively you monetize your audience. Here&apos;s the complete breakdown.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsored Post Rates by Follower Count</h3>
                    <p>
                        Brand sponsorships are the primary income source for Instagram creators. The industry-standard baseline is approximately <strong className="text-white">$100 per 10,000 followers</strong> per sponsored post. Here&apos;s how rates break down by tier:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Nano (1K-10K):</strong> $10–$100 per post</li>
                        <li><strong className="text-white">Micro (10K-50K):</strong> $100–$500 per post</li>
                        <li><strong className="text-white">Mid-tier (50K-200K):</strong> $500–$2,500 per post</li>
                        <li><strong className="text-white">Macro (200K-1M):</strong> $2,500–$10,000 per post</li>
                        <li><strong className="text-white">Mega (1M+):</strong> $10,000–$100,000+ per post</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Engagement Rate: The Real Multiplier</h3>
                    <p>
                        Follower count gives you a baseline, but engagement rate determines your actual earning power. Brands increasingly focus on <strong className="text-white">engagement rate over follower count</strong>. A creator with 20,000 followers and 8% engagement will consistently out-earn one with 100,000 followers and 1% engagement. High-engagement creators (5%+) can charge 2-3× the standard rate because their recommendations convert to actual sales.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Instagram Reels Income Potential</h3>
                    <p>
                        Reels have become Instagram&apos;s highest-value content format. Brands pay a premium for Reels content because it generates 2-10× the reach of static posts. Sponsored Reels typically cost 1.5-3× a regular sponsored post. The Instagram Reels Play Bonus program pays select creators for Reels performance, though rates vary and the program is invite-only. Creators report earning $100-$5,000 per month from Reels bonuses.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Story-Based Income Per Post</h3>
                    <p>
                        Instagram Stories offer a different monetization model. Story-only sponsorships are typically priced at 30-50% of a feed post rate but can be done in higher volume. A creator charging $500 for a feed post might charge $200-$250 for a story series. The advantage is authenticity — story content feels more personal and drives higher click-through rates, making it attractive to performance-focused brands.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Affiliate Marketing Per Post</h3>
                    <p>
                        Affiliate income adds a performance layer to per-post earnings. Fashion and beauty creators in particular can earn $200-$2,000 per post through affiliate links, in addition to any sponsorship fee. Instagram Shopping integration makes this seamless — tagged products in posts and Reels drive direct sales with typical commission rates of 5-20%. The best affiliate posts continue generating income for days or weeks after publishing.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Niche-Based Pricing Differences</h3>
                    <p>
                        Your content niche significantly impacts per-post rates. Finance, technology, and luxury brands pay the highest rates because their customer lifetime values justify premium influencer spending. Beauty and fashion benefit from volume — more brands competing for partnerships. Travel and lifestyle fall in the mid-range. Fitness and food are competitive niches with moderate rates. Entertainment typically commands the lowest per-post rates but compensates with larger audiences.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximizing Your Instagram Income Per Post</h3>
                    <p>
                        To maximize per-post income, focus on growing engagement rather than just followers, create a professional media kit showcasing your metrics, combine sponsorships with affiliate links for layered income, negotiate usage rights and exclusivity separately, and build long-term brand relationships. For a complete multi-platform revenue analysis with 12-month projections, try Infloura&apos;s creator simulation platform.
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

            <RelatedCalculators currentPage="/instagram-income-per-post" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-fuchsia-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
