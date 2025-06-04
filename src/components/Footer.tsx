import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Created as part of a climate awareness campaign by Tanishq Goyal
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="mailto:tanishqgoyal590@gmail.com"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              Email Me!
            </a>
            <a
              href="https://fridaysforfuture.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              Fridays for Future
            </a>
            <a
              href="https://drawdown.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              Project Drawdown
            </a>
            <a
              href="#take-action"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              Sources
            </a>
            <a
              href="https://www.un.org/en/climatechange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              UN Climate Change
            </a>
            <a
              href="https://www.ipcc.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              IPCC
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 