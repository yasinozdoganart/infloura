import { Metadata } from 'next'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isTR = locale === 'tr';
    return {
        title: isTR ? 'Twitch Abone Başına Kazanç - Detaylı Açıklama | Infloura' : 'Twitch Earnings Per Subscriber Explained | Infloura',
        description: isTR 
            ? 'Bir Twitch yayıncısının abone başına ne kadar kazandığını öğrenin. 50/50 ve 70/30 gelir paylaşımları, bitler ve reklam ödemeleri.' 
            : 'Find out exactly how much Twitch streamers earn per subscriber. Decode the 50/50 and 70/30 revenue splits, bits, and ad payouts.',
        openGraph: {
            title: isTR ? 'Twitch Abone Başına Kazanç Açıklaması' : 'Twitch Earnings Per Subscriber Explained',
            description: isTR 
                ? 'Twitch yayıncılarının abone başına ne kadar kazandığını Infloura ile keşfedin.' 
                : 'Find out exactly how much Twitch streamers earn per subscriber. Decode the Twitch revenue splits.',
            url: 'https://infloura.com/twitch-income-per-subscriber',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function TwitchIncomePerSubscriberPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        {
            question: 'Yayıncı 4.99 dolarlık bir abonelikten ne kadar alır?',
            answer: 'Varsayılan olarak, Twitch Affiliate yayıncıları 50/50 paylaşımdadır, yani Tier 1 ($4.99) abone başına yaklaşık 2.50 dolar kazanırlar. Üst düzey Partnerler 70/30 paylaşım ile yaklaşık 3.50 dolar kazanabilir.'
        },
        {
            question: '100 Bit yayıncı için ne kadar değerindedir?',
            answer: 'Twitch, 1 Bit = 0.01 doların doğrudan yayıncıya gitmesini garanti eder. Bu nedenle, bir izleyici 100 Bit gönderdiğinde yayıncı tam olarak 1.00 dolar kazanır.'
        }
    ] : [
        {
            question: 'How much does a streamer get for a $4.99 sub?',
            answer: 'By default, Twitch Affiliate streamers are on a 50/50 split, meaning they earn approximately $2.50 per Tier 1 ($4.99) sub. Top Partners can unlock a 70/30 split, earning roughly $3.50 per Tier 1 sub.'
        },
        {
            question: 'How much is 100 Bits worth to a streamer?',
            answer: 'Twitch explicitly guarantees that 1 Bit = $0.01 directly to the streamer. Therefore, if a viewer cheers 100 Bits, the streamer earns exactly $1.00.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/twitch-income-per-subscriber">
            <JsonLd
                type="calculator"
                data={{
                    name: isTR ? 'Twitch Abone Geliri Hesaplayıcı' : 'Twitch Subscriber Revenue Calculator',
                    url: 'https://infloura.com/twitch-income-per-subscriber',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz Yayıncı Finans Aracı' : 'Free Streamer Finance Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Abone Başına{' '}
                    <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                        Twitch Kazancı
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Canlı yayın ödemelerinin karmaşık dünyasını çözün. Her abone, bit ve yayın saati için tam olarak ne kadar kazandığınızı anlayın.' 
                        : 'Decode the complex world of livestreaming payouts. Understand exactly how much money lands in your bank account for every sub, bit, and hour streamed.'}
                </p>
            </div>

            <CalculatorWidget platform="multi" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'Twitch Para Kazanma Motoru' : 'The Twitch Monetization Engine'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>Canlı yayıncılar için aylık ücret ödeyen sadık bir topluluk oluşturmak en büyük hedeftir. YouTube veya TikTok'un aksine, Twitch öngörülebilir, yinelenen abonelik geliri sunar.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Standart 50/50 Paylaşım</h3>
                            <p>Twitch Affiliate durumuna ulaştığınızda, abonelik özelliğini açarsınız. Standart bir Tier 1 aboneliği izleyiciye 4.99 dolara mal olur. Twitch bu işlemin %50'sini alır.</p>
                        </>
                    ) : (
                        <>
                            <p>For live streamers, building a loyal community that pays a monthly fee is the holy grail. Unlike YouTube or TikTok, Twitch offers predictable, recurring subscription revenue.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">The Standard 50/50 Split</h3>
                            <p>When you reach Twitch Affiliate status, you unlock the ability for viewers to subscribe to your channel. A standard Tier 1 subscription costs $4.99. Twitch takes a 50% cut.</p>
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

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'İçerik Üretici İşinizi Profesyonelleştirin' : 'Professionalize Your Creator Business'}</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Infloura Simülatörünü Deneyin' : 'Try the Infloura Simulator'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
