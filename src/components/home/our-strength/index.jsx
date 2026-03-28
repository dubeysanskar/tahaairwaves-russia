'use client'

import { useRef, useEffect, useState } from "react"
import Container from "@/components/container"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/context/language"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"
import { FloatingPaths } from "@/components/ui/background-paths"
import {
    DotMatrix, StarBurst, ArrowDown, ArrowUp,
    GlobeOutline, NestedFrames, WavyLines
} from "@/components/decorators/SVGIllustrations"

const SERVICE_CARDS = [
    {
        num: "01",
        titleEn: "Cleaners & Indoor Labour",
        titleRu: "Уборщики и внутренний труд",
        subtitleEn: "Hotels, Hospitals, Commercial Complexes",
        subtitleRu: "Отели, больницы, коммерческие комплексы",
        descEn: "Staff for cleaning and indoor maintenance work in hotels, hospitals, commercial complexes, office spaces, and residential buildings across Russia.",
        descRu: "Персонал для уборки и внутреннего обслуживания отелей, больниц, коммерческих комплексов, офисов и жилых зданий по всей России.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
        num: "02",
        titleEn: "Textile & Garment Workforce",
        titleRu: "Текстильный и швейный персонал",
        subtitleEn: "Tailors, Sewing Machine Operators and Master Tailors",
        subtitleRu: "Портные, операторы швейных машин и мастера-портные",
        descEn: "Workforce for textile mills, garment factories, stitching units, fabric processing, and quality inspection in the Russian textile and apparel sector.",
        descRu: "Рабочая сила для текстильных фабрик, швейных производств, цехов пошива, переработки тканей и контроля качества в российском текстильном секторе.",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
        num: "03",
        titleEn: "Warehouse & Logistics Workers",
        titleRu: "Складские и логистические рабочие",
        subtitleEn: "Loading, Packing & Supply Chain",
        subtitleRu: "Погрузка, упаковка и цепочка поставок",
        descEn: "Trained workers for warehouses, distribution centers, cold storage facilities, and ports — handling loading, unloading, sorting, packing, and inventory management across Russia.",
        descRu: "Обученные работники для складов, распределительных центров, холодильных хранилищ и портов — погрузка, разгрузка, сортировка, упаковка и управление запасами по всей России.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
        num: "04",
        titleEn: "Construction Workforce",
        titleRu: "Строительный персонал",
        subtitleEn: "Construction Workers & General Labour",
        subtitleRu: "Строительные рабочие и разнорабочие",
        descEn: "Labour for construction sites, masonry, carpentry, material handling, and infrastructure projects across Russia.",
        descRu: "Рабочая сила для строительных площадок, кладки, столярных работ, перемещения материалов и инфраструктурных проектов по всей России.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
        num: "05",
        titleEn: "Technicians & Trade Workers",
        titleRu: "Техники и квалифицированные рабочие",
        subtitleEn: "Technicians & Skilled Trade Workers",
        subtitleRu: "Техники и квалифицированные мастера",
        descEn: "Workers for industrial operations, maintenance tasks, electrical work, welding, fitting, and construction support roles.",
        descRu: "Рабочие для промышленных операций, обслуживания, электромонтажных работ, сварки, монтажа и вспомогательных строительных задач.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
]

export default function OurStrength() {
    const { t, lang } = useLanguage()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section ref={ref} className="relative overflow-hidden" style={{ background: "#FDFBEF" }}>

            {/* ═══ BackgroundPaths — absolute, covering FULL section ═══ */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* ═══ SVG decorations ═══ */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
                <DotMatrix rows={6} cols={3} spacing={16} radius={1.5} opacity={0.05} className="absolute top-16 left-6 hidden lg:block" />
                <NestedFrames size={280} opacity={0.04} className="absolute -right-12 top-[10%] hidden lg:block" />
                <GlobeOutline size={220} opacity={0.03} className="absolute right-[2%] bottom-[5%] hidden xl:block" />
                <StarBurst size={140} rays={14} opacity={0.035} className="absolute right-[5%] top-[50%] hidden xl:block" />
                <ArrowDown size={50} opacity={0.06} className="absolute left-[5%] top-[45%] hidden xl:block" />
                <ArrowUp size={50} opacity={0.06} className="absolute right-[7%] top-[18%] hidden xl:block" />
                <WavyLines width={1440} height={50} opacity={0.03} className="absolute top-[48%] left-0 w-full hidden lg:block" />
                <CornerOrnament size={50} color="#D32F2F" position="top-left" className="absolute top-8 left-8 opacity-10" />
                <CornerOrnament size={50} color="#8A0029" position="bottom-right" className="absolute bottom-8 right-8 opacity-10" />
            </div>

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(to right, transparent, #8A0029, transparent)", zIndex: 3 }} />

            {/* ═══ CONTENT ═══ */}
            <Container className="py-24 lg:py-32 relative" style={{ zIndex: 10 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8A0029" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(138,0,41,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#262626" }}>
                        {t('strengthTitle')} <span style={{ color: "#8A0029" }}>{t('strengthTitleAccent')}</span>
                    </h2>
                    <p className="text-base max-w-xl mx-auto" style={{ fontFamily: "var(--font-poppins)", color: "rgba(38,38,38,0.5)" }}>
                        {t('strengthSubtitle')}
                    </p>
                </motion.div>

                {/* Service Cards — 5 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {SERVICE_CARDS.map((card, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
                            className="group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            style={{ background: "#FFFFFF", border: "1px solid rgba(138,0,41,0.08)", boxShadow: "0 4px 24px rgba(138,0,41,0.06)" }}>
                            {/* Left accent bar */}
                            <div className="absolute top-4 bottom-4 left-0 w-[3px] rounded-r-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0"
                                style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }} />
                            {/* Top glow on hover */}
                            <div className="absolute top-0 left-0 right-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(180deg, ${i % 2 === 0 ? 'rgba(138,0,41,0.06)' : 'rgba(211,47,47,0.06)'}, transparent)` }} />

                            {/* Number + Icon */}
                            <div className="relative flex items-center justify-between mb-4">
                                <span className="text-3xl font-black" style={{ color: "rgba(138,0,41,0.08)", fontFamily: "var(--font-inter)" }}>
                                    {card.num}
                                </span>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                                    style={{ background: i % 2 === 0 ? "rgba(138,0,41,0.08)" : "rgba(211,47,47,0.08)" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={i % 2 === 0 ? "#8A0029" : "#D32F2F"} strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                                    </svg>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="relative text-sm font-black mb-1 transition-colors duration-300 group-hover:text-[#8A0029]"
                                style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? card.titleRu : card.titleEn}
                            </h3>

                            {/* Subtitle */}
                            <p className="relative text-[10px] font-semibold uppercase tracking-wider mb-3"
                                style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? card.subtitleRu : card.subtitleEn}
                            </p>

                            {/* Description */}
                            <p className="relative text-xs leading-relaxed" style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru' ? card.descRu : card.descEn}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
