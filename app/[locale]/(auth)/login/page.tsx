'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { login, signInWithGoogle } from '../actions'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const result = await login(formData)
        if (result?.error) {
            toast.error(result.error)
        }
        setLoading(false)
    }

    return (
        <div className="flex w-full items-center justify-center px-4">
            <Card className="w-full max-w-sm border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="m@example.com" required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" name="password" type="password" required className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                        <Button variant="outline" className="w-full" type="button" onClick={() => signInWithGoogle()}>
                            Login with Google
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-purple-600 dark:text-purple-400 hover:underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
