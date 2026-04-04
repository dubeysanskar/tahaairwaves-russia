'use client'

import { useState } from "react"
import { useLanguage } from "@/context/language"

export default function EducationDetails({ resumeInfo, setResumeInfo, setPage }) {
    const { lang } = useLanguage()

    const inputStyle = {
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        fontFamily: "var(--font-poppins)",
        color: "#FDFBEF",
    }

    /* ── Education entries ── */
    const [eduEntries, setEduEntries] = useState(
        resumeInfo.education.length > 0 ? resumeInfo.education : [{ college: "", course: "", startDate: "", endDate: "" }]
    )

    const addEduEntry = () => {
        setEduEntries(prev => [...prev, { college: "", course: "", startDate: "", endDate: "" }])
    }

    const updateEduEntry = (idx, field, value) => {
        setEduEntries(prev => {
            const updated = [...prev]
            updated[idx] = { ...updated[idx], [field]: value }
            return updated
        })
    }

    const removeEduEntry = (idx) => {
        setEduEntries(prev => prev.filter((_, i) => i !== idx))
    }

    /* ── Certificate entries ── */
    const [certEntries, setCertEntries] = useState(
        resumeInfo.certification.length > 0 ? resumeInfo.certification : []
    )

    const addCertEntry = () => {
        setCertEntries(prev => [...prev, { name: "", issuer: "", date: "", link: "" }])
    }

    const updateCertEntry = (idx, field, value) => {
        setCertEntries(prev => {
            const updated = [...prev]
            updated[idx] = { ...updated[idx], [field]: value }
            return updated
        })
    }

    const removeCertEntry = (idx) => {
        setCertEntries(prev => prev.filter((_, i) => i !== idx))
    }

    /* ── Custom sections ── */
    const [customSections, setCustomSections] = useState(
        resumeInfo.customSections?.length > 0 ? resumeInfo.customSections : []
    )

    const addCustomSection = () => {
        setCustomSections(prev => [...prev, { title: "", content: "" }])
    }

    const updateCustomSection = (idx, field, value) => {
        setCustomSections(prev => {
            const updated = [...prev]
            updated[idx] = { ...updated[idx], [field]: value }
            return updated
        })
    }

    const removeCustomSection = (idx) => {
        setCustomSections(prev => prev.filter((_, i) => i !== idx))
    }

    /* Save all and finish */
    const handleFinish = () => {
        const validEdu = eduEntries.filter(e => e.college.trim() || e.course.trim())
        const validCert = certEntries.filter(c => c.name.trim())
        const validCustom = customSections.filter(s => s.title.trim() && s.content.trim())
        setResumeInfo(prev => ({
            ...prev,
            education: validEdu,
            certification: validCert,
            customSections: validCustom,
        }))
        setPage(p => p + 1)
    }

    return (
        <div className="space-y-6">

            {/* ═══ Education Entries ═══ */}
            <div>
                <label className="block text-xs font-semibold mb-3"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Образование' : 'Education'}
                </label>
                {eduEntries.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-lg space-y-3 mb-3" style={{ background: "rgba(138,0,41,0.06)" }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? `Образование ${idx + 1}` : `Education ${idx + 1}`}
                            </span>
                            {eduEntries.length > 1 && (
                                <button onClick={() => removeEduEntry(idx)}
                                    className="text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80"
                                    style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                                    {lang === 'ru' ? 'Удалить' : 'Remove'}
                                </button>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Учебное заведение:' : 'College/University:'}
                                </label>
                                <input type="text" placeholder={lang === 'ru' ? "Название учебного заведения" : "School, college or university"}
                                    value={edu.college}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={inputStyle}
                                    onChange={(e) => updateEduEntry(idx, "college", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Специальность/Степень:' : 'Course/Degree:'}
                                </label>
                                <input type="text" placeholder={lang === 'ru' ? "Бакалавр, Магистр и т.д." : "Bachelors, Masters, etc."}
                                    value={edu.course}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={inputStyle}
                                    onChange={(e) => updateEduEntry(idx, "course", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Дата начала:' : 'Start Date:'}
                                </label>
                                <input type="month" value={edu.startDate}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={{ ...inputStyle, colorScheme: "dark" }}
                                    onChange={(e) => updateEduEntry(idx, "startDate", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Дата окончания:' : 'End Date:'}
                                </label>
                                <input type="month" value={edu.endDate}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={{ ...inputStyle, colorScheme: "dark" }}
                                    onChange={(e) => updateEduEntry(idx, "endDate", e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={addEduEntry}>
                    {lang === 'ru' ? '+ Ещё образование' : '+ Add Education'}
                </button>
            </div>

            {/* ═══ Certificate Entries ═══ */}
            <div>
                <label className="block text-xs font-semibold mb-3"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Сертификаты' : 'Certifications'}
                </label>
                {certEntries.map((cert, idx) => (
                    <div key={idx} className="p-4 rounded-lg space-y-3 mb-3" style={{ background: "rgba(138,0,41,0.06)" }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? `Сертификат ${idx + 1}` : `Certificate ${idx + 1}`}
                            </span>
                            <button onClick={() => removeCertEntry(idx)}
                                className="text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80"
                                style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                                {lang === 'ru' ? 'Удалить' : 'Remove'}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Название:' : 'Certificate Name:'}
                                </label>
                                <input type="text" placeholder={lang === 'ru' ? "Например: AWS Certified" : "e.g. AWS Certified Developer"}
                                    value={cert.name}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={inputStyle}
                                    onChange={(e) => updateCertEntry(idx, "name", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Организация:' : 'Issuing Organization:'}
                                </label>
                                <input type="text" placeholder={lang === 'ru' ? "Например: Google, Coursera" : "e.g. Google, Coursera"}
                                    value={cert.issuer}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={inputStyle}
                                    onChange={(e) => updateCertEntry(idx, "issuer", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Дата получения:' : 'Date:'}
                                </label>
                                <input type="month" value={cert.date}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={{ ...inputStyle, colorScheme: "dark" }}
                                    onChange={(e) => updateCertEntry(idx, "date", e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                    {lang === 'ru' ? 'Ссылка (необязательно):' : 'Link (optional):'}
                                </label>
                                <input type="url" placeholder="https://..."
                                    value={cert.link}
                                    className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    style={inputStyle}
                                    onChange={(e) => updateCertEntry(idx, "link", e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={addCertEntry}>
                    {lang === 'ru' ? '+ Добавить сертификат' : '+ Add Certificate'}
                </button>
            </div>

            {/* ═══ Custom Sections ═══ */}
            <div>
                <label className="block text-xs font-semibold mb-3"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Дополнительные разделы' : 'Custom Sections'}
                </label>
                {customSections.map((section, idx) => (
                    <div key={idx} className="p-4 rounded-lg space-y-3 mb-3" style={{ background: "rgba(138,0,41,0.04)", border: "1px dashed rgba(253,251,239,0.1)" }}>
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? `Раздел ${idx + 1}` : `Section ${idx + 1}`}
                            </span>
                            <button onClick={() => removeCustomSection(idx)}
                                className="text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80"
                                style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                                {lang === 'ru' ? 'Удалить' : 'Remove'}
                            </button>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Название раздела:' : 'Section Title:'}
                            </label>
                            <input type="text" placeholder={lang === 'ru' ? "Напр.: Языки, Проекты, Волонтёрство" : "e.g. Languages, Projects, Volunteering"}
                                value={section.title}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                style={inputStyle}
                                onChange={(e) => updateCustomSection(idx, "title", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Содержание:' : 'Content:'}
                            </label>
                            <textarea placeholder={lang === 'ru' ? "Введите содержание (Enter для новой строки)" : "Enter content (use Enter for new lines)"}
                                value={section.content}
                                rows={3}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029] resize-none"
                                style={inputStyle}
                                onChange={(e) => updateCustomSection(idx, "content", e.target.value)} />
                        </div>
                    </div>
                ))}
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.15)", color: "#FDFBEF", fontFamily: "var(--font-inter)", border: "1px dashed rgba(253,251,239,0.15)" }}
                    onClick={addCustomSection}>
                    {lang === 'ru' ? '+ Добавить свой раздел' : '+ Add Custom Section'}
                </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 pt-4">
                <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(255,255,255,0.1)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={() => setPage((p) => p - 1)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7" /></svg>
                    {lang === 'ru' ? 'Назад' : 'Back'}
                </button>
                <button
                    className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: "#8A0029", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={handleFinish}>
                    {lang === 'ru' ? 'Готово — просмотреть' : 'Done — Preview'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
