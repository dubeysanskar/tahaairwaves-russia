"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function BestStaffingAgenciesIndia() {
    return (
        <SEOPageTemplate
            heroTitle="Ведущее кадровое агентство в Индии"
            heroDescription="Taha Airwaves предоставляет гибкие решения по подбору персонала для компаний, стремящихся масштабировать свою рабочую силу на международном уровне. Мы специализируемся на аутсорсинге персонала, контрактном найме и массовом подборе."
            ctaText="Запросить решение"
            sections={[
                {
                    title: "Наши решения адаптированы",
                    type: "text",
                    paragraphs: [
                        "Наши решения адаптированы под отраслевые требования, обеспечивая соответствие нормам и эффективность. Мы работаем с компаниями в России, ОАЭ и других странах.",
                    ],
                },
                {
                    title: "Услуги Taha Airwaves",
                    type: "cards",
                    items: [
                        { title: "Аутсорсинг персонала", desc: "Полное управление кадрами для международных работодателей." },
                        { title: "Контрактный найм", desc: "Подбор работников на краткосрочные и долгосрочные проекты." },
                        { title: "Массовый подбор", desc: "Размещение больших партий работников для крупных проектов." },
                    ],
                },
            ]}
            ctaTitle="Нужны кадровые решения?"
            ctaDescription="+7 985 074-88-28 | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/seo/best-staffing-agencies-india")}
        />
    )
}
