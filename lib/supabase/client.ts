import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    // During Vercel build, NEXT_PUBLIC_ env vars may not be available.
    // We provide safe placeholders so @supabase/ssr doesn't throw during pre-render.
    // At runtime in the browser, the real env vars are always injected by Next.js.
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

    return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
