'use client'

import { useState } from "react"
import { useLanguage } from "@/context/language"

export default function ProfessionalDetails({ resumeInfo, setResumeInfo, setPage }) {
    const { lang } = useLanguage()

    const inputStyle = {
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        fontFamily: "var(--font-poppins)",
        color: "#FDFBEF",
    }

    /* ── Work entries: each has its own local state ── */
    const [workEntries, setWorkEntries] = useState(
        resumeInfo.professional.work.length > 0
            ? resumeInfo.professional.work
            : []
    )

    const addWorkEntry = () => {
        setWorkEntries(prev => [...prev, { jobTitle: "", company: "", startDate: "", endDate: "", jobDetails: "" }])
    }

    const updateWorkEntry = (idx, field, value) => {
        setWorkEntries(prev => {
            const updated = [...prev]
            updated[idx] = { ...updated[idx], [field]: value }
            return updated
        })
    }

    const removeWorkEntry = (idx) => {
        setWorkEntries(prev => prev.filter((_, i) => i !== idx))
    }

    /* Save to parent on continue */
    const handleContinue = () => {
        const validWork = workEntries.filter(w => w.jobTitle.trim() || w.company.trim())
        setResumeInfo(prev => ({
            ...prev,
            professional: { ...prev.professional, work: validWork },
        }))
        setPage(p => p + 1)
    }

    return (
        <div className="space-y-6">
            {/* Summary */}
            <div>
                <label className="block text-xs font-semibold mb-1.5"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Краткое описание:' : 'Summary:'}
                </label>
                <textarea
                    placeholder={lang === 'ru' ? "Опишите ваши ключевые навыки и опыт" : "Introduce yourself by pitching your skills"}
                    rows={4}
                    value={resumeInfo.professional.summary}
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029] resize-none"
                    style={inputStyle}
                    onChange={(e) => setResumeInfo(prev => ({ ...prev, professional: { ...prev.professional, summary: e.target.value } }))}
                />
            </div>

            {/* Skills */}
            <div>
                <label className="block text-xs font-semibold mb-1.5"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Навыки:' : 'Skills:'}
                </label>
                <textarea
                    placeholder={lang === 'ru' ? "Коммуникация, Работа в команде, и т.д." : "Communication, Teamwork, etc."}
                    rows={3}
                    value={resumeInfo.professional.skills}
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029] resize-none"
                    style={inputStyle}
                    onChange={(e) => setResumeInfo(prev => ({ ...prev, professional: { ...prev.professional, skills: e.target.value } }))}
                />
                <p className="text-xs mt-1" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-poppins)" }}>
                    {lang === 'ru' ? 'Нажмите Enter для новой строки' : 'Hit enter for newline'}
                </p>
            </div>

            {/* Work Experience Fields */}
            {workEntries.map((work, idx) => (
                <div key={idx} className="p-4 rounded-lg space-y-3 relative" style={{ background: "rgba(138,0,41,0.08)" }}>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold" style={{ color: "rgba(253,251,239,0.5)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? `Опыт ${idx + 1}` : `Experience ${idx + 1}`}
                        </span>
                        <button onClick={() => removeWorkEntry(idx)}
                            className="text-xs px-2 py-1 rounded cursor-pointer hover:opacity-80"
                            style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                            {lang === 'ru' ? 'Удалить' : 'Remove'}
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Должность:' : 'Job Title:'}
                            </label>
                            <input type="text"
                                placeholder={lang === 'ru' ? "Например: Инженер" : "Software developer"}
                                value={work.jobTitle}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                style={inputStyle}
                                onChange={(e) => updateWorkEntry(idx, "jobTitle", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Компания:' : 'Company:'}
                            </label>
                            <input type="text"
                                placeholder={lang === 'ru' ? "Название компании" : "Company name"}
                                value={work.company}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                style={inputStyle}
                                onChange={(e) => updateWorkEntry(idx, "company", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Дата начала:' : 'Start Date:'}
                            </label>
                            <input type="month"
                                value={work.startDate}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                style={{ ...inputStyle, colorScheme: "dark" }}
                                onChange={(e) => updateWorkEntry(idx, "startDate", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                                {lang === 'ru' ? 'Дата окончания:' : 'End Date:'}
                            </label>
                            <input type="month"
                                value={work.endDate}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                style={{ ...inputStyle, colorScheme: "dark" }}
                                onChange={(e) => updateWorkEntry(idx, "endDate", e.target.value)} />
                            <p className="text-xs" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru' ? 'Оставьте пустым если текущая работа' : 'Leave empty if ongoing'}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Описание работы:' : 'Job Details:'}
                        </label>
                        <textarea
                            placeholder={lang === 'ru' ? "Опишите ваши обязанности и достижения" : "Describe your role and achievements"}
                            className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029] resize-none"
                            rows={3} style={inputStyle}
                            value={work.jobDetails}
                            onChange={(e) => updateWorkEntry(idx, "jobDetails", e.target.value)} />
                    </div>
                </div>
            ))}

            <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                onClick={addWorkEntry}>
                {lang === 'ru' ? '+ Добавить опыт работы' : '+ Add Work Experience'}
            </button>

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
                    onClick={handleContinue}>
                    {lang === 'ru' ? 'Сохранить и продолжить' : 'Save & Continue'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
