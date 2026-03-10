import CalculatorLayout from "@/components/seo/CalculatorLayout"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "About Infloura — Creator Revenue Intelligence Platform",
    description: "Learn about Infloura, a platform helping creators estimate and understand their income across YouTube, TikTok and Instagram.",
}

export default function AboutPage() {
    return (
        <CalculatorLayout currentPage="/about">
            <div className="max-w-4xl mx-auto py-12">

                {/* Hero */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">About Infloura</h1>
                    <p className="text-2xl text-purple-400 font-medium tracking-tight mb-8">
                        Helping creators understand and grow their income.
                    </p>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Infloura is a creator revenue intelligence platform designed to help content creators understand how their audience, platforms and monetization strategies translate into real income.
                    </p>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-4">
                        Many creators struggle to understand how sponsorships, views and platform algorithms impact their earnings. Infloura aims to make those numbers clearer.
                    </p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed space-y-16">

                    {/* What Infloura Does */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">What Infloura Does</h2>
                        <p>
                            Infloura provides tools that estimate potential earnings across major creator platforms such as YouTube, TikTok and Instagram.
                        </p>
                        <p>
                            Using revenue simulations and platform data models, creators can explore how different factors influence their income potential.
                        </p>
                        <p className="mt-6 mb-4 font-semibold text-white">Examples include:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
                            <li>YouTube revenue estimation</li>
                            <li>TikTok creator income projections</li>
                            <li>Instagram sponsorship estimates</li>
                            <li>Influencer income simulations</li>
                        </ul>
                        <p className="mt-6">
                            These tools help creators make more informed decisions about content strategy and monetization.
                        </p>
                    </section>

                    {/* Why Infloura Exists */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Why Infloura Exists</h2>
                        <p>
                            The creator economy has grown rapidly, but most creators still operate without clear financial insights.
                        </p>
                        <p>
                            Many rely on guesswork when evaluating brand deals, sponsorship rates or long-term income potential.
                        </p>
                        <p>
                            <b>Infloura was created to bring transparency to creator monetization.</b>
                        </p>
                        <p>
                            By turning complex platform economics into understandable simulations, creators gain a clearer view of what their growth could translate into financially.
                        </p>
                    </section>

                    {/* Our Mission */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Our Mission</h2>
                        <p className="text-xl text-purple-300 font-medium mb-6">
                            Our mission is simple: To help creators make smarter decisions about their content and income.
                        </p>
                        <p>
                            We believe creators should have access to the same type of analytical tools that businesses use to forecast revenue and growth.
                        </p>
                        <p>
                            Infloura aims to become a central platform where creators can simulate, plan and understand their revenue journey.
                        </p>
                    </section>

                    {/* Built for Creators */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Built for Creators</h2>
                        <p className="mb-4">Infloura is designed for:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-pink-500">
                            <li>aspiring creators starting their first channels</li>
                            <li>growing influencers evaluating sponsorship deals</li>
                            <li>experienced creators optimizing their revenue streams</li>
                        </ul>
                        <p className="mt-6">
                            Whether you are experimenting with your first videos or building a large audience, understanding the financial side of content creation is essential.
                        </p>
                        <p>
                            Infloura helps creators turn audience growth into revenue clarity.
                        </p>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="mt-32 mb-16 text-center py-16 px-6 rounded-3xl bg-zinc-900 border border-white/10">
                    <h2 className="text-3xl font-bold mb-6 text-white">Start Exploring Your Creator Income</h2>
                    <p className="text-zinc-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                        Use Infloura’s creator calculators to estimate how much your content could earn across different platforms.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-6 text-lg rounded-full" asChild>
                            <Link href="/tools">Explore Tools &rarr;</Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium border-0 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] px-8 py-6 text-lg rounded-full" asChild>
                            <Link href="/register">Start Free Trial</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </CalculatorLayout>
    )
}
