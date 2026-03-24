'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"

const heroImages = [
    "/images/hero-russia-1.png",
    "/images/hero-russia-2.png",
    "/images/hero-russia-3.png",
]

export default function Hero() {
    const { t } = useLanguage()
    const [currentImage, setCurrentImage] = useState(0)
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const next = useCallback(() => {
        setCurrentImage(prev => (prev + 1) % heroImages.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [next])

    const stats = [
        { value: t('heroStat1Value'), label: t('heroStat1Label') },
        { value: t('heroStat2Value'), label: t('heroStat2Label') },
        { value: t('heroStat3Value'), label: t('heroStat3Label') },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            setSent(true)
            setFormData({ name: '', email: '', phone: '', message: '' })
            setTimeout(() => setSent(false), 3000)
        } catch (err) {
            console.error(err)
        }
        setSending(false)
    }

    return (
        <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "700px", background: "#FFFFFF" }}>
            {/* Background Images — Only this animates */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image src={heroImages[currentImage]} alt="" fill className="object-cover" priority />
                </motion.div>
            </AnimatePresence>

            {/* Light Overlay */}
            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.8)" }} />

            {/* Content — Static, does NOT animate */}
            <div className="relative z-10 h-full flex items-center max-w-[1400px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
                    {/* Left: Text Content */}
                    <div>
                        <h1
                            className="font-light leading-[0.9] tracking-[-0.02em] mb-2"
                            style={{
                                fontFamily: "var(--font-cormorant-garamond)",
                                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                                color: "#1a0a10",
                            }}
                        >
                            {t('heroTitle1')}
                        </h1>
                        <h1
                            className="font-light italic leading-[0.9] tracking-[-0.02em] mb-8"
                            style={{
                                fontFamily: "var(--font-cormorant-garamond)",
                                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                                color: "#8E0935",
                            }}
                        >
                            {t('heroTitle2')}
                        </h1>

                        <p
                            className="whitespace-pre-line max-w-md mb-10"
                            style={{
                                fontFamily: "var(--font-poppins)",
                                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                                color: "rgba(26,10,16,0.6)",
                                lineHeight: 1.7,
                            }}
                        >
                            {t('heroTagline')}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/services">
                                <button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg"
                                    style={{ background: "#8E0935", color: "#FFFFFF", fontFamily: "var(--font-lato)" }}>
                                    {t('heroCtaServices')} <MdArrowOutward />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg"
                                    style={{ background: "transparent", color: "#1a0a10", border: "2px solid rgba(142,9,53,0.3)", fontFamily: "var(--font-lato)" }}>
                                    {t('heroCtaContact')}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="hidden lg:block">
                        <div className="rounded-2xl p-8 shadow-xl" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(142,9,53,0.1)", backdropFilter: "blur(10px)" }}>
                            <h3 className="text-xl font-bold mb-6" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                                {t('formTitle')}
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder={t('formName')}
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    required
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#8E0935]/30"
                                    style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.1)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }}
                                />
                                <input
                                    type="email"
                                    placeholder={t('formEmail')}
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    required
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#8E0935]/30"
                                    style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.1)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }}
                                />
                                <input
                                    type="tel"
                                    placeholder={t('formPhone')}
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all focus:ring-2 focus:ring-[#8E0935]/30"
                                    style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.1)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }}
                                />
                                <textarea
                                    placeholder={t('formMessage')}
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[#8E0935]/30"
                                    style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.1)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }}
                                />
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                                    style={{ background: "#8E0935", color: "#FFFFFF", fontFamily: "var(--font-lato)" }}
                                >
                                    {sent ? '✓' : sending ? '...' : t('formSubmit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8" style={{ borderTop: "1px solid rgba(142,9,53,0.15)" }}>
                    <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between py-5 sm:py-6 gap-4">
                        <div className="flex flex-wrap items-center gap-5 sm:gap-8 lg:gap-14">
                            {stats.map((s, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-2xl lg:text-3xl font-bold" style={{ color: "#8E0935", fontFamily: "var(--font-oswald)" }}>
                                        {s.value}
                                    </span>
                                    <span className="text-[10px] lg:text-xs tracking-[0.18em] uppercase" style={{ color: "rgba(26,10,16,0.4)", fontFamily: "var(--font-lato)" }}>
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Slide indicator */}
                        <div className="hidden lg:flex items-center gap-3">
                            <span className="text-xs" style={{ color: "rgba(26,10,16,0.3)", fontFamily: "var(--font-lato)" }}>TAHA AIRWAVES</span>
                            <div className="flex gap-1.5">
                                {heroImages.map((_, i) => (
                                    <button key={i} onClick={() => setCurrentImage(i)}
                                        className="w-8 h-1 rounded-full transition-all duration-300 cursor-pointer"
                                        style={{ background: i === currentImage ? "#8E0935" : "rgba(142,9,53,0.15)" }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}