'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MdArrowOutward } from "react-icons/md"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const OFFICES = [
    {
        city: "New Delhi (Head Office)",
        address: "71A, 3rd Floor, Block A, Taimoor Nagar, New Friends Colony, New Delhi 110065",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0354236570394!2d77.27019731108668!3d28.56851337571177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cd4f5e5c5b%3A0x2b6e8b8f8e8e8e8e!2sTaimoor%20Nagar%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110065!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin",
    },
    {
        city: "Noida (Branch Office)",
        address: "Sector 62, Noida, Uttar Pradesh 201301",
        phone: "+91 93152 26961",
        email: "info@tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.857932791997!2d77.36098!3d28.62682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin",
    },
    {
        city: "Jeddah, Saudi Arabia",
        address: "Al Balad District, Jeddah, Saudi Arabia",
        phone: "+966 XX XXX XXXX",
        email: "jeddah@tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29762.148!2d39.17257!3d21.48583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sAl%20Balad%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1711100000000!5m2!1sen!2ssa",
    },
    {
        city: "Moscow, Russia",
        address: "Business District, Moscow, Russia",
        phone: "+7 XXX XXX XXXX",
        email: "moscow@tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71998.77!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sru!4v1711100000000!5m2!1sen!2sru",
    },
    {
        city: "Dubai, UAE",
        address: "Business Bay, Dubai, UAE",
        phone: "+971 XX XXX XXXX",
        email: "dubai@tahaairwaves.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28937.15!2d55.2744!3d25.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e2385751f06!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1711100000000!5m2!1sen!2sae",
    },
]

const SERVICES_LIST = [
    "Cleaners", "Drivers (All Types)", "General Labour", "Factory Helpers",
    "Packing Workers", "Loading & Unloading", "Barista Workers",
    "Emigration & Immigration", "Document Attestation", "Hajj & Umrah Travel",
    "Employee Outsourcing", "Other",
]

const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com/tahaairwaves1", label: "Facebook", bg: "#1877F2" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/taha_airwaves", label: "Instagram", bg: "#E4405F" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/tahaairwaves", label: "LinkedIn", bg: "#0A66C2" },
    { icon: <FaXTwitter />, href: "https://x.com/tahaairwaves", label: "X", bg: "#000" },
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
                        Whether you&apos;re an employer seeking manpower or a job seeker looking for opportunities, we&apos;re here to help.
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

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="p-6 rounded-2xl" style={{ background: "#1a0a10" }}>
                            <h3 className="mb-4" style={{ fontFamily: "var(--font-lato)", fontSize: "1.1rem", fontWeight: 700, color: "#FDFBEF" }}>
                                Direct Contact
                            </h3>
                            <div className="space-y-4">
                                <a href="tel:+919315226961" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.3)" }}>
                                        <FiPhone style={{ color: "#BC264B" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>Phone</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                                <a href="mailto:info@tahaairwaves.com" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(142,9,53,0.3)" }}>
                                        <FiMail style={{ color: "#BC264B" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>Email</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>info@tahaairwaves.com</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/919315226961" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.2)" }}>
                                        <FaWhatsapp style={{ color: "#25D366" }} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(253,251,239,0.3)", fontFamily: "var(--font-lato)" }}>WhatsApp</p>
                                        <p className="text-sm font-medium" style={{ color: "rgba(253,251,239,0.7)", fontFamily: "var(--font-poppins)" }}>+91 93152 26961</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social */}
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

                {/* Offices with Embedded Maps */}
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
                                <a href={`tel:${OFFICES[selectedOffice].phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm hover:text-[#8E0935] transition-colors"
                                    style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                    <FiPhone className="flex-shrink-0" style={{ color: "#BC264B" }} />
                                    {OFFICES[selectedOffice].phone}
                                </a>
                                <a href={`mailto:${OFFICES[selectedOffice].email}`} className="flex items-center gap-2 text-sm hover:text-[#8E0935] transition-colors"
                                    style={{ color: "#374151", fontFamily: "var(--font-poppins)" }}>
                                    <FiMail className="flex-shrink-0" style={{ color: "#BC264B" }} />
                                    {OFFICES[selectedOffice].email}
                                </a>
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
