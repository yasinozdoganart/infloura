import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'Influencer Sponsorluk Hesaplayıcı – Marka Anlaşma Oranları | Infloura' : 'Influencer Sponsorship Calculator – Estimate Brand Deal Rates | Infloura',
        description: isTR 
            ? 'YouTube, TikTok ve Instagram için sponsorluk ücretlerini hesaplayın. Ücretsiz influencer sponsorluk oranı hesaplayıcı.' 
            : 'Calculate how much influencers charge for sponsored posts across YouTube, TikTok, and Instagram. Free sponsorship rate calculator by Infloura.',
        openGraph: {
            title: isTR ? 'Influencer Sponsorluk Oranı Hesaplayıcı' : 'Influencer Sponsorship Calculator – Estimate Brand Deal Rates',
            description: isTR 
                ? 'YouTube, TikTok ve Instagram için sponsorluk ücretlerinizi Infloura ile hesaplayın.' 
                : 'Calculate influencer sponsorship rates across YouTube, TikTok, and Instagram.',
            url: 'https://infloura.com/influencer-sponsorship-calculator',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function InfluencerSponsorshipCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        {
            question: 'Sponsorlu bir gönderi için ne kadar ücret almalıyım?',
            answer: 'Yaygın bir başlangıç formülü, etkileşim oranı ve nişinize göre ayarlanan 10.000 takipçi başına 100 dolardır. Etkileşim oranınız %3\'ün üzerindeyse, baz oranının 1,5-2 katını talep edebilirsiniz.'
        },
        {
            question: 'Sponsorluk oranlarını hangi faktörler belirler?',
            answer: 'Temel faktörler şunlardır: takipçi sayısı, etkileşim oranı, içerik nişi, platform (YouTube video başına en çok ödemeyi yapar), kitle demografisi ve içerik türü.'
        }
    ] : [
        {
            question: 'How much should I charge for a sponsored post?',
            answer: 'A common starting formula is $100 per 10,000 followers, adjusted for engagement rate and niche. If your engagement rate is above 3%, you can charge 1.5-2x the base rate.'
        },
        {
            question: 'What factors determine sponsorship rates?',
            answer: 'Key factors include: follower count, engagement rate, content niche, platform (YouTube pays most per sponsored video), audience demographics, and content type.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/influencer-sponsorship-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: isTR ? 'Influencer Sponsorluk Hesaplayıcı' : 'Influencer Sponsorship Calculator',
                    url: 'https://infloura.com/influencer-sponsorship-calculator',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz Sponsorluk Oranı Aracı' : 'Free Sponsorship Rate Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Influencer Sponsorluk{' '}
                    <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                        {isTR ? 'Hesaplayıcı' : 'Calculator'}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Kitle büyüklüğünüze, nişinize ve platformunuza bağlı olarak sponsorlu içerik için ne kadar ücret almanız gerektiğini tahmin edin.' 
                        : 'Estimate how much you should charge for sponsored content based on your audience size, niche, and platform.'}
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'Influencer Sponsorluk Oranları Nasıl Belirlenir?' : 'How Influencer Sponsorship Rates Are Set'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>Sponsorluklar, profesyonel influencer'ların çoğunluğu için en büyük gelir kaynağıdır ve genellikle toplam üretici gelirinin %50-70'ini oluşturur.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Standart Fiyatlandırma Çerçevesi</h3>
                            <p>Sponsorlu içerik için sektörel standart, tek bir Instagram gönderisi için 10.000 takipçi başına 100 dolardır. YouTube sponsorlukları genellikle 100.000 abone başına 2.000-5.000 dolar arasındadır.</p>
                        </>
                    ) : (
                        <>
                            <p>Sponsorships are the single largest revenue source for most professional influencers, often accounting for 50-70% of total creator income.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Standard Pricing Framework</h3>
                            <p>The industry-standard baseline for sponsored content is $100 per 10,000 followers for a single Instagram post. YouTube sponsored integrations typically command $2,000-$5,000 per 100,000 subscribers.</p>
                        </>
                    )}
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">{isTR ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">{faq.question}<span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span></summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <RelatedCalculators currentPage="/influencer-sponsorship-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Kapsamlı Bir Gelir Analizine Hazır mısınız?' : 'Ready for a Complete Revenue Analysis?'}</h2>
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-0 shadow-lg shadow-amber-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Ücretsiz Deneyin' : 'Start Free Trial'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
