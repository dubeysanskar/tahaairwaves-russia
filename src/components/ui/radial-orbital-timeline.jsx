'use client'

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * RadialOrbitalTimeline — adapted for Taha Airwaves brand.
 * Desktop: hover shows details (rotation continues smoothly).
 * Mobile: tap to toggle details.
 */
export default function RadialOrbitalTimeline({ timelineData }) {
    const [hoveredId, setHoveredId] = useState(null)
    const [tappedId, setTappedId] = useState(null)
    const [rotationAngle, setRotationAngle] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const containerRef = useRef(null)
    const orbitRef = useRef(null)

    // Detect mobile
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    // Continuous smooth rotation — never stops
    useEffect(() => {
        let animFrame
        let lastTime = performance.now()

        const animate = (now) => {
            const dt = now - lastTime
            lastTime = now
            // Slow down when hovering on desktop, normal speed otherwise
            const speed = (!isMobile && hoveredId !== null) ? 0.08 : 0.3
            setRotationAngle(prev => (prev + speed * (dt / 50)) % 360)
            animFrame = requestAnimationFrame(animate)
        }
        animFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animFrame)
    }, [hoveredId, isMobile])

    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setTappedId(null)
        }
    }

    const calculateNodePosition = (index, total) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360
        const radius = 180
        const radian = (angle * Math.PI) / 180
        const x = radius * Math.cos(radian)
        const y = radius * Math.sin(radian)
        const zIndex = Math.round(100 + 50 * Math.cos(radian))
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
        return { x, y, zIndex, opacity }
    }

    const activeId = isMobile ? tappedId : hoveredId

    return (
        <div
            ref={containerRef}
            onClick={handleContainerClick}
            className="w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center relative"
            style={{ minHeight: "420px" }}
        >
            <div
                ref={orbitRef}
                className="absolute w-full h-full flex items-center justify-center"
                style={{ perspective: "1000px" }}
            >
                {/* Center nucleus */}
                <div className="absolute w-14 h-14 rounded-full flex items-center justify-center z-10"
                    style={{ background: "linear-gradient(135deg, #8A0029, #D32F2F)" }}>
                    <div className="absolute rounded-full border animate-ping opacity-50"
                        style={{ width: 72, height: 72, borderColor: "rgba(138,0,41,0.3)" }} />
                    <div className="w-7 h-7 rounded-full"
                        style={{ background: "rgba(255,255,255,0.85)" }} />
                </div>

                {/* Orbit ring */}
                <div className="absolute rounded-full border"
                    style={{ width: 360, height: 360, borderColor: "rgba(138,0,41,0.15)" }} />

                {/* Nodes */}
                {timelineData.map((item, index) => {
                    const position = calculateNodePosition(index, timelineData.length)
                    const isActive = activeId === item.id
                    const Icon = item.icon

                    return (
                        <div
                            key={item.id}
                            className="absolute cursor-pointer"
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                                zIndex: isActive ? 200 : position.zIndex,
                                opacity: isActive ? 1 : position.opacity,
                                transition: "opacity 0.3s ease",
                            }}
                            // Desktop: hover
                            onMouseEnter={() => { if (!isMobile) setHoveredId(item.id) }}
                            onMouseLeave={() => { if (!isMobile) setHoveredId(null) }}
                            // Mobile: tap
                            onClick={(e) => {
                                if (isMobile) {
                                    e.stopPropagation()
                                    setTappedId(prev => prev === item.id ? null : item.id)
                                }
                            }}
                        >
                            {/* Glow ring */}
                            <div className="absolute rounded-full -inset-1"
                                style={{
                                    background: isActive
                                        ? "radial-gradient(circle, rgba(138,0,41,0.3) 0%, transparent 70%)"
                                        : "radial-gradient(circle, rgba(138,0,41,0.12) 0%, transparent 70%)",
                                    width: 52, height: 52, left: -6, top: -6,
                                    transition: "background 0.3s ease",
                                }} />

                            {/* Node circle */}
                            <div style={{
                                width: 36, height: 36,
                                borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                border: isActive ? "2px solid #8A0029" : "2px solid rgba(138,0,41,0.3)",
                                background: isActive ? "#8A0029" : "#FFFFFF",
                                color: isActive ? "#FFFFFF" : "#8A0029",
                                boxShadow: isActive ? "0 0 20px rgba(138,0,41,0.3)" : "none",
                                transform: isActive ? "scale(1.4)" : "scale(1)",
                                transition: "all 0.3s ease",
                            }}>
                                <Icon size={14} />
                            </div>

                            {/* Label */}
                            <div style={{
                                position: "absolute", top: 44,
                                whiteSpace: "nowrap",
                                fontSize: "10px", fontWeight: 700,
                                letterSpacing: "0.05em",
                                color: isActive ? "#8A0029" : "rgba(38,38,38,0.6)",
                                fontFamily: "var(--font-inter)",
                                transform: isActive ? "scale(1.1)" : "scale(1)",
                                transition: "all 0.3s ease",
                            }}>
                                {item.title}
                            </div>

                            {/* Info card — shown on hover (desktop) or tap (mobile) */}
                            {isActive && (
                                <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-56 shadow-xl overflow-visible rounded-xl"
                                    style={{
                                        background: "rgba(255,255,255,0.97)",
                                        border: "1px solid rgba(138,0,41,0.12)",
                                        backdropFilter: "blur(12px)",
                                    }}>
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-px h-2"
                                        style={{ background: "rgba(138,0,41,0.3)" }} />
                                    <CardHeader className="pb-2 p-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                                style={{ background: "#8A0029", color: "#FFFFFF" }}>
                                                {item.date}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xs mt-1.5"
                                            style={{ color: "#262626", fontFamily: "var(--font-inter)" }}>
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[10px] px-4 pb-4 pt-0"
                                        style={{ color: "rgba(38,38,38,0.6)", fontFamily: "var(--font-poppins)" }}>
                                        <p>{item.content}</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
