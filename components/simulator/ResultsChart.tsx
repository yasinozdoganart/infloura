'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { SimulationResult } from "@/types/simulation"

export default function ResultsChart({ scenarios, limit }: { scenarios: any, limit: number }) {
    if (!scenarios) return null

    // Transform data for recharts
    const conservative = scenarios.conservative.projections
    const realistic = scenarios.realistic.projections
    const aggressive = scenarios.aggressive.projections

    const data = Array.from({ length: limit }).map((_, i) => ({
        month: `Month ${i + 1}`,
        Conservative: conservative[i]?.totalRevenue || 0,
        Realistic: realistic[i]?.totalRevenue || 0,
        Aggressive: aggressive[i]?.totalRevenue || 0,
    }))

    return (
        <div className="h-[400px] w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(val) => `$${val}`} />
                    <Tooltip formatter={(value: any) => [`$${Number(value).toFixed(0)}`, undefined]} />
                    <Legend />
                    <Line type="monotone" dataKey="Conservative" stroke="#8884d8" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Realistic" stroke="#82ca9d" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="Aggressive" stroke="#ffc658" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
