'use client'

import { useEffect, useState } from "react"
import MetricsForm from "@/components/tracking/MetricsForm"
import ProgressChart from "@/components/tracking/ProgressChart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { TrendingUp, Activity, Users, DollarSign } from "lucide-react"
import { useLocale } from 'next-intl'

export default function TrackingPage() {
    const locale = useLocale()
    const isTR = locale === 'tr'
    const [metrics, setMetrics] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const fetchMetrics = async () => {
        try {
            const res = await fetch('/api/metrics')
            if (res.ok) {
                const json = await res.json()
                setMetrics(json)
            }
        } catch {
            toast.error(isTR ? 'Metrikler yüklenemedi' : 'Failed to load metrics')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMetrics()
    }, [])

    const currentMonthRevenue = metrics.length > 0 ? metrics[metrics.length - 1].actual_revenue : 0
    const totalRevenue = metrics.reduce((sum, m) => sum + (m.actual_revenue || 0), 0)
    const efficiencyScore = metrics.length > 0 ? ((currentMonthRevenue / metrics[metrics.length - 1].monthly_views) * 1000).toFixed(2) : 0

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    {isTR ? 'Büyüme Takibi' : 'Growth Tracking'}
                </h1>
                <p className="text-zinc-500 mt-2">
                    {isTR
                        ? 'Gerçek aylık rakamlarınızı kaydedin ve modellerinizle karşılaştırın.'
                        : 'Log your actual monthly numbers and compare them against your models.'}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">
                            {isTR ? 'Bu Ayın Geliri' : "This Month's Revenue"}
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${currentMonthRevenue.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">
                            {isTR ? 'Toplam Takip Edilen Gelir' : 'Total Tracked Revenue'}
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">
                            {isTR ? 'Kayıtlı Ay Sayısı' : 'Months Logged'}
                        </CardTitle>
                        <Users className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics.length}</div>
                    </CardContent>
                </Card>
                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-500">
                            {isTR ? 'Verimlilik Skoru' : 'Efficiency Score'}
                        </CardTitle>
                        <Activity className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">{efficiencyScore}</div>
                        <p className="text-xs text-zinc-500 mt-1">
                            {isTR ? 'Takip edilen verilere dayalı RPM' : 'RPM based on tracked data'}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-1">
                    <MetricsForm onSuccess={fetchMetrics} />
                </div>
                <div className="md:col-span-2">
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>
                                {isTR ? 'Performans Trendleri' : 'Performance Trends'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading
                                ? <div className="h-[300px] flex items-center justify-center">{isTR ? 'Yükleniyor...' : 'Loading...'}</div>
                                : <ProgressChart data={metrics} />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
