import React from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { CheckCircle, Users, Lightbulb, TrendingUp, HandHeart, Flag, Shield, Laptop, BookOpen, Clock, Target, Home, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

// Common Section Wrapper
export const Section = ({ id, className = "", children }: { id?: string, className?: string, children: React.ReactNode }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

export const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

// ABOUT SECTION
export const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <Section id="about" className="bg-slate-50">
      <SectionTitle title={t.about.title} />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-slate-700 leading-relaxed"
        >
          <p>{t.about.content1}</p>
          <p>{t.about.content2}</p>
          <p>{t.about.content3}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">{t.stats.title}</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-900">{config.STATS.PANCHAYATS}</p>
              <p className="text-sm text-slate-600 mt-1">{t.stats.panchayats}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700">{config.STATS.WARDS}</p>
              <p className="text-sm text-slate-600 mt-1">{t.stats.wards}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">{config.STATS.RURAL_VOTERS}</p>
              <p className="text-sm text-slate-600 mt-1">{t.stats.voters}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-700">{config.STATS.RURAL_ACS}</p>
              <p className="text-sm text-slate-600 mt-1">{t.stats.acs}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// WHY PANCHAYATS MATTER
export const WhyMatterSection = () => {
  const { t } = useLanguage();
  
  const points = [
    { icon: <Home className="w-6 h-6" />, title: t.whyMatter.everyday, desc: t.whyMatter.everydayDesc },
    { icon: <TrendingUp className="w-6 h-6" />, title: t.whyMatter.infra, desc: t.whyMatter.infraDesc },
    { icon: <HandHeart className="w-6 h-6" />, title: t.whyMatter.welfare, desc: t.whyMatter.welfareDesc },
    { icon: <Lightbulb className="w-6 h-6" />, title: t.whyMatter.livelihood, desc: t.whyMatter.livelihoodDesc },
    { icon: <Shield className="w-6 h-6" />, title: t.whyMatter.accountability, desc: t.whyMatter.accountabilityDesc },
    { icon: <Users className="w-6 h-6" />, title: t.whyMatter.participation, desc: t.whyMatter.participationDesc },
  ];

  return (
    <Section className="bg-white">
      <SectionTitle title={t.whyMatter.title} subtitle={t.whyMatter.subtitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              {point.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// DELIVERABLES
export const DeliverablesSection = () => {
  const { t } = useLanguage();
  
  const cards = [
    { title: t.deliverables.amenities, desc: t.deliverables.amenitiesDesc },
    { title: t.deliverables.infra, desc: t.deliverables.infraDesc },
    { title: t.deliverables.earning, desc: t.deliverables.earningDesc },
    { title: t.deliverables.social, desc: t.deliverables.socialDesc },
  ];

  return (
    <Section className="bg-blue-900 text-white">
      <SectionTitle title={t.deliverables.title} />
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700/50"
          >
            <h3 className="text-xl font-bold mb-4 text-orange-400">{card.title}</h3>
            <p className="text-blue-100 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// LEADERSHIP
export const LeadershipSection = () => {
  const { t } = useLanguage();
  return (
    <Section className="bg-slate-50">
      <SectionTitle title={t.leadership.title} />
      <div className="max-w-4xl mx-auto space-y-4">
        {[t.leadership.point1, t.leadership.point2, t.leadership.point3, t.leadership.point4].map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100"
          >
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-lg text-slate-700">{point}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// OBJECTIVES
export const ObjectivesSection = () => {
  const { t } = useLanguage();
  
  const objectives = [
    { title: t.objectives.youth, desc: t.objectives.youthDesc, icon: <Users className="w-6 h-6" /> },
    { title: t.objectives.women, desc: t.objectives.womenDesc, icon: <HandHeart className="w-6 h-6" /> },
    { title: t.objectives.affordable, desc: t.objectives.affordableDesc, icon: <Target className="w-6 h-6" /> },
    { title: t.objectives.tech, desc: t.objectives.techDesc, icon: <Laptop className="w-6 h-6" /> },
    { title: t.objectives.progressive, desc: t.objectives.progressiveDesc, icon: <Flag className="w-6 h-6" /> },
  ];

  return (
    <Section id="mission" className="bg-white">
      <SectionTitle title={t.objectives.title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((obj, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-orange-50 border border-orange-100"
          >
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              {obj.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{obj.title}</h3>
            <p className="text-slate-700">{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// TIMELINE
export const TimelineSection = () => {
  const { t } = useLanguage();
  return (
    <Section id="programme" className="bg-slate-50">
      <SectionTitle title={t.timeline.title} />
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
        {[
          { phase: t.timeline.phase1, desc: t.timeline.phase1Desc, icon: <BookOpen className="w-5 h-5" /> },
          { phase: t.timeline.phase2, desc: t.timeline.phase2Desc, icon: <Users className="w-5 h-5" /> },
          { phase: t.timeline.phase3, desc: t.timeline.phase3Desc, icon: <Flag className="w-5 h-5" /> },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-16 md:pl-20 py-6"
          >
            <div className="absolute left-2 md:left-4 top-6 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center border-4 border-slate-50 z-10">
              {item.icon}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.phase}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// ELIGIBILITY
export const EligibilitySection = () => {
  const { t } = useLanguage();
  return (
    <Section id="eligibility" className="bg-white">
      <SectionTitle title={t.eligibility.title} />
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            t.eligibility.point1,
            t.eligibility.point2,
            t.eligibility.point3,
            t.eligibility.point4,
            t.eligibility.point5
          ].map((point, idx) => (
             <div key={idx} className="flex gap-3">
               <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
               <p className="text-slate-700">{point}</p>
             </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
