'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScenarioCards({ scenarios }: { scenarios: any }) {
    if (!scenarios) return null

    const items = [
        { title: "Conservative", data: scenarios.conservative, color: "border-l-indigo-500" },
        { title: "Realistic", data: scenarios.realistic, color: "border-l-green-500 bg-green-50/50 dark:bg-green-950/20" },
        { title: "Aggressive", data: scenarios.aggressive, color: "border-l-yellow-500" },
    ]

    return (
        <div className="grid md:grid-cols-3 gap-4 mt-8">
            {items.map((item) => {
                const proj = item.data.projections
                const month6 = proj[5]?.totalRevenue || 0
                const month12 = proj[11]?.totalRevenue || 0
                const timeTo1k = item.data.milestones.timeTo1k

                return (
                    <Card key={item.title} className={`border-l-4 ${item.color}`}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-1">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500 text-sm">Month 6 Revenue:</span>
                                    <span className="font-medium">${Math.round(month6).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500 text-sm">Month 12 Revenue:</span>
                                    <span className="font-bold text-lg">${Math.round(month12).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between mt-2 pt-2 border-t">
                                    <span className="text-zinc-500 text-sm">Time to $1K/mo:</span>
                                    <span className="font-medium text-sm text-purple-600">{timeTo1k ? `${timeTo1k} months` : '12+ months'}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
