import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: 'Packaging Design',
    category: 'Product Mockups & Brand Elements',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_1vg50v1vg50v1vg5.png',
  },
  {
    title: 'Geometric Composition',
    category: 'Shape Based Visual System',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_3iloyx3iloyx3ilo.png',
  },
  {
    title: 'Game Illustration',
    category: 'Character Art & Environment',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_7cduv37cduv37cdu.png',
  },
  {
    title: 'App Logo Design',
    category: 'Symbol & Shape Rendering',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_aih46zaih46zaih4.png',
  },
  {
    title: 'Call & Chat UI',
    category: 'Mobile Interface Screens',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_gfhi4ugfhi4ugfhi.png',
  },
  {
    title: 'Flat Vector Illustration',
    category: 'Fox Icon Graphic',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_jnvz7xjnvz7xjnvz.png',
  },
  {
    title: 'Poster Design',
    category: 'Typography & Visual Effects',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_ovvq7sovvq7sovvq.png',
  },
  {
    title: '3D Artwork',
    category: 'Geometric Object Render',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_p7ba4p7ba4p7ba4p.png',
  },
  {
    title: 'Emblame Design',
    category: 'Symbol Render & Lighting',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_tfp0ymtfp0ymtfp0.png',
  },
  {
    title: 'Can Packaging Design',
    category: 'Label Layouts & Product Mockups',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_tmb5bytmb5bytmb5.png',
  },
  {
    title: 'Finance App UI',
    category: 'Dashboard , Analytics & QR Screen',
    imageUrl: 'https://pub-716f19976bdb47199c4f009f252c1d36.r2.dev/gdesings/Gemini_Generated_Image_u07kn8u07kn8u07k.png',
  },
];

export default function FeaturedProjects() {
  return (
    <motion.section 
      id="featured-projects" 
      className="relative py-20 md:py-32 px-6 border-t border-gray-200 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900">
              Featured Work
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl">
              A selection of projects that showcase creative exploration and design thinking.
            </p>
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
