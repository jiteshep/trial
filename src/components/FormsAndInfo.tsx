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
          <div className="px-6 py-4 bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-emerald-700">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>{t.apply.privacy}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-900 text-emerald-100 border border-emerald-600/60 transition-colors"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 bg-emerald-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <span className="font-semibold text-sm">{t.apply.title}</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors"
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
    <Section className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-emerald-500/10 border-y border-orange-200/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t.volunteer.title}</h2>
        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">{t.volunteer.subtitle}</p>
        <div>
          <a 
            href={config.PARTNER_INTEREST_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-extrabold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            {t.volunteer.cta}
          </a>
        </div>
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
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                isOpen ? 'border-emerald-500/80 ring-2 ring-emerald-500/20 shadow-md border-l-4 border-l-emerald-600' : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="font-extrabold text-slate-900 text-base md:text-lg pr-4">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line border-t border-slate-100/80 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
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
        <motion.div 
          whileHover={{ y: -4 }}
          className="flex flex-col items-center p-8 text-center bg-slate-50/80 rounded-3xl border border-slate-200/80 hover:border-green-300 hover:shadow-xl transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Mail className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg mb-2">{t.contact.email}</h3>
          <a href={`mailto:${config.GENERAL_CONTACT_EMAIL}`} className="text-slate-600 hover:text-green-700 transition-colors font-semibold text-sm">
            {config.GENERAL_CONTACT_EMAIL}
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="flex flex-col items-center p-8 text-center bg-slate-50/80 rounded-3xl border border-slate-200/80 hover:border-orange-300 hover:shadow-xl transition-all group"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <MapPin className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg mb-2">{t.contact.address}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {config.OFFICE_ADDRESS}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

// PARTNERS SECTION
export const PartnersSection = () => {
  const { t } = useLanguage();
  return (
    <Section className="bg-white border-t border-slate-100/80">
      <div className="text-center mb-8">
        <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">{t.partners.supportedBy}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
        <img src="/logo-ep.png" alt="Empower Panchayat" className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" />
        <img src="/logo-ts.png" alt="Tejasvi Surya" className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    </Section>
  );
};
