import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Infloura | Creator Revenue Intelligence",
    description: "Infloura is a structured business platform made for creators, by creators. Predict your income, simulate growth, and scale your channel.",
}

export default function AboutPage() {
    return (
        <CalculatorLayout currentPage="/about">
            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Infloura</h1>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-6">
                    <p className="text-xl text-zinc-400">
                        Infloura was built for a single purpose: to give content creators the business intelligence tools that traditional companies have had for decades.
                    </p>
                    <p>
                        We believe that a creator&apos;s audience is a business asset, and hoping for algorithmic luck is not a viable strategy. By combining mathematical projections, industry benchmarks, and deterministic AI roadmaps, Infloura transforms unpredictable views into predictable revenue.
                    </p>
                    <p>
                        Whether you are a rising star with 10,000 subscribers or an established personality with millions of followers, Infloura provides the clarity needed to make data-driven decisions about sponsorships, ad revenue, and growth timing.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">Made for creators, by creators.</h2>
                    <p>
                        Our founding team consists of creators, software engineers, and digital economists who understand the frustration of volatile income. We built the platform we wished we had when we started.
                    </p>
                </div>
            </div>
        </CalculatorLayout>
    )
}
