'use client'

import Container from "@/components/container"
import { useLanguage } from "@/context/language"
import ScrollReveal from "@/components/animations/ScrollReveal"
import { DotGrid, Crosshair, GeometricFrame, CornerOrnament } from "@/components/decorators/SVGDecorations"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"

const TESTIMONIALS = [
    {
        name: "Алексей Петров",
        role_ru: "HR-директор, Строительный концерн · Россия",
        role_en: "HR Director, Construction Corp · Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Taha Airwaves предоставила именно то, что нам было нужно — квалифицированных работников, готовых к работе с первого дня. Их процесс рекрутинга профессионален и эффективен.",
        text_en: "Taha Airwaves delivered exactly what we needed — qualified workers ready to contribute from day one. Their recruitment process is professional and efficient.",
    },
    {
        name: "Дмитрий Волков",
        role_ru: "Операционный директор, Промышленная группа · Россия",
        role_en: "Operations Manager, Industrial Group · Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Мы работаем с Taha Airwaves с 2022 года, и качество предоставляемой рабочей силы неизменно высокое. Их процесс документооборота безупречен.",
        text_en: "We have been working with Taha Airwaves since 2022 and the quality of workforce they provide is consistently excellent. Their documentation process is seamless.",
    },
    {
        name: "Евгений Морозов",
        role_ru: "Директор проекта, Инфраструктурные решения · Москва",
        role_en: "Project Director, Infrastructure Solutions · Moscow",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Комплексная услуга от поиска до размещения — отличная. Они понимают требования соответствия и всегда выполняют в срок. Рекомендуем!",
        text_en: "Their end-to-end service from sourcing to deployment is outstanding. They understand compliance requirements and deliver on time, every time. Highly recommended!",
    },
    {
        name: "Ольга Сидорова",
        role_ru: "Менеджер по закупкам, Логистический центр · Санкт-Петербург",
        role_en: "Procurement Manager, Logistics Hub · St. Petersburg",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Нам нужно было 50 грузчиков за две недели — Taha Airwaves справились. Все документы оформлены, работники прибыли вовремя. Без лишних задержек.",
        text_en: "We needed 50 loading workers in two weeks — Taha Airwaves delivered. All paperwork done, workers arrived on time. No unnecessary delays.",
    },
    {
        name: "Андрей Козлов",
        role_ru: "Технический директор, Нефтегазовый сектор · Сибирь",
        role_en: "Technical Director, Oil & Gas Sector · Siberia",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Качество техников и сварщиков, которых нам предоставили — на уровне. Все прошли проверку квалификации. Будем продолжать сотрудничество.",
        text_en: "The quality of technicians and welders they provided is top-notch. All qualifications verified. We will continue working together.",
    },
    {
        name: "Марина Белова",
        role_ru: "Директор по персоналу, Гостиничная сеть · Москва",
        role_en: "HR Director, Hotel Chain · Moscow",
        flag: "https://flagcdn.com/w40/ru.png",
        text_ru: "Наши отели нуждались в надёжном клининговом персонале. Taha Airwaves обеспечили нас обученными работниками с полной документацией. Очень удобный процесс.",
        text_en: "Our hotels needed reliable housekeeping staff. Taha Airwaves supplied trained workers with full documentation. Very smooth process.",
    },
]

export default function Testimonials() {
    const { t, lang } = useLanguage()

    const items = TESTIMONIALS.map((item) => ({
        name: item.name,
        role: lang === 'ru' ? item.role_ru : item.role_en,
        text: lang === 'ru' ? item.text_ru : item.text_en,
        flag: item.flag,
    }))

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#FDFBEF" }}>
            {/* SVG Decorations */}
            <Crosshair size={80} color="#8E0935" accentColor="#BC264B" opacity={0.08} className="absolute top-12 right-12 hidden lg:block" />
            <DotGrid rows={4} cols={4} color="#8E0935" opacity={0.06} spacing={18} className="absolute bottom-10 left-10 hidden lg:block" />
            <GeometricFrame size={100} color="#8E0935" opacity={0.05} className="absolute top-20 left-8 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="top-left" className="absolute top-6 left-6 opacity-15 hidden lg:block" />
            <CornerOrnament size={40} color="#BC264B" position="bottom-right" className="absolute bottom-6 right-6 opacity-15 hidden lg:block" />

            <Container>
                <ScrollReveal variant="fadeUp" className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                        <div className="w-8 h-[2px]" style={{ background: "#8E0935" }} />
                        <div className="w-10 h-px" style={{ background: "rgba(142,9,53,0.2)" }} />
                    </div>
                    <h2 className="font-black tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1A1A1A" }}>
                        {t('testimonialsTitle')} <span style={{ color: "#8E0935" }}>{t('testimonialsTitleAccent')}</span>
                    </h2>
                    <p className="text-sm" style={{ fontFamily: "var(--font-poppins)", color: "#9CA3AF" }}>
                        {t('testimonialsSubtitle')}
                    </p>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.15}>
                    <StaggerTestimonials testimonials={items} />
                </ScrollReveal>
            </Container>
        </section>
    )
}
