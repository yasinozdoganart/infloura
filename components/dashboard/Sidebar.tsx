'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, LineChart, BrainCircuit, Activity, Settings } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Sidebar() {
    const pathname = usePathname()

    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Simulator', href: '/simulator', icon: LineChart },
        { name: 'AI Roadmap', href: '/roadmap', icon: BrainCircuit },
        { name: 'Tracking', href: '/tracking', icon: Activity },
        { name: 'Settings', href: '/settings', icon: Settings },
    ]

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-white dark:bg-zinc-950 sm:flex">
            <div className="flex h-16 shrink-0 items-center px-6 border-b">
                <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">CreatorOS</span>
            </div>
            <nav className="flex flex-col gap-2 p-4">
                {links.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? 'bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-300 font-medium shadow-sm' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
            <div className="mt-auto p-4">
                <div className="rounded-xl border bg-zinc-50/50 dark:bg-zinc-900/50 p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>
                    <Badge variant="outline" className="mb-2 bg-white dark:bg-black">Free Plan</Badge>
                    <p className="text-xs text-zinc-500 mb-3 relative z-10">Upgrade to Pro to unlock advanced AI insights.</p>
                    <Link href="/settings" className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline relative z-10">View plans</Link>
                </div>
            </div>
        </aside>
    )
}
