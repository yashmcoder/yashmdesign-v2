import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  index: number;
  aspectRatio?: string;
}

export default function ProjectCard({ title, category, imageUrl, index, aspectRatio = 'aspect-[4/3]' }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">{title}</h3>
            <p className="text-sm text-white/90 tracking-widest uppercase">{category}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
