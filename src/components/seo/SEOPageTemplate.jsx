"use client"
import Link from "next/link"

export default function SEOPageTemplate({
    heroTitle,
    heroDescription,
    ctaText = "Получить предложение",
    sections = [],
    ctaTitle = "Готовы нанять работников из Индии?",
    ctaDescription = "Свяжитесь с Taha Airwaves для бесплатной консультации. Телефон: +7 985 074-88-28 | Email: info@tahaairwaves.ru",
    ctaButtonText = "Связаться с нами",
    internalLinks = [],
}) {
    return (
        <main style={{ fontFamily: "var(--font-inter)", background: "#F7F7F7", minHeight: "100vh" }}>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #8A0029 0%, #D32F2F 100%)",
                color: "#fff", padding: "140px 24px 80px", textAlign: "center"
            }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                        {heroTitle}
                    </h1>
                    <p style={{ fontSize: "1.15rem", opacity: 0.92, maxWidth: 700, margin: "0 auto 32px", lineHeight: 1.7 }}>
                        {heroDescription}
                    </p>
                    <Link href="/contact" style={{
                        display: "inline-block", background: "#fff", color: "#8A0029",
                        padding: "16px 40px", borderRadius: 8, fontWeight: 700, fontSize: "1.05rem", textDecoration: "none"
                    }}>
                        {ctaText}
                    </Link>
                </div>
            </section>

            {/* Content sections */}
            <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px" }}>
                {sections.map((sec, si) => (
                    <div key={si} style={{ marginBottom: 48 }}>
                        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1A1A1A", marginBottom: 24 }}>
                            {sec.title}
                        </h2>
                        {sec.type === "cards" && (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                                {sec.items.map((item, i) => (
                                    <div key={i} style={{
                                        background: "#fff", borderRadius: 12, padding: 24,
                                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                                        borderLeft: "4px solid #8A0029"
                                    }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#8A0029", marginBottom: 8 }}>{item.title}</h3>
                                        <p style={{ fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {sec.type === "list" && (
                            <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                                <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                                    {sec.items.map((item, i) => (
                                        <li key={i} style={{ padding: "10px 16px", background: "#F7F7F7", borderRadius: 8, fontSize: "0.95rem", fontWeight: 500, color: "#262626" }}>
                                            ✓ {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {sec.type === "text" && (
                            <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", lineHeight: 1.8, color: "#374151" }}>
                                {sec.paragraphs.map((p, i) => (
                                    <p key={i} style={{ marginBottom: i < sec.paragraphs.length - 1 ? 16 : 0 }}>{p}</p>
                                ))}
                            </div>
                        )}
                        {sec.type === "steps" && (
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {sec.items.map((step, i) => (
                                    <div key={i} style={{
                                        background: "#fff", borderRadius: 10, padding: "16px 24px",
                                        boxShadow: "0 1px 6px rgba(0,0,0,0.04)", fontSize: "1rem", fontWeight: 500, color: "#262626"
                                    }}>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        )}
                        {sec.type === "contact" && (
                            <div style={{ background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                                {sec.items.map((item, i) => (
                                    <p key={i} style={{ marginBottom: 8, fontSize: "1rem", color: "#262626", fontWeight: 500 }}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Internal links */}
                {internalLinks.length > 0 && (
                    <div style={{ marginBottom: 48 }}>
                        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1A1A1A", marginBottom: 24 }}>
                            Другие страницы
                        </h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 12 }}>
                            {internalLinks.map((link, i) => (
                                <Link key={i} href={link.href} style={{
                                    display: "block", padding: "14px 20px", background: "#fff", borderRadius: 10,
                                    boxShadow: "0 1px 6px rgba(0,0,0,0.04)", textDecoration: "none",
                                    color: "#8A0029", fontWeight: 600, fontSize: "0.95rem",
                                    border: "1px solid rgba(138,0,41,0.08)", transition: "all 0.2s"
                                }}>
                                    → {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div style={{
                    background: "linear-gradient(135deg, #262626 0%, #1A1A1A 100%)",
                    borderRadius: 16, padding: "48px 32px", textAlign: "center", color: "#fff"
                }}>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>{ctaTitle}</h2>
                    <p style={{ fontSize: "1rem", opacity: 0.85, marginBottom: 28, maxWidth: 600, margin: "0 auto 28px" }}>
                        {ctaDescription}
                    </p>
                    <Link href="/contact" style={{
                        display: "inline-block", background: "#D32F2F", color: "#fff",
                        padding: "14px 36px", borderRadius: 8, fontWeight: 700, textDecoration: "none"
                    }}>
                        {ctaButtonText}
                    </Link>
                </div>
            </section>
        </main>
    )
}
