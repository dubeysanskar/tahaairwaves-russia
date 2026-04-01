"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function BestRecruitmentAgenciesIndia() {
    return (
        <SEOPageTemplate
            heroTitle="Лучшие рекрутинговые агентства в Индии"
            heroDescription="Индия является ведущим источником квалифицированной и полуквалифицированной рабочей силы для мировых отраслей. Выбор правильного партнера по подбору персонала обеспечивает качественный найм и бесперебойную работу."
            ctaText="Связаться с агентством"
            sections={[
                {
                    title: "Taha Airwaves выделяется благодаря",
                    type: "cards",
                    items: [
                        { title: "Государственное одобрение", desc: "Лицензия RA: B-3260/DEL/COM/100/5/11259/2025, выданная Министерством иностранных дел Индии." },
                        { title: "Международный опыт найма", desc: "Более 500 работников успешно размещены на международных проектах. Опыт работы с 21+ странами." },
                        { title: "Сильная база кандидатов", desc: "Постоянно обновляемая база тысяч проверенных и квалифицированных кандидатов." },
                    ],
                },
            ]}
            ctaTitle="Выберите Taha Airwaves — лучшее кадровое агентство"
            ctaDescription="+7 985 074-88-28 | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/best-recruitment-agencies-india")}
        />
    )
}
