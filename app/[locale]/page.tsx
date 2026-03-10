import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { LineChart, BrainCircuit, Activity } from "lucide-react"
import { AvatarGroup } from "@/components/landing/AvatarGroup"
import { WallOfLove } from "@/components/landing/WallOfLove"
import { PricingSection } from "@/components/landing/PricingSection"
import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <HeroGeometric
          badge=""
          title1="Predict your creator income"
          title2="Simulate how much creators can earn"
        />
        <div className="absolute bottom-16 md:bottom-24 left-0 right-0 z-20 flex flex-col sm:flex-row justify-center items-center gap-4 px-6">
          <LiquidButton href="/register" className="text-white hover:text-white h-12 px-8 text-lg w-auto z-10">
            Run Simulation
          </LiquidButton>
          <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 px-8 text-lg rounded-2xl transition-all z-10" asChild>
            <Link href="/creator-income-calculator">Estimate Your Creator Income &rarr;</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black relative z-10 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
            <p className="text-zinc-400 text-lg">Stop relying on hope. Start treating your audience like the business it is.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <LineChart className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl">Revenue Simulator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">See your income potential with mathematical precision across YouTube, TikTok, Instagram, and X.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <BrainCircuit className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl">AI Strategy Engine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">Get a month-by-month roadmap from an AI model trained on creator economics and growth tactics.</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-xl">Growth Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">Compare your planned projections vs reality, stay on course, and adjust your actions instantly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-zinc-950 relative z-10 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">How it Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "Enter your platform data", desc: "No API connections required initially. Just drop your current reach and engagement.", colorClasses: "text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
              { step: "02", title: "Run revenue simulation", desc: "Our deterministic math engine creates 12-month projections tailored to your niche.", colorClasses: "text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
              { step: "03", title: "Follow AI roadmap", desc: "Execute the exact month-by-month steps the AI prescribes to hit your numbers.", colorClasses: "text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.15)]" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-zinc-950/80 p-6 rounded-2xl backdrop-blur-xl">
                <div className={`w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xl font-bold font-mono mb-6 ${item.colorClasses}`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Love (Testimonials) */}
      <WallOfLove />

      {/* Pricing Module */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-24 bg-zinc-950 relative z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is this a get-rich-quick tool?</h3>
              <p className="text-zinc-400">No. Infloura is a business simulation tool that relies on standard industry conversion metrics to show you what is mathematically possible. It requires enormous effort on your end.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What platforms are supported?</h3>
              <p className="text-zinc-400">Currently, we support detailed simulations for YouTube, TikTok, Instagram, and X (Twitter).</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How accurate are the projections?</h3>
              <p className="text-zinc-400">They are based on industry benchmarks for conversion rates, standard RPMs, and average sponsorship deals. While accurate structurally, individual performance will always vary.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-zinc-400">Yes, instantly from your dashboard settings. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
