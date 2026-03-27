'use client'

import { useRef, useState, useEffect } from "react"
import Container from "@/components/container"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { FiUsers, FiTruck, FiFileText, FiSend, FiBriefcase } from "react-icons/fi"
import { useLanguage } from "@/context/language"
import { DotGrid, CornerOrnament, FlowLine } from "@/components/decorators/SVGDecorations"
import { motion, useScroll, useTransform } from "framer-motion"

const SERVICES = [
    {
        icon: FiUsers,
        titleEn: "Cleaners & Indoor Labour", titleRu: "Уборщики и внутренний труд",
        subtitleEn: "Hotels, Hospitals, Commercial Complexes", subtitleRu: "Отели, больницы, коммерческие комплексы",
        descEn: "Professional cleaning and indoor maintenance staff for hotels, hospitals, commercial complexes, and residential buildings across Russia.",
        descRu: "Профессиональный персонал для уборки и обслуживания отелей, больниц, коммерческих объектов и жилых зданий.",
        bg: "#8A0029",
        gradient: "linear-gradient(135deg, #8A0029 0%, #5C001B 100%)",
        border: "rgba(211,47,47,0.3)",
    },
    {
        icon: FiTruck,
        titleEn: "Textile & Garment Workforce", titleRu: "Текстильный и швейный персонал",
        subtitleEn: "Textile Mills, Garment Factories", subtitleRu: "Текстильные фабрики, швейные производства",
        descEn: "Skilled workers for textile mills, garment manufacturing, fabric processing, and quality inspection in Russian textile industry.",
        descRu: "Квалифицированные рабочие для текстильных фабрик, швейного производства и контроля качества.",
        bg: "#262626",
        gradient: "linear-gradient(135deg, #262626 0%, #1A1A1A 100%)",
        border: "rgba(138,0,41,0.4)",
    },
    {
        icon: FiFileText,
        titleEn: "Tailors, Sewing Machine Operators and Master Tailors", titleRu: "Портные, операторы швейных машин и мастера-портные",
        subtitleEn: "Fashion & Garment Industry", subtitleRu: "Модная и швейная промышленность",
        descEn: "Experienced tailors, sewing machine operators, and master tailors for garment factories, fashion houses, and textile production facilities.",
        descRu: "Опытные портные, операторы швейных машин и мастера-портные для швейных фабрик и домов моды.",
        bg: "#8A0029",
        gradient: "linear-gradient(135deg, #8A0029 0%, #6B0020 100%)",
        border: "rgba(253,251,239,0.15)",
    },
    {
        icon: FiSend,
        titleEn: "Construction Workforce", titleRu: "Строительный персонал",
        subtitleEn: "Construction Workers & General Labour", subtitleRu: "Строительные рабочие и разнорабочие",
        descEn: "Skilled construction workers, masons, carpenters, and general labourers for building and infrastructure projects across Russia.",
        descRu: "Квалифицированные строительные рабочие, каменщики, плотники и разнорабочие для строительных проектов.",
        bg: "#262626",
        gradient: "linear-gradient(135deg, #262626 0%, #0D0D0D 100%)",
        border: "rgba(211,47,47,0.35)",
    },
    {
        icon: FiBriefcase,
        titleEn: "Skilled Workforce & Technical Experts", titleRu: "Квалифицированные специалисты и технические эксперты",
        subtitleEn: "Technicians & Skilled Trade Workers", subtitleRu: "Техники и квалифицированные рабочие",
        descEn: "Qualified technicians, electricians, welders, fitters, and technical specialists for industrial and construction projects.",
        descRu: "Квалифицированные техники, электрики, сварщики и специалисты для промышленных проектов.",
        bg: "#8A0029",
        gradient: "linear-gradient(135deg, #8A0029 0%, #5C001B 100%)",
        border: "rgba(253,251,239,0.15)",
    },
]

/* ─── Card Component ─── */
function ServiceCard({ svc, i, lang, mobile }) {
    const Icon = svc.icon
    return (
        <div
            className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex-shrink-0"
            style={{
                background: svc.gradient,
                ...(mobile
                    ? { minHeight: "220px" }
                    : { width: "calc((100% - 48px) / 3)", minWidth: "300px", minHeight: "320px" }),
                border: `2px solid ${svc.border}`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 ${svc.border}`,
            }}
        >
            <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                            background: svc.bg === '#262626' ? 'rgba(138,0,41,0.3)' : 'rgba(253,251,239,0.15)',
                            backdropFilter: "blur(10px)",
                            border: `1px solid ${svc.bg === '#262626' ? 'rgba(138,0,41,0.4)' : 'rgba(253,251,239,0.1)'}`,
                        }}>
                        <Icon size={mobile ? 20 : 24} color="#FDFBEF" />
                    </div>
                    <span className="text-4xl lg:text-5xl font-black"
                        style={{ color: "rgba(253,251,239,0.06)", fontFamily: "var(--font-inter)" }}>
                        {String(i + 1).padStart(2, '0')}
                    </span>
                </div>
                <div className="mt-auto pt-6 lg:pt-8">
                    <h3 className="text-lg lg:text-xl font-black mb-1"
                        style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                        {lang === 'ru' ? svc.titleRu : svc.titleEn}
                    </h3>
                    {svc.subtitleEn && (
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2"
                            style={{ color: "rgba(253,251,239,0.45)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? svc.subtitleRu : svc.subtitleEn}
                        </p>
                    )}
                    <p className="text-xs lg:text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.55)" }}>
                        {lang === 'ru' ? svc.descRu : svc.descEn}
                    </p>
                </div>
            </div>
            <CornerOrnament size={30} color="#FDFBEF" position="bottom-right" className="absolute bottom-5 right-5 opacity-10" />
        </div>
    )
}

/* ─── Shared Header ─── */
function Header({ lang }) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <FlowLine width={40} height={2} color="#8E0935" />
                    <span className="text-sm tracking-[0.2em] uppercase font-bold"
                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                        {lang === 'ru' ? 'Наши Услуги' : 'Services'}
                    </span>
                </div>
                <h2 className="font-black tracking-tight"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#1A1A1A" }}>
                    {lang === 'ru'
                        ? <>{`Наши услуги `}<span style={{ color: "#8E0935" }}>{`подбора`}</span></>
                        : <>{`Our Recruitment `}<span style={{ color: "#8E0935" }}>{`Services`}</span></>
                    }
                </h2>
                <p className="mt-3 text-sm lg:text-base max-w-xl leading-relaxed"
                    style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                    {lang === 'ru'
                        ? 'Комплексные кадровые услуги, охватывающие каждый этап жизненного цикла подбора персонала'
                        : 'Comprehensive manpower services covering every phase of the recruitment lifecycle'
                    }
                </p>
            </div>
            <Link href="/services">
                <button className="flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(142,9,53,0.25)]"
                    style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Все услуги' : 'All Services'} <MdArrowOutward size={14} />
                </button>
            </Link>
        </div>
    )
}

/* ─── Desktop: pixel-measured horizontal scroll ─── */
function DesktopScroll({ services, lang }) {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const containerRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)

    // Measure actual overflow in pixels
    useEffect(() => {
        const measure = () => {
            if (trackRef.current && containerRef.current) {
                const trackWidth = trackRef.current.scrollWidth
                const viewWidth = containerRef.current.offsetWidth
                setScrollRange(trackWidth - viewWidth)
            }
        }
        measure()
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    }, [])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    })

    // Map scroll progress to exact pixel overflow
    const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -scrollRange])

    return (
        <section ref={sectionRef} className="relative hidden lg:block" style={{ background: "#FDFBEF", height: "400vh" }}>
            <DotGrid rows={5} cols={4} color="#8E0935" opacity={0.05} spacing={24} className="absolute top-10 left-8" />
            <CornerOrnament size={50} color="#BC264B" position="top-right" className="absolute top-8 right-8 opacity-15" />

            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <Container>
                    <Header lang={lang} />
                    <div ref={containerRef} className="overflow-hidden">
                        <motion.div ref={trackRef} className="flex gap-6" style={{ x }}>
                            {services.map((svc, i) => <ServiceCard key={i} svc={svc} i={i} lang={lang} />)}
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

/* ─── Mobile: vertical stack ─── */
function MobileStack({ services, lang }) {
    return (
        <section className="py-16 lg:hidden relative" style={{ background: "#FDFBEF" }}>
            <Container>
                <Header lang={lang} />
                <div className="flex flex-col gap-4">
                    {services.map((svc, i) => <ServiceCard key={i} svc={svc} i={i} lang={lang} mobile />)}
                </div>
            </Container>
        </section>
    )
}

export default function WhatWeDo() {
    const { lang } = useLanguage()
    return (
        <>
            <DesktopScroll services={SERVICES} lang={lang} />
            <MobileStack services={SERVICES} lang={lang} />
        </>
    )
}
