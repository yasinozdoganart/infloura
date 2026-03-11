'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, DollarSign, TrendingUp, Users, Sparkles, Twitter, Link2, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Platform = 'youtube' | 'tiktok' | 'instagram' | 'multi'

interface CalculatorWidgetProps {
    platform: Platform
}

const nichesList = [
    { value: 'gaming', rpmMultiplier: 0.8 },
    { value: 'tech', rpmMultiplier: 1.3 },
    { value: 'finance', rpmMultiplier: 2.0 },
    { value: 'beauty', rpmMultiplier: 1.1 },
    { value: 'education', rpmMultiplier: 1.5 },
    { value: 'entertainment', rpmMultiplier: 0.7 },
    { value: 'lifestyle', rpmMultiplier: 0.9 },
    { value: 'health', rpmMultiplier: 1.2 },
    { value: 'food', rpmMultiplier: 0.85 },
    { value: 'travel', rpmMultiplier: 1.0 },
]

const countriesList = [
    { value: 'US', label: 'United States', rpmMultiplier: 1.0 },
    { value: 'UK', label: 'United Kingdom', rpmMultiplier: 0.85 },
    { value: 'CA', label: 'Canada', rpmMultiplier: 0.80 },
    { value: 'DE', label: 'Germany', rpmMultiplier: 0.75 },
    { value: 'AU', label: 'Australia', rpmMultiplier: 0.80 },
    { value: 'TR', label: 'Turkey', rpmMultiplier: 0.25 },
    { value: 'IN', label: 'India', rpmMultiplier: 0.15 },
    { value: 'BR', label: 'Brazil', rpmMultiplier: 0.20 },
    { value: 'OTHER', label: 'Other', rpmMultiplier: 0.30 },
]

const platformBaseRPM: Record<Platform, number> = {
    youtube: 4.0,
    tiktok: 0.035,
    instagram: 0.5,
    multi: 3.0,
}

function calculateEstimate(
    platform: Platform,
    monthlyViews: number,
    nicheMultiplier: number,
    countryMultiplier: number,
    t: any
) {
    const baseRPM = platformBaseRPM[platform]
    const effectiveRPM = baseRPM * nicheMultiplier * countryMultiplier

    if (platform === 'youtube') {
        const adRevenue = (monthlyViews * effectiveRPM) / 1000
        const sponsorship = monthlyViews > 50000 ? monthlyViews * 0.0002 * 20 : 0
        const affiliate = monthlyViews * 0.0003 * 30
        return {
            total: adRevenue + sponsorship + affiliate,
            breakdown: [
                { label: t('breakdown.adRevenue'), value: adRevenue, icon: DollarSign },
                { label: t('breakdown.sponsorships'), value: sponsorship, icon: Users },
                { label: t('breakdown.affiliate'), value: affiliate, icon: TrendingUp },
            ]
        }
    }

    if (platform === 'tiktok') {
        const creatorFund = monthlyViews * effectiveRPM
        const brandDeals = monthlyViews > 100000 ? monthlyViews * 0.00005 * 10 : 0
        const affiliate = monthlyViews * 0.0001 * 25
        return {
            total: creatorFund + brandDeals + affiliate,
            breakdown: [
                { label: t('breakdown.creatorFund'), value: creatorFund, icon: DollarSign },
                { label: t('breakdown.brandDeals'), value: brandDeals, icon: Users },
                { label: t('breakdown.affiliate'), value: affiliate, icon: TrendingUp },
            ]
        }
    }

    // Instagram / Multi
    const mainRevenue = (monthlyViews * effectiveRPM) / 1000
    const sponsorship = monthlyViews > 30000 ? monthlyViews * 0.0003 * 15 : 0
    const affiliate = monthlyViews * 0.0002 * 25
    return {
        total: mainRevenue + sponsorship + affiliate,
        breakdown: [
            { label: t('breakdown.contentRevenue'), value: mainRevenue, icon: DollarSign },
            { label: t('breakdown.sponsorships'), value: sponsorship, icon: Users },
            { label: t('breakdown.affiliate'), value: affiliate, icon: TrendingUp },
        ]
    }
}

export default function CalculatorWidget({ platform: defaultPlatform }: CalculatorWidgetProps) {
    const t = useTranslations('CalculatorWidget')
    const tNav = useTranslations('Navigation')
    
    const [platform, setPlatform] = useState<Platform>(defaultPlatform)
    const [views, setViews] = useState('')
    const [niche, setNiche] = useState('tech')
    const [country, setCountry] = useState('US')
    const [result, setResult] = useState<ReturnType<typeof calculateEstimate> | null>(null)
    const [showResult, setShowResult] = useState(false)
    const [copied, setCopied] = useState(false)

    const platformLabels: Record<Platform, string> = {
        youtube: 'YouTube',
        tiktok: 'TikTok',
        instagram: 'Instagram',
        multi: t('labels.platform'),
    }

    const handleCalculate = () => {
        const monthlyViews = parseInt(views.replace(/,/g, '')) || 0
        if (monthlyViews <= 0) return

        const nicheData = nichesList.find(n => n.value === niche)
        const countryData = countriesList.find(c => c.value === country)

        const estimate = calculateEstimate(
            platform,
            monthlyViews,
            nicheData?.rpmMultiplier || 1,
            countryData?.rpmMultiplier || 1,
            t
        )

        setResult(estimate)
        setShowResult(true)
    }

    const formatNumber = (n: number) => {
        if (n >= 1000) return `$${(n / 1000).toFixed(1)}k`
        return `$${Math.round(n).toLocaleString()}`
    }

    const handleShareTwitter = () => {
        if (!result) return
        const formattedTotal = formatNumber(result.total)
        const text = t('shareText', {
            platform: platformLabels[platform],
            total: formattedTotal
        })
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://infloura.com/tools')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            {/* Calculator Form */}
            <Card className="bg-white/[0.03] border-white/10 shadow-2xl shadow-purple-500/5">
                <CardContent className="p-6 md:p-8 space-y-6">
                    {/* Platform selector for multi */}
                    {defaultPlatform === 'multi' && (
                        <div>
                            <label htmlFor="platform-select" className="block text-sm font-medium text-zinc-400 mb-2">{t('labels.platform')}</label>
                            <select
                                id="platform-select"
                                aria-label="Target Platform"
                                value={platform}
                                onChange={(e) => { setPlatform(e.target.value as Platform); setShowResult(false) }}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                            >
                                <option value="youtube" className="bg-zinc-900">YouTube</option>
                                <option value="tiktok" className="bg-zinc-900">TikTok</option>
                                <option value="instagram" className="bg-zinc-900">Instagram</option>
                            </select>
                        </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-4">
                        {/* Monthly Views */}
                        <div>
                            <label htmlFor="views-input" className="block text-sm font-medium text-zinc-400 mb-2">{t('labels.monthlyViews')}</label>
                            <input
                                id="views-input"
                                type="text"
                                inputMode="numeric"
                                aria-label="Monthly Views"
                                placeholder="e.g. 500,000"
                                value={views}
                                onChange={(e) => { setViews(e.target.value); setShowResult(false) }}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                            />
                        </div>

                        {/* Niche */}
                        <div>
                            <label htmlFor="niche-select" className="block text-sm font-medium text-zinc-400 mb-2">{t('labels.niche')}</label>
                            <select
                                id="niche-select"
                                aria-label="Content Niche"
                                value={niche}
                                onChange={(e) => { setNiche(e.target.value); setShowResult(false) }}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                            >
                                {nichesList.map(n => (
                                    <option key={n.value} value={n.value} className="bg-zinc-900">{t(`niches.${n.value}`)}</option>
                                ))}
                            </select>
                        </div>

                        {/* Country */}
                        <div>
                            <label htmlFor="country-select" className="block text-sm font-medium text-zinc-400 mb-2">{t('labels.country')}</label>
                            <select
                                id="country-select"
                                aria-label="Target Audience Country"
                                value={country}
                                onChange={(e) => { setCountry(e.target.value); setShowResult(false) }}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                            >
                                {countriesList.map(c => (
                                    <option key={c.value} value={c.value} className="bg-zinc-900">{c.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <Button
                        onClick={handleCalculate}
                        className="w-full py-6 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:scale-[1.01]"
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        {t('labels.calculate')}
                    </Button>
                </CardContent>
            </Card>

            {/* Results */}
            {showResult && result && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Total Estimate */}
                    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 shadow-2xl shadow-purple-500/10">
                        <CardContent className="p-6 md:p-8 text-center">
                            <p className="text-sm text-zinc-400 mb-2 uppercase tracking-wider">{t('labels.estimatedMonthly')}</p>
                            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                {formatNumber(result.total)}
                            </p>
                            <p className="text-sm text-zinc-500 mt-3">
                                {t('labels.basedOn', {
                                    views: parseInt(views.replace(/,/g, '')).toLocaleString(),
                                    platform: platformLabels[platform]
                                })}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Breakdown */}
                    <div className="grid md:grid-cols-3 gap-3">
                        {result.breakdown.map((item, i) => (
                            <Card key={i} className="bg-white/[0.03] border-white/10">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-purple-500/10">
                                        <item.icon className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500">{item.label}</p>
                                        <p className="font-semibold text-white">${Math.round(item.value).toLocaleString()}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTA */}
                    <Card className="bg-white/[0.03] border-white/10 border-dashed">
                        <CardContent className="p-6 text-center flex flex-col items-center justify-center space-y-4">
                            <div className="space-y-2">
                                <p className="text-zinc-400 text-sm">
                                    {t('labels.detailedProjection')}
                                </p>
                            </div>
                            <Button
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/register">
                                    {t('labels.runSimulation')}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Viral Share Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <Button 
                            onClick={handleShareTwitter}
                            variant="outline" 
                            aria-label="Share results on X"
                            className="bg-[#1DA1F2]/10 text-[#1DA1F2] border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-colors py-6 rounded-xl"
                        >
                            <Twitter className="w-4 h-4 mr-2" />
                            {t('labels.shareX')}
                        </Button>
                        <Button 
                            onClick={handleCopyLink}
                            variant="outline" 
                            aria-label="Copy tool link to clipboard"
                            className="bg-zinc-800/50 text-zinc-300 border-white/10 hover:bg-zinc-800 hover:text-white transition-colors py-6 rounded-xl"
                        >
                            {copied ? <Check className="w-4 h-4 mr-2 text-green-400" /> : <Link2 className="w-4 h-4 mr-2" />}
                            {copied ? t('labels.linkCopied') : t('labels.copyLink')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
