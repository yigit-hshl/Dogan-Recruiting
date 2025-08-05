import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MagnifyingGlassIcon, UserCheckIcon, DocumentCheckIcon, HandshakeIcon } from './icons';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    MagnifyingGlassIcon,
    UserCheckIcon,
    DocumentCheckIcon,
    HandshakeIcon,
};

interface Step {
    icon: string;
    title: string;
    description: string;
}

const Process: React.FC = () => {
    const { t } = useLanguage();
    const steps: Step[] = t('process_steps');

    return (
        <section id="process" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('process_super_title')}</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{t('process_title')}</h3>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t('process_subtitle')}</p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-10 left-10 h-[calc(100%-80px)] w-0.5 bg-brand-secondary/20" aria-hidden="true"></div>
                        
                        <ul className="space-y-12">
                            {steps.map((step, index) => {
                                const IconComponent = iconMap[step.icon];
                                return (
                                    <li key={index} className="relative flex items-start space-x-6">
                                        <div className="flex-shrink-0 flex flex-col items-center">
                                            <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-brand-light rounded-full ring-8 ring-white">
                                                {IconComponent && <IconComponent className="w-10 h-10 text-brand-accent" />}
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-xl font-bold text-brand-primary mb-2">{step.title}</h4>
                                            <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
