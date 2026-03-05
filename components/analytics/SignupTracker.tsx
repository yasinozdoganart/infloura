'use client'

import { useEffect } from 'react'

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

export default function SignupTracker() {
    useEffect(() => {
        // Check if this is a first-time visit (signup just completed)
        const hasTracked = sessionStorage.getItem('signup_tracked')
        const isNewUser = document.cookie.includes('sb-') // Supabase session exists

        // Only fire if we haven't tracked yet in this session
        if (!hasTracked && isNewUser && window.gtag) {
            // Check if the referrer is the register page
            const referrer = document.referrer
            if (referrer.includes('/register')) {
                window.gtag('event', 'signup_completed', {
                    method: 'email'
                })
                sessionStorage.setItem('signup_tracked', 'true')
            }
        }
    }, [])

    return null
}
