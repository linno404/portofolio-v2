import { Instagram, Linkedin, Github } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { socialLinks } from '../data/content';

export default function Footer() {
  const { language } = useApp();
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400">{t.school}</p>
            <p className="text-sm text-gray-400 mt-1">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
