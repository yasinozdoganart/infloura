import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

// Create the localization middleware handler
const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
    // 1. Run the NextIntl middleware to handle language routing (e.g. / -> /en)
    const intlResponse = intlMiddleware(request)
    
    // We get the negotiated locale to understand what path prefix is active
    // If next-intl redirected us, we respect that redirect immediately.
    if (intlResponse.status >= 300 && intlResponse.status < 400) {
        return intlResponse
    }

    // 2. Run the Supabase authentication check
    const { user, supabaseResponse } = await updateSession(request)

    // Merge the cookies from supabaseResponse into the intlResponse
    // Supabase might have refreshed the access token. 
    supabaseResponse.cookies.getAll().forEach((cookie) => {
        intlResponse.cookies.set(cookie.name, cookie.value)
    })

    // The current path (excluding the locale prefix for matching logic)
    const pathname = request.nextUrl.pathname
    
    // Extract locale from the path (e.g., /en/dashboard -> 'en')
    const currentLocale = routing.locales.find(locale => 
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    ) || routing.defaultLocale

    // Clean the pathname for our array matching
    const pathWithoutLocale = pathname.startsWith(`/${currentLocale}`) 
        ? pathname.replace(`/${currentLocale}`, '') || '/'
        : pathname

    const protectedRoutes = ['/dashboard', '/simulator', '/roadmap', '/tracking', '/settings']
    const authRoutes = ['/login', '/register']

    const isProtectedRoute = protectedRoutes.some(route => pathWithoutLocale.startsWith(route))
    const isAuthRoute = authRoutes.some(route => pathWithoutLocale.startsWith(route))

    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL(`/${currentLocale}/login`, request.url))
    }

    if (isAuthRoute && user) {
        return NextResponse.redirect(new URL(`/${currentLocale}/dashboard`, request.url))
    }

    return intlResponse
}

export const config = {
    // Match all paths except API routes, statics, webhooks, and raw images.
    matcher: [
        '/',
        '/(tr|en)/:path*',
        '/((?!_next/static|_next/image|favicon.ico|api/webhooks|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ],
}
