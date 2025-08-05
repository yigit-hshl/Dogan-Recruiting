
import React, { useState, useCallback, useEffect } from 'react';
import { type Job } from '../types';
import { generateJobPostings } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const JobCard: React.FC<{ job: Job; learnMoreText: string; specialtyLabel: string; }> = ({ job, learnMoreText, specialtyLabel }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-secondary">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-brand-primary">{job.jobTitle}</h3>
        <p className="text-slate-500 font-medium">{job.location}</p>
      </div>
      <span className="bg-brand-accent/20 text-brand-dark font-semibold text-xs px-3 py-1 rounded-full whitespace-nowrap">{job.jobType}</span>
    </div>
    <div className="mt-4 pt-4 border-t border-slate-200">
       <p className="text-slate-600 mb-2">
        <span className="font-semibold">{specialtyLabel}</span> {job.specialty}
      </p>
      <p className="text-sm text-slate-500">{job.description}</p>
    </div>
    <button className="mt-4 bg-brand-secondary hover:bg-brand-dark text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 w-full">
      {learnMoreText}
    </button>
  </div>
);

const LoadingSkeleton: React.FC = () => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-200 animate-pulse">
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
        <div className="h-px bg-slate-200 w-full my-4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6 mb-4"></div>
        <div className="h-10 bg-slate-200 rounded w-full mt-4"></div>
    </div>
);


const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedJobs = await generateJobPostings(language);
      if(fetchedJobs && fetchedJobs.length > 0) {
        setJobs(fetchedJobs);
      } else {
        setError(t('jobs_error_load'));
      }
    } catch (err) {
      setError(t('jobs_error_unexpected'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [language, t]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <section id="jobs" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">{t('jobs_super_title')}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-primary mb-4">{t('jobs_title')}</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t('jobs_subtitle')}</p>
        </div>
        
        {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-md">{error}</div>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => <LoadingSkeleton key={index} />)
            ) : (
                jobs.map((job, index) => <JobCard key={`${job.jobTitle}-${index}`} job={job} learnMoreText={t('learn_more')} specialtyLabel={t('jobs_specialty_label')} />)
            )}
        </div>
         {!isLoading && (
            <div className="text-center mt-16">
                <button 
                    onClick={fetchJobs} 
                    className="bg-brand-accent hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg disabled:bg-slate-400 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? t('jobs_loading_button') : t('jobs_load_more_button')}
                </button>
            </div>
         )}
      </div>
    </section>
  );
};

export default Jobs;
