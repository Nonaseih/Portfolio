/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 19/12/2025 - 01:00:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, User, Code2, Palette, Zap, Rocket } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const titles = [
  'Fortunato',
  'a Developer',
  'a Designer',
  'a Creator',
]

export default function Hero() {
  const { text: displayText, cursor: showCursor } = useTypewriter(titles, 80, 50, 1500)

  // Detect mobile for disabling heavy animations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184_/_0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
      </div>

      {/* Floating Gradient Orbs - Static on mobile */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-40 -left-40 w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/10 rounded-full blur-3xl ${!isMobile ? 'animate-pulse-glow-dramatic' : ''}`} />
        <div className={`absolute bottom-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl ${!isMobile ? 'animate-pulse-glow-dramatic' : ''}`} style={{ animationDelay: '3s' }} />
        <div className={`absolute top-1/2 left-1/2 w-56 sm:w-80 h-56 sm:h-80 bg-teal-500/10 rounded-full blur-3xl ${!isMobile ? 'animate-pulse-glow-dramatic' : ''}`} style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-teal-800"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-slate-300">
                Available
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-['Playfair_Display'] font-bold leading-none mb-4 sm:mb-6">
                <span className="text-slate-100">Hi, I'm</span>
                <br />
                <span className="inline-block min-w-[200px] sm:min-w-[280px] md:min-w-[400px] bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className={`bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                A passionate full-stack developer crafting <span className="text-teal-400 font-semibold">beautiful, scalable</span> digital experiences with modern technologies and creative solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-medium text-slate-200 border-2 border-slate-700 hover:border-teal-400 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden sm:flex gap-6 lg:gap-12 pt-6 lg:pt-8"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-xs lg:text-sm text-slate-400 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-xs lg:text-sm text-slate-400 mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs lg:text-sm text-slate-400 mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-xs lg:max-w-sm h-[280px] sm:h-[320px] lg:h-[400px]">
              {/* Single Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-12px] rounded-2xl border-2 border-teal-400/40"
                style={{ zIndex: 0 }}
              />

              {/* Static Main Photo Container */}
              <div
                className="absolute inset-0 rounded-2xl z-10"
                style={{
                  background: 'linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf, #5eead4)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-900 relative">
                  {/* Profile Photo */}
                  <motion.img
                    src="/pfp.jpg"
                    alt="Fortunato"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Fallback: show User icon instead
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900';
                      fallback.innerHTML = '<div class=\"text-center\"><div class=\"mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-teal-900 to-cyan-900 flex items-center justify-center border-4 border-teal-600\"><svg class=\"w-16 h-16 text-teal-300\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"></path></svg></div><p class=\"text-sm text-slate-100 font-medium mt-4\">Add pfp.jpg to public folder</p></div>';
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />
                </div>
              </div>

              {/* Floating Info Boxes - Draggable with animations */}
              <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                className="hidden lg:flex lg:flex-col absolute -top-8 -left-8 glass-effect rounded-xl p-4 shadow-xl border border-teal-700 cursor-grab z-50"
              >
                <Code2 className="w-8 h-8 text-teal-400 mb-1" />
                <div className="text-xs font-semibold text-slate-100">Full Stack</div>
              </motion.div>

              <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                className="hidden lg:flex lg:flex-col absolute -bottom-8 -right-8 glass-effect rounded-xl p-4 shadow-xl border border-teal-700 cursor-grab z-50"
              >
                <Palette className="w-8 h-8 text-cyan-400 mb-1" />
                <div className="text-xs font-semibold text-slate-100">UI/UX Design</div>
              </motion.div>

              <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                animate={{ 
                  x: [-5, 5, -5],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                className="hidden lg:flex lg:flex-col absolute top-1/2 -right-12 glass-effect rounded-xl p-4 shadow-xl border border-teal-700 cursor-grab z-50"
              >
                <Zap className="w-8 h-8 text-yellow-400 mb-1" />
                <div className="text-xs font-semibold text-slate-100">Fast</div>
              </motion.div>

              <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                animate={{ 
                  x: [5, -5, 5],
                  y: [0, 10, 0]
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                className="hidden lg:flex lg:flex-col absolute top-1/3 -left-12 glass-effect rounded-xl p-4 shadow-xl border border-teal-700 cursor-grab z-50"
              >
                <Rocket className="w-8 h-8 text-purple-400 mb-1" />
                <div className="text-xs font-semibold text-slate-100">Scalable</div>
              </motion.div>

              {/* Floating corner accents - aligned with smaller container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-12 h-12 z-20"
              >
                <div className="w-full h-full border-t-4 border-r-4 border-cyan-400 rounded-tr-2xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 w-12 h-12 z-20"
              >
                <div className="w-full h-full border-b-4 border-l-4 border-cyan-400 rounded-bl-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-teal-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
