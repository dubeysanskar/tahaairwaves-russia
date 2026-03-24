'use client'

import Container from "@/components/container";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "@/context/language";

const RecruitIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.3" />
        <path d="M9 14c0-1.5 1.3-2 3-2s3 .5 3 2" />
    </svg>
)

const BulkHireIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="17" cy="7" r="2" opacity="0.5" />
        <path d="M21 21v-1.5a3 3 0 0 0-2-2.8" opacity="0.5" />
    </svg>
)

const VisaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h4" />
        <path d="M7 12h6" />
        <path d="M7 16h3" />
        <path d="M15.5 14l1 1 2-2" />
    </svg>
)

const DeployIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 16v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <path d="M12 3l4 7H8l4-7z" fill="currentColor" opacity="0.15" />
        <path d="M3 16l2 5h14l2-5" />
        <circle cx="12" cy="19" r="1" />
    </svg>
)

export default function WhatWeDo() {
    const { t } = useLanguage()

    const services = [
        { icon: <RecruitIcon />, title: t('svc1Title'), desc: t('svc1Desc') },
        { icon: <BulkHireIcon />, title: t('svc2Title'), desc: t('svc2Desc') },
        { icon: <VisaIcon />, title: t('svc3Title'), desc: t('svc3Desc') },
        { icon: <DeployIcon />, title: t('svc4Title'), desc: t('svc4Desc') },
    ]

    return (
        <section className="py-20 lg:py-28" style={{ background: "#FDFBEF" }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="w-14 h-1 mx-auto rounded-full mb-6" style={{ background: "#8E0935" }} />
                        <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1a0a10" }}>
                            {t('whatTitle')} <span className="italic" style={{ color: "#8E0935" }}>{t('whatTitleAccent')}</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#6B7280" }}>
                            {t('whatSubtitle')}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((svc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.08)" }}
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-xl text-white transition-all duration-500 group-hover:scale-110"
                                    style={{ background: "#8E0935" }}>
                                    {svc.icon}
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#8E0935]"
                                    style={{ fontFamily: "var(--font-lato)", color: "#1a0a10" }}>
                                    {svc.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                    {svc.desc}
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                                    style={{ color: "#8E0935" }}>
                                    {t('learnMore')} <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
