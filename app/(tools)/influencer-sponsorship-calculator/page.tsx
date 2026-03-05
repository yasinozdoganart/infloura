import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Influencer Sponsorship Calculator – Estimate Brand Deal Rates | Infloura',
    description: 'Calculate how much influencers charge for sponsored posts across YouTube, TikTok, and Instagram. Free sponsorship rate calculator by Infloura.',
    openGraph: {
        title: 'Influencer Sponsorship Calculator – Estimate Brand Deal Rates',
        description: 'Calculate influencer sponsorship rates across YouTube, TikTok, and Instagram.',
        url: 'https://infloura.com/influencer-sponsorship-calculator',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/influencer-sponsorship-calculator',
    },
}

const faqs = [
    {
        question: 'How much should I charge for a sponsored post?',
        answer: 'A common starting formula is $100 per 10,000 followers, adjusted for engagement rate and niche. If your engagement rate is above 3%, you can charge 1.5-2x the base rate. Finance, tech, and luxury niches command premium rates. Video content (Reels, TikTok, YouTube) typically costs 2-5x more than static posts.'
    },
    {
        question: 'What factors determine sponsorship rates?',
        answer: 'Key factors include: follower count, engagement rate, content niche, platform (YouTube pays most per sponsored video), audience demographics (US/UK audiences are premium), content type (video vs. photo), usage rights (if the brand can reuse your content), and exclusivity terms (if you can\'t work with competitors).'
    },
    {
        question: 'How do I find brand sponsorships?',
        answer: 'Top methods: join influencer platforms (AspireIQ, Grin, CreatorIQ), sign up for TikTok Creator Marketplace, reach out directly to brands via email, work with talent agencies, and create a media kit showcasing your stats. Brands also discover creators through hashtags and viral content, so consistent posting helps.'
    },
    {
        question: 'Should I use a flat rate or CPM-based pricing?',
        answer: 'Most influencers use flat rates for simplicity, but CPM-based pricing (cost per 1,000 views) is becoming more common and often more profitable. A typical CPM range for sponsored content is $20-$50 on YouTube and $10-$30 on TikTok/Instagram. Flat rates work better for smaller creators, while CPM pricing benefits those with high view counts.'
    },
]

export default function InfluencerSponsorshipCalculatorPage() {
    return (
        <CalculatorLayout currentPage="/influencer-sponsorship-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: 'Influencer Sponsorship Calculator',
                    description: 'Calculate influencer sponsorship rates across YouTube, TikTok, and Instagram.',
                    url: 'https://infloura.com/influencer-sponsorship-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                    Free Sponsorship Rate Tool
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Influencer Sponsorship{' '}
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        Calculator
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estimate how much you should charge for sponsored content based on your audience size,
                    niche, and platform. Backed by real industry sponsorship data.
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">How Influencer Sponsorship Rates Are Set</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        Sponsorships are the single largest revenue source for most professional influencers, often
                        accounting for 50-70% of total creator income. Understanding how to price your partnerships
                        correctly is the difference between leaving money on the table and building a sustainable
                        creator business. Here&apos;s everything you need to know about influencer sponsorship economics.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Standard Pricing Framework</h3>
                    <p>
                        The industry-standard baseline for sponsored content is <strong className="text-white">$100 per 10,000 followers</strong> for
                        a single Instagram post. YouTube sponsored integrations command higher rates — typically
                        $2,000-$5,000 per 100,000 subscribers. TikTok falls in between, with sponsored videos priced
                        at roughly $200-$1,000 per 10,000 followers. These are starting points; your actual rate should
                        be adjusted based on your unique engagement metrics and niche value.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Engagement Rate Premium</h3>
                    <p>
                        Brands increasingly prioritize engagement over follower count. If your engagement rate exceeds
                        3% (vs. the platform average of 1-2%), you can justify charging a significant premium. Creators
                        with 5%+ engagement rates often command 2-3× the standard rate. This is because high engagement
                        translates to higher conversion rates for the brand&apos;s products or services, making your
                        sponsorship more valuable per dollar spent.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Niche-Based Rate Multipliers</h3>
                    <p>
                        Your content niche dramatically affects sponsorship rates. Finance and investing creators can
                        charge 3-5× the standard rate because financial products have high customer lifetime values.
                        Technology and SaaS creators command 2-3× premiums. Beauty and fashion benefit from volume
                        and product gifting. Entertainment and comedy creators typically earn closer to standard rates
                        but can negotiate volume deals. Health and wellness falls in the mid-premium range.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Types of Brand Partnerships</h3>
                    <p>
                        Not all sponsorships are created equal. <strong className="text-white">One-off posts</strong> are
                        the most common but least profitable per-post. <strong className="text-white">Multi-post packages</strong> (3-6
                        posts over a month) allow you to offer slight discounts while securing larger total deals.
                        <strong className="text-white"> Brand ambassadorships</strong> (3-12 month contracts) provide stable
                        income and typically pay 20-40% less per-post but guarantee consistent revenue.
                        <strong className="text-white"> Affiliate hybrid deals</strong> combine a flat fee with performance-based commission.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Usage Rights and Exclusivity</h3>
                    <p>
                        Two often-overlooked factors that should increase your rate: <strong className="text-white">usage rights</strong> (if
                        the brand can reuse your content in ads, add 30-100% to your rate) and <strong className="text-white">exclusivity</strong> (if
                        you can&apos;t work with competitors for a set period, add 20-50%). These terms represent significant value
                        to brands and are legitimate reasons to negotiate higher fees. Always have clear terms in your contracts.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">Building Your Rate Card</h3>
                    <p>
                        Professional creators maintain a rate card — a document listing prices for different content
                        types and platforms. Use this calculator as a starting point, then refine based on your actual
                        results. For comprehensive revenue modeling including sponsorship projections alongside ad
                        revenue and affiliate income, try Infloura&apos;s full creator simulation platform.
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

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                <h2 className="text-2xl font-bold mb-3">Ready for a Complete Revenue Analysis?</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    Get 12-month projections, AI strategy reports, and growth tracking — all in one platform.
                </p>
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-0 shadow-lg shadow-amber-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
