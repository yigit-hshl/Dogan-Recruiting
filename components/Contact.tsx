
import React, { useState } from 'react';
import { generateContactResponse } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const { language, t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMessage('');

    try {
      const aiResponse = await generateContactResponse(formData.name, formData.message, language);
      setResponseMessage(aiResponse);
      setStatus('submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setResponseMessage(t('form_error_message'));
      setStatus('error');
    }
  };
  
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-slate-700">
                <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('contact_super_title')}</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-6">{t('contact_title')}</h3>
                <p className="text-lg mb-4">
                    {t('contact_p1')}
                </p>
                <p className="text-lg mb-8">
                    {t('contact_p2')}
                </p>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <svg className="w-6 h-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span className="text-lg">{t('contact_phone')}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="w-6 h-6 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span className="text-lg">{t('contact_email')}</span>
                    </div>
                </div>
            </div>
            
            <div className="bg-brand-light p-8 rounded-lg shadow-xl">
                 {status === 'submitted' || status === 'error' ? (
                    <div className={`p-6 rounded-md text-center ${status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        <h4 className="font-bold text-xl mb-2">{status === 'submitted' ? t('form_success_title') : t('form_error_title')}</h4>
                        <p>{responseMessage}</p>
                        <button onClick={() => setStatus('idle')} className="mt-4 bg-brand-secondary text-white font-semibold py-2 px-4 rounded-md">
                          {t('form_send_another_button')}
                        </button>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" name="name" placeholder={t('form_name_placeholder')} value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"/>
                    <input type="email" name="email" placeholder={t('form_email_placeholder')} value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"/>
                    <input type="text" name="subject" placeholder={t('form_subject_placeholder')} value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"/>
                    <textarea name="message" placeholder={t('form_message_placeholder')} rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary"></textarea>
                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 disabled:bg-slate-400 disabled:cursor-wait">
                       {status === 'submitting' ? t('form_submitting_button') : t('form_submit_button')}
                    </button>
                </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
