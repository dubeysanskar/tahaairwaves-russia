"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function RecruitmentOfficesIndia() {
    return (
        <SEOPageTemplate
            heroTitle="Наша сеть подбора персонала в Индии"
            heroDescription="Taha Airwaves работает через сильную сеть рекрутинговых офисов по всей Индии для поиска лучших специалистов для международных рынков."
            ctaText="Связаться с офисом"
            sections={[
                {
                    title: "Наши офисы обеспечивают",
                    type: "cards",
                    items: [
                        { title: "Поиск местных специалистов", desc: "Подбор из основных центров рабочей силы Индии для эффективного удовлетворения мирового спроса." },
                        { title: "Проверку навыков", desc: "Профессиональное тестирование через сертифицированные центры перед отправкой." },
                        { title: "Быстрый процесс подбора", desc: "Оптимизированный процесс рекрутинга с минимальными сроками." },
                    ],
                },
                {
                    title: "Офисы Taha Airwaves",
                    type: "contact",
                    items: [
                        "📍 Главный офис: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025",
                        "📍 Москва: Сколково, ул. Малевича, 2к4, 143026",
                        "📞 Индия: +91-9315226961",
                        "📞 Москва: +7 985 074-88-28",
                    ],
                },
            ]}
            ctaTitle="Свяжитесь с нашим офисом"
            ctaDescription="info@tahaairwaves.com | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/seo/recruitment-offices-india")}
        />
    )
}
