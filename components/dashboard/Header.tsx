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
import { createBrowserClient } from "@supabase/ssr"
import { useRouter } from "next/navigation"

export default function Header({ user }: { user?: any }) {
    const router = useRouter()
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    const initials = user?.email?.substring(0, 2).toUpperCase() || 'US'

    return (
        <header className="flex h-16 items-center border-b px-4 md:px-6 justify-between bg-white dark:bg-zinc-950 sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                    Free Trial
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
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/settings')}>Settings</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSignOut} className="text-red-500 focus:text-red-500">Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
