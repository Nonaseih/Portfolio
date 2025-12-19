/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 17/12/2025 - 23:42:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket } from 'lucide-react'

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

const skillCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
]

const stats = [
  { number: '2', label: 'Happy Clients' },
  { number: '6+', label: 'Months Learning' },
  { number: '100%', label: 'Dedication' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 bg-cream-50 dark:bg-transparent">
      {/* Background gradient orb effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-600/10 dark:bg-teal-600/10 rounded-full blur-3xl animate-orb-pulse" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-400/5 dark:bg-teal-400/5 rounded-full blur-3xl animate-orb-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="mx-auto w-full max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400 bg-teal-200/30 dark:bg-teal-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal-300/40 dark:border-teal-400/30">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            Crafting Digital <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">Excellence</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Left Column - Main Description */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p className="text-base sm:text-lg lg:text-xl">
                I'm an emerging full-stack developer with a genuine passion for creating <span className="text-teal-700 dark:text-teal-400 font-semibold">exceptional digital experiences</span>. With 6 months of hands-on development and 2 successful client projects, I'm building my expertise one line of code at a time.
              </p>

              <p className="text-lg">
                My approach focuses on clean, modern code and user-centered design. While I'm early in my journey, I bring fresh perspectives, current knowledge of the latest technologies, and an eagerness to learn and grow with every project.
              </p>

              <p className="text-lg">
                I may not have decades of experience, but I make up for it with dedication, attention to detail, and a commitment to delivering quality work. Every project is an opportunity to prove myself and exceed expectations.
              </p>
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={skillCardVariants}
                  className="p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-teal-200/30 dark:border-teal-400/30 bg-gradient-to-br from-white/80 to-teal-50/50 dark:from-teal-400/5 dark:to-teal-600/5 backdrop-blur-sm shadow-sm"
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-700 dark:text-teal-400 mb-1 sm:mb-2">{stat.number}</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlight Box */}
          <motion.div variants={itemVariants}>
            <div className="h-full rounded-2xl border border-teal-200/30 dark:border-teal-400/40 bg-gradient-to-br from-white/80 to-teal-50/50 dark:from-teal-400/10 dark:to-teal-600/10 backdrop-blur-sm p-8 flex flex-col justify-between shadow-sm">
              <div>
                <Rocket className="w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Eager to Grow</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  I'm constantly learning and staying current with modern web technologies. What I lack in years, I make up for with hunger to improve and deliver exceptional results.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-teal-200/30 dark:border-teal-400/20">
                <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest">Currently mastering</p>
                <p className="text-teal-700 dark:text-teal-400 font-semibold mt-2">Advanced React patterns & Backend development</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                variants={skillCardVariants}
                className="p-6 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 hover:border-teal-300/60 dark:hover:border-teal-400/50 transition-all duration-300 group shadow-sm"
              >
                <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-400 mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1.5 rounded-lg bg-teal-100/50 dark:bg-teal-400/10 text-teal-700 dark:text-teal-400 text-sm font-medium border border-teal-200/40 dark:border-teal-400/20 hover:bg-teal-100 dark:hover:bg-teal-400/20 transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-teal-200/30 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to collaborate?</h3>
              <p className="text-slate-700 dark:text-slate-400">Let's create something amazing together</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-white dark:text-slate-900 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-400 dark:to-teal-300 hover:from-teal-700 hover:to-teal-600 dark:hover:from-teal-300 dark:hover:to-teal-400 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
