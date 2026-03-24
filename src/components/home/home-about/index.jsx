'use client'

import Container from "@/components/container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language";

export default function HomeAbout() {
    const { t } = useLanguage()

    return (
        <section className="py-20" style={{ background: "#FFFFFF" }}>
            <Container>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-5 gap-10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="md:col-span-2">
                        <h2 className="text-xl md:text-2xl font-oswald font-medium italic uppercase" style={{ color: "#1a0a10" }}>
                            {t('aboutTitle')}
                        </h2>
                    </div>

                    <div className="space-y-12 col-span-3">
                        <div className="space-y-6">
                            <p className="text-xl md:text-3xl font-poppins font-medium" style={{ color: "#1a0a10" }}>
                                {t('aboutPara1')}
                            </p>
                            <p className="text-base md:text-lg font-poppins" style={{ color: "#6B7280" }}>
                                {t('aboutPara2')}
                            </p>
                        </div>

                        <div className="flex items-center gap-8">
                            <Link href="/about" className="group">
                                <button className="relative flex items-center gap-1 pb-[2px] cursor-pointer">
                                    <span className="text-sm md:text-lg font-poppins font-medium">
                                        {t('learnMore')}
                                    </span>
                                    <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                    <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-[0.3] origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ background: "#1a0a10" }}></span>
                                </button>
                            </Link>

                            <Link href="/contact" className="group">
                                <button className="relative flex items-center gap-1 pb-[2px] cursor-pointer">
                                    <span className="text-sm md:text-lg font-poppins font-medium">
                                        {t('getInTouch')}
                                    </span>
                                    <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                                    <span className="absolute left-0 bottom-0 h-[2px] w-full scale-x-[0.3] origin-left transition-transform duration-300 group-hover:scale-x-100" style={{ background: "#1a0a10" }}></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
