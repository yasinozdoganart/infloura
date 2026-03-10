import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { YoutubeTitleGenerator } from '@/components/seo/YoutubeTitleGenerator'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Free YouTube Title Generator (AI) | Infloura',
    description: 'Stop getting 0 views. Generate highly-clickable, viral YouTube video titles using our advanced AI copywriter trained on top creator psychology.',
    openGraph: {
        title: 'Viral YouTube Title Generator (Free AI Tool)',
        description: 'Generate 5 high-converting YouTube titles for your next video instantly.',
        url: 'https://infloura.com/youtube-title-generator',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/youtube-title-generator',
    },
}

export default function YouTubeTitleGeneratorPage() {
    return (
        <CalculatorLayout currentPage="AI Title Generator">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Powered by Infloura AI</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        YouTube <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Title</span> Generator
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        The algorithm only promotes what people click. Turn your boring video ideas into psychological click-magnets in seconds.
                    </p>
                </div>

                {/* The Tool */}
                <YoutubeTitleGenerator />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-red-400 hover:prose-a:text-red-300 pt-20">
                    <h2>How Does the YouTube AI Title Generator Work?</h2>
                    <p>
                        Most AI writers produce generic, robotic-sounding titles that viewers instantly ignore. Infloura's AI is specifically trained on the <strong>psychology of the click</strong>—understanding concepts like the "Information Gap," emotional triggers, and high stakes. 
                    </p>
                    <p>
                        When you describe your video concept, our generator does not just summarize it. It actively looks for the most compelling angle and returns 5 distinct variations, along with a detailed reasoning of <em>why</em> the psychological hook works, giving you deeper insight into YouTube strategy.
                    </p>

                    <h2>The 3 Pillars of a Viral YouTube Title</h2>
                    <ol>
                        <li><strong>Curiosity (The Information Gap):</strong> Giving the viewer just enough information to make them ask a question, but withholding the answer so they have to click. (e.g., <em>"I Tried The $10,000 Diet So You Don't Have To"</em>)</li>
                        <li><strong>Stakes & Negativity:</strong> Humans are biologically wired to avoid danger. Highlighting mistakes, failures, or urgent warnings dramatically increases Click-Through Rate (CTR).</li>
                        <li><strong>Brevity:</strong> Over 70% of YouTube viewing happens on mobile devices. If your title is longer than 50-60 characters, the platform will truncate it (add an ellipsis "..."), killing your hook.</li>
                    </ol>

                    <h2>Pairing Titles with Thumbnails</h2>
                    <p>
                        A title cannot succeed in a vacuum. It must work synergistically with your thumbnail. The title provides context, and the thumbnail provides emotion. If you want to analyze how your competitors are designing their covers, use our <Link href="/youtube-thumbnail-downloader">Free High-Res Thumbnail Downloader</Link> to inspect their strategies.
                    </p>

                    <h2>What Happens When You Go Viral?</h2>
                    <p>
                        Writing a great title guarantees clicks. But how much money does a viral video actually make? That depends heavily on your specific Niche RPM (Revenue Per Mille) and audience geography.
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/youtube-money-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">YouTube Ad Revenue Simulator</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/1m-youtuber-income" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">Value of 1 Million Views</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
