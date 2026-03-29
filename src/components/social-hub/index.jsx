'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useLanguage } from '@/context/language'

const SOCIALS = [
    {
        name: 'WhatsApp',
        href: 'https://wa.me/qr/TKSOMEYZZW2CN1',
        icon: FaWhatsapp,
        color: '#25D366',
        bg: 'rgba(37, 211, 102, 0.15)',
        glow: 'rgba(37, 211, 102, 0.5)',
    },
    {
        name: 'Telegram',
        href: 'https://t.me/tahaairwaves',
        icon: FaTelegramPlane,
        color: '#2AABEE',
        bg: 'rgba(42, 171, 238, 0.15)',
        glow: 'rgba(42, 171, 238, 0.5)',
    },
    {
        name: 'Max',
        href: 'https://max.ru/u/f9LHodD0cOIMJiIqD-D832F8g35uW7T1VTQlUSH07133auTjMZ-FQlggpkA',
        icon: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1-3H7l6-10-1 6h3l-4 7z" />
            </svg>
        ),
        color: '#FF6B00',
        bg: 'rgba(255, 107, 0, 0.15)',
        glow: 'rgba(255, 107, 0, 0.5)',
    },
    {
        name: 'VK',
        href: 'https://vkvideo.ru/@tahaairwaves',
        icon: FaVk,
        color: '#4C75A3',
        bg: 'rgba(76, 117, 163, 0.15)',
        glow: 'rgba(76, 117, 163, 0.5)',
    },
    {
        name: 'RuTube',
        href: 'https://rutube.ru/channel/76971642/',
        icon: FaYoutube,
        color: '#E53935',
        bg: 'rgba(229, 57, 53, 0.15)',
        glow: 'rgba(229, 57, 53, 0.5)',
    },
]

export default function SocialHub() {
    const [isOpen, setIsOpen] = useState(false)
    const panelRef = useRef(null)
    const { lang } = useLanguage()

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

    const socialLabel = lang === 'ru' ? 'Соцсети' : 'Social'

    return (
        <div ref={panelRef} className="fixed left-0 top-1/2 -translate-y-1/2 z-50">

            {/* ── Trigger Button — Horizontal layout: icon + text side by side ── */}
            <AnimatePresence mode="wait">
                {!isOpen && (
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        className="relative flex items-center gap-2.5 cursor-pointer"
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -60, opacity: 0 }}
                        whileHover={{ x: 4, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            padding: '12px 18px 12px 14px',
                            borderRadius: '0 16px 16px 0',
                            background: 'linear-gradient(135deg, #8A0029, #D32F2F)',
                            boxShadow: '4px 4px 24px rgba(138, 0, 41, 0.45), 0 0 0 2px rgba(255,255,255,0.1)',
                            border: 'none',
                            color: '#FFFFFF',
                        }}
                        aria-label={socialLabel}
                    >
                        {/* Chat icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>

                        {/* Label text — horizontal, next to icon */}
                        <span className="hidden sm:inline text-[10px] font-bold tracking-[0.12em] uppercase"
                            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.12em' }}>
                            {socialLabel}
                        </span>

                        {/* Animated pulsing ring */}
                        <motion.span
                            className="absolute inset-0 rounded-r-[16px]"
                            style={{ border: '2px solid rgba(211, 47, 47, 0.7)' }}
                            animate={{ scale: [1, 1.3, 1.3], opacity: [0.9, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <motion.span
                            className="absolute inset-0 rounded-r-[16px]"
                            style={{ border: '2px solid rgba(255, 255, 255, 0.5)' }}
                            animate={{ scale: [1, 1.2, 1.2], opacity: [0.7, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                        />
                        {/* Notification dot */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full"
                            style={{ background: '#25D366', border: '2px solid #fff', boxShadow: '0 0 8px rgba(37,211,102,0.6)' }}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* ── Panel ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -30, opacity: 0, scale: 0.9 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -30, opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        style={{
                            marginLeft: 0,
                            borderRadius: '0 22px 22px 0',
                            background: '#1A0A10',
                            border: '1px solid rgba(138,0,41,0.3)',
                            borderLeft: 'none',
                            boxShadow: '8px 8px 40px rgba(0,0,0,0.5), 0 0 40px rgba(138,0,41,0.15)',
                            padding: '18px 14px',
                        }}
                    >
                        {/* Close button */}
                        <motion.button
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center cursor-pointer mb-3 mx-auto"
                            whileHover={{ scale: 1.15, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: 30, height: 30, borderRadius: 8,
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'rgba(255,255,255,0.5)',
                            }}
                            aria-label={lang === 'ru' ? 'Закрыть' : 'Close'}
                        >
                            <FiX size={14} />
                        </motion.button>

                        {/* Title */}
                        <p className="text-[8px] tracking-[0.3em] uppercase font-bold mb-3 text-center"
                            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)' }}>
                            {lang === 'ru' ? 'Мы в сети' : 'Connect'}
                        </p>

                        {/* Social icons — larger, with platform colors */}
                        <div className="flex flex-col gap-2.5">
                            {SOCIALS.map((s, i) => (
                                <motion.a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                                    whileHover={{ scale: 1.12, x: 6 }}
                                    whileTap={{ scale: 0.92 }}
                                    className="relative flex items-center justify-center group"
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 14,
                                        background: s.bg,
                                        border: `1px solid ${s.color}30`,
                                        color: s.color,
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = `0 0 24px ${s.glow}`
                                        e.currentTarget.style.background = `${s.color}25`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = 'none'
                                        e.currentTarget.style.background = s.bg
                                    }}
                                    aria-label={s.name}
                                    title={s.name}
                                >
                                    <s.icon size={22} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-3 mx-auto" style={{ width: 28, height: 2, borderRadius: 1, background: 'linear-gradient(90deg, #8A0029, #D32F2F)' }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
