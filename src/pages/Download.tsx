import { Download as DownloadIcon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';

export default function Download() {
  const { language } = useApp();
  const t = translations[language].download;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv-dummy.pdf';
    link.download = t.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 animate-bounce-slow">
              <DownloadIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              {t.description}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 sm:p-12 transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <div className="w-32 h-40 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <span className="text-blue-600 dark:text-blue-300 text-5xl font-bold">CV</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Lucky Herlino Putra
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Teknik Jaringan Komputer
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <DownloadIcon className="w-6 h-6 mr-3" />
              {t.downloadButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
