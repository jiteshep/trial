import React from 'react';
import { useLanguage, LanguageProvider } from './LanguageContext';
import { Section, SectionTitle } from './components/Sections';
import { Header, Hero, Footer } from './components/Layout';
import { AboutSection, WhyMatterSection, LeadershipSection, ObjectivesSection, TimelineSection } from './components/Sections';
import { ApplySection, VolunteerSection, ElectionSection, ContactSection, PartnersSection } from './components/FormsAndInfo';
import { CheckCircle, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { config } from './config';

const ImpactSection = () => {
  const { t } = useLanguage();
  
  const impacts = [
    t.impact.point1,
    t.impact.point2,
    t.impact.point3,
    t.impact.point4,
    t.impact.point5,
  ];

  return (
    <Section id="impact" className="bg-white relative overflow-hidden">
      <SectionTitle title={t.impact.title} />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <div className="space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <span>{t.impact.targetsLabel}</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{config.STATS.TARGET_CANDIDATES}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Candidates</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{config.STATS.TARGET_WOMEN_CANDIDATES}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Women Leaders</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-700 to-green-700 text-white border border-emerald-600 col-span-2 shadow-lg hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-3xl font-black text-white">{config.STATS.PANCHAYATS}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-100 mt-1">Grama Panchayats Supported</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {impacts.map((point, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.08 }}
               className="flex gap-3.5 items-start p-3.5 rounded-xl hover:bg-slate-50 transition-colors"
             >
               <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                 <CheckCircle className="w-4 h-4" />
               </div>
               <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">{point}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

function MainContent() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhyMatterSection />
        <LeadershipSection />
        <ObjectivesSection />
        <TimelineSection />
        <ApplySection />
        <VolunteerSection />
        <ImpactSection />
        <PartnersSection />
        <ElectionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
