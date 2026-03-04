import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/', '/settings/', '/simulator/', '/roadmap/', '/tracking/', '/api/'],
        },
        sitemap: 'https://infloura.com/sitemap.xml',
    }
}
