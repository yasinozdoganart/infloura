'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function Footer() {
    const t = useTranslations('Footer')

    const productLinks = [
        { name: t('links.tools'), href: '/tools' },
        { name: t('links.pricing'), href: '/#pricing' },
        { name: t('links.login'), href: '/login' },
        { name: t('links.startFreeTrial'), href: '/register' },
    ]

    const toolLinks = [
        { name: t('links.allCreatorTools'), href: '/tools' },
        { name: t('links.youtubeMoneyCalculator'), href: '/youtube-money-calculator' },
        { name: t('links.tiktokMoneyCalculator'), href: '/tiktok-money-calculator' },
        { name: t('links.instagramMoneyCalculator'), href: '/instagram-money-calculator' },
        { name: t('links.influencerIncomeCalculator'), href: '/influencer-income-calculator' },
        { name: t('links.creatorIncomeCalculator'), href: '/creator-income-calculator' },
        { name: t('links.sponsorshipCalculator'), href: '/influencer-sponsorship-calculator' },
    ]

    const companyLinks = [
        { name: t('links.about'), href: '/about' },
        { name: t('links.contact'), href: 'mailto:hello@infloura.com' },
        { name: t('links.privacy'), href: '/privacy' },
        { name: t('links.terms'), href: '/terms' },
    ]

    return (
        <footer className="bg-[#030303] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link 
                            href="/" 
                            aria-label="Infloura Home"
                            className={`hover:opacity-80 transition-opacity flex items-center text-white mb-2 font-['Syncopate'] tracking-widest text-xl`}
                        >
                            infloura
                        </Link>
                        <div className="text-zinc-400 text-sm space-y-2">
                            <p className="text-white font-medium">{t('madeForCreators')}</p>
                            <p>{t('tagline')}</p>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('productHeader')}</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-white hover:underline transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('toolsHeader')}</h3>
                        <ul className="space-y-3">
                            {toolLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-white hover:underline transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('companyHeader')}</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-zinc-400 hover:text-white hover:underline transition-all">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Infloura. {t('rights')}
                    </p>
                    <p className="text-sm text-zinc-600">
                        {t('madeForCreators')}
                    </p>
                </div>
            </div>
        </footer>
    )
}
