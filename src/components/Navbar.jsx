import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { siteRoutes } from '../routes/siteRoutes'
import logo from '../assets/logo.svg'

const navLinks = siteRoutes

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061e1a]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          <div className="rounded-xl bg-[#f5e6c8] p-2 shadow-lg shadow-black/20 border border-[#e8d7b5]">
  <img
    src={logo}
    alt="V A SINGH & CO"
    className="h-12 w-12 object-contain"
  />
</div>
          <div>
            <p className="text-base font-semibold">V A SINGH & CO</p>
            <p className="text-xs text-slate-300">Chartered Accountants</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition duration-300 ${
                  isActive ? 'bg-emerald-900/90 text-white shadow-lg shadow-emerald-900/20' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute inset-x-0 top-full z-40 overflow-hidden border-t border-white/10 bg-[#061e1a]/95 px-6 py-4 shadow-2xl shadow-black/40 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-3xl px-4 py-4 text-base font-medium transition duration-300 ${
                    isActive ? 'bg-emerald-900/90 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
