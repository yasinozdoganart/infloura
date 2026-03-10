import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Creator Guides & Resources | Infloura',
    description: 'Expert guides on creator monetization, audience growth, brand sponsorships, and the creator economy.',
    openGraph: {
        title: 'Creator Guides & Resources | Infloura',
        description: 'Learn how to get your first sponsor, calculate engagement rates, and build a full-time creator business.',
        url: 'https://infloura.com/guides',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/guides',
    },
}

export default function GuidesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // The individual ArticleLayout will handle the visual Header/Footer wrapper
    // This layout just provides metadata for the /guides directory route.
    return children
}
