import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Instagram Money Calculator – Estimate Influencer Earnings | Infloura',
    description: 'Calculate how much Instagram influencers earn from sponsored posts, Reels, and affiliate marketing. Free Instagram earnings estimator by Infloura.',
    openGraph: {
        title: 'Instagram Money Calculator – Estimate Influencer Earnings',
        description: 'Calculate how much Instagram influencers earn from sponsored posts, Reels, and affiliate marketing.',
        url: 'https://infloura.com/instagram-money-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/instagram-money-calculator',
    },
}

const faqs = [
    {
        question: 'How much do Instagram influencers make per post?',
        answer: 'Instagram influencer rates vary widely by following size. Nano-influencers (1K-10K followers) earn $10-$100 per post, micro-influencers (10K-100K) earn $100-$1,000, mid-tier influencers (100K-500K) earn $1,000-$5,000, and macro-influencers (500K+) can earn $5,000-$50,000+ per sponsored post. Engagement rate matters more than follower count.'
    },
    {
        question: 'How many followers do you need to make money on Instagram?',
        answer: 'You can start earning on Instagram with as few as 1,000 followers if you have strong engagement. Most brand deals become available around 5,000-10,000 followers. Instagram\'s bonus programs and shopping features may require 10,000+ followers. Focus on engagement rate rather than pure follower count for monetization.'
    },
    {
        question: 'How do Instagram Reels make money?',
        answer: 'Instagram Reels can generate income through the Reels Play Bonus program (invite-only), brand sponsorships for Reels content, affiliate links in your bio or stories, and driving traffic to your own products. Reels bonuses pay based on views, while sponsored Reels typically command 1.5-3x the rate of a static post.'
    },
    {
        question: 'Is Instagram or TikTok better for making money?',
        answer: 'Instagram generally offers higher per-post sponsorship rates and better e-commerce integration, while TikTok provides faster audience growth and higher organic reach. Instagram is preferred for lifestyle, fashion, and luxury brands, while TikTok excels for entertainment and viral content. Most successful creators use both platforms.'
    },
]

export default function InstagramMoneyCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/instagram-money-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Instagram Money Calculator',
                    description: 'Calculate how much Instagram influencers earn from posts, Reels, and brand deals.',
                    url: 'https://infloura.com/instagram-money-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                    Free Instagram Earnings Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Instagram Money{' '}
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate your Instagram earnings from sponsored posts, Reels, affiliate marketing, and brand partnerships.
                    Powered by real industry data from thousands of creator campaigns.
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Instagram Earnings Work</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Instagram remains one of the most lucrative platforms for content creators and influencers.
                        With over 2 billion monthly active users, the platform offers diverse monetization opportunities
                        that extend far beyond simple sponsored posts. Understanding how Instagram monetization works
                        is key to building a sustainable creator business.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsored Posts: The Primary Revenue Stream</h3>
                    <p>
                        Brand sponsorships are the cornerstone of Instagram creator income. Rates are primarily determined
                        by your follower count, engagement rate, and niche. The industry standard formula is roughly
                        $100 per 10,000 followers per post, but creators with high engagement (above 3-5%) can charge
                        2-3× this rate. Fashion, beauty, and travel niches typically command the highest rates, while
                        entertainment and meme accounts earn less per post despite having larger audiences.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Instagram Reels and Video Content</h3>
                    <p>
                        Reels have become Instagram&apos;s highest-reach content format, often generating 2-10× more
                        impressions than static posts. Brands pay premium rates for Reels content because of its
                        higher engagement and shareability. Sponsored Reels typically cost 1.5-3× a standard post rate.
                        Instagram has also launched the Reels Play Bonus program, paying creators directly for Reels views,
                        though payouts vary and the program is invite-only.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Instagram Shopping and Affiliate Marketing</h3>
                    <p>
                        Instagram&apos;s shopping features allow creators to tag products directly in posts and Reels,
                        earning commissions on sales. Affiliate programs typically offer 5-20% commission rates.
                        Product review and &quot;daily essentials&quot; content converts best on Instagram. Creators in
                        fashion, beauty, and home décor niches see particularly strong affiliate revenue, often
                        earning $500-$5,000+ monthly from affiliate links alone.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Stories and Close Friends Monetization</h3>
                    <p>
                        Instagram Stories offer unique monetization opportunities through swipe-up links (for accounts
                        with 10K+ followers), story-exclusive sponsored content, and Close Friends subscriptions.
                        Many creators charge less for story-only sponsorships but can take on more volume, making
                        stories a significant revenue stream. Story ads tend to feel more authentic, leading to
                        higher conversion rates for brand partners.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Engagement Rate: The Key Metric</h3>
                    <p>
                        Your engagement rate is the single most important metric for Instagram monetization. Brands
                        increasingly prioritize engagement over raw follower counts. An account with 10,000 highly
                        engaged followers can often charge more than one with 100,000 passive followers. The average
                        Instagram engagement rate is 1-3%, but top creators in niche categories regularly achieve 5-10%.
                        Our calculator factors in engagement metrics to provide more accurate earning estimates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Maximize Your Instagram Income</h3>
                    <p>
                        The most successful Instagram creators diversify their income across sponsored posts, Reels,
                        affiliate marketing, and digital products. For a complete analysis of your multi-platform
                        earnings potential with 12-month projections, try Infloura&apos;s full creator simulation tool.
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

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-pink-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
