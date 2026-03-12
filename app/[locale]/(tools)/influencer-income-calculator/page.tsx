import { getTranslations } from 'next-intl/server'
import CalculatorLayout from '@/components/seo/CalculatorLayout'
import CalculatorWidget from '@/components/seo/CalculatorWidget'
import JsonLd from '@/components/seo/JsonLd'
import RelatedCalculators from '@/components/seo/RelatedCalculators'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'ToolInfluencerIncome.metadata' })
    return {
        title: t('title'),
        description: t('description'),
    }
}

export default async function InfluencerIncomeCalculatorPage() {
    const t = await getTranslations('ToolInfluencerIncome')
    const faqs = t.raw('seo.faqs') as Array<{question: string, answer: string}>

    return (
        <CalculatorLayout currentPage="/influencer-income-calculator">
            <JsonLd
                type="calculator"
                data={{
                    name: t('metadata.title'),
                    description: t('metadata.description'),
                    url: 'https://infloura.com/influencer-income-calculator',
                }}
            />
            <JsonLd
                type="howTo"
                data={{
                    name: t('seo.howTitle'),
                    description: t('seo.howDesc'),
                    steps: []
                }}
            />
            <JsonLd type="faq" data={{ faqs }} />

            {/* Hero */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                    {t('badge')}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    {t('titlePrefix')}{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t('titleHighlight')}
                    </span>
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    {t('subtitle')}
                </p>
            </div>

            {/* Calculator Widget — Multi-platform */}
            <CalculatorWidget platform="multi" />

            {/* SEO Content Section */}
            <section className="mt-20 space-y-8">
                <h2 className="text-3xl font-bold tracking-tight">{t('seo.howTitle')}</h2>

                <div className="prose prose-invert prose-zinc max-w-none space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        {t('seo.howDesc')}
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.advantageTitle')}</h3>
                    <p>
                        {t('seo.advantageDesc')}
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.breakdownTitle')}</h3>
                    <p dangerouslySetInnerHTML={{ __html: t('seo.breakdownDesc').replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>') }} />

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.comparisonTitle')}</h3>
                    <p>
                        {t('seo.comparisonDesc')}
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.nicheTitle')}</h3>
                    <p>
                        {t('seo.nicheDesc')}
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.benchmarksTitle')}</h3>
                    <p>
                        {t('seo.benchmarksDesc')}
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">{t('seo.planTitle')}</h3>
                    <p>
                        {t('seo.planDesc')}
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-16 space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">{t('seo.faqTitle')}</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details
                            key={i}
                            className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
                        >
                            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:bg-white/[0.02] transition-colors">
                                {faq.question}
                                <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl">+</span>
                            </summary>
                            <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            <RelatedCalculators currentPage="/influencer-income-calculator" />

            <section className="mt-16 text-center py-12 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-3">{t('seo.ctaTitle')}</h2>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                    {t('seo.ctaDesc')}
                </p>
                <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg shadow-purple-500/25 px-8 py-5 text-base"
                    asChild
                >
                    <Link href="/register">
                        {t('seo.ctaButton')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </section>
        </CalculatorLayout>
    )
}
