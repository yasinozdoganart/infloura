'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Gamepad2, Landmark, Camera, Microscope } from 'lucide-react'

const examples = [
    {
        niche: 'Gaming',
        icon: <Gamepad2 className="w-5 h-5 text-red-500" />,
        subs: '100k',
        views: '1.2M',
        est: '$2,400',
        color: 'from-red-500/20'
    },
    {
        niche: 'Finance',
        icon: <Landmark className="w-5 h-5 text-green-500" />,
        subs: '100k',
        views: '500k',
        est: '$8,700',
        color: 'from-green-500/20'
    },
    {
        niche: 'Tech',
        icon: <Camera className="w-5 h-5 text-blue-500" />,
        subs: '100k',
        views: '800k',
        est: '$5,200',
        color: 'from-blue-500/20'
    }
]

export function IncomeExamples() {
    const t = useTranslations('Landing')
    
    return (
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    {t('examplesTitle') || 'Creator Income Examples'}
                </h2>
                <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                    {t('examplesDesc') || 'See how different niches impact your earning potential. Your niche is often more important than your subscriber count.'}
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {examples.map((ex, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-all"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${ex.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-white/5">
                                    {ex.icon}
                                </div>
                                <h4 className="font-bold text-xl">{ex.niche}</h4>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-500">{t('subscribers')}</span>
                                    <span className="text-white font-medium">{ex.subs}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-500">{t('monthlyViews')}</span>
                                    <span className="text-white font-medium">{ex.views}</span>
                                </div>
                                <div className="h-px bg-white/5" />
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-500 text-xs font-bold uppercase">{t('estRevenue')}</span>
                                    <span className="text-2xl font-black text-white">{ex.est}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
