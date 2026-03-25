'use client'

import Container from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language"
import { DotGrid, CornerOrnament, FlowLine, CircuitLines } from "@/components/decorators/SVGDecorations"

const SERVICES = [
    { slug: "cleaners", titleEn: "Cleaners & Housekeeping", titleRu: "Уборка и хозяйственное обслуживание", descEn: "Professionally trained staff for hotels, hospitals, commercial complexes, and residential facilities.", descRu: "Профессионально обученный персонал для гостиниц, больниц и торговых комплексов.", image: "/service-and-blog/Cleaners.jpeg", tags: ["Hotels", "Hospitals", "Commercial"] },
    { slug: "all-types-of-drivers", titleEn: "All Types of Drivers", titleRu: "Все виды водителей", descEn: "Licensed drivers for light and heavy vehicles, construction equipment, and transport.", descRu: "Лицензированные водители для лёгких и тяжёлых транспортных средств.", image: "/service-and-blog/drivers.jpeg", tags: ["Light", "Heavy", "Equipment"] },
    { slug: "general-labour", titleEn: "General Labour", titleRu: "Разнорабочие", descEn: "Reliable labourers for construction, warehouse operations, and industrial projects.", descRu: "Надёжные рабочие для строительства и складских операций.", image: "/service-and-blog/General-labours.jpeg", tags: ["Construction", "Warehouse"] },
    { slug: "loading-unloading-workers", titleEn: "Loading & Unloading", titleRu: "Погрузчики-разгрузчики", descEn: "Experienced handlers for logistics, shipping, and warehouse operations.", descRu: "Опытные грузчики для логистических и складских операций.", image: "/service-and-blog/Loading-unloading-workers.jpeg", tags: ["Logistics", "Shipping"] },
    { slug: "factory-helpers", titleEn: "Factory Helpers", titleRu: "Помощники на производстве", descEn: "Trained workforce for assembly lines, packaging, quality control, and production.", descRu: "Обученные рабочие для сборочных линий и контроля качества.", image: "/service-and-blog/Factory-helpers.jpeg", tags: ["Manufacturing", "QC"] },
    { slug: "barista", titleEn: "Barista & Cafe Staff", titleRu: "Бариста и персонал кафе", descEn: "Skilled baristas and cafe staff with expertise in service and beverages.", descRu: "Квалифицированные бариста и выездной персонал.", image: "/service-and-blog/Barista-workers.jpeg", tags: ["Hospitality", "F&B"] },
    { slug: "packing-workers", titleEn: "Packing Workers", titleRu: "Упаковщики", descEn: "Efficient packing and sorting workers for warehousing and logistics.", descRu: "Эффективные сотрудники для упаковки и логистики.", image: "/service-and-blog/Packers-workers.jpeg", tags: ["Warehouse", "E-commerce"] },
    { slug: "emigration-immigration-clearance", titleEn: "Emigration Clearance", titleRu: "Эмиграционное оформление", descEn: "End-to-end emigration clearance and immigration support for deployment.", descRu: "Полное эмиграционное и иммиграционное оформление.", image: "/service-and-blog/Immigration-clearance.jpeg", tags: ["Visa", "Legal"] },
    { slug: "document-attestation-services", titleEn: "Document Attestation", titleRu: "Аттестация документов", descEn: "Complete document attestation, apostille, and notarization services.", descRu: "Полная аттестация и нотариальное заверение документов.", image: "/service-and-blog/Document-attestation.jpeg", tags: ["Apostille", "Notary"] },
    { slug: "skilled-labourers-technicians", titleEn: "Skilled Technicians", titleRu: "Квалифицированные техники", descEn: "Electricians, plumbers, welders, and technicians for construction and industry.", descRu: "Электрики, сантехники, сварщики для строительства.", image: "/service-and-blog/Factory-helpers2.jpeg", tags: ["Electrical", "Welding"] },
    { slug: "employee-outsourcing-solutions", titleEn: "Employee Outsourcing", titleRu: "Аутсорсинг персонала", descEn: "Complete workforce outsourcing — staffing, payroll, and HR compliance.", descRu: "Полный аутсорсинг — подбор, зарплата и кадры.", image: "/service-and-blog/employe-outsourcing-.jpeg", tags: ["HR", "Payroll"] },
]

export default function ServicesMain() {
    const { lang } = useLanguage()

    return (
        <>
            {/* Hero banner section */}
            <section className="relative h-[45vh] min-h-[340px] flex items-end overflow-hidden"
                style={{ background: "#1A1A1A" }}>
                <div className="absolute inset-0">
                    <Image src="/images/hero-russia-1.png" alt="Services" fill
                        className="object-cover" priority />
                    <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to bottom, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.85) 70%, #1A1A1A 100%)" }} />
                </div>

                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-20 hidden lg:block" />
                <DotGrid rows={3} cols={3} color="#FDFBEF" opacity={0.04} spacing={20} className="absolute top-8 right-8 hidden lg:block" />

                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 pb-10"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FlowLine width={32} height={2} color="#BC264B" />
                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Услуги' : 'Services'}
                            </span>
                        </div>
                        <h1 className="font-black tracking-tight mb-3"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#FDFBEF" }}>
                            {lang === 'ru'
                                ? <>{`Наши услуги для `}<span style={{ color: "#BC264B" }}>{`России`}</span></>
                                : <>{`Our Services for `}<span style={{ color: "#BC264B" }}>{`Russia`}</span></>
                            }
                        </h1>
                        <p className="max-w-lg text-sm leading-relaxed"
                            style={{ color: "rgba(253,251,239,0.45)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Полная документация, визовое оформление и поддержка развёртывания.'
                                : 'Full documentation, visa processing, and deployment support.'
                            }
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Services grid */}
            <section className="py-16 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
                <CircuitLines width={250} height={80} color="#8E0935" opacity={0.02} className="absolute bottom-16 left-0 hidden lg:block" />
                <CornerOrnament size={35} color="#BC264B" position="bottom-right" className="absolute bottom-6 right-6 opacity-10 hidden lg:block" />

                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.45 }}
                            >
                                <Link href={`/services/${svc.slug}`}>
                                    <div className="group rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                                        style={{ background: "white", border: "1px solid rgba(142,9,53,0.06)" }}>

                                        {/* Image */}
                                        <div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
                                            <Image src={svc.image} alt={lang === 'ru' ? svc.titleRu : svc.titleEn} fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute inset-0 transition-all duration-300 group-hover:bg-[rgba(142,9,53,0.15)]"
                                                style={{ background: "rgba(26,26,26,0.05)" }} />
                                            {/* Number */}
                                            <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded flex items-center justify-center"
                                                style={{ background: "#8E0935" }}>
                                                <span className="text-[9px] font-black" style={{ color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                style={{ background: "rgba(253,251,239,0.9)" }}>
                                                <MdArrowOutward size={12} style={{ color: "#8E0935" }} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col gap-2 flex-1">
                                            <h3 className="text-xs font-black uppercase tracking-wide transition-colors duration-300 group-hover:text-[#8E0935]"
                                                style={{ fontFamily: "var(--font-inter)", color: "#1A1A1A" }}>
                                                {lang === 'ru' ? svc.titleRu : svc.titleEn}
                                            </h3>
                                            <p className="text-[10px] leading-relaxed flex-1"
                                                style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                                {lang === 'ru' ? svc.descRu : svc.descEn}
                                            </p>
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 pt-1">
                                                {svc.tags.map(tag => (
                                                    <span key={tag} className="text-[9px] px-2 py-0.5 rounded font-semibold"
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
