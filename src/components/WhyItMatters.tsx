import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function WhyItMatters() {
  const { isDarkMode } = useTheme();

  return (
    <section id="why-it-matters" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10 animate-fade-in"
        >
          <h2 className="section-title text-2xl font-bold text-green-700 dark:text-green-500">
            Why Climate Action Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The climate crisis is the defining challenge of our time. Every degree of warming matters, and every action counts. 
            By making sustainable choices in our daily lives, we can collectively make a significant impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 