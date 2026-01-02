/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 17/12/2025 - 23:43:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Task Management App',
    description: 'A clean and functional to-do list application with drag-and-drop functionality, local storage persistence, and task filtering. Features a modern UI with smooth animations and responsive design.',
    tags: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    image: '✓',
    color: 'from-teal-500',
    link: 'https://nonaseih.github.io/Task-Manager/',
  },
  {
    title: 'Digital Product Interface',
    description: 'A refined UI system focused on hierarchy, spacing, and subtle interaction — designed to feel confident without being loud. Includes comprehensive design tokens and accessibility features.',
    tags: ['UI Systems', 'Design Tokens', 'Accessibility', 'Figma'],
    image: '🖥️',
    color: 'from-purple-500',
    link: 'https://nonaseih.github.io/Digital-Product-Interface/',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and optimized checkout experience. Built with modern web technologies.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '🛍️',
    color: 'from-blue-500',
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics, custom charts, and responsive design. Focuses on clarity and actionable insights for users.',
    tags: ['React', 'D3.js', 'TypeScript', 'Socket.io'],
    image: '📊',
    color: 'from-cyan-500',
    link: '#',
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

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className={index % 2 === 1 ? 'md:order-2' : ''}
          initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            {/* Project Number */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Project {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-100/50 to-cyan-100/50 dark:from-teal-400/10 dark:to-cyan-500/10 text-sm font-medium text-teal-700 dark:text-teal-300 border border-teal-200/40 dark:border-teal-400/30 hover:border-teal-300/60 dark:hover:border-teal-400/60 transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={project.link}
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-300 font-semibold hover:gap-3 transition-all duration-300 group/link"
            >
              View Project
              <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          className={index % 2 === 1 ? 'md:order-1' : ''}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-80 rounded-2xl border border-teal-200/30 dark:border-neutral-700 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-neutral-800/50 dark:to-neutral-900/50 overflow-hidden group/card shadow-sm"
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-20 group-hover/card:opacity-30 transition-opacity duration-300`} />
            
            {/* Icon/Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 10, 0], y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-8xl filter drop-shadow-lg"
              >
                {project.image}
              </motion.div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      {index !== projects.length - 1 && (
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-teal-200/50 dark:via-neutral-700 to-transparent" />
      )}
    </motion.article>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="projects" className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-16 sm:py-20 bg-cream-50 dark:bg-transparent">
      {/* Background gradient orb effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-teal-600/8 dark:bg-teal-400/8 rounded-full blur-3xl animate-orb-pulse" />
        <div className="absolute bottom-0 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-teal-400/8 dark:bg-purple-500/8 rounded-full blur-3xl animate-orb-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto w-full max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-400 bg-teal-200/30 dark:bg-teal-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-teal-300/40 dark:border-teal-400/30">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            Selected <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
            A curated selection of projects where execution, creativity, and precision were non-negotiable. Each showcases my commitment to excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-teal-200/30 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 sm:mb-2">See more work?</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-400">Check out my GitHub and portfolio for additional projects</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white dark:text-slate-900 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-400 dark:to-cyan-400 hover:from-teal-700 hover:to-teal-600 dark:hover:from-cyan-400 dark:hover:to-teal-300 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
