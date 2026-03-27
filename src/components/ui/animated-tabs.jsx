'use client'

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

/**
 * AnimatedTabs — Taha Airwaves brand.
 * Desktop: wrapping tabs. Mobile: horizontal scroll with snap.
 */
function AnimatedTabs({ tabs = [], defaultTab, className = "" }) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)
    const scrollRef = useRef(null)
    const activeRef = useRef(null)

    // Auto-scroll to active tab on mobile
    useEffect(() => {
        if (activeRef.current && scrollRef.current) {
            const container = scrollRef.current
            const el = activeRef.current
            const scrollLeft = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        }
    }, [activeTab])

    if (!tabs?.length) return null

    return (
        <div className={`w-full flex flex-col gap-y-2 ${className}`}>
            {/* Tab buttons — scrollable on mobile, wrapping on desktop */}
            <div
                ref={scrollRef}
                className="flex gap-1.5 p-1.5 rounded-xl overflow-x-auto scrollbar-hide md:flex-wrap"
                style={{
                    background: "rgba(138,0,41,0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitOverflowScrolling: "touch",
                    scrollSnapType: "x mandatory",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={activeTab === tab.id ? activeRef : null}
                        onClick={() => setActiveTab(tab.id)}
                        className="relative px-4 py-2 text-xs md:text-sm font-bold rounded-lg outline-none transition-colors cursor-pointer whitespace-nowrap flex-shrink-0"
                        style={{
                            color: activeTab === tab.id ? "#FFFFFF" : "#262626",
                            fontFamily: "var(--font-inter)",
                            scrollSnapAlign: "center",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="active-service-tab"
                                className="absolute inset-0 rounded-lg"
                                style={{ background: "#8A0029", boxShadow: "0 4px 16px rgba(138,0,41,0.25)" }}
                                transition={{ type: "spring", duration: 0.5 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="rounded-xl overflow-hidden"
                style={{
                    background: "rgba(138,0,41,0.04)",
                    border: "1px solid rgba(138,0,41,0.08)",
                    minHeight: "280px",
                }}>
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(6px)" }}
                            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.97, x: -8, filter: "blur(6px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="p-4 md:p-5"
                        >
                            {tab.content}
                        </motion.div>
                    ) : null
                )}
            </div>
        </div>
    )
}

export { AnimatedTabs }
