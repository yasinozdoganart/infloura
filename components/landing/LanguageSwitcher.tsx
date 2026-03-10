'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { ChevronDown, Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const switchLanguage = (newLocale: string) => {
        setIsOpen(false)
        router.replace(pathname, { locale: newLocale })
    }

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-zinc-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button
                        onClick={() => switchLanguage('en')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between ${
                            locale === 'en' ? 'bg-white/10 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        English
                        {locale === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                    <button
                        onClick={() => switchLanguage('tr')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors flex items-center justify-between ${
                            locale === 'tr' ? 'bg-white/10 text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        Türkçe
                        {locale === 'tr' && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                </div>
            )}
        </div>
    )
}
