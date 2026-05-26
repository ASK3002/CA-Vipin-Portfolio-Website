import { motion } from 'framer-motion'

const services = [
  { title: 'GST Filing', description: 'Accurate monthly and annual GST returns with compliance assurance.', icon: '📄' },
  { title: 'Income Tax Return Filing', description: 'Individual and corporate ITR preparation for optimized outcomes.', icon: '🧾' },
  { title: 'Company Registration', description: 'Complete registration support for LLP, Private Ltd and OPC entities.', icon: '🏢' },
  { title: 'Audit & Assurance', description: 'Statutory and internal audit services with trusted reporting.', icon: '✔️' },
  { title: 'Accounting & Bookkeeping', description: 'Clean records, monthly statements and advisory-ready books.', icon: '📘' },
  { title: 'Tax Planning', description: 'Strategic tax savings with local compliance and growth insight.', icon: '💡' },
  { title: 'Financial Consulting', description: 'Cash flow, budgeting and financial planning for sustainable growth.', icon: '📊' },
  { title: 'Business Compliance', description: 'Regulatory filings, ROC support and corporate maintenance.', icon: '🛡️' },
  { title: 'ROC Filing', description: 'Annual returns, board resolutions and ROC compliance handled.', icon: '🗂️' },
  { title: 'Payroll Services', description: 'Payroll processing, PF, ESI and salary bookkeeping support.', icon: '💼' },
]

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8">
      <section className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Premium financial services for every stage of your business.</h1>
          <p className="mt-4 max-w-2xl text-slate-700">Our service suite is designed for growing enterprises, professionals, and business owners who want secure compliance and confident financial planning.</p>
        </motion.div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="glass-card group overflow-hidden"
          >
            <div className="p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-600 to-[#a38752] text-2xl shadow-lg shadow-black/15">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
            </div>
            <div className="border-t border-white/10 bg-white/5 px-8 py-4 text-sm text-slate-600 transition group-hover:bg-emerald-700/10">Premium care for your business finances.</div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Services
