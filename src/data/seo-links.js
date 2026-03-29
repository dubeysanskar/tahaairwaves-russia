// All SEO landing page internal links for cross-linking
export const SEO_INTERNAL_LINKS = [
    { href: "/seo/indian-manpower-russia", label: "Найм работников из Индии в Россию" },
    { href: "/seo/recruitment-agency-russia", label: "Кадровое агентство Россия–Индия" },
    { href: "/seo/construction-workers-russia", label: "Строительные рабочие из Индии" },
    { href: "/seo/fast-workforce-deployment-russia", label: "Быстрое размещение персонала" },
    { href: "/seo/visa-work-permit-russia", label: "Визовое оформление рабочей визы" },
    { href: "/seo/hire-indian-workers-moscow", label: "Найм работников из Индии в Москве" },
    { href: "/seo/hire-indian-workers-saint-petersburg", label: "Найм работников в Санкт-Петербурге" },
    { href: "/seo/indian-workers-for-russia", label: "Индийские работники для России" },
    { href: "/seo/indian-manpower-agency-contact", label: "Контакты кадровых агентств Индии" },
    { href: "/seo/recruitment-offices-india", label: "Рекрутинговые офисы в Индии" },
    { href: "/seo/best-recruitment-agencies-india", label: "Лучшие рекрутинговые агентства Индии" },
    { href: "/seo/best-staffing-agencies-india", label: "Лучшие кадровые агентства Индии" },
    { href: "/seo/hire-indian-workers-lyubertsy", label: "Найм работников в Люберцах" },
    { href: "/seo/hire-indian-workers-korolyov", label: "Найм работников в Королёве" },
    { href: "/seo/hire-indian-workers-krasnogorsk", label: "Найм работников в Красногорске" },
    { href: "/seo/hire-indian-workers-zheleznodorozhny", label: "Найм работников в Железнодорожном" },
    { href: "/seo/hire-indian-workers-odintsovo", label: "Найм работников в Одинцово" },
    { href: "/seo/hire-indian-workers-zhukovsky", label: "Найм работников в Жуковском" },
    { href: "/seo/hire-indian-workers-kolomna", label: "Найм работников в Коломне" },
    { href: "/seo/hire-indian-workers-mozhaysk", label: "Найм работников в Можайске" },
    { href: "/seo/hire-indian-workers-mytishchi", label: "Найм работников в Мытищах" },
]

// Get links excluding the current page
export function getLinksExcluding(currentHref) {
    return SEO_INTERNAL_LINKS.filter(l => l.href !== currentHref)
}
