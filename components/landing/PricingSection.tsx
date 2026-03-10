'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from 'next-intl'

export function PricingSection() {
    const t = useTranslations('Pricing')
    const [isAnnual, setIsAnnual] = useState(false)

    const monthlyPrice = 9.90
    const annualPrice = 99.90

    return (
        <section id="pricing" className="py-24 bg-black relative z-10 w-full scroll-mt-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">{t('title')}</h2>
                    <p className="text-zinc-400 text-lg mb-8">{t('sub')}</p>

                    <div className="flex items-center relative w-[280px] max-w-full mx-auto p-1 bg-zinc-900 border border-white/10 rounded-full">
                        {/* Slider Background */}
                        <div
                            className={`absolute top-1 bottom-1 w-[136px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-[136px]' : 'translate-x-0'}`}
                        />

                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`relative w-1/2 py-2 text-sm font-semibold transition-colors duration-300 ${!isAnnual ? 'text-black' : 'text-zinc-400 hover:text-white'}`}
                        >
                            {t('monthly')}
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`relative w-1/2 py-2 text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-1.5 ${isAnnual ? 'text-black' : 'text-zinc-400 hover:text-white'}`}
                        >
                            {t('annual')} <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-0 px-1 py-0 h-4 text-[10px] shadow-none">-17%</Badge>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto px-4">
                    {/* Free */}
                    <Card className="bg-zinc-950 border-white/10 text-white flex flex-col h-full">
                        <CardHeader className="pb-8">
                            <CardTitle className="text-xl">{t('freeTitle')}</CardTitle>
                            <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                                $0
                                <span className="ml-1 text-xl font-medium text-zinc-500">{t('perMonth')}</span>
                            </div>
                            <p className="text-zinc-400 text-sm mt-4">{t('freeSub')}</p>
                        </CardHeader>
                        <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" /> <span className="text-zinc-300">{t('freeFeat1')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" /> <span className="text-zinc-300">{t('freeFeat2')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" /> <span className="text-zinc-300">{t('freeFeat3')}</span></li>
                            </ul>
                            <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white mt-8 h-12 text-md" asChild>
                                <Link href="/register">{t('freeCta')}</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Pro */}
                    <Card className="bg-zinc-900 border-purple-500 text-white relative shadow-[0_0_40px_rgba(168,85,247,0.15)] scale-105 z-10 flex flex-col h-full">
                        <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                            <Badge className="bg-purple-500 text-white border-0 hover:bg-purple-600 px-3 py-1 text-sm font-semibold capitalize tracking-wide shadow-lg">Infloura Pro</Badge>
                        </div>
                        <CardHeader className="pb-8 pt-8">
                            <CardTitle className="text-xl">Infloura Pro</CardTitle>
                            <div className="mt-4 flex items-end">
                                <div className="flex items-baseline text-5xl font-extrabold tracking-tight">
                                    ${isAnnual ? annualPrice : monthlyPrice.toFixed(2)}
                                </div>
                                <div className="ml-2 mb-1 flex flex-col">
                                    <span className="text-md font-medium text-zinc-400">{isAnnual ? t('perYear') : t('perMonth')}</span>
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm mt-4">{t('proSub')}</p>
                        </CardHeader>
                        <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 shadow-purple-500/50 drop-shadow-md" /> <span className="text-zinc-100 font-medium">{t('proFeat1')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 shadow-purple-500/50 drop-shadow-md" /> <span className="text-zinc-100 font-medium">{t('proFeat2')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 shadow-purple-500/50 drop-shadow-md" /> <span className="text-zinc-100 font-medium">{t('proFeat3')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 shadow-purple-500/50 drop-shadow-md" /> <span className="text-zinc-100 font-medium">{t('proFeat4')}</span></li>
                                <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 shadow-purple-500/50 drop-shadow-md" /> <span className="text-zinc-100 font-medium">{t('proFeat5')}</span></li>
                            </ul>
                            <Button className="w-full bg-white text-black hover:bg-zinc-200 mt-8 h-12 text-md font-semibold transition-all hover:scale-[1.02]" asChild>
                                <Link href="/register">{t('proCta')}</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
