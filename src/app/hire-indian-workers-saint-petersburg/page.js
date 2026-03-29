"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function HireIndianWorkersSaintPetersburg() {
    return (
        <SEOPageTemplate
            heroTitle="Надежная рабочая сила из Индии для Санкт-Петербурга"
            heroDescription="Мы предоставляем обученных и опытных работников из Индии для компаний в Санкт-Петербурге. Наши решения по рабочей силе идеально подходят для таких отраслей, как строительство, производство, логистика и гостиничный бизнес."
            ctaText="Заказать работников"
            sections={[
                {
                    title: "Полный цикл подбора для Санкт-Петербурга",
                    type: "text",
                    paragraphs: [
                        "Мы берем на себя весь процесс — от подбора кандидатов до оформления виз и их отправки, обеспечивая простой и удобный процесс найма.",
                    ],
                },
                {
                    title: "Доступные категории работников",
                    type: "list",
                    items: ["Строительные рабочие и разнорабочие", "Водители (легковые и грузовые)", "Рабочие фабрик и помощники", "Уборщики и обслуживающий персонал", "Складские и логистические работники", "Сварщики и электрики"],
                },
            ]}
            ctaTitle="Нужны работники в Санкт-Петербурге?"
            ctaDescription="+7 985 074-88-28 | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/hire-indian-workers-saint-petersburg")}
        />
    )
}
