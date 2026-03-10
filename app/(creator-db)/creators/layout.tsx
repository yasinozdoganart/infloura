import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Creator Net Worth & Earnings Database | Infloura',
    description: 'Discover exactly how much top creators like MrBeast, MKBHD, and Emma Chamberlain earn from YouTube, TikTok, and sponsorships.',
    openGraph: {
        title: 'Creator Earnings Database | Infloura',
        description: 'Discover exactly how much top creators make from their channels and brand deals.',
        url: 'https://infloura.com/creators',
        siteName: 'Infloura',
        type: 'website',
    },
    alternates: {
        canonical: 'https://infloura.com/creators',
    },
}

export default function CreatorsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
