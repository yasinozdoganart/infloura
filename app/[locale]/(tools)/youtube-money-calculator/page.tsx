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
        title: isTR ? 'YouTube Para Hesaplayıcı - İçerik Üretici Kazanç Tahmini | Infloura' : 'YouTube Money Calculator – Estimate Creator Earnings | Infloura',
        description: isTR 
            ? 'İzlenmelere, nişe ve ülkeye göre YouTuber\'ların ne kadar kazandığını Infloura\'nın ücretsiz gelir simülatörüyle tahmin edin.' 
            : 'Estimate how much YouTubers earn based on views, niche and country using Infloura\'s free creator revenue simulator.',
        openGraph: {
            title: isTR ? 'YouTube Para Hesaplayıcı - Tahmin Edin' : 'YouTube Money Calculator – Estimate Earnings',
            description: isTR 
                ? 'İzlenmelere, nişe ve ülkeye göre YouTuber\'ların ne kadar kazandığını Infloura\'nın ücretsiz gelir simülatörüyle tahmin edin.' 
                : 'Estimate how much YouTubers earn based on views, niche and country using Infloura\'s free creator revenue simulator.',
            url: 'https://infloura.com/youtube-money-calculator',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function YouTubeMoneyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';
    const tCommon = await getTranslations({ locale, namespace: 'Common' });

    const faqs = isTR ? [
        {
            question: 'YouTube 1.000 izlenme başına ne kadar öder?',
            answer: 'YouTube, nişinize, izleyici konumunuza ve etkileşim oranınıza bağlı olarak 1.000 izlenme başına 1 ile 30 dolar arasında ödeme yapar. Finans ve teknoloji kanalları en yüksek RPM\'yi kazanırken, eğlence içeriği daha az kazanma eğilimindedir. Tüm nişlerde ortalama 3-5 dolar civarındadır.'
        },
        {
            question: 'YouTube\'an para kazanmak için kaç izlenme gerekir?',
            answer: 'YouTube İş Ortağı Programı\'na katılmak ve reklam geliri kazanmaya başlamak için son 12 ay içinde en az 1.000 abone ve 4.000 izlenme saatine ihtiyacınız vardır. Ancak, etkileşiminiz yüksekse küçük bir kitleyle bile sponsorluklar ve satış ortaklığı yoluyla para kazanabilirsiniz.'
        },
        {
            question: 'YouTube\'da en çok hangi niş kazandırıyor?',
            answer: 'Finans, yatırım ve iş nişleri YouTube\'da sürekli olarak en yüksek RPM\'yi (genellikle 1.000 izlenme başına 15-30$+) öder. Teknoloji ve yazılım inceleme kanalları da iyi kazanır. Eğitim ve sağlık içeriği orta seviyededir, oyun ve eğlence ise genellikle daha düşük RPM\'lere ancak daha yüksek izlenme hacimlerine sahiptir.'
        }
    ] : [
        {
            question: 'How much does YouTube pay per 1,000 views?',
            answer: 'YouTube pays between $1 and $30 per 1,000 views depending on your niche, audience location, and engagement rate. Finance and tech channels earn the highest RPM, while entertainment content tends to earn less. The average across all niches is around $3-5 per 1,000 views.'
        },
        {
            question: 'How many views do you need to make money on YouTube?',
            answer: 'To join the YouTube Partner Program and start earning ad revenue, you need at least 1,000 subscribers and 4,000 watch hours in the past 12 months. However, you can earn through sponsorships and affiliate marketing with even a small audience if your engagement is high.'
        },
        {
            question: 'What niche pays the most on YouTube?',
            answer: 'Finance, investing, and business niches consistently pay the highest RPM on YouTube, often $15-30+ per 1,000 views. Technology and software review channels also earn well. Education and health content fall in the mid-range, while gaming and entertainment typically have lower RPMs but higher view volumes.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/youtube-money-calculator">
            <JsonLd type="calculator" data={{ name: isTR ? 'YouTube Para Hesaplayıcı' : 'YouTube Money Calculator', url: 'https://infloura.com/youtube-money-calculator' }} />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz YouTube Kazanç Aracı' : 'Free YouTube Earnings Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    YouTube Para{' '}
                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                        {isTR ? 'Hesaplayıcı' : 'Calculator'}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Aylık izlenmelerinize, içerik nişinize ve izleyici konumunuza göre YouTube\'da ne kadar kazanabileceğinizi tahmin edin.'
                        : 'Estimate how much you could earn on YouTube based on your monthly views, content niche, and audience location.'}
                </p>
            </div>

            <CalculatorWidget platform="youtube" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'YouTube Kazançları Nasıl Hesaplanır?' : 'How YouTube Earnings Are Calculated'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>YouTube içerik üreticisi kazançları birden fazla gelir kaynağından gelir; reklam geliri en çok bilinenidir.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM ve CPM: Temel Metrikler</h3>
                            <p>RPM (Bin Gösterim Başına Gelir), YouTube %45'lik payını aldıktan sonra her 1.000 izlenme başına ne kadar kazandığınızı temsil eder.</p>
                        </>
                    ) : (
                        <>
                            <p>YouTube creator earnings come from multiple revenue streams, with ad revenue being the most well-known.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">RPM and CPM: The Core Metrics</h3>
                            <p>RPM (Revenue Per Mille) represents how much you earn per 1,000 views after YouTube takes its 45% cut.</p>
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

            <RelatedCalculators currentPage="/youtube-money-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Kapsamlı Gelir Analizine Hazır mısınız?' : 'Ready for a Complete Revenue Analysis?'}</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Ücretsiz Denemeyi Başlat' : 'Start Free Trial'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
