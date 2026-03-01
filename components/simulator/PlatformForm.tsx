'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SimulationInput } from "@/types/simulation"

export default function PlatformForm({ onSimulate, isPending }: { onSimulate: (data: SimulationInput) => void, isPending: boolean }) {
    const [platform, setPlatform] = useState<'youtube' | 'tiktok' | 'instagram' | 'x'>('youtube')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data: SimulationInput = {
            platform,
            audienceSize: Number(formData.get('audienceSize')) || 0,
            monthlyReach: Number(formData.get('monthlyReach')) || 0,
        }

        if (platform === 'youtube') {
            data.rpm = Number(formData.get('rpm')) || 4
            data.engagementRate = Number(formData.get('engagementRate')) || 0.05
        } else if (platform === 'tiktok' || platform === 'instagram') {
            data.engagementRate = Number(formData.get('engagementRate')) || 0.1
        }

        onSimulate(data)
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Platform Data</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>Select Platform</Label>
                        <div className="flex gap-2">
                            {(['youtube', 'tiktok', 'instagram', 'x'] as const).map(p => (
                                <Button
                                    key={p}
                                    type="button"
                                    variant={platform === p ? 'default' : 'outline'}
                                    onClick={() => setPlatform(p)}
                                    className="flex-1 capitalize"
                                >
                                    {p}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Audience Size (Followers/Subs)</Label>
                            <Input name="audienceSize" type="number" min="0" required defaultValue="10000" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Monthly Reach (Views)</Label>
                            <Input name="monthlyReach" type="number" min="0" required defaultValue="100000" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Engagement Rate (e.g., 0.05 for 5%)</Label>
                            <Input name="engagementRate" type="number" step="0.01" min="0" max="1" defaultValue="0.05" />
                        </div>
                        {platform === 'youtube' && (
                            <div className="grid gap-2">
                                <Label>RPM ($)</Label>
                                <Input name="rpm" type="number" step="0.1" min="0" defaultValue="4.0" />
                            </div>
                        )}
                    </div>

                    <Button type="submit" disabled={isPending} className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                        {isPending ? 'Calculating...' : 'Run Simulation'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
