import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const allCalculators = [
    { href: '/youtube-money-calculator', key: 'youtube', emoji: '🔴' },
    { href: '/tiktok-money-calculator', key: 'tiktok', emoji: '🔵' },
    { href: '/influencer-income-calculator', key: 'multi', emoji: '🟣' },
    { href: '/instagram-money-calculator', key: 'instagram', emoji: '🩷' },
    { href: '/youtube-rpm-calculator', key: 'youtubeRpm', emoji: '🟠' },
    { href: '/tiktok-earnings-calculator', key: 'tiktokEarnings', emoji: '🩵' },
    { href: '/influencer-sponsorship-calculator', key: 'sponsorship', emoji: '🟡' },
    { href: '/creator-income-calculator', key: 'full', emoji: '🟢' },
    { href: '/youtube-income-per-view', key: 'youtubeView', emoji: '📊' },
    { href: '/tiktok-income-per-view', key: 'tiktokView', emoji: '📈' },
    { href: '/instagram-income-per-post', key: 'instagramPost', emoji: '📸' },
]

interface RelatedCalculatorsProps {
    currentPage: string
}

export default async function RelatedCalculators({ currentPage }: RelatedCalculatorsProps) {
    const t = await getTranslations('Common')
    const related = allCalculators.filter(c => c.href !== currentPage)

    return (
        <section className="mt-16 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">{t('relatedTitle')}</h2>
            <p className="text-zinc-400">{t('relatedDescription')}</p>
            <div className="grid sm:grid-cols-2 gap-3">
                {related.map(calc => (
                    <Link
                        key={calc.href}
                        href={calc.href}
                        className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all group"
                    >
                        <span className="flex items-center gap-3">
                            <span className="text-lg">{calc.emoji}</span>
                            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">{t(`calculatorLabels.${calc.key}`)}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                ))}
            </div>
        </section>
    )
}
