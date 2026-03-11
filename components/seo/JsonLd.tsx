interface JsonLdProps {
    type: 'calculator' | 'faq' | 'howTo'
    data: {
        name?: string
        description?: string
        url?: string
        faqs?: { question: string; answer: string }[]
        steps?: { name: string; text: string }[]
        image?: string
    }
}

export default function JsonLd({ type, data }: JsonLdProps) {
    if (type === 'calculator') {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: data.name,
            description: data.description,
            url: data.url,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            creator: {
                '@type': 'Organization',
                name: 'Infloura',
                url: 'https://infloura.com',
            },
            featureList: 'Real-time revenue estimation, Niche-based multipliers, Geographic earnings impact calculation',
            screenshot: data.image || 'https://infloura.com/og-image.png',
        }

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        )
    }

    if (type === 'faq' && data.faqs) {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        )
    }

    if (type === 'howTo' && data.steps) {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: data.name,
            description: data.description,
            step: data.steps.map((step, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                name: step.name,
                itemListElement: [{
                    '@type': 'HowToDirection',
                    text: step.text
                }]
            })),
            totalTime: 'PT1M',
        }

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        )
    }

    return null
}
