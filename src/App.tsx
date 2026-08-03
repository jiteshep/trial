import React from 'react';
import { useLanguage, LanguageProvider } from './LanguageContext';
import { Section, SectionTitle } from './components/Sections';
import { Header, Hero, Footer } from './components/Layout';
import { AboutSection, WhyMatterSection, LeadershipSection, ObjectivesSection, TimelineSection } from './components/Sections';
import { ApplySection, VolunteerSection, FaqSection, ContactSection, PartnersSection } from './components/FormsAndInfo';
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
    <Section id="impact" className="bg-white">
      <SectionTitle title={t.impact.title} />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            {t.impact.targetsLabel}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
              <p className="text-2xl font-bold text-orange-700">{config.STATS.TARGET_CANDIDATES}</p>
              <p className="text-sm text-slate-600 mt-1">Candidates</p>
            </div>
            <div className="p-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-2xl font-bold text-green-700">{config.STATS.TARGET_WOMEN_CANDIDATES}</p>
              <p className="text-sm text-slate-600 mt-1">Women Leaders</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 col-span-2">
              <p className="text-2xl font-bold text-blue-900">{config.STATS.PANCHAYATS}</p>
              <p className="text-sm text-slate-600 mt-1">Grama Panchayats Supported</p>
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
               transition={{ delay: idx * 0.1 }}
               className="flex gap-3 items-start"
             >
               <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
               <p className="text-slate-700">{point}</p>
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
        <FaqSection />
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
