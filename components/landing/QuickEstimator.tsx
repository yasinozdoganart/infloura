'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function QuickEstimator() {
    const t = useTranslations('Landing')
    const [views, setViews] = useState('100000')
    const [revenue, setRevenue] = useState(0)

    useEffect(() => {
        const v = parseInt(views) || 0
        // Simple base calculation for quick preview: $4 RPM
        setRevenue((v * 4) / 1000)
    }, [views])

    return (
        <section className="py-12 relative z-10 max-w-4xl mx-auto px-6">
            <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Sparkles className="w-32 h-32 text-purple-500" />
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            {t('quickEstimateTitle') || 'Quick Income Preview'}
                        </h3>
                        <p className="text-zinc-400 text-sm">
                            {t('quickEstimateDesc') || 'Enter your monthly views to see an instant revenue estimation based on industry averages.'}
                        </p>
                        
                        <div className="relative mt-6 max-w-xs">
                            <input 
                                type="number" 
                                value={views}
                                onChange={(e) => setViews(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                placeholder="Monthly Views"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium pointer-events-none">
                                {t('monthlyViews').split(' ')[0]}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl border border-purple-500/20 min-w-[240px] relative overflow-hidden group-hover:shadow-[0_0_50px_rgba(168,85,247,0.1)] transition-all">
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">{t('estRevenue')}</p>
                        <AnimatePresence mode="wait">
                            <motion.p 
                                key={revenue}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                ${revenue.toLocaleString()}
                            </motion.p>
                        </AnimatePresence>
                        <p className="text-zinc-500 text-[10px] mt-4 flex items-center gap-1">
                            Based on $4.00 RPM <ArrowRight className="w-3 h-3" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
