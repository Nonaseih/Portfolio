/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 17/12/2025 - 23:44:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:your@email.com',
    icon: Mail,
    color: 'from-teal-500',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
    color: 'from-gray-400',
    external: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
    color: 'from-blue-500',
    external: true,
  },
  {
    name: 'Message',
    url: '#',
    icon: MessageCircle,
    color: 'from-purple-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 bg-cream-50 dark:bg-transparent">
      {/* Background gradient orb effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/8 dark:bg-teal-400/8 rounded-full blur-3xl animate-orb-pulse" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-teal-400/8 dark:bg-purple-500/8 rounded-full blur-3xl animate-orb-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400 bg-teal-200/30 dark:bg-teal-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal-300/40 dark:border-teal-400/30">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            Let's Create <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            Whether you have a project in mind or just want to chat, I'd love to hear from you. Let's build something incredible together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@fortunato.dev"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 hover:border-teal-300/60 dark:hover:border-teal-400/50 group transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-teal-600/20 to-transparent dark:from-teal-400/20 dark:to-transparent group-hover:from-teal-600/30 dark:group-hover:from-teal-400/30 transition-all">
                    <Mail className="w-6 h-6 text-teal-700 dark:text-teal-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-neutral-400">Email</p>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">hello@fortunato.dev</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 hover:border-teal-300/60 dark:hover:border-[#D4AF37]/50 group transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-transparent group-hover:from-blue-500/30 transition-all">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-neutral-400">Phone</p>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">+1 (234) 567-890</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Follow</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target={social.external ? '_blank' : '_self'}
                      rel={social.external ? 'noreferrer' : ''}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-4 rounded-lg border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 hover:border-teal-300/60 dark:hover:border-teal-400/50 group transition-all duration-300 flex flex-col items-center gap-2 shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-slate-600 dark:text-neutral-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors" />
                      <p className="text-xs font-semibold text-slate-600 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{social.name}</p>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-teal-300/60 dark:focus:border-teal-400/50 focus:ring-1 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-300"
                    required
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-teal-300/60 dark:focus:border-teal-400/50 focus:ring-1 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-300"
                    required
                  />
                </motion.div>
              </div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-4 py-3 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-teal-300/60 dark:focus:border-teal-400/50 focus:ring-1 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 rounded-xl font-semibold text-white dark:text-slate-900 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-400 dark:to-cyan-400 hover:from-teal-700 hover:to-teal-600 dark:hover:from-cyan-400 dark:hover:to-teal-300 transition-all duration-300 cursor-pointer shadow-md"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>
              </motion.div>

              {/* Terms */}
              <p className="text-xs text-slate-600 dark:text-neutral-500 text-center">
                I'll get back to you as soon as possible. We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
