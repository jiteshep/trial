import React from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { 
  CheckCircle, Users, Lightbulb, TrendingUp, HandHeart, Flag, Shield, Laptop, BookOpen, Clock, Target, Home, Phone, Mail, MapPin, Scroll, Layers, Building2, Coins, AlertCircle, Quote,
  Vote, UserCheck, Search, Sparkles, LayoutDashboard, Trophy, ArrowRight, ArrowDown, ChevronRight, Zap
} from 'lucide-react';
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
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

// ABOUT SECTION (Why This Initiative Exists)
export const AboutSection = () => {
  const { t } = useLanguage();
  
  const highlightIcons = [
    <BookOpen className="w-5 h-5 text-amber-600 shrink-0" />,
    <Layers className="w-5 h-5 text-blue-600 shrink-0" />,
    <Building2 className="w-5 h-5 text-rose-600 shrink-0" />,
    <Coins className="w-5 h-5 text-emerald-600 shrink-0" />,
    <Users className="w-5 h-5 text-purple-600 shrink-0" />,
  ];

  return (
    <Section id="about" className="bg-slate-50 relative overflow-hidden py-10 md:py-16">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header: Title & Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
          {t.about.title}
        </h2>
        <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed italic font-medium">
          "{t.about.narrative}"
        </p>
      </div>
      
      {/* Single Viewport Responsive Split Grid */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
        
        {/* HERO CARD (HIGHEST PRIVILEGE): The Landscape of Local Governance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-amber-50/30 text-slate-900 p-6 md:p-8 rounded-3xl shadow-xl border-2 border-emerald-600/30 relative overflow-hidden flex flex-col justify-between group"
        >
          {/* Ambient Decorative Backdrops */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            {/* Badges & Headers */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-700 text-white shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-300" /> Featured Pillar
              </span>
              <span className="text-xs text-emerald-900 font-bold bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
                Karnataka Governance Context
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">
              {t.stats.title}
            </h3>
            <p className="text-sm md:text-base text-slate-700 mb-6 leading-relaxed font-medium">
              Grassroots democracy in Karnataka functions across thousands of rural communities. Building institutional capacity at this scale is critical to grassroots transformation.
            </p>

            {/* 2x2 Spacious Stats Grid (No text clipping or squishing) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Panchayats */}
              <div className="bg-white/95 backdrop-blur-xs p-4 md:p-5 rounded-2xl border border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{config.STATS.PANCHAYATS}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug mt-0.5">{t.stats.panchayats}</p>
                </div>
              </div>

              {/* Wards */}
              <div className="bg-white/95 backdrop-blur-xs p-4 md:p-5 rounded-2xl border border-teal-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-100/90 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl font-black text-emerald-700 tracking-tight">{config.STATS.WARDS}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug mt-0.5">{t.stats.wards}</p>
                </div>
              </div>

              {/* Rural Voters */}
              <div className="bg-white/95 backdrop-blur-xs p-4 md:p-5 rounded-2xl border border-amber-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl font-black text-orange-600 tracking-tight">{config.STATS.RURAL_VOTERS}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug mt-0.5">{t.stats.voters}</p>
                </div>
              </div>

              {/* Rural Assembly Constituencies */}
              <div className="bg-white/95 backdrop-blur-xs p-4 md:p-5 rounded-2xl border border-blue-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-2xl md:text-3xl font-black text-blue-700 tracking-tight">{config.STATS.RURAL_ACS}</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-snug mt-0.5">{t.stats.acs}</p>
                </div>
              </div>
            </div>
          </div>

          {/* High Visibility Transition Highlight Bar */}
          <div className="relative z-10 mt-6 pt-4 border-t border-emerald-200/80 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm md:text-base text-emerald-950 font-extrabold bg-white/90 px-4 py-2.5 rounded-xl border border-emerald-200 w-full shadow-2xs">
              <Zap className="w-5 h-5 text-orange-500 shrink-0 fill-orange-500/20" />
              <span>{t.about.transition}</span>
            </span>
          </div>
        </motion.div>

        {/* SECONDARY SIDE PANEL: Key Challenges (Clear High-Contrast Cards, No Clipping) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 bg-white p-6 md:p-7 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">{t.about.highlightsTitle}</h4>
              <span className="text-xs font-extrabold text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">Core Challenges</span>
            </div>

            <div className="space-y-3">
              {t.about.highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200/80 hover:border-orange-300 transition-all flex items-center gap-3.5 group cursor-default shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-orange-300 transition-colors">
                    {highlightIcons[idx % highlightIcons.length]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-extrabold text-slate-900 group-hover:text-orange-950 transition-colors leading-snug whitespace-normal break-words">
                      {item.title}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 font-bold">Addressing grassroots structural bottlenecks with AI & Capacity Support</p>
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
    { icon: <Home className="w-6 h-6" />, title: t.whyMatter.amenities, desc: t.whyMatter.amenitiesDesc },
    { icon: <TrendingUp className="w-6 h-6" />, title: t.whyMatter.infra, desc: t.whyMatter.infraDesc },
    { icon: <Shield className="w-6 h-6" />, title: t.whyMatter.social, desc: t.whyMatter.socialDesc },
    { icon: <Lightbulb className="w-6 h-6" />, title: t.whyMatter.earning, desc: t.whyMatter.earningDesc },
  ];

  return (
    <Section className="bg-white relative overflow-hidden">
      <SectionTitle title={t.whyMatter.title} subtitle={t.whyMatter.subtitle} />
      <div className="grid md:grid-cols-2 gap-8">
        {points.map((point, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-5 group"
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              {point.icon}
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-xl mb-2 group-hover:text-green-700 transition-colors">{point.title}</h3>
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
    <Users className="w-6 h-6 text-emerald-600" />,
    <HandHeart className="w-6 h-6 text-orange-600" />,
    <Target className="w-6 h-6 text-blue-600" />,
    <Flag className="w-6 h-6 text-purple-600" />,
    <Shield className="w-6 h-6 text-teal-600" />,
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
            transition={{ delay: idx * 0.08 }}
            className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-green-50 flex items-center justify-center mb-5 transition-colors">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">{point.title}</h3>
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
            transition={{ delay: idx * 0.08 }}
            className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top Saffron Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-80"></div>
            
            <div className="w-12 h-12 bg-orange-100/80 text-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all">
              {obj.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{obj.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// TIMELINE (HOW THE INITIATIVE WORKS - VISUAL LEADERSHIP JOURNEY)
export const TimelineSection = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = React.useState<number | null>(null);

  const stepIcons = [
    <Vote className="w-6 h-6 text-amber-600" />,
    <UserCheck className="w-6 h-6 text-amber-600" />,
    <Target className="w-6 h-6 text-amber-600" />,
    <BookOpen className="w-6 h-6 text-emerald-600" />,
    <Search className="w-6 h-6 text-emerald-600" />,
    <Sparkles className="w-6 h-6 text-emerald-600" />,
    <Users className="w-6 h-6 text-blue-600" />,
    <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    <Trophy className="w-6 h-6 text-blue-600" />,
  ];

  const phaseColors = [
    {
      badgeBg: 'bg-amber-100/80 text-amber-900 border-amber-200',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
      cardBorder: 'border-amber-200/70 hover:border-amber-400',
      cardGlow: 'hover:shadow-amber-500/10',
      dotBg: 'bg-amber-500',
      phaseTitle: t.timeline.phases?.foundation || 'Phase 1: Readiness & Onboarding',
      headerBg: 'from-amber-50/80 to-amber-100/40 text-amber-950 border-amber-200'
    },
    {
      badgeBg: 'bg-emerald-100/80 text-emerald-900 border-emerald-200',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      cardBorder: 'border-emerald-200/70 hover:border-emerald-400',
      cardGlow: 'hover:shadow-emerald-500/10',
      dotBg: 'bg-emerald-500',
      phaseTitle: t.timeline.phases?.empowerment || 'Phase 2: Capacity & AI Intelligence',
      headerBg: 'from-emerald-50/80 to-emerald-100/40 text-emerald-950 border-emerald-200'
    },
    {
      badgeBg: 'bg-blue-100/80 text-blue-900 border-blue-200',
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
      cardBorder: 'border-blue-200/70 hover:border-blue-400',
      cardGlow: 'hover:shadow-blue-500/10',
      dotBg: 'bg-blue-500',
      phaseTitle: t.timeline.phases?.action || 'Phase 3: Execution & Impact',
      headerBg: 'from-blue-50/80 to-blue-100/40 text-blue-950 border-blue-200'
    }
  ];

  const steps = t.timeline.steps || [];

  return (
    <Section id="programme" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden relative">
      {/* Background Subtle Blur Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-orange-600 animate-pulse" />
            {t.timeline.badge || 'THE LEADERSHIP JOURNEY'}
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.timeline.title}
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* Horizontal Pipeline Trail (Visual Flow Indicator Bar) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 p-4 md:p-6 rounded-2xl bg-white text-slate-900 shadow-md border border-slate-200 overflow-x-auto scrollbar-none"
        >
          <div className="flex items-center justify-between min-w-[900px] gap-2">
            {steps.map((st: { num: string; title: string }, idx: number) => {
              const isSelected = activeStep === idx;
              return (
                <React.Fragment key={idx}>
                  <button
                    onClick={() => setActiveStep(isSelected ? null : idx)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all text-xs font-bold shrink-0 cursor-pointer ${
                      isSelected 
                        ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105' 
                        : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200/60'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {st.num}
                    </span>
                    <span>{st.title}</span>
                  </button>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* 9-Step Visual Journey Cards */}
        <div className="space-y-12">
          {[0, 1, 2].map((phaseIdx) => {
            const phaseInfo = phaseColors[phaseIdx];
            const phaseSteps = steps.slice(phaseIdx * 3, phaseIdx * 3 + 3);

            return (
              <div key={phaseIdx} className="relative">
                {/* Phase Title Ribbon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-4 py-2 rounded-xl border text-sm font-extrabold tracking-wide uppercase shadow-sm bg-gradient-to-r ${phaseInfo.headerBg} flex items-center gap-2`}>
                    <span className={`w-3 h-3 rounded-full ${phaseInfo.dotBg} animate-ping`}></span>
                    {phaseInfo.phaseTitle}
                  </div>
                  <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                {/* Grid of 3 Step Cards */}
                <div className="grid md:grid-cols-3 gap-6 relative">
                  {phaseSteps.map((step: { num: string; title: string; sub: string; desc: string }, itemIdx: number) => {
                    const globalIdx = phaseIdx * 3 + itemIdx;
                    const isLastInRow = itemIdx === 2;
                    const isLastOverall = globalIdx === steps.length - 1;
                    const isHighlighted = activeStep === globalIdx;

                    return (
                      <motion.div
                        key={globalIdx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIdx * 0.12 }}
                        whileHover={{ y: -6 }}
                        onMouseEnter={() => setActiveStep(globalIdx)}
                        onMouseLeave={() => setActiveStep(null)}
                        className={`relative p-6 rounded-2xl bg-white border transition-all duration-300 shadow-md ${phaseInfo.cardBorder} ${phaseInfo.cardGlow} ${
                          isHighlighted ? 'ring-2 ring-orange-500 shadow-xl border-transparent -translate-y-1.5' : ''
                        }`}
                      >
                        {/* Flow Arrow Badges */}
                        {!isLastInRow && (
                          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center z-20 text-slate-400">
                            <ArrowRight className="w-4 h-4 text-slate-600" />
                          </div>
                        )}
                        {isLastInRow && !isLastOverall && (
                          <div className="hidden md:flex absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center z-20 text-slate-400">
                            <ArrowDown className="w-4 h-4 text-slate-600" />
                          </div>
                        )}

                        {/* Top Card Row */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${phaseInfo.badgeBg}`}>
                            STEP {step.num}
                          </span>
                          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${phaseInfo.iconBg} shadow-xs`}>
                            {stepIcons[globalIdx % stepIcons.length]}
                          </div>
                        </div>

                        {/* Subtitle tag */}
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          {step.sub}
                        </p>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {step.desc}
                        </p>

                        {/* Mobile Flow Arrow */}
                        {!isLastOverall && (
                          <div className="md:hidden flex justify-center mt-4 pt-2 border-t border-slate-100">
                            <ArrowDown className="w-4 h-4 text-orange-500 animate-bounce" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Journey Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 text-white shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5" /> {t.timeline.callout?.badge || "Empowering 58,000+ Ward Leaders"}
            </div>
            <h4 className="text-2xl md:text-3xl font-extrabold text-white">
              {t.timeline.callout?.title || "A Continuous Cycle of Grassroots Transformation"}
            </h4>
            <p className="text-orange-100 text-sm md:text-base leading-relaxed">
              {t.timeline.callout?.desc || "By equipping Ward Members with AI co-pilots, diagnostic tools, and capacity modules, we turn grassroots governance into a driver of measurable community progress."}
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-orange-900 font-extrabold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              {t.timeline.callout?.cta || "Start the Journey"}
              <ChevronRight className="w-5 h-5 text-orange-600" />
            </a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        {t.timeline.disclaimer && (
          <p className="mt-8 text-center text-xs text-slate-400 italic max-w-3xl mx-auto">
            {t.timeline.disclaimer}
          </p>
        )}
      </div>
    </Section>
  );
};
