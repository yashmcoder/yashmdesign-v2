import { motion } from 'framer-motion';

const values = ['Growth', 'Creativity', 'Innovation', 'Balance', 'Excellence', 'Authenticity', 'Minimalism', 'Impact', 'Vision'];

export default function Values() {
  // Duplicate values multiple times for seamless infinite loop
  const duplicatedValues = [...values, ...values, ...values];

  return (
    <motion.section 
      id="values" 
      className="relative py-12 md:py-16 border-t border-gray-200 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 backdrop-blur-sm" />

      <div className="relative z-10">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{
            x: [0, '-33.333%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedValues.map((value, index) => (
            <div
              key={index}
              className="inline-flex px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 text-gray-800 font-light text-base shadow-sm"
            >
              {value}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
