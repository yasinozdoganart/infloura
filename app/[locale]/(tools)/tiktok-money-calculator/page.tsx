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
        title: isTR ? 'TikTok Para Hesaplayıcı - İçerik Üretici Kazanç Tahmini | Infloura' : 'TikTok Money Calculator – Estimate Creator Earnings | Infloura',
        description: isTR 
            ? 'TikTok İçerik Üretici Fonu, marka anlaşmaları ve satış ortaklığından ne kadar kazanabileceğinizi Infloura\'nın ücretsiz aracıyla hesaplayın.' 
            : 'Calculate how much TikTok creators earn from the Creator Fund, brand deals and affiliate marketing with Infloura\'s free earnings estimator.',
        openGraph: {
            title: isTR ? 'TikTok Para Hesaplayıcı - Tahmin Edin' : 'TikTok Money Calculator – Estimate Earnings',
            description: isTR 
                ? 'TikTok İçerik Üretici Fonu, marka anlaşmaları ve satış ortaklığından ne kadar kazanabileceğinizi Infloura\'nın ücretsiz aracıyla hesaplayın.' 
                : 'Calculate how much TikTok creators earn from the Creator Fund, brand deals and affiliate marketing.',
            url: 'https://infloura.com/tiktok-money-calculator',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function TikTokMoneyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        {
            question: 'TikTok 1.000 izlenme başına ne kadar öder?',
            answer: 'TikTok İçerik Üretici Fonu, 1.000 izlenme başına yaklaşık 0,02 ile 0,05 dolar öder. Bu, YouTube\'un reklam gelirinden önemli ölçüde düşüktür. Ancak, TikTok içerik üreticileri genellikle marka anlaşmaları, satış ortaklığı ve TikTok Shop komisyonları yoluyla çok daha fazla kazanabilirler.'
        },
        {
            question: 'TikTok\'tan para kazanmak için kaç takipçiye ihtiyaç var?',
            answer: 'TikTok\'un İçerik Üretici Fonu\'na erişmek için en az 10.000 takipçiye ve son 30 gün içinde 100.000 video izlenmesine ihtiyacınız vardır. Ancak, özellikle finans veya güzellik gibi karlı nişlerde güçlü etkileşim oranlarınız varsa, 1.000 kadar az takipçisi olan üreticiler bile marka anlaşmaları yoluyla kazanabilir.'
        },
        {
            question: 'TikTok\'tan geçinebilir misiniz?',
            answer: 'Evet, birçok içerik üreticisi TikTok\'tan tam zamanlı gelir elde ediyor, ancak nadiren sadece İçerik Üretici Fonu\'ndan. Başarılı TikToker\'lar gelirlerini marka ortaklıkları (takipçi sayısına bağlı olarak gönderi başına 500$ - 50.000$+), satış ortaklığı, TikTok Shop ve kendi ürün veya hizmetlerine trafik çekerek çeşitlendirir.'
        }
    ] : [
        {
            question: 'How much does TikTok pay per 1,000 views?',
            answer: 'TikTok\'s Creator Fund pays approximately $0.02 to $0.05 per 1,000 views. This is significantly lower than YouTube\'s ad revenue. However, TikTok creators often earn more through brand deals, affiliate marketing, and TikTok Shop commissions, which can dramatically increase their total earnings.'
        },
        {
            question: 'How many followers do you need to make money on TikTok?',
            answer: 'To access TikTok\'s Creator Fund, you need at least 10,000 followers and 100,000 video views in the last 30 days. However, creators with as few as 1,000 followers can earn through brand deals if they have strong engagement rates, especially in profitable niches like finance or beauty.'
        },
        {
            question: 'Can you make a living on TikTok?',
            answer: 'Yes, many creators earn full-time income on TikTok, but rarely from the Creator Fund alone. Successful TikTokers diversify with brand partnerships ($500-$50,000+ per post depending on following), affiliate marketing, TikTok Shop, and driving traffic to their own products or services.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/tiktok-money-calculator">
            <JsonLd type="calculator" data={{ name: isTR ? 'TikTok Para Hesaplayıcı' : 'TikTok Money Calculator', url: 'https://infloura.com/tiktok-money-calculator' }} />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz TikTok Kazanç Aracı' : 'Free TikTok Earnings Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    TikTok Para{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {isTR ? 'Hesaplayıcı' : 'Calculator'}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'İçerik Üretici Fonu, marka anlaşmaları ve satış ortaklığından elde edeceğiniz TikTok kazançlarınızı tahmin edin.'
                        : 'Estimate your TikTok earnings from the Creator Fund, brand deals, and affiliate marketing based on your stats.'}
                </p>
            </div>

            <CalculatorWidget platform="tiktok" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'TikTok Kazançları Nasıl Çalışır?' : 'How TikTok Earnings Work'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>TikTok, içerik üreticileri için en etkili platformlardan biri haline geldi, ancak para kazanma modeli YouTube'dan önemli ölçüde farklıdır.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">TikTok İçerik Üretici Fonu</h3>
                            <p>TikTok'un İçerik Üretici Fonu, üreticilere video izlenmeleri, etkileşim ve içerik kalitesine göre ödeme yapar. Tipik ödeme 1.000 izlenme başına 0,02 ile 0,05 dolar arasındadır.</p>
                        </>
                    ) : (
                        <>
                            <p>TikTok has rapidly become one of the most influential platforms for content creators, but its monetization model differs significantly from YouTube.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">The TikTok Creator Fund</h3>
                            <p>TikTok&apos;s Creator Fund pays creators based on video views, engagement, and content quality. Typical payout ranges from $0.02 to $0.05 per 1,000 views.</p>
                        </>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
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

            <RelatedCalculators currentPage="/tiktok-money-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Kapsamlı Gelir Analizine Hazır mısınız?' : 'Ready for a Complete Revenue Analysis?'}</h2>
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Ücretsiz Denemeyi Başlat' : 'Start Free Trial'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
