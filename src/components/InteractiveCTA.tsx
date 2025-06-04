import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const actions = [
  {
    id: 'energy',
    title: 'Switch to Renewable Energy',
    icon: '⚡',
    howto: '1. Check your utility\'s green power options (usually 100% renewable)\n2. Get a free solar quote from EnergySage\n3. Consider community solar if rooftop isn\'t possible\n4. Look for renewable energy credits (RECs)',
    resources: ['EnergySage.com', 'Green-e.org', 'Local utility website']
  },
  {
    id: 'transport',
    title: 'Ditch Your Gas Car',
    icon: '🚗',
    howto: '1. Calculate your current carbon footprint\n2. Research EV incentives in your area\n3. Test drive an EV this week\n4. Plan your charging strategy\n5. Consider carpooling or public transit meanwhile',
    resources: ['EV incentives database', 'PlugShare app', 'Local transit authority']
  },
  {
    id: 'diet',
    title: 'Eat Plant-Based',
    icon: '🥗',
    howto: '1. Start with Meatless Mondays\n2. Try plant-based alternatives (Beyond, Impossible)\n3. Learn 3 easy plant-based recipes\n4. Join a local CSA for fresh produce\n5. Calculate your food carbon footprint',
    resources: ['ForksOverKnives.com', 'HappyCow app', 'Local farmers markets']
  },
  {
    id: 'vote',
    title: 'Vote Climate',
    icon: '🗳️',
    howto: '1. Register to vote if not already\n2. Research candidates\' climate policies\n3. Join a climate advocacy group\n4. Contact your representatives\n5. Share climate voting guides',
    resources: ['Vote.org', 'ClimateVote.org', 'League of Conservation Voters']
  },
  {
    id: 'share',
    title: 'Share & Influence',
    icon: '📢',
    howto: '1. Share this guide with 3 friends\n2. Post about climate action on social media\n3. Join a local climate group\n4. Start a climate conversation at work\n5. Document and share your climate journey',
    resources: ['https://net-zero-guide.vercel.app/', 'ClimateActionNow.org', 'Local climate groups', 'Social media platforms']
  },
];

export default function InteractiveCTA() {
  const [selected, setSelected] = useState<null | typeof actions[0]>(null);

  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-green-100 rounded-xl shadow-lg p-8 flex flex-col items-center animate-fade-in"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-2">Pick one action you'll take today!</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full">
          {actions.map((action) => (
            <button
              key={action.id}
              className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-green-50 transition"
              onClick={() => setSelected(action)}
            >
              <span className="text-3xl mb-2">{action.icon}</span>
              <span className="font-semibold text-green-700 text-center text-sm">{action.title}</span>
            </button>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <Dialog open={true} onClose={() => setSelected(null)} className="fixed z-50 inset-0 flex items-center justify-center">
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={() => setSelected(null)} />
              <Dialog.Panel className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-auto z-50 shadow-xl">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setSelected(null)}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">{selected.icon}</span>
                  <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-2">{selected.title}</h3>
                  <div className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    <h4 className="font-semibold mb-2">Steps to Take:</h4>
                    <div className="whitespace-pre-line text-sm">{selected.howto}</div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-center">
                    <h4 className="font-semibold mb-2">Resources:</h4>
                    <ul className="text-sm">
                      {selected.resources.map((resource, index) => (
                        <li key={index} className="mb-1">{resource}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
} 