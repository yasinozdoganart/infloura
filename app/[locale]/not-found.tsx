import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center p-4 text-center bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-8xl font-black text-zinc-200 dark:text-zinc-800 tracking-tighter">404</h2>
            <h3 className="text-2xl font-bold mt-4 text-zinc-900 dark:text-zinc-100">Page Not Found</h3>
            <p className="text-zinc-500 mt-2 max-w-sm">The page you are looking for doesn't exist or has been moved.</p>
            <Button asChild className="mt-8 bg-purple-600 hover:bg-purple-700 text-white shadow-sm">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}
