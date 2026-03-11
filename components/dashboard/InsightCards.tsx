'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'

interface InsightCardsProps {
    efficiencyScore: number | string
    revenueGrowth: number
}

export function InsightCards({ efficiencyScore, revenueGrowth }: InsightCardsProps) {
    const t = useTranslations('Dashboard')
    const scoreNum = typeof efficiencyScore === 'string' ? parseFloat(efficiencyScore) : efficiencyScore

    const insights = [
        {
            type: 'efficiency',
            icon: <Sparkles className="w-5 h-5 text-purple-400" />,
            title: t('insightEfficiencyTitle') || 'Revenue Efficiency',
            value: `$${scoreNum} RPM`,
            desc: scoreNum < 5 
                ? t('insightEfficiencyLow') || 'Your estimated RPM is lower than the average creator in your niche.'
                : t('insightEfficiencyHigh') || 'Your revenue efficiency is above average. Keep optimizing your high-paying content.',
            suggestion: scoreNum < 5 
                ? t('insightEfficiencySuggest') || 'Try targeting higher CPM topics like finance, tech, or business.' 
                : null,
            color: 'border-purple-500/20 bg-purple-500/5'
        },
        {
            type: 'growth',
            icon: <TrendingUp className="w-5 h-5 text-green-400" />,
            title: t('insightGrowthTitle') || 'Growth Momentum',
            value: `${revenueGrowth > 0 ? '+' : ''}${revenueGrowth.toFixed(1)}%`,
            desc: revenueGrowth > 10 
                ? t('insightGrowthHigh') || 'Excellent growth this month! Your velocity is sustainable.'
                : t('insightGrowthLow') || 'Growth is steady, but there is room to accelerate your distribution.',
            suggestion: revenueGrowth <= 10 
                ? t('insightGrowthSuggest') || 'Experiment with shorter-form content to drive discovery.'
                : null,
            color: 'border-green-500/20 bg-green-500/5'
        }
    ]

    return (
        <div className="grid md:grid-cols-2 gap-4 mb-8">
            {insights.map((insight, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card className={`h-full border ${insight.color} backdrop-blur-sm overflow-hidden group`}>
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                                    {insight.icon}
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">{insight.title}</p>
                                    <p className="text-xl font-black text-white">{insight.value}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-sm text-zinc-400 leading-relaxed italic">
                                    "{insight.desc}"
                                </p>
                                
                                {insight.suggestion && (
                                    <div className="pt-3 border-t border-white/5 flex items-start gap-2">
                                        <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                                        <p className="text-xs text-zinc-300 font-medium">
                                            <span className="text-yellow-400/80 mr-1">Pro Tip:</span>
                                            {insight.suggestion}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}
