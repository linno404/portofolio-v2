import { useState } from 'react';
import { AppProvider } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Skills from './pages/Skills';
import Download from './pages/Download';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'skills':
        return <Skills />;
      case 'download':
        return <Download />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
