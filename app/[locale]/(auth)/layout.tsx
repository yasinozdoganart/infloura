import React from 'react'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-white dark:bg-zinc-950">
            <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-zinc-950 p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-zinc-950 to-zinc-950"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Infloura</h1>
                    <p className="mt-2 text-zinc-400 max-w-sm">Your Creator Business, Finally Structured.</p>
                </div>
                <div className="relative z-10">
                    <ul className="space-y-6 text-lg">
                        <li className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center justify-center p-3 rounded-lg bg-purple-500/20 mr-4">
                                📈
                            </div>
                            <span className="font-medium text-zinc-200">Revenue simulation with mathematical precision.</span>
                        </li>
                        <li className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center justify-center p-3 rounded-lg bg-blue-500/20 mr-4">
                                🧠
                            </div>
                            <span className="font-medium text-zinc-200">Month-by-month AI strategy roadmaps.</span>
                        </li>
                        <li className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center justify-center p-3 rounded-lg bg-green-500/20 mr-4">
                                🎯
                            </div>
                            <span className="font-medium text-zinc-200">Growth tracking vs. actuals insights.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative z-10 text-sm text-zinc-500">
                    © {new Date().getFullYear()} Infloura. All rights reserved.
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
                {children}
            </div>
        </div>
    )
}
