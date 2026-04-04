import ResumeBuilder from "@/components/cv-builder"

export const metadata = {
    title: "Конструктор резюме | CV Builder | Taha Airwaves",
    description: "Создайте профессиональное резюме бесплатно. Заполните форму, просмотрите в реальном времени и скачайте в формате PDF. Build your professional resume for free.",
    keywords: [
        "конструктор резюме",
        "создать резюме бесплатно",
        "CV builder",
        "resume builder",
        "бесплатное резюме онлайн",
        "скачать резюме PDF",
        "Taha Airwaves CV",
    ],
    openGraph: {
        title: "Конструктор резюме | CV Builder | Taha Airwaves",
        description: "Создайте профессиональное резюме бесплатно и скачайте в PDF.",
        url: "https://tahaairwaves.ru/cv-builder",
    },
    alternates: {
        canonical: "https://tahaairwaves.ru/cv-builder",
    },
}

export default function CVBuilderPage() {
    return <ResumeBuilder />
}
