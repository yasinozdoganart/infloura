'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

export default function ProgressChart({ data }: { data: any[] }) {
    if (!data || data.length === 0) {
        return <div className="h-[300px] flex items-center justify-center text-zinc-500 border rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">No data available to chart</div>
    }

    const chartData = data.map(d => ({
        month: d.month.slice(0, 7), // YYYY-MM
        "Actual Revenue": d.actual_revenue,
        "Views": d.monthly_views,
    }))

    return (
        <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" tickFormatter={(val) => `$${val}`} />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="Actual Revenue" stroke="#8b5cf6" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="Views" stroke="#10b981" strokeWidth={2} dot={{ strokeWidth: 2, r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
