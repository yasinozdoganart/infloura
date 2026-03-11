'use client'

import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import Link from 'next/link'
import { ArrowRight, Youtube, Music2, Instagram, LineChart, Target, Coins, Image as ImageIcon, Sparkles, Activity, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const toolsData = [
    {
        id: 'youtube',
        href: '/youtube-money-calculator',
        icon: <Youtube className="w-6 h-6 text-red-500" />,
        preview: { views: '100k', metric: 'RPM', val: '$4.2', result: '$420' }
    },
    {
        id: 'tiktok',
        href: '/tiktok-money-calculator',
        icon: <Music2 className="w-6 h-6 text-cyan-400" />,
        preview: { views: '1M', metric: 'CPM', val: '$0.03', result: '$30' }
    },
    {
        id: 'instagram',
        href: '/instagram-money-calculator',
        icon: <Instagram className="w-6 h-6 text-pink-500" />,
        preview: { views: '50k', metric: 'Rate', val: '$500', result: '$500' }
    },
    {
        id: 'multi',
        href: '/influencer-income-calculator',
        icon: <LineChart className="w-6 h-6 text-purple-400" />,
        preview: { views: '250k', metric: 'Avg', val: '$2.5', result: '$625' }
    },
    {
        id: 'full',
        href: '/creator-income-calculator',
        icon: <Coins className="w-6 h-6 text-green-400" />,
        preview: { views: 'Total', metric: 'Est', val: 'Annual', result: '$45k' }
    },
    {
        id: 'sponsorship',
        href: '/influencer-sponsorship-calculator',
        icon: <Target className="w-6 h-6 text-yellow-400" />,
        preview: { views: 'Post', metric: 'Deal', val: '10k', result: '$150' }
    }
]

const freeToolsData = [
    {
        id: 'thumbnail',
        href: '/youtube-thumbnail-downloader',
        icon: <ImageIcon className="w-6 h-6 text-red-400" />
    },
    {
        id: 'title',
        href: '/youtube-title-generator',
        icon: <Sparkles className="w-6 h-6 text-yellow-400" />
    },
    {
        id: 'engagement',
        href: '/tiktok-engagement-calculator',
        icon: <Activity className="w-6 h-6 text-cyan-400" />
    }
]

export default function ToolsHubPage() {
    const t = useTranslations('Tools')

    return (
        <CalculatorLayout currentPage="/tools">
            <div className="text-center mb-16 pt-8">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-6 mt-4"
                >
                    {t('title')}{' '}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">{t('titleHighlight')}</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {t('description')}
                </motion.p>
            </div>

            {/* Financial Calculators Section */}
            <div className="mb-8 max-w-6xl mx-auto px-4 md:px-0">
                <h2 className="text-2xl font-bold text-white mb-2">{t('financialHeading')}</h2>
                <p className="text-zinc-500">{t('financialSub')}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 px-4 md:px-0">
                {toolsData.map((tool, idx) => (
                    <motion.div
                        key={tool.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="flex flex-col h-full bg-[#09090b] border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 hover:border-purple-500/30 transition-all duration-300 relative group shadow-2xl shadow-black hover:shadow-purple-500/10"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:scale-110 transition-all duration-300">
                                <div className="group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                                    {tool.icon}
                                </div>
                            </div>
                            
                            {/* Mini Preview Label */}
                            <div className="flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Live Preview</span>
                                <div className="flex gap-2 text-[11px] font-mono text-zinc-400">
                                    <span className="px-1.5 py-0.5 rounded bg-white/5">{tool.preview.views}</span>
                                    <span className="px-1.5 py-0.5 rounded bg-white/5">{tool.preview.val}</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                            {t(`calculatorItems.${tool.id}.title`)}
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 group-hover:text-zinc-300 transition-colors">
                            {t(`calculatorItems.${tool.id}.description`)}
                        </p>

                        {/* Interactive Preview Section */}
                        <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/5 group-hover:border-purple-500/20 transition-all overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-2 text-[10px] font-bold text-purple-500/50">Est.</div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase text-zinc-500 tracking-tighter">{tool.preview.metric}</p>
                                    <p className="font-bold text-white tracking-tight">{tool.preview.val}</p>
                                </div>
                                <div className="h-8 w-px bg-white/5 mx-2" />
                                <div className="text-right">
                                    <p className="text-[10px] uppercase text-zinc-500 tracking-tighter">Revenue</p>
                                    <p className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text truncate">
                                        {tool.preview.result}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button
                            variant="secondary"
                            className="w-full bg-white/5 hover:bg-purple-600 text-white border border-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                            asChild
                        >
                            <Link href={tool.href}>
                                {t('openCalculator')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>

            {/* Technical Utilities Section */}
            <div className="mb-8 max-w-6xl mx-auto px-4 md:px-0 mt-32">
                <h2 className="text-2xl font-bold text-white mb-2">{t('technicalHeading')}</h2>
                <p className="text-zinc-500">{t('technicalSub')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0">
                {freeToolsData.map((tool) => (
                    <motion.div
                        key={tool.href}
                        whileHover={{ y: -5 }}
                        className="flex flex-col h-full bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:bg-zinc-800/50 hover:border-white/20 transition-all duration-300 relative group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                            {tool.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t(`utilityItems.${tool.id}.title`)}</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8 flex-1">
                            {t(`utilityItems.${tool.id}.description`)}
                        </p>
                        <Button
                            variant="secondary"
                            className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-all group-hover:bg-white group-hover:text-black mt-auto"
                            asChild
                        >
                            <Link href={tool.href}>
                                {t('launchTool')} <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>

            <section className="mt-32 text-center py-16 px-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 max-w-4xl mx-auto shadow-2xl shadow-purple-500/5">
                <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-lg">
                    {t('ctaDescription')}
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] px-8 py-6 text-lg rounded-full" asChild>
                    <Link href="/register">{t('ctaButton')} <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
