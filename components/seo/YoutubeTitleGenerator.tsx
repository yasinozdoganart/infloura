'use client'

import { useState } from 'react'
import { Sparkles, Loader2, Copy, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface GeneratedTitle {
    title: string;
    reasoning: string;
}

export function YoutubeTitleGenerator() {
    const t = useTranslations('ToolTitleGenerator')
    const [topic, setTopic] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState<GeneratedTitle[]>([])
    const [error, setError] = useState<string | null>(null)
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!topic.trim()) return

        setIsLoading(true)
        setError(null)
        setResults([])

        try {
            const res = await fetch('/api/generate-titles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || t('errorFailed'))
            }

            if (data.titles && Array.isArray(data.titles)) {
                setResults(data.titles)
            } else {
                throw new Error(t('errorFailed'))
            }
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <form onSubmit={handleGenerate} className="relative z-10 space-y-6">
                    <div>
                        <label htmlFor="topic" className="block text-sm font-medium text-zinc-400 mb-2 flex items-center">
                            <Sparkles className="w-4 h-4 mr-2 text-red-500" /> {t('label')}
                        </label>
                        <textarea
                            id="topic"
                            rows={3}
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder={t('placeholder')}
                            className="block w-full p-4 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all outline-none resize-none"
                            required
                        />
                    </div>
                    
                    <Button 
                        type="submit"
                        disabled={isLoading || !topic.trim()}
                        className="w-full bg-red-600 hover:bg-red-500 text-white py-6 rounded-xl text-lg font-semibold shadow-lg shadow-red-900/20 disabled:opacity-50 transition-all"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                {t('buttonLoading')}
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5 mr-2" />
                                {t('button')}
                            </>
                        )}
                    </Button>

                    {error && (
                        <p className="flex items-center justify-center text-red-400 mt-4 text-sm font-medium">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </p>
                    )}
                </form>
            </div>

            {results.length > 0 && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-xl font-bold text-white mb-6 px-2">{t('resultsTitle')}</h3>
                    <div className="grid gap-4">
                        {results.map((item, idx) => (
                            <div key={idx} className="bg-[#111] border border-white/10 hover:border-red-500/30 transition-colors rounded-2xl p-6 group">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 flex-grow">
                                        <h4 className="text-xl font-bold text-white leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-zinc-500 flex items-start">
                                            <ChevronRight className="w-4 h-4 mr-1 mt-0.5 shrink-0 text-red-500" />
                                            {item.reasoning}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(item.title, idx)}
                                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                                        title={t('copyTooltip')}
                                    >
                                        {copiedIndex === idx ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <Copy className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
