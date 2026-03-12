'use client'

import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
    const t = useTranslations('Navigation')
    const tAnnounce = useTranslations('Announcement')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const tools = [
        { name: t('youtubeMoneyCalculator'), href: '/youtube-money-calculator' },
        { name: t('tiktokMoneyCalculator'), href: '/tiktok-money-calculator' },
        { name: t('instagramMoneyCalculator'), href: '/instagram-money-calculator' },
        { name: t('influencerIncomeCalculator'), href: '/influencer-income-calculator' },
        { name: t('creatorIncomeCalculator'), href: '/creator-income-calculator' },
        { name: t('sponsorshipCalculator'), href: '/influencer-sponsorship-calculator' },
    ]
    return (
        <div className="fixed top-0 w-full z-50 flex flex-col">
            {/* Announcement Banner */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border-b border-white/5 px-4 py-2.5 text-center text-sm backdrop-blur-md">
                <p className="text-zinc-300 font-medium flex items-center justify-center gap-2">
                    <span className="text-base leading-none">🎉</span>
                    <span>
                        <strong className="text-white font-bold tracking-wide">
                           {tAnnounce('text').split('!')[0]}!
                        </strong>
                        {' '}{tAnnounce('text').split('!')[1]}
                    </span>
                </p>
            </div>

            <header className="w-full bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-8">
                        <Link 
                            href="/" 
                            aria-label="Infloura Home"
                            className={`hover:opacity-80 transition-opacity flex items-center text-white font-['Syncopate'] tracking-widest text-xl`}
                        >
                            infloura
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button 
                                    aria-label="Open creator calculators menu"
                                    aria-haspopup="true"
                                    className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2"
                                >
                                    {t('tools')} <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                    <div className="w-64 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                        <div className="px-3 py-2">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">{t('creatorCalculators')}</p>
                                        </div>
                                        {tools.map((tool) => (
                                            <Link
                                                key={tool.href}
                                                href={tool.href}
                                                className="px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors truncate"
                                            >
                                                {tool.name}
                                            </Link>
                                        ))}
                                        <div className="px-3 py-2 mt-1 border-t border-white/5">
                                            <Link href="/tools" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                                                {t('viewAllTools')} &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/#pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                {t('pricing')}
                            </Link>

                            <Link href="/guides" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                {t('guides')}
                            </Link>

                            <Link href="/creators" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                {t('creators')}
                            </Link>

                            <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                {t('about')}
                            </Link>
                        </nav>
                    </div>

                    <div className="flex gap-3 md:gap-4 items-center">
                        <LanguageSwitcher />

                        <div className="md:hidden flex items-center">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                className="p-2 text-zinc-300 hover:text-white transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                            
                            {/* Mobile Menu Dropdown */}
                            {isMenuOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1]" 
                                        onClick={() => setIsMenuOpen(false)}
                                    />
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1 ring-1 ring-white/10">
                                        <div className="px-3 py-2 border-b border-white/5 mb-1">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Navigation</p>
                                        </div>
                                        <Link 
                                            href="/tools" 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
                                        >
                                            {t('allTools')}
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                        </Link>
                                        <Link 
                                            href="/#pricing" 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {t('pricing')}
                                        </Link>
                                        <Link 
                                            href="/creators" 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {t('creators')}
                                        </Link>
                                        <Link 
                                            href="/about" 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {t('about')}
                                        </Link>
                                        <div className="h-px bg-white/5 my-1" />
                                        <Link 
                                            href="/login" 
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {t('logIn')}
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>

                        <Button variant="ghost" className="hidden sm:flex text-zinc-300 hover:text-black hover:bg-white transition-colors" asChild>
                            <Link href="/login">{t('logIn')}</Link>
                        </Button>
                        <Button className="hidden sm:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium border-0 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]" asChild>
                            <Link href="/register">{t('tryForFree')}</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    )
}
