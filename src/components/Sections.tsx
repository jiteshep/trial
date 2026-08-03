import React from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { CheckCircle, Users, Lightbulb, TrendingUp, HandHeart, Flag, Shield, Laptop, BookOpen, Clock, Target, Home, Phone, Mail, MapPin, Scroll, Layers, Building2, Coins, AlertCircle, Quote, Vote, UserPlus, ClipboardCheck, GraduationCap, Activity, Bot, LayoutDashboard, LineChart, ArrowRight } from 'lucide-react';
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

// ABOUT SECTION (Why This Initiative Exists)
export const AboutSection = () => {
  const { t } = useLanguage();
  
  const highlightIcons = [
    <BookOpen className="w-6 h-6 text-amber-600" />,
    <Layers className="w-6 h-6 text-blue-600" />,
    <Building2 className="w-6 h-6 text-red-600" />,
    <Coins className="w-6 h-6 text-emerald-600" />,
    <Users className="w-6 h-6 text-purple-600" />,
  ];

  return (
    <Section id="about" className="bg-slate-50">
      <SectionTitle title={t.about.title} />
      
      {/* Narrative Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-12 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-700/50"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <Quote className="w-10 h-10 text-orange-500/40 mb-4" />
        <p className="text-xl md:text-2xl font-serif leading-relaxed text-slate-100 italic relative z-10">
          "{t.about.narrative}"
        </p>
      </motion.div>

      {/* Problem Highlights */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{t.about.highlightsTitle}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  {highlightIcons[idx % highlightIcons.length]}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Landscape Stats Card in Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900 to-slate-900 text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-green-800/40"
          >
            <div>
              <h4 className="text-lg font-bold text-orange-400 mb-4">{t.stats.title}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-extrabold text-white">{config.STATS.PANCHAYATS}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{t.stats.panchayats}</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-green-400">{config.STATS.WARDS}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{t.stats.wards}</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-orange-400">{config.STATS.RURAL_VOTERS}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{t.stats.voters}</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-blue-300">{config.STATS.RURAL_ACS}</p>
                  <p className="text-xs text-slate-300 mt-0.5">{t.stats.acs}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transition Statement */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl shadow-sm"
      >
        <p className="text-xl md:text-2xl font-extrabold text-orange-900 tracking-tight">
          ⚡ {t.about.transition}
        </p>
      </motion.div>
    </Section>
  );
};

// WHY PANCHAYATS MATTER
export const WhyMatterSection = () => {
  const { t } = useLanguage();
  
  const points = [
    { icon: <Home className="w-6 h-6" />, title: t.whyMatter.amenities, desc: t.whyMatter.amenitiesDesc },
    { icon: <TrendingUp className="w-6 h-6" />, title: t.whyMatter.infra, desc: t.whyMatter.infraDesc },
    { icon: <Shield className="w-6 h-6" />, title: t.whyMatter.social, desc: t.whyMatter.socialDesc },
    { icon: <Lightbulb className="w-6 h-6" />, title: t.whyMatter.earning, desc: t.whyMatter.earningDesc },
  ];

  return (
    <Section className="bg-white">
      <SectionTitle title={t.whyMatter.title} subtitle={t.whyMatter.subtitle} />
      <div className="grid md:grid-cols-2 gap-8">
        {points.map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              {point.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// LEADERSHIP
export const LeadershipSection = () => {
  const { t } = useLanguage();
  
  const icons = [
    <Users className="w-6 h-6 text-green-700" />,
    <HandHeart className="w-6 h-6 text-orange-600" />,
    <Target className="w-6 h-6 text-blue-700" />,
    <Flag className="w-6 h-6 text-purple-700" />,
    <Shield className="w-6 h-6 text-emerald-700" />,
    <Building2 className="w-6 h-6 text-amber-600" />
  ];

  return (
    <Section className="bg-slate-50">
      <SectionTitle title={t.leadership.title} subtitle={t.leadership.subtitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {t.leadership.points.map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
            </div>
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

// TIMELINE (How the Initiative Works - 9-Step Governance Pipeline)
export const TimelineSection = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Vote className="w-6 h-6 text-orange-400" />,
    <UserPlus className="w-6 h-6 text-blue-400" />,
    <ClipboardCheck className="w-6 h-6 text-purple-400" />,
    <GraduationCap className="w-6 h-6 text-emerald-400" />,
    <Activity className="w-6 h-6 text-amber-400" />,
    <Bot className="w-6 h-6 text-cyan-300" />,
    <Users className="w-6 h-6 text-green-400" />,
    <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
    <LineChart className="w-6 h-6 text-rose-400" />,
  ];

  return (
    <Section id="programme" className="bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-green-600/10 via-orange-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          ⚡ {t.timeline.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {t.timeline.title}
        </h2>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          {t.timeline.subtitle}
        </p>
      </div>

      {/* Grid of 9 Governance Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-7xl mx-auto">
        {t.timeline.steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className="group relative bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between"
          >
            <div>
              {/* Header row with step icon and glowing number badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-inner">
                  {stepIcons[idx % stepIcons.length]}
                </div>
                <span className="text-2xl font-black text-slate-600 group-hover:text-orange-400 transition-colors tracking-wider font-mono">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Bottom step progress connector */}
            {idx < 8 ? (
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Phase {step.num}</span>
                <span className="text-orange-400/90 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Next <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ) : (
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                <span>Phase {step.num}</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  ✓ Full Transformation
                </span>
              </div>
            )}
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
