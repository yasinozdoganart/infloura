import { Metadata } from 'next'
import { CreatorProfile } from '@/components/seo/CreatorProfile'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'MrBeast Net Değeri ve YouTube Kazançları (2026) | Infloura' : 'MrBeast Net Worth & YouTube Earnings (2026) | Infloura',
        description: isTR 
            ? 'Jimmy Donaldson (MrBeast) YouTube reklam gelirlerinden ne kadar kazanıyor? $25M+/aylık içerik üretici imparatorluğunun arkasındaki tam hesabı görün.' 
            : 'How much does Jimmy Donaldson (MrBeast) make from YouTube ad revenue? See the exact math behind his $25M+/month creator empire.',
        openGraph: {
            title: isTR ? 'MrBeast YouTube Kazanç Analizi' : 'MrBeast YouTube Earnings Breakdown',
            description: isTR 
                ? 'YouTube\'daki en büyük içerik üreticisinin tahmini reklam geliri ve net değeri.' 
                : 'The estimated ad revenue and net worth of the biggest creator on YouTube.',
            url: 'https://infloura.com/creators/mrbeast',
        }
    }
}

export default async function MrBeastProfile({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Creators' });

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
                bio: t('profiles.mrbeast.bio'),
                calculatorLink: '/youtube-money-calculator',
                calculatorText: t('profiles.mrbeast.calculatorText')
            }}
        />
    )
}
