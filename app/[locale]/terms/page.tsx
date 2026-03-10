'use client'

import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { useLocale } from 'next-intl'

export default function TermsPage() {
    const locale = useLocale()
    const isTR = locale === 'tr'

    return (
        <CalculatorLayout currentPage="/terms">
            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                    {isTR ? 'Kullanım Koşulları' : 'Terms of Service'}
                </h1>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6">
                    <p>{isTR ? 'Son güncelleme: Mart 2026' : 'Last updated: March 2026'}</p>
                    <p>
                        {isTR
                            ? 'Lütfen Hizmetimizi kullanmadan önce bu şartları ve koşulları dikkatlice okuyun. Hizmete erişerek veya onu kullanarak bu Şartlar ve Koşullar ile bağlı olmayı kabul edersiniz.'
                            : 'Please read these terms and conditions carefully before using Our Service. By accessing or using the Service, You agree to be bound by these Terms and Conditions.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '1. Hizmetin Kullanımı' : '1. Use of the Service'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Infloura, içerik üretici gelir zekâsı, matematiksel simülasyonlar, yapay zeka destekli rehberlik ve iş takip araçları sunan bir platform sağlar. Sunulan araçlar ve simülasyonlar, endüstri kıyaslamalarına dayalı tahminlerdir ve gerçek gelecek gelirin garantisi değildir.'
                            : 'Infloura provides a platform offering creator revenue intelligence, mathematical simulations, AI-generated guidance, and business tracking tools. The tools and simulations provided are estimates based on industry benchmarks and are not guarantees of actual future income.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '2. Abonelikler ve Ödemeler' : '2. Subscriptions and Payments'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Hizmetin bazı bölümleri abonelik esasına göre faturalandırılır. Aboneliği satın alırken seçtiğiniz Abonelik planının türüne bağlı olarak düzenli ve periyodik bazda (günlük, haftalık, aylık veya yıllık gibi) önceden faturalandırılırsınız.'
                            : 'Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '3. Kullanıcı Hesapları' : '3. User Accounts'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Bizimle bir hesap oluşturduğunuzda, her zaman doğru, eksiksiz ve güncel bilgi sağlamalısınız. Bunu yapmamanız, Hizmetimizdeki hesabınızın derhal feshedilmesine yol açabilecek bir Şartlar ihlali teşkil eder.'
                            : 'When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '4. Garanti Reddi' : '4. Disclaimer of Warranties'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Hizmet, size "OLDUĞU GİBİ" ve "MÜSAİT OLDUĞUNDA" sunulmaktadır. Infloura, Hizmet ile ilgili tüm garantileri, açık, ima edilen, yasal veya başka türlü olmak üzere açıkça reddeder.'
                            : 'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. Infloura expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '5. Bize Ulaşın' : '5. Contact Us'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Bu Koşullar hakkında herhangi bir sorunuz varsa, bize hello@infloura.com adresinden ulaşabilirsiniz.'
                            : 'If you have any questions about these Terms, You can contact us at hello@infloura.com.'}
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    )
}
