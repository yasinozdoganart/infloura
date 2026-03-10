'use client'

import CalculatorLayout from "@/components/seo/CalculatorLayout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLocale } from 'next-intl'

export default function AboutPage() {
    const locale = useLocale()
    const isTR = locale === 'tr'

    return (
        <CalculatorLayout currentPage="/about">
            <div className="max-w-4xl mx-auto py-12">

                {/* Hero */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
                        {isTR ? 'Infloura Hakkında' : 'About Infloura'}
                    </h1>
                    <p className="text-2xl text-purple-400 font-medium tracking-tight mb-8">
                        {isTR
                            ? 'İçerik üreticilerinin gelirlerini anlamalarına ve büyümelerine yardımcı oluyoruz.'
                            : 'Helping creators understand and grow their income.'}
                    </p>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {isTR
                            ? 'Infloura, içerik üreticilerinin kitle, platform ve para kazanma stratejilerinin gerçek gelire nasıl dönüştüğünü anlamalarına yardımcı olmak için tasarlanmış bir içerik üretici gelir zekâsı platformudur.'
                            : 'Infloura is a creator revenue intelligence platform designed to help content creators understand how their audience, platforms and monetization strategies translate into real income.'}
                    </p>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-4">
                        {isTR
                            ? 'Birçok içerik üreticisi, sponsorluğun, görüntülemelerin ve platform algoritmalarının kazançlarını nasıl etkilediğini anlamakta zorlanır. Infloura bu sayıları daha anlaşılır kılmayı hedefler.'
                            : 'Many creators struggle to understand how sponsorships, views and platform algorithms impact their earnings. Infloura aims to make those numbers clearer.'}
                    </p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-16">

                    {/* What Infloura Does */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            {isTR ? 'Infloura Ne Yapar?' : 'What Infloura Does'}
                        </h2>
                        <p>
                            {isTR
                                ? 'Infloura, YouTube, TikTok ve Instagram gibi büyük içerik üretici platformlarında potansiyel kazançları tahmin eden araçlar sunar.'
                                : 'Infloura provides tools that estimate potential earnings across major creator platforms such as YouTube, TikTok and Instagram.'}
                        </p>
                        <p>
                            {isTR
                                ? 'Gelir simülasyonları ve platform veri modelleri kullanılarak içerik üreticileri, farklı faktörlerin gelir potansiyellerini nasıl etkilediğini keşfedebilir.'
                                : 'Using revenue simulations and platform data models, creators can explore how different factors influence their income potential.'}
                        </p>
                        <p className="mt-6 mb-4 font-semibold text-white">
                            {isTR ? 'Örnekler:' : 'Examples include:'}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
                            <li>{isTR ? 'YouTube gelir tahmini' : 'YouTube revenue estimation'}</li>
                            <li>{isTR ? 'TikTok içerik üretici gelir projeksiyonları' : 'TikTok creator income projections'}</li>
                            <li>{isTR ? 'Instagram sponsorluk tahminleri' : 'Instagram sponsorship estimates'}</li>
                            <li>{isTR ? 'Influencer gelir simülasyonları' : 'Influencer income simulations'}</li>
                        </ul>
                        <p className="mt-6">
                            {isTR
                                ? 'Bu araçlar, içerik üreticilerinin içerik stratejisi ve para kazanma konusunda daha bilinçli kararlar almasına yardımcı olur.'
                                : 'These tools help creators make more informed decisions about content strategy and monetization.'}
                        </p>
                    </section>

                    {/* Why Infloura Exists */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            {isTR ? 'Infloura Neden Var?' : 'Why Infloura Exists'}
                        </h2>
                        <p>
                            {isTR
                                ? 'İçerik üretici ekonomisi hızla büyüdü; ancak çoğu içerik üreticisi hâlâ net finansal içgörüler olmadan faaliyet gösteriyor.'
                                : 'The creator economy has grown rapidly, but most creators still operate without clear financial insights.'}
                        </p>
                        <p>
                            {isTR
                                ? 'Pek çoğu, marka anlaşmalarını, sponsorluk ücretlerini veya uzun vadeli gelir potansiyelini değerlendirirken tahminde bulunuyor.'
                                : 'Many rely on guesswork when evaluating brand deals, sponsorship rates or long-term income potential.'}
                        </p>
                        <p>
                            <b>{isTR ? 'Infloura, içerik üretici para kazanma sürecine şeffaflık getirmek için oluşturuldu.' : 'Infloura was created to bring transparency to creator monetization.'}</b>
                        </p>
                        <p>
                            {isTR
                                ? 'Karmaşık platform ekonomisini anlaşılabilir simülasyonlara dönüştürerek, içerik üreticileri büyümelerinin finansal olarak neye dönüşebileceğini daha net görür.'
                                : 'By turning complex platform economics into understandable simulations, creators gain a clearer view of what their growth could translate into financially.'}
                        </p>
                    </section>

                    {/* Our Mission */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            {isTR ? 'Misyonumuz' : 'Our Mission'}
                        </h2>
                        <p className="text-xl text-purple-300 font-medium mb-6">
                            {isTR
                                ? 'Misyonumuz basit: İçerik üreticilerinin içerik ve gelir konusunda daha akıllı kararlar almasına yardımcı olmak.'
                                : 'Our mission is simple: To help creators make smarter decisions about their content and income.'}
                        </p>
                        <p>
                            {isTR
                                ? 'İçerik üreticilerinin, işletmelerin gelir ve büyümeyi tahmin etmek için kullandığı analitik araçlara erişimi olması gerektiğine inanıyoruz.'
                                : 'We believe creators should have access to the same type of analytical tools that businesses use to forecast revenue and growth.'}
                        </p>
                        <p>
                            {isTR
                                ? 'Infloura, içerik üreticilerinin gelir yolculuklarını simüle edebileceği, planlayabileceği ve anlayabileceği merkezi bir platform olmayı hedefliyor.'
                                : 'Infloura aims to become a central platform where creators can simulate, plan and understand their revenue journey.'}
                        </p>
                    </section>

                    {/* Built for Creators */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            {isTR ? 'İçerik Üreticileri İçin Tasarlandı' : 'Built for Creators'}
                        </h2>
                        <p className="mb-4">{isTR ? 'Infloura şunlar için tasarlanmıştır:' : 'Infloura is designed for:'}</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-pink-500">
                            <li>{isTR ? 'ilk kanallarını açan yeni başlayan içerik üreticileri' : 'aspiring creators starting their first channels'}</li>
                            <li>{isTR ? 'sponsorluk anlaşmalarını değerlendiren büyüyen influencer\'lar' : 'growing influencers evaluating sponsorship deals'}</li>
                            <li>{isTR ? 'gelir akışlarını optimize eden deneyimli içerik üreticileri' : 'experienced creators optimizing their revenue streams'}</li>
                        </ul>
                        <p className="mt-6">
                            {isTR
                                ? 'İlk videolarınızı deneyip denemedinizden veya geniş bir kitle oluşturuyor olmanızdan bağımsız olarak, içerik üretiminin finansal boyutunu anlamak çok önemlidir.'
                                : 'Whether you are experimenting with your first videos or building a large audience, understanding the financial side of content creation is essential.'}
                        </p>
                        <p>
                            {isTR
                                ? 'Infloura, içerik üreticilerinin kitle büyümesini gelir netliğine dönüştürmesine yardımcı olur.'
                                : 'Infloura helps creators turn audience growth into revenue clarity.'}
                        </p>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="mt-32 mb-16 text-center py-16 px-6 rounded-3xl bg-zinc-900 border border-white/10">
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        {isTR ? 'İçerik Üretici Gelirinizi Keşfetmeye Başlayın' : 'Start Exploring Your Creator Income'}
                    </h2>
                    <p className="text-zinc-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                        {isTR
                            ? 'İçeriğinizin farklı platformlarda ne kadar kazanabileceğini tahmin etmek için Infloura\'nın içerik üretici hesaplayıcılarını kullanın.'
                            : "Use Infloura's creator calculators to estimate how much your content could earn across different platforms."}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-6 text-lg rounded-full" asChild>
                            <Link href="/tools">{isTR ? 'Araçları Keşfet →' : 'Explore Tools →'}</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium border-0 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] px-8 py-6 text-lg rounded-full" asChild>
                            <Link href="/register">{isTR ? 'Ücretsiz Deneyin' : 'Start Free Trial'}</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </CalculatorLayout>
    )
}
