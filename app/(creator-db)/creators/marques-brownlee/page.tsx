import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'

export const metadata: Metadata = {
    title: 'Marques Brownlee (MKBHD) Net Worth & YouTube Earnings | Infloura',
    description: 'How much does MKBHD make reviewing tech? Uncover the high RPMs and massive sponsorship rates behind the best tech reviewer on YouTube.',
    openGraph: {
        title: 'MKBHD YouTube Earnings Breakdown',
        description: 'The estimated ad revenue and net worth of Marques Brownlee.',
        url: 'https://infloura.com/creators/marques-brownlee',
    },
    alternates: {
        canonical: 'https://infloura.com/creators/marques-brownlee',
    },
}

export default function MKBHDProfile() {
    return (
        <CreatorProfile 
            creator={{
                name: 'Marques Brownlee',
                handle: 'MKBHD',
                platform: 'YouTube',
                niche: 'Technology',
                followers: '18M+',
                avgViews: '3.5M',
                estMonthlyEarnings: '1,200,000',
                estYearlyEarnings: '14,400,000',
                imageUrl: '/avatars/mkbhd.jpg',
                bio: 'Marques Brownlee, known professionally as MKBHD, brings cinematic production quality to consumer tech reviews. Operating in one of the most lucrative advertising niches on the internet, his channel commands exceptionally high RPMs (often $15-$30+) because tech brands and software companies fiercely bid to be placed in front of his highly-targeted, affluent viewer demographic. His estimated revenue is heavily bolstered by massive dedicated tech sponsorships.',
                calculatorLink: '/1m-youtuber-income',
                calculatorText: 'Calculate YouTube Tech Niche Revenue'
            }}
        />
    )
}
