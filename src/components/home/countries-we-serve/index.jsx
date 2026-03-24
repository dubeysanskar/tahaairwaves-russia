'use client'

import Container from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CountriesWeServe() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "#FDFBEF" }}>
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
                            India to <span className="italic" style={{ color: "#8E0935" }}>Russia</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#6B7280" }}>
                            Bridging India&apos;s workforce with Russia&apos;s industry needs through professional recruitment and deployment
                        </p>
                    </div>

                    {/* India → Russia Partnership */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* India */}
                        <div className="text-center p-8 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <img src="https://flagcdn.com/w160/in.png" alt="India flag" className="w-24 h-auto mx-auto rounded mb-4" loading="lazy" />
                            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>India</h3>
                            <p className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                Sourcing &amp; Recruitment Hub
                            </p>
                            <p className="text-xs mt-3" style={{ color: "#8E0935", fontFamily: "var(--font-lato)" }}>
                                Head Office: New Delhi
                            </p>
                        </div>

                        {/* Arrow / Connection */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="hidden lg:flex items-center gap-2">
                                <div className="w-20 h-px" style={{ background: "#8E0935" }} />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8E0935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <div className="text-center p-6 rounded-xl" style={{ background: "#8E0935" }}>
                                <p className="text-xs tracking-[0.15em] uppercase font-bold mb-2" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-lato)" }}>
                                    Deployment Pipeline
                                </p>
                                <p className="text-3xl font-bold" style={{ color: "#FDFBEF", fontFamily: "var(--font-oswald)" }}>500+</p>
                                <p className="text-xs mt-1" style={{ color: "rgba(253,251,239,0.6)", fontFamily: "var(--font-poppins)" }}>
                                    Workers Deployed to Russia
                                </p>
                            </div>
                            <div className="hidden lg:flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8E0935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <div className="w-20 h-px" style={{ background: "#8E0935" }} />
                            </div>
                        </div>

                        {/* Russia */}
                        <div className="text-center p-8 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <img src="https://flagcdn.com/w160/ru.png" alt="Russia flag" className="w-24 h-auto mx-auto rounded mb-4" loading="lazy" />
                            <h3 className="text-2xl font-bold mb-2" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>Russia</h3>
                            <p className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                Deployment &amp; Operations
                            </p>
                            <p className="text-xs mt-3" style={{ color: "#8E0935", fontFamily: "var(--font-lato)" }}>
                                Office: Moscow
                            </p>
                        </div>
                    </div>

                    {/* Key Industries in Russia */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                        {["Construction", "Hospitality", "Manufacturing", "Logistics"].map((industry, i) => (
                            <div key={i} className="text-center p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.08)" }}>
                                <p className="text-sm font-semibold" style={{ color: "#1a0a10", fontFamily: "var(--font-lato)" }}>
                                    {industry}
                                </p>
                                <p className="text-xs mt-1" style={{ color: "#6B7280" }}>in Russia</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
