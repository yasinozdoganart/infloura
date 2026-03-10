import { Metadata } from 'next'
import ArticleLayout from '@/components/seo/ArticleLayout'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'The Perfect TikTok Media Kit Template for Creators',
    description: 'A step-by-step guide to building a one-page media kit that actually converts inbound brand inquiries into high-paying, long-term sponsorships.',
    openGraph: {
        title: 'The Perfect TikTok Media Kit Template',
        description: 'Stop sending brands screenshots of your analytics. Build a professional 1-page media kit for TikTok sponsorships.',
        url: 'https://infloura.com/guides/tiktok-media-kit-template',
        type: 'article',
        publishedTime: new Date().toISOString(),
    },
    alternates: {
        canonical: 'https://infloura.com/guides/tiktok-media-kit-template',
    },
}

export default function TikTokMediaKitGuide() {
    return (
        <ArticleLayout
            title="The Perfect TikTok Media Kit Template for Creators"
            description="A step-by-step guide to building a one-page media kit that actually converts inbound brand inquiries into high-paying, long-term sponsorships."
            date="October 26, 2024"
            readTime="7 min read"
            breadcrumbs={[
                { label: 'Guides', href: '/guides' },
                { label: 'Brand Deals', href: '/guides/tiktok-media-kit-template' }
            ]}
        >
            <h2>Stop Sending Screenshots</h2>
            <p>
                When a brand reaches out to your business email asking for your rates, how do you respond? If you are sending them a haphazard paragraph of text attached to two blurry screenshots of your TikTok Creator Tools dashboard, you are leaving thousands of dollars on the table.
            </p>
            <p>
                A professional Media Kit is the difference between a brand offering you "$100 and free product" and that same brand happily paying you $1,500. It signals that you are a business, not a hobbyist.
            </p>

            <h2>Rule #1: The 1-Page Rule</h2>
            <p>
                Influencer Marketing Managers review dozens of creators every single day. They do not have time to read a 12-page PDF about your life story. Your entire media kit should fit on a single, well-designed 8.5x11 vertical page (or a short, clean Notion link). 
            </p>
            <p>
                Here is the exact anatomy of a high-converting 1-page TikTok Media Kit.
            </p>

            <h3>Section 1: The Bio Header</h3>
            <p>
                Keep it brief but highly descriptive. Who are you, and who is your audience?
            </p>
            <ul className="list-disc pl-6 mb-8 text-zinc-300">
                <li><strong>Bad:</strong> "Hi guys, I post funny videos and lifestyle vlogs!"</li>
                <li><strong>Good:</strong> "I am a 24-year-old creator based in Austin, TX, specializing in tech gadget reviews and productivity hacks for college students and young professionals."</li>
            </ul>

            <h3>Section 2: The "Hero" Metrics</h3>
            <p>
                Do not clutter the page with every single stat. Highlight the top 3-4 metrics that actually matter to a brand buying a <Link href="/tiktok-earnings-calculator" className="text-white underline">TikTok sponsorship</Link>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl text-center">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Followers</p>
                    <p className="text-2xl font-bold text-white">125K</p>
                </div>
                <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl text-center">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Avg. Views</p>
                    <p className="text-2xl font-bold text-white">45K</p>
                </div>
                <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl text-center">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Engagement</p>
                    <p className="text-2xl font-bold text-white">6.2%</p>
                </div>
                <div className="bg-white/5 border border-cyan-500/20 p-4 rounded-xl text-center">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Monthly Reach</p>
                    <p className="text-2xl font-bold text-white">2.1M</p>
                </div>
            </div>

            <h3>Section 3: Demographics (The "Who")</h3>
            <p>
                If a skincare brand wants to sell anti-aging cream to women in their 30s, and your audience is 80% 15-year-old boys, the deal is dead anyway. Be transparent. List your:
            </p>
            <ul>
                <li><strong>Top 3 Countries</strong> (e.g., US 65%, UK 15%, CAN 5%)</li>
                <li><strong>Gender Split</strong> (e.g., 60% Female / 40% Male)</li>
                <li><strong>Dominant Age Bracket</strong> (e.g., 18-24 years old)</li>
            </ul>

            <h2>Should You Include Your Rates?</h2>
            <p>
                This is a massive point of debate in the creator economy. 
            </p>
            <p>
                <strong>Our recommendation: Do not put static rates in your main PDF.</strong> 
            </p>
            <p>
                Every brand has a different budget, and every campaign has different requirements. A 60-second dedicated integration where the brand gets <em>Usage Rights</em> to run your video as a paid ad for 6 months should cost 3x to 5x more than a standard 30-second shoutout.
            </p>
            <p>
                Instead, include a "Services Offered" section:
            </p>
            <ul className="mb-8">
                <li>Dedicated TikTok Custom Videos</li>
                <li>UGC (User Generated Content) Creation for Brand Ads</li>
                <li>Link-in-Bio Affiliate Placements</li>
                <li>Cross-platform posting (IG Reels + YouTube Shorts)</li>
            </ul>
            <p>
                End the document with: <em>"Custom packages and detailed rate cards available upon campaign scope review."</em>
            </p>

            <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-6 rounded-r-2xl my-8">
                <h4 className="text-cyan-400 font-bold mb-2">Not sure what to quote them?</h4>
                <p className="m-0 text-sm">
                    If you get an email asking for rates, do not panic and underprice yourself. Use the <Link href="/influencer-sponsorship-calculator" className="text-white underline">Infloura Sponsorship Estimator</Link> to generate an objective, data-backed quote based on your average views and specific niche.
                </p>
            </div>

            <h2>How to Build It (For Free)</h2>
            <p>
                You do not need to hire a graphic designer. Go to Canva.com and search "Media Kit". Pick a minimal, dark-themed (or clean white) template. Delete half the clutter they put on the template. Replace it with your high-quality profile picture, your stats, and save it as a PDF. Done. 
            </p>
            <p>
                When a brand emails you, attached the PDF and reply: <em>"Thanks for reaching out! I've attached my media kit below. Let me know if you have a specific campaign budget in mind, and I'd be happy to put together a custom proposal."</em>
            </p>
        </ArticleLayout>
    )
}
