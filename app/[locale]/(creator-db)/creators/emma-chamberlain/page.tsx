import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'

export const metadata: Metadata = {
    title: 'Emma Chamberlain Net Worth & YouTube Earnings | Infloura',
    description: 'Discover Emma Chamberlain\'s estimated YouTube ad revenue and how lifestyle creators monetize their audiences beyond views.',
    openGraph: {
        title: 'Emma Chamberlain YouTube Earnings',
        description: 'The estimated ad revenue and brand worth of Emma Chamberlain.',
        url: 'https://infloura.com/creators/emma-chamberlain',
    },
    alternates: {
        canonical: 'https://infloura.com/creators/emma-chamberlain',
    },
}

export default function EmmaChamberlainProfile() {
    return (
        <CreatorProfile 
            creator={{
                name: 'Emma Chamberlain',
                handle: 'emmachamberlain',
                platform: 'YouTube',
                niche: 'Lifestyle & Fashion',
                followers: '13M+',
                avgViews: '5.2M',
                estMonthlyEarnings: '1,100,000',
                estYearlyEarnings: '13,200,000',
                imageUrl: '/avatars/emma.jpg',
                bio: 'Emma Chamberlain revolutionized the aesthetic of lifestyle vlogging with her highly relatable, lo-fi editing style. While the Fashion & Lifestyle niche typically sees moderate ad-revenue RPMs ($4-$8), her immense cultural influence and hyper-engaged Gen Z audience make her one of the most sought-after creators for brand partnerships. The vast majority of her net worth is driven not by AdSense, but by high-fashion ambassadorships and her own brand, Chamberlain Coffee.',
                calculatorLink: '/youtube-rpm-calculator',
                calculatorText: 'Calculate Lifestyle Channel Earnings'
            }}
        />
    )
}
