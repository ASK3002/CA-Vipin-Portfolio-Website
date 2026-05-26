import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#051a17]/90 text-slate-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">V A SINGH & CO</p>
            <p className="max-w-sm leading-7 text-slate-300">
              Trusted Chartered Accountants delivering taxation, compliance, and financial growth solutions to businesses and professionals.
            </p>
            <p className="text-sm text-slate-400">525, 5th Floor, Lodha Signet, Manpada, Dombivli East, 421204, India</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-200">Quick Links</p>
              <ul className="space-y-2 text-slate-300">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-emerald-200">Contact</p>
              <ul className="space-y-2 text-slate-300">
                <li>Phone: <a href="tel:8652119165" className="text-white hover:text-gold">8652119165</a></li>
                <li>Email: <a href="mailto:cavipinsingh2025@gmail.com" className="text-white hover:text-gold">cavipinsingh2025@gmail.com</a></li>
                <li>Hours: Mon - Sat, 10am - 7pm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
            © 2026{' '}
            <a
                href="https://ayushsinghkaushik-portfolio.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-slate-300 text-slate-300 hover:text-white transition-colors"
            >
                Ayush Singh Kaushik
            </a>
            . All rights reserved.
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
