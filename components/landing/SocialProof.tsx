'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function SocialProof() {
    const t = useTranslations('Landing')
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-4 mt-12 mb-8"
        >
            <p className="text-zinc-500 text-sm font-medium tracking-wide border-b border-white/5 pb-2">
                {t('socialProofText') || 'Used by creators exploring their revenue potential'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 max-w-full px-4">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white tracking-tighter">1M+</span>
                    <span className="text-[10px] uppercase text-zinc-500 leading-tight">Scenarios<br/>Simulated</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white tracking-tighter">50k+</span>
                    <span className="text-[10px] uppercase text-zinc-500 leading-tight">Creators<br/>Onboarded</span>
                </div>
            </div>
        </motion.div>
    )
}
