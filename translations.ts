
const translations: Record<string, Record<string, any>> = {
  en: {
    // General
    get_in_touch: 'Get In Touch',
    learn_more: 'Learn More',
    
    // Header
    nav_about: 'About',
    nav_services: 'Services',
    nav_process: 'Process',
    nav_contact: 'Contact',

    // Language Selector
    change_language_aria: 'Change language',
    language_en: 'English',
    language_de: 'Deutsch',

    // Hero
    hero_title: 'Connecting Excellence in Medical Talent',
    hero_subtitle: 'Your trusted partner in sourcing and placing top-tier medical professionals. We bridge the gap between exceptional talent and leading healthcare institutions.',
    find_role_button: 'See Our Process',
    hire_talent_button: 'Hire Top Talent',

    // About
    about_super_title: 'Who We Are',
    about_title: 'A Fresh Approach to Medical Staffing',
    about_p1: `Founded in ${new Date().getFullYear()}, Dogan Recruiting brings a modern, energetic approach to medical recruitment. Our founder's passion for the field and firsthand industry experience provide a unique perspective, ensuring we understand the nuanced needs of today's healthcare landscape.`,
    about_p2: 'We are driven by a commitment to quality and partnership. Our mission is not just to fill positions, but to build lasting relationships that support career growth and enhance patient care. We combine a fresh, dynamic strategy with a deep respect for the medical profession to create connections that truly matter.',
    about_callout_title: "Our Commitment",
    about_callout_text: "Quality & Lasting Partnerships",
    explore_services_button: 'Explore Our Services',

    // Services
    services_super_title: 'Our Expertise',
    services_title: 'Our Areas of Specialization',
    services_subtitle: 'We connect healthcare facilities – from clinics and hospitals to specialized practices and care facilities – with the outstanding specialists who ensure excellent patient care. Our focus covers a broad spectrum of professional fields:',
    services_list: [
      {
        id: 'nursing', icon: 'StethoscopeIcon', title: '1. Nursing Professions',
        description: 'The largest and most central group in direct patient care.',
        subcategories: [
          { title: 'Academic Nursing', roles: [
              { name: 'Nursing Specialist (B.Sc.)', description: 'Graduates of a nursing degree program with in-depth scientific skills.' },
              { name: 'Advanced Practice Nurse (APN) / Nurse Expert (M.Sc.)', description: 'Highly specialized nurses with a Master\'s degree for complex care situations.' },
          ]},
          { title: 'Inpatient & Outpatient Care', roles: [
              { name: 'Registered Nurse (RN) / Nursing Specialist', description: 'The backbone of inpatient and outpatient care.' },
              { name: 'Pediatric Nurse', description: 'Specialized in the care of infants, children, and adolescents.' },
              { name: 'Geriatric Nurse', description: 'Specialized in the care and support of the elderly.' },
              { name: 'Nursing Assistant / Care Assistant', description: 'Supporting professional staff with basic nursing activities.' },
          ]},
          { title: 'Specialized Functional Areas', roles: [
              { name: 'Specialist Nurse for Intensive Care & Anesthesia', description: 'Highly qualified experts for monitoring and caring for critically ill patients.' },
              { name: 'Surgical Technologist (OTA)', description: 'Preparation, instrumentation, and support during surgical procedures.' },
              { name: 'Anesthesia Technologist (ATA)', description: 'Assisting anesthesiologists before, during, and after anesthesia.' },
              { name: 'Emergency Nurse', description: 'Specialized nurses for the emergency department.' },
              { name: 'Infection Control Specialist', description: 'Experts in the prevention and control of infections.' },
          ]},
        ],
      },
      {
        id: 'medical_service', icon: 'CaduceusIcon', title: '2. Medical Service',
        description: 'Specialists, residents, and consultants across all medical disciplines.',
        subcategories: [
          { title: 'Hierarchy Levels', roles: [
              { name: 'Resident Physician', description: 'Doctors in training to become medical specialists.' },
              { name: 'Specialist / Consultant', description: 'Doctors with completed specialist training.' },
              { name: 'Senior Physician / Attending Physician', description: 'Specialists with leadership roles and personnel responsibility.' },
          ]},
          { title: 'Specialties (Selection)', roles: [
              { name: 'Internal Medicine', description: 'Cardiology, Gastroenterology, Pulmonology, Nephrology, etc.' },
              { name: 'Surgery', description: 'General, Visceral, Cardiac, Thoracic, Trauma, or Neurosurgery.' },
              { name: 'Anesthesiology', description: 'Specialists in anesthesia, intensive care medicine, emergency medicine, and pain therapy.' },
              { name: 'Gynecology and Obstetrics', description: '' },
              { name: 'Pediatrics', description: '' },
              { name: 'Radiology & Neuroradiology', description: '' },
              { name: 'Neurology', description: '' },
              { name: 'Psychiatry and Psychotherapy', description: '' },
              { name: 'General Practice (Family Physicians)', description: '' },
          ]},
        ],
      },
      {
        id: 'med_tech', icon: 'MicroscopeIcon', title: '3. Medical-Technical Professions',
        description: 'Specialists who support diagnostic and therapeutic processes with state-of-the-art technology.',
        subcategories: [
          { title: 'Laboratory Diagnostics', roles: [
              { name: 'Medical Technologist (MTLA)', description: 'Performing laboratory tests on body fluids and tissues.' },
          ]},
          { title: 'Radiological Diagnostics', roles: [
              { name: 'Radiologic Technologist (MTRA)', description: 'Taking X-rays, performing CTs, MRIs, and radiation therapies.' },
          ]},
          { title: 'Functional Diagnostics', roles: [
              { name: 'Medical Technologist for Functional Diagnostics (MTAF)', description: 'Conducting examinations such as ECG, EEG, and lung function tests.' },
          ]},
        ],
      },
      {
        id: 'therapeutic', icon: 'HeartIcon', title: '4. Therapeutic Professions',
        description: 'Experts who guide the restoration and promotion of a patient\'s physical and mental abilities.',
        subcategories: [
          { title: 'Professions', roles: [
              { name: 'Physiotherapist', description: 'Restoring the body\'s movement and functional ability.' },
              { name: 'Occupational Therapist', description: 'Helping people carry out meaningful daily activities.' },
              { name: 'Speech and Language Therapist', description: 'Treating speech, language, voice, and swallowing disorders.' },
              { name: 'Masseur and Medical Balneologist', description: 'Performing massages and other physical therapies.' },
          ]},
        ],
      },
      {
        id: 'dentistry', icon: 'ToothIcon', title: '5. Dentistry',
        description: 'All professional fields related to dental, oral, and maxillofacial medicine.',
        subcategories: [
          { title: 'Professions', roles: [
              { name: 'Dentist', description: 'Diagnosis and treatment of dental, oral, and jaw diseases.' },
              { name: 'Orthodontist', description: 'Specialists in correcting tooth and jaw misalignments.' },
              { name: 'Dental Assistant (ZFA/DA)', description: 'Assisting in treatments, organizing the practice workflow.' },
              { name: 'Dental Hygienist (DH)', description: 'Specialized professionals for prophylaxis and periodontal therapy.' },
              { name: 'Dental Technician', description: 'Manufacturing of dentures, splints, and orthodontic appliances.' },
          ]},
        ],
      },
      {
        id: 'pharmacy', icon: 'MortarPestleIcon', title: '6. Pharmacy',
        description: 'Specialized personnel for drug supply in pharmacies and hospitals.',
        subcategories: [
          { title: 'Professions', roles: [
              { name: 'Pharmacist', description: 'Dispensing medications, advising patients and doctors.' },
              { name: 'Pharmaceutical Technical Assistant (PTA)', description: 'Preparing prescriptions, testing substances, and assisting the pharmacist.' },
              { name: 'Pharmaceutical Commercial Employee (PKA)', description: 'Merchandise management, warehousing, and commercial tasks.' },
          ]},
        ],
      },
      {
        id: 'emergency', icon: 'AmbulanceIcon', title: '7. Rescue & Emergency Medicine',
        description: 'The first point of contact in acute emergency situations.',
        subcategories: [
          { title: 'Professions', roles: [
              { name: 'Paramedic', description: 'The highest non-physician qualification in emergency medical services.' },
              { name: 'Emergency Medical Technician (EMT) & Paramedic Assistant', description: 'Qualified first aid and transport of emergency patients.' },
          ]},
        ],
      },
      {
        id: 'admin', icon: 'BriefcaseIcon', title: '8. Administration, Management, and Documentation',
        description: 'The organizational and administrative pillars of the healthcare system.',
        subcategories: [
          { title: 'Professions', roles: [
              { name: 'Medical Assistant (MFA/MA)', description: 'Organization of practice workflows and assistance in medical activities (often in practices).' },
              { name: 'Healthcare Administrator', description: 'Commercial management and administrative tasks.' },
              { name: 'Medical Coder', description: 'Encoding diagnoses and procedures for billing purposes.' },
              { name: 'Medical Billing Specialist (EBM/GOÄ/DRG)', description: 'Handling billing and reimbursement processes.' },
              { name: 'Ward Manager / Director of Nursing (DON)', description: 'Leadership positions in nursing management.' },
              { name: 'Clinic / Practice Manager', description: 'Overall responsibility for the operational and strategic management.' },
          ]},
        ],
      },
    ],
    
    // Process
    process_super_title: 'How It Works',
    process_title: 'Our Recruitment Process',
    process_subtitle: 'A transparent and collaborative journey for both clients and candidates. We focus on partnership to ensure the perfect match.',
    process_steps: [
        {
            icon: 'MagnifyingGlassIcon',
            title: '1. Discovery & Needs Analysis',
            description: "We start by deeply understanding our client's needs, from technical requirements to company culture. For candidates, we explore career goals and preferences."
        },
        {
            icon: 'UserCheckIcon',
            title: '2. Sourcing & Vetting',
            description: "Leveraging our network and modern tools, we identify and pre-screen potential candidates. We conduct thorough initial interviews to assess skills and compatibility."
        },
        {
            icon: 'DocumentCheckIcon',
            title: '3. Presentation & Interviews',
            description: 'We present a curated shortlist of qualified candidates to our clients. We then coordinate and facilitate the interview process, providing support to both parties.'
        },
        {
            icon: 'HandshakeIcon',
            title: '4. Offer & Onboarding',
            description: "We assist in negotiating the offer and finalizing the contract. Our partnership continues with onboarding support to ensure a smooth transition for everyone."
        }
    ],

    // Why Choose Us
    why_us_super_title: 'Our Advantage',
    why_us_title: 'Why Partner With Dogan Recruiting?',
    why_us_subtitle: 'We are more than just recruiters; we are career architects and strategic partners dedicated to the success of the medical community.',
    why_us_points: [
        {
            icon: 'SparklesIcon',
            title: 'Industry Expertise',
            description: 'Founded by someone with firsthand medical industry experience, we possess a deep and practical understanding of your world.'
        },
        {
            icon: 'ShieldCheckIcon',
            title: 'Commitment to Quality',
            description: 'We prioritize the right fit over simply filling a position. Our rigorous vetting process ensures long-term success and satisfaction.'
        },
        {
            icon: 'BoltIcon',
            title: 'Modern & Efficient',
            description: 'We blend traditional relationship-building with modern technology to deliver a recruitment process that is both personal and highly effective.'
        },
        {
            icon: 'HeartIcon',
            title: 'Personalized Approach',
            description: 'Every client and candidate is a partner. We provide dedicated, tailored support to meet your unique needs and aspirations.'
        }
    ],

    // Jobs
    jobs_super_title: 'Featured Openings',
    jobs_title: 'Find Your Next Challenge',
    jobs_subtitle: 'Explore a selection of our current, AI-generated job postings for medical professionals. Is your dream job among them?',
    jobs_specialty_label: 'Specialty:',
    jobs_load_more_button: 'Load New Jobs',
    jobs_loading_button: 'Loading...',
    jobs_error_load: 'Could not load job postings. Please try again.',
    jobs_error_unexpected: 'An unexpected error occurred. Please try again later.',

    // Testimonials
    testimonials_super_title: 'Client Voices',
    testimonials_title: 'What Our Partners Say',
    testimonials_subtitle: 'We are proud to have built strong, lasting relationships with leading healthcare institutions and talented professionals.',
    testimonials_list: [
      {
        id: '1',
        quote: "Dogan Recruiting understood our specific needs and found us a highly qualified cardiologist in record time. Their dedication and market knowledge are unparalleled.",
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Dr. Lena Vogel',
        title: 'Chief Medical Officer, Munich Heart Center'
      },
      {
        id: '2',
        quote: "As a candidate, I felt supported throughout the entire process. The team at Dogan Recruiting provided valuable insights and helped me secure my dream job as a Head Nurse.",
        image: 'https://images.unsplash.com/photo-1580852300654-03ab8572ca6e?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Markus Weber',
        title: 'Head Nurse, Hamburg Specialist Clinic'
      },
      {
        id: '3',
        quote: "Their professionalism and transparent communication made the collaboration a complete success. They are our go-to partner for all future staffing needs.",
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Dr. Klaus Richter',
        title: 'Practice Owner, Frankfurt Radiology'
      }
    ],
    
    // Contact
    contact_super_title: 'Get in Touch',
    contact_title: "Let's Start a Conversation",
    contact_p1: 'Whether you are a healthcare facility seeking exceptional talent or a medical professional looking for your next career move, our team is ready to assist you.',
    contact_p2: 'Fill out the form, and a dedicated specialist will connect with you to discuss your specific needs.',
    contact_phone: '+49 5341 8765432',
    contact_email: 'contact@doganrecruiting.com',
    form_name_placeholder: 'Your Name',
    form_email_placeholder: 'Your Email',
    form_subject_placeholder: 'Subject',
    form_message_placeholder: 'Your Message',
    form_submit_button: 'Send Message',
    form_submitting_button: 'Sending...',
    form_success_title: 'Thank You!',
    form_error_title: 'Oops!',
    form_error_message: 'There was an error sending your message. Please try again.',
    form_send_another_button: 'Send Another Message',
    
    // Footer
    footer_subtitle: 'Your trusted partner in sourcing and placing top-tier medical professionals.',
    footer_links_title: 'Quick Links',
    footer_guide: 'Guide for Germany',
    footer_legal_title: 'Legal',
    footer_impressum: 'Imprint',
    footer_agb: 'Terms & Conditions',
    footer_privacy: 'Privacy Policy',
    footer_contact_title: 'Contact Us',
    footer_address: 'Ludwig-Gercke Straße 7, 38259 Salzgitter-Bad, Germany',
    footer_copyright: `© ${new Date().getFullYear()} Dogan Recruiting. All Rights Reserved.`,

    // Legal Pages
    impressum_title: 'Imprint',
    impressum_content: [
      'Information according to § 5 TMG',
      'Dogan Recruiting GmbH',
      'Ludwig-Gercke Straße 7',
      '38259 Salzgitter-Bad',
      'Germany',
      '',
      'Represented by:',
      'Tunahan Dogan, Managing Director',
      '',
      'Contact:',
      'Phone: +49 5341 8765432',
      'Email: contact@doganrecruiting.com',
      '',
      'Register Entry:',
      'Registering Court: Amtsgericht Braunschweig',
      'Registration Number: HRB 208112',
      '',
      'VAT ID:',
      'Sales tax identification number according to §27a Value Added Tax Act: DE314159265',
      '',
      'Responsible for content:',
      'Tunahan Dogan',
      'Ludwig-Gercke Straße 7, 38259 Salzgitter-Bad',
    ],
    agb_title: 'Terms & Conditions',
    agb_content: 'Our General Terms and Conditions (AGB) are currently being revised and will be available here shortly. Thank you for your understanding.',
    privacy_title: 'Privacy Policy',
    privacy_content: 'Our privacy policy is currently being updated to ensure full compliance with GDPR. It will be published here soon. We are committed to protecting your data.',

    // Guide Page
    guide_super_title: 'Information Hub',
    guide_title: 'Guide for Medical Professionals in Germany',
    guide_subtitle: 'Navigating the path to a medical career in Germany can be complex. This guide provides essential information on key requirements and processes to help you on your journey.',
    guide_sections: [
      {
        id: 'prerequisites',
        icon: 'BookOpenIcon',
        title: 'Prerequisites for Working in Germany',
        content: [
            {
                subtitle: 'Professional Recognition (Approbation)',
                text: "The most critical step is getting your foreign professional qualification recognized. For doctors, dentists, and pharmacists, this is called 'Approbation'. For other health professions, it's a state permit. This process verifies that your training is equivalent to the German standard. You'll need to submit certified copies and translations of your diplomas, curriculum, and proof of work experience to the responsible state authority (Landesprüfungsamt or similar)."
            },
            {
                subtitle: 'Language Skills',
                text: "Proficiency in German is non-negotiable. You will generally need to prove at least B2 level (Common European Framework of Reference for Languages) for general communication and often a C1 level in a specific medical German exam (Fachsprachenprüfung - FSP). This is to ensure patient safety and effective communication with colleagues."
            }
        ]
      },
      {
        id: 'visa',
        icon: 'GlobeIcon',
        title: 'Visa and Residence Permit',
        content: [
            {
                subtitle: 'For EU/EEA/Swiss Citizens',
                text: "You do not need a visa to enter or work in Germany. You simply need to register your address (Anmeldung) at the local citizens' office (Bürgeramt) after you arrive."
            },
            {
                subtitle: 'For Non-EU Citizens',
                text: "You must apply for a national visa for the purpose of employment from the German embassy or consulate in your home country *before* you travel to Germany. There are several types: a 'Visa for Qualified Professionals' if you have a job offer, an 'EU Blue Card' for highly qualified professionals with a specific minimum salary, or a 'Visa for the Recognition of Foreign Professional Qualifications' which allows you to come to Germany to complete the necessary steps for recognition."
            },
            {
                subtitle: 'After Arrival',
                text: "After arriving in Germany, you must convert your visa into a residence permit at the local Foreigners' Authority (Ausländerbehörde)."
            }
        ]
      },
      {
        id: 'working',
        icon: 'BriefcaseIcon',
        title: 'Working as a Medical Professional',
        content: [
            {
                subtitle: 'Employment Contracts',
                text: "Your contract should clearly state your salary, working hours, vacation days (typically 25-30 days per year), and duties. Hospital doctors are often employed under collective agreements (Tarifverträge), which regulate these conditions."
            },
            {
                subtitle: 'Working Hours & Hierarchy',
                text: "The standard work week is around 40 hours, but overtime is common. The German Working Hours Act (Arbeitszeitgesetz) regulates hours and rest periods. German hospitals have a clear hierarchical structure (Chefarzt, Oberarzt, etc.), but teamwork and interdisciplinary collaboration are highly valued."
            }
        ]
      },
      {
        id: 'considerations',
        icon: 'ExclamationTriangleIcon',
        title: 'Important Considerations',
        content: [
            {
                subtitle: 'Insurance',
                text: "Health insurance is mandatory in Germany. Once you have an employment contract, you will be automatically enrolled in the statutory health insurance system (gesetzliche Krankenversicherung). You will also contribute to pension, unemployment, and long-term care insurance."
            },
            {
                subtitle: 'Professional Liability',
                text: "It is highly recommended, and often required by employers, to have professional liability insurance (Berufshaftpflichtversicherung) to protect you against claims of malpractice."
            },
            {
                subtitle: 'Be Careful of Scams',
                text: "Be wary of agencies that ask for large upfront fees for job placement. Reputable recruiters like Dogan Recruiting are typically paid by the employer. Never send original documents by mail; always use certified copies. Verify job offers directly with the hospital or clinic if possible."
            }
        ]
      }
    ],

  },
  de: {
    // General
    get_in_touch: 'Kontakt aufnehmen',
    learn_more: 'Mehr erfahren',

    // Header
    nav_about: 'Über uns',
    nav_services: 'Leistungen',
    nav_process: 'Prozess',
    nav_contact: 'Kontakt',

    // Language Selector
    change_language_aria: 'Sprache ändern',
    language_en: 'English',
    language_de: 'Deutsch',

    // Hero
    hero_title: 'Exzellenz in medizinischen Talenten verbinden',
    hero_subtitle: 'Ihr verlässlicher Partner bei der Suche und Vermittlung von erstklassigen medizinischen Fachkräften. Wir schließen die Lücke zwischen außergewöhnlichen Talenten und führenden Gesundheitseinrichtungen.',
    find_role_button: 'Unseren Prozess ansehen',
    hire_talent_button: 'Top-Talente einstellen',

    // About
    about_super_title: 'Wer wir sind',
    about_title: 'Ein frischer Ansatz in der Personalvermittlung',
    about_p1: `Gegründet im Jahr ${new Date().getFullYear()}, bringt Dogan Recruiting einen modernen, energiegeladenen Ansatz in die medizinische Personalvermittlung. Durch die persönliche Erfahrung unseres Gründers in der Branche wissen wir, worauf es in der Praxis wirklich ankommt - und können gezielt auf die Bedürfnisse des Gesundheitswesens eingehen.`,
    about_p2: 'Unser Handeln wird getragen von unserem Anspruch an Qualität und dem festen Vertrauen in echte Partnerschaft. Unsere Mission ist es nicht nur, Stellen zu besetzen, sondern auch Beziehungen aufzubauen, die Karriereentwicklung fördern und die Patientenversorgung verbessern. Wir verbinden eine frische, dynamische Strategie mit tiefem Respekt für den medizinischen Beruf, um Verbindungen zu schaffen, die wirklich zählen.',
    about_callout_title: "Unser Versprechen",
    about_callout_text: "Qualität & nachhaltige Partnerschaften",
    explore_services_button: 'Unsere Leistungen entdecken',

    // Services
    services_super_title: 'Unsere Expertise',
    services_title: 'Spezialgebiete',
    services_subtitle: 'Wir verbinden Gesundheitseinrichtungen – von Kliniken und Krankenhäusern über spezialisierte Praxen bis hin zu Pflegeeinrichtungen – mit den herausragenden Fachkräften, die eine exzellente Patientenversorgung sicherstellen. Unser Fokus umfasst ein breites Spektrum an Berufsfeldern:',
    services_list: [
      {
        id: 'nursing', icon: 'StethoscopeIcon', title: '1. Pflegeberufe',
        description: 'Die größte und zentrale Gruppe in der direkten Patientenversorgung.',
        subcategories: [
          { title: 'Akademische Pflege', roles: [
              { name: 'Pflegefachmann / Pflegefachfrau', description: 'Absolventen eines Pflegestudiums mit vertieften wissenschaftlichen Kompetenzen.' },
              { name: 'Advanced Practice Nurse / Pflegeexperte', description: 'Hochspezialisierte Pflegekräfte mit Masterabschluss für komplexe Pflegesituationen.' },
          ]},
          { title: 'Stationäre & Ambulante Pflege', roles: [
              { name: 'Gesundheits- und Krankenpfleger/in / Pflegefachmann / Pflegefachfrau', description: 'Das Rückgrat der stationären und ambulanten Versorgung.' },
              { name: 'Gesundheits- und Kinderkrankenpfleger/in', description: 'Spezialisiert auf die Pflege von Säuglingen, Kindern und Jugendlichen.' },
              { name: 'Altenpfleger/in', description: 'Spezialisiert auf die Betreuung und Pflege älterer Menschen.' },
              { name: 'Pflegehelfer/in / Pflegeassistent/in', description: 'Unterstützung des Fachpersonals bei grundlegenden pflegerischen Tätigkeiten.' },
          ]},
          { title: 'Spezialisierte Funktionsbereiche', roles: [
              { name: 'Fachkrankenpfleger/in für Intensivpflege & Anästhesie', description: 'Hochqualifizierte Experten für die Überwachung und Versorgung kritisch kranker Patienten.' },
              { name: 'Operationstechnische/r Assistent/in', description: 'Vorbereitung, Instrumentierung und Unterstützung bei operativen Eingriffen.' },
              { name: 'Anästhesietechnische/r Assistent/in', description: 'Unterstützung von Anästhesisten vor, während und nach der Narkose.' },
              { name: 'Notfallpfleger/in', description: 'Spezialisierte Pflegekräfte für die Notaufnahme.' },
              { name: 'Hygienefachkraft', description: 'Experten für die Prävention und Kontrolle von Infektionen.' },
          ]},
        ],
      },
      {
        id: 'medical_service', icon: 'CaduceusIcon', title: '2. Ärztlicher Dienst',
        description: 'Fachärzte, Assistenzärzte und Spezialisten in allen medizinischen Disziplinen.',
        subcategories: [
          { title: 'Hierarchieebenen', roles: [
              { name: 'Assistenzarzt / Assistenzärztin', description: 'Ärzte in der Weiterbildung zum Facharzt.' },
              { name: 'Facharzt / Fachärztin', description: 'Ärzte mit abgeschlossener Facharztausbildung.' },
              { name: 'Oberarzt / Oberärztin', description: 'Fachärzte mit leitender Funktion und Personalverantwortung.' },
          ]},
          { title: 'Fachrichtungen (Auswahl)', roles: [
              { name: 'Allgemeinmedizin (Hausärzte)'},
              { name: 'Innere Medizin', description: 'Kardiologie, Gastroenterologie, Pneumologie, Nephrologie etc.' },
              { name: 'Chirurgie', description: 'Allgemein-, Viszeral-, Herz-, Thorax-, Unfall- oder Neurochirurgie.' },
              { name: 'Anästhesiologie', description: 'Fachärzte für Anästhesie, Intensivmedizin, Notfallmedizin und Schmerztherapie.' },
              { name: 'Gynäkologie und Geburtshilfe'},
              { name: 'Pädiatrie (Kinder- und Jugendmedizin)'},
              { name: 'Radiologie & Neuroradiologie'},
              { name: 'Neurologie'},
              { name: 'Psychiatrie und Psychotherapie'},
              
          ]},
        ],
      },
      {
        id: 'med_tech', icon: 'MicroscopeIcon', title: '3. Medizinisch-Technische Berufe',
        description: 'Spezialisten, die mit hochmoderner Technik diagnostische und therapeutische Prozesse unterstützen.',
        subcategories: [
          { title: 'Laboratoriumsdiagnostik', roles: [
              { name: 'Medizinisch-technische/r Laboratoriumsassistent/in', description: 'Durchführung von Laboruntersuchungen von Körperflüssigkeiten und Gewebe.' },
          ]},
          { title: 'Radiologische Diagnostik', roles: [
              { name: 'Medizinisch-technische/r Radiologieassistent/in', description: 'Anfertigung von Röntgenbildern, Durchführung von CTs, MRTs und Strahlentherapien.' },
          ]},
          { title: 'Funktionsdiagnostik', roles: [
              { name: 'Medizinisch-technische/r Assistent/in für Funktionsdiagnostik', description: 'Durchführung von Untersuchungen wie EKG, EEG, Lungenfunktionstests.' },
          ]},
        ],
      },
      {
        id: 'therapeutic', icon: 'HeartIcon', title: '4. Therapeutische Berufe',
        description: 'Experten, die die Wiederherstellung und Förderung der körperlichen und geistigen Fähigkeiten von Patienten begleiten.',
        subcategories: [
          { title: 'Berufe', roles: [
              { name: 'Physiotherapeut/in', description: 'Wiederherstellung der Bewegungs- und Funktionsfähigkeit des Körpers.' },
              { name: 'Ergotherapeut/in', description: 'Unterstützung von Menschen bei der Durchführung von für sie bedeutungsvollen Alltagsaktivitäten.' },
              { name: 'Logopäde/in / Sprachtherapeut/in', description: 'Behandlung von Sprach-, Sprech-, Stimm- und Schluckstörungen.' },
              { name: 'Masseur/in und medizinische/r Bademeister/in', description: 'Durchführung von Massagen und anderen physikalischen Therapien.' },
          ]},
        ],
      },
      {
        id: 'dentistry', icon: 'ToothIcon', title: '5. Zahnmedizin',
        description: 'Alle Berufsfelder rund um die Zahn-, Mund- und Kieferheilkunde.',
        subcategories: [
          { title: 'Berufe', roles: [
              { name: 'Zahnarzt / Zahnärztin', description: 'Diagnose und Behandlung von Zahn-, Mund- und Kieferkrankheiten.' },
              { name: 'Kieferorthopäde/in', description: 'Spezialisten für die Korrektur von Zahn- und Kieferfehlstellungen.' },
              { name: 'Zahnmedizinische/r Fachangestellte/r', description: 'Assistenz bei Behandlungen, Organisation des Praxisablaufs.' },
              { name: 'Dentalhygieniker/in', description: 'Spezialisierte Fachkräfte für Prophylaxe und Parodontaltherapie.' },
              { name: 'Zahntechniker/in', description: 'Herstellung von Zahnersatz, Schienen und kieferorthopädischen Geräten.' },
          ]},
        ],
      },
      {
        id: 'pharmacy', icon: 'MortarPestleIcon', title: '6. Pharmazie',
        description: 'Fachpersonal für die Arzneimittelversorgung in Apotheken und Krankenhäusern.',
        subcategories: [
          { title: 'Berufe', roles: [
              { name: 'Apotheker/in', description: 'Abgabe von Arzneimitteln, Beratung von Patienten und Ärzten.' },
              { name: 'Pharmazeutisch-technische/r Assistent/in', description: 'Herstellung von Rezepturen, Prüfung von Substanzen und Unterstützung des Apothekers.' },
              { name: 'Pharmazeutisch-kaufmännische/r Angestellte/r', description: 'Warenwirtschaft, Lagerhaltung und kaufmännische Aufgaben.' },
          ]},
        ],
      },
      {
        id: 'emergency', icon: 'AmbulanceIcon', title: '7. Rettungsdienst & Notfallmedizin',
        description: 'Die erste Anlaufstelle in akuten Notfallsituationen.',
        subcategories: [
          { title: 'Berufe', roles: [
              { name: 'Notfallsanitäter/in', description: 'Höchste nicht-ärztliche Qualifikation im Rettungsdienst.' },
              { name: 'Rettungssanitäter/in & Rettungsassistent/in', description: 'Qualifizierte Erstversorgung und Transport von Notfallpatienten.' },
          ]},
        ],
      },
      {
        id: 'admin', icon: 'BriefcaseIcon', title: '8. Verwaltung, Management und Dokumentation',
        description: 'Die organisatorischen und administrativen Stützen des Gesundheitssystems.',
        subcategories: [
          { title: 'Berufe', roles: [
              { name: 'Medizinische/r Fachangestellte/r', description: 'Organisation von Praxisabläufen und Assistenz bei ärztlichen Tätigkeiten. (oft in Praxen)' },
              { name: 'Kaufmann / Kauffrau im Gesundheitswesen', description: 'Kaufmännische Steuerung und administrative Aufgaben.' },
              { name: 'Medizinische/r Kodierfachkraft', description: 'Verschlüsselung von Diagnosen und Prozeduren für die Abrechnung.' },
              { name: 'Mitarbeiter/in für die medizinische Abrechnung', description: 'Abwicklung von Abrechnungs- und Erstattungsprozessen.' },
              { name: 'Stationsleitung / Pflegedienstleitung', description: 'Führungspositionen im Pflegemanagement.' },
              { name: 'Klinik- / Praxismanager/in', description: 'Gesamtverantwortung für den operativen und strategischen Betrieb.' },
          ]},
        ],
      },
    ],

    // Process
    process_super_title: 'So funktioniert\'s',
    process_title: 'Unser Vermittlungsprozess',
    process_subtitle: 'Eine transparente und partnerschaftliche Reise für Klienten und Kandidaten. Wir setzen auf Zusammenarbeit, um die perfekte Übereinstimmung zu gewährleisten.',
    process_steps: [
        {
            icon: 'MagnifyingGlassIcon',
            title: '1. Analyse & Bedarfsermittlung',
            description: "Wir beginnen damit, die Bedürfnisse unserer Klienten tiefgreifend zu verstehen, von den fachlichen Anforderungen bis zur Unternehmenskultur. Bei Kandidaten erörtern wir Karriereziele und Präferenzen."
        },
        {
            icon: 'UserCheckIcon',
            title: '2. Kandidatensuche & Prüfung',
            description: "Mit unserem Netzwerk und modernen Tools identifizieren und prüfen wir potenzielle Kandidaten. Wir führen gründliche Erstgespräche, um Fähigkeiten und Kompatibilität zu bewerten."
        },
        {
            icon: 'DocumentCheckIcon',
            title: '3. Präsentation & Interviews',
            description: 'Wir präsentieren unseren Klienten eine sorgfältig ausgewählte Liste qualifizierter Kandidaten. Anschließend koordinieren und begleiten wir den Bewerbungsprozess und unterstützen beide Seiten.'
        },
        {
            icon: 'HandshakeIcon',
            title: '4. Angebot & Vertragsabschluss',
            description: "Wir unterstützen bei den Vertragsverhandlungen und beim Vertragsabschluss. Unsere Partnerschaft endet nicht hier: Wir begleiten das Onboarding, um einen reibungslosen Start für alle zu sichern."
        }
    ],

    // Why Choose Us
    why_us_super_title: 'Unser Vorteil',
    why_us_title: 'Warum mit Dogan Recruiting zusammenarbeiten?',
    why_us_subtitle: 'Wir sind mehr als Personalvermittler - wir verstehen uns als Karrierearchitekten und strategische Partner, die sich dem Erfolg der medizinischen Gemeinschaft verpflichtet fühlen.',
    why_us_points: [
        {
            icon: 'SparklesIcon',
            title: 'Branchenexpertise',
            description: 'Als Unternehmen mit Wurzeln in der medizinischen Praxis verfügen wir über ein tiefes, praxisnahes Verständnis für die Anforderungen und Dynamiken Ihrer Branche.'
        },
        {
            icon: 'ShieldCheckIcon',
            title: 'Qualitätsversprechen',
            description: 'Für uns zählt nicht nur die Besetzung, sondern die passgenaue Verbindung. Durch unseren sorgfältigen Auswahlprozess schaffen wir die Grundlage für nachhaltigen Erfolg und echte Zufriedenheit - auf beiden Seiten.'
        },
        {
            icon: 'BoltIcon',
            title: 'Modern & Effizient',
            description: 'Wir verbinden traditionellen Beziehungsaufbau mit moderner Technologie für einen Vermittlungsprozess, der sowohl persönlich als auch hocheffektiv ist.'
        },
        {
            icon: 'HeartIcon',
            title: 'Persönlicher Ansatz',
            description: 'Für uns ist jeder Klient und jeder Kandidat ein Partner. Mit individueller, passgenauer Betreuung unterstützen wir Sie dabei, Ihre spezifischen Ziele zu erreichen.'
        }
    ],

    // Jobs
    jobs_super_title: 'Aktuelle Stellenangebote',
    jobs_title: 'Finden Sie Ihre nächste Herausforderung',
    jobs_subtitle: 'Entdecken Sie eine Auswahl unserer aktuellen, KI-generierten Stellenanzeigen für medizinisches Fachpersonal. Ist Ihre Traumstelle dabei?',
    jobs_specialty_label: 'Fachrichtung:',
    jobs_load_more_button: 'Neue Stellen laden',
    jobs_loading_button: 'Lädt...',
    jobs_error_load: 'Stellenangebote konnten nicht geladen werden. Bitte versuchen Sie es erneut.',
    jobs_error_unexpected: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',

    // Testimonials
    testimonials_super_title: 'Kundenstimmen',
    testimonials_title: 'Was unsere Partner sagen',
    testimonials_subtitle: 'Wir sind stolz darauf, starke und dauerhafte Beziehungen zu führenden Gesundheitseinrichtungen und talentierten Fachkräften aufgebaut zu haben.',
    testimonials_list: [
      {
        id: '1',
        quote: "Dogan Recruiting hat unsere spezifischen Anforderungen verstanden und uns in Rekordzeit einen hochqualifizierten Kardiologen vermittelt. Ihr Engagement und ihre Marktkenntnis sind unübertroffen.",
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Dr. Lena Vogel',
        title: 'Chefärztin, Herzzentrum München'
      },
      {
        id: '2',
        quote: "Als Kandidat fühlte ich mich während des gesamten Prozesses hervorragend betreut. Das Team von Dogan Recruiting gab mir wertvolle Einblicke und half mir, meine Traumstelle als Pflegedienstleiter zu finden.",
        image: 'https://images.unsplash.com/photo-1580852300654-03ab8572ca6e?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Markus Weber',
        title: 'Pflegedienstleiter, Fachklinik Hamburg'
      },
      {
        id: '3',
        quote: "Ihre Professionalität und die transparente Kommunikation haben die Zusammenarbeit zu einem vollen Erfolg gemacht. Sie sind unser Partner für alle zukünftigen Personalfragen.",
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop&q=80&crop=faces&facepad=2',
        name: 'Dr. Klaus Richter',
        title: 'Praxisinhaber, Radiologie Frankfurt'
      }
    ],
    
    // Contact
    contact_super_title: 'Kontakt aufnehmen',
    contact_title: 'Beginnen wir ein Gespräch',
    contact_p1: 'Egal, ob Sie eine Gesundheitseinrichtung sind, die außergewöhnliche Talente sucht, oder eine medizinische Fachkraft, die nach ihrem nächsten Karriereschritt sucht, unser Team ist bereit, Sie zu unterstützen.',
    contact_p2: 'Füllen Sie einfach das Formular aus - ein engagierter Ansprechpartner wird sich zeitnah mit Ihnen in Verbindung setzen, um Ihre individuellen Anforderungen zu besprechen.',
    contact_phone: '+49 5341 8765432',
    contact_email: 'kontakt@doganrecruiting.de',
    form_name_placeholder: 'Ihr Name',
    form_email_placeholder: 'Ihre E-Mail',
    form_subject_placeholder: 'Betreff',
    form_message_placeholder: 'Ihre Nachricht',
    form_submit_button: 'Nachricht senden',
    form_submitting_button: 'Wird gesendet...',
    form_success_title: 'Vielen Dank!',
    form_error_title: 'Hoppla!',
    form_error_message: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    form_send_another_button: 'Weitere Nachricht senden',

    // Footer
    footer_subtitle: 'Ihr verlässlicher Partner bei der Suche und Vermittlung von erstklassigen medizinischen Fachkräften.',
    footer_links_title: 'Schnell-Links',
    footer_guide: 'Leitfaden für Deutschland',
    footer_legal_title: 'Rechtliches',
    footer_impressum: 'Impressum',
    footer_agb: 'AGB',
    footer_privacy: 'Datenschutz',
    footer_contact_title: 'Kontakt',
    footer_address: 'Ludwig-Gercke Straße 7, 38259 Salzgitter-Bad, Deutschland',
    footer_copyright: `© ${new Date().getFullYear()} Dogan Recruiting. Alle Rechte vorbehalten.`,
    
    // Legal Pages
    impressum_title: 'Impressum',
    impressum_content: [
      'Angaben gemäß § 5 TMG',
      'Dogan Recruiting GmbH',
      'Ludwig-Gercke Straße 7',
      '38259 Salzgitter-Bad',
      'Deutschland',
      '',
      'Vertreten durch:',
      'Tunahan Dogan, Geschäftsführer',
      '',
      'Kontakt:',
      'Telefon: +49 5341 8765432',
      'E-Mail: kontakt@doganrecruiting.de',
      '',
      'Registereintrag:',
      'Registergericht: Amtsgericht Braunschweig',
      'Registernummer: HRB 208112',
      '',
      'Umsatzsteuer-ID:',
      'Umsatzsteuer-Identifikationsnummer gemäß §27a UStG: DE314159265',
      '',
      'Redaktionell verantwortlich:',
      'Tunahan Dogan',
      'Ludwig-Gercke Straße 7, 38259 Salzgitter-Bad',
    ],
    agb_title: 'Allgemeine Geschäftsbedingungen',
    agb_content: 'Unsere Allgemeinen Geschäftsbedingungen (AGB) werden derzeit überarbeitet und stehen Ihnen in Kürze an dieser Stelle zur Verfügung. Vielen Dank für Ihr Verständnis.',
    privacy_title: 'Datenschutzerklärung',
    privacy_content: 'Unsere Datenschutzerklärung wird derzeit aktualisiert, um die vollständige Einhaltung der DSGVO zu gewährleisten. Sie wird in Kürze hier veröffentlicht. Wir verpflichten uns, Ihre Daten zu schützen.',
    
    // Guide Page
    guide_super_title: 'Informationszentrum',
    guide_title: 'Leitfaden für medizinische Fachkräfte in Deutschland',
    guide_subtitle: 'Der Weg zu einer medizinischen Karriere in Deutschland kann komplex sein. Dieser Leitfaden bietet wesentliche Informationen zu den wichtigsten Anforderungen und Prozessen, um Sie auf Ihrem Weg zu unterstützen.',
    guide_sections: [
      {
        id: 'prerequisites',
        icon: 'BookOpenIcon',
        title: 'Voraussetzungen für die Arbeit in Deutschland',
        content: [
            {
                subtitle: 'Berufliche Anerkennung (Approbation)',
                text: "Der wichtigste Schritt ist die Anerkennung Ihrer ausländischen Berufsqualifikation. Für Ärzte, Zahnärzte und Apotheker heißt dies 'Approbation'. Für andere Gesundheitsberufe ist es eine staatliche Erlaubnis. Dieses Verfahren stellt sicher, dass Ihre Ausbildung dem deutschen Standard entspricht. Sie müssen beglaubigte Kopien und Übersetzungen Ihrer Diplome, Ihres Lehrplans und Ihrer Arbeitsnachweise bei der zuständigen Landesbehörde (Landesprüfungsamt o.ä.) einreichen."
            },
            {
                subtitle: 'Sprachkenntnisse',
                text: "Deutschkenntnisse sind unerlässlich. In der Regel müssen Sie mindestens das Niveau B2 (Gemeinsamer Europäischer Referenzrahmen für Sprachen) für die allgemeine Kommunikation und oft das Niveau C1 in einer spezifischen medizinischen Deutschprüfung (Fachsprachenprüfung - FSP) nachweisen. Dies dient der Patientensicherheit und der effektiven Kommunikation mit Kollegen."
            }
        ]
      },
      {
        id: 'visa',
        icon: 'GlobeIcon',
        title: 'Visum und Aufenthaltstitel',
        content: [
            {
                subtitle: 'Für EU-/EWR-/Schweizer Bürger',
                text: "Sie benötigen kein Visum für die Einreise oder die Arbeit in Deutschland. Sie müssen lediglich nach Ihrer Ankunft Ihren Wohnsitz beim örtlichen Bürgeramt anmelden."
            },
            {
                subtitle: 'Für Nicht-EU-Bürger',
                text: "Sie müssen *vor* Ihrer Einreise nach Deutschland bei der deutschen Botschaft oder dem Konsulat in Ihrem Heimatland ein nationales Visum zum Zweck der Erwerbstätigkeit beantragen. Es gibt verschiedene Arten: ein 'Visum für Fachkräfte' bei vorliegendem Arbeitsangebot, eine 'Blaue Karte EU' für hochqualifizierte Fachkräfte mit einem bestimmten Mindestgehalt oder ein 'Visum zur Anerkennung ausländischer Berufsqualifikationen', das Ihnen die Einreise zur Durchführung der Anerkennungsmaßnahmen ermöglicht."
            },
            {
                subtitle: 'Nach der Ankunft',
                text: "Nach Ihrer Ankunft in Deutschland müssen Sie Ihr Visum bei der örtlichen Ausländerbehörde in einen Aufenthaltstitel umwandeln lassen."
            }
        ]
      },
      {
        id: 'working',
        icon: 'BriefcaseIcon',
        title: 'Arbeiten als medizinische Fachkraft',
        content: [
            {
                subtitle: 'Arbeitsverträge',
                text: "Ihr Vertrag sollte Ihr Gehalt, Ihre Arbeitszeiten, Urlaubstage (in der Regel 25-30 Tage pro Jahr) und Ihre Aufgaben klar angeben. Krankenhausärzte werden oft nach Tarifverträgen beschäftigt, die diese Bedingungen regeln."
            },
            {
                subtitle: 'Arbeitszeiten & Hierarchie',
                text: "Die reguläre Arbeitswoche beträgt etwa 40 Stunden, aber Überstunden sind im medizinischen Bereich üblich. Das deutsche Arbeitszeitgesetz regelt Arbeits- und Ruhezeiten. Deutsche Krankenhäuser haben eine klare hierarchische Struktur (Chefarzt, Oberarzt, etc.), aber Teamarbeit und interdisziplinäre Zusammenarbeit werden sehr geschätzt."
            }
        ]
      },
      {
        id: 'considerations',
        icon: 'ExclamationTriangleIcon',
        title: 'Wichtige Hinweise',
        content: [
            {
                subtitle: 'Versicherungen',
                text: "Eine Krankenversicherung ist in Deutschland obligatorisch. Mit einem Arbeitsvertrag werden Sie automatisch in der gesetzlichen Krankenversicherung angemeldet. Sie leisten auch Beiträge zur Renten-, Arbeitslosen- und Pflegeversicherung."
            },
            {
                subtitle: 'Berufshaftpflicht',
                text: "Es wird dringend empfohlen und von Arbeitgebern oft verlangt, eine Berufshaftpflichtversicherung abzuschließen, um sich gegen Kunstfehleransprüche abzusichern."
            },
            {
                subtitle: 'Vorsicht vor Betrug',
                text: "Seien Sie vorsichtig bei Agenturen, die hohe Vorauszahlungen für die Arbeitsvermittlung verlangen. Seriöse Personalvermittler wie Dogan Recruiting werden in der Regel vom Arbeitgeber bezahlt. Versenden Sie niemals Originaldokumente per Post; verwenden Sie immer beglaubigte Kopien. Überprüfen Sie Jobangebote wenn möglich direkt beim Krankenhaus oder der Klinik."
            }
        ]
      }
    ],

  }
};

export default translations;