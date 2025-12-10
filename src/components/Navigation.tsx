import { motion } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'PROJECTS', id: 'featured-projects' },
    { label: 'SOCIALS', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-xl font-light tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✦ YashM
            </motion.button>

            <div className="hidden md:flex gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-gray-700 hover:text-gray-900 font-light tracking-wide transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="mailto:hello@yashm.me"
                className="px-6 py-2 bg-gray-900 text-white rounded-full font-light text-sm hover:bg-gray-800 transition-all hover:shadow-lg flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                EMAIL ME
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <motion.div
            className="absolute top-24 right-6 left-6 bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-light text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:hello@yashm.me"
                className="mt-4 w-full px-6 py-3 bg-gray-900 text-white rounded-full font-light text-sm text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                EMAIL ME
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
