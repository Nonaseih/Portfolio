/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 05/12/2025 - 15:56:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Mail, href: "mailto:hello@fortunato.dev", label: "Email" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
]

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="relative bg-cream-100 dark:bg-black border-t border-teal-200/30 dark:border-neutral-800">
      {/* Gradient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-600/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Fortunato
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Crafting beautiful digital experiences with precision and creativity. Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-2 rounded-lg border border-teal-200/30 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:border-teal-300/60 dark:hover:border-[#D4AF37]/50 hover:bg-teal-50 dark:hover:bg-[#D4AF37]/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-700 dark:text-slate-300">
                Email: <a href="mailto:hello@fortunato.dev" className="text-teal-600 dark:text-teal-300 hover:underline">hello@fortunato.dev</a>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Phone: <span className="text-slate-800 dark:text-slate-100">+1 (234) 567-890</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Location: <span className="text-slate-800 dark:text-slate-100">San Francisco, CA</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-200/50 dark:via-neutral-700 to-transparent mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Fortunato. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-teal-600 fill-teal-600 dark:text-teal-400 dark:fill-teal-400" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
