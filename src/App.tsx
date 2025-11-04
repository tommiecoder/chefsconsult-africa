import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/services/')) {
        const service = path.split('/services/')[1];
        setCurrentService(service);
        setCurrentPage('service-detail');
      } else if (path === '/' || path === '/home') {
        setCurrentPage('home');
      } else {
        const page = path.substring(1) || 'home';
        setCurrentPage(page);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: string, service?: string) => {
    if (service) {
      setCurrentService(service);
      setCurrentPage('service-detail');
      window.history.pushState({}, '', `/services/${service}`);
    } else {
      setCurrentPage(page);
      setCurrentService(null);
      window.history.pushState({}, '', `/${page === 'home' ? '' : page}`);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'service-detail':
        return <ServiceDetail service={currentService} navigate={navigate} />;
      case 'booking':
        return <Booking />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
