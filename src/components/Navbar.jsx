/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/12/2025 - 01:21:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'}`}>
      <nav className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-xl sm:rounded-2xl bg-slate-900/95' 
          : 'bg-slate-900/80 sm:bg-transparent'
      }`}>
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group relative overflow-hidden"
          >
            <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold tracking-tight flex items-center">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent relative z-10">
                F
              </span>
              <span className={`text-slate-100 transition-all duration-700 ${
                scrolled ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
                ortunato
              </span>
            </span>
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-xl hover:bg-slate-800 active:bg-slate-700 transition-colors"
          >
            {open ? (
              <X className="w-6 h-6 text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {open && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/90 z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-slate-900 rounded-3xl border-2 border-teal-500/30 shadow-2xl shadow-teal-500/20 p-8 space-y-2">
              <div className="text-center mb-6">
                <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Menu</p>
              </div>
              {links.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-center px-6 py-4 text-lg font-bold text-slate-100 hover:text-teal-400 hover:bg-teal-500/10 rounded-xl transition-all duration-200 border-2 border-transparent hover:border-teal-500/30 active:scale-95"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
