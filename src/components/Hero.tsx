import { motion } from 'framer-motion';

export default function Hero() {

  const experience = [
    { role: 'Graphic Designer – Freelance', period: 'Present' },
    { role: 'Creative Head – Keyframe Studios', period: '2024 – 2025' },
    { role: 'UI/UX & Graphic Designer – AIRCBT', period: '2022 – 2024' }
    
  ];

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-24 md:pt-32 md:pb-20"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-gray-100" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-sm tracking-widest text-gray-600 uppercase">Graphic Designer & Visual Artist</p>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-10 lg:mb-10 leading-tight"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Yash Malav
            </motion.h1>

            <motion.div
              className="space-y-6 text-base md:text-lg text-gray-700 font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <p>Creating compelling visual experiences through minimalist design, typography, and thoughtful composition that brings ideas to life.</p>
              <motion.div
                className="flex items-center gap-2 text-sm pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-600">CURRENTLY AVAILABLE</span>
              </motion.div>

              <motion.a
                href="/booking"
                className="inline-flex items-center gap-2 mt-8 px-10 py-4 bg-gray-900 text-white rounded-full font-light text-base hover:bg-gray-800 transition-all hover:shadow-xl hover:scale-105"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>BOOK A CALL</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative lg:text-right lg:mt-16"
          >
            {/* Timeline line */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-300 hidden lg:block" />
            
            <div className="space-y-8 lg:pr-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                >
                  <p className="text-lg font-light text-gray-900">{item.role}</p>
                  <p className="text-sm text-gray-500 font-light tracking-wide">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
