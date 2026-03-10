'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import RoadmapDisplay from '@/components/ai/RoadmapDisplay'
import RiskCard from '@/components/ai/RiskCard'
import { createClient } from '@/lib/supabase/client'
import { History, Plus, Trash2, Lock, Sparkles, Zap, ArrowRight, TrendingUp, BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import { CpuArchitecture } from '@/components/ui/cpu-architecture'

export default function RoadmapPage() {
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>(null)
    const [history, setHistory] = useState<any[]>([])
    const [viewingHistory, setViewingHistory] = useState(false)
    const [latestPlatform, setLatestPlatform] = useState<string>("your primary platform")
    const [profile, setProfile] = useState<any>(null)
    const [isInitialLoading, setIsInitialLoading] = useState(true)

    useEffect(() => {
        const loadHistory = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                const { data: reports } = await supabase.from('ai_reports')
                    .select('*')
                    .eq('user_id', user.id)
                    .eq('report_type', 'roadmap')
                    .order('created_at', { ascending: false })

                if (reports && reports.length > 0) {
                    setHistory(reports)
                    setData(reports[0].content)
                }

                const { data: profileData } = await supabase.from('profiles').select('*').eq('id', user.id).single()
                if (profileData) setProfile(profileData)

                // Also fetch latest simulation for the Risk Card
                const { data: latestSim } = await supabase.from('simulations').select('platform_name').eq('user_id', user.id).order('created_at', { ascending: false }).limit(1).single()
                if (latestSim) {
                    setLatestPlatform(latestSim.platform_name)
                }
            }
            setIsInitialLoading(false)
        }
        loadHistory()
    }, [])

    const deleteHistoryItem = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        try {
            const { error } = await supabase.from('ai_reports').delete().eq('id', id)
            if (error) throw error
            setHistory(prev => prev.filter(item => item.id !== id))
            toast.success('Strategy deleted')

            // if we deleted the currently viewing item from history and it matches what's on screen...
            // actually user handles that, it's fine just to remove from list.
            if (history.length === 1) { // if this was the last item, go back
                setViewingHistory(false)
                setData(null)
            }
        } catch (err: any) {
            toast.error(err.message || 'Error deleting strategy')
        }
    }

    const fetchRoadmap = async () => {
        setLoading(true)
        try {
            const { data: { user } } = await supabase.auth.getUser()

            let simPayload = null
            if (user) {
                const { data: latestSim } = await supabase.from('simulations').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(1).single()
                if (latestSim) {
                    setLatestPlatform(latestSim.platform_name)
                    simPayload = {
                        inputData: latestSim.input_data,
                        simulationResult: { scenario: 'Realistic', totalRevenue: latestSim.realistic_projection[latestSim.realistic_projection.length - 1]?.totalRevenue || 0 }
                    }
                }
            }

            if (!simPayload) {
                toast.error('You need to run a simulation first before generating a roadmap!')
                setLoading(false)
                return
            }

            const res = await fetch('/api/ai-roadmap', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    reportType: 'roadmap',
                    inputData: { ...simPayload.inputData, platform: latestPlatform },
                    simulationResult: simPayload.simulationResult
                })
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error)
            setData(json)

            // Reload history to add new one
            if (user) {
                const { data: reports } = await supabase.from('ai_reports')
                    .select('*')
                    .eq('user_id', user.id)
                    .eq('report_type', 'roadmap')
                    .order('created_at', { ascending: false })
                if (reports) setHistory(reports)
            }
            setViewingHistory(false)
            toast.success('Strategy generated and saved!')
        } catch (err: any) {
            toast.error(err.message || 'Error fetching roadmap')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        AI Roadmap <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-sm">PRO</Badge>
                    </h1>
                    <p className="text-zinc-500 mt-2">Your month-by-month strategic action plan generated by AI.</p>
                </div>
                {history.length > 0 && profile?.plan_type !== 'free' && (
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={() => setViewingHistory(!viewingHistory)}>
                            <History className="w-4 h-4 mr-2" />
                            {viewingHistory ? 'View Current' : 'History'}
                        </Button>
                        <Button onClick={fetchRoadmap} disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Plus className="w-4 h-4 mr-2" />
                            {loading ? 'Generating...' : 'New Strategy'}
                        </Button>
                    </div>
                )}
            </div>

            {isInitialLoading ? (
                <div className="flex items-center justify-center py-20 min-h-[400px]">
                    <div className="animate-pulse text-zinc-400">Loading your strategy access...</div>
                </div>
            ) : profile?.plan_type === 'free' ? (
                <div className="mt-8">
                    <Card className="border-0 shadow-2xl bg-zinc-950 text-white overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/10"></div>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Sparkles className="w-32 h-32" />
                        </div>

                        <CardContent className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-purple-500/50">
                                <Lock className="w-8 h-8 text-purple-400" />
                            </div>

                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                Unlock AI-Powered Growth Strategies
                            </h2>

                            <p className="text-zinc-400 text-lg max-w-lg mb-8">
                                AI Roadmap is a premium feature that generates a custom, month-by-month strategic plan based on your simulation data.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 w-full max-w-md mb-10">
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <Zap className="w-5 h-5 text-yellow-400" />
                                    <span className="text-sm font-medium">Monthly Action Steps</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                    <span className="text-sm font-medium">Revenue Optimization</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <BrainCircuit className="w-5 h-5 text-purple-400" />
                                    <span className="text-sm font-medium">Risk Mitigation Tips</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                    <History className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm font-medium">Strategic Planning</span>
                                </div>
                            </div>

                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-12 text-lg font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105" asChild>
                                <Link href="/settings">
                                    Upgrade to Infloura Pro <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>

                            <p className="mt-6 text-zinc-500 text-sm">
                                Join 1,000+ creators scaling with data.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Preview below for context */}
                    <div className="mt-12 opacity-20 pointer-events-none select-none filter blur-[2px]">
                        <h3 className="text-xl font-semibold mb-4 text-zinc-400">Strategy Preview</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-24 bg-zinc-100 dark:bg-zinc-800 rounded-xl border animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : loading ? (
                <div className="flex flex-col items-center justify-center py-20 min-h-[400px]">
                    <div className="w-full max-w-[400px]">
                        <CpuArchitecture text="INFLOURA" animateLines={true} animateMarkers={true} animateText={true} />
                    </div>
                    <p className="mt-8 text-zinc-500 animate-pulse text-sm font-medium tracking-wide">Synthesizing platform data into executable strategy...</p>
                </div>
            ) : viewingHistory ? (
                <div className="grid gap-4 mt-6">
                    <h3 className="text-xl font-semibold mb-2">Previous Strategies</h3>
                    {history.map((item, idx) => (
                        <Card key={item.id} className="cursor-pointer hover:border-purple-300 transition-colors group relative" onClick={() => {
                            setData(item.content)
                            setViewingHistory(false)
                        }}>
                            <CardHeader className="py-4 pr-14">
                                <CardTitle className="text-lg">AI Strategy Plan</CardTitle>
                                <CardDescription>Generated on {new Date(item.created_at).toLocaleDateString()} at {new Date(item.created_at).toLocaleTimeString()}</CardDescription>
                            </CardHeader>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-100 z-50 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    deleteHistoryItem(e, item.id)
                                }}
                            >
                                <Trash2 className="w-5 h-5" />
                            </Button>
                        </Card>
                    ))}
                </div>
            ) : !data ? (
                <Card className="border-dashed border-2">
                    <CardContent className="flex flex-col items-center justify-center h-64 space-y-4">
                        <p className="text-zinc-500 text-center max-w-md">Run a simulation first, then generate a custom AI roadmap tailored to your numbers.</p>
                        <Button onClick={fetchRoadmap} disabled={loading} className="bg-purple-600 hover:bg-purple-700 text-white">
                            {loading ? 'Generating Strategy...' : 'Generate AI Roadmap'}
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <>
                    <RiskCard data={{
                        risks: [
                            { type: "Platform Dependency", level: "High", description: `You are solely reliant on ${latestPlatform.charAt(0).toUpperCase() + latestPlatform.slice(1)} for revenue.`, mitigation: "Start an email newsletter next month to own your audience." }
                        ]
                    }} />
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-6">Your Strategic Plan</h3>
                        <RoadmapDisplay data={data?.roadmap || []} />
                    </div>
                </>
            )}
        </div>
    )
}
