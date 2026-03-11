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
        title: isTR ? 'Gönderi Başına Instagram Geliri - Ne Kadar Kazanırsınız? | Infloura' : 'Instagram Income Per Post – How Much Do Instagram Posts Pay? | Infloura',
        description: isTR 
            ? 'Sponsorluklardan, Reels bonuslarından ve satış ortaklığından gönderi başına ne kadar kazandığınızı tahmin edin. Ücretsiz hesaplayıcı.' 
            : 'Estimate how much Instagram influencers earn per post from sponsorships, Reels bonuses, and affiliate marketing. Free Instagram income calculator by Infloura.',
        openGraph: {
            title: isTR ? 'Gönderi Başına Instagram Geliri Tahmini' : 'Instagram Income Per Post – How Much Do Instagram Posts Pay?',
            description: isTR 
                ? 'Sponsorluklardan gönderi başına ne kadar kazandığınızı Infloura ile hesaplayın.' 
                : 'Estimate how much Instagram influencers earn per post from sponsorships and affiliate marketing.',
            url: 'https://infloura.com/instagram-income-per-post',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function InstagramIncomePerPostPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        { question: 'Instagram gönderi başına ne kadar öder?', answer: 'Instagram içerik üreticilerine doğrudan gönderi başına ödeme yapmaz. Gelir, takipçi sayısına ve etkileşime göre değişen marka sponsorluklarından gelir. 50.000 takipçili üreticiler genellikle gönderi başına 500-1.500 dolar kazanır.' },
        { question: 'Reels gönderileri ne kadar kazandırır?', answer: 'Instagram Reels\'te YouTube gibi izlenme başına sabit ödeme yoktur. Reels Play Bonus programı belirli üreticilere ödeme yapar. Sponsorlu Reels\'ler genellikle daha yüksek erişim nedeniyle normal gönderinin 1,5-3 katı ücret alır.' }
    ] : [
        { question: 'How much does Instagram pay per post?', answer: 'Instagram doesn\'t directly pay creators per post. Income comes from brand sponsorships, which average $100 per 10,000 followers per post, adjusted for engagement and niche. Creators with 50,000 followers typically earn $500-$1,500 per sponsored post.' },
        { question: 'How much do Reels pay on Instagram?', answer: 'Instagram Reels don\'t have a consistent per-view payment like YouTube. The Reels Play Bonus program (invite-only) pays select creators for Reels performance. Sponsored Reels typically command 1.5-3x the rate of a static sponsored post.' }
    ];

    return (
        <CalculatorLayout currentPage="/instagram-income-per-post">
            <JsonLd type="calculator" data={{ name: isTR ? 'Gönderi Başına Instagram Geliri Hesaplayıcı' : 'Instagram Income Per Post Calculator', url: 'https://infloura.com/instagram-income-per-post' }} />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz Instagram Gelir Aracı' : 'Free Instagram Revenue Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Gönderi Başına{' '}
                    <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                        Instagram Geliri
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Takipçi sayınız ve etkileşiminize bağlı olarak gerçekçi sponsorluk oranlarını ve satış ortaklığı gelirlerini keşfedin.'
                        : 'How much do Instagram influencers earn per post? Discover realistic sponsorship rates, Reels income, and affiliate revenue based on follower count and engagement.'}
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'Instagram Gönderileri Gerçekte Ne Kadar Öder?' : 'How Much Do Instagram Posts Actually Pay?'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>YouTube'dan farklı olarak Instagram'ın gelir modeli esas olarak marka ortaklıkları tarafından yönlendirilir. Instagram'ın kendisinden standart bir "gönderi başına ödeme" yoktur; geliriniz tamamen kitlenizi ne kadar etkili bir şekilde paraya dönüştürdüğünüze bağlıdır.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Takipçi Sayısına Göre Sponsorluk Oranları</h3>
                            <p>Marka sponsorlukları temel gelir kaynağıdır. Sektör standardı, 10.000 takipçi başına yaklaşık 100 dolardır.</p>
                        </>
                    ) : (
                        <>
                            <p>Unlike YouTube, Instagram&apos;s income model is primarily driven by brand partnerships. There&apos;s no standard &quot;per-post payment&quot; from Instagram itself — your income depends entirely on how effectively you monetize your audience.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsored Post Rates by Follower Count</h3>
                            <p>Brand sponsorships are the primary income source. The industry-standard baseline is approximately $100 per 10,000 followers.</p>
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

            <RelatedCalculators currentPage="/instagram-income-per-post" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Tam Gelir Simülasyonunu Çalıştır' : 'Run the Full Creator Income Simulation'}</h2>
                <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-fuchsia-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Simülasyonu Başlat' : 'Run Simulation'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
