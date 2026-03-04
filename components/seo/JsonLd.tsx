interface JsonLdProps {
    type: 'calculator' | 'faq'
    data: {
        name?: string
        description?: string
        url?: string
        faqs?: { question: string; answer: string }[]
    }
}

export default function JsonLd({ type, data }: JsonLdProps) {
    if (type === 'calculator') {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
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

    return null
}
