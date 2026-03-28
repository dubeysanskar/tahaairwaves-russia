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
        titleEn: "Requirement Discussion", titleRu: "Обсуждение требований",
        descEn: "Share your manpower needs — role, quantity, location — and our team creates a tailored recruitment plan.",
        descRu: "Сообщите нам о ваших кадровых потребностях — роль, количество, локация.",
        icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
        num: "02",
        titleEn: "Candidate Shortlisting", titleRu: "Подбор кандидатов",
        descEn: "We source, verify, and shortlist candidates through structured interviews, skill assessments, and background checks.",
        descRu: "Мы находим, проверяем и отбираем кандидатов через собеседования и оценку навыков.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
    {
        num: "03",
        titleEn: "Interviews & Selection", titleRu: "Собеседования и отбор",
        descEn: "Client-facing interviews and final candidate selection to ensure the perfect match for your requirements.",
        descRu: "Проведение интервью с заказчиком и финальный отбор кандидатов.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
        num: "04",
        titleEn: "Local Support in Moscow", titleRu: "\u041c\u0435\u0441\u0442\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435",
        descEn: "Our Moscow office provides on-ground coordination, worker support, issue resolution, and direct employer communication.",
        descRu: "\u041d\u0430\u0448 \u043e\u0444\u0438\u0441 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0446\u0438\u044e, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u043e\u0432 \u0438 \u0441\u0432\u044f\u0437\u044c \u0441 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044f\u043c\u0438.",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
        num: "05",
        titleEn: "Deployment to Russia", titleRu: "Размещение в России",
        descEn: "Pre-departure orientation, flight arrangements, airport transfers, accommodation setup, and continuous post-deployment support.",
        descRu: "Предвыездная ориентация, организация перелёта, размещение и постоянный мониторинг.",
        icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
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
                                ? <>{`Наш процесс `}<span style={{ color: "#8A0029" }}>{`найма`}</span></>
                                : <>{`Our Hiring `}<span style={{ color: "#8A0029" }}>{`Process`}</span></>
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
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" staggerDelay={0.12}>
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

                {/* Bottom stats strip */}
                <ScrollReveal variant="fadeUp" delay={0.4}>
                    <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-6 rounded-2xl"
                        style={{ background: "rgba(138,0,41,0.06)", border: "1px solid rgba(138,0,41,0.1)" }}>
                        <p className="text-sm font-semibold text-center lg:text-left"
                            style={{ color: "rgba(38,38,38,0.5)", fontFamily: "var(--font-poppins)" }}>
                            {lang === 'ru'
                                ? 'От поиска до развёртывания — мы берём на себя полный цикл подбора персонала'
                                : 'From sourcing to deployment — we handle the complete recruitment lifecycle'
                            }
                        </p>
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-black" style={{ color: "#8A0029", fontFamily: "var(--font-inter)" }}>500+</p>
                                <p className="text-[10px] uppercase tracking-wide font-bold" style={{ color: "rgba(38,38,38,0.35)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Работников размещено' : 'Workers Deployed'}
                                </p>
                            </div>
                            <div className="w-px h-10" style={{ background: "rgba(138,0,41,0.15)" }} />
                            <div className="text-center">
                                <p className="text-3xl font-black" style={{ color: "#D32F2F", fontFamily: "var(--font-inter)" }}>20+</p>
                                <p className="text-[10px] uppercase tracking-wide font-bold" style={{ color: "rgba(38,38,38,0.35)", fontFamily: "var(--font-inter)" }}>
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
