'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Multilingual "Hello" splash screen
 * English first (longest), then 7 rapid languages, Russian last (longest)
 * Total duration: ~1.5 seconds
 */
const GREETINGS = [
    { text: "Hello", lang: "English", duration: 300 },
    { text: "Bonjour", lang: "French", duration: 80 },
    { text: "Hola", lang: "Spanish", duration: 80 },
    { text: "مرحباً", lang: "Arabic", duration: 80 },
    { text: "नमस्ते", lang: "Hindi", duration: 80 },
    { text: "Olá", lang: "Portuguese", duration: 80 },
    { text: "Hallo", lang: "German", duration: 80 },
    { text: "こんにちは", lang: "Japanese", duration: 80 },
    { text: "你好", lang: "Chinese", duration: 80 },
    { text: "Привет", lang: "Russian", duration: 350 },
]

export default function SplashScreen({ onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (currentIndex >= GREETINGS.length) {
            // All greetings shown — fade out splash
            const fadeTimer = setTimeout(() => {
                setVisible(false)
                setTimeout(() => onComplete?.(), 300)
            }, 100)
            return () => clearTimeout(fadeTimer)
        }

        const timer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
        }, GREETINGS[currentIndex].duration)

        return () => clearTimeout(timer)
    }, [currentIndex, onComplete])

    if (!visible) return null

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: "#1A1A1A" }}
                >
                    {/* Background subtle globe */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]" width="600" height="600" viewBox="0 0 600 600" fill="none" aria-hidden="true">
                        <circle cx="300" cy="300" r="280" stroke="#FDFBEF" strokeWidth="0.5" />
                        <ellipse cx="300" cy="300" rx="180" ry="280" stroke="#FDFBEF" strokeWidth="0.3" />
                        <ellipse cx="300" cy="300" rx="80" ry="280" stroke="#FDFBEF" strokeWidth="0.2" />
                        <ellipse cx="300" cy="300" rx="280" ry="80" stroke="#FDFBEF" strokeWidth="0.3" />
                    </svg>

                    {/* Top magenta accent bar */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                        style={{ background: "#8E0935" }}
                    />

                    {/* Greeting text */}
                    <div className="text-center relative z-10">
                        <AnimatePresence mode="wait">
                            {currentIndex < GREETINGS.length && (
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -12, scale: 0.95 }}
                                    transition={{ duration: 0.08, ease: "easeOut" }}
                                >
                                    <h1
                                        className="font-black tracking-tight"
                                        style={{
                                            fontFamily: "var(--font-inter)",
                                            fontSize: "clamp(3rem, 8vw, 6rem)",
                                            color: currentIndex === 0 || currentIndex === GREETINGS.length - 1
                                                ? "#FDFBEF"
                                                : "rgba(253,251,239,0.5)",
                                        }}
                                    >
                                        {GREETINGS[currentIndex].text}
                                    </h1>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Progress bar */}
                        <motion.div
                            className="mt-8 mx-auto rounded-full overflow-hidden"
                            style={{ width: "120px", height: "2px", background: "rgba(253,251,239,0.1)" }}
                        >
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${((currentIndex + 1) / GREETINGS.length) * 100}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                                style={{ height: "100%", background: "#8E0935" }}
                            />
                        </motion.div>
                    </div>

                    {/* Logo at bottom */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <img src="/android-chrome-192x192.png" alt="Taha Airwaves" className="w-10 h-10 opacity-40" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
