'use client'

import { useState } from "react"
import { useLanguage } from "@/context/language"

export default function BasicDetails({ resumeInfo, setResumeInfo, setPage }) {
    const { lang } = useLanguage()
    const [addressSection, setAddressSection] = useState(!!resumeInfo.profile.address)

    const handleChange = (field, value) => {
        setResumeInfo(prev => ({ ...prev, profile: { ...prev.profile, [field]: value } }))
    }

    /* ── Links management ── */
    const addLink = () => {
        setResumeInfo(prev => ({
            ...prev,
            profile: {
                ...prev.profile,
                links: [...prev.profile.links, { label: "", url: "" }],
            }
        }))
    }

    const updateLink = (idx, key, value) => {
        setResumeInfo(prev => {
            const links = [...prev.profile.links]
            links[idx] = { ...links[idx], [key]: value }
            return { ...prev, profile: { ...prev.profile, links } }
        })
    }

    const removeLink = (idx) => {
        setResumeInfo(prev => ({
            ...prev,
            profile: {
                ...prev.profile,
                links: prev.profile.links.filter((_, i) => i !== idx),
            }
        }))
    }

    const inputFields = [
        { label: lang === 'ru' ? "Имя:" : "First name:", placeholder: lang === 'ru' ? "Ваше имя" : "Your first name", field: "firstname" },
        { label: lang === 'ru' ? "Фамилия:" : "Last name:", placeholder: lang === 'ru' ? "Ваша фамилия" : "Your last name", field: "lastname" },
        { label: lang === 'ru' ? "Телефон:" : "Phone Number:", type: "tel", placeholder: lang === 'ru' ? "Номер телефона" : "Phone number", field: "phone" },
        { label: lang === 'ru' ? "Эл. почта:" : "Email address:", type: "email", placeholder: lang === 'ru' ? "Ваша электронная почта" : "Your email address", field: "email" },
    ]

    const inputStyle = {
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        fontFamily: "var(--font-poppins)",
        color: "#FDFBEF",
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {inputFields.map(({ label, type = "text", placeholder, field }) => (
                    <div key={field} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold"
                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>{label}</label>
                        {field === "phone" ? (
                            <div className="flex">
                                <span className="inline-flex items-center px-3 rounded-l-lg text-sm font-bold"
                                    style={{ background: "rgba(138,0,41,0.3)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}>+</span>
                                <input type={type}
                                    className="flex-1 px-4 py-2.5 rounded-r-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                    placeholder={placeholder}
                                    value={resumeInfo.profile[field]}
                                    onChange={(e) => handleChange(field, e.target.value)}
                                    style={inputStyle} />
                            </div>
                        ) : (
                            <input type={type}
                                className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                                placeholder={placeholder}
                                value={resumeInfo.profile[field]}
                                onChange={(e) => handleChange(field, e.target.value)}
                                style={inputStyle} />
                        )}
                        {field === "email" && (
                            <p className="text-xs" style={{ color: "rgba(253,251,239,0.35)", fontFamily: "var(--font-poppins)" }}>
                                {lang === 'ru' ? 'Укажите почту для связи по вакансиям' : 'Enter email to get contacted for jobs'}
                            </p>
                        )}
                    </div>
                ))}

                {/* Address */}
                {addressSection && (
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold"
                            style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                            {lang === 'ru' ? 'Адрес:' : 'Address:'}
                        </label>
                        <input type="text"
                            className="px-4 py-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            placeholder={lang === 'ru' ? "Город, Страна" : "City, Country"}
                            value={resumeInfo.profile.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            style={inputStyle} />
                    </div>
                )}
            </div>

            {/* Add Address button */}
            {!addressSection && (
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={() => setAddressSection(true)}>
                    {lang === 'ru' ? '+ Добавить адрес' : '+ Add Address'}
                </button>
            )}

            {/* ── Links Section ── */}
            <div className="space-y-3">
                <label className="text-xs font-semibold block"
                    style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-inter)" }}>
                    {lang === 'ru' ? 'Ссылки (LinkedIn, GitHub, портфолио и т.д.):' : 'Links (LinkedIn, GitHub, Portfolio, etc.):'}
                </label>
                {resumeInfo.profile.links.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder={lang === 'ru' ? "Название (напр. LinkedIn)" : "Label (e.g. LinkedIn)"}
                            value={link.label}
                            onChange={(e) => updateLink(idx, "label", e.target.value)}
                            className="w-1/3 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            style={inputStyle}
                        />
                        <input
                            type="url"
                            placeholder="https://..."
                            value={link.url}
                            onChange={(e) => updateLink(idx, "url", e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8A0029]"
                            style={inputStyle}
                        />
                        <button
                            onClick={() => removeLink(idx)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold cursor-pointer hover:opacity-80"
                            style={{ background: "rgba(211,47,47,0.3)", color: "#FDFBEF" }}>
                            ✕
                        </button>
                    </div>
                ))}
                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-200 hover:opacity-90"
                    style={{ background: "rgba(138,0,41,0.2)", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={addLink}>
                    {lang === 'ru' ? '+ Добавить ссылку' : '+ Add Link'}
                </button>
            </div>

            <div className="flex justify-center pt-4">
                <button
                    className="flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: "#8A0029", color: "#FDFBEF", fontFamily: "var(--font-inter)" }}
                    onClick={() => setPage((p) => p + 1)}>
                    {lang === 'ru' ? 'Сохранить и продолжить' : 'Save & Continue'}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}
