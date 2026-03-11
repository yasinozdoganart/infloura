'use client'

import { useEffect } from 'react'

export default function SignupEventTracker() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const signup = localStorage.getItem('infloura_signup')
            if (signup === 'true') {
                if (window.fbq) {
                    window.fbq('track', 'CompleteRegistration')
                }
                localStorage.removeItem('infloura_signup')
            }
        }
    }, [])

    return null
}
