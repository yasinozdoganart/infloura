import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { ArrowRight, ChevronRight, User, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ArticleLayoutProps {
    children: React.ReactNode
    title: string
    description: string
    date: string
    author?: string
    readTime?: string
    breadcrumbs?: { label: string; href: string }[]
}

export default function ArticleLayout({
    children,
    title,
    description,
    date,
    author = 'Infloura Team',
    readTime = '5 min read',
    breadcrumbs = [{ label: 'Guides', href: '/guides' }]
}: ArticleLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30">
            {/* Announcement Bar */}
            <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border-b border-purple-500/20 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 text-center text-sm font-medium text-purple-100">
                    <span className="hidden sm:inline">🎉 Infloura 1.0 is live! </span>
                    Start treating your audience like a business.{' '}
                    <Link href="/register" className="underline decoration-purple-400 underline-offset-2 hover:text-white transition-colors">
                        Run a free simulation
                    </Link>
                </div>
            </div>

            <Header />

            <main className="flex-grow pt-8 pb-24">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center space-x-2 text-sm text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <ChevronRight className="w-4 h-4 text-zinc-600" />
                                <Link 
                                    href={crumb.href} 
                                    className={idx === breadcrumbs.length - 1 ? "text-purple-400 font-medium" : "hover:text-white transition-colors"}
                                >
                                    {crumb.label}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Article Header */}
                    <header className="mb-12 space-y-6 text-center sm:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            {title}
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
                            {description}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <User className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{author}</p>
                                    <p className="text-xs">Expert Contributor</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={new Date(date).toISOString()}>{date}</time>
                            </div>
                            <div className="text-sm text-zinc-500 hidden sm:block">•</div>
                            <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                                {readTime}
                            </div>
                        </div>
                    </header>

                    {/* Article Body */}
                    <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white prose-li:text-zinc-300">
                        {children}
                    </div>

                    {/* Mid/End Article CTA */}
                    <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)]" />
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Stop Guessing Your Value</h3>
                            <p className="text-zinc-300 max-w-xl mx-auto text-lg">
                                Join hundreds of professional creators using Infloura to forecast revenue, land bigger brand deals, and scale their audience.
                            </p>
                            <div className="pt-4">
                                <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg rounded-xl font-semibold w-full sm:w-auto" asChild>
                                    <Link href="/register">
                                        Calculate Your True Value <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
