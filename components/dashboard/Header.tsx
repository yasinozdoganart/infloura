'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "@/i18n/routing"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

export default function Header() {
    const router = useRouter()
    const supabase = createClient()
    const t = useTranslations('Dashboard')
    const [userEmail, setUserEmail] = useState<string>('')
    const [planType, setPlanType] = useState<string>('free')

    useEffect(() => {
        const loadUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUserEmail(user.email || '')
                const { data: profile } = await supabase.from('profiles').select('plan_type').eq('id', user.id).single()
                if (profile) {
                    setPlanType(profile.plan_type)
                }
            }
        }
        loadUser()
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    const initials = userEmail ? userEmail.substring(0, 2).toUpperCase() : 'US'
    const badgeText = planType === 'free' ? t('freeTrial') : planType === 'pro_monthly' ? t('proMonthly') : planType === 'pro_annual' ? t('proAnnual') : t('free')

    return (
        <header className="flex h-16 items-center border-b px-4 md:px-6 justify-between bg-white dark:bg-zinc-950 sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold tracking-tight">{t('dashboard')}</h2>
            </div>
            <div className="flex items-center gap-4">
                <Badge variant="outline" className={planType !== 'free' ? "bg-purple-500 text-white border-purple-600" : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"}>
                    {badgeText}
                </Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full border shadow-sm">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>{t('myAccount')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/settings')}>{t('settings')}</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSignOut} className="text-red-500 focus:text-red-500">{t('logout')}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
