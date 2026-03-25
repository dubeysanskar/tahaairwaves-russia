'use client'

import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/context/language'
import SplashScreen from '@/components/splash'

export default function Providers({ children }) {
    // Start FALSE — no splash on server or hydration (no flash, no mismatch)
    const [showSplash, setShowSplash] = useState(false)

    useEffect(() => {
        // Runs ONCE on mount. On navigation, Providers stays mounted, so this never re-runs.
        if (!sessionStorage.getItem('taha_sp')) {
            setShowSplash(true) // First visit only → show splash
        }
    }, [])

    const handleSplashComplete = () => {
        sessionStorage.setItem('taha_sp', '1')
        setShowSplash(false)
    }

    return (
        <LanguageProvider>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            {children}
        </LanguageProvider>
    )
}
