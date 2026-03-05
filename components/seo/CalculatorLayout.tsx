import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CalculatorLayoutProps {
    children: React.ReactNode
    currentPage?: string
}

const calculatorLinks = [
    { href: '/youtube-money-calculator', label: 'YouTube Calculator' },
    { href: '/tiktok-money-calculator', label: 'TikTok Calculator' },
    { href: '/influencer-income-calculator', label: 'Influencer Calculator' },
    { href: '/instagram-money-calculator', label: 'Instagram Calculator' },
    { href: '/youtube-rpm-calculator', label: 'YouTube RPM Calculator' },
    { href: '/tiktok-earnings-calculator', label: 'TikTok Earnings Calculator' },
    { href: '/influencer-sponsorship-calculator', label: 'Sponsorship Calculator' },
    { href: '/creator-income-calculator', label: 'Creator Income Calculator' },
    { href: '/youtube-income-per-view', label: 'YouTube Income Per View' },
    { href: '/tiktok-income-per-view', label: 'TikTok Income Per View' },
    { href: '/instagram-income-per-post', label: 'Instagram Income Per Post' },
    { href: '/how-much-do-youtubers-make', label: 'How Much YouTubers Make' },
    { href: '/how-much-do-tiktokers-make', label: 'How Much TikTokers Make' },
    { href: '/how-much-do-influencers-make', label: 'How Much Influencers Make' },
    { href: '/youtube-income-per-1000-views', label: 'YouTube CPM Tool' },
    { href: '/youtube-income-per-subscriber', label: 'Subscriber Value' },
    { href: '/tiktok-income-per-1000-views', label: 'TikTok CPM Tool' },
    { href: '/10k-youtuber-income', label: '10K YouTuber Income' },
    { href: '/50k-youtuber-income', label: '50K YouTuber Income' },
    { href: '/100k-youtuber-income', label: '100K YouTuber Income' },
    { href: '/1m-youtuber-income', label: '1M YouTuber Income' },
]

export default function CalculatorLayout({ children, currentPage }: CalculatorLayoutProps) {
    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-bold text-2xl tracking-tighter text-white leading-none hover:opacity-80 transition-opacity">
                        Infloura
                    </Link>
                    <div className="flex gap-3">
                        <Button variant="ghost" className="text-zinc-300 hover:text-black hover:bg-white transition-colors" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25" asChild>
                            <Link href="/register">Start Free Trial</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#030303]">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    {/* Other Calculators */}
                    <div className="mb-8">
                        <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wider font-medium">More Free Tools</p>
                        <div className="flex flex-wrap gap-3">
                            {calculatorLinks
                                .filter(link => link.href !== currentPage)
                                .map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                        <Link href="/" className="font-bold text-xl tracking-tighter text-white hover:opacity-80 transition-opacity">
                            Infloura
                        </Link>
                        <p className="text-sm text-zinc-500">
                            © {new Date().getFullYear()} Infloura. Structured business tools for creators.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
