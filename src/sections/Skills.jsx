/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/12/2025 - 00:05:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion, useMotionValue, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Framer Motion', level: 90 },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 87 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'API Design', level: 88 },
    ]
  },
  {
    title: 'Professional',
    icon: '🚀',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Performance Optimization', level: 86 },
      { name: 'Accessibility', level: 84 },
      { name: 'Git & DevOps', level: 89 },
    ]
  }
]

function SkillCard({ name, level, index }) {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    const unsubscribe = count.on("change", latest => {
      setDisplay(Math.round(latest))
    })

    return unsubscribe
  }, [count])

  useEffect(() => {
    if (inView) {
      animate(count, level, { duration: 1.5, ease: "easeOut" })
    }
  }, [inView, count, level])

  return (
    <motion.div
      ref={(el) => {
        ref.current = el
        inViewRef(el)
      }}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-teal-700/20 dark:from-teal-400/20 dark:to-teal-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 border border-teal-200/30 dark:border-neutral-700 group-hover:border-teal-300/60 dark:group-hover:border-teal-400/50 rounded-xl p-6 transition-all duration-300 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-800 dark:text-slate-100 font-semibold text-lg">{name}</span>
          <motion.span
            className="text-teal-600 dark:text-teal-300 font-bold text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {display}%
          </motion.span>
        </div>

        <div className="relative h-3 w-full bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden border border-teal-200/30 dark:border-neutral-700">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-600 to-teal-500 dark:from-teal-400 dark:to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-transparent dark:from-teal-400/30 dark:to-transparent rounded-full blur-sm" />
        </div>
      </div>
    </motion.div>
  )
}

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="skills" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 bg-cream-50 dark:bg-transparent">
      {/* Background gradient orb effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/8 dark:bg-teal-400/8 rounded-full blur-3xl animate-orb-pulse" />
        <div className="absolute bottom-1/4 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-teal-600/8 dark:bg-teal-600/8 rounded-full blur-3xl animate-orb-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400 bg-teal-200/30 dark:bg-teal-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal-300/40 dark:border-teal-400/30">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            Skills & <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-700 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 mt-4 sm:mt-6 max-w-2xl">
            A comprehensive toolkit of modern technologies and proven expertise across all layers of web development.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl">{category.icon}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{category.title}</h3>
              </div>
              
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    index={categoryIdx * 4 + skillIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-teal-200/30 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 shadow-sm">
              <p className="text-teal-600 dark:text-teal-300 font-bold text-2xl mb-2">20+</p>
              <p className="text-slate-700 dark:text-slate-300">Projects Completed</p>
            </div>
            <div className="p-6 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 shadow-sm">
              <p className="text-teal-600 dark:text-teal-300 font-bold text-2xl mb-2">6+</p>
              <p className="text-slate-700 dark:text-slate-300">Months Learning</p>
            </div>
            <div className="p-6 rounded-xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 shadow-sm">
              <p className="text-teal-600 dark:text-teal-300 font-bold text-2xl mb-2">2</p>
              <p className="text-slate-700 dark:text-slate-300">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}