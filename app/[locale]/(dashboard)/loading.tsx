export default function Loading() {
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 w-full animate-pulse">
            <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mt-2"></div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="h-96 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
                <div className="h-96 bg-zinc-200 dark:bg-zinc-800 rounded-xl"></div>
            </div>
        </div>
    )
}
