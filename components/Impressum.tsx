import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Impressum: React.FC = () => {
  const { t } = useLanguage();
  const content: string[] = t('impressum_content');

  return (
    <main style={{ minHeight: 'calc(100vh - 270px)' }}>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-4xl mx-auto text-slate-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-8">{t('impressum_title')}</h1>
            <div className="space-y-2 text-lg leading-relaxed">
              {content.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impressum;
