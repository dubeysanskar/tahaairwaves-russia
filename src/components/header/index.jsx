'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaTelegramPlane, FaVk } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"
import { useLanguage } from "@/context/language"

const navLinks = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "services", href: "/services" },
    { key: "blog", href: "/blog" },
    { key: "contactUs", href: "/contact" },
]

const socials = [
    { icon: <FaVk />, href: "https://vk.com/tahaairwaves", label: "VK" },
    { icon: <FaTelegramPlane />, href: "https://t.me/tahaairwaves", label: "Telegram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang, toggleLang, t } = useLanguage()

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    return (
        <>
            {/* Top Info Bar */}
            <div className="hidden lg:block w-full" style={{ background: "#FDFBEF", borderBottom: "1px solid rgba(142,9,53,0.1)" }}>
                <div className="max-w-[1400px] mx-auto px-8 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)" }}>
                            <FiMail className="text-[#BC264B]" />
                            info@tahaairwaves.com
                        </a>
                        <div className="h-4 w-px bg-gray-300" />
                        <a href="tel:+919315226961" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#8E0935] transition-colors" style={{ fontFamily: "var(--font-lato)" }}>
                            <FiPhone className="text-[#BC264B]" />
                            +91 93152 26961
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer"
                            style={{ background: "#8E0935", color: "#fff", fontFamily: "var(--font-lato)" }}
                        >
                            {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 РУ'}
                        </button>
                        <div className="h-4 w-px bg-gray-300" />
                        <div className="flex items-center gap-2">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-[#8E0935] hover:bg-[#8E0935] hover:text-white transition-all duration-300"
                                    style={{ border: "1px solid rgba(142,9,53,0.2)" }}
                                    aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header — Black navbar */}
            <header
                className="relative w-full z-50"
                style={{
                    background: "#1a0a10",
                    borderBottom: "1px solid rgba(142,9,53,0.2)",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        {/* Red Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image src="/LOGO.png" alt="Taha Airwaves" width={150} height={45} className="h-9 lg:h-11 w-auto" />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link key={link.key} href={link.href}
                                    className="text-sm tracking-[0.14em] uppercase font-medium transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-lato)", color: "rgba(253,251,239,0.7)" }}
                                    onMouseEnter={e => e.target.style.color = "#BC264B"}
                                    onMouseLeave={e => e.target.style.color = "rgba(253,251,239,0.7)"}>
                                    {t(link.key)}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Right */}
                        <div className="hidden lg:flex items-center gap-4">
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLang}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer"
                                style={{ background: "rgba(253,251,239,0.1)", color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.15)", fontFamily: "var(--font-lato)" }}
                            >
                                {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 РУ'}
                            </button>

                            <div className="flex items-center gap-2">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                                        style={{ color: "rgba(253,251,239,0.5)", border: "1px solid rgba(253,251,239,0.15)" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "#8E0935"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#8E0935" }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(253,251,239,0.5)"; e.currentTarget.style.borderColor = "rgba(253,251,239,0.15)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>

                            <a href="https://wa.me/919315226961?text=Hi%2C%20I'm%20interested%20in%20your%20manpower%20services%20in%20Russia." target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs tracking-[0.14em] uppercase font-semibold transition-all duration-300 cursor-pointer"
                                    style={{ background: "#BC264B", color: "#fff", fontFamily: "var(--font-lato)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "#FDFBEF"; e.currentTarget.style.color = "#8E0935" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "#BC264B"; e.currentTarget.style.color = "#fff" }}>
                                    <FaWhatsapp />
                                    {t('whatsappUs')}
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-3">
                            <button
                                onClick={toggleLang}
                                className="px-2 py-1 rounded-full text-xs font-bold cursor-pointer"
                                style={{ background: "rgba(253,251,239,0.1)", color: "#FDFBEF", fontFamily: "var(--font-lato)" }}
                            >
                                {lang === 'ru' ? 'EN' : 'РУ'}
                            </button>
                            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Menu">
                                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#FDFBEF]" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col pt-20 px-8 pb-10"
                        style={{ background: "#1a0a10" }}
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {navLinks.map((link, i) => (
                                <motion.div key={link.key} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Link href={link.href} onClick={() => setIsOpen(false)}
                                        className="text-2xl font-light tracking-[0.08em] uppercase"
                                        style={{ fontFamily: "var(--font-cormorant-garamond)", color: "#FDFBEF" }}>
                                        {t(link.key)}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-6">
                            <div className="space-y-3">
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-3 text-sm" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-lato)" }}>
                                    <FiMail className="text-[#BC264B]" /> info@tahaairwaves.com
                                </a>
                                <a href="tel:+919315226961" className="flex items-center gap-3 text-sm font-bold" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-lato)" }}>
                                    <FiPhone className="text-[#BC264B]" /> +91 93152 26961
                                </a>
                            </div>

                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm"
                                        style={{ color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.2)" }}
                                        aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>

                            <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                                <button className="w-full py-3 rounded-full text-sm tracking-[0.14em] uppercase font-semibold flex items-center justify-center gap-2"
                                    style={{ background: "#BC264B", color: "#fff", fontFamily: "var(--font-lato)" }}>
                                    <FaWhatsapp /> {t('whatsappUs')}
                                </button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
