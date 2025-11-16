import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { language } = useApp();
  const t = translations[language].home;

  return (
    <div className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-blue-600 dark:text-blue-400 font-medium">{t.greeting}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Lucky Herlino Putra
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              {t.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.viewProjects}
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
              >
                {t.viewBlog}
              </button>
              <button
                onClick={() => onNavigate('download')}
                className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.downloadCV}
              </button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Lucky Herlino Putra"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
