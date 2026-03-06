import Link from 'next/link'
import Image from 'next/image'

const productLinks = [
    { name: 'Tools', href: '/tools' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Login', href: '/login' },
    { name: 'Start Free Trial', href: '/register' },
]

const toolLinks = [
    { name: 'All Creator Tools', href: '/tools' },
    { name: 'YouTube Money Calculator', href: '/youtube-money-calculator' },
    { name: 'TikTok Money Calculator', href: '/tiktok-money-calculator' },
    { name: 'Instagram Money Calculator', href: '/instagram-money-calculator' },
    { name: 'Influencer Income Calculator', href: '/influencer-income-calculator' },
    { name: 'Creator Income Calculator', href: '/creator-income-calculator' },
    { name: 'Influencer Sponsorship Calculator', href: '/influencer-sponsorship-calculator' },
]

const companyLinks = [
    { name: 'About Infloura', href: '/about' },
    { name: 'Contact', href: 'mailto:hello@infloura.com' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
]

export function Footer() {
    return (
        <footer className="bg-[#030303] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center mb-2">
                            <Image
                                src="/logo-white.svg"
                                alt="Infloura Logo"
                                width={240}
                                height={32}
                                className="h-7 md:h-8 w-auto opacity-90"
                            />
                        </Link>
                        <div className="text-zinc-400 text-sm space-y-2">
                            <p className="text-white font-medium">Made for creators, by creators.</p>
                            <p>Creator revenue intelligence platform.</p>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
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
                        <h3 className="font-semibold text-white mb-4">Tools</h3>
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
                        <h3 className="font-semibold text-white mb-4">Company</h3>
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
                        © {new Date().getFullYear()} Infloura. All rights reserved.
                    </p>
                    <p className="text-sm text-zinc-600">
                        Made for creators, by creators.
                    </p>
                </div>
            </div>
        </footer>
    )
}
