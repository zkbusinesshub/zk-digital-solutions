import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Cpu, Globe, Palette, ShieldCheck, Compass } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  return (
    <section 
      id="hero-section" 
      className="min-h-screen pt-32 pb-20 relative flex items-center overflow-hidden font-sans border-b border-slate-100/10"
    >
      {/* Decorative Radial Glowing Elements in background */}
      <div className="absolute top-1/4 left-1/3 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[340px] h-[340px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Tech Elements behind text */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        
        {/* Floating Tag 1: Website Development */}
        <div className="absolute top-1/4 left-[8%] animate-float">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold shadow-sm ${
            darkMode 
              ? 'bg-slate-900/60 border-cyan-500/20 text-cyan-400' 
              : 'bg-white border-blue-500/20 text-blue-600'
          }`}>
            <Code size={12} />
            <span>Web Dev</span>
          </div>
        </div>

        {/* Floating Tag 2: AI Website Integration */}
        <div className="absolute top-1/3 right-[10%] animate-float-delayed">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold shadow-sm ${
            darkMode 
              ? 'bg-slate-900/60 border-purple-500/20 text-purple-400' 
              : 'bg-white border-purple-500/20 text-purple-600'
          }`}>
            <Cpu size={12} />
            <span>AI Powered</span>
          </div>
        </div>

        {/* Floating Tag 3: Branding */}
        <div className="absolute bottom-1/3 left-[12%] animate-float-delayed">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold shadow-sm ${
            darkMode 
              ? 'bg-slate-900/60 border-emerald-500/20 text-emerald-400' 
              : 'bg-white border-emerald-500/20 text-emerald-600'
          }`}>
            <Palette size={12} />
            <span>Branding</span>
          </div>
        </div>

        {/* Floating Tag 4: Globals */}
        <div className="absolute bottom-1/4 right-[15%] animate-float">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold shadow-sm ${
            darkMode 
              ? 'bg-slate-900/60 border-cyan-500/20 text-cyan-400' 
              : 'bg-white border-blue-500/20 text-blue-600'
          }`}>
            <Globe size={12} />
            <span>SEO Pro</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Top Mini Tag Line */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border uppercase ${
              darkMode 
                ? 'bg-slate-950/60 border-slate-800 text-cyan-400' 
                : 'bg-blue-50 border-blue-100 text-blue-800'
            }`}
          >
            <Sparkles size={12} className="text-cyan-450 animate-pulse" />
            <span>ZK Digital Solutions</span>
            <span className="text-slate-500 font-normal">|</span>
            <span className="text-slate-400 font-medium">A Venture of ZK Business Hub</span>
          </motion.div>
        </div>

        {/* Primary Interactive Title */}
        <div className="max-w-4xl mx-auto mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, type: 'spring', damping: 20 }}
            className={`text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.08] ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Websites, Brands
            </span>{' '}
            <br className="hidden sm:inline" />
            & Digital Growth
          </motion.h1>
        </div>

        {/* Professional desc subheading */}
        <div className="max-w-xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-xs sm:text-sm md:text-base leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            ZK Digital Solutions is a modern digital brand focused on creating websites and online solutions for businesses, startups and local brands. Founded by Usman Pathan under ZK Business Hub, we focus on hand-crafted premium products out of Bhiwandi, India.
          </motion.p>
        </div>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#contact-section"
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-97 cursor-pointer ${
              darkMode 
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_4px_15px_rgba(6,182,212,0.3)]' 
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_15px_rgba(37,99,235,0.2)]'
            }`}
          >
            <span>Start Your Project</span>
            <ArrowRight size={14} />
          </a>

          <a
            href="#portfolio-section"
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 shadow-sm'
            }`}
          >
            <span>View Portfolio</span>
          </a>
        </motion.div>

        {/* Quick Highlights / Values bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-100/10 text-center"
        >
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Design</span>
            <span className={`text-xs md:text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Bespoke Premium Grids</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Loading</span>
            <span className={`text-xs md:text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Optimized Web Vitals</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Integrations</span>
            <span className={`text-xs md:text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Robust API Pipelines</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">Validation</span>
            <span className={`text-xs md:text-sm font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>Co-signed by Parent Co.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
