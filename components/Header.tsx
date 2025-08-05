
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_process'), href: '#process' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-3">
             <svg className="h-9 w-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logo-gradient-header" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1976D2" />
                        <stop offset="100%" stopColor="#0D47A1" />
                    </linearGradient>
                </defs>
                <path fill="url(#logo-gradient-header)" d="M6 4V28H16C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4H6Z" />
                <path d="M18 18L28 28" stroke="#FFB74D" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>Dogan Recruiting</span>
          </a>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-brand-secondary' : 'text-white/90 hover:text-white'}`}>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
               <a href="#contact" className={`px-5 py-2 rounded-full font-semibold text-white transition-all duration-300 ${isScrolled ? 'bg-brand-secondary hover:bg-brand-dark' : 'bg-brand-accent hover:bg-orange-500'}`}>
                {t('get_in_touch')}
              </a>
              <div className="border-l h-8" style={{borderColor: isScrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}}></div>
              <LanguageSelector isScrolled={isScrolled} />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;