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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'}`}>
      <nav className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect shadow-xl rounded-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between py-4">
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

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-slate-700 space-y-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-800 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
