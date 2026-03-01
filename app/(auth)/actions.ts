'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/dashboard')
}

export async function register(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const fullName = formData.get('fullName') as string

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    if (data.user) {
        const trialEndsAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        await supabase.from('profiles').insert({
            id: data.user.id,
            email: data.user.email,
            full_name: fullName,
            trial_ends_at: trialEndsAt
        })
    }

    redirect('/dashboard')
}

export async function signInWithGoogle() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/auth/callback`,
        },
    })

    if (data.url) {
        redirect(data.url)
    }
}
