"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function Page() {
    return (
        <SEOPageTemplate
            heroTitle="Найм работников из Индии в Одинцово"
            heroDescription="Taha Airwaves предоставляет квалифицированных и неквалифицированных работников из Индии для бизнеса в Одинцово. Мы специализируемся на поставке рабочей силы для строительного, промышленного и сервисного секторов."
            ctaText="Заказать работников"
            sections={[
                { title: "Наш процесс подбора обеспечивает", type: "list", items: ["Проверенных и обученных кандидатов", "Быстрые сроки подбора", "Полную визовую и документальную поддержку"] },
                { title: "Доступные категории", type: "list", items: ["Строительные рабочие и разнорабочие", "Водители легковых и грузовых", "Рабочие фабрик и помощники", "Уборщики и обслуживающий персонал", "Складские и логистические работники"] },
            ]}
            ctaTitle="Мы помогаем компаниям снижать затраты на найм"
            ctaDescription="+7 985 074-88-28 | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/seo/hire-indian-workers-odintsovo")}
        />
    )
}
