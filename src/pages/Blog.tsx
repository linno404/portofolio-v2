import { useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { translations } from '../data/translations';
import { blogPosts } from '../data/content';
import { BlogPost } from '../types';

export default function Blog() {
  const { language } = useApp();
  const t = translations[language].blog;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.backToBlog}
          </button>

          <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-fade-in">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(selectedPost.date).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedPost.title}
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                {selectedPost.content}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              onClick={() => setSelectedCategory(category)}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium">
                  {t.readMore} →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
