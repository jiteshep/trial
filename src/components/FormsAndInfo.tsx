import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { Section, SectionTitle } from './Sections';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Mail, MapPin, ExternalLink, Maximize2, X, ShieldCheck, Loader2 } from 'lucide-react';

// APPLY SECTION
export const ApplySection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formUrl = config.WARD_MEMBER_GOOGLE_FORM_URL.includes('?') 
    ? `${config.WARD_MEMBER_GOOGLE_FORM_URL}&embedded=true` 
    : `${config.WARD_MEMBER_GOOGLE_FORM_URL}?embedded=true`;

  return (
    <Section id="apply" className="bg-gradient-to-b from-green-50/50 to-emerald-50 text-slate-900">
      <SectionTitle title={t.apply.title} subtitle={t.apply.subtitle} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 text-slate-900 transition-all duration-300">
          
          {/* Form Header Bar / Toolbar */}
          <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.apply.privacy}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                title="Expand Form"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Expand View</span>
              </button>

              <a 
                href={config.WARD_MEMBER_GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white transition-colors shadow-sm"
              >
                <span>{t.apply.cta}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form Frame Container */}
          <div className="relative w-full h-[650px] md:h-[850px] bg-slate-50">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 space-y-3">
                <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
                <p className="text-sm font-medium text-slate-600">Loading Application Form...</p>
              </div>
            )}
            
            <iframe 
              src={formUrl} 
              width="100%" 
              height="100%" 
              title="Ward Member Interest Form"
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>

          {/* Footer Notice */}
          <div className="p-5 text-center border-t border-slate-100 bg-slate-50/80 flex flex-col items-center">
            <p className="text-xs text-slate-500 max-w-2xl">{t.apply.notice}</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-sm">{t.apply.title}</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 w-full h-full relative">
                <iframe 
                  src={formUrl} 
                  width="100%" 
                  height="100%" 
                  title="Ward Member Interest Form Modal"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

// VOLUNTEER SECTION
export const VolunteerSection = () => {
  const { t } = useLanguage();
  return (
    <Section className="bg-orange-50 border-y border-orange-100">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">{t.volunteer.title}</h2>
        <p className="text-lg text-slate-700">{t.volunteer.subtitle}</p>
        <a 
          href={config.PARTNER_INTEREST_FORM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition-colors shadow-md hover:shadow-lg"
        >
          {t.volunteer.cta}
        </a>
      </div>
    </Section>
  );
};

// FAQ SECTION
export const FaqSection = () => {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q13, a: t.faq.a13 },
    { q: t.faq.q14, a: t.faq.a14 },
  ];

  return (
    <Section id="faq" className="bg-slate-50">
      <SectionTitle title={t.faq.title} />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <button 
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="font-bold text-slate-900">{faq.q}</span>
              {openIdx === idx ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-slate-600 leading-relaxed whitespace-pre-line"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

// CONTACT SECTION
export const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <Section id="contact" className="bg-white">
      <SectionTitle title={t.contact.title} />
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
        <div className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
          <Mail className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">{t.contact.email}</h3>
          <a href={`mailto:${config.GENERAL_CONTACT_EMAIL}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
            {config.GENERAL_CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
          <MapPin className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">{t.contact.address}</h3>
          <p className="text-slate-600 leading-relaxed">
            {config.OFFICE_ADDRESS}
          </p>
        </div>
      </div>
    </Section>
  );
};

// PARTNERS SECTION
export const PartnersSection = () => {
  const { t } = useLanguage();
  return (
    <Section className="bg-white border-t border-slate-100">
      <div className="text-center mb-8">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t.partners.supportedBy}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
        <img src="/logo-ep.png" alt="Empower Panchayat" className="h-16 md:h-24 object-contain" />
        <img src="/logo-ts.png" alt="Tejasvi Surya" className="h-12 md:h-16 object-contain" />
      </div>
    </Section>
  );
};
