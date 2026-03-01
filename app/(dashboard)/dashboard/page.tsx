'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { TrendingUp, Activity, DollarSign, BrainCircuit, ArrowRight, LineChart } from "lucide-react"

export default function DashboardPage() {

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 pb-24 sm:pb-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
                <p className="text-zinc-500">Here's what's happening with your creator business today.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm border-purple-100 dark:border-purple-900/50 bg-gradient-to-br from-white to-purple-50/50 dark:from-zinc-950 dark:to-purple-950/20">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Estimated monthly</CardTitle>
                        <DollarSign className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">$8,250</div>
                        <p className="text-xs text-zinc-500 mt-1">Based on Realistic scenario</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Last actual revenue</CardTitle>
                        <TrendingUp className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">$2,100</div>
                        <p className="text-xs text-zinc-500 mt-1">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Audience Growth</CardTitle>
                        <Activity className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight">+8.5%</div>
                        <p className="text-xs text-zinc-500 mt-1">across all channels</p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">Efficiency Score</CardTitle>
                        <BrainCircuit className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold tracking-tight text-green-600">8.2</div>
                        <p className="text-xs text-zinc-500 mt-1">RPM calculated actuals</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-6">
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Onboarding Checklist</CardTitle>
                            <CardDescription>Get started with CreatorOS in 4 simple steps.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 opacity-50">
                                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                                    <span className="line-through text-zinc-500">Create an account</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    <span>Add your first platform</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    <span>Run a simulation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700"></div>
                                    <span>Generate AI Roadmap</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Recent Simulations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b dark:border-zinc-800 pb-4">
                                    <div>
                                        <p className="font-medium">YouTube Realistic</p>
                                        <p className="text-sm text-zinc-500">Simulation • Today</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-purple-600 dark:text-purple-400">$12,050/mo</p>
                                        <p className="text-xs text-zinc-500">Month 12 Est.</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pb-2">
                                    <div>
                                        <p className="font-medium">TikTok Aggressive</p>
                                        <p className="text-sm text-zinc-500">Simulation • 2 days ago</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-purple-600 dark:text-purple-400">$8,400/mo</p>
                                        <p className="text-xs text-zinc-500">Month 12 Est.</p>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full mt-2" asChild>
                                    <Link href="/simulator">Run New Simulation</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

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
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all" asChild>
                                <Link href="/simulator">
                                    <LineChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">New Simulation</span>
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2 hover:border-green-200 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all" asChild>
                                <Link href="/tracking">
                                    <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    <span className="font-medium text-zinc-700 dark:text-zinc-300">Update Metrics</span>
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
