import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { TrendingUp, Activity, DollarSign, BrainCircuit, ArrowRight, LineChart } from "lucide-react"
import { createClient } from '@/lib/supabase/server'
import RoutineChecklist from "@/components/dashboard/RoutineChecklist"

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    let metrics: any[] = []
    let simulations: any[] = []
    let aiReports: any[] = []
    let profile: any = null

    if (user) {
        const { data: profileData } = await supabase.from('profiles').select('*').eq('id', user.id).single()
        if (profileData) profile = profileData

        const { data: metricsData } = await supabase.from('monthly_metrics')
            .select('*').eq('user_id', user.id).order('month', { ascending: true })
        if (metricsData) metrics = metricsData

        const { data: simData } = await supabase.from('simulations')
            .select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(2)
        if (simData) simulations = simData

        const { data: reportsData } = await supabase.from('ai_reports')
            .select('id').eq('user_id', user.id).limit(1)
        if (reportsData) aiReports = reportsData
    }

    const currentMonthRevenue = metrics.length > 0 ? metrics[metrics.length - 1].actual_revenue : 0
    const lastMonthRevenue = metrics.length > 1 ? metrics[metrics.length - 2].actual_revenue : 0
    const revenueGrowth = lastMonthRevenue > 0 ? ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100 : 0

    const currentFollowers = metrics.length > 0 ? metrics[metrics.length - 1].followers : 0
    const lastFollowers = metrics.length > 1 ? metrics[metrics.length - 2].followers : 0
    const followerGrowth = lastFollowers > 0 ? ((currentFollowers - lastFollowers) / lastFollowers) * 100 : 0

    const efficiencyScore = metrics.length > 0 ? ((currentMonthRevenue / metrics[metrics.length - 1].monthly_views) * 1000).toFixed(2) : 0

    const firstName = profile?.full_name ? profile.full_name.split(' ')[0] : 'Creator'

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 pb-24 sm:pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Welcome, {firstName}!</h1>
                    <p className="text-zinc-500">Here's what's happening with your creator business today.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-purple-700 dark:text-purple-400" size="sm" asChild>
                        <Link href="/simulator">
                            <LineChart className="w-4 h-4 mr-2" />
                            New Simulation
                        </Link>
                    </Button>
                    <Button variant="outline" className="border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20 text-green-700 dark:text-green-400" size="sm" asChild>
                        <Link href="/tracking">
                            <Activity className="w-4 h-4 mr-2" />
                            Update Metrics
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm border-purple-100 dark:border-purple-900/50 bg-gradient-to-br from-white to-purple-50/50 dark:from-zinc-950 dark:to-purple-950/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">${currentMonthRevenue.toLocaleString()}</div>
                        <p className="text-xs text-zinc-500 mt-1">
                            {revenueGrowth !== 0 ? `${revenueGrowth > 0 ? '+' : ''}${revenueGrowth.toFixed(1)}% from last month` : 'Logged this month'}
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Total Followers</CardTitle>
                        <TrendingUp className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">{currentFollowers.toLocaleString()}</div>
                        <p className="text-xs text-zinc-500 mt-1">
                            {followerGrowth !== 0 ? `${followerGrowth > 0 ? '+' : ''}${followerGrowth.toFixed(1)}% from last month` : 'Total audience'}
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Data Points</CardTitle>
                        <Activity className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">{metrics.length}</div>
                        <p className="text-xs text-zinc-500 mt-1">Months tracked</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Efficiency Score</CardTitle>
                        <BrainCircuit className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight text-green-600">{efficiencyScore}</div>
                        <p className="text-xs text-zinc-500 mt-1">RPM calculated actuals</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-6">
                    <Card className="bg-zinc-950 text-white border-0 shadow-lg overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                        <CardHeader className="relative z-10">
                            <Badge className="w-fit bg-purple-500 text-white hover:bg-purple-600 border-0 mb-2">New</Badge>
                            <CardTitle className="text-2xl">Ready for your AI strategy?</CardTitle>
                            <CardDescription className="text-zinc-400">Generate a complete step-by-step roadmap to hit your revenue goals.</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <Button className="bg-white text-zinc-950 hover:bg-zinc-200 mt-2 font-medium shadow-sm transition-colors" asChild>
                                <Link href="/roadmap" className="flex items-center gap-2">
                                    View Roadmap <ArrowRight className="w-4 h-4 text-purple-600" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Onboarding Checklist</CardTitle>
                            <CardDescription>Get started with Infloura in 4 simple steps.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 opacity-50">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="line-through text-zinc-500">Create an account</span>
                                </li>
                                <li className={`flex items-center gap-3 ${metrics.length > 0 ? 'opacity-50' : ''}`}>
                                    {metrics.length > 0 ? (
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    )}
                                    <span className={metrics.length > 0 ? "line-through text-zinc-500" : ""}>Add your first platform data</span>
                                </li>
                                <li className={`flex items-center gap-3 ${simulations.length > 0 ? 'opacity-50' : ''}`}>
                                    {simulations.length > 0 ? (
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    )}
                                    <span className={simulations.length > 0 ? "line-through text-zinc-500" : ""}>Run a simulation</span>
                                </li>
                                <li className={`flex items-center gap-3 ${aiReports.length > 0 ? 'opacity-50' : ''}`}>
                                    {aiReports.length > 0 ? (
                                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    )}
                                    <span className={aiReports.length > 0 ? "line-through text-zinc-500" : ""}>Generate AI Roadmap</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <RoutineChecklist />

                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Recent Simulations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {simulations.length === 0 ? (
                                    <div className="text-center text-zinc-500 py-4">No simulations run yet</div>
                                ) : (
                                    simulations.map((sim, i) => (
                                        <div key={sim.id} className={`flex items-center justify-between pb-4 ${i !== simulations.length - 1 ? 'border-b dark:border-zinc-800' : ''}`}>
                                            <div>
                                                <p className="font-medium capitalize">{sim.platform_name}</p>
                                                <p className="text-sm text-zinc-500">{new Date(sim.created_at).toLocaleDateString()}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-purple-600 dark:text-purple-400">${Math.round(sim.realistic_projection[11]?.totalRevenue || 0).toLocaleString()}/mo</p>
                                                <p className="text-xs text-zinc-500">Month 12 Est.</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                                <Button variant="outline" className="w-full mt-2" asChild>
                                    <Link href="/simulator">Run New Simulation</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
