'use client'

import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { DotGrid, FlowLine } from "@/components/decorators/SVGDecorations"
import { AnimatedTabs } from "@/components/ui/animated-tabs"

const SERVICES = [
    {
        slug: "cleaners",
        tabEn: "Cleaners", tabRu: "Уборщики",
        titleEn: "Cleaners & Housekeeping Staff", titleRu: "Уборщики и клининговый персонал",
        descEn: "We supply verified cleaning staff for hotels, hospitals, malls, and factory floors across Russia. Each candidate is screened, documented, and arrives with complete visa clearance — ready to start on day one.",
        descRu: "Мы поставляем проверенный клининговый персонал для отелей, больниц, торговых центров и заводов по всей России. Каждый кандидат проверен и прибывает с полным визовым оформлением — готов к работе с первого дня.",
        image: "/service-and-blog/Cleaners.jpeg",
        tags: ["Hotels", "Hospitals", "Commercial", "Industrial"], tags_ru: ["Отели", "Больницы", "Коммерция", "Промышленность"],
    },
    {
        slug: "all-types-of-drivers",
        tabEn: "Drivers", tabRu: "Водители",
        titleEn: "All Types of Drivers", titleRu: "Водители всех категорий",
        descEn: "From light vehicles to heavy trucks and construction machinery — we provide licensed drivers with verified records. All candidates are pre-screened for Russian road compliance before deployment.",
        descRu: "От лёгкого транспорта до тяжёлых грузовиков и строительной техники — мы предоставляем лицензированных водителей с проверенными данными. Все кандидаты проверены на соответствие российским стандартам.",
        image: "/service-and-blog/drivers.jpeg",
        tags: ["Light", "Heavy", "Construction", "Executive"], tags_ru: ["Лёгкие", "Тяжёлые", "Строительство", "VIP"],
    },
    {
        slug: "general-labour",
        tabEn: "General Labour", tabRu: "Разнорабочие",
        titleEn: "Skilled General Labour", titleRu: "Квалифицированные разнорабочие",
        descEn: "Dependable workers for construction sites, warehouses, and infrastructure projects. Physically fit, disciplined, and task-ready — all deployed with full compliance to Russian labour regulations.",
        descRu: "Надёжные рабочие для строительных площадок, складов и инфраструктурных проектов. Физически подготовленные и дисциплинированные — с полным соответствием трудовым нормам РФ.",
        image: "/service-and-blog/General-labours.jpeg",
        tags: ["Construction", "Warehouse", "Infrastructure"], tags_ru: ["Строительство", "Склад", "Инфраструктура"],
    },
    {
        slug: "factory-helpers",
        tabEn: "Factory Workers", tabRu: "Заводской персонал",
        titleEn: "Factory Helpers & Production Staff", titleRu: "Помощники на заводе и производственный персонал",
        descEn: "Hands-on assistants for manufacturing plants, assembly lines, and production floors. Whether it's machine operation support, quality checks, or material handling — we've got it covered.",
        descRu: "Практические ассистенты для заводов, сборочных линий и производственных цехов. Будь то поддержка станков, контроль качества или работа с материалами — мы обеспечим.",
        image: "/service-and-blog/Factory-helpers.jpeg",
        tags: ["Manufacturing", "Assembly", "QC"], tags_ru: ["Производство", "Сборка", "Контроль"],
    },
    {
        slug: "skilled-labourers-technicians",
        tabEn: "Technicians", tabRu: "Техники",
        titleEn: "Skilled Technicians & Tradesmen", titleRu: "Квалифицированные техники и мастера",
        descEn: "Certified electricians, plumbers, welders, and fitters — trade-tested and ready for Russian construction and industrial projects. Every technician holds verified qualifications and deployment paperwork.",
        descRu: "Сертифицированные электрики, сантехники, сварщики и слесари — прошедшие профтестирование и готовые к российским строительным и промышленным проектам. Подтверждённая квалификация и документация.",
        image: "/service-and-blog/Factory-helpers2.jpeg",
        tags: ["Electricians", "Plumbers", "Welders"], tags_ru: ["Электрики", "Сантехники", "Сварщики"],
    },
    {
        slug: "emigration-immigration-clearance",
        tabEn: "Visa & Clearance", tabRu: "Визы и оформление",
        titleEn: "Emigration & Immigration Clearance", titleRu: "Эмиграционное и иммиграционное оформление",
        descEn: "We handle the entire visa pipeline — from document collection and regulatory filings to embassy attestation and final clearance. Fully aligned with both Indian and Russian compliance frameworks.",
        descRu: "Мы ведём весь визовый процесс — от сбора документов и подачи в органы до аттестации в посольстве и финального оформления. Полное соответствие нормативам Индии и России.",
        image: "/service-and-blog/Immigration-clearance.jpeg",
        tags: ["Visa", "Documentation", "Compliance"], tags_ru: ["Виза", "Документы", "Соответствие"],
    },
    {
        slug: "employee-outsourcing-solutions",
        tabEn: "Outsourcing", tabRu: "Аутсорсинг",
        titleEn: "Employee Outsourcing Solutions", titleRu: "Решения по аутсорсингу персонала",
        descEn: "End-to-end workforce outsourcing — contract staffing, temporary placements, permanent hires, payroll, and compliance. You focus on your business, we handle the people.",
        descRu: "Комплексный аутсорсинг — контрактный персонал, временные и постоянные кадры, зарплата и соответствие. Вы занимаетесь бизнесом, мы управляем кадрами.",
        image: "/service-and-blog/employe-outsourcing-.jpeg",
        tags: ["HR", "Staffing", "Payroll", "Compliance"], tags_ru: ["Кадры", "Персонал", "Зарплата", "Соответствие"],
    },
    {
        slug: "packing-workers",
        tabEn: "Packers", tabRu: "Упаковщики",
        titleEn: "Packing & Sorting Workers", titleRu: "Упаковщики и сортировщики",
        descEn: "Warehouse and logistics workers trained in packing, sealing, labeling, and quality inspection. We supply them for Russian logistics hubs, factories, and distribution centres — fast turnaround guaranteed.",
        descRu: "Складские и логистические работники, обученные упаковке, герметизации, маркировке и контролю качества. Поставляем для логистических хабов, заводов и распределительных центров России.",
        image: "/service-and-blog/Packers-workers.jpeg",
        tags: ["Logistics", "Warehouse", "QC"], tags_ru: ["Логистика", "Склад", "Контроль"],
    },
    {
        slug: "document-attestation-services",
        tabEn: "Attestation", tabRu: "Аттестация",
        titleEn: "Document Attestation Services", titleRu: "Услуги аттестации документов",
        descEn: "We authenticate educational certificates, trade qualifications, experience letters, and employment contracts. MEA attestation, Russian embassy legalization, and apostille — all handled under one roof.",
        descRu: "Аутентификация образовательных сертификатов, профквалификаций, рекомендательных писем и трудовых договоров. Аттестация MEA, легализация в посольстве России и апостиль — всё в одном месте.",
        image: "/service-and-blog/Document-attestation.jpeg",
        tags: ["MEA", "Embassy", "Apostille"], tags_ru: ["MEA", "Посольство", "Апостиль"],
    },
]

function ServiceTabContent({ svc, lang }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-5 items-center">
            {/* Square Image */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={svc.image}
                    alt={lang === 'ru' ? svc.titleRu : svc.titleEn}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                    loading="lazy"
                />
                <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(138,0,41,0.45), transparent)" }} />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3">
                <h3 className="text-lg md:text-xl font-black"
                    style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                    {lang === 'ru' ? svc.titleRu : svc.titleEn}
                </h3>
                <p className="text-sm leading-relaxed"
                    style={{ color: "rgba(38,38,38,0.6)", fontFamily: "var(--font-poppins)" }}>
                    {lang === 'ru' ? svc.descRu : svc.descEn}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                    {(lang === 'ru' ? svc.tags_ru : svc.tags).map((tag, ti) => (
                        <span key={ti} className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{ background: "rgba(138,0,41,0.08)", color: "#8A0029", fontFamily: "var(--font-inter)" }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <Link href={`/services/${svc.slug}`}>
                    <button className="flex items-center gap-2 mt-3 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                        {lang === 'ru' ? 'Подробнее' : 'Learn More'} <MdArrowOutward size={14} />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default function ServicesShowcase() {
    const { lang } = useLanguage()

    const tabs = SERVICES.map((svc) => ({
        id: svc.slug,
        label: lang === 'ru' ? svc.tabRu : svc.tabEn,
        content: <ServiceTabContent svc={svc} lang={lang} />,
    }))

    return (
        <section className="py-6 px-2 lg:px-6 relative">
            <div className="rounded-lg overflow-hidden relative" style={{ background: "#FDFBEF", border: "1px solid rgba(142,9,53,0.06)" }}>
                {/* Background SVG decorations */}
                <DotGrid rows={8} cols={8} color="#8E0935" opacity={0.03} spacing={30} className="absolute top-8 right-8 hidden lg:block" />
                <DotGrid rows={4} cols={4} color="#BC264B" opacity={0.03} spacing={25} className="absolute bottom-8 left-8 hidden lg:block" />

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 relative" style={{ zIndex: 10 }}>
                    {/* Header */}
                    <ScrollReveal variant="fadeUp">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-10 mb-10"
                            style={{ borderBottom: "1px solid rgba(142,9,53,0.06)" }}>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <FlowLine width={40} height={2} color="#8E0935" />
                                    <span className="text-sm tracking-[0.2em] uppercase font-bold"
                                        style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                        {lang === 'ru' ? 'Услуги' : 'All Services'}
                                    </span>
                                </div>
                                <h2 className="font-black leading-tight max-w-lg"
                                    style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", color: "#1A1A1A" }}>
                                    {lang === 'ru' ? 'Наши кадровые услуги для России' : 'Our Manpower Services for Russia'}
                                </h2>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Animated Tabs */}
                    <ScrollReveal variant="fadeUp" delay={0.15}>
                        <AnimatedTabs tabs={tabs} defaultTab="cleaners" className="max-w-full" />
                    </ScrollReveal>

                    {/* Explore More CTA */}
                    <ScrollReveal variant="fadeUp" delay={0.3} className="flex justify-center mt-10">
                        <Link href="/services">
                            <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                                style={{ background: "#8A0029", color: "#FFFFFF", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Все услуги' : 'Explore More'} <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
