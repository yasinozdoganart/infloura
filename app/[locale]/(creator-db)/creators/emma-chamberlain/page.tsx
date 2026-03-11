import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'Emma Chamberlain Net Değeri ve YouTube Kazançları | Infloura' : 'Emma Chamberlain Net Worth & YouTube Earnings | Infloura',
        description: isTR 
            ? 'Emma Chamberlain\'in tahmini YouTube reklam gelirini ve yaşam tarzı içerik üreticilerinin kitlelerini izlenmelerin ötesinde nasıl paraya dönüştürdüğünü keşfedin.' 
            : 'Discover Emma Chamberlain\'s estimated YouTube ad revenue and how lifestyle creators monetize their audiences beyond views.',
        openGraph: {
            title: isTR ? 'Emma Chamberlain YouTube Kazançları' : 'Emma Chamberlain YouTube Earnings',
            description: isTR 
                ? 'Emma Chamberlain\'in tahmini reklam geliri ve marka değeri.' 
                : 'The estimated ad revenue and brand worth of Emma Chamberlain.',
            url: 'https://infloura.com/creators/emma-chamberlain',
        }
    }
}

export default async function EmmaChamberlainProfile({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Creators' });

    return (
        <CreatorProfile 
            creator={{
                name: 'Emma Chamberlain',
                handle: 'emmachamberlain',
                platform: 'YouTube',
                niche: 'Lifestyle',
                followers: '13M+',
                avgViews: '5.2M',
                estMonthlyEarnings: '1,100,000',
                estYearlyEarnings: '13,200,000',
                imageUrl: '/avatars/emma.jpg',
                bio: t('profiles.emma-chamberlain.bio'),
                calculatorLink: '/youtube-rpm-calculator',
                calculatorText: t('profiles.emma-chamberlain.calculatorText')
            }}
        />
    )
}
