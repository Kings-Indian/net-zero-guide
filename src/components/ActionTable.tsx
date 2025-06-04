import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Action {
  title: string;
  impact: string;
  source: string;
}

const actions: Action[] = [
  {
    title: 'Switch to renewable energy',
    impact: 'Up to 50% fewer home emissions',
    source: 'IEA, Carbon Trust',
  },
  {
    title: 'Ditch your gas car',
    impact: '4.6 tons CO₂ saved/year',
    source: 'US EPA',
  },
  {
    title: 'Eat mostly plant-based',
    impact: 'Up to 73% lower food footprint',
    source: 'Oxford, Science 2018',
  },
  {
    title: 'Vote climate',
    impact: '20–50% emissions impact via policy',
    source: 'IPCC AR6, CAT',
  },
  {
    title: 'Share & influence',
    impact: 'Multiplies impact by 3–5x',
    source: 'Yale Climate, Nature Climate Change',
  },
];

export default function ActionTable() {
  const { isDarkMode } = useTheme();

  return (
    <section id="take-action" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10 animate-fade-in"
        >
          <h2 className="section-title text-2xl font-bold text-green-700 dark:text-green-500 mb-8">
            Top Climate Actions
          </h2>
          {/* Table for desktop */}
          <div className="hidden md:block">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Impact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {actions.map((action) => (
                  <tr key={action.title} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {action.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {action.impact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {action.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Cards for mobile */}
          <div className="md:hidden space-y-4">
            {actions.map((action) => (
              <div key={action.title} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 shadow flex flex-col">
                <span className="font-bold text-green-700 dark:text-green-400">{action.title}</span>
                <span className="text-gray-700 dark:text-gray-300">{action.impact}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{action.source}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 