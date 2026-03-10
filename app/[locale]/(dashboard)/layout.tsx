import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import MobileNav from '@/components/dashboard/MobileNav'

export const dynamic = 'force-dynamic'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full bg-zinc-50 dark:bg-zinc-950">
            <Sidebar />
            <div className="flex flex-col w-full sm:pl-64">
                <Header />
                <main className="flex-1 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
            <MobileNav />
        </div>
    )
}
