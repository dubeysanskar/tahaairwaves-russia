'use client'

import Container from "@/components/container";
import { motion } from "framer-motion";
import { FiClipboard, FiSearch, FiFileText, FiSend } from "react-icons/fi";
import { useLanguage } from "@/context/language";

export default function HowItWorks() {
    const { t } = useLanguage()

    const steps = [
        { num: '01', icon: FiClipboard, title: t('step1Title'), desc: t('step1Desc') },
        { num: '02', icon: FiSearch, title: t('step2Title'), desc: t('step2Desc') },
        { num: '03', icon: FiFileText, title: t('step3Title'), desc: t('step3Desc') },
        { num: '04', icon: FiSend, title: t('step4Title'), desc: t('step4Desc') },
    ]

    return (
        <section className="py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
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
                            {t('howTitle')} <span className="italic" style={{ color: "#8E0935" }}>{t('howTitleAccent')}</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#6B7280" }}>
                            {t('howSubtitle')}
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (desktop) */}
                        <div className="hidden lg:block absolute top-[55px] left-[12%] right-[12%] h-[2px] z-0" style={{ background: "#8E0935" }} />

                        {steps.map((step, i) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, duration: 0.5 }}
                                    className="group relative text-center z-10"
                                >
                                    {/* Step Number Circle */}
                                    <div className="relative mx-auto mb-6">
                                        <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] mx-auto rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-xl"
                                            style={{ background: "#8E0935" }}>
                                            <Icon className="text-white text-2xl lg:text-3xl" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-base font-bold text-white shadow-md"
                                            style={{ background: "#BC264B" }}>
                                            {step.num}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-lg lg:text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#8E0935]"
                                        style={{ fontFamily: "var(--font-lato)", color: "#1a0a10" }}>
                                        {step.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed px-2"
                                        style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                        {step.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
