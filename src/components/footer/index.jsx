'use client'

import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaTelegramPlane, FaVk } from "react-icons/fa"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { useLanguage } from "@/context/language"

const quickLinksData = [
    { key: "home", href: "/" },
    { key: "aboutUs", href: "/about" },
    { key: "services", href: "/services" },
    { key: "contactUs", href: "/contact" },
    { key: "blog", href: "/blog" },
]

const serviceLinks = [
    { label: "Cleaners", href: "/services/cleaners" },
    { label: "Drivers", href: "/services/all-types-of-drivers" },
    { label: "General Workers", href: "/services/general-labour" },
    { label: "Factory Workers", href: "/services/factory-helpers" },
    { label: "Technicians", href: "/services/skilled-labourers-technicians" },
    { label: "Visa & Docs", href: "/services/emigration-immigration-clearance" },
    { label: "Outsourcing", href: "/services/employee-outsourcing-solutions" },
]

const offices = [
    { label: "New Delhi, India", mapUrl: "https://maps.google.com/?q=28.5699,77.2721" },
    { label: "Noida, India", mapUrl: "https://maps.google.com/?q=28.5355,77.3910" },
    { label: "Moscow, Russia", mapUrl: "https://maps.google.com/?q=55.7558,37.6173" },
]

const socials = [
    { icon: <FaVk />, href: "https://vk.com/tahaairwaves", label: "VK" },
    { icon: <FaTelegramPlane />, href: "https://t.me/tahaairwaves", label: "Telegram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp" },
]

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="relative overflow-hidden" style={{ background: "#1a0a10" }}>
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <Image src="/images/world-map.png" alt="" fill className="object-cover" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-10" style={{ borderBottom: "1px solid rgba(142,9,53,0.2)" }}>
                    {/* Brand — Red Logo */}
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/">
                            <Image src="/LOGO.png" alt="Taha Airwaves" width={180} height={55} className="h-12 w-auto mb-4" />
                        </Link>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                            {t('footerDesc')}
                        </p>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                                    style={{ color: "#FDFBEF", border: "1px solid rgba(253,251,239,0.15)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "#8E0935"; e.currentTarget.style.borderColor = "#8E0935" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(253,251,239,0.15)" }}
                                    aria-label={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            {quickLinksData.map((l) => (
                                <li key={l.key}>
                                    <Link href={l.href} className="text-sm transition-colors duration-300 hover:text-[#BC264B]"
                                        style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                        {t(l.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>{t('ourServices')}</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className="text-sm transition-colors duration-300 hover:text-[#BC264B]"
                                        style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>{t('ourOffices')}</h4>
                        <ul className="space-y-2">
                            {offices.map((o) => (
                                <li key={o.label}>
                                    <a href={o.mapUrl} target="_blank" rel="noopener noreferrer"
                                        className="text-sm transition-colors duration-300 hover:text-[#BC264B] flex items-center gap-1.5"
                                        style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                        <FiMapPin className="text-[#BC264B] text-xs flex-shrink-0" />
                                        {o.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-xs tracking-[0.22em] uppercase font-bold mb-4" style={{ color: "#BC264B", fontFamily: "var(--font-lato)" }}>{t('contact')}</h4>
                        <div className="space-y-3">
                            <a href="tel:+919315226961" className="flex items-center gap-2 text-sm hover:text-[#BC264B] transition-colors"
                                style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                <FiPhone className="text-[#BC264B] flex-shrink-0" /> +91 93152 26961
                            </a>
                            <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-2 text-sm hover:text-[#BC264B] transition-colors"
                                style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                <FiMail className="text-[#BC264B] flex-shrink-0" /> info@tahaairwaves.com
                            </a>
                            <a href="https://maps.google.com/?q=28.5699,77.2721" target="_blank" rel="noopener noreferrer"
                                className="flex items-start gap-2 text-sm hover:text-[#BC264B] transition-colors"
                                style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-lato)" }}>
                                <FiMapPin className="text-[#BC264B] flex-shrink-0 mt-0.5" />
                                71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-center sm:text-left">
                    <p className="text-xs" style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-lato)" }}>
                        © {new Date().getFullYear()} Taha Airwaves Pvt Ltd. All Rights Reserved.
                    </p>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.04em]"
                        style={{ background: "rgba(142,9,53,0.85)", color: "#fff", whiteSpace: "nowrap" }}>
                        RA License: B-3260/DEL/COM/100/5/11259/2025
                    </span>
                </div>
            </div>
        </footer>
    )
}
