import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDownIcon, GlobeIcon, BriefcaseIcon, BookOpenIcon, ExclamationTriangleIcon } from './icons';

interface GuideContent {
    subtitle: string;
    text: string;
}
interface GuideSection {
    id: string;
    icon: string;
    title: string;
    content: GuideContent[];
}

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    GlobeIcon,
    BriefcaseIcon,
    BookOpenIcon,
    ExclamationTriangleIcon
};

const AccordionItem: React.FC<{ 
    section: GuideSection, 
    isOpen: boolean,
    onClick: () => void 
}> = ({ section, isOpen, onClick }) => {
    const IconComponent = iconMap[section.icon];
    
    return (
        <div className="border-b border-slate-200">
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-brand-primary hover:bg-brand-secondary/5 transition-colors duration-300"
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${section.id}`}
                >
                    <span className="flex items-center space-x-4">
                        {IconComponent && <IconComponent className="w-8 h-8 text-brand-accent" />}
                        <span>{section.title}</span>
                    </span>
                    <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div
                id={`accordion-content-${section.id}`}
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 bg-white">
                        <div className="space-y-6">
                            {section.content.map(item => (
                                <div key={item.subtitle}>
                                    <h4 className="font-bold text-lg text-brand-secondary mb-2">{item.subtitle}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Guide: React.FC = () => {
  const { t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string | null>('prerequisites');

  const guideData: GuideSection[] = t('guide_sections');

  const handleAccordionClick = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main style={{ minHeight: 'calc(100vh - 270px)' }}>
      <section className="bg-brand-light py-20 lg:py-24">
         <div className="container mx-auto px-6 pt-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('guide_super_title')}</h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">{t('guide_title')}</h1>
                <p className="text-lg text-slate-600">{t('guide_subtitle')}</p>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {guideData.map((section) => (
                    <AccordionItem 
                        key={section.id} 
                        section={section}
                        isOpen={openAccordion === section.id}
                        onClick={() => handleAccordionClick(section.id)}
                    />
                ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default Guide;