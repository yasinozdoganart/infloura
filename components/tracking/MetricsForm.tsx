'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MetricsForm({ onSuccess }: { onSuccess: () => void }) {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)

        try {
            const res = await fetch('/api/metrics', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    platform_name: formData.get('platform'),
                    month: `${formData.get('month')}-01`,
                    followers: formData.get('followers'),
                    monthly_views: formData.get('views'),
                    actual_revenue: formData.get('revenue'),
                    engagement_rate: formData.get('engagement')
                })
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error)
            toast.success("Metrics saved successfully")
            onSuccess()
        } catch (err: any) {
            toast.error(err.message || "Failed to save metrics")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Log This Month</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>Platform</Label>
                        <Select name="platform" defaultValue="youtube">
                            <SelectTrigger>
                                <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="youtube">YouTube</SelectItem>
                                <SelectItem value="tiktok">TikTok</SelectItem>
                                <SelectItem value="instagram">Instagram</SelectItem>
                                <SelectItem value="x">X (Twitter)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label>Month</Label>
                        <Input type="month" name="month" required defaultValue={new Date().toISOString().slice(0, 7)} className="bg-white dark:bg-zinc-900" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Followers / Subs</Label>
                            <Input type="number" name="followers" required className="bg-white dark:bg-zinc-900" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Views</Label>
                            <Input type="number" name="views" required className="bg-white dark:bg-zinc-900" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Actual Revenue ($)</Label>
                            <Input type="number" step="0.01" name="revenue" required className="bg-white dark:bg-zinc-900" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Engagement Rate</Label>
                            <Input type="number" step="0.01" name="engagement" defaultValue="0.05" className="bg-white dark:bg-zinc-900" />
                        </div>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-2">
                        {loading ? 'Saving...' : 'Save Metrics'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
