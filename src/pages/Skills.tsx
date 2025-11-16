import { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { skills } from '../data/content';

export default function Skills() {
  const { language } = useApp();
  const t = translations[language].skills;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      filteredSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, skill.name]));
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setAnimatedSkills(new Set());
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'All' ? t.allCategories : category}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-900 dark:text-white font-medium">
                  {skill.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {skill.percentage}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animatedSkills.has(skill.name) ? `${skill.percentage}%` : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
