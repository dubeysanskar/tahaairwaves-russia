'use client'

import { useState, useEffect } from 'react'

/**
 * Multilingual "Hello" splash — cycles through greetings
 * English first (longest), rapid middle, Russian last (longest)
 * Total: ~1 second
 */
const GREETINGS = [
    { text: "Hello", dur: 120 },
    { text: "Bonjour", dur: 60 },
    { text: "Hola", dur: 60 },
    { text: "مرحباً", dur: 60 },
    { text: "नमस्ते", dur: 60 },
    { text: "Olá", dur: 60 },
    { text: "Hallo", dur: 60 },
    { text: "こんにちは", dur: 60 },
    { text: "你好", dur: 60 },
    { text: "Привет", dur: 200 },
]

export default function SplashScreen({ onComplete }) {
    const [idx, setIdx] = useState(0)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        if (idx >= GREETINGS.length) {
            setFading(true)
            const t = setTimeout(() => onComplete?.(), 250)
            return () => clearTimeout(t)
        }
        const t = setTimeout(() => setIdx(i => i + 1), GREETINGS[idx].dur)
        return () => clearTimeout(t)
    }, [idx, onComplete])

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#1A1A1A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.25s ease',
        }}>
            {/* Progress bar at top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'rgba(253,251,239,0.05)' }}>
                <div style={{
                    height: '100%', background: '#8E0935',
                    width: `${(idx / GREETINGS.length) * 100}%`,
                    transition: 'width 0.06s linear',
                }} />
            </div>

            {/* Greeting text */}
            {idx < GREETINGS.length && (
                <h1 style={{
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: (idx === 0 || idx === GREETINGS.length - 1) ? '#FDFBEF' : 'rgba(253,251,239,0.4)',
                    letterSpacing: '-0.02em',
                    margin: 0,
                }}>
                    {GREETINGS[idx].text}
                </h1>
            )}

            {/* Logo at bottom */}
            <img src="/android-chrome-192x192.png" alt="" style={{
                position: 'absolute', bottom: 32, width: 36, height: 36, opacity: 0.3,
            }} />
        </div>
    )
}
