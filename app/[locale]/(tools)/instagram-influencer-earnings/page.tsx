import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'How Much Do Instagram Influencers Make? | Infloura',
    description: 'Discover how much Instagram influencers really earn. See exact rate cards for nano, micro, and macro influencers based on follower count.',
    openGraph: {
        title: 'How Much Do Instagram Influencers Make?',
        description: 'Discover average salaries, sponsorship rates, and affiliate earnings for Instagram influencers of all sizes.',
        url: 'https://infloura.com/instagram-influencer-earnings',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/instagram-influencer-earnings',
    },
}

const faqs = [
    {
        question: 'How many followers do you need to make money on Instagram?',
        answer: 'You can start making money with as few as 1,000 highly engaged followers (nano-influencers). Brands often prefer smaller, niche communities with high trust levels over massive, unengaged audiences. At 1k-10k followers, you can expect free products, affiliate commissions, and sponsorships ranging from $50 to $200 per post.'
    },
    {
        question: 'What is the average salary of an Instagram Influencer?',
        answer: 'Full-time micro-influencers (50k - 100k followers) typically earn between $40,000 and $100,000 per year. Macro-influencers (100k - 500k) often clear $100,000 to $500,000+ annually depending heavily on their niche and ability to convert followers to sales.'
    },
    {
        question: 'How much should I charge for a sponsored Instagram post?',
        answer: 'The industry standard formula is roughly $10 per 1,000 followers ($10 CPM). So a creator with 50,000 followers might charge $500 per photo post. Keep in mind, Reels and Stories command different rates, and high-converting niches like Finance can charge $30-$50 CPM.'
    },
    {
        question: 'How do Instagram creators make passive income?',
        answer: 'Passive income on Instagram usually comes from three sources: Affiliate marketing links (like Amazon Storefronts) placed in bios or stories, selling digital products (templates, presets, eBooks) via automated DM funnels, and promoting subscription-based communities (Patreon or Instagram Subscriptions).'
    },
]

export default function InstagramInfluencerEarningsPage() {
    return (
        <CalculatorLayout currentPage="/instagram-influencer-earnings">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Instagram Influencer Earnings Estimator',
                    description: 'Estimate exactly how much an Instagram influencer earns per post, reel, and story.',
                    url: 'https://infloura.com/instagram-influencer-earnings',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                    Free Influencer Rate Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    How Much Do <br />
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        Instagram Influencers Make?
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    The ultimate guide to IG monetization. See real-world earnings for nano, micro, and macro 
                    influencers across different content formats.
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">The Instagram Influencer Economy</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Instagram remains the crown jewel of the influencer marketing industry. While TikTok may offer 
                        faster virality, Instagram boasts an older demographic with significantly higher purchasing power. 
                        This makes Instagram audiences incredibly valuable to brands. But exactly 
                        <strong>how much do Instagram influencers make</strong>? The answer lies in their follower tier 
                        and monetization strategy.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Earnings by Follower Tier</h3>
                    <p>
                        Influencers are generally categorized by audience size. Here is what brands are actively paying 
                        these tiers in the current market for a dedicated sponsored post cycle:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Nano-influencers (1K - 10K followers):</strong> $50 – $250 per post. Extremely high engagement rates (often 5-10%). Great for local businesses and hyper-specific niches.</li>
                        <li><strong className="text-white">Micro-influencers (10K - 50K followers):</strong> $250 – $1,000 per post. The sweet spot for influencer marketing ROI. These creators often earn a full-time living when combined with affiliate sales.</li>
                        <li><strong className="text-white">Mid-tier influencers (50K - 500K followers):</strong> $1,000 – $5,000 per post. Professional creators who often have management teams and standardized rate cards.</li>
                        <li><strong className="text-white">Macro-influencers (500K - 1M followers):</strong> $5,000 – $15,000+ per post. Household names within their specific industries or internet subcultures.</li>
                        <li><strong className="text-white">Mega-influencers (1M+ followers):</strong> $15,000 – $100,000+ per post. Celebrities and top-tier digital creators.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Reels vs Stories vs Static Posts</h3>
                    <p>
                        Not all Instagram content is priced equally. Brands pay for reach and conversion:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Instagram Stories:</strong> Usually the cheapest integration ($100-$500 for micro-influencers). Highly effective for direct response marketing using link stickers.</li>
                        <li><strong className="text-white">Static Posts/Carousels:</strong> The traditional baseline ($250-$1,000). Stays on the feed permanently acting as social proof.</li>
                        <li><strong className="text-white">Instagram Reels:</strong> Commands a 30-50% premium over static posts because of their potential to hit the explore page and go viral even months after posting.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Affiliate Links and Digital Products</h3>
                    <p>
                        The wealthiest Instagram influencers do not rely entirely on brand deals (which trade time for money). 
                        Instead, they build owned revenue streams. Influencers utilizing LTK (LikeToKnowIt) or Amazon Associates 
                        can generate 30-50% of their total income through affiliate commissions. Furthermore, influencers who 
                        package their aesthetic or knowledge into digital products (Lightroom Presets, Workout Guides, Meal Plans) 
                        often achieve 90% profit margins on their audience.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Calculating Your Custom Rate</h3>
                    <p>
                        To determine exactly how much you should be charging as an Instagram influencer, you must factor 
                        in your niche multiplier (Finance pays more than Entertainment), your average engagement rate, and 
                        if the brand requires "usage rights" to run ads behind your face. For a precise calculation tailored 
                        to your profile metrics, use Infloura&apos;s simulation toolkit.
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

            <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                 <Link href="/instagram-income-per-reel" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Reels Value Calculator</h3>
                     <p className="text-sm text-zinc-400">Find exactly how much an IG Reel is worth.</p>
                 </Link>
                 <Link href="/influencer-sponsorship-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Sponsorship Rates</h3>
                     <p className="text-sm text-zinc-400">Generate a custom rate card for brands.</p>
                 </Link>
                 <Link href="/creator-income-calculator" className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                     <h3 className="text-lg font-semibold text-white mb-2">Build a Business</h3>
                     <p className="text-sm text-zinc-400">Combine IG, TikTok and YouTube into one plan.</p>
                 </Link>
            </section>

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">Professionalize Your Creator Business</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Stop guessing your rates. Get detailed 12-month revenue analytics and pitch recommendations on Infloura.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Try the Infloura Simulator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
