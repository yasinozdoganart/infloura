'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function RiskCard({ data }: { data: any }) {
    if (!data || !data.risks) return null;

    return (
        <div className="grid md:grid-cols-3 gap-4 mt-8">
            {data.risks.map((risk: any, i: number) => {
                const color = risk.level === 'High' ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/20 dark:border-red-900 dark:text-red-400' :
                    risk.level === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-900 dark:text-yellow-400' :
                        'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/20 dark:border-green-900 dark:text-green-400'

                return (
                    <Card key={i} className={`border ${color}`}>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-base font-semibold">{risk.type}</CardTitle>
                                <Badge variant={risk.level === 'High' ? 'destructive' : 'outline'} className="shadow-sm">
                                    {risk.level}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm opacity-90">{risk.description}</p>
                            <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                                <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">Mitigation</p>
                                <p className="text-sm font-medium">{risk.mitigation}</p>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
