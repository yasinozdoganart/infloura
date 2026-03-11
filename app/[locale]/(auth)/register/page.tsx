'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { register, signInWithGoogle } from '../actions'
import { useState } from 'react'
import { toast } from 'sonner'
import { useLocale } from 'next-intl'

export default function RegisterPage() {
    const locale = useLocale()
    const isTR = locale === 'tr'
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')

        if (password !== confirmPassword) {
            toast.error(isTR ? 'Şifreler eşleşmiyor' : 'Passwords do not match')
            setLoading(false)
            return
        }

        const result = await register(formData)
        if (result?.error) {
            toast.error(result.error)
            setLoading(false)
        } else {
            localStorage.setItem('infloura_signup', 'true')
        }
    }

    return (
        <div className="flex w-full items-center justify-center px-4">
            <Card className="w-full max-w-sm border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl">{isTR ? 'Hesap Oluştur' : 'Create an account'}</CardTitle>
                    <CardDescription>
                        {isTR
                            ? '7 günlük ücretsiz denemenizi başlatmak için bilgilerinizi girin.'
                            : 'Enter your details below to create your account and start your 7-day free trial.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="fullName">{isTR ? 'Ad Soyad' : 'Full Name'}</Label>
                            <Input id="fullName" name="fullName" placeholder={isTR ? 'Adınız Soyadınız' : 'John Doe'} required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">{isTR ? 'E-posta' : 'Email'}</Label>
                            <Input id="email" name="email" type="email" placeholder="m@example.com" required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">{isTR ? 'Şifre' : 'Password'}</Label>
                            <Input id="password" name="password" type="password" required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">{isTR ? 'Şifreyi Onayla' : 'Confirm Password'}</Label>
                            <Input id="confirmPassword" name="confirmPassword" type="password" required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={loading}>
                            {loading ? (isTR ? 'Oluşturuluyor...' : 'Creating...') : (isTR ? 'Hesap Oluştur' : 'Create account')}
                        </Button>
                        <Button variant="outline" className="w-full" type="button" onClick={() => signInWithGoogle()}>
                            {isTR ? 'Google ile Kayıt Ol' : 'Sign up with Google'}
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        {isTR ? 'Zaten bir hesabınız var mı?' : 'Already have an account?'}{' '}
                        <Link href="/login" className="text-purple-600 dark:text-purple-400 hover:underline">
                            {isTR ? 'Giriş yap' : 'Login'}
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
