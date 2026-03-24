'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/container";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

const STATS = [
    { value: "500+", label: "Workers in Russia" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Partner Companies" },
    { value: "100%", label: "Compliance Rate" },
]

const VALUES = [
    {
        title: "Our Mission",
        desc: "To bridge the gap between India's vast talent pool and Russia's employment demands by providing reliable, compliant, and efficient manpower recruitment services that empower workers and satisfy employers.",
        accent: "#BC264B",
    },
    {
        title: "Our Vision",
        desc: "To be the most trusted overseas manpower recruitment agency for the Russian market, recognized for quality, transparency, and end-to-end workforce deployment — delivering verified professionals from India to Russia.",
        accent: "#8E0935",
    },
    {
        title: "Our Promise",
        desc: "Government-licensed, trade-tested, and fully documented workforce — delivered on time, every time. No shortcuts, no compromises. Every worker we deploy represents our reputation.",
        accent: "#BC264B",
    },
]

function AnimatedSection({ children, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
            {children}
        </motion.div>
    );
}

export default function AboutMain() {
    const visionRef = useRef(null);
    const visionInView = useInView(visionRef, { once: true, margin: "-80px" });

    return (
        <section style={{ background: "#FDFBEF" }} className="font-sans pt-36 pb-20 relative overflow-hidden">

            {/* HERO */}
            <AnimatedSection className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    <div className="max-w-2xl">
                        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.28em] uppercase font-medium mb-4" style={{ color: "#BC264B" }}>
                            About Taha Airwaves
                        </motion.p>
                        <motion.h2 variants={fadeUp} custom={1} className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-cormorant-garamond)", color: "#1a0a10" }}>
                            Empowering Workforce<br />
                            <span className="italic font-normal" style={{ color: "#BC264B" }}>Deployment to Russia.</span>
                        </motion.h2>
                    </div>
                    <div className="max-w-md self-end pb-2">
                        <motion.p variants={fadeUp} custom={2} style={{ color: "#555" }} className="leading-relaxed font-poppins">
                            Taha Airwaves Private Limited is a government-licensed manpower outsourcing consultancy based in New Delhi,
                            connecting India&apos;s professional workforce with Russian employers — with full compliance and dedicated Moscow operations since 2022.
                        </motion.p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Divider */}
            <AnimatedSection className="max-w-6xl mx-auto px-6 lg:px-12 mb-16 relative z-10">
                <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.1 } } }} className="origin-left h-px" style={{ background: "rgba(188,38,75,0.4)" }} />
            </AnimatedSection>

            {/* STATS */}
            <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center rounded-2xl p-8"
                            style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}
                        >
                            <p className="text-4xl md:text-5xl font-lato font-bold" style={{ color: '#8E0935' }}>{stat.value}</p>
                            <p className="text-sm text-gray-500 font-poppins mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* VALUES — White cards instead of dark boxes */}
            <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VALUES.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="rounded-2xl p-8"
                            style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.1)" }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full" style={{ background: value.accent }} />
                                <span className="text-xs tracking-[0.2em] uppercase font-lato font-bold" style={{ color: value.accent }}>
                                    {value.title}
                                </span>
                            </div>
                            <p className="text-sm font-poppins leading-relaxed" style={{ color: "#555" }}>
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* COMPANY INFO */}
            <div ref={visionRef} className="relative z-10">
                <div style={{ background: "#FFFFFF" }} className="py-24 px-6 lg:px-12 relative overflow-hidden">

                    <div style={{ position:"absolute", width:"700px", height:"700px", borderRadius:"50%", border:"1px solid rgba(188,38,75,0.08)", top:"50%", right:"-200px", transform:"translateY(-50%)", pointerEvents:"none" }} />

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — license card — White card */}
                        <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.12)" }}>
                            <div className="relative z-10">
                                <p className="text-xs tracking-[0.2em] uppercase font-lato font-bold text-[#BC264B] mb-6">Government Licensed Agency</p>
                                <div className="space-y-4">
                                    <div className="rounded-xl p-4" style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                                        <p className="text-xs font-poppins mb-1" style={{ color: "#9CA3AF" }}>Agency Name</p>
                                        <p className="text-lg font-poppins font-medium" style={{ color: "#1a0a10" }}>Taha Airwaves Private Limited</p>
                                    </div>
                                    <div className="rounded-xl p-4" style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                                        <p className="text-xs font-poppins mb-1" style={{ color: "#9CA3AF" }}>RA License Number</p>
                                        <p className="text-lg font-lato font-bold text-[#8E0935]">B-3260/DEL/COM/100/5/11259/2025</p>
                                    </div>
                                    <div className="rounded-xl p-4" style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                                        <p className="text-xs font-poppins mb-1" style={{ color: "#9CA3AF" }}>Registered Office</p>
                                        <p className="text-sm font-poppins" style={{ color: "#555" }}>71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — text */}
                        <div className="flex flex-col gap-6">
                            <motion.p custom={0} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="text-xs tracking-[0.28em] uppercase font-medium" style={{ color: "#BC264B" }}>
                                Our Story
                            </motion.p>
                            <motion.h3 custom={1} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight" style={{ fontFamily: "var(--font-cormorant-garamond)", color: "#1a0a10" }}>
                                Built on Trust,
                                <span className="italic font-normal" style={{ color: "#BC264B" }}> Driven by Expertise.</span>
                            </motion.h3>
                            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={visionInView ? "visible" : "hidden"} className="space-y-4 text-sm leading-relaxed" style={{ color: "#555" }}>
                                <p>
                                    We incepted our company with the objective to bridge the demand gap between the employers and employees.
                                    As an accomplished placement and recruitment agency, we rely on delivering quality services of procuring
                                    the right people for the right roles at the right time.
                                </p>
                                <p>
                                    Our RA License (B-3260/DEL/COM/100/5/11259/2025) stands as proof of our compliance with Indian emigration laws
                                    and our commitment to ethical recruitment practices. With dedicated Russia operations since 2022 and a Moscow office,
                                    we specialize in deploying verified Indian workforce to the Russian market across construction, hospitality, manufacturing, and logistics sectors.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
