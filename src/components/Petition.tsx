import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface PetitionProps {
  onSuccess: () => void;
}

export default function Petition({ onSuccess }: PetitionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    organization: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { isDarkMode } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const mailtoLink = `mailto:tanishqgoyal590@gmail.com?subject=Climate Policy Alignment Petition&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACountry: ${formData.country}%0D%0AOrganization: ${formData.organization}`;
      window.location.href = mailtoLink;
      
      onSuccess();
      setFormData({ name: '', email: '', country: '', organization: '' });
    } catch (err) {
      setError('Failed to open email client. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="petition" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10 animate-fade-in"
        >
          <h2 className="section-title text-2xl font-bold text-green-700 dark:text-green-500">
            Demand 1.5°C Climate Policy Alignment
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              Join the global movement demanding stronger climate action. Current national climate plans are insufficient to meet the 1.5°C target, risking irreversible climate impacts.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Urgent Call to Action:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li><strong>European Union:</strong> Strengthen the EU Green Deal to achieve 65% emissions reduction by 2030 (currently at 55%)</li>
                <li><strong>United Kingdom:</strong> Implement stronger policies to meet the 78% reduction target by 2035 and achieve net-zero by 2050</li>
                <li><strong>Mexico:</strong> Revise the Nationally Determined Contribution (NDC) to align with 1.5°C pathway and increase renewable energy targets</li>
                <li><strong>United States:</strong> Accelerate the Inflation Reduction Act implementation and strengthen emissions standards</li>
                <li><strong>China:</strong> Peak emissions before 2025 and achieve carbon neutrality by 2060</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Key Facts:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Solar costs dropped 35% in 2024, making clean energy more accessible</li>
                <li>$4 trillion annual investment needed for fair global transition</li>
                <li>Current policies put us on track for 2.7°C warming by 2100</li>
                <li>1.5°C target requires 45% emissions reduction by 2030</li>
                <li>EU must triple its current emission reduction rate to meet 1.5°C target</li>
                <li>UK's current policies only deliver 40% of needed emissions cuts by 2030</li>
                <li>Mexico's current NDC would lead to 2.5°C warming scenario</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">Our Demands:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Immediate revision of all national climate plans to align with 1.5°C pathway</li>
                <li>End all new fossil fuel infrastructure development</li>
                <li>Phase out coal power by 2030 in developed countries</li>
                <li>Implement carbon pricing mechanisms across all major economies</li>
                <li>Increase climate finance for developing nations</li>
                <li>Strengthen renewable energy targets and remove fossil fuel subsidies</li>
              </ul>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-green-500 focus:ring-green-500 
                           dark:bg-gray-700 dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-green-500 focus:ring-green-500 
                           dark:bg-gray-700 dark:text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-green-500 focus:ring-green-500 
                           dark:bg-gray-700 dark:text-white"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Organization (Optional)
                </label>
                <input
                  id="organization"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                           shadow-sm focus:border-green-500 focus:ring-green-500 
                           dark:bg-gray-700 dark:text-white"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full dark:bg-green-600 dark:hover:bg-green-700"
            >
              {isSubmitting ? 'Opening Email...' : 'Sign Climate Policy Petition'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 