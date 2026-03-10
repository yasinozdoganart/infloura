import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'

export const metadata: Metadata = {
    title: 'MrBeast Net Worth & YouTube Earnings (2026) | Infloura',
    description: 'How much does Jimmy Donaldson (MrBeast) make from YouTube ad revenue? See the exact math behind his $25M+/month creator empire.',
    openGraph: {
        title: 'MrBeast YouTube Earnings Breakdown',
        description: 'The estimated ad revenue and net worth of the biggest creator on YouTube.',
        url: 'https://infloura.com/creators/mrbeast',
    },
    alternates: {
        canonical: 'https://infloura.com/creators/mrbeast',
    },
}

export default function MrBeastProfile() {
    return (
        <CreatorProfile 
            creator={{
                name: 'MrBeast',
                handle: 'MrBeast',
                platform: 'YouTube',
                niche: 'Entertainment',
                followers: '470M+',
                avgViews: '180M',
                estMonthlyEarnings: '32,400,000',
                estYearlyEarnings: '388,800,000',
                imageUrl: '/avatars/mrbeast.jpg',
                bio: 'Jimmy Donaldson, better known as MrBeast, is the most subscribed individual on YouTube. Known for his high-budget stunts, massive philanthropic giveaways, and pioneering the modern fast-paced editing style. While his RPM (Revenue Per Mille) in the entertainment niche is relatively low (est. $3-$5), his sheer volume of billions of monthly views generates astronomical ad revenue, the vast majority of which is reinvested directly back into future videos.',
                calculatorLink: '/youtube-money-calculator',
                calculatorText: 'Calculate YouTube Entertainment Earnings'
            }}
        />
    )
}
