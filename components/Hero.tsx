
import React from 'react';
import { ChevronDownIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          {t('hero_title')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#process" className="bg-brand-accent hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            {t('find_role_button')}
          </a>
          <a href="#contact" className="bg-brand-secondary hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            {t('hire_talent_button')}
          </a>
        </div>
      </div>
       <a href="#about" className="absolute bottom-10 animate-bounce">
        <ChevronDownIcon className="w-10 h-10 text-white/80" />
      </a>
    </section>
  );
};

export default Hero;
