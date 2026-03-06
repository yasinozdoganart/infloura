import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Infloura",
    description: "Terms of Service for the Infloura creator revenue intelligence platform.",
}

export default function TermsPage() {
    return (
        <CalculatorLayout currentPage="/terms">
            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6">
                    <p>Last updated: March 2026</p>
                    <p>
                        Please read these terms and conditions carefully before using Our Service. By accessing or using the Service, You agree to be bound by these Terms and Conditions.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Use of the Service</h2>
                    <p>
                        Infloura provides a platform offering creator revenue intelligence, mathematical simulations, AI-generated guidance, and business tracking tools. The tools and simulations provided are estimates based on industry benchmarks and are not guarantees of actual future income.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Subscriptions and Payments</h2>
                    <p>
                        Some parts of the Service are billed on a subscription basis ("Subscriptions"). You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Accounts</h2>
                    <p>
                        When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Disclaimer of Warranties</h2>
                    <p>
                        The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. Infloura expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, You can contact us at hello@infloura.com.
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    )
}
