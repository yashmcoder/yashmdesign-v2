import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import Footer from '../components/Footer';

export default function Booking() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Initialize Cal after script loads
    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', { origin: 'https://app.cal.com' });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-gray-100">
      {/* Header */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-light">Back to Home</span>
          </a>
        </div>
      </motion.div>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Schedule a Call
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Choose a time that works best for you. I'm excited to discuss your project and explore how we can work together.
            </p>
          </div>

          {/* Cal.com Embed Container */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://cal.com/yashmalav/30min?theme=light"
              width="100%"
              height="700"
              frameBorder="0"
              style={{ border: 0, borderRadius: '8px' }}
              allow="camera; microphone; autoplay; display-capture; clipboard-write"
            />
          </motion.div>

          <motion.p
            className="text-center text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            All times are shown in your local timezone
          </motion.p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
