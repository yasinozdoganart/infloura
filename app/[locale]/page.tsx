'use client'

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from '@/i18n/routing'
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { LineChart, BrainCircuit, Activity } from "lucide-react"
import { AvatarGroup } from "@/components/landing/AvatarGroup"
import { WallOfLove } from "@/components/landing/WallOfLove"
import { PricingSection } from "@/components/landing/PricingSection"
import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { useTranslations } from 'next-intl'
import { SocialProof } from "@/components/landing/SocialProof"
import { QuickEstimator } from "@/components/landing/QuickEstimator"
import { IncomeExamples } from "@/components/landing/IncomeExamples"
import { motion } from 'framer-motion'

export default function LandingPage() {
  const t = useTranslations('Landing')
  
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <HeroGeometric
          badge=""
          title1={t('heroTitle1')}
          title2={t('heroTitle2')}
          description={t('heroDesc')}
        />
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20 flex flex-col items-center px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <LiquidButton href="/register" className="text-white hover:text-white h-12 px-8 text-lg w-auto z-10">
              {t('btnRunSimulation')}
            </LiquidButton>
            <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 px-8 text-lg rounded-2xl transition-all z-10" asChild>
              <Link href="/creator-income-calculator">{t('btnEstimateIncome')} &rarr;</Link>
            </Button>
          </div>
          
          <SocialProof />
        </div>
      </div>

      {/* Quick Estimator Section */}
      <QuickEstimator />

      {/* Features Section */}
      <section id="features" className="py-24 bg-black relative z-10 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Scale</span>
            </motion.h2>
            <p className="text-zinc-400 text-lg">{t('featuresSub')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm hover:border-blue-500/30 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl">
                  {t('feat1Title').split(' ')[0]} <span className="text-blue-400">{t('feat1Title').split(' ')[1]}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{t('feat1Desc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm hover:border-purple-500/30 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-xl">
                    AI <span className="text-purple-400">Strategy</span> Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{t('feat2Desc')}</p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-white/10 text-white backdrop-blur-sm hover:border-green-500/30 transition-all group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-xl">
                  {t('feat3Title').split(' ')[0]} <span className="text-green-400">{t('feat3Title').split(' ')[1]}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{t('feat3Desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Income Examples */}
      <IncomeExamples />

      {/* How it Works */}
      <section className="py-24 bg-zinc-950 relative z-10 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
            How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: t('how1Title'), desc: t('how1Desc'), colorClasses: "text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)]" },
              { step: "02", title: t('how2Title'), desc: t('how2Desc'), colorClasses: "text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
              { step: "03", title: t('how3Title'), desc: t('how3Desc'), colorClasses: "text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.15)]" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-zinc-950/80 p-6 rounded-2xl backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">{t('faqTitle')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq1Q')}</h3>
              <p className="text-zinc-400">{t('faq1A')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq2Q')}</h3>
              <p className="text-zinc-400">{t('faq2A')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq3Q')}</h3>
              <p className="text-zinc-400">{t('faq3A')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('faq4Q')}</h3>
              <p className="text-zinc-400">{t('faq4A')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
