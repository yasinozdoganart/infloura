import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'Marques Brownlee (MKBHD) Net Değeri ve YouTube Kazançları | Infloura' : 'Marques Brownlee (MKBHD) Net Worth & YouTube Earnings | Infloura',
        description: isTR 
            ? 'MKBHD teknoloji incelemelerinden ne kadar kazanıyor? YouTube\'daki en iyi teknoloji incelemecisinin yüksek RPM\'lerini ve devasa sponsorluk oranlarını keşfedin.' 
            : 'How much does MKBHD make reviewing tech? Uncover the high RPMs and massive sponsorship rates behind the best tech reviewer on YouTube.',
        openGraph: {
            title: isTR ? 'MKBHD YouTube Kazanç Analizi' : 'MKBHD YouTube Earnings Breakdown',
            description: isTR 
                ? 'Marques Brownlee\'nin tahmini reklam geliri ve net değeri.' 
                : 'The estimated ad revenue and net worth of Marques Brownlee.',
            url: 'https://infloura.com/creators/marques-brownlee',
        }
    }
}

export default async function MKBHDProfile({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Creators' });

    return (
        <CreatorProfile 
            creator={{
                name: 'Marques Brownlee',
                handle: 'MKBHD',
                platform: 'YouTube',
                niche: 'Tech',
                followers: '20M+',
                avgViews: '4.5M',
                estMonthlyEarnings: '1,500,000',
                estYearlyEarnings: '18,000,000',
                imageUrl: '/avatars/mkbhd.jpg',
                bio: t('profiles.marques-brownlee.bio'),
                calculatorLink: '/youtube-money-calculator',
                calculatorText: t('profiles.marques-brownlee.calculatorText')
            }}
        />
    )
}
