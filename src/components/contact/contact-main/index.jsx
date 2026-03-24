'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi"
import { FaWhatsapp, FaTelegramPlane, FaVk } from "react-icons/fa"

const OFFICES = [
    {
        city: "India (Delhi) — Head Office",
        address: "71A, 3rd Floor, Block A, Taimoor Nagar, New Friends Colony, New Delhi 110065",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        website: "www.tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0!2d77.2708078!3d28.5721053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d4eb682229%3A0xa52bff5d678144c5!2sTaha%20Airwaves!5e0!3m2!1sen!2sin!4v1",
        mapLink: "https://maps.app.goo.gl/GvS2Xn4ZrGqcfmbS8",
    },
    {
        city: "India (Noida)",
        address: "Bhutani Alphathum, Tower C, 2nd Floor, A06, Sector 90, Noida, Uttar Pradesh 201304",
        email: "marketing@tahaairwaves.com",
        website: "www.tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8811434315994!2d77.4107801!3d28.513235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9fcbe0273a1%3A0xd8ed754838e2f8a4!2sBhutani%20Alphathum!5e0!3m2!1sen!2sin!4v1774001112471!5m2!1sen!2sin",
        mapLink: "https://maps.app.goo.gl/8hj6U2PwFGQviqBCA",
    },
    {
        city: "Moscow, Russia",
        address: "Skolkovo Innovation Center, Malevicha Street, 2k4, 143026",
        phone: "+7 985 074-88-28",
        email: "info@tahaairwaves.ru",
        website: "www.tahaairwaves.ru",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.1426425262143!2d37.3377322!3d55.7212732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54fc19d3da9ab%3A0xa53e316700ab8ad7!2zVGFoYSBBaXJ3YXZlcyBSdXNzaWEgLSDQrdC60YHQv9C10YDRgtGLINC_0L4g0L_QvtC00LHQvtGA0YMg0LjQvdC00LjQudGB0LrQuNGFINGA0LDQsdC_0YLQvdC40LrQvtCyINCyINCg0L7RgdGB0LjQuA!5e0!3m2!1sen!2sin!4v1774001324192!5m2!1sen!2sin",
        mapLink: "https://maps.app.goo.gl/z8SxP7mCixzbLGqcA",
    },
]

const SERVICES_LIST = [
    "Cleaners", "Drivers (All Types)", "General Workers", "Factory Workers",
    "Packing Workers", "Loading & Unloading", "Technicians",
    "Visa & Documentation", "Employee Outsourcing", "Other",
]

const socials = [
    { icon: <FaVk />, href: "https://vk.com/tahaairwaves", label: "VK", bg: "#4680C2" },
    { icon: <FaTelegramPlane />, href: "https://t.me/tahaairwaves", label: "Telegram", bg: "#0088CC" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919315226961", label: "WhatsApp", bg: "#25D366" },
]

export default function ContactMain() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState('')
    const [selectedOffice, setSelectedOffice] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setError('')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!res.ok) throw new Error('Failed to send message')
            setSent(true)
            setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        } catch (err) {
            setError('Failed to send message. Please try again or contact us directly.')
        }
        setSending(false)
    }

    return (
        <section ref={ref} className="pt-32 pb-20" style={{ background: "#FDFBEF" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14">
                    <div className="w-14 h-1 rounded-full mb-6" style={{ background: "#8E0935" }} />
                    <h1 style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#1a0a10" }}>
                        Get in <span className="italic" style={{ color: "#8E0935" }}>Touch</span>
                    </h1>
                    <p className="mt-4 max-w-xl" style={{ fontFamily: "var(--font-poppins)", fontSize: "1rem", color: "#6B7280" }}>
                        Whether you&apos;re an employer seeking manpower or looking for professional workforce solutions in Russia, we&apos;re here to help.
                    </p>
                </div>

                {/* Form + Contact Info */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 p-8 rounded-2xl"
                        style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}
                    >
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-lato)", fontSize: "1.3rem", fontWeight: 700, color: "#1a0a10" }}>
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name *" required value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                                <input type="email" placeholder="Your Email *" required value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="tel" placeholder="Phone Number" value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                                <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                    style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: formData.service ? "#1a0a10" : "#9CA3AF" }}>
                                    <option value="">Select Service</option>
                                    {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <textarea placeholder="Your Message *" required rows={5} value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                style={{ border: "1px solid rgba(142,9,53,0.15)", fontFamily: "var(--font-poppins)", color: "#1a0a10" }} />
                            {error && (
                                <p className="text-sm" style={{ color: "#BC264B", fontFamily: "var(--font-poppins)" }}>{error}</p>
                            )}
                            <button type="submit" disabled={sending}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-[0.1em] uppercase font-semibold cursor-pointer transition-all duration-300 disabled:opacity-50"
                                style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-lato)" }}>
                                {sent ? "Message Sent ✓" : sending ? "Sending..." : "Send Message"} <MdArrowOutward />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info — White card instead of dark */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="p-6 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-lato)", fontSize: "1.1rem", fontWeight: 700, color: "#1a0a10" }}>
                                Direct Contact
                            </h3>
                            <div className="space-y-4">
                                <a href="tel:+919315226961" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.08)" }}>
                                        <FiPhone style={{ color: "#8E0935" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "#9CA3AF", fontFamily: "var(--font-lato)" }}>Phone</p>
                                        <p className="text-sm font-medium" style={{ color: "#1a0a10", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.08)" }}>
                                        <FiMail style={{ color: "#8E0935" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "#9CA3AF", fontFamily: "var(--font-lato)" }}>Email</p>
                                        <p className="text-sm font-medium" style={{ color: "#1a0a10", fontFamily: "var(--font-poppins)" }}>info@tahaairwaves.com</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.08)" }}>
                                        <FaWhatsapp style={{ color: "#8E0935" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "#9CA3AF", fontFamily: "var(--font-lato)" }}>WhatsApp</p>
                                        <p className="text-sm font-medium" style={{ color: "#1a0a10", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social — VK, Telegram, WhatsApp */}
                        <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-lato)", fontSize: "1rem", fontWeight: 700, color: "#1a0a10" }}>Follow Us</h3>
                            <div className="flex gap-3">
                                {socials.map(s => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm transition-all duration-300 hover:scale-110"
                                        style={{ background: s.bg }} aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Offices with Embedded Maps — Russia-focused (removed Jeddah/Dubai) */}
                <div className="mb-12">
                    <h2 className="mb-8" style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "2rem", fontWeight: 600, color: "#1a0a10" }}>
                        Our <span style={{ color: "#8E0935" }}>Offices</span>
                    </h2>

                    {/* Office Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {OFFICES.map((office, i) => (
                            <button
                                key={office.city}
                                onClick={() => setSelectedOffice(i)}
                                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
                                style={{
                                    background: selectedOffice === i ? "#8E0935" : "#fff",
                                    color: selectedOffice === i ? "#FDFBEF" : "#1a0a10",
                                    border: selectedOffice === i ? "1px solid #8E0935" : "1px solid rgba(142,9,53,0.15)",
                                    fontFamily: "var(--font-lato)",
                                }}
                            >
                                {office.city}
                            </button>
                        ))}
                    </div>

                    {/* Selected Office Detail + Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Office Info Card */}
                        <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(142,9,53,0.1)" }}>
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: "rgba(142,9,53,0.08)" }}>
                                    <FiMapPin style={{ color: "#8E0935" }} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-base mb-1"
                                        style={{ fontFamily: "var(--font-lato)", color: "#8E0935" }}>
                                        {OFFICES[selectedOffice].city}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "var(--font-poppins)" }}>
                                        {OFFICES[selectedOffice].address}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-4" style={{ borderTop: "1px solid rgba(142,9,53,0.08)" }}>
                                {OFFICES[selectedOffice].phone && (
                                    <a href={`tel:${OFFICES[selectedOffice].phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm hover:text-[#8E0935] transition-colors"
                                        style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                        <FiPhone className="flex-shrink-0" style={{ color: "#BC264B" }} />
                                        {OFFICES[selectedOffice].phone}
                                    </a>
                                )}
                                <a href={`mailto:${OFFICES[selectedOffice].email}`} className="flex items-center gap-2 text-sm hover:text-[#8E0935] transition-colors"
                                    style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                    <FiMail className="flex-shrink-0" style={{ color: "#BC264B" }} />
                                    {OFFICES[selectedOffice].email}
                                </a>
                                {OFFICES[selectedOffice].website && (
                                    <a href={`https://${OFFICES[selectedOffice].website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#8E0935] transition-colors"
                                        style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                        <FiExternalLink className="flex-shrink-0" style={{ color: "#BC264B" }} />
                                        {OFFICES[selectedOffice].website}
                                    </a>
                                )}
                                {OFFICES[selectedOffice].mapLink && (
                                    <a href={OFFICES[selectedOffice].mapLink} target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 hover:opacity-80"
                                        style={{ background: "#8E0935", color: "#FDFBEF", fontFamily: "var(--font-lato)" }}>
                                        <FiExternalLink /> View on Google Maps
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(142,9,53,0.1)" }}>
                            <iframe
                                src={OFFICES[selectedOffice].mapEmbed}
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`${OFFICES[selectedOffice].city} Office Location`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
