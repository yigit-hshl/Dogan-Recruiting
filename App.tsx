
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Jobs from './components/Jobs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import AGB from './components/AGB';
import Privacy from './components/Privacy';
import Guide from './components/Guide';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['impressum', 'agb', 'privacy', 'guide'].includes(hash)) {
        setPage(hash);
        window.scrollTo(0, 0);
      } else {
        setPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'impressum':
        return <Impressum />;
      case 'agb':
        return <AGB />;
      case 'privacy':
        return <Privacy />;
      case 'guide':
        return <Guide />;
      default:
        return (
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <Jobs />
            <Testimonials />
            <Contact />
          </main>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="bg-brand-light text-slate-800">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
