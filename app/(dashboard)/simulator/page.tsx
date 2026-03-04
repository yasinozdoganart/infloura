'use client'

import { useState } from "react"
import PlatformForm from "@/components/simulator/PlatformForm"
import ResultsChart from "@/components/simulator/ResultsChart"
import ScenarioCards from "@/components/simulator/ScenarioCards"
import { SimulationInput } from "@/types/simulation"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"

export default function SimulatorPage() {
    const [isPending, setIsPending] = useState(false)
    const [result, setResult] = useState<any>(null)
    const [limit, setLimit] = useState(12)

    const handleSimulate = async (data: SimulationInput) => {
        setIsPending(true)
        try {
            const res = await fetch('/api/simulate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            const json = await res.json()

            if (!res.ok) throw new Error(json.error)

            setResult(json)
            // Enforce 3 month limit for free users in display
            if (json.planType === 'free') {
                setLimit(3)
                toast('Free Plan Limit', { description: 'Showing 3 months. Upgrade to Pro for 12 months projections.' })
            } else {
                setLimit(12)
                toast.success("Simulation complete!")
            }
        } catch (err: any) {
            toast.error(err.message || 'Failed to calculate')
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Revenue Simulator</h1>
                <p className="text-zinc-500 mt-2">Calculate your future revenue across three growth scenarios based on mathematical projections.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <PlatformForm onSimulate={handleSimulate} isPending={isPending} />
                </div>

                <div className="md:col-span-2">
                    {result ? (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">Projections</h3>
                                {limit === 3 && <Badge variant="destructive">Limited to 3 Months</Badge>}
                            </div>
                            <ResultsChart scenarios={result.scenarios} limit={limit} />
                            <ScenarioCards scenarios={result.scenarios} />
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center border-2 border-dashed rounded-xl p-12 text-center text-zinc-500">
                            Fill out the form and run a simulation to see your mathematical revenue projections.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
