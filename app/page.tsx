import { HeroSection } from "@/components/blocks/hero-section-dark"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { LineChart, BrainCircuit, Activity, CheckCircle2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">CreatorOS</div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-zinc-300 hover:text-white" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-white text-black hover:bg-zinc-200" asChild>
              <Link href="/register">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section from User Request */}
      <HeroSection
        title="CreatorOS 1.0 is here"
        subtitle={{
          regular: "Your Creator Business, ",
          gradient: "Finally Structured.",
        }}
        description="Revenue simulation, AI strategy, and growth tracking — built for serious creators."
        ctaText="Start Free Trial"
        ctaHref="/register"
        bottomImage={{
          light: "https://farmui.vercel.app/dashboard-light.png",
          dark: "https://farmui.vercel.app/dashboard.png"
        }}
        gridOptions={{
          angle: 65,
          cellSize: 50,
          opacity: 0.4,
          darkLineColor: "#4c1d95"
        }}
        className="pt-16"
      />

      {/* Features Section */}
      <section className="py-24 bg-black relative z-10">
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
              { step: "01", title: "Enter your platform data", desc: "No API connections required initially. Just drop your current reach and engagement." },
              { step: "02", title: "Run revenue simulation", desc: "Our deterministic math engine creates 12-month projections tailored to your niche." },
              { step: "03", title: "Follow AI roadmap", desc: "Execute the exact month-by-month steps the AI prescribes to hit your numbers." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-zinc-950/80 p-6 rounded-2xl backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xl font-bold font-mono text-purple-400 mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
            <p className="text-zinc-400 text-lg">Invest in your creator business today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <Card className="bg-zinc-950 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  $0
                  <span className="ml-1 text-xl font-medium text-zinc-500">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> <span className="text-zinc-400">1 Simulation per month</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> <span className="text-zinc-400">6 Month Projections</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> <span className="text-zinc-400">Basic Tracking</span></li>
                </ul>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Monthly */}
            <Card className="bg-zinc-900 border-purple-500/50 text-white relative shadow-[0_0_40px_rgba(168,85,247,0.1)] scale-105 z-10">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                <Badge className="bg-purple-500 text-white border-0 hover:bg-purple-500">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro Monthly</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  $9.90
                  <span className="ml-1 text-xl font-medium text-zinc-400">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> <span>Unlimited Simulations</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> <span>12 Month Projections</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> <span>AI Strategy Roadmap</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> <span>Advanced Tracking</span></li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-zinc-200" asChild>
                  <Link href="/register">Start 7-Day Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Annual */}
            <Card className="bg-zinc-950 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl flex justify-between items-center">
                  Pro Annual
                  <Badge variant="outline" className="border-green-500/50 text-green-400">Save 17%</Badge>
                </CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  $99
                  <span className="ml-1 text-xl font-medium text-zinc-500">/yr</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> <span>Everything in Pro</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> <span>PDF Exports (Soon)</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500" /> <span>Priority Support</span></li>
                </ul>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                  <Link href="/register">Go Annual</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950 relative z-10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is this a get-rich-quick tool?</h3>
              <p className="text-zinc-400">No. CreatorOS is a business simulation tool that relies on standard industry conversion metrics to show you what is mathematically possible. It requires enormous effort on your end.</p>
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
      <footer className="py-12 bg-black border-t border-white/10 text-center text-zinc-500 relative z-10">
        <div className="font-bold text-xl tracking-tighter text-white mb-4 opacity-50">CreatorOS</div>
        <p>Made for creators, by creators.</p>
        <p className="text-sm mt-4 text-zinc-700">© {new Date().getFullYear()} CreatorOS. All rights reserved.</p>
      </footer>
    </div>
  )
}
