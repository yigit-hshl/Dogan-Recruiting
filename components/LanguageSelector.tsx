
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon, ChevronDownIcon } from './icons';

const LanguageSelector: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: 'en' | 'de') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  
  const textColor = isScrolled ? 'text-slate-600' : 'text-white/90';
  const hoverColor = isScrolled ? 'hover:text-brand-secondary' : 'hover:text-white';

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 transition-colors duration-300 ${textColor} ${hoverColor}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('change_language_aria')}
      >
        <GlobeIcon className="w-6 h-6" />
        <span className="font-medium text-base">{language.toUpperCase()}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleLanguageChange('en'); }}
              className={`block px-4 py-2 text-sm ${language === 'en' ? 'font-bold text-brand-primary bg-slate-100' : 'text-slate-700'} hover:bg-slate-100 hover:text-brand-primary`}
              role="menuitem"
            >
              {t('language_en')}
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleLanguageChange('de'); }}
              className={`block px-4 py-2 text-sm ${language === 'de' ? 'font-bold text-brand-primary bg-slate-100' : 'text-slate-700'} hover:bg-slate-100 hover:text-brand-primary`}
              role="menuitem"
            >
              {t('language_de')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
