'use client'

import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Users, DollarSign, Youtube, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface CreatorProps {
    name: string
    handle: string
    platform: 'YouTube' | 'TikTok' | 'Instagram'
    niche: string
    followers: string
    avgViews: string
    estMonthlyEarnings: string
    estYearlyEarnings: string
    imageUrl: string
    bio: string
    calculatorLink: string
    calculatorText: string
}

export function CreatorProfile({ creator }: { creator: CreatorProps }) {
    const tCommon = useTranslations('Common');
    const tCreators = useTranslations('Creators');
    const PlatformIcon = creator.platform === 'YouTube' ? Youtube : creator.platform === 'TikTok' ? Users : Twitter

    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30">
            <Header />

            <main className="flex-grow pt-24 pb-32">
                <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-12 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-white transition-colors">{tCommon('home')}</Link>
                        <div className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-zinc-600" />
                            <Link href="/creators" className="hover:text-white transition-colors">{tCreators('titleHighlight')}</Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-zinc-600" />
                            <span className="text-cyan-400 font-medium">{creator.name} {tCreators('netWorth')}</span>
                        </div>
                    </nav>

                    {/* Top Hero Section */}
                    <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start mb-20">
                        
                        {/* Left: Bio & Overview */}
                        <div className="space-y-8">
                            <div className="flex items-center space-x-6">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/10 shrink-0 bg-white/5 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-3xl font-bold text-white">
                                        {creator.name.charAt(0)}
                                    </div>
                                    <img 
                                        src={creator.imageUrl} 
                                        alt={`${creator.name} profile`}
                                        className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-300"
                                        onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                                        onError={(e) => e.currentTarget.style.display = 'none'}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                                        {creator.name}
                                        <CheckCircle2 className="w-8 h-8 text-cyan-400 fill-cyan-400/20 shrink-0" />
                                    </h1>
                                    <p className="text-xl text-zinc-400 truncate">@{creator.handle}</p>
                                </div>
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed font-light">
                                {creator.bio}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300">
                                    <PlatformIcon className="w-4 h-4 mr-2 text-cyan-400" />
                                    {tCreators(`platforms.${creator.platform.toLowerCase()}`)} 
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300">
                                    Niche: <span className="text-white ml-2">{tCreators(`niches.${creator.niche.toLowerCase()}`)}</span>
                                </span>
                            </div>
                        </div>

                        {/* Right: Earnings Card */}
                        <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/20 border border-cyan-500/30 rounded-3xl p-8 relative overflow-hidden ring-1 ring-white/5 shadow-2xl shadow-cyan-900/20">
                            <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                            
                            <h2 className="text-lg font-medium text-cyan-400 mb-6 flex items-center">
                                <DollarSign className="w-5 h-5 mr-2" />
                                {tCreators('estRevenue')}
                            </h2>

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wide font-medium">{tCreators('monthlyAdRevenue')}</p>
                                    <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                                        ${creator.estMonthlyEarnings}<span className="text-2xl text-zinc-500 font-normal">{tCreators('perMonth')}</span>
                                    </p>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0" />

                                <div>
                                    <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wide font-medium">{tCreators('yearlyRunRate')}</p>
                                    <p className="text-3xl font-bold tracking-tight text-white">
                                        ${creator.estYearlyEarnings}<span className="text-xl text-zinc-500 font-normal">{tCreators('perYear')}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-black/40 rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-zinc-400 text-center leading-relaxed">
                                    {tCreators('proprietaryAlgorithm', { niche: tCreators(`niches.${creator.niche.toLowerCase()}`) })}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-20">
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex items-center justify-between group hover:bg-white/[0.04] transition-colors">
                            <div>
                                <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">{tCreators('totalFollowers')}</p>
                                <p className="text-3xl font-bold text-white">{creator.followers}</p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                                <Users className="w-8 h-8 text-cyan-400" />
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex items-center justify-between group hover:bg-white/[0.04] transition-colors">
                            <div>
                                <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">{tCreators('avgViewsVideo')}</p>
                                <p className="text-3xl font-bold text-white">{creator.avgViews}</p>
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                                <TrendingUp className="w-8 h-8 text-cyan-400" />
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center p-12 bg-white/[0.02] border border-white/5 rounded-3xl">
                        <h3 className="text-3xl font-bold text-white mb-4">{tCreators('wantNumbersTitle', { name: creator.name })}</h3>
                        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                            {tCreators('wantNumbersDesc')}
                        </p>
                        <Button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-6 rounded-xl text-lg font-semibold h-auto" asChild>
                            <Link href={creator.calculatorLink}>
                                {creator.calculatorText}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    )
}
