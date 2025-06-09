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
          <h2 className="section-title text-2xl font-bold text-green-700 dark:text-green-500 text-center">
            Why Climate Action Matters
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            Reaching the <span className="font-bold">1.5°C</span> target demands a bold and rapid overhaul of our global energy system. While fossil fuels have historically dominated, recent years have seen a significant surge in renewable energy sources like solar and wind. Climate models depict a future where fossil fuel reliance is nearly eliminated by 2100, with the remaining emissions balanced through net-negative solutions such as direct air capture and reforestation.

            However, this shift won't happen on its own. It requires unprecedented global investment, estimated at $4–5 trillion per year, to ensure a just transition for developing nations and to build the necessary infrastructure. Continued cost reductions in renewables, coupled with advancements in grid technology, carbon capture and storage (CCS), direct air capture (DAC), and emerging breakthroughs like fusion power, will be essential.
          </p>

          {/* Impact Comparison Table */}
          <div className="mt-8 mb-8 overflow-x-auto">
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
              Climate Impact Comparison
            </h3>
            <p className="text-sm text-center mb-4 text-gray-600 dark:text-gray-400">
              <span className="font-bold">1.5°C</span> is the target of the Paris Agreement; <span className="font-bold">2.7°C</span> reflects current policy trajectories as of 2025.
            </p>
            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Impact Area</th>
                  <th className="px-3 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">1.5°C Warming</th>
                  <th className="px-3 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">2.7°C Warming</th>
                  <th className="px-3 py-2 text-left font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Relative Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Extreme Heat</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">14% of population exposed annually</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">37% of population exposed annually</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">2.6× more people</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Sea Level Rise (2100)</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">0.4 meters</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">0.6–1.1 meters</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">1.5–2.8× higher</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Arctic Ice-Free Summers</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">1 summer every 100 years</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">1 summer every 10 years</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">10× more frequent</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Coral Reef Loss</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">70–90% decline</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">{'>'}99% decline</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">Near-total collapse</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Species Extinction Risk</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">6% insects, 8% plants</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">18% insects, 16% plants</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">3× insects, 2× plants</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Crop Yield Loss</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">–5% (maize), –3% (wheat)</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">–30% (maize), –15% (wheat)</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">6× maize, 5× wheat losses</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Water Scarcity</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">350 million people affected</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">800 million people affected</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">2.3× more people</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Extreme Rainfall</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+10% intensity</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+20–30% intensity</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">2–3× more intense</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">GDP Loss (2100)</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">–1.7%</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">–10–18%</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">6–10× greater economic damage</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Heat-Related Deaths</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">48,000/year (additional)</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">150,000+/year (additional)</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">3× higher mortality</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Wildfire Burn Area</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+40% (vs. pre-industrial)</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+100–300% (vs. pre-industrial)</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">2.5–7.5× more land burned</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100">Hunger Risk</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+100 million people</td>
                  <td className="px-3 py-2 text-gray-500 dark:text-gray-400">+500 million people</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">5× more food-insecure people</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 