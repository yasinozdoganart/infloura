'use client'

import { Link, usePathname } from '@/i18n/routing'
import { LayoutDashboard, LineChart, BrainCircuit, Activity, Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function MobileNav() {
    const pathname = usePathname()
    const t = useTranslations('Dashboard')

    const links = [
        { name: t('mobileHome'), href: '/dashboard', icon: LayoutDashboard },
        { name: t('mobileSimulate'), href: '/simulator', icon: LineChart },
        { name: t('mobileRoadmap'), href: '/roadmap', icon: BrainCircuit },
        { name: t('mobileTrack'), href: '/tracking', icon: Activity },
        { name: t('mobileConfig'), href: '/settings', icon: Settings },
    ]

    return (
        <div className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t bg-white dark:bg-zinc-950 sm:hidden pb-safe">
            {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                            }`}
                    >
                        <Icon className="h-5 w-5" />
                        <span className="text-[10px] font-medium">{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
