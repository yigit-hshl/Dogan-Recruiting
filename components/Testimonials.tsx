
import React from 'react';
import { type Testimonial } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
        <p className="text-slate-600 text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img className="w-14 h-14 rounded-full mr-4 object-cover" src={testimonial.image} alt={testimonial.name} />
            <div>
                <p className="font-bold text-brand-primary">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonials: Testimonial[] = t('testimonials_list');

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('testimonials_super_title')}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{t('testimonials_title')}</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t('testimonials_subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
