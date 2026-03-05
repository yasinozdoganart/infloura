import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const allCalculators = [
    { href: '/youtube-money-calculator', label: 'YouTube Money Calculator', emoji: '🔴' },
    { href: '/tiktok-money-calculator', label: 'TikTok Money Calculator', emoji: '🔵' },
    { href: '/influencer-income-calculator', label: 'Influencer Income Calculator', emoji: '🟣' },
    { href: '/instagram-money-calculator', label: 'Instagram Money Calculator', emoji: '🩷' },
    { href: '/youtube-rpm-calculator', label: 'YouTube RPM Calculator', emoji: '🟠' },
    { href: '/tiktok-earnings-calculator', label: 'TikTok Earnings Calculator', emoji: '🩵' },
    { href: '/influencer-sponsorship-calculator', label: 'Sponsorship Rate Calculator', emoji: '🟡' },
    { href: '/creator-income-calculator', label: 'Creator Income Calculator', emoji: '🟢' },
    { href: '/youtube-income-per-view', label: 'YouTube Income Per View', emoji: '📊' },
    { href: '/tiktok-income-per-view', label: 'TikTok Income Per View', emoji: '📈' },
    { href: '/instagram-income-per-post', label: 'Instagram Income Per Post', emoji: '📸' },
    { href: '/how-much-do-youtubers-make', label: 'How Much Do YouTubers Make', emoji: '🎬' },
    { href: '/how-much-do-tiktokers-make', label: 'How Much Do TikTokers Make', emoji: '🎵' },
    { href: '/how-much-do-influencers-make', label: 'How Much Do Influencers Make', emoji: '⭐' },
    { href: '/youtube-income-per-1000-views', label: 'YouTube CPM Tool', emoji: '💵' },
    { href: '/youtube-income-per-subscriber', label: 'Subscriber Value', emoji: '👥' },
    { href: '/tiktok-income-per-1000-views', label: 'TikTok CPM Tool', emoji: '📱' },
    { href: '/10k-youtuber-income', label: '10K YouTuber Income', emoji: '🥉' },
    { href: '/50k-youtuber-income', label: '50K YouTuber Income', emoji: '🥈' },
    { href: '/100k-youtuber-income', label: '100K YouTuber Income', emoji: '💿' },
    { href: '/1m-youtuber-income', label: '1M YouTuber Income', emoji: '🥇' },
]

interface RelatedCalculatorsProps {
    currentPage: string
}

export default function RelatedCalculators({ currentPage }: RelatedCalculatorsProps) {
    const related = allCalculators.filter(c => c.href !== currentPage)

    return (
        <section className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Related Calculators</h2>
            <p className="text-zinc-400">Explore more free creator tools to estimate earnings across different platforms and revenue streams.</p>
            <div className="grid sm:grid-cols-2 gap-3">
                {related.map(calc => (
                    <Link
                        key={calc.href}
                        href={calc.href}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                    >
                        <span className="flex items-center gap-3">
                            <span className="text-lg">{calc.emoji}</span>
                            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">{calc.label}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                ))}
            </div>
        </section>
    )
}
