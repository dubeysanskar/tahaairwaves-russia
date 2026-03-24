'use client'

import Container from "@/components/container";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language";

export default function OurStrength() {
    const { t } = useLanguage()

    const metrics = [
        { value: t('metric1Value'), label: t('metric1Label'), desc: t('metric1Desc') },
        { value: t('metric2Value'), label: t('metric2Label'), desc: t('metric2Desc') },
        { value: t('metric3Value'), label: t('metric3Label'), desc: t('metric3Desc') },
        { value: t('metric4Value'), label: t('metric4Label'), desc: t('metric4Desc') },
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
                    <div className="text-center mb-14">
                        <div className="w-14 h-1 mx-auto rounded-full mb-6" style={{ background: "#8E0935" }} />
                        <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1a0a10" }}>
                            {t('strengthTitle')} <span className="italic" style={{ color: "#8E0935" }}>{t('strengthTitleAccent')}</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#6B7280" }}>
                            {t('strengthSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {metrics.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.1)" }}
                            >
                                <div className="text-4xl lg:text-5xl font-bold mb-3" style={{ color: "#8E0935", fontFamily: "var(--font-oswald)" }}>
                                    {m.value}
                                </div>
                                <h3 className="text-base font-bold mb-2" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                                    {m.label}
                                </h3>
                                <p className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
