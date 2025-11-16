import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, theme, toggleLanguage, toggleTheme } = useApp();
  const t = translations[language].nav;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'projects', label: t.projects },
    { id: 'blog', label: t.blog },
    { id: 'skills', label: t.skills },
    { id: 'download', label: t.downloadCV }
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform"
          >
            LHP
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
