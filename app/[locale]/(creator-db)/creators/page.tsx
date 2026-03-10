import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { ArrowRight, Youtube, Users, Twitter } from 'lucide-react'

// Dummy representation. In a real app with a DB, this would be fetched server-side from Supabase.
const CREATORS_LIST = [
    {
        name: 'MrBeast',
        handle: 'MrBeast',
        platform: 'YouTube',
        niche: 'Entertainment',
        estMonthlyEarnings: '32.4M',
        slug: 'mrbeast',
        gradient: 'from-cyan-500/20 to-blue-500/20',
        imageUrl: '/avatars/mrbeast.jpg' // Placeholders until scraped
    },
    {
        name: 'Marques Brownlee',
        handle: 'MKBHD',
        platform: 'YouTube',
        niche: 'Tech',
        estMonthlyEarnings: '1.5M',
        slug: 'marques-brownlee',
        gradient: 'from-red-500/20 to-orange-500/20',
        imageUrl: '/avatars/mkbhd.jpg'
    },
    {
        name: 'Emma Chamberlain',
        handle: 'emmachamberlain',
        platform: 'YouTube',
        niche: 'Lifestyle',
        estMonthlyEarnings: '1.1M',
        slug: 'emma-chamberlain',
        gradient: 'from-pink-500/20 to-rose-500/20',
        imageUrl: '/avatars/emma.jpg'
    }
]

export default function CreatorDatabaseIndex() {
    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30">
            <Header />

            <main className="flex-grow pt-24 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            Creator <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Database</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            We reverse-engineered the creator economy. Discover the estimated ad revenue, sponsorship rates, and true net worth of the top creators on the internet.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CREATORS_LIST.map((creator) => {
                            const PlatformIcon = creator.platform === 'YouTube' ? Youtube : creator.platform === 'TikTok' ? Users : Twitter
                            
                            return (
                                <Link 
                                    key={creator.slug} 
                                    href={`/creators/${creator.slug}`}
                                    className="group block bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    <div className="relative z-10 p-8 flex flex-col h-full">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 bg-black">
                                                <div className="w-full h-full bg-white/5 flex items-center justify-center text-xl font-bold text-white">
                                                    {creator.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                    {creator.name}
                                                </h3>
                                                <p className="text-zinc-500 text-sm">@{creator.handle}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 mb-8">
                                            <span className="flex items-center text-xs font-medium text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                                                <PlatformIcon className="w-3 h-3 mr-1.5" />
                                                {creator.platform}
                                            </span>
                                            <span className="flex items-center text-xs font-medium text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                                                {creator.niche}
                                            </span>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium mb-1">Est. Revenue</p>
                                                <p className="text-lg font-bold text-white">${creator.estMonthlyEarnings}<span className="text-sm font-normal text-zinc-500">/mo</span></p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Funnel Callout */}
                    <div className="mt-20 text-center">
                        <p className="text-zinc-400 mb-4">Want to see your own name on this list?</p>
                        <Link href="/register" className="inline-flex items-center text-cyan-400 font-medium hover:text-cyan-300 transition-colors">
                            Calculate your channel's value <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
