'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center p-4 text-center bg-zinc-50 dark:bg-zinc-950">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-6 text-2xl font-bold">!</div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Something went wrong!</h2>
            <p className="text-zinc-500 mt-2 max-w-md">An unexpected error occurred. We have been notified and are looking into it.</p>
            <Button onClick={() => reset()} className="mt-8 bg-purple-600 hover:bg-purple-700 text-white shadow-sm">
                Try again
            </Button>
        </div>
    )
}
