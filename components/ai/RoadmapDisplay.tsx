'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

export default function RoadmapDisplay({ data }: { data: any }) {
    if (!data) return null;

    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-700 before:to-transparent">
            {data.map((month: any, i: number) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        {month.month}
                    </div>
                    <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-purple-700 dark:text-purple-400">{month.focus}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {month.actions.map((act: string, idx: number) => (
                                    <RoadmapItem key={idx} text={act} />
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}

function RoadmapItem({ text }: { text: string }) {
    const [done, setDone] = useState(false)

    return (
        <li className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <input
                type="checkbox"
                checked={done}
                onChange={() => setDone(!done)}
                className="mt-1 shrink-0 rounded border-zinc-300 text-purple-600 focus:ring-purple-600"
            />
            <span className={done ? "line-through opacity-50 transition-all" : "transition-all"}>{text}</span>
        </li>
    )
}
