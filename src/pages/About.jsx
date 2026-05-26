import { motion } from 'framer-motion'

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8">
      <section className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">About Us</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Trusted Chartered Accountants with a premium professional presence.</h1>
          <p className="mt-4 max-w-2xl text-slate-700">V A SINGH & CO combines deep financial expertise, personalized client service, and a commitment to accurate compliance for companies across India.</p>
        </motion.div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-6 rounded-[2rem] border border-slate-200/40 bg-[#fbf7ee]/90 p-8 shadow-premium">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Firm Introduction</p>
            <p className="text-slate-700 leading-8">
              V A SINGH & CO is a chartered accountancy firm led by CA Vipin Ashok Singh. We deliver accounting, taxation, audit, and advisory services built for businesses that value clarity, compliance, and growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass-card p-6 text-slate-900">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-slate-700">Empower businesses with dependable financial planning and compliance services that support growth.</p>
            </div>
            <div className="glass-card p-6 text-slate-900">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-3 text-slate-700">To be the trusted finance partner for firms seeking premium accounting and advisory support.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Why Clients Trust Us</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• Personalized compliance with transparent fees.</li>
              <li>• Timely reporting and a professional approach.</li>
              <li>• Experienced team with corporate and tax expertise.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-200/40 bg-[#fbf7ee]/90 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Founding Partner</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">VIPIN ASHOK SINGH</h2>
          <p className="mt-4 text-slate-700 leading-8">Chartered Accountant with a strong focus on taxation, audit assurance, and financial advisory for businesses across industries.</p>
          <div className="mt-8 grid gap-4">
            {[
              { label: 'Experience', value: '10+ years' },
              { label: 'Core Strength', value: 'Taxation, Audit & Compliance' },
              { label: 'Approach', value: 'Professional, responsive, premium' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200/40 bg-[#ede2cd]/90 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-16 space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Professional Commitment</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Our promise to every client.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            'Confidential handling of financial information.',
            'Proactive advice before compliance deadlines.',
            'Transparent reporting with no surprises.',
          ].map((text, index) => (
            <motion.div key={text} whileHover={{ y: -8 }} className="glass-card p-8">
              <p className="text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
