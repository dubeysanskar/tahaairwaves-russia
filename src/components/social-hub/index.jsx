'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

const SOCIALS = [
    {
        name: 'WhatsApp',
        href: 'https://wa.me/qr/TKSOMEYZZW2CN1',
        icon: FaWhatsapp,
        color: '#25D366',
        glow: 'rgba(37, 211, 102, 0.4)',
    },
    {
        name: 'Telegram',
        href: 'https://t.me/tahaairwaves',
        icon: FaTelegramPlane,
        color: '#2AABEE',
        glow: 'rgba(42, 171, 238, 0.4)',
    },
    {
        name: 'Max',
        href: 'https://max.ru/u/f9LHodD0cOIMJiIqD-D832F8g35uW7T1VTQlUSH07133auTjMZ-FQlggpkA',
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1-3H7l6-10-1 6h3l-4 7z" />
            </svg>
        ),
        color: '#FF6B00',
        glow: 'rgba(255, 107, 0, 0.4)',
    },
    {
        name: 'VK',
        href: 'https://vkvideo.ru/@tahaairwaves',
        icon: FaVk,
        color: '#4C75A3',
        glow: 'rgba(76, 117, 163, 0.4)',
    },
    {
        name: 'RuTube',
        href: 'https://rutube.ru/channel/76971642/',
        icon: FaYoutube,
        color: '#E53935',
        glow: 'rgba(229, 57, 53, 0.4)',
    },
]

export default function SocialHub() {
    const [isOpen, setIsOpen] = useState(false)
    const panelRef = useRef(null)

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [isOpen])

    return (
        <div ref={panelRef} className="fixed left-0 top-1/2 -translate-y-1/2 z-50">

            {/* ── Trigger Button ── */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: '0 14px 14px 0',
                    background: 'linear-gradient(135deg, #8A0029, #D32F2F)',
                    boxShadow: '4px 4px 20px rgba(138, 0, 41, 0.35)',
                    border: 'none',
                    color: '#FFFFFF',
                }}
                aria-label="Social links"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <FiX size={20} />
                        </motion.span>
                    ) : (
                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Pulse ring */}
                {!isOpen && (
                    <motion.span
                        className="absolute inset-0 rounded-r-[14px]"
                        style={{ border: '2px solid rgba(211, 47, 47, 0.5)' }}
                        animate={{ scale: [1, 1.35, 1.35], opacity: [0.7, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                    />
                )}
            </motion.button>

            {/* ── Panel ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -20, opacity: 0, scale: 0.95 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -20, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        style={{
                            marginLeft: 0,
                            borderRadius: '0 20px 20px 0',
                            background: 'rgba(26, 10, 16, 0.85)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderLeft: 'none',
                            boxShadow: '8px 8px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)',
                            padding: '20px 16px',
                        }}
                    >
                        {/* Title */}
                        <p className="text-[9px] tracking-[0.25em] uppercase font-bold mb-4 text-center"
                            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-inter)' }}>
                            Connect
                        </p>

                        {/* Social icons */}
                        <div className="flex flex-col gap-3">
                            {SOCIALS.map((s, i) => (
                                <motion.a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: -16, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35, ease: 'easeOut' }}
                                    whileHover={{ scale: 1.15, x: 4 }}
                                    whileTap={{ scale: 0.92 }}
                                    className="relative flex items-center justify-center group"
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: 12,
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        color: 'rgba(255,255,255,0.6)',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = s.color
                                        e.currentTarget.style.boxShadow = `0 0 20px ${s.glow}`
                                        e.currentTarget.style.borderColor = `${s.color}40`
                                        e.currentTarget.style.background = `${s.color}15`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                                        e.currentTarget.style.boxShadow = 'none'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                                    }}
                                    aria-label={s.name}
                                    title={s.name}
                                >
                                    <s.icon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-4 mx-auto" style={{ width: 24, height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #8A0029, #D32F2F)' }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
