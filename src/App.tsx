import { useState } from 'react'
import Header from './components/Header';
import WhyItMatters from './components/WhyItMatters';
import ActionTable from './components/ActionTable';
import InteractiveCTA from './components/InteractiveCTA';
import Petition from './components/Petition';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from './context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 
                hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}

function AppContent() {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className="flex-grow pt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Your Guide to Personal Climate Action
          </h1>
          <WhyItMatters />
          <ActionTable />
          <InteractiveCTA />
          <Petition onSuccess={() => setShowThankYou(true)} />
        </div>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
