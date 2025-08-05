
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Bars3Icon, XMarkIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={isMenuOpen ? closeMenu : undefined} className="flex items-center space-x-3">
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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className={`text-lg font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-brand-secondary' : 'text-white/90 hover:text-white'}`}>
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="flex items-center space-x-4">
                 <a href="#contact" className={`px-5 py-2 rounded-full font-semibold text-white transition-all duration-300 ${isScrolled ? 'bg-brand-secondary hover:bg-brand-dark' : 'bg-brand-accent hover:bg-orange-500'}`}>
                  {t('get_in_touch')}
                </a>
                <div className="border-l h-8" style={{borderColor: isScrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)'}}></div>
                <LanguageSelector isScrolled={isScrolled} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-2 -mr-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset ${isScrolled ? 'text-brand-primary focus:ring-brand-primary' : 'text-white focus:ring-white'}`}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-8 w-8" />
                </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Panel */}
      <div
          id="mobile-menu"
          className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col bg-white ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
      >
           <div className="flex items-center justify-between h-20 px-6 shadow-sm flex-shrink-0 bg-white relative z-10">
               <a href="#" onClick={closeMenu} className="flex items-center space-x-3">
                   <svg className="h-9 w-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                       <defs>
                           <linearGradient id="logo-gradient-mobile" x1="0" y1="0" x2="1" y2="1">
                               <stop offset="0%" stopColor="#1976D2" />
                               <stop offset="100%" stopColor="#0D47A1" />
                           </linearGradient>
                       </defs>
                       <path fill="url(#logo-gradient-mobile)" d="M6 4V28H16C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4H6Z" />
                       <path d="M18 18L28 28" stroke="#FFB74D" strokeWidth="4" strokeLinecap="round" />
                   </svg>
                   <span className="text-2xl font-extrabold tracking-tight text-brand-primary">Dogan Recruiting</span>
               </a>
              <button
                  onClick={closeMenu}
                  className="p-2 -mr-2 rounded-md text-brand-primary"
                  aria-label="Close menu"
              >
                  <XMarkIcon className="h-8 w-8" />
              </button>
           </div>
           <div className="flex-grow flex flex-col items-center justify-center -mt-20">
              <nav className="flex flex-col items-center text-center space-y-6">
                  {navLinks.map((link) => (
                      <a
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className="text-2xl font-semibold text-slate-700 hover:text-brand-primary transition-colors"
                      >
                          {link.name}
                      </a>
                  ))}
              </nav>
              <div className="mt-10 pt-6 border-t border-slate-200 w-full max-w-xs flex flex-col items-center space-y-6">
                  <a 
                      href="#contact"
                      onClick={closeMenu}
                      className="w-full text-center px-6 py-3 rounded-full font-semibold text-white bg-brand-secondary hover:bg-brand-dark transition-all duration-300"
                  >
                      {t('get_in_touch')}
                  </a>
                  <LanguageSelector isScrolled={true} />
              </div>
           </div>
      </div>
    </>
  );
};

export default Header;
