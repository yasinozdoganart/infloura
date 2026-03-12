import { getTranslations } from 'next-intl/server'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { YoutubeTitleGenerator } from '@/components/seo/YoutubeTitleGenerator'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'ToolTitleGenerator.metadata' })
    return {
        title: t('title'),
        description: t('description'),
    }
}

export default async function YouTubeTitleGeneratorPage() {
    const t = await getTranslations('ToolTitleGenerator')
    
    return (
        <CalculatorLayout currentPage={t('titleHighlight')}>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>{t('badge')}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        {t('titlePrefix')} <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">{t('titleHighlight')}</span> {t('titleSuffix')}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* The Tool */}
                <YoutubeTitleGenerator />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-red-400 hover:prose-a:text-red-300 pt-20">
                    <h2>{t('seo.howItWorksTitle')}</h2>
                    <p>
                        {t('seo.howItWorksDesc1')}
                    </p>
                    <p>
                        {t('seo.howItWorksDesc2')}
                    </p>

                    <h2>{t('seo.pillarsTitle')}</h2>
                    <ol>
                        {(t.raw('seo.pillars') as Array<{title: string, text: string}>).map((pillar, idx) => (
                            <li key={idx}><strong>{pillar.title}</strong> {pillar.text}</li>
                        ))}
                    </ol>

                    <h2>{t('seo.thumbnailPairTitle')}</h2>
                    <p>
                        {t.rich('seo.thumbnailPairDesc', {
                            link: (chunks) => <Link href="/youtube-thumbnail-downloader" className="text-red-400 hover:text-red-300 underline underline-offset-4">{t('seo.thumbnailLink')}</Link>
                        })}
                    </p>

                    <h2>{t('seo.viralTitle')}</h2>
                    <p>
                        {t('seo.viralDesc')}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/youtube-money-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">{t('seo.adRevenueSim')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/1m-youtuber-income" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">{t('seo.valueMillionViews')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
