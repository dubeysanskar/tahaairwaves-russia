"use client"
import SEOPageTemplate from "@/components/seo/SEOPageTemplate"
import { getLinksExcluding } from "@/data/seo-links"

export default function IndianManpowerAgencyContact() {
    return (
        <SEOPageTemplate
            heroTitle="Контактные данные кадровых агентств Индии"
            heroDescription="Если вы хотите нанять квалифицированных работников из Индии, выбор правильного кадрового агентства имеет решающее значение. Taha Airwaves — это одобренное государством кадровое агентство, предоставляющее надежные решения по рабочей силе для России и международных рынков."
            ctaText="Связаться с нами"
            sections={[
                {
                    title: "Контактная информация Taha Airwaves",
                    type: "contact",
                    items: [
                        "📞 Офис в Индии: +91-9315226961",
                        "📞 Офис в Москве: +7 985 074-88-28",
                        "📧 Email: info@tahaairwaves.com",
                        "📧 Email (Россия): info@tahaairwaves.ru",
                        "📍 Индия: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025",
                        "📍 Москва: Сколково, ул. Малевича, 2к4, 143026",
                    ],
                },
                {
                    title: "Наши услуги",
                    type: "text",
                    paragraphs: [
                        "Мы предоставляем полный цикл поддержки при найме, включая поиск, оформление документов и отправку работников. Лицензия RA: B-3260/DEL/COM/100/5/11259/2025.",
                    ],
                },
            ]}
            ctaTitle="Свяжитесь с кадровым агентством Taha Airwaves"
            ctaDescription="+91-9315226961 | +7 985 074-88-28 | info@tahaairwaves.ru"
            internalLinks={getLinksExcluding("/indian-manpower-agency-contact")}
        />
    )
}
