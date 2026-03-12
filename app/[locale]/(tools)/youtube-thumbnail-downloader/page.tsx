import { getTranslations } from 'next-intl/server'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { YoutubeThumbnailDownloader } from '@/components/seo/YoutubeThumbnailDownloader'
import Link from 'next/link'
import { BadgeCheck, ArrowRight } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'ToolDownloader.metadata' })
    return {
        title: t('title'),
        description: t('description'),
    }
}

export default async function YouTubeThumbnailDownloaderPage() {
    const t = await getTranslations('ToolDownloader')
    
    return (
        <CalculatorLayout currentPage={t('titleHighlight')}>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        {t('titlePrefix')} <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">{t('titleHighlight')}</span> {t('titleSuffix')}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* The Tool */}
                <YoutubeThumbnailDownloader />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-red-400 hover:prose-a:text-red-300 pt-20">
                    <h2>{t('seo.howToTitle')}</h2>
                    <p>
                        {t('seo.howToDesc')}
                    </p>
                    <ol>
                        {(t.raw('seo.steps') as string[]).map((step, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: step.replace(/`([^`]+)`/g, '<code>$1</code>') }} />
                        ))}
                    </ol>

                    <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                        <h4 className="text-red-400 font-bold mb-2 flex items-center">
                            <BadgeCheck className="w-5 h-5 mr-2" />
                            {t('seo.blurryTitle')}
                        </h4>
                        <p className="m-0 text-sm">
                            {t('seo.blurryDesc')}
                        </p>
                    </div>

                    <h2>{t('seo.creatorsTitle')}</h2>
                    <p>
                        {t('seo.creatorsDesc')}
                    </p>
                    <p>
                        {t.rich('seo.creatorsAction', {
                            link: (chunks) => <Link href="/youtube-title-generator" className="text-red-400 hover:text-red-300 underline underline-offset-4">{t('seo.aiTitleLink')}</Link>
                        })}
                    </p>

                    <h2>{t('seo.worthTitle')}</h2>
                    <p>
                        {t('seo.worthDesc')}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/youtube-money-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">{t('seo.youtubeIncomeSim')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/influencer-sponsorship-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">{t('seo.sponsorshipCalc')}</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
