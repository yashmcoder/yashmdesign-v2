import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ArrowDown } from 'lucide-react';

const pastProjects = [
  {
    title: 'Geometric Study',
    category: 'Art Direction',
    imageUrl: 'https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Light & Shadow',
    category: 'Photography',
    imageUrl: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Modern Spaces',
    category: 'Design System',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Abstract Forms',
    category: 'Branding',
    imageUrl: 'https://images.pexels.com/photos/1909656/pexels-photo-1909656.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Urban Perspectives',
    category: 'Visual Identity',
    imageUrl: 'https://images.pexels.com/photos/2442323/pexels-photo-2442323.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Minimalist Architecture',
    category: 'Editorial Design',
    imageUrl: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function PastProjects() {
  return (
    <section className="relative py-20 md:py-32 px-6 border-t border-gray-200 bg-white">
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
              Selected Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light max-w-2xl">
              Additional work exploring various design disciplines and creative directions.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {pastProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button className="px-8 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-light tracking-wide hover:border-gray-900 hover:text-gray-900 hover:shadow-md transition-all">
            VIEW MORE WORK
          </button>
        </motion.div>
      </div>
    </section>
  );
}
