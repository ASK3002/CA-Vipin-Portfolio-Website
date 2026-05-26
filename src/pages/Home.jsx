import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import heroImage from '../assets/CA.png'

const servicesPreview = [
  { title: 'GST Filing', description: 'Timely GST returns with full compliance clarity.' },
  { title: 'Tax Planning', description: 'Smart strategies to maximize savings and growth.' },
  { title: 'Audit & Assurance', description: 'Accurate financial review with trusted outcomes.' },
]

const testimonials = [
  { quote: 'Professional, dependable and deeply knowledgeable in tax compliance.', name: 'Rajesh Khanna, Business Owner' },
  { quote: 'Their timely guidance helped our company stay ahead during GST audits.', name: 'Neha Mehta, CFO' },
  { quote: 'V A SINGH & CO built trust through transparent advice and excellent service.', name: 'Arjun Patel, Entrepreneur' },
]

const stats = [
  { label: 'Clients Served', value: 500 },
  { label: 'Years Experience', value: 10 },
  { label: 'Tax Filings', value: 1000 },
  { label: 'Client Satisfaction', value: 98 },
]

function Counter({ value, label, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const steps = 60
    const increment = Math.ceil(value / steps)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, delay)
    return () => clearInterval(timer)
  }, [value, delay])

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl shadow-black/10">
      <p className="text-4xl font-semibold text-slate-900">{count}{label === 'Client Satisfaction' ? '%' : '+'}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{label}</p>
    </div>
  )
}

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
      <section className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-900/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-700 font-bold">
              Premium Chartered Accountancy
            </p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Trusted Chartered Accountants for Taxation, Compliance & Financial Growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-base leading-8 text-slate-800 sm:text-lg">
            Your trusted partner for taxation, compliance, and financial growth. We help businesses build secure futures with expert accounting and advisory support.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row">
            <NavLink to="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
              Book Consultation
            </NavLink>
            <NavLink to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300/25 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-300/40 hover:bg-white/90">
              Our Services
            </NavLink>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden items-center justify-center lg:flex">
          <div className="relative overflow-hidden rounded-[2rem] border-x border-white/20 bg-white/5 shadow-xl shadow-black/10">
            <img
              src={heroImage}
              alt="Chartered Accountant illustration"
              className="h-[420px] w-full object-cover"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {['GST Filing', 'Audit Support', 'Tax Advisory', 'ROC Compliance'].map((item) => (
          <motion.div key={item} whileHover={{ y: -6 }} className="glass-card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">{item}</p>
          </motion.div>
        ))}
      </section>

      <section className="mt-16 space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Trusted guidance for every financial decision.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { title: 'Professional Expertise', description: 'Certified CA support for taxation and business compliance.' },
            { title: 'Trusted Financial Guidance', description: 'Clear advice with long-term growth focus.' },
            { title: 'Transparent Process', description: 'Straightforward fees and timely communication.' },
            { title: 'Timely Compliance', description: 'Reliable filings and audit-ready financials.' },
          ].map((item) => (
            <motion.div key={item.title} whileHover={{ y: -8 }} className="glass-card p-8">
              <div className="mb-4 h-12 w-12 rounded-3xl bg-emerald-600/15 text-2xl text-emerald-700 flex items-center justify-center">✓</div>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Services preview</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Solutions built for Indian businesses.</h2>
          </div>
          <NavLink to="/services" className="inline-flex items-center rounded-full border border-slate-300/25 bg-white/75 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-300/40 hover:bg-white/90">
            View All Services
          </NavLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {servicesPreview.map((service, index) => (
            <motion.div key={service.title} whileHover={{ y: -8 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="glass-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/15 text-2xl text-emerald-700">📈</div>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Performance</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Proven results for your business.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Counter value={stat.value} label={stat.label} delay={30} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Clients trust our premium financial services.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -6 }} className="glass-card p-8">
              <p className="text-slate-700">“{item.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-emerald-700">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#07211d]/90 p-10 shadow-premium">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Ready to grow?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need expert financial guidance? Let’s work together.</h2>
            <p className="mt-4 max-w-xl text-yellow-100">From tax planning to compliance support, we build premium financial solutions for businesses seeking growth with clarity.</p>
          </div>
          <div className="flex items-center justify-center">
            <NavLink to="/contact" className="inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#08221c] transition hover:brightness-105">
              Contact Our Team
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
