import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'Instagram Para Hesaplayıcı - Influencer Kazanç Tahmini | Infloura' : 'Instagram Money Calculator – Estimate Influencer Earnings | Infloura',
        description: isTR 
            ? 'Sponsorlu gönderiler, Reel\'ler ve satış ortaklığından ne kadar kazanabileceğinizi Infloura\'nın ücretsiz Instagram gelir aracıyla hesaplayın.' 
            : 'Calculate how much Instagram influencers earn from sponsored posts, Reels, and affiliate marketing. Free Instagram earnings estimator by Infloura.',
        openGraph: {
            title: isTR ? 'Instagram Para Hesaplayıcı - Tahmin Edin' : 'Instagram Money Calculator – Estimate Influencer Earnings',
            description: isTR 
                ? 'Sponsorlu gönderiler, Reel\'ler ve satış ortaklığından ne kadar kazanabileceğinizi Infloura\'nın ücretsiz Instagram gelir aracıyla hesaplayın.' 
                : 'Calculate how much Instagram influencers earn from sponsored posts, Reels, and affiliate marketing.',
            url: 'https://infloura.com/instagram-money-calculator',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function InstagramMoneyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        {
            question: 'Instagram influencer\'ları gönderi başına ne kadar kazanıyor?',
            answer: 'Instagram influencer oranları, takipçi sayısına ve etkileşime göre değişir. Nano-influencer\'lar (1K-10K takipçi) gönderi başına 10-100 dolar, mikro-influencer\'lar (10K-100K) 100-1.000 dolar, orta seviye influencer\'lar (100K-500K) 1.000-5.000 dolar ve makro-influencer\'lar (500K+) gönderi başına 5.000-50.000 $+ kazanabilir.'
        },
        {
            question: 'Instagram\'dan para kazanmak için kaç takipçi gerekir?',
            answer: 'Güçlü bir etkileşiminiz varsa Instagram\'da 1.000 kadar az takipçiyle kazanmaya başlayabilirsiniz. Çoğu marka anlaşması 5.000-10.000 takipçi civarında başlar. Etkileşim oranınız, saf takipçi sayısından daha önemlidir.'
        },
        {
            question: 'Instagram Reel\'leri nasıl para kazandırır?',
            answer: 'İşbirlikleri, Reels Play Bonus programı (davetiyeli), Reel içeriği için marka sponsorlukları ve bio veya hikayelerdeki satış ortaklığı bağlantıları yoluyla gelir elde edilebilir. Sponsorlu Reel\'ler genellikle statik bir gönderinin 1,5-3 katı ücret alır.'
        }
    ] : [
        {
            question: 'How much do Instagram influencers make per post?',
            answer: 'Instagram influencer rates vary widely by following size. Nano-influencers (1K-10K followers) earn $10-$100 per post, micro-influencers (10K-100K) earn $100-$1,000, mid-tier influencers (100K-500K) earn $1,000-$5,000, and macro-influencers (500K+) can earn $5,000-$50,000+ per sponsored post.'
        },
        {
            question: 'How many followers do you need to make money on Instagram?',
            answer: 'You can start earning on Instagram with as few as 1,000 followers if you have strong engagement. Most brand deals become available around 5,000-10,000 followers. Focus on engagement rate rather than pure follower count for monetization.'
        },
        {
            question: 'How do Instagram Reels make money?',
            answer: 'Instagram Reels can generate income through the Reels Play Bonus program (invite-only), brand sponsorships for Reels content, and affiliate links in your bio or stories. Sponsored Reels typically command 1.5-3x the rate of a static post.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/instagram-money-calculator">
            <JsonLd type="calculator" data={{ name: isTR ? 'Instagram Para Hesaplayıcı' : 'Instagram Money Calculator', url: 'https://infloura.com/instagram-money-calculator' }} />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz Instagram Kazanç Aracı' : 'Free Instagram Earnings Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Instagram Para{' '}
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                        {isTR ? 'Hesaplayıcı' : 'Calculator'}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Sponsorlu gönderiler, Reel\'ler, satış ortaklığı ve marka ortaklıklarından elde edeceğiniz Instagram kazançlarınızı tahmin edin.'
                        : 'Estimate your Instagram earnings from sponsored posts, Reels, affiliate marketing, and brand partnerships.'}
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'Instagram Kazançları Nasıl Çalışır?' : 'How Instagram Earnings Work'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>Instagram, içerik üreticileri ve influencer'lar için en karlı platformlardan biri olmaya devam ediyor.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorlu Gönderiler: Temel Gelir Kaynağı</h3>
                            <p>Marka sponsorlukları, Instagram gelirinin temel taşıdır. Oranlar öncelikle takipçi sayınız, etkileşim oranınız ve nişiniz tarafından belirlenir.</p>
                        </>
                    ) : (
                        <>
                            <p>Instagram remains one of the most lucrative platforms for content creators and influencers.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsored Posts: The Primary Revenue Stream</h3>
                            <p>Brand sponsorships are the cornerstone of Instagram creator income. Rates are primarily determined by your follower count, engagement rate, and niche.</p>
                        </>
                    )}
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">{isTR ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                                {faq.question}
                                <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <RelatedCalculators currentPage="/instagram-money-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Kapsamlı Gelir Analizine Hazır mısınız?' : 'Ready for a Complete Revenue Analysis?'}</h2>
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-pink-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Ücretsiz Denemeyi Başlat' : 'Start Free Trial'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
