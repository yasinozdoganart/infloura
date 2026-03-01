import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    const { user, supabaseResponse } = await updateSession(request)

    const protectedRoutes = ['/dashboard', '/simulator', '/roadmap', '/tracking', '/settings']
    const authRoutes = ['/login', '/register']

    const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))
    const isAuthRoute = authRoutes.some(route => request.nextUrl.pathname.startsWith(route))

    if (isProtectedRoute && !user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (isAuthRoute && user) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return supabaseResponse
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|api/webhooks|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
