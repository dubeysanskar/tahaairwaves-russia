'use client'

import { useRef, useCallback } from "react"
import { useReactToPrint } from "react-to-print"
import { useLanguage } from "@/context/language"

/* Helper to format YYYY-MM to readable date */
function formatDate(val) {
    if (!val) return ''
    if (val.includes('-')) {
        const [y, m] = val.split('-')
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return `${months[parseInt(m, 10) - 1]} ${y}`
    }
    return val
}

export default function ResumeTemplate({ resumeInfo, page }) {
    const { lang } = useLanguage()
    const contentRef = useRef(null)

    const reactToPrintFn = useReactToPrint({ contentRef })

    const handleDownload = useCallback(() => {
        if (contentRef.current) {
            reactToPrintFn()
        }
    }, [reactToPrintFn])

    const hasLinks = resumeInfo.profile.links && resumeInfo.profile.links.length > 0

    return (
        <div>
            {/* Resume Preview */}
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-5" ref={contentRef}
                style={{ fontFamily: "var(--font-poppins)", color: "#262626", minHeight: "600px", overflowWrap: "break-word", wordBreak: "break-word" }}>

                {/* Header */}
                <div className="text-center space-y-2 pb-4" style={{ borderBottom: "2px solid #8A0029" }}>
                    <h1 className="text-3xl font-black" style={{ fontFamily: "var(--font-inter)", color: "#262626" }}>
                        {resumeInfo.profile.firstname || (lang === 'ru' ? 'Имя' : 'First')}{' '}
                        {resumeInfo.profile.lastname || (lang === 'ru' ? 'Фамилия' : 'Last')}
                    </h1>
                    <div className="flex justify-center items-center gap-3 flex-wrap text-sm" style={{ color: "#6B7280" }}>
                        {resumeInfo.profile.email && (
                            <a href={`mailto:${resumeInfo.profile.email}`} style={{ color: "#8A0029" }}>
                                {resumeInfo.profile.email}
                            </a>
                        )}
                        {hasLinks && resumeInfo.profile.links.map((link, i) => (
                            link.url && (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="pl-3"
                                    style={{ color: "#8A0029", borderLeft: "1px solid #e5e5e5" }}>
                                    {link.label || link.url}
                                </a>
                            )
                        ))}
                    </div>
                    <div className="text-sm" style={{ color: "#9CA3AF" }}>
                        {resumeInfo.profile.phone && <span>📞 {resumeInfo.profile.phone}</span>}
                        {resumeInfo.profile.address && <span className="ml-3">📍 {resumeInfo.profile.address}</span>}
                    </div>
                </div>

                {/* Summary */}
                {resumeInfo.professional.summary && (
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {lang === 'ru' ? 'О СЕБЕ' : 'SUMMARY'}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#374151", overflowWrap: "break-word", wordBreak: "break-word" }}>
                            {resumeInfo.professional.summary}
                        </p>
                    </div>
                )}

                {/* Skills */}
                {resumeInfo.professional.skills && (
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {lang === 'ru' ? 'НАВЫКИ' : 'SKILLS'}
                        </h3>
                        <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151", overflowWrap: "break-word", wordBreak: "break-word" }}>
                            {resumeInfo.professional.skills.split("\n").map((skill, i) => (
                                skill.trim() && <li key={i}>{skill.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Work Experience */}
                {resumeInfo.professional.work.length > 0 && (
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {lang === 'ru' ? 'ОПЫТ РАБОТЫ' : 'WORK EXPERIENCE'}
                        </h3>
                        {resumeInfo.professional.work.map((work, i) => (
                            <div key={i} className="mb-3">
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <div>
                                        <h5 className="text-base font-bold" style={{ color: "#262626" }}>{work.jobTitle}</h5>
                                        <h6 className="text-sm" style={{ color: "#6B7280" }}>{work.company}</h6>
                                    </div>
                                    <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                        {formatDate(work.startDate)} — {work.endDate ? formatDate(work.endDate) : (lang === 'ru' ? 'настоящее время' : 'Present')}
                                    </span>
                                </div>
                                {work.jobDetails && (
                                    <ul className="list-disc pl-5 mt-1 text-sm space-y-0.5" style={{ color: "#374151" }}>
                                        {work.jobDetails.split("\n").map((detail, idx) =>
                                            detail.trim() ? <li key={idx}>{detail.trim()}</li> : null
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Education */}
                {resumeInfo.education.length > 0 && (
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {lang === 'ru' ? 'ОБРАЗОВАНИЕ' : 'EDUCATION'}
                        </h3>
                        {resumeInfo.education.map((edu, i) => (
                            <div key={i} className="flex justify-between items-baseline flex-wrap mb-2">
                                <div>
                                    <h5 className="text-base font-bold" style={{ color: "#262626" }}>{edu.course}</h5>
                                    <h6 className="text-sm" style={{ color: "#6B7280" }}>{edu.college}</h6>
                                </div>
                                <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certifications */}
                {resumeInfo.certification.length > 0 && (
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                            style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                            {lang === 'ru' ? 'СЕРТИФИКАТЫ' : 'CERTIFICATIONS'}
                        </h3>
                        {resumeInfo.certification.map((cert, i) => (
                            <div key={i} className="mb-2">
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <div>
                                        <h5 className="text-sm font-bold" style={{ color: "#262626" }}>
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#8A0029" }}>
                                                    {cert.name}
                                                </a>
                                            ) : cert.name}
                                        </h5>
                                        {cert.issuer && <p className="text-sm" style={{ color: "#6B7280" }}>{cert.issuer}</p>}
                                    </div>
                                    {cert.date && (
                                        <span className="text-xs font-semibold" style={{ color: "#9CA3AF" }}>
                                            {formatDate(cert.date)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Custom Sections */}
                {resumeInfo.customSections && resumeInfo.customSections.length > 0 && resumeInfo.customSections.map((section, i) => (
                    section.title && section.content && (
                        <div key={i}>
                            <h3 className="text-sm font-black uppercase tracking-wider mb-2 pb-1"
                                style={{ fontFamily: "var(--font-inter)", color: "#8A0029", borderBottom: "1px solid rgba(138,0,41,0.15)" }}>
                                {section.title}
                            </h3>
                            <ul className="list-disc pl-5 text-sm space-y-0.5" style={{ color: "#374151" }}>
                                {section.content.split("\n").map((line, idx) =>
                                    line.trim() ? <li key={idx}>{line.trim()}</li> : null
                                )}
                            </ul>
                        </div>
                    )
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 items-center justify-center py-6">
                <button
                    className="px-6 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.1)", color: "#8A0029", fontFamily: "var(--font-inter)" }}
                    onClick={() => window.location.reload()}>
                    {lang === 'ru' ? '↻ Создать новое' : '↻ Create New'}
                </button>
                <button
                    className="px-6 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: "#8A0029", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={handleDownload}>
                    {lang === 'ru' ? '📥 Скачать PDF' : '📥 Download PDF'}
                </button>
            </div>
        </div>
    )
}
