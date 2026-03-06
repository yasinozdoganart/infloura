import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { Footer } from '@/components/landing/Footer'

interface CalculatorLayoutProps {
    children: React.ReactNode
    currentPage?: string
}

// ... unchanged ...

export default function CalculatorLayout({ children, currentPage }: CalculatorLayoutProps) {
    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-bold text-2xl tracking-tighter text-white leading-none hover:opacity-80 transition-opacity">
                        Infloura
                    </Link>
                    <div className="flex gap-3">
                        <Button variant="ghost" className="text-zinc-300 hover:text-black hover:bg-white transition-colors" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25" asChild>
                            <Link href="/register">Start Free Trial</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

