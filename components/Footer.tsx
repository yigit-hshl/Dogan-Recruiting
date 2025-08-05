
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                 <a href="#" className="flex items-center space-x-3 mb-4">
                     <svg className="h-9 w-9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="logo-gradient-footer" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#1976D2" />
                                <stop offset="100%" stopColor="#0D47A1" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#logo-gradient-footer)" d="M6 4V28H16C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4H6Z" />
                        <path d="M18 18L28 28" stroke="#FFB74D" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    <span className="text-2xl font-extrabold tracking-tight">Dogan Recruiting</span>
                 </a>
                 <p className="text-slate-300">{t('footer_subtitle')}</p>
            </div>
             <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-brand-accent mb-4">{t('footer_links_title')}</h3>
                <ul className="space-y-2">
                    <li><a href="#about" className="hover:text-brand-accent transition-colors">{t('nav_about')}</a></li>
                    <li><a href="#services" className="hover:text-brand-accent transition-colors">{t('nav_services')}</a></li>
                    <li><a href="#process" className="hover:text-brand-accent transition-colors">{t('nav_process')}</a></li>
                    <li><a href="#contact" className="hover:text-brand-accent transition-colors">{t('nav_contact')}</a></li>
                    <li><a href="#guide" className="hover:text-brand-accent transition-colors">{t('footer_guide')}</a></li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-brand-accent mb-4">{t('footer_legal_title')}</h3>
                <ul className="space-y-2">
                    <li><a href="#impressum" className="hover:text-brand-accent transition-colors">{t('footer_impressum')}</a></li>
                    <li><a href="#agb" className="hover:text-brand-accent transition-colors">{t('footer_agb')}</a></li>
                    <li><a href="#privacy" className="hover:text-brand-accent transition-colors">{t('footer_privacy')}</a></li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold uppercase tracking-wider text-brand-accent mb-4">{t('footer_contact_title')}</h3>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start space-x-2"><span>{t('footer_address')}</span></li>
                    <li className="flex items-start space-x-2"><span>{t('contact_email')}</span></li>
                    <li className="flex items-start space-x-2"><span>{t('contact_phone')}</span></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="bg-brand-dark py-4">
        <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
            <p>{t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;