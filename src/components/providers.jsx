'use client'

import { useState } from 'react'
import { LanguageProvider } from '@/context/language'
import SplashScreen from '@/components/splash'

// Module-level flag:
// - On page refresh: JS reloads → flag resets to false → splash shows
// - On client navigation: module stays loaded → flag stays true → no splash
let splashPlayed = false

export default function Providers({ children }) {
    // useState initializer runs on first mount ONLY (synchronous, no delay)
    // On server: splashPlayed=false → showSplash=true → splash in initial HTML
    // On client hydration: same → no mismatch
    // After splash done: splashPlayed=true, showSplash=false
    // On navigation: component stays mounted, state stays false
    // On refresh: module reloads, splashPlayed=false, fresh mount → splash shows
    const [showSplash, setShowSplash] = useState(() => !splashPlayed)

    const handleDone = () => {
        splashPlayed = true
        setShowSplash(false)
    }

    return (
        <LanguageProvider>
            {showSplash && <SplashScreen onComplete={handleDone} />}
            {children}
        </LanguageProvider>
    )
}
