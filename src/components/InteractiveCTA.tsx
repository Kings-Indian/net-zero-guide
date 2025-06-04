import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const actions = [
  {
    id: 'energy',
    title: 'Switch to Renewable Energy',
    icon: '⚡',
    howto: 'Check your utility for green power options or get a quote for rooftop solar.'
  },
  {
    id: 'transport',
    title: 'Ditch Your Gas Car',
    icon: '🚗',
    howto: 'Consider an EV, hybrid, or public transit for your next trip.'
  },
  {
    id: 'diet',
    title: 'Eat Plant-Based',
    icon: '🥗',
    howto: 'Try a plant-based meal once a day or swap meat for beans.'
  },
  {
    id: 'vote',
    title: 'Vote Climate',
    icon: '🗳️',
    howto: 'Support climate-friendly candidates and policies in every election.'
  },
  {
    id: 'share',
    title: 'Share & Influence',
    icon: '📢',
    howto: 'Talk about climate action with friends, family, and online.'
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
              <Dialog.Panel className="relative bg-white rounded-lg p-6 max-w-sm mx-auto z-50 shadow-xl">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setSelected(null)}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-4xl mb-2">{selected.icon}</span>
                  <h3 className="text-lg font-bold text-green-700 mb-2">{selected.title}</h3>
                  <p className="text-gray-700 text-center mb-2">{selected.howto}</p>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
} 