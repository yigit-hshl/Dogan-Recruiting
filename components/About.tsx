
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1600&auto=format&fit=crop" alt="Founder of Dogan Recruiting discussing strategy" className="rounded-lg shadow-2xl w-full" />
             <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-6 rounded-lg shadow-xl max-w-xs text-center">
                <p className="text-2xl font-bold text-brand-accent mb-1">{t('about_callout_title')}</p>
                <p className="text-base font-semibold">{t('about_callout_text')}</p>
            </div>
          </div>
          <div className="text-slate-700">
            <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('about_super_title')}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-6">{t('about_title')}</h3>
            <p className="text-lg mb-4">
              {t('about_p1')}
            </p>
            <p className="text-lg mb-6">
              {t('about_p2')}
            </p>
            <a href="#services" className="bg-brand-secondary hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-md text-base transition duration-300 inline-block shadow-lg">
              {t('explore_services_button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;