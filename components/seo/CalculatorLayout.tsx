import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'

interface CalculatorLayoutProps {
    children: React.ReactNode
    currentPage?: string
}

// ... unchanged ...

export default async function CalculatorLayout({ children, currentPage }: CalculatorLayoutProps) {
    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 pb-12 pt-32 md:pb-20 md:pt-40">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

