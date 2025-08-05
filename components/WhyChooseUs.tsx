import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SparklesIcon, ShieldCheckIcon, BoltIcon, HeartIcon } from './icons';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    SparklesIcon,
    ShieldCheckIcon,
    BoltIcon,
    HeartIcon,
};

interface Point {
    icon: string;
    title: string;
    description: string;
}

const WhyChooseUs: React.FC = () => {
    const { t } = useLanguage();
    const points: Point[] = t('why_us_points');

    return (
        <section id="why-us" className="py-20 lg:py-32 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('why_us_super_title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{t('why_us_title')}</h3>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t('why_us_subtitle')}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {points.map((point, index) => {
                         const IconComponent = iconMap[point.icon];
                         return (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
                                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-brand-accent/10 rounded-full">
                                    {IconComponent && <IconComponent className="w-8 h-8 text-brand-accent" />}
                                </div>
                                <h4 className="text-xl font-bold text-brand-primary mb-2">{point.title}</h4>
                                <p className="text-slate-600">{point.description}</p>
                            </div>
                         );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
