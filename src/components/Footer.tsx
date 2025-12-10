import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer 
      id="contact" 
      className="relative py-16 px-6 border-t border-gray-200 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-2">Yash Malav</h3>
            <p className="text-sm text-gray-500 font-light">Graphic Designer & Visual Artist</p>
          </div>

          <a 
            href="mailto:hello@yashmalav.com" 
            className="text-base text-gray-700 hover:text-gray-900 font-light transition-colors"
          >
            hello@yashm.me
          </a>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.instagram.com/yash.svg?igsh=bzdpYThqaGhxOWY2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yashmalav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://x.com/iam_YashM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>

          <p className="text-xs text-gray-500 font-light pt-4">
            © {new Date().getFullYear()} Yash Malav. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
