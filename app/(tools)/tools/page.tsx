import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import Link from 'next/link'
import { ArrowRight, Youtube, Music2, Instagram, LineChart, Target, Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Creator Revenue Calculators & Tools | Infloura',
    description: 'Free tools to estimate how much creators can earn on YouTube, TikTok, Instagram, and through brand sponsorships.',
    openGraph: {
        title: 'Creator Revenue Calculators & Tools',
        description: 'Free suite of tools to calculate creator income across platforms.',
        url: 'https://infloura.com/tools',
        siteName: 'Infloura',
        type: 'website'
    },
    alternates: {
        canonical: 'https://infloura.com/tools'
    }
}

const tools = [
    {
        title: 'YouTube Money Calculator',
        description: 'Estimate how much YouTubers earn based on views, niche and dynamic RPM.',
        href: '/youtube-money-calculator',
        icon: <Youtube className="w-6 h-6 text-red-500" />
    },
    {
        title: 'TikTok Money Calculator',
        description: 'Calculate potential earnings from the TikTok Creator Rewards Program.',
        href: '/tiktok-money-calculator',
        icon: <Music2 className="w-6 h-6 text-cyan-400" />
    },
    {
        title: 'Instagram Earnings Calculator',
        description: 'Estimate revenue from Instagram Reels bonuses and brand integrations.',
        href: '/instagram-money-calculator',
        icon: <Instagram className="w-6 h-6 text-pink-500" />
    },
    {
        title: 'Multi-Platform Income Estimator',
        description: 'Compare earnings potential across YouTube, TikTok, Instagram, and X.',
        href: '/influencer-income-calculator',
        icon: <LineChart className="w-6 h-6 text-purple-400" />
    },
    {
        title: 'Full Creator Revenue Model',
        description: 'Combine ad revenue, sponsorships, and products into a single projection.',
        href: '/creator-income-calculator',
        icon: <Coins className="w-6 h-6 text-green-400" />
    },
    {
        title: 'Sponsorship Rate Calculator',
        description: 'Calculate how much you should charge brands for dedicated and integrated promos.',
        href: '/influencer-sponsorship-calculator',
        icon: <Target className="w-6 h-6 text-yellow-400" />
    }
]

export default function ToolsHubPage() {
    return (
        <CalculatorLayout currentPage="/tools">
            <div className="text-center mb-16 pt-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-4">
                    Creator Revenue{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Calculators</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Infloura provides free tools to help creators estimate potential income from YouTube, TikTok, Instagram, and deep brand sponsorships.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                {tools.map((tool) => (
                    <div
                        key={tool.href}
                        className="flex flex-col h-full bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-300 relative group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                            {tool.icon}
                        </div>
                        <h2 className="text-xl font-bold mb-3">{tool.title}</h2>
                        <p className="text-zinc-400 leading-relaxed mb-8 flex-1">
                            {tool.description}
                        </p>
                        <Button
                            variant="secondary"
                            className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-all group-hover:bg-white group-hover:text-black mt-auto"
                            asChild
                        >
                            <Link href={tool.href}>
                                Open Calculator <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>

            <section className="mt-32 text-center py-16 px-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Ready for the full picture?</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-lg">
                    These calculators provide a quick glance. Run a comprehensive 12-month business simulation to see your full potential.
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] px-8 py-6 text-lg rounded-full" asChild>
                    <Link href="/register">Start Free Trial <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
