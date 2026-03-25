'use client'

import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiTruck, FiFileText, FiSend, FiBriefcase } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, CornerOrnament, FlowLine, CircuitLines } from "@/components/decorators/SVGDecorations"

const SERVICES = [
    {
        icon: FiUsers,
        titleEn: "Overseas Recruitment", titleRu: "Международный подбор",
        descEn: "End-to-end recruitment solutions for Russian employers seeking skilled and professional Indian workforce across construction, hospitality, and manufacturing sectors.",
        descRu: "Комплексные решения по подбору персонала для российских работодателей.",
        color: "#8E0935",
    },
    {
        icon: FiTruck,
        titleEn: "Bulk Manpower Hiring", titleRu: "Массовый набор персонала",
        descEn: "High-volume workforce mobilization with rapid turnaround for large-scale construction, industrial, and infrastructure projects across Russia.",
        descRu: "Мобилизация рабочей силы для крупных строительных и промышленных проектов.",
        color: "#BC264B",
    },
    {
        icon: FiFileText,
        titleEn: "Visa & Documentation", titleRu: "Визовое оформление",
        descEn: "Complete visa processing, document attestation, emigration clearance, and full compliance management — handled end-to-end with zero hassle.",
        descRu: "Полное визовое оформление и управление соответствием.",
        color: "#8E0935",
    },
    {
        icon: FiSend,
        titleEn: "Deployment Support", titleRu: "Поддержка развёртывания",
        descEn: "Pre-departure orientation, travel coordination, airport transfers, accommodation setup, and continuous post-deployment monitoring and follow-up.",
        descRu: "Предотъездная ориентация, координация и сопровождение.",
        color: "#BC264B",
    },
    {
        icon: FiBriefcase,
        titleEn: "Employee Outsourcing", titleRu: "Аутсорсинг персонала",
        descEn: "Complete workforce outsourcing — staffing, payroll management, HR compliance, and performance monitoring handled end-to-end.",
        descRu: "Полный аутсорсинг — подбор, расчёт заработной платы и кадровое обеспечение.",
        color: "#8E0935",
    },
]

export default function WhatWeDo() {
    const { lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* Decorations */}
            <DotGrid rows={5} cols={4} color="#8E0935" opacity={0.03} spacing={24} className="absolute top-10 left-8 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="top-right" className="absolute top-8 right-8 opacity-15 hidden lg:block" />
            <CircuitLines width={300} height={80} color="#8E0935" opacity={0.02} className="absolute bottom-20 right-0 hidden xl:block" />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FlowLine width={40} height={2} color="#8E0935" />
                                <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                    style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Наши Услуги' : 'Services'}
                                </span>
                            </div>
                            <h2 className="font-black tracking-tight"
                                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: "#1A1A1A" }}>
                                {lang === 'ru'
                                    ? <>{`Что мы `}<span style={{ color: "#8E0935" }}>{`делаем`}</span></>
                                    : <>{`What We `}<span style={{ color: "#8E0935" }}>{`Do`}</span></>
                                }
                            </h2>
                            <p className="mt-3 text-base max-w-xl leading-relaxed"
                                style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru'
                                    ? 'Комплексные кадровые услуги, охватывающие каждый этап жизненного цикла подбора персонала'
                                    : 'Comprehensive manpower services covering every phase of the recruitment lifecycle'
                                }
                            </p>
                        </div>
                        <Link href="/services">
                            <button className="flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(142,9,53,0.25)]"
                                style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Все услуги' : 'All Services'} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Feature row: first 2 cards large, side by side */}
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" staggerDelay={0.1}>
                    {SERVICES.slice(0, 2).map((svc, i) => {
                        const Icon = svc.icon
                        return (
                            <StaggerItem key={i} variant="fadeUp">
                                <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                    style={{ background: svc.color, minHeight: "240px" }}>
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${svc.color} 0%, rgba(26,26,26,0.85) 100%)` }} />

                                    <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                                        <div className="flex items-start justify-between">
                                            <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                                style={{ background: "rgba(253,251,239,0.15)", backdropFilter: "blur(10px)" }}>
                                                <Icon size={28} color="#FDFBEF" />
                                            </div>
                                            <span className="text-5xl font-black"
                                                style={{ color: "rgba(253,251,239,0.06)", fontFamily: "var(--font-inter)" }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <div className="mt-8">
                                            <h3 className="text-xl font-black mb-3"
                                                style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                                {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                            </h3>
                                            <p className="text-base leading-relaxed"
                                                style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.6)" }}>
                                                {lang === 'ru' ? svc.descRu : svc.descEn}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Corner decoration */}
                                    <CornerOrnament size={30} color="#FDFBEF" position="bottom-right" className="absolute bottom-5 right-5 opacity-10" />
                                </div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>

                {/* Bottom row: 3 cards */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
                    {SERVICES.slice(2).map((svc, i) => {
                        const Icon = svc.icon
                        const idx = i + 2
                        return (
                            <StaggerItem key={idx} variant="fadeUp">
                                <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
                                    style={{ background: "white", border: "1px solid rgba(142,9,53,0.08)" }}>

                                    {/* Top accent bar */}
                                    <div className="h-1.5 transition-all duration-300"
                                        style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }} />

                                    <div className="p-8">
                                        {/* Icon + Number */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                                style={{ background: svc.color }}>
                                                <Icon size={24} color="#FDFBEF" />
                                            </div>
                                            <span className="text-4xl font-black"
                                                style={{ color: "rgba(142,9,53,0.05)", fontFamily: "var(--font-inter)" }}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-black mb-3 transition-colors duration-300 group-hover:text-[#8E0935]"
                                            style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                            {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                        </h3>
                                        <p className="text-base leading-relaxed"
                                            style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                            {lang === 'ru' ? svc.descRu : svc.descEn}
                                        </p>

                                        {/* Footer link */}
                                        <div className="mt-6 pt-5 flex items-center gap-2 text-sm font-bold transition-colors group-hover:text-[#8E0935]"
                                            style={{ borderTop: "1px solid rgba(142,9,53,0.06)", color: svc.color, fontFamily: "var(--font-inter)" }}>
                                            <FlowLine width={20} height={2} color={svc.color} />
                                            {lang === 'ru' ? 'Подробнее' : 'Learn More'}
                                            <MdArrowOutward size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </Container>
        </section>
    )
}
