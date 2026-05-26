import { useEffect, useState } from 'react'
import { init, send } from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import { motion } from 'framer-motion'

init(EMAILJS_CONFIG.PUBLIC_KEY)

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState({ submitted: false, error: false, message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitted: false, error: false, message: 'Sending...' })

    try {
      await send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      })
      setStatus({ submitted: true, error: false, message: 'Message sent successfully. We will contact you soon.' })
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      setStatus({ submitted: false, error: true, message: 'Unable to send message right now. Please try again later.' })
      console.error(error)
    }
  }

  useEffect(() => {
    if (status.submitted || status.error) {
      const timer = setTimeout(() => setStatus((prev) => ({ ...prev, message: '' })), 5000)
      return () => clearTimeout(timer)
    }
  }, [status.submitted, status.error])

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Contact</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Get in touch with expert financial advisors.</h1>
          <p className="max-w-xl text-slate-700">Reach out for consultation, service inquiries, or compliance support. We’re ready to help your business grow with confidence.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Phone', value: '8652119165', href: 'tel:8652119165' },
              { label: 'Email', value: 'cavipinsingh2025@gmail.com', href: 'mailto:cavipinsingh2025@gmail.com' },
              { label: 'Address', value: '525, 5th Floor, Lodha Signet, Manpada, Dombivli East, 421204' },
              { label: 'Working Hours', value: 'Mon - Sat, 10am - 7pm' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-3 block text-lg font-semibold text-slate-900 hover:text-emerald-900">{item.value}</a>
                ) : (
                  <p className="mt-3 text-lg font-semibold text-slate-900">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6 rounded-[2rem] border border-slate-200/40 bg-[#f2e7d6]/90 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Send a message</p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="rounded-3xl border border-slate-300/70 bg-[#ede2cd] px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400/70"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="rounded-3xl border border-slate-300/70 bg-[#ede2cd] px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400/70"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="rounded-3xl border border-slate-300/70 bg-[#ede2cd] px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400/70"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="rounded-3xl border border-slate-300/70 bg-[#ede2cd] px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400/70"
              >
                <option value="" disabled>Service Required</option>
                <option value="GST Filing">GST Filing</option>
                <option value="Income Tax Return Filing">Income Tax Return Filing</option>
                <option value="Company Registration">Company Registration</option>
                <option value="Audit & Assurance">Audit & Assurance</option>
                <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                <option value="Tax Planning">Tax Planning</option>
                <option value="Financial Consulting">Financial Consulting</option>
                <option value="Business Compliance">Business Compliance</option>
                <option value="ROC Filing">ROC Filing</option>
                <option value="Payroll Services">Payroll Services</option>
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Message"
              className="min-h-[140px] rounded-3xl border border-slate-300/70 bg-[#ede2cd] px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-400/70"
            />
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-400">
              Send Message
            </button>
          </form>

          {status.message && (
            <div className={`rounded-3xl border p-4 text-sm ${status.error ? 'border-red-400/30 bg-red-500/10 text-red-200' : 'border-emerald-400/30 bg-emerald-500/10 text-emerald-100'}`}>
              {status.message}
            </div>
          )}
        </motion.div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200/40 bg-[#f2e7d6]/90 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Embedded Map</p>
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200/40 bg-[#ede2cd]">
            <iframe
              title="V A SINGH & CO - Location"
              className="h-96 w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0825670424477!2d73.17213107554799!3d19.20102424832669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7eed252e5a5%3A0x378d2d1ee2ce68f2!2sLodha%20Signet!5e0!3m2!1sen!2sin!4v1718532261466!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200/40 bg-[#f2e7d6]/90 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Need urgent support?</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Contact our expert finance team today.</h2>
          <p className="mt-4 text-slate-700">We are available to discuss your accounting, taxation, and compliance requirements and deliver a solution tailored to your business.</p>
          <div className="mt-8 grid gap-4">
            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">WhatsApp</p>
              <a href="https://wa.me/918652119165" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-emerald-700">+91 86521 19165</a>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Email</p>
              <a href="mailto:cavipinsingh2025@gmail.com" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-emerald-700">cavipinsingh2025@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
