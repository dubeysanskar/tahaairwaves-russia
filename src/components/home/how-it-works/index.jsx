'use client'

import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { DotGrid, FlowLine, CornerOrnament, GeometricFrame, CircuitLines } from "@/components/decorators/SVGDecorations"

const STEPS = [
    {
        num: "01",
        titleEn: "Source & Screen", titleRu: "Поиск и отбор",
        descEn: "We tap into India's largest talent pool to source, verify, and shortlist qualified candidates through structured interviews, skill assessments, and comprehensive background checks.",
        descRu: "Мы подключаемся к крупнейшему кадровому пулу Индии для поиска, проверки и отбора кандидатов через структурированные интервью и оценку навыков.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
        num: "02",
        titleEn: "Trade Testing", titleRu: "Проверка навыков",
        descEn: "Rigorous trade testing, competency assessments, and hands-on skill evaluations ensure only job-ready workers are selected — meeting Russian employer standards.",
        descRu: "Строгие профессиональные тесты и практическая оценка навыков гарантируют, что отбираются только готовые к работе специалисты.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
        num: "03",
        titleEn: "Visa & Docs", titleRu: "Виза и документы",
        descEn: "All paperwork, medical examinations, emigration clearance, document attestation, and visa processing handled end-to-end with 100% compliance guaranteed.",
        descRu: "Все документы, медосмотры, эмиграционное оформление и визы — полное сопровождение с гарантией 100% соответствия.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
        num: "04",
        titleEn: "Deploy", titleRu: "Развёртывание",
        descEn: "Pre-departure orientation, flight arrangements, airport transfers, accommodation setup, and continuous post-deployment monitoring and follow-up support.",
        descRu: "Предотъездная ориентация, организация перелёта, трансферы, размещение и постоянный мониторинг после развёртывания.",
        icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    },
]

export default function HowItWorks() {
    const { lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#1A1A1A" }}>
            {/* Decorations */}
            <DotGrid rows={5} cols={5} color="#FDFBEF" opacity={0.03} spacing={24} className="absolute top-10 right-10 hidden lg:block" />
            <GeometricFrame size={120} color="#FDFBEF" opacity={0.03} className="absolute bottom-16 left-10 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-15 hidden lg:block" />
            <CornerOrnament size={50} color="#BC264B" position="bottom-right" className="absolute bottom-8 right-8 opacity-15 hidden lg:block" />
            <CircuitLines width={280} height={80} color="#BC264B" opacity={0.03} className="absolute top-1/2 left-0 hidden xl:block" />
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8E0935" }} />

            <Container>
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FlowLine width={40} height={2} color="#BC264B" />
                            <span className="text-xs tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Процесс' : 'Process'}
                            </span>
                            <FlowLine width={40} height={2} color="#BC264B" />
                        </div>
                        <h2 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: "#FDFBEF" }}>
                            {lang === 'ru'
                                ? <>{`Как мы `}<span style={{ color: "#BC264B" }}>{`работаем`}</span></>
                                : <>{`How We `}<span style={{ color: "#BC264B" }}>{`Work`}</span></>
                            }
                        </h2>
                        <p className="max-w-xl mx-auto text-sm leading-relaxed"
                            style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Комплексные кадровые решения, обеспечивающие связь талантов Индии с потребностями России'
                                : 'Comprehensive manpower solutions bridging India\'s talent with Russia\'s demand'
                            }
                        </p>
                    </div>
                </ScrollReveal>

                {/* Steps — big cards with icons */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
                    {STEPS.map((step, i) => (
                        <StaggerItem key={i} variant="fadeUp">
                            <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
                                style={{ background: "rgba(253,251,239,0.04)", border: "1px solid rgba(253,251,239,0.08)" }}>

                                {/* Top accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                                    style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B", opacity: 0.3 }} />
                                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }} />

                                <div className="p-8">
                                    {/* Number + Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                            style={{ background: i % 2 === 0 ? "#8E0935" : "#BC264B" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FDFBEF" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                                            </svg>
                                        </div>
                                        <span className="text-4xl font-black"
                                            style={{ color: "rgba(253,251,239,0.04)", fontFamily: "var(--font-inter)" }}>
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-black mb-3 transition-colors group-hover:text-[#BC264B]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#FDFBEF" }}>
                                        {lang === 'ru' ? step.titleRu : step.titleEn}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed"
                                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(253,251,239,0.35)" }}>
                                        {lang === 'ru' ? step.descRu : step.descEn}
                                    </p>
                                </div>

                                {/* Corner ornament */}
                                <CornerOrnament size={18} color={i % 2 === 0 ? "#8E0935" : "#BC264B"} position="bottom-right" className="absolute bottom-3 right-3 opacity-15" />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom stats strip */}
                <ScrollReveal variant="fadeUp" delay={0.4}>
                    <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-6 rounded-xl"
                        style={{ background: "rgba(142,9,53,0.12)", border: "1px solid rgba(142,9,53,0.2)" }}>
                        <p className="text-sm font-semibold text-center lg:text-left"
                            style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'От поиска до развёртывания — мы берём на себя полный цикл подбора персонала'
                                : 'From sourcing to deployment — we handle the complete recruitment lifecycle'
                            }
                        </p>
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-black" style={{ color: "#BC264B", fontFamily: "var(--font-inter)" }}>500+</p>
                                <p className="text-[10px] uppercase tracking-wide font-bold" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Работников в России' : 'Workers in Russia'}
                                </p>
                            </div>
                            <div className="w-px h-10" style={{ background: "rgba(253,251,239,0.1)" }} />
                            <div className="text-center">
                                <p className="text-3xl font-black" style={{ color: "#8E0935", fontFamily: "var(--font-inter)" }}>20+</p>
                                <p className="text-[10px] uppercase tracking-wide font-bold" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Лет опыта' : 'Years Experience'}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}
