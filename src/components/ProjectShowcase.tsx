import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowRight, X, Maximize2, Tag, CheckSquare } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectShowcaseProps {
  darkMode: boolean;
}

export default function ProjectShowcase({ darkMode }: ProjectShowcaseProps) {
  const [filter, setFilter] = useState('All');
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  // Categorize manually for interactive filtering
  const tabs = ['All', 'Websites', 'Interactive Apps', 'Industrial Designs'];

  const getFilteredProjects = () => {
    if (filter === 'All') return PROJECTS;
    if (filter === 'Websites') {
      return PROJECTS.filter(p => p.category.includes('Website') || p.category.includes('Travel'));
    }
    if (filter === 'Interactive Apps') {
      return PROJECTS.filter(p => p.category.includes('App') || p.category.includes('Gym') || p.category.includes('Islamic'));
    }
    if (filter === 'Industrial Designs') {
      return PROJECTS.filter(p => p.category.includes('Fabrication') || p.id === 'fabrication-business');
    }
    return PROJECTS;
  };

  const getProjectDetailedOverview = (projId: string) => {
    switch (projId) {
      case 'travel-agency':
        return {
          challenge: 'Design a highly attractive travel directory that loads media items instantly without lagging and increases direct checkouts.',
          outcome: 'An optimized static-generated layout equipped with dynamic responsive images, direct calendar reservation hooks, and localized routes.',
          features: ['3D Immersive destination sliders', 'Instant itinerary planner canvas', 'Structured schema for perfect rich snippet search results', 'Interactive Google maps pinning']
        };
      case 'gym-app':
        return {
          challenge: 'Create a dark corporate, futuristic, and responsive UI for fitness members to track heart vectors, training streaks, and plan sessions easily.',
          outcome: 'A modern neon-accented glassmorphism workspace complete with responsive SVGs, lazy lists, and interactive performance charts.',
          features: ['Real-time calorie counters', 'Staggered daily muscle selection grids', 'High contrast light/dark layouts', 'Synchronized timer alerts']
        };
      case 'islamic-app':
        return {
          challenge: 'Build a serene, accessible digital home for spiritual daily use without battery drain or screen clutter.',
          outcome: 'A highly optimized progressive layout styled in beautiful classic white/emerald palettes, custom audio controllers, and offline support.',
          features: ['Automated geo-coordinates prayer alerts', 'Beautiful typographic translation blocks', 'Audio streaming caching mechanism', 'Compass Qibla alignment widget']
        };
      case 'restaurant-web':
        return {
          challenge: 'Produce a mouth-watering visual interface to showcase Michelin star menus and allow seamless seat booking during peak hours.',
          outcome: 'An elegant display website highlighting high-res food graphics, and fluid checkout forms to automate customer reservation logs.',
          features: ['Full high-definition dish carousel overlays', 'Automated reservation alert dispatcher', 'Instant digital coupon cards', 'Mobile-first tap targets']
        };
      case 'fabrication-business':
        return {
          challenge: 'Structure a professional, industry-grade catalog showcasing heavy machinery works, steel sheets, and engineering projects.',
          outcome: 'A robust portfolio framework featuring downloadable specifications, dynamic RFQ request forms, and project categorization filters.',
          features: ['Precision specifications catalog', 'Quick quote generator modal', 'High detail technical gallery zoom', 'Corporate trust credentials integration']
        };
      default:
        return {
          challenge: 'Build a premium client presentation layer reflecting exceptional quality, robust code structure, and fast performance.',
          outcome: 'A modern responsive setup styled with Tailwind, optimizing customer interface pathways.',
          features: ['Responsive CSS grid columns', 'Intuitive navigation paths', 'Sleek dark UI presets', 'Custom micro-interaction tags']
        };
    }
  };

  const currentDetails = selectedProj ? getProjectDetailedOverview(selectedProj.id) : null;

  return (
    <section id="portfolio-section" className="py-24 relative overflow-hidden font-sans">
      {/* Background blobs */}
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4 ${
              darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-800'
            }`}>
              <Layers size={11} />
              <span>Agency Portfolio</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-display font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Success Stories</span>
            </h2>
          </div>
          <p className={`max-w-md text-xs md:text-sm leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We create modern digital products that balance aesthetic beauty with robust performance metrics. 
            Here is a curated look at what we have deployed recently.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200 dark:border-slate-800/60 pb-4">
          {tabs.map((t) => (
            <button
              id={`portfolio-tab-${t.toLowerCase().replace(/\s+/g, '-')}`}
              key={t}
              onClick={() => setFilter(t)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === t
                  ? (darkMode ? 'text-cyan-400' : 'text-blue-600')
                  : (darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
              }`}
            >
              <span className="relative z-10">{t}</span>
              {filter === t && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className={`absolute bottom-[-17px] left-0 right-0 h-[2px] ${
                    darkMode ? 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-blue-600'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Project Stagger Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredProjects().map((proj, index) => (
              <motion.div
                id={`project-card-${proj.id}`}
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group rounded-2xl overflow-hidden border relative flex flex-col justify-between backdrop-blur-xl ${
                  darkMode 
                    ? 'glass-card hover:border-cyan-400/30' 
                    : 'glass-card-light hover:border-blue-500/30 shadow-md hover:shadow-lg'
                }`}
              >
                {/* Image Section */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-neutral-900/10 z-10 group-hover:bg-neutral-900/0 transition-colors" />
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <span className={`absolute top-4 left-4 z-20 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase ${
                    darkMode ? 'bg-slate-950/80 text-cyan-400 border border-slate-800' : 'bg-white text-blue-600 shadow-sm'
                  }`}>
                    {proj.category}
                  </span>

                  {/* Zoom Overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 z-20 flex items-center justify-center transition-all duration-300">
                    <button
                      id={`zoom-project-${proj.id}`}
                      onClick={() => setSelectedProj(proj)}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer transition-transform duration-200 hover:scale-110 shadow-lg border border-white/20"
                      aria-label="View deep dive metrics"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className={`text-lg md:text-xl font-display font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {proj.title}
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed mb-4 line-clamp-2 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tg) => (
                        <span 
                          key={tg} 
                          className={`text-[9px] font-medium px-2 py-0.5 rounded-md ${
                            darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tg}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/40">
                      <button
                        id={`btn-details-${proj.id}`}
                        onClick={() => setSelectedProj(proj)}
                        className={`text-xs font-semibold flex items-center gap-1 group/btn cursor-pointer ${
                          darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                        }`}
                      >
                        <span>Case Study Details</span>
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </button>
                      <a
                        href={proj.demoUrl}
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode ? 'bg-slate-800/85 hover:bg-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                        aria-label="Direct demo endpoint"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Case Study Modal */}
        <AnimatePresence>
          {selectedProj && currentDetails && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProj(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                id="portfolio-modal-body"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className={`w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border relative z-10 font-sans my-8 backdrop-blur-2xl ${
                  darkMode 
                    ? 'glass-card text-white' 
                    : 'glass-card-light text-slate-800'
                }`}
              >
                {/* Close Button */}
                <button
                  id="close-proj-modal"
                  onClick={() => setSelectedProj(null)}
                  className="absolute top-4 right-4 bg-slate-950/70 text-white hover:bg-slate-900 p-2 rounded-xl z-20 shadow border border-slate-800/40 transition-colors"
                >
                  <X size={15} />
                </button>

                {/* Hero Banner inside modal */}
                <div className="relative aspect-[21/9] w-full bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/10 z-10" />
                  <img
                    src={selectedProj.imageUrl}
                    alt={selectedProj.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className="text-[9px] font-bold bg-cyan-400 text-slate-950 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {selectedProj.category}
                    </span>
                    <h3 className="text-lg md:text-2xl font-display font-bold text-white mt-1">
                      {selectedProj.title}
                    </h3>
                  </div>
                </div>

                {/* Grid Details */}
                <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  
                  {/* Scope Block row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>
                        The Business Challenge
                      </h4>
                      <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {currentDetails.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className={`text-xs font-semibold tracking-wider uppercase mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>
                        Our Custom Solution
                      </h4>
                      <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {currentDetails.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Core layout components list */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/40">
                    <h4 className={`text-xs font-semibold tracking-wider uppercase mb-3 ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>
                      Integrated Core Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentDetails.features.map((ft, i) => (
                        <div key={i} className={`p-3 rounded-xl border flex items-start gap-2.5 transition-colors backdrop-blur-md ${
                          darkMode ? 'bg-white/5 border-white/5' : 'bg-white/55 border-slate-200'
                        }`}>
                          <CheckSquare size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology details row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/40">
                    <div className="flex items-center gap-2">
                      <Tag size={12} className="text-slate-400" />
                      <span className="text-xs text-slate-400">Production Stack:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedProj.tags.map(t => (
                          <span key={t} className="text-[10px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#contact-section"
                      onClick={() => setSelectedProj(null)}
                      className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                        darkMode 
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_4px_12px_rgba(6,182,212,0.2)]' 
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_12px_rgba(37,99,235,0.2)]'
                      }`}
                    >
                      Inquire About Similar Setup
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
