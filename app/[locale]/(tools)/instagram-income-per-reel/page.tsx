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
        title: isTR ? 'Instagram Reels Kazanç Hesaplayıcı | Infloura' : 'Instagram Reels Earnings Calculator | Infloura',
        description: isTR 
            ? 'Instagram Reels\'ten ne kadar para kazanabileceğinizi hesaplayın. İzlenmeler, Bonuslar ve Marka Sponsorlukları üzerinden tahmin yürütün.' 
            : 'Calculate how much money you can make from Instagram Reels. Estimate monetization via Views, Bonuses, and Brand Sponsorships per reel.',
        openGraph: {
            title: isTR ? 'Instagram Reels Kazanç Hesaplayıcı' : 'Instagram Reels Earnings Calculator',
            description: isTR 
                ? 'Instagram Reels izlenmelerinden ve sponsorluklarından ne kadar kazanabileceğinizi hesaplayın.' 
                : 'Calculate how much money you can make from Instagram Reels views and sponsorships.',
            url: 'https://infloura.com/instagram-income-per-reel',
            siteName: 'Infloura',
            type: 'website',
        }
    }
}

export default async function InstagramIncomePerReelPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isTR = locale === 'tr';

    const faqs = isTR ? [
        {
            question: 'Instagram Reels izlenmeleri için doğrudan ödeme yapar mı?',
            answer: 'YouTube AdSense\'in aksine, Instagram her Reel için yerel bir gelir paylaşım programına sahip değildir. Geçmişte davetiyeli Reels Play Bonus programı vardı, ancak bu program Meta tarafından sık sık durdurulmaktadır.'
        },
        {
            question: 'Markalar bir Instagram Reel sponsorluğu için ne kadar öder?',
            answer: 'Reels sponsorlukları oldukça kazançlıdır. Mikro-influencer\'lar (10k-50k takipçi) Reel başına 200-800 dolar alabilirken, makro-influencer\'lar 5.000-15.000 dolar ve üzeri talep edebilir.'
        }
    ] : [
        {
            question: 'Does Instagram pay you directly for Reels views?',
            answer: 'Unlike YouTube AdSense, Instagram does not have a native rev-share program for every Reel. Historically, they offered the "Reels Play Bonus" program, which paid creators directly for hitting monthly view targets.'
        },
        {
            question: 'How much do brands pay to sponsor one Instagram Reel?',
            answer: 'Brand sponsorships for Reels are incredibly lucrative. A micro-influencer (10k-50k followers) might charge $200-$800 per Reel. A macro-influencer (500k-1M followers) can easily charge $5,000 to $15,000 for a single dedicated sponsored Reel.'
        }
    ];

    return (
        <CalculatorLayout currentPage="/instagram-income-per-reel">
            <JsonLd
                type="calculator"
                data={{
                    name: isTR ? 'Instagram Reels Kazanç Hesaplayıcı' : 'Instagram Reels Earnings Calculator',
                    url: 'https://infloura.com/instagram-income-per-reel',
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                    {isTR ? 'Ücretsiz IG Para Kazanma Aracı' : 'Free IG Monetization Tool'}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Instagram Reels <br />
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {isTR ? 'Kazanç Hesaplayıcı' : 'Earnings Calculator'}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                    {isTR 
                        ? 'Kısa form videolar Instagram\'ı domine ediyor. Tek bir viral Reel\'in markalar ve sponsorlar için ne kadar değerli olduğunu keşfedin.'
                        : 'Short form video is dominating Instagram. Find out exactly how much a single viral Reel is worth to brands, sponsors, and affiliate partners.'}
                </p>
            </div>

            <CalculatorWidget platform="instagram" />

            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{isTR ? 'Bir Reel\'den Kazanç Nasıl Hesaplanır?' : 'How To Calculate Earnings From A Reel'}</h2>
                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    {isTR ? (
                        <>
                            <p>Instagram, Reels videolarını statik gönderilerin ve hikayelerin önüne geçirmek için platformunu devrim niteliğinde değiştirdi. Fotoğrafların organik erişimi düşerken, video erişimi patladı. Ancak <strong>Instagram Reels kazançlarını</strong> hesaplamaya gelince çoğu üreticinin kafası karışıyor.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorluklar: Reel Videolarının Gerçek Değeri</h3>
                            <p>Instagram'daki gerçek para, Kullanıcı Tarafından Oluşturulan İçerik (UGC) ve özel marka anlaşmalarında yatmaktadır. Bir Reel, yerel reklamcılık için mükemmel bir formattır.</p>
                        </>
                    ) : (
                        <>
                            <p>Instagram revolutionized its platform to push Reels above static posts and stories. As organic reach for photos plummeted, video reach exploded. But when it comes to figuring out the actual <strong>Instagram Reels earnings</strong>, many creators are left confused.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sponsorships: The True Value of a Reel</h3>
                            <p>The real money on Instagram lies in User Generated Content (UGC) and dedicated brand deals. A Reel is the perfect format for native advertising.</p>
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

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">{isTR ? 'Kitlenizi Bir İşletmeye Dönüştürün' : 'Turn Your Audience Into A Business'}</h2>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base" asChild>
                    <Link href="/register">
                        {isTR ? 'Profil Simülasyonunu Çalıştır' : 'Run Profile Simulation'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
