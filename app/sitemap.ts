import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://infloura.com'

    const calculatorPages = [
        'youtube-money-calculator',
        'tiktok-money-calculator',
        'influencer-income-calculator',
        'instagram-money-calculator',
        'youtube-rpm-calculator',
        'tiktok-earnings-calculator',
        'influencer-sponsorship-calculator',
        'creator-income-calculator',
        'youtube-income-per-view',
        'tiktok-income-per-view',
        'instagram-income-per-post',
        'how-much-do-youtubers-make',
        'how-much-do-tiktokers-make',
        'how-much-do-influencers-make',
    ]

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...calculatorPages.map(slug => ({
            url: `${baseUrl}/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ]
}
