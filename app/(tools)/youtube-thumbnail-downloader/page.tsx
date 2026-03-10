import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import { YoutubeThumbnailDownloader } from '@/components/seo/YoutubeThumbnailDownloader'
import Link from 'next/link'
import { BadgeCheck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'YouTube Thumbnail Downloader (HD Quality) | Infloura',
    description: 'Free tool to download any YouTube video thumbnail in full HD (1080p) quality. Save maxresdefault covers instantly without any restrictions.',
    openGraph: {
        title: 'Free YouTube Thumbnail Downloader (HD)',
        description: 'Download any YouTube thumbnail in full 1080p resolution for free.',
        url: 'https://infloura.com/youtube-thumbnail-downloader',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/youtube-thumbnail-downloader',
    },
}

export default function YouTubeThumbnailDownloaderPage() {
    return (
        <CalculatorLayout currentPage="YouTube Thumbnail Downloader">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Hero Headers */}
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        YouTube <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Thumbnail</span> Downloader
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Instantly grab the high-resolution (`maxresdefault`) cover image from any YouTube video. Free forever, no watermark.
                    </p>
                </div>

                {/* The Tool */}
                <YoutubeThumbnailDownloader />

                {/* SEO Content Section */}
                <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-a:text-red-400 hover:prose-a:text-red-300 pt-20">
                    <h2>How to Download YouTube Thumbnails</h2>
                    <p>
                        Downloading a YouTube thumbnail is incredibly easy with Infloura. Simply follow these three steps:
                    </p>
                    <ol>
                        <li>Copy the YouTube video URL from your browser or app (e.g., <code>https://youtube.com/watch?v=...</code>).</li>
                        <li>Paste the link into the input box above and click "Get Thumbnail".</li>
                        <li>Select your preferred quality size (Full HD, SD, or Normal) and click Download.</li>
                    </ol>

                    <div className="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl my-8">
                        <h4 className="text-red-400 font-bold mb-2 flex items-center">
                            <BadgeCheck className="w-5 h-5 mr-2" />
                            Why is my HD thumbnail blurry?
                        </h4>
                        <p className="m-0 text-sm">
                            If the Full HD (1080p) thumbnail appears blurry or fails to load, it means the creator did not upload a custom high-resolution thumbnail, or the video itself is older and lower quality. In these cases, use the "HQ" (Normal) button instead.
                        </p>
                    </div>

                    <h2>Why Creators Need a Thumbnail Downloader</h2>
                    <p>
                        Whether you are a creator building a media kit, a designer collecting inspiration, or a marketer analyzing the competition's Click-Through Rate (CTR) tactics, extracting a high-quality thumbnail is a daily necessity. Our tool bypasses the need to inspect element or dig through YouTube API documentation.
                    </p>
                    <p>
                        Once you have analyzed the visual hooks that work in your niche, use <Link href="/youtube-title-generator">our AI Title Generator</Link> to craft the perfect headline.
                    </p>

                    <h2>How Much is Your Channel Worth?</h2>
                    <p>
                        A great thumbnail gets you views, but views don't always equal revenue. If you want to know exactly how much your YouTube channel could be earning via AdSense or Brand Sponsorships, stop guessing and use our professional financial models:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-8">
                        <li>
                            <Link href="/youtube-money-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">YouTube Income Simulator</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/influencer-sponsorship-calculator" className="flex items-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                                <span className="text-white group-hover:text-red-400 w-full">Sponsorship Rate Calculator</span>
                                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors" />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>
        </CalculatorLayout>
    )
}
