
import React, { useState } from 'react';
import { type ServiceCategory } from '../types';
import { StethoscopeIcon, BriefcaseIcon, UserGroupIcon, CaduceusIcon, ToothIcon, MortarPestleIcon, AmbulanceIcon, MicroscopeIcon, HeartIcon, ChevronDownIcon } from './icons';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    StethoscopeIcon,
    CaduceusIcon,
    MicroscopeIcon,
    HeartIcon,
    ToothIcon,
    MortarPestleIcon,
    AmbulanceIcon,
    BriefcaseIcon,
    UserGroupIcon,
};

const AccordionItem: React.FC<{ 
    category: ServiceCategory, 
    isOpen: boolean,
    onClick: () => void 
}> = ({ category, isOpen, onClick }) => {
    const IconComponent = iconMap[category.icon];
    
    return (
        <div className="border-b border-slate-200">
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-brand-primary hover:bg-brand-secondary/5 transition-colors duration-300"
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${category.id}`}
                >
                    <span className="flex items-center space-x-4">
                        {IconComponent && <IconComponent className="w-8 h-8 text-brand-accent" />}
                        <span>{category.title}</span>
                    </span>
                    <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div
                id={`accordion-content-${category.id}`}
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 bg-white">
                        <p className="text-slate-600 mb-6 text-lg">{category.description}</p>
                        
                        <div className="space-y-6">
                            {category.subcategories.map(sub => (
                                <div key={sub.title}>
                                    <h4 className="font-bold text-lg text-brand-secondary mb-3">{sub.title}</h4>
                                    <ul className="space-y-3 list-disc list-inside text-slate-700">
                                        {sub.roles.map(role => (
                                            <li key={role.name}>
                                                <span className="font-semibold">{role.name}:</span> {role.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const servicesData: ServiceCategory[] = t('services_list');

  const handleAccordionClick = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('services_super_title')}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{t('services_title')}</h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">{t('services_subtitle')}</p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {servicesData.map((category) => (
                <AccordionItem 
                    key={category.id} 
                    category={category}
                    isOpen={openAccordion === category.id}
                    onClick={() => handleAccordionClick(category.id)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
