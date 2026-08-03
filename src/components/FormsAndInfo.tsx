import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { Section, SectionTitle } from './Sections';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin } from 'lucide-react';

// APPLY SECTION
export const ApplySection = () => {
  const { t } = useLanguage();
  return (
    <Section id="apply" className="bg-green-50 text-slate-900">
      <SectionTitle title={t.apply.title} subtitle={t.apply.subtitle} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl text-slate-900">
          <div className="p-4 bg-slate-50 border-b border-slate-100 text-sm text-slate-500 text-center">
            {t.apply.privacy}
          </div>
          <div className="relative w-full h-[600px] md:h-[800px]">
            {/* Google Form Embed Placeholder */}
            <iframe 
              src={config.WARD_MEMBER_GOOGLE_FORM_URL} 
              width="100%" 
              height="100%" 
              title="Ward Member Interest Form"
              className="absolute inset-0 w-full h-full border-0"
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
          <div className="p-6 text-center border-t border-slate-100 bg-slate-50 flex flex-col items-center">
            <p className="text-slate-600 mb-4">{t.apply.fallback}</p>
            <a 
              href={config.WARD_MEMBER_GOOGLE_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-colors"
            >
              {t.apply.cta}
            </a>
            <p className="text-xs text-slate-500 mt-4 max-w-2xl">{t.apply.notice}</p>
          </div>
        </div>
      </div>
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
          className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition-colors"
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
      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-2xl border border-slate-100">
          <Mail className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">{t.contact.email}</h3>
          <a href={`mailto:${config.GENERAL_CONTACT_EMAIL}`} className="text-slate-600 hover:text-blue-600 transition-colors">
            {config.GENERAL_CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-2xl border border-slate-100">
          <Phone className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">{t.contact.phone}</h3>
          <a href={`tel:${config.GENERAL_CONTACT_PHONE}`} className="text-slate-600 hover:text-green-600 transition-colors">
            {config.GENERAL_CONTACT_PHONE}
          </a>
        </div>
        <div className="flex flex-col items-center p-6 text-center bg-slate-50 rounded-2xl border border-slate-100">
          <MapPin className="w-8 h-8 text-orange-600 mb-4" />
          <h3 className="font-bold text-slate-900 mb-2">{t.contact.address}</h3>
          <p className="text-slate-600">
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
