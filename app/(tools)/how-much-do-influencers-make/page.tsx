import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'How Much Do Influencers Make? Complete Income Guide 2026 | Infloura',
    description: 'Learn how much influencers make across YouTube, TikTok, and Instagram. Income data by platform, follower count, niche, and monetization method.',
    openGraph: {
        title: 'How Much Do Influencers Make? Complete Income Guide 2026',
        description: 'Income data by platform, follower count, niche, and monetization method.',
        url: 'https://infloura.com/how-much-do-influencers-make',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: { canonical: 'https://infloura.com/how-much-do-influencers-make' },
}

const faqs = [
    { question: 'How much does the average influencer make?', answer: 'The average full-time influencer earns $50,000-$100,000 per year across all platforms and revenue streams. However, income is highly skewed: the top 10% earn over $200,000/year, while many part-time influencers earn under $10,000/year. The key factors are audience size, engagement quality, niche value, and number of active revenue streams.' },
    { question: 'Which social media platform pays influencers the most?', answer: 'YouTube pays the most per view/impression through ads ($3-$25 per 1,000 views). Instagram pays the most per follower for brand deals ($100 per 10K followers). TikTok offers the fastest growth and best e-commerce integration. Most high-earning influencers use 2-3 platforms to maximize total income.' },
    { question: 'How do influencers get paid?', answer: 'Influencers earn through: brand sponsorships (flat rate per post/video), platform ad revenue (YouTube AdSense, TikTok Creativity Program), affiliate commissions (percentage of sales), digital product sales (courses, ebooks, templates), memberships/subscriptions, and event appearances. Payments come via bank transfer, PayPal, or platform-specific payment systems.' },
    { question: 'Is being an influencer a real career?', answer: 'Yes — the creator economy is valued at over $250 billion. Millions of people worldwide earn a living as influencers. It requires business skills, consistency, and adaptability. The most successful influencers treat it as a business with diversified revenue, financial planning, and long-term brand building rather than relying on virality alone.' },
]

export default function HowMuchDoInfluencersMakePage() {
    return (
        <CalculatorLayout currentPage="/how-much-do-influencers-make">
            <JsonLd type="calculator" data={{ name: 'Influencer Income Calculator', description: 'Calculate how much influencers make across all platforms.', url: 'https://infloura.com/how-much-do-influencers-make' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                    2026 Influencer Income Data
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    How Much Do Influencers{' '}
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Make?</span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    The definitive guide to influencer income in 2026. Real earnings data across YouTube, TikTok, Instagram, and emerging platforms — by tier, niche, and revenue type.
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">The Complete Influencer Income Breakdown</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        The influencer economy has matured into a <strong className="text-white">$250+ billion industry</strong> with well-established income patterns. Whether you&apos;re considering becoming an influencer, negotiating your rates, or simply curious about the economics of influence, this guide provides data-driven answers based on real creator earnings.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Influencer Income by Tier</h3>
                    <p>The influencer industry organizes creators into tiers based on following size. Here&apos;s what each tier typically earns across all platforms and revenue streams:</p>
                    <ul className="list-disc list-inside space-y-2 text-zinc-300">
                        <li><strong className="text-white">Nano-influencers (1K-10K):</strong> $500–$2,000/month — Product gifting, small sponsorships, affiliate income</li>
                        <li><strong className="text-white">Micro-influencers (10K-100K):</strong> $2,000–$10,000/month — Regular brand deals, growing ad revenue</li>
                        <li><strong className="text-white">Mid-tier (100K-500K):</strong> $10,000–$50,000/month — Premium sponsorships, diversified revenue</li>
                        <li><strong className="text-white">Macro-influencers (500K-1M):</strong> $50,000–$100,000/month — Major brand partnerships, product lines</li>
                        <li><strong className="text-white">Mega-influencers (1M+):</strong> $100,000–$500,000+/month — Celebrity-level deals, equity partnerships</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">How Influencers Make Money: All Revenue Streams</h3>
                    <p>
                        Modern influencers diversify across multiple revenue streams. <strong className="text-white">Brand sponsorships</strong> remain the largest income source (40-50% of total revenue), where brands pay for sponsored content featuring their products. <strong className="text-white">Platform ad revenue</strong> (YouTube AdSense, TikTok Creativity Program) provides passive income tied to views (15-25% of revenue). <strong className="text-white">Affiliate marketing</strong> generates commission-based income through product recommendations (10-15%). <strong className="text-white">Digital products</strong> like courses, templates, and ebooks offer the highest margins (5-15%). <strong className="text-white">Memberships and subscriptions</strong> through Patreon, YouTube Memberships, or Instagram Subscriptions provide predictable monthly income (5-10%).
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Influencer Income by Platform</h3>
                    <p>
                        Platform choice significantly impacts earning potential. <strong className="text-white">YouTube</strong> offers the highest per-view ad revenue ($3-$25 RPM) and the best long-tail content value — videos continue earning for years after upload. <strong className="text-white">Instagram</strong> commands the highest per-follower sponsorship rates (~$100/10K followers) and excels for lifestyle, fashion, and luxury brand partnerships. <strong className="text-white">TikTok</strong> provides unmatched growth speed and strong e-commerce revenue through TikTok Shop. <strong className="text-white">X (Twitter)</strong> and <strong className="text-white">LinkedIn</strong> are emerging platforms for thought leaders with premium audience demographics.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Niche Impact on Influencer Earnings</h3>
                    <p>
                        Your content niche can create a 5-10× difference in earnings at the same audience size. <strong className="text-white">Finance and investing</strong> influencers earn the most due to high-value advertisers and affiliate programs. <strong className="text-white">Technology and SaaS</strong> creators benefit from high-commission software affiliate programs ($50-$500 per conversion). <strong className="text-white">Beauty and fashion</strong> influencers leverage volume brand deals and product launches. <strong className="text-white">Health and wellness</strong> commands premium rates from supplement and fitness brands. <strong className="text-white">Entertainment</strong> earns less per impression but achieves the highest reach.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorship Potential Across Platforms</h3>
                    <p>
                        Brand sponsorships are priced differently per platform. Instagram feed posts: $100 per 10K followers. Instagram Reels: $150-$300 per 10K followers. TikTok videos: $100-$200 per 10K followers. YouTube integrations: $20-$50 per 1K average views. Podcast mentions: $25-$50 CPM. Multi-platform packages combining 2-3 platforms command 20-40% premium over individual platform rates.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Building a Sustainable Influencer Income</h3>
                    <p>
                        The most successful influencers treat their platform as a business. This means diversifying income streams (never relying on a single source for more than 40% of revenue), building owned audiences through email lists, creating assets that generate passive income, and planning for taxes and retirement. For a complete business plan with 12-month revenue projections, risk analysis, and AI-powered growth strategies, try Infloura&apos;s creator simulation platform.
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

            <RelatedCalculators currentPage="/how-much-do-influencers-make" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <h2 className="text-2xl font-bold mb-3">Run the Full Creator Income Simulation</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">Get 12-month revenue projections, AI strategy reports, and growth tracking on Infloura.</p>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">Run Simulation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
