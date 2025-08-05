import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main style={{ minHeight: 'calc(100vh - 270px)' }}>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-4xl mx-auto text-slate-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-8">{t('privacy_title')}</h1>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>{t('privacy_content')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
