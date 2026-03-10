import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { ArrowRight, BookOpen, TrendingUp, Presentation } from 'lucide-react'

const guides = [
    {
        title: 'How to Get Your First YouTube Sponsor (Even with Under 10k Subs)',
        description: 'Stop waiting for brands to come to you. Learn the exact cold-email templates and engagement metrics you need to secure your first paid brand deal.',
        href: '/guides/how-to-get-your-first-youtube-sponsor',
        category: 'Monetization',
        readTime: '6 min read',
        icon: Presentation,
        gradient: 'from-red-500/20 to-orange-500/20',
        iconColor: 'text-red-400'
    },
    {
        title: 'Instagram Engagement Rate: What is a "Good" Score in 2026?',
        description: 'Likes are down across the board. Decode the new Instagram algorithm, calculate your true engagement rate, and learn how to position it to sponsors.',
        href: '/guides/instagram-engagement-rate-guide',
        category: 'Analytics',
        readTime: '5 min read',
        icon: TrendingUp,
        gradient: 'from-pink-500/20 to-purple-500/20',
        iconColor: 'text-pink-400'
    },
    {
        title: 'The Perfect TikTok Media Kit Template for Creators',
        description: 'A step-by-step guide to building a one-page media kit that actually converts inbound brand inquiries into high-paying, long-term sponsorships.',
        href: '/guides/tiktok-media-kit-template',
        category: 'Business',
        readTime: '7 min read',
        icon: BookOpen,
        gradient: 'from-cyan-500/20 to-blue-500/20',
        iconColor: 'text-cyan-400'
    }
]

export default function GuidesIndexPage() {
    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-purple-500/30">
            <Header />

            <main className="flex-grow pt-24 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            Creator <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Playbooks</span>
                        </h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">
                            No fluff. Just actionable, data-driven guides to help you monetize your audience, secure brand deals, and treat your content like a startup.
                        </p>
                    </div>

                    {/* Guides Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide, idx) => (
                            <Link 
                                key={idx} 
                                href={guide.href}
                                className="group block h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${guide.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`p-4 rounded-2xl bg-white/5 ${guide.iconColor} shadow-inner`}>
                                            <guide.icon className="w-8 h-8" />
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                            <span>{guide.category}</span>
                                            <span>•</span>
                                            <span>{guide.readTime}</span>
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors leading-snug">
                                        {guide.title}
                                    </h2>
                                    
                                    <p className="text-zinc-400 line-clamp-3 mb-8 flex-grow leading-relaxed">
                                        {guide.description}
                                    </p>
                                    
                                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors mt-auto">
                                        Read Ultimate Guide
                                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
