'use client'

import Container from "@/components/container";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Aleksei Petrov",
        role: "HR Director, Construction Corp",
        country: "Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        text: "Taha Airwaves delivered exactly what we needed — qualified workers who were ready to contribute from day one. Their recruitment process is professional and efficient.",
    },
    {
        name: "Dmitry Volkov",
        role: "Operations Manager, Industrial Group",
        country: "Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        text: "We have been working with Taha Airwaves since 2022 and the quality of workforce they provide is consistently excellent. Their documentation process is seamless.",
    },
    {
        name: "Mohammad Al-Rashid",
        role: "Project Manager, Gulf Enterprises",
        country: "UAE",
        flag: "https://flagcdn.com/w40/ae.png",
        text: "Their end-to-end recruitment service from sourcing to deployment is outstanding. They understand the compliance requirements and deliver on time, every time.",
    },
]

export default function Testimonials() {
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
                            What Our <span className="italic" style={{ color: "#8E0935" }}>Clients Say</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#6B7280" }}>
                            Trusted by employers across Russia and the Gulf region
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.1)" }}
                            >
                                <FaQuoteLeft className="text-2xl mb-4" style={{ color: "#8E0935" }} />
                                <p className="text-base leading-relaxed mb-6" style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    {/* Flag */}
                                    <img src={t.flag} alt={`${t.country} flag`} className="w-8 h-auto rounded-sm" loading="lazy" />
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                                            {t.name}
                                        </p>
                                        <p className="text-xs" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                            {t.role} · {t.country}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
