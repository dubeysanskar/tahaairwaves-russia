'use client'

import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal"
import { CornerOrnament } from "@/components/decorators/SVGDecorations"
import {
    ConcentricCircles, DotMatrix, StarBurst, HexGrid, ArrowDown, WavyLines, FlowingCurves
} from "@/components/decorators/SVGIllustrations"

const STEPS = [
    {
        num: "01",
        titleEn: "Requirement Analysis", titleRu: "Анализ требований",
        descEn: "Understanding your workforce needs, job roles, and project requirements to ensure the right hiring strategy.",
        descRu: "Изучение ваших кадровых потребностей, должностей и требований проекта для формирования правильной стратегии найма.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
        num: "02",
        titleEn: "Sourcing & Screening", titleRu: "Поиск и отбор",
        descEn: "We source candidates from India's top talent pools and conduct strict screening and background verification.",
        descRu: "Мы подбираем кандидатов из лучших кадровых резервов Индии и проводим строгий отбор и проверку биографий.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
        num: "03",
        titleEn: "Skill Assessment", titleRu: "Оценка навыков",
        descEn: "Trade testing and practical evaluations to ensure candidates meet industry standards and job expectations.",
        descRu: "Профессиональное тестирование и практическая оценка для соответствия отраслевым стандартам и требованиям.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
        num: "04",
        titleEn: "Documentation & Visa Processing", titleRu: "Документация и визовое оформление",
        descEn: "Complete handling of visa processing, legal compliance, and documentation for smooth international hiring.",
        descRu: "Полное визовое оформление, юридическое соответствие и документация для бесперебойного международного найма.",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
        num: "05",
        titleEn: "Deployment & Travel Coordination", titleRu: "Размещение и координация",
        descEn: "Pre-departure briefing, travel arrangements, and seamless deployment to your project location.",
        descRu: "Предвыездной инструктаж, организация поездки и бесперебойное размещение на объекте проекта.",
        icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    },
    {
        num: "06",
        titleEn: "Ongoing Support & Transparency", titleRu: "Постоянная поддержка и прозрачность",
        descEn: "Continuous support with clear communication, reporting, and zero hidden charges throughout the process.",
        descRu: "Постоянная поддержка с чёткой коммуникацией, отчётностью и без скрытых платежей на протяжении всего процесса.",
        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    },
]

export default function HowItWorks() {
    const { lang } = useLanguage()

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* ═══ SVG illustrations — z-[1], behind content ═══ */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                {/* LEFT SIDE — circular shapes */}
                <ConcentricCircles size={300} opacity={0.12} className="absolute -left-16 top-[8%] hidden lg:block" />
                <StarBurst size={160} rays={14} opacity={0.10} className="absolute left-[3%] bottom-[15%] hidden xl:block" />
                <DotMatrix rows={5} cols={4} spacing={18} radius={2} opacity={0.10} className="absolute top-10 left-10 hidden lg:block" />

                {/* RIGHT SIDE — arrows, curves, hex */}
                <ArrowDown size={55} opacity={0.14} className="absolute right-[6%] top-[35%] hidden xl:block" />
                <FlowingCurves width={180} height={240} opacity={0.08} className="absolute top-[15%] right-[1%] hidden xl:block" />
                <HexGrid width={180} height={140} opacity={0.09} className="absolute bottom-[8%] right-[4%] hidden xl:block" />
                <WavyLines width={1440} height={50} opacity={0.06} className="absolute top-[45%] left-0 w-full hidden lg:block" />

                <CornerOrnament size={50} color="#D32F2F" position="top-left" className="absolute top-8 left-8 opacity-15" />
                <CornerOrnament size={50} color="#D32F2F" position="bottom-right" className="absolute bottom-8 right-8 opacity-15" />
            </div>

            {/* Top accent strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] z-[2]" style={{ background: "#8A0029" }} />

            <Container className="relative z-10">
                {/* Header */}
                <ScrollReveal variant="fadeUp">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-[2px] w-10" style={{ background: "#D32F2F" }} />
                            <span className="text-xs tracking-[0.2em] uppercase font-bold"
                                style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Процесс' : 'Process'}
                            </span>
                            <div className="h-[2px] w-10" style={{ background: "#D32F2F" }} />
                        </div>
                        <h2 className="font-black tracking-tight mb-4"
                            style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", color: "#262626" }}>
                            {lang === 'ru'
                                ? <>{`Наш процесс `}<span style={{ color: "#8A0029" }}>{`рекрутинга`}</span></>
                                : <>{`Our Recruitment `}<span style={{ color: "#8A0029" }}>{`Process`}</span></>
                            }
                        </h2>
                        <p className="max-w-xl mx-auto text-sm leading-relaxed"
                            style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'Комплексные кадровые решения, обеспечивающие связь талантов Индии с потребностями России'
                                : 'Comprehensive manpower solutions bridging India\'s talent with Russia\'s demand'
                            }
                        </p>
                    </div>
                </ScrollReveal>

                {/* Steps — light themed cards */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
                    {STEPS.map((step, i) => (
                        <StaggerItem key={i} variant="fadeUp">
                            <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full"
                                style={{ background: "#FFFFFF", border: "1px solid rgba(138,0,41,0.06)" }}>

                                {/* Top accent */}
                                <div className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                                    style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F", opacity: 0.3 }} />
                                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }} />

                                <div className="p-8">
                                    {/* Number + Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                                            style={{ background: i % 2 === 0 ? "#8A0029" : "#D32F2F" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                                            </svg>
                                        </div>
                                        <span className="text-4xl font-black"
                                            style={{ color: "rgba(138,0,41,0.06)", fontFamily: "var(--font-inter)" }}>
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-black mb-3 transition-colors group-hover:text-[#D32F2F]"
                                        style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                        {lang === 'ru' ? step.titleRu : step.titleEn}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed"
                                        style={{ fontFamily: "var(--font-poppins)", color: "rgba(38,38,38,0.5)" }}>
                                        {lang === 'ru' ? step.descRu : step.descEn}
                                    </p>
                                </div>

                                {/* Corner ornament */}
                                <CornerOrnament size={18} color={i % 2 === 0 ? "#8A0029" : "#D32F2F"} position="bottom-right" className="absolute bottom-3 right-3 opacity-15" />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom feature strip */}
                <ScrollReveal variant="fadeUp" delay={0.4}>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4 px-8 py-6 rounded-2xl"
                            style={{ background: "rgba(138,0,41,0.06)", border: "1px solid rgba(138,0,41,0.1)" }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: "#8A0029" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                    {lang === 'ru' ? 'Taha Airwaves: Нацелены на скорость' : 'Taha Airwaves: Driven by Speed'}
                                </h4>
                                <p className="text-sm" style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                                    {lang === 'ru' ? 'Быстрый наём и размещение без ущерба для качества.' : 'Fast hiring and deployment without compromising quality.'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 px-8 py-6 rounded-2xl"
                            style={{ background: "rgba(138,0,41,0.06)", border: "1px solid rgba(138,0,41,0.1)" }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: "#D32F2F" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-1" style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                                    {lang === 'ru' ? 'Taha Airwaves: Ориентация на качество' : 'Taha Airwaves: Focused on Quality'}
                                </h4>
                                <p className="text-sm" style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                                    {lang === 'ru' ? 'Квалифицированные, проверенные и готовые к работе кандидаты — каждый раз.' : 'Skilled, verified, and job-ready candidates every time.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    )
}
