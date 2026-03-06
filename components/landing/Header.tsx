'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

const tools = [
    { name: 'YouTube Money Calculator', href: '/youtube-money-calculator' },
    { name: 'TikTok Money Calculator', href: '/tiktok-money-calculator' },
    { name: 'Instagram Money Calculator', href: '/instagram-money-calculator' },
    { name: 'Influencer Income Calculator', href: '/influencer-income-calculator' },
    { name: 'Creator Income Calculator', href: '/creator-income-calculator' },
    { name: 'Sponsorship Calculator', href: '/influencer-sponsorship-calculator' },
]

export function Header() {
    return (
        <div className="fixed top-0 w-full z-50 flex flex-col">
            {/* Announcement Banner */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border-b border-white/5 px-4 py-2.5 text-center text-sm backdrop-blur-md">
                <p className="text-zinc-300 font-medium flex items-center justify-center gap-2">
                    <span className="text-base leading-none">🎉</span>
                    <span>
                        <strong className="text-white font-bold tracking-wide">Infloura 1.0 is live!</strong>
                        {' '}Start treating your audience like a business.
                    </span>
                </p>
            </div>

            <header className="w-full bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6 md:gap-8">
                        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                            <Image
                                src="/logo-white.svg"
                                alt="Infloura Logo"
                                width={140}
                                height={32}
                                priority
                                className="h-8 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
                                    Tools <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                    <div className="w-64 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                        <div className="px-3 py-2">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Creator Calculators</p>
                                        </div>
                                        {tools.map((tool) => (
                                            <Link
                                                key={tool.href}
                                                href={tool.href}
                                                className="px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors truncate"
                                            >
                                                {tool.name}
                                            </Link>
                                        ))}
                                        <div className="px-3 py-2 mt-1 border-t border-white/5">
                                            <Link href="/tools" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                                                View all tools &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/#pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                Pricing
                            </Link>

                            <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                About
                            </Link>
                        </nav>
                    </div>

                    <div className="flex gap-3 md:gap-4 items-center">
                        {/* Mobile Navigation Dropdown */}
                        <div className="md:hidden relative group">
                            <button className="flex items-center text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2">
                                Menu <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                            </button>
                            <div className="absolute top-full right-0 pt-2 opacity-0 invisible focus-within:opacity-100 focus-within:visible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="w-56 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                    <Link href="/tools" className="px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                                        All Tools
                                    </Link>
                                    <Link href="/#pricing" className="px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Pricing
                                    </Link>
                                    <Link href="/about" className="px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                                        About
                                    </Link>
                                    <div className="h-px bg-white/5 my-1" />
                                    <Link href="/login" className="px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5 rounded-lg transition-colors">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Button variant="ghost" className="hidden sm:flex text-zinc-300 hover:text-black hover:bg-white transition-colors" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium border-0 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]" asChild>
                            <Link href="/register">Start Free Trial</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    )
}
