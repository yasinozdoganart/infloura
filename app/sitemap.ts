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
        'youtube-income-per-1000-views',
        'youtube-income-per-subscriber',
        'tiktok-income-per-1000-views',
        '10k-youtuber-income',
        '50k-youtuber-income',
        '100k-youtuber-income',
        '1m-youtuber-income',
        'tools',
        'about',
        'privacy',
        'terms',
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
