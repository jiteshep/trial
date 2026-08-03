import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { config } from '../config';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../translations';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.mission, href: "#mission" },
    { name: t.nav.programme, href: "#programme" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo-header.png" alt="Namma Grama Nayaka" className="h-12 sm:h-14 md:h-16 object-contain mix-blend-multiply filter contrast-105" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-700 hover:text-green-700 transition-colors">
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-slate-300 pl-6 ml-2">
              <Globe className="w-4 h-4 text-slate-500" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="text-sm font-semibold bg-transparent text-slate-700 focus:outline-none cursor-pointer"
                aria-label="Select Language"
              >
                <option value="en">English</option>
                <option value="kn">ಕನ್ನಡ</option>
              </select>
            </div>

            <a href="#apply" className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-full transition-colors">
              {t.hero.primaryCta}
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 block py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center gap-2 py-2">
                <Globe className="w-5 h-5 text-slate-500" />
                <select 
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value as Language);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-base font-semibold bg-transparent text-slate-700 focus:outline-none w-full"
                >
                  <option value="en">English</option>
                  <option value="kn">ಕನ್ನಡ</option>
                </select>
              </div>

              <a 
                href="#apply" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-orange-600 text-white font-bold rounded-full mt-4"
              >
                {t.hero.primaryCta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 min-h-[85vh] flex items-center">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      {/* Right-Side Full-Height Vivid & Expanded Image */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-2/3 xl:w-7/12 h-full z-0 pointer-events-none overflow-hidden flex items-center justify-end">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.02 }}
          transition={{ duration: 0.8 }}
          src="/logo-ngn.png" 
          alt="Namma Grama Nayaka Visual" 
          className="w-full h-full object-cover object-right md:object-center mix-blend-multiply filter contrast-105 brightness-95 scale-105 transition-all duration-700" 
        />
        {/* Soft edge gradient fades focused on the left edge only to merge smoothly into text section while keeping right side crisp and full */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent w-full md:w-3/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 via-transparent to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 via-transparent to-slate-50/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-bold uppercase tracking-wider mb-2 border border-green-200 shadow-sm"
            >
              {t.hero.urgency}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              {t.hero.headline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              {t.hero.subheadline}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2"
            >
              <a href="#apply" className="w-full sm:w-auto px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
                {t.hero.primaryCta}
              </a>
              <a href="#about" className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 text-lg font-bold rounded-full transition-all hover:bg-slate-50 text-center shadow-sm">
                {t.hero.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-emerald-950 text-emerald-100 relative">
      {/* Top Gradient Divider Accent Line */}
      <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-orange-500 w-full"></div>
      
      <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo-header.png" alt="Namma Grama Nayaka" className="h-14 md:h-16 mb-6 brightness-0 invert" />
            <p className="text-emerald-200/90 mb-6 max-w-sm leading-relaxed text-sm md:text-base">
              {t.footer.mission}
            </p>
            <div className="flex gap-6 items-center">
               <img src="/logo-ep.png" alt="Empower Panchayat" className="h-9 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
               <img src="/logo-ts.png" alt="Tejasvi Surya" className="h-7 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-orange-400">›</span> {t.nav.home}</a></li>
              <li><a href="#about" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-orange-400">›</span> {t.nav.about}</a></li>
              <li><a href="#programme" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-orange-400">›</span> {t.nav.programme}</a></li>
              <li><a href="#apply" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-orange-400">›</span> {t.hero.primaryCta}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={config.PRIVACY_POLICY_URL} className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-emerald-400">›</span> {t.footer.privacyPolicy}</a></li>
              <li><a href={config.TERMS_URL} className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-emerald-400">›</span> {t.footer.disclaimer}</a></li>
              <li><a href="#contact" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1.5"><span className="text-emerald-400">›</span> {t.nav.contact}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-900/80 pt-8 text-xs text-emerald-300/80">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
