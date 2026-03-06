import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Infloura",
    description: "Privacy Policy for the Infloura creator revenue intelligence platform.",
}

export default function PrivacyPage() {
    return (
        <CalculatorLayout currentPage="/privacy">
            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6">
                    <p>Last updated: March 2026</p>
                    <p>
                        At Infloura, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (infloura.com) or use our application.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you register on the specified services, express an interest in obtaining information about us or our products, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send administrative information to you.</li>
                        <li>To fulfill and manage your orders and subscription.</li>
                        <li>To deliver and facilitate delivery of services to the user.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Analytics and Tracking</h2>
                    <p>
                        We use third-party analytics services (such as Google Analytics and Vercel Analytics) to monitor and analyze the use of our service. These tools collect information sent by your browser, including the pages you visit, your add-ons, and other information that assists us in improving the service.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
                    <p>
                        If you have questions or comments about this notice, you may email us at hello@infloura.com.
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    )
}
