'use client'

import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const BLOG_POSTS = [
    {
        slug: "russia-top-destination-indian-workers",
        title: "Why Russia is Becoming a Top Destination for Indian Workers",
        excerpt: "As Russia expands its infrastructure and industrial sectors, the demand for professional Indian manpower continues to surge. Learn about growing opportunities.",
        date: "Mar 15, 2026",
        category: "Market Insights",
    },
    {
        slug: "overseas-employment-documentation-visa-guide",
        title: "Complete Guide to Overseas Employment: Documentation & Visa Process",
        excerpt: "A step-by-step walkthrough of the documentation, emigration clearance, and visa processing required for deployment to Russia.",
        date: "Mar 10, 2026",
        category: "Guides",
    },
    {
        slug: "trade-testing-quality-manpower",
        title: "How Trade Testing Ensures Quality Manpower for Russian Employers",
        excerpt: "Understanding the rigorous testing and verification process that guarantees only qualified, job-ready workers reach Russian employers.",
        date: "Mar 5, 2026",
        category: "Industry",
    },
]

const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
    })
}

export default function BlogPreview() {
    return (
        <section className="py-20" style={{ background: "#FDFBEF" }}>
            <Container>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6" style={{ borderBottom: "1px solid rgba(142,9,53,0.15)" }}>
                        <div>
                            <div className="w-14 h-1 rounded-full mb-4" style={{ background: "#8E0935" }} />
                            <h2 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#1a0a10" }}>
                                Latest <span className="italic" style={{ color: "#8E0935" }}>Insights</span>
                            </h2>
                            <p className="mt-2" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#6B7280" }}>
                                Stay updated with industry trends, deployment guides, and Russian market insights
                            </p>
                        </div>
                        <Link href="/blog">
                            <button className="px-5 py-2.5 rounded-full text-xs tracking-[0.12em] uppercase font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 hover:bg-[#8E0935] hover:text-white hover:border-[#8E0935]"
                                style={{ background: "transparent", color: "#1a0a10", border: "1px solid rgba(26,10,16,0.2)", fontFamily: "var(--font-lato)" }}>
                                View All Articles
                                <MdArrowOutward size={14} />
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BLOG_POSTS.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                custom={i}
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.08)" }}>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs tracking-widest uppercase font-bold" style={{ color: "#8E0935", fontFamily: "var(--font-lato)" }}>
                                                {post.category}
                                            </span>
                                            <span className="text-xs" style={{ color: "#9CA3AF", fontFamily: "var(--font-poppins)" }}>
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium leading-snug group-hover:text-[#8E0935] transition-colors"
                                            style={{ fontFamily: "var(--font-poppins)", color: "#1a0a10" }}>
                                            {post.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-poppins)", color: "#6B7280" }}>
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#8E0935", fontFamily: "var(--font-poppins)" }}>
                                            Read More
                                            <MdArrowOutward size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
