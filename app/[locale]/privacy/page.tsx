'use client'

import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { useLocale } from 'next-intl'

export default function PrivacyPage() {
    const locale = useLocale()
    const isTR = locale === 'tr'

    return (
        <CalculatorLayout currentPage="/privacy">
            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                    {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </h1>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6">
                    <p>{isTR ? 'Son güncelleme: Mart 2026' : 'Last updated: March 2026'}</p>
                    <p>
                        {isTR
                            ? 'Infloura olarak gizliliğinizi ciddiye alıyoruz. Bu Gizlilik Politikası, web sitemizi (infloura.com) ziyaret ettiğinizde veya uygulamamızı kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.'
                            : 'At Infloura, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (infloura.com) or use our application.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '1. Topladığımız Bilgiler' : '1. Information We Collect'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Belirtilen hizmetlere kaydolduğunuzda, bizim veya ürünlerimiz hakkında bilgi almak için ilgi gösterdiğinizde ya da başka şekillerde bizimle iletişime geçtiğinizde gönüllü olarak sağladığınız kişisel bilgileri toplayabiliriz.'
                            : 'We may collect personal information that you voluntarily provide to us when you register on the specified services, express an interest in obtaining information about us or our products, or otherwise contact us.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '2. Bilgilerinizi Nasıl Kullanıyoruz' : '2. How We Use Your Information'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Kişisel bilgileri çeşitli iş amaçları için kullanıyoruz. Bu bilgileri meşru iş çıkarlarımıza dayanarak, sizinle sözleşme yapmak veya bir sözleşmeyi yerine getirmek amacıyla, onayınızla ve/veya yasal yükümlülüklerimize uyum sağlamak için işliyoruz.'
                            : 'We use personal information collected via our website for a variety of business purposes. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.'}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>{isTR ? 'Hesap oluşturma ve giriş sürecini kolaylaştırmak.' : 'To facilitate account creation and logon process.'}</li>
                        <li>{isTR ? 'Size yönetimsel bilgiler göndermek.' : 'To send administrative information to you.'}</li>
                        <li>{isTR ? 'Siparişlerinizi ve aboneliğinizi yerine getirmek ve yönetmek.' : 'To fulfill and manage your orders and subscription.'}</li>
                        <li>{isTR ? 'Kullanıcıya hizmet sunmak ve kolaylaştırmak.' : 'To deliver and facilitate delivery of services to the user.'}</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '3. Analitik ve Takip' : '3. Analytics and Tracking'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Hizmetimizin kullanımını izlemek ve analiz etmek için üçüncü taraf analitik hizmetlerini (Google Analytics ve Vercel Analytics gibi) kullanıyoruz. Bu araçlar, ziyaret ettiğiniz sayfalar ve hizmeti geliştirmemize yardımcı olan diğer bilgiler dahil olmak üzere tarayıcınızın gönderdiği bilgileri toplar.'
                            : 'We use third-party analytics services (such as Google Analytics and Vercel Analytics) to monitor and analyze the use of our service. These tools collect information sent by your browser, including the pages you visit and other information that assists us in improving the service.'}
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                        {isTR ? '4. Bize Ulaşın' : '4. Contact Us'}
                    </h2>
                    <p>
                        {isTR
                            ? 'Bu bildirim hakkında sorularınız veya yorumlarınız varsa bize hello@infloura.com adresinden e-posta gönderebilirsiniz.'
                            : 'If you have questions or comments about this notice, you may email us at hello@infloura.com.'}
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    )
}
