import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { TikTokEngagementCalculator } from '@/components/seo/TikTokEngagementCalculator'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'

export const metadata: Metadata = {
    title: 'TikTok Engagement Rate Calculator (2026 Formula) | Infloura',
    description: 'Calculate your true TikTok engagement rate using the Engagement Rate by Reach (ERR) formula. Find out analyzing likes, comments, and shares vs views.',
    openGraph: {
        title: 'Free TikTok Engagement Rate Calculator',
        description: 'Stop using follower counts to calculate engagement. Find your true TikTok ERR score.',
        url: 'https://infloura.com/tiktok-engagement-calculator',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/tiktok-engagement-calculator',
    },
}

export default function TikTokEngagementCalculatorPage() {
    return (
        <CalculatorLayout currentPage="TikTok Engagement Calculator">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        TikTok <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Engagement</span> Calculator
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Followers don't matter on TikTok—reach does. Calculate your true Engagement Rate by Reach (ERR) to secure better brand deals.
                    </p>
                </div>

                {/* The Tool */}
                <TikTokEngagementCalculator />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 pt-20">
                    <h2>Why Calculate Engagement Based on Views (ERR)?</h2>
                    <p>
                        The old formula for engagement was <code>(Likes + Comments) ÷ Followers</code>. This formula is entirely broken for modern algorithmic platforms like TikTok. 
                    </p>
                    <p>
                        Because the TikTok "For You Page" (FYP) serves content primarily to non-followers, a video might get 1 Million views even if you only have 5,000 followers. Measuring the engagement of that video based on your follower count would result in an mathematically impossible engagement rate of 2,000%. 
                    </p>
                    <p>
                        Our calculator uses the industry standard <strong>Engagement Rate by Reach (ERR)</strong>. This measures how many people <em>interacted</em> with the content out of the people who <em>actually saw it</em>.
                    </p>

                    <div className="bg-cyan-900/10 border-l-4 border-cyan-500 p-6 rounded-r-2xl my-8">
                        <h4 className="text-cyan-400 font-bold mb-2 flex items-center">
                            <Info className="w-5 h-5 mr-2" />
                            What is a "Good" TikTok Engagement Rate in 2026?
                        </h4>
                        <ul className="text-sm mt-2 space-y-1">
                            <li><strong>Under 3%:</strong> Poor. The algorithm likely stopped pushing the video.</li>
                            <li><strong>3% - 6%:</strong> Average. Standard performance for most creators.</li>
                            <li><strong>6% - 9%:</strong> Good. Strong indicator of community trust.</li>
                            <li><strong>9%+ :</strong> Excellent. Highly viral potential and maximum value to sponsors.</li>
                        </ul>
                    </div>

                    <h2>How to Use This Data in Pitch Emails</h2>
                    <p>
                        When reaching out to brands, do not just send a link to your TikTok profile. Brands buy engagement. Take a screenshot of our calculator results showing a 9%+ engagement rate and attach it to your Media Kit.
                    </p>
                    <p>
                        Need help creating a Media Kit? Read our <Link href="/guides/tiktok-media-kit-template">Ultimate TikTok Media Kit Template Guide</Link>.
                    </p>

                    <h2>Turn Engagement Into Cash</h2>
                    <p>
                        A high engagement rate is the ultimate leverage when negotiating sponsorships. See exactly how much that engagement is worth in dollars:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/tiktok-earnings-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-cyan-400 w-full">TikTok Earnings Simulator</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/influencer-sponsorship-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-cyan-400 w-full">Sponsorship Rate Calculator</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
