'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"
import { CheckCircle2, CreditCard, LogOut, Settings2, User, XCircle } from "lucide-react"
import { toast } from "sonner"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useLocale } from 'next-intl'

export default function SettingsPage() {
    const supabase = createClient()
    const locale = useLocale()
    const isTR = locale === 'tr'
    const [profile, setProfile] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [isCheckoutPending, setIsCheckoutPending] = useState(false)
    const [fullName, setFullName] = useState("")
    const [userAuth, setUserAuth] = useState<any>(null)
    const [showUpgradeModal, setShowUpgradeModal] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly')

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                setUserAuth(user)
                const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
                if (data) {
                    setProfile(data)
                    setFullName(data.full_name || "")
                }
            }
            setLoading(false)
        }
        fetchProfile()
    }, [])

    const handleSaveProfile = async () => {
        if (!userAuth) return
        setSaving(true)
        try {
            const { error } = await supabase.from('profiles').update({
                full_name: fullName
            }).eq('id', userAuth.id)

            if (error) throw error
            toast.success(isTR ? 'Profil başarıyla kaydedildi!' : 'Profile saved successfully!')
            setProfile({ ...profile, full_name: fullName })
        } catch (err: any) {
            toast.error(err.message || (isTR ? 'Profil güncellenemedi' : 'Failed to update profile'))
        } finally {
            setSaving(false)
        }
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        window.location.href = '/'
    }

    const handleDeleteAccount = async () => {
        if (!confirm(isTR ? 'Hesabınızı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.' : 'Are you sure you want to delete your account? This action cannot be undone.')) return
        toast.error(isTR ? 'Hesap silme bu sürümde destek ekibiyle iletişime geçmeyi gerektiriyor.' : 'Account deletion requires contacting support in this version.')
    }

    const handleUpgrade = async () => {
        setIsCheckoutPending(true)
        try {
            const priceId = selectedPlan === 'annual' ? process.env.NEXT_PUBLIC_STRIPE_PRO_ANNUAL_PRICE_ID : process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID
            if (!priceId) {
                toast.error(isTR ? "Ödeme ID’si çevre değişkenlerinde eksik." : "Price ID is missing in the environment variables.")
                return
            }

            const response = await fetch('/api/create-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId, interval: selectedPlan })
            })

            const data = await response.json()

            if (data.url) {
                window.location.href = data.url
            } else {
                toast.error(isTR ? 'Ödeme oturumu oluşturulamadı.' : 'Failed to create checkout session.')
            }
        } catch (error) {
            console.error(error)
            toast.error(isTR ? 'Ödeme sırasında bir şey ters gitti.' : 'Something went wrong during checkout.')
        } finally {
            setIsCheckoutPending(false)
        }
    }

    if (loading) {
        return <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">{isTR ? 'Ayarlar yükleniyor...' : 'Loading settings...'}</div>
    }

    const planType = profile?.plan_type === 'free_trial' || profile?.plan_type === 'free' ? 'Free' : profile?.plan_type === 'pro_monthly' ? 'Pro Monthly' : profile?.plan_type === 'pro_annual' ? 'Pro Annual' : 'Free Plan'

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 pb-24">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">{isTR ? 'Ayarlar' : 'Settings'}</h1>
                <p className="text-zinc-500">{isTR ? 'Hesap ayarlarınızı, tercihlerinizi ve aboneliğinizi yönetin.' : 'Manage your account settings, preferences, and subscription.'}</p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> {isTR ? 'Profil Bilgileri' : 'Profile Details'}</CardTitle>
                        <CardDescription>{isTR ? 'Kişisel bilgilerinizi güncelleyin' : 'Update your personal information'}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" value={profile?.email || userAuth?.email || ''} readOnly className="bg-zinc-50 dark:bg-zinc-900" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Your name"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="border-t pt-6 bg-zinc-50/50 dark:bg-zinc-900/50">
                        <Button onClick={handleSaveProfile} disabled={saving || fullName === profile?.full_name}>
                            {saving ? (isTR ? 'Kaydediliyor...' : 'Saving...') : (isTR ? 'Tercihleri Kaydet' : 'Save Preferences')}
                        </Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> {isTR ? 'Abonelik Planı' : 'Subscription Plan'}</CardTitle>
                        <CardDescription>{isTR ? 'Infloura faturasınızı ve planınızı yönetin' : 'Manage your Infloura billing and plan'}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 rounded-lg border bg-zinc-50 dark:bg-zinc-900 flex justify-between items-center flex-wrap gap-4">
                            <div>
                                <h4 className="font-semibold text-lg flex items-center gap-2">
                                    {planType}
                                    <Badge className="bg-purple-500 text-white border-0 hover:bg-purple-600">Active</Badge>
                                </h4>
                                <p className="text-sm text-zinc-500 mt-1">
                                    {(profile?.plan_type === 'free_trial' || profile?.plan_type === 'free') && profile?.trial_ends_at
                                        ? (isTR ? `Denemeniz ${new Date(profile.trial_ends_at).toLocaleDateString('tr-TR')} tarihinde sona eriyor` : `Your trial ends on ${new Date(profile.trial_ends_at).toLocaleDateString()}`)
                                        : (isTR ? 'Şu an Ücretsiz plan sınırlarındasın.' : 'You are currently on the Free plan limits.')
                                    }
                                </p>
                            </div>
                            <Button
                                onClick={() => setShowUpgradeModal(true)}
                                variant="outline"
                                className="text-purple-600 border-purple-200 hover:bg-purple-50 shrink-0"
                            >
                                {isTR ? 'Planı Yükselt' : 'Upgrade Plan'}
                            </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-4 opacity-75">
                            <div className="space-y-2">
                                <h5 className="font-medium text-sm flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {isTR ? 'Gelir Simülasyonu' : 'Revenue Simulation'}
                                </h5>
                                <p className="text-xs text-zinc-500">
                                    {planType.includes('Pro') ? (isTR ? 'Sınırsız 12 aylık projeksiyon' : 'Unlimited 12-month projections') : (isTR ? '3 aylık temel projeksiyonla sınırlı' : 'Limited to 3-month basic projections')}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="font-medium text-sm flex items-center gap-2">
                                    {planType.includes('Pro') ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                    {isTR ? 'Yapay Zeka Strateji Haritaları' : 'AI Strategy Maps'}
                                </h5>
                                <p className="text-xs text-zinc-500">
                                    {planType.includes('Pro') ? (isTR ? 'Sınırsız yol haritası oluşturma' : 'Unlimited generated roadmaps') : (isTR ? 'Pro Gerektirir' : 'Requires Pro Upgrade')}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-red-100 dark:border-red-900/30">
                    <CardHeader>
                        <CardTitle className="text-red-600 flex items-center gap-2"><Settings2 className="w-5 h-5" /> {isTR ? 'Tehlikeli Bölge' : 'Danger Zone'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-zinc-500">{isTR ? 'Bu cihazda hesabınızdan çıkın veya hesabınızı ve tüm verilerini kalıcı olarak silin.' : 'Sign out of your account on this device, or permanently delete your account and all its data.'}</p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" onClick={handleSignOut} className="flex items-center gap-2">
                                <LogOut className="w-4 h-4" /> {isTR ? 'Çıkış Yap' : 'Sign Out'}
                            </Button>
                            <Button variant="destructive" onClick={handleDeleteAccount}>{isTR ? 'Hesabı Sil' : 'Delete Account'}</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>{isTR ? 'Infloura Pro\'a Geçin' : 'Upgrade to Infloura Pro'}</DialogTitle>
                        <DialogDescription>
                            {isTR ? 'Sınırsız Yapay Zeka Yol Haritaları, gelişmiş takip modülleri ve öncelikli destek’in kilidini açın.' : 'Unlock unlimited AI Roadmaps, advanced tracking modules, and priority support.'}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col gap-4">

                            <Card onClick={() => setSelectedPlan('monthly')} className={`p-4 cursor-pointer transition-colors ${selectedPlan === 'monthly' ? 'border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/20' : 'hover:border-purple-300'}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold">Pro Monthly</h3>
                                    <span className="text-xl font-bold">$9.90<span className="text-sm text-zinc-500 font-normal">/mo</span></span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{isTR ? 'İstediğiniz zaman iptal edin. Tüm özelliklere tam erişim.' : 'Cancel anytime. Full access to all features.'}</p>
                            </Card>

                            <Card onClick={() => setSelectedPlan('annual')} className={`p-4 cursor-pointer transition-colors ${selectedPlan === 'annual' ? 'border-2 border-purple-500 bg-purple-50 dark:bg-purple-950/20' : 'hover:border-purple-300'}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold flex items-center gap-2">Pro Annual <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0">Save 15%</Badge></h3>
                                    <span className="text-xl font-bold">$99.90<span className="text-sm text-zinc-500 font-normal">/yr</span></span>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{isTR ? 'Yıllık $99.90 faturalandırılır.' : 'Billed $99.90 annually.'}</p>
                            </Card>

                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" className="w-full bg-purple-600" onClick={handleUpgrade} disabled={isCheckoutPending}>
                            {isCheckoutPending ? (isTR ? 'Stripe\'a yönlendiriliyor...' : 'Redirecting to Stripe...') : (isTR ? 'Stripe Ödemesine Devam Et' : 'Continue to Stripe Checkout')}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}
