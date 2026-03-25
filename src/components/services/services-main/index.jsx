'use client'

import Container from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"
import { DotGrid, CornerOrnament, FlowLine, CircuitLines, GlobeWireframe, GeometricFrame, Crosshair } from "@/components/decorators/SVGDecorations"

const SERVICES = [
    { slug: "cleaners", titleEn: "Cleaners & Housekeeping", titleRu: "Уборка и хозяйственное обслуживание", descEn: "Professionally trained staff for hotels, hospitals, commercial complexes, and residential facilities.", descRu: "Профессионально обученный персонал для гостиниц, больниц и торговых комплексов.", image: "/service-and-blog/Cleaners.jpeg", tags: ["Hotels", "Hospitals", "Commercial"], tags_ru: ["Отели", "Больницы", "Коммерция"] },
    { slug: "all-types-of-drivers", titleEn: "All Types of Drivers", titleRu: "Все виды водителей", descEn: "Licensed drivers for light and heavy vehicles, construction equipment, and transport.", descRu: "Лицензированные водители для лёгких и тяжёлых транспортных средств.", image: "/service-and-blog/drivers.jpeg", tags: ["Light", "Heavy", "Equipment"], tags_ru: ["Лёгкие", "Тяжёлые", "Техника"] },
    { slug: "general-labour", titleEn: "General Labour", titleRu: "Разнорабочие", descEn: "Reliable labourers for construction, warehouse operations, and industrial projects.", descRu: "Надёжные рабочие для строительства и складских операций.", image: "/service-and-blog/General-labours.jpeg", tags: ["Construction", "Warehouse"], tags_ru: ["Строительство", "Склад"] },
    { slug: "loading-unloading-workers", titleEn: "Loading & Unloading", titleRu: "Погрузчики-разгрузчики", descEn: "Experienced handlers for logistics, shipping, and warehouse operations.", descRu: "Опытные грузчики для логистических и складских операций.", image: "/service-and-blog/Loading-unloading-workers.jpeg", tags: ["Logistics", "Shipping"], tags_ru: ["Логистика", "Доставка"] },
    { slug: "factory-helpers", titleEn: "Factory Helpers", titleRu: "Помощники на производстве", descEn: "Trained workforce for assembly lines, packaging, quality control, and production.", descRu: "Обученные рабочие для сборочных линий и контроля качества.", image: "/service-and-blog/Factory-helpers.jpeg", tags: ["Manufacturing", "QC"], tags_ru: ["Производство", "Контроль"] },
    { slug: "barista", titleEn: "Barista & Cafe Staff", titleRu: "Бариста и персонал кафе", descEn: "Skilled baristas and cafe staff with expertise in service and beverages.", descRu: "Квалифицированные бариста и выездной персонал.", image: "/service-and-blog/Barista-workers.jpeg", tags: ["Hospitality", "F&B"], tags_ru: ["Гостеприимство", "Общепит"] },
    { slug: "packing-workers", titleEn: "Packing Workers", titleRu: "Упаковщики", descEn: "Efficient packing and sorting workers for warehousing and logistics.", descRu: "Эффективные сотрудники для упаковки и логистики.", image: "/service-and-blog/Packers-workers.jpeg", tags: ["Warehouse", "E-commerce"], tags_ru: ["Склад", "Торговля"] },
    { slug: "emigration-immigration-clearance", titleEn: "Emigration Clearance", titleRu: "Эмиграционное оформление", descEn: "End-to-end emigration clearance and immigration support for deployment.", descRu: "Полное эмиграционное и иммиграционное оформление.", image: "/service-and-blog/Immigration-clearance.jpeg", tags: ["Visa", "Legal"], tags_ru: ["Виза", "Право"] },
    { slug: "document-attestation-services", titleEn: "Document Attestation", titleRu: "Аттестация документов", descEn: "Complete document attestation, apostille, and notarization services.", descRu: "Полная аттестация и нотариальное заверение документов.", image: "/service-and-blog/Document-attestation.jpeg", tags: ["Apostille", "Notary"], tags_ru: ["Апостиль", "Нотариус"] },
    { slug: "skilled-labourers-technicians", titleEn: "Skilled Technicians", titleRu: "Квалифицированные техники", descEn: "Electricians, plumbers, welders, and technicians for construction and industry.", descRu: "Электрики, сантехники, сварщики для строительства.", image: "/service-and-blog/Factory-helpers2.jpeg", tags: ["Electrical", "Welding"], tags_ru: ["Электрика", "Сварка"] },
    { slug: "employee-outsourcing-solutions", titleEn: "Employee Outsourcing", titleRu: "Аутсорсинг персонала", descEn: "Complete workforce outsourcing — staffing, payroll, and HR compliance.", descRu: "Полный аутсорсинг — подбор, зарплата и кадры.", image: "/service-and-blog/employe-outsourcing-.jpeg", tags: ["HR", "Payroll"], tags_ru: ["Кадры", "Зарплата"] },
]

export default function ServicesMain() {
    const { lang } = useLanguage()

    return (
        <>
            {/* Hero banner section */}
            <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden"
                style={{ background: "#1A1A1A" }}>
                <div className="absolute inset-0">
                    <Image src="/images/hero-russia-1.png" alt="Services" fill
                        className="object-cover" priority />
                    <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.85) 70%, #1A1A1A 100%)" }} />
                </div>

                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-20 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-8 right-8 hidden lg:block" />
                <GlobeWireframe size={280} color="#FDFBEF" accentColor="#BC264B" opacity={0.03} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 hidden lg:block" />
                <CircuitLines width={200} height={60} color="#BC264B" opacity={0.04} className="absolute bottom-20 left-8 hidden lg:block" />

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 pb-12"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FlowLine width={40} height={2} color="#BC264B" />
                            <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Услуги' : 'Services'}
                            </span>
                        </div>
                        <h1 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FDFBEF" }}>
                            {lang === 'ru'
                                ? <>{`Наши услуги для `}<span style={{ color: "#BC264B" }}>{`России`}</span></>
                                : <>{`Our Services for `}<span style={{ color: "#BC264B" }}>{`Russia`}</span></>
                            }
                        </h1>
                        <p className="max-w-xl text-base leading-relaxed"
                            style={{ color: "rgba(253,251,239,0.55)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Полная документация, визовое оформление, подбор персонала и поддержка развёртывания для российского рынка.'
                                : 'End-to-end recruitment, documentation, visa processing, and deployment support for the Russian market.'}
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Services grid */}
            <section className="py-20 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
                {/* Left decorative strip */}
                <div className="absolute left-0 top-20 bottom-20 w-[3px]" style={{ background: "rgba(142,9,53,0.08)" }} />

                {/* Background SVGs */}
                <CircuitLines width={300} height={100} color="#8E0935" opacity={0.02} className="absolute bottom-32 left-0 hidden lg:block" />
                <DotGrid rows={5} cols={5} color="#8E0935" opacity={0.03} spacing={24} className="absolute top-32 right-8 hidden lg:block" />
                <CornerOrnament size={40} color="#BC264B" position="bottom-right" className="absolute bottom-8 right-8 opacity-10 hidden lg:block" />
                <GeometricFrame size={120} color="#8E0935" opacity={0.02} className="absolute top-1/2 left-8 hidden xl:block" />
                <Crosshair size={80} color="#8E0935" accentColor="#BC264B" opacity={0.03} className="absolute top-60 right-1/4 hidden xl:block" />

                <Container>
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FlowLine width={32} height={2} color="#8E0935" />
                            <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Все услуги' : 'All Services'}
                            </span>
                            <FlowLine width={32} height={2} color="#8E0935" />
                        </div>
                        <h2 className="font-black tracking-tight"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1A1A1A" }}>
                            {lang === 'ru'
                                ? <>{`Комплексные кадровые `}<span style={{ color: "#8E0935" }}>{`решения`}</span></>
                                : <>{`Comprehensive Workforce `}<span style={{ color: "#8E0935" }}>{`Solutions`}</span></>
                            }
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.45 }}
                            >
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative"
                                        style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>

                                        {/* Top accent line on hover */}
                                        <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: "#8E0935" }} />

                                        {/* Image */}
                                        <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
                                            <Image src={svc.image} alt={lang === 'ru' ? svc.titleRu : svc.titleEn} fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 transition-all duration-300 group-hover:bg-[rgba(142,9,53,0.15)]"
                                                style={{ background: "rgba(26,26,26,0.05)" }} />
                                            {/* Number badge */}
                                            <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center"
                                                style={{ background: "#8E0935", boxShadow: "0 4px 12px rgba(142,9,53,0.3)" }}>
                                                <span className="text-xs font-black" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                style={{ background: "rgba(253,251,239,0.9)" }}>
                                                <MdArrowOutward size={14} style={{ color: "#8E0935" }} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col gap-3 flex-1">
                                            <h3 className="text-base font-black uppercase tracking-wide transition-colors duration-300 group-hover:text-[#8E0935]"
                                                style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                                {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                            </h3>
                                            <p className="text-sm leading-relaxed flex-1"
                                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                                {lang === 'ru' ? svc.descRu : svc.descEn}
                                            </p>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 pt-2">
                                                {(lang === 'ru' ? svc.tags_ru : svc.tags).map((tag, ti) => (
                                                    <span key={ti} className="text-xs px-2.5 py-1 rounded-md font-semibold"
                                                        style={{ background: "rgba(142,9,53,0.06)", color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
