import { getTranslations } from 'next-intl/server'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { TikTokEngagementCalculator } from '@/components/seo/TikTokEngagementCalculator'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'ToolEngagement.metadata' })
    return {
        title: t('title'),
        description: t('description'),
    }
}

export default async function TikTokEngagementCalculatorPage() {
    const t = await getTranslations('ToolEngagement')
    
    return (
        <CalculatorLayout currentPage={t('titleHighlight')}>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        {t('titlePrefix')} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('titleHighlight')}</span> {t('titleSuffix')}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* The Tool */}
                <TikTokEngagementCalculator />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 pt-20">
                    <h2>{t('seo.whyTitle')}</h2>
                    <p>
                        {t('seo.whyDesc1')}
                    </p>
                    <p>
                        {t('seo.whyDesc2')}
                    </p>
                    <p>
                        {t('seo.whyDesc3')}
                    </p>

                    <div className="bg-cyan-900/10 border-l-4 border-cyan-500 p-6 rounded-r-2xl my-8">
                        <h4 className="text-cyan-400 font-bold mb-2 flex items-center">
                            <span className="mr-2"><Info className="w-5 h-5" /></span>
                            {t('seo.goodTitle')}
                        </h4>
                        <ul className="text-sm mt-2 space-y-1">
                            {(t.raw('seo.levels') as Array<{label: string, text: string}>).map((level, idx) => (
                                <li key={idx}><strong>{level.label}</strong> {level.text}</li>
                            ))}
                        </ul>
                    </div>

                    <h2>{t('seo.pitchTitle')}</h2>
                    <p>
                        {t('seo.pitchDesc')}
                    </p>
                    <p>
                        {t.rich('seo.pitchAction', {
                            link: (chunks) => <Link href="/guides/tiktok-media-kit-template" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">{t('seo.mediaKitLink')}</Link>
                        })}
                    </p>

                    <h2>{t('seo.turnTitle')}</h2>
                    <p>
                        {t('seo.turnDesc')}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/tiktok-earnings-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-cyan-400 w-full">{t('seo.earningsSim')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/influencer-sponsorship-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-cyan-400 w-full">{t('seo.sponsorshipCalc')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
