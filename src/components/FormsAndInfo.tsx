import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { Section, SectionTitle } from './Sections';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Mail, MapPin, ExternalLink, Maximize2, X, ShieldCheck, Loader2, Scale, Calendar, Award, UserCheck, Users, Zap, HandHeart, BookOpen, Flag, Sprout, Briefcase } from 'lucide-react';

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


// ELECTION & ELIGIBILITY SECTION
export const ElectionSection = () => {
  const { t, language } = useLanguage();
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  const legalIcons = [
    <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />,
    <Calendar className="w-5 h-5 text-emerald-600 shrink-0" />,
    <Scale className="w-5 h-5 text-emerald-600 shrink-0" />,
    <Award className="w-5 h-5 text-emerald-600 shrink-0" />,
    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />,
  ];

  const profileConfigs = [
    {
      icon: <HandHeart className="w-5 h-5 text-orange-600" />,
      bgColor: "bg-orange-50/60 hover:bg-orange-50",
      borderColor: "border-orange-100 hover:border-orange-200",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      bgColor: "bg-amber-50/60 hover:bg-amber-50",
      borderColor: "border-amber-100 hover:border-amber-200",
    },
    {
      icon: <Users className="w-5 h-5 text-rose-600" />,
      bgColor: "bg-rose-50/60 hover:bg-rose-50",
      borderColor: "border-rose-100 hover:border-rose-200",
    },
    {
      icon: <Sprout className="w-5 h-5 text-green-600" />,
      bgColor: "bg-green-50/60 hover:bg-green-50",
      borderColor: "border-green-100 hover:border-green-200",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      bgColor: "bg-blue-50/60 hover:bg-blue-50",
      borderColor: "border-blue-100 hover:border-blue-200",
    },
    {
      icon: <Flag className="w-5 h-5 text-indigo-600" />,
      bgColor: "bg-indigo-50/60 hover:bg-indigo-50",
      borderColor: "border-indigo-100 hover:border-indigo-200",
    },
  ];

  return (
    <Section id="election" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none"></div>
      
      <SectionTitle title={t.election.title} />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* 1. Who Should Lead? (Election Profiles) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-3">
            <Users className="w-6 h-6 text-orange-600" />
            <span>{t.election.profilesTitle}</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.election.profiles.map((profile, idx) => {
              const config = profileConfigs[idx] || profileConfigs[0];
              return (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 ${config.bgColor} ${config.borderColor}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs mb-4 border border-slate-100/50">
                      {config.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-950 text-sm md:text-base leading-snug mb-2">{profile.title}</h4>
                    <p className="text-xs md:text-sm font-semibold text-slate-700 leading-relaxed">{profile.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 2. Split Row: Legal Eligibility & Brochure Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Legal Eligibility Rules (Eligibility) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-3">
                <Scale className="w-6 h-6 text-emerald-700" />
                <span>{t.election.eligibilityTitle}</span>
              </h3>
              
              <div className="space-y-4">
                {t.election.legalPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {legalIcons[idx] || <UserCheck className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex gap-3 items-start">
              <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-950 font-bold leading-relaxed">{t.timeline.disclaimer}</p>
            </div>
          </motion.div>

          {/* Right Column: Brochure Download & Interactive Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-green-950 text-white p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700/60 text-emerald-200 flex items-center justify-center border border-emerald-600/50">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-black">{t.election.brochureTitle}</h3>
              </div>
              
              <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed font-medium">
                {t.election.brochureDesc}
              </p>

              {/* PDF Mini Preview / Interactive Visual */}
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="w-full text-left p-4 rounded-2xl bg-emerald-900/50 border border-emerald-700/50 backdrop-blur-xs flex items-center gap-4 hover:bg-emerald-900/80 transition-all cursor-pointer group/card"
              >
                <div className="w-12 h-16 bg-white rounded-lg flex flex-col items-center justify-center shrink-0 shadow-md border border-emerald-800 relative overflow-hidden">
                  <span className="text-[10px] font-black text-rose-600 tracking-tighter">PDF</span>
                  <div className="w-7 h-[2px] bg-slate-200 mt-1"></div>
                  <div className="w-7 h-[2px] bg-slate-200 mt-0.5"></div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-emerald-900" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">Brochure Preview</p>
                  <p className="text-sm font-extrabold text-white mt-0.5 truncate">NGN Ward Member Brochure</p>
                </div>
              </button>
            </div>

            <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm transition-all hover:scale-102 active:scale-98 shadow-md cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{t.election.brochureBtnPreview}</span>
              </button>
              
              <a
                href="/NGN%20Ward%20Member%20Brochure.pdf"
                download="NGN_Ward_Member_Brochure.pdf"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm transition-all hover:scale-102 active:scale-98 shadow-md text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.election.brochureBtnDownload}</span>
              </a>
            </div>
          </motion.div>
          
        </div>

      </div>

      {/* Fullscreen Brochure Modal */}
      <AnimatePresence>
        {isBrochureModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/70 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 bg-emerald-900 text-white flex justify-between items-center px-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-300" />
                  <span className="font-extrabold text-base md:text-lg">
                    {language === 'kn' ? 'ನಮ್ಮ ಗ್ರಾಮ ನಾಯಕ ಕರಪತ್ರ' : 'Namma Grama Nayaka Brochure'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href="/NGN%20Ward%20Member%20Brochure.pdf" 
                    download="NGN_Ward_Member_Brochure.pdf"
                    className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.election.brochureBtnDownload}</span>
                  </a>
                  <button 
                    onClick={() => setIsBrochureModalOpen(false)}
                    className="p-1.5 rounded-full hover:bg-emerald-800 text-emerald-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal PDF Iframe Content */}
              <div className="flex-1 w-full h-full relative bg-slate-100">
                <iframe 
                  src="/NGN%20Ward%20Member%20Brochure.pdf" 
                  width="100%" 
                  height="100%" 
                  title="Namma Grama Nayaka Brochure Preview"
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

export const PartnersSection = () => {
  const { t } = useLanguage();
  return (
    <Section className="bg-white border-t border-slate-100/80 py-12 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <p className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-widest">{t.partners.supportedBy}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto px-4">
        {/* Card 1: Empower Panchayat */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-64 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            <img 
              src="/logo-ep.png" 
              alt={t.partners.epName}
              className="max-h-[80%] max-w-[85%] object-contain mix-blend-multiply filter contrast-105 transition-all duration-300" 
            />
          </div>
          <h4 className="text-base font-bold text-slate-800 tracking-tight mt-1">{t.partners.epName}</h4>
        </div>

        {/* Card 2: Tejasvi Surya */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-64 sm:w-64 md:w-72 h-64 sm:h-72 md:h-80 p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            <img 
              src="/logo-ts-enhanced.png" 
              alt={t.partners.tsName}
              className="max-h-[95%] max-w-[95%] object-contain mix-blend-multiply filter contrast-105 brightness-105 transition-all duration-300" 
            />
          </div>
          <h4 className="text-base font-bold text-slate-800 tracking-tight mt-1">{t.partners.tsName}</h4>
        </div>
      </div>
    </Section>
  );
};
