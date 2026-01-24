import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductManagementPath } from './pages/ProductManagementPath';
import { ProductDesignPath } from './pages/ProductDesignPath';
import { UserResearchPath } from './pages/UserResearchPath';
import { UXWritingPath } from './pages/UXWritingPath';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ChooseYourPath } from './pages/ChooseYourPath';
import { Quiz } from './pages/Quiz';
import { Mentors } from './pages/Mentors';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Templates } from './pages/Templates';
import { LanguageProvider } from './context/LanguageContext';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <LanguageProvider>
      <Toaster position="top-center" />
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    return path === '/' || path === '' ? '/' : path;
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and scroll to top when path changes
  useEffect(() => {
    // Update document title based on current path
    const pageTitles: { [key: string]: string } = {
      '/': 'StartInProduct - Structured Learning Paths for Product Careers',
      '/product-management': 'Product Management Path - StartInProduct',
      '/product-design': 'Product Design Path - StartInProduct',
      '/user-research': 'User Research Path - StartInProduct',
      '/ux-writing': 'UX Writing Path - StartInProduct',
      '/choose-your-path': 'Choose Your Path - StartInProduct',
      '/quiz': 'Career Assessment - StartInProduct',
      '/mentors': 'Our Mentors - StartInProduct',
      '/templates': 'Templates & Resources - StartInProduct',
      '/about': 'About - StartInProduct',
      '/contact': 'Contact - StartInProduct',
      '/privacy': 'Privacy Policy - StartInProduct',
      '/terms': 'Terms of Service - StartInProduct',
    };
    document.title = pageTitles[currentPath] || 'StartInProduct';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    try {
      let pathname = currentPath.split('?')[0];

      // Strip language prefix for routing matches
      if (pathname.startsWith('/ar')) {
        pathname = pathname.replace(/^\/ar/, '');
      } else if (pathname.startsWith('/en')) {
        pathname = pathname.replace(/^\/en/, '');
      }

      // Handle root path after stripping (empty string becomes /)
      if (pathname === '') pathname = '/';
      switch (pathname) {
        case '/':
          return <Home onNavigate={handleNavigate} />;
        case '/product-management':
          return <ProductManagementPath onNavigate={handleNavigate} />;
        case '/product-design':
          return <ProductDesignPath onNavigate={handleNavigate} />;
        case '/user-research':
          return <UserResearchPath onNavigate={handleNavigate} />;
        case '/ux-writing':
          return <UXWritingPath onNavigate={handleNavigate} />;
        case '/choose-your-path':
          return <ChooseYourPath onNavigate={handleNavigate} />;
        case '/quiz':
          return <Quiz onNavigate={handleNavigate} />;
        case '/mentors':
          return <Mentors onNavigate={handleNavigate} />;
        case '/templates':
          return <Templates onNavigate={handleNavigate} />;
        case '/about':
          return <About onNavigate={handleNavigate} />;
        case '/contact':
          return <Contact onNavigate={handleNavigate} />;
        case '/privacy':
          return <Privacy />;
        case '/terms':
          return <Terms />;
        default:
          return <NotFound onNavigate={handleNavigate} />;
      }
    } catch (error) {
      console.error('Error rendering page:', error);
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please check the console for errors</p>
            <button
              onClick={() => setCurrentPath('/')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPath={currentPath} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
