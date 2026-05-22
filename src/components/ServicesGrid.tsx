import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, Cpu, Briefcase, Compass, Palette, 
  Share2, TrendingUp, Globe, Video, Sparkles, 
  ArrowRight, CheckCircle2, Bookmark, X
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

// Map string icon names to Lucide icons securely
const IconComponent = ({ name, className, size = 24 }: { name: string; className?: string; size?: number }) => {
  switch (name) {
    case 'Code': return <Code className={className} size={size} />;
    case 'Cpu': return <Cpu className={className} size={size} />;
    case 'Briefcase': return <Briefcase className={className} size={size} />;
    case 'Compass': return <Compass className={className} size={size} />;
    case 'Palette': return <Palette className={className} size={size} />;
    case 'Share2': return <Share2 className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'Globe': return <Globe className={className} size={size} />;
    case 'Video': return <Video className={className} size={size} />;
    case 'Sparkles': return <Sparkles className={className} size={size} />;
    default: return <Code className={className} size={size} />;
  }
};

interface ServicesGridProps {
  darkMode: boolean;
}

export default function ServicesGrid({ darkMode }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Quick facts to show inside selected service details popup
  const getServiceHighlights = (serviceId: string) => {
    switch (serviceId) {
      case 'web-dev':
        return ['100% Core Web Vitals performance rating', 'Modern React + Tailwind component layouts', 'SEO schema injection standard', 'Optimized client-side bundles'];
      case 'ai-creation':
        return ['Automated pipeline configuration', 'Intelligent contextual chat systems', 'Dynamic search recommendation indices', 'Vector embeddings integrations'];
      case 'tours-travel':
        return ['Intuitive date & route filters', 'Interactive map tracking mechanics', 'Direct stripe payment integrations', 'Responsive booking dashboards'];
      default:
        return ['Enterprise grade design principles', '24/7 technical validation schedules', 'Fast deliverable turnarounds', 'Fully customizable client revisions'];
    }
  };

  return (
    <section id="services-section" className="py-24 relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${
              darkMode 
                ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30' 
                : 'bg-blue-50 text-blue-700 border border-blue-100'
            }`}
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Parent Enterprise Co-signed: ZK Business Hub</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Our Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Capabilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-sm md:text-base leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            We deploy elegant structural layouts, premium designs, and modern AI automations 
            cohesively engineered to bolster branding and drive commercial growth for local businesses, startups, and international hubs.
          </motion.p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => (
            <motion.div
              id={`service-card-${srv.id}`}
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl relative transition-all overflow-hidden cursor-pointer flex flex-col justify-between backdrop-blur-xl ${
                darkMode 
                  ? 'glass-card hover:border-cyan-400/40 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)]' 
                  : 'glass-card-light hover:border-blue-500/40 hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)]'
              }`}
              onClick={() => setSelectedService(srv)}
            >
              {/* Card Hover Ambient Gradient */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

              <div>
                {/* Header Block & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl ${
                    darkMode 
                      ? 'bg-slate-950/80 text-cyan-400 border border-cyan-500/10' 
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    <IconComponent name={srv.iconName} />
                  </div>
                  {srv.badge && (
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${
                      srv.badge === 'Popular' 
                        ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' 
                        : srv.badge === 'Trending' 
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' 
                          : 'bg-purple-500/15 text-purple-400 border border-purple-500/30'
                    }`}>
                      {srv.badge}
                    </span>
                  )}
                </div>

                {/* Info block */}
                <h3 className={`text-lg md:text-xl font-display font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {srv.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {srv.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2 text-xs font-semibold group mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/40">
                <span className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>Explore Strategy Details</span>
                <ArrowRight size={13} className={`transition-transform duration-200 group-hover:translate-x-1 ${
                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Modal representing strategic service deep-dive */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                id="service-modal-body"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className={`w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border relative z-10 font-sans backdrop-blur-2xl ${
                  darkMode 
                    ? 'glass-card text-white border-white/10' 
                    : 'glass-card-light text-slate-800'
                }`}
              >
                {/* Header image background */}
                <div className="relative h-28 bg-gradient-to-r from-blue-900 to-cyan-500 flex items-end p-6">
                  {/* Decorative glowing dots */}
                  <div className="absolute top-2 right-4 text-white/10 font-display text-4xl font-bold select-none">
                    ZK SOLUTIONS
                  </div>
                  <div className={`p-3.5 rounded-xl absolute -bottom-5 left-6 shadow-lg border ${
                    darkMode 
                      ? 'bg-slate-950 text-cyan-400 border-slate-800' 
                      : 'bg-white text-blue-600 border-slate-100'
                  }`}>
                    <IconComponent name={selectedService.iconName} size={28} />
                  </div>
                  <button
                    id="close-srv-modal"
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-slate-950/20 text-white/80 hover:text-white hover:bg-slate-900/40 p-1.5 rounded-lg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`text-xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {selectedService.title}
                    </h3>
                    {selectedService.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 uppercase tracking-widest leading-none">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-xs md:text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {selectedService.description}
                  </p>

                  {/* Highlights section list */}
                  <div className="mb-6 space-y-3">
                    <h4 className={`text-xs font-semibold tracking-wider uppercase mb-1 ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>
                      How We Deliver Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {getServiceHighlights(selectedService.id).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closing action footer details */}
                  <div className={`p-4 rounded-xl flex items-center justify-between text-xs border ${
                    darkMode 
                      ? 'bg-slate-950/50 border-slate-800' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex gap-2 items-center">
                      <Bookmark size={14} className="text-cyan-500" />
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>
                        Consultation package included free
                      </span>
                    </div>
                    <a
                      href="#contact-section"
                      onClick={() => setSelectedService(null)}
                      className={`font-semibold underline flex items-center gap-0.5 ${
                        darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                      }`}
                    >
                      Book Free strategy discussion
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
