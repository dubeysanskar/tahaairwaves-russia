'use client'

import Link from "next/link"
import { useLanguage } from "@/context/language"
import { DotGrid, CornerOrnament, FlowLine, CircuitLines, GlobeWireframe } from "@/components/decorators/SVGDecorations"

export default function BlogDetailContent({ post }) {
    const { lang } = useLanguage()

    const title = lang === 'ru' && post.title_ru ? post.title_ru : post.title
    const category = lang === 'ru' && post.category_ru ? post.category_ru : post.category
    const readTime = lang === 'ru' && post.readTime_ru ? post.readTime_ru : post.readTime
    const content = lang === 'ru' && post.content_ru ? post.content_ru : post.content

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "#1A1A1A" }}>
                {/* SVG Decorations */}
                <DotGrid rows={4} cols={4} color="#FDFBEF" opacity={0.03} spacing={22} className="absolute top-8 right-8 hidden lg:block" />
                <CornerOrnament size={50} color="#BC264B" position="top-left" className="absolute top-8 left-8 opacity-15 hidden lg:block" />
                <GlobeWireframe size={250} color="#FDFBEF" accentColor="#BC264B" opacity={0.02} className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 hidden lg:block" />

                <div className="max-w-[900px] mx-auto px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 hover:text-[#BC264B] transition-colors"
                        style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-inter)" }}>
                        ← {lang === 'ru' ? 'Назад к блогу' : 'Back to Blog'}
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm tracking-widest uppercase font-bold px-3 py-1.5 rounded"
                            style={{ background: "rgba(188,38,75,0.2)", color: "#BC264B", fontFamily: "var(--font-inter)" }}>
                            {category}
                        </span>
                        <span className="text-sm" style={{ color: "rgba(253,251,239,0.4)", fontFamily: "var(--font-poppins)" }}>
                            {post.date} · {readTime}
                        </span>
                    </div>
                    <h1 style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                        fontWeight: 900,
                        color: "#FDFBEF",
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                    }}>
                        {title}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section style={{ background: "#FDFBEF" }} className="py-16 relative overflow-hidden">
                <CircuitLines width={200} height={60} color="#8E0935" opacity={0.02} className="absolute top-20 right-0 hidden lg:block" />
                <CornerOrnament size={40} color="#BC264B" position="bottom-left" className="absolute bottom-12 left-8 opacity-10 hidden lg:block" />

                <div className="max-w-[800px] mx-auto px-6 relative z-10">
                    <div className="prose prose-lg max-w-none">
                        {content.split('\n\n').map((para, i) => {
                            if (para.startsWith('**') && para.endsWith('**')) {
                                return <h2 key={i} style={{ fontFamily: "var(--font-inter)", fontSize: "1.5rem", fontWeight: 900, color: "#1A1A1A", margin: "32px 0 12px" }}>{para.replace(/\*\*/g, '')}</h2>
                            }
                            if (para.startsWith('- ')) {
                                return (
                                    <ul key={i} style={{ margin: "12px 0", paddingLeft: "20px" }}>
                                        {para.split('\n').map((item, j) => (
                                            <li key={j} style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, marginBottom: "4px" }}>
                                                {item.replace('- ', '')}
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                            const parts = para.split(/(\*\*.*?\*\*)/g)
                            return (
                                <p key={i} style={{ fontFamily: "var(--font-poppins)", fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, margin: "16px 0" }}>
                                    {parts.map((part, j) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={j} style={{ color: "#1A1A1A" }}>{part.replace(/\*\*/g, '')}</strong>
                                        }
                                        return part
                                    })}
                                </p>
                            )
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center p-10 rounded-lg relative overflow-hidden" style={{ background: "#8E0935" }}>
                        <DotGrid rows={3} cols={3} color="#FDFBEF" opacity={0.06} spacing={20} className="absolute top-4 right-4" />
                        <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "1.8rem", fontWeight: 900, color: "#FDFBEF", marginBottom: "12px" }}>
                            {lang === 'ru' ? 'Нужны кадровые решения?' : 'Need Manpower Solutions?'}
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "rgba(253,251,239,0.7)", marginBottom: "20px" }}>
                            {lang === 'ru'
                                ? 'Свяжитесь с Taha Airwaves для надёжного развёртывания персонала в России.'
                                : 'Contact Taha Airwaves for reliable, compliant workforce deployment to Russia.'}
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm font-bold uppercase tracking-[0.1em]"
                            style={{ background: "#FDFBEF", color: "#8E0935", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Связаться' : 'Get in Touch'}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
