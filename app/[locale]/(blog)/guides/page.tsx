import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { ArrowRight, BookOpen, TrendingUp, Presentation } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const guidesData = [
    {
        id: 'youtubeSponsor',
        href: '/guides/how-to-get-your-first-youtube-sponsor',
        category: 'monetization',
        readTime: 6,
        icon: Presentation,
        gradient: 'from-red-500/20 to-orange-500/20',
        iconColor: 'text-red-400'
    },
    {
        id: 'instagramEngagement',
        href: '/guides/instagram-engagement-rate-guide',
        category: 'analytics',
        readTime: 5,
        icon: TrendingUp,
        gradient: 'from-pink-500/20 to-purple-500/20',
        iconColor: 'text-pink-400'
    },
    {
        id: 'tiktokMediaKit',
        href: '/guides/tiktok-media-kit-template',
        category: 'business',
        readTime: 7,
        icon: BookOpen,
        gradient: 'from-cyan-500/20 to-blue-500/20',
        iconColor: 'text-cyan-400'
    }
]

export default async function GuidesIndexPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Guides' });

    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30">
            <Header />

            <main className="flex-grow pt-24 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            {t('title')} <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">{t('titleHighlight')}</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Guides Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guidesData.map((guide, idx) => (
                            <Link 
                                key={idx} 
                                href={guide.href}
                                className="group block h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`p-4 rounded-2xl bg-white/5 ${guide.iconColor} shadow-inner`}>
                                            <guide.icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                            <span>{t(`categories.${guide.category}`)}</span>
                                            <span>•</span>
                                            <span>{guide.readTime} {t('minRead')}</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors leading-snug">
                                        {t(`items.${guide.id}.title`)}
                                    </h2>
                                    
                                    <p className="text-zinc-400 line-clamp-3 mb-8 flex-grow leading-relaxed">
                                        {t(`items.${guide.id}.description`)}
                                    </p>
                                    
                                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors mt-auto">
                                        {t('readGuide')}
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
