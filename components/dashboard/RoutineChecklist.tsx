'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const defaultRoutines = [
    { id: 1, text: 'Check and reply to the first 10 comments on your last video.' },
    { id: 2, text: 'Post at least 2 casual story updates today to keep engagement warm.' },
    { id: 3, text: 'Review your bio/links. Are they pointing to your best product?' }
]

export default function RoutineChecklist({ title = "☕ Daily Creator Routine" }: { title?: string }) {
    const [checkedItems, setCheckedItems] = useState<number[]>([])

    const toggleCheck = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter(item => item !== id))
        } else {
            setCheckedItems([...checkedItems, id])
        }
    }

    return (
        <Card className="shadow-sm border-dashed border-2 bg-zinc-50/50 dark:bg-zinc-900/50">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    {title}
                </CardTitle>
                <CardDescription>Chill suggestions to keep growing</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-sm">
                    {defaultRoutines.map(routine => {
                        const isChecked = checkedItems.includes(routine.id)
                        return (
                            <li
                                key={routine.id}
                                className={`flex items-start gap-3 cursor-pointer transition-all ${isChecked ? 'opacity-50 line-through text-zinc-500' : 'text-zinc-700 dark:text-zinc-300 hover:opacity-80'}`}
                                onClick={() => toggleCheck(routine.id)}
                            >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors mt-0.5 ${isChecked ? 'bg-purple-500 border-purple-500' : 'border-zinc-300 dark:border-zinc-700'}`}>
                                    {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                                </div>
                                <span className="leading-tight pt-0.5">{routine.text}</span>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}
