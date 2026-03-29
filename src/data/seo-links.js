// All SEO landing page internal links for cross-linking
export const SEO_INTERNAL_LINKS = [
    { href: "/indian-manpower-russia", label: "Найм работников из Индии в Россию" },
    { href: "/recruitment-agency-russia", label: "Кадровое агентство Россия–Индия" },
    { href: "/construction-workers-russia", label: "Строительные рабочие из Индии" },
    { href: "/fast-workforce-deployment-russia", label: "Быстрое размещение персонала" },
    { href: "/visa-work-permit-russia", label: "Визовое оформление рабочей визы" },
    { href: "/hire-indian-workers-moscow", label: "Найм работников из Индии в Москве" },
    { href: "/hire-indian-workers-saint-petersburg", label: "Найм работников в Санкт-Петербурге" },
    { href: "/indian-workers-for-russia", label: "Индийские работники для России" },
    { href: "/indian-manpower-agency-contact", label: "Контакты кадровых агентств Индии" },
    { href: "/recruitment-offices-india", label: "Рекрутинговые офисы в Индии" },
    { href: "/best-recruitment-agencies-india", label: "Лучшие рекрутинговые агентства Индии" },
    { href: "/best-staffing-agencies-india", label: "Лучшие кадровые агентства Индии" },
    { href: "/hire-indian-workers-lyubertsy", label: "Найм работников в Люберцах" },
    { href: "/hire-indian-workers-korolyov", label: "Найм работников в Королёве" },
    { href: "/hire-indian-workers-krasnogorsk", label: "Найм работников в Красногорске" },
    { href: "/hire-indian-workers-zheleznodorozhny", label: "Найм работников в Железнодорожном" },
    { href: "/hire-indian-workers-odintsovo", label: "Найм работников в Одинцово" },
    { href: "/hire-indian-workers-zhukovsky", label: "Найм работников в Жуковском" },
    { href: "/hire-indian-workers-kolomna", label: "Найм работников в Коломне" },
    { href: "/hire-indian-workers-mozhaysk", label: "Найм работников в Можайске" },
    { href: "/hire-indian-workers-mytishchi", label: "Найм работников в Мытищах" },
]

// Get links excluding the current page
export function getLinksExcluding(currentHref) {
    return SEO_INTERNAL_LINKS.filter(l => l.href !== currentHref)
}
