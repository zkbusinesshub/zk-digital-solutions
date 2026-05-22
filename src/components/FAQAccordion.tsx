import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

interface FAQAccordionProps {
  darkMode: boolean;
}

export default function FAQAccordion({ darkMode }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open first
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technical', 'Delivery', 'Company', 'AI Services'];

  const getFilteredFaqs = () => {
    if (activeCategory === 'All') return FAQS;
    return FAQS.filter(f => f.category === activeCategory);
  };

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            darkMode ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30' : 'bg-blue-50 text-blue-800'
          }`}>
            <HelpCircle size={12} />
            <span>Frequestly Asked Queries</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Answers to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Questions</span>
          </h2>
          <p className={`text-xs md:text-sm leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We value absolute transparency. If you have questions about our delivery timelines, integration support, or company backing, we have them indexed below.
          </p>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              id={`faq-cat-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenId(null); // Reset open states across categories to avoid confusion
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? (darkMode ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.3)]' : 'bg-blue-600 text-white')
                  : (darkMode ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200' : 'bg-slate-100 text-slate-600 hover:text-slate-900')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {getFilteredFaqs().map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  id={`faq-[${faq.id}]`}
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-200 backdrop-blur-xl ${
                    isOpen 
                      ? (darkMode ? 'glass-card border-cyan-500/40 shadow-lg' : 'glass-card-light border-blue-500/30 shadow-md')
                      : (darkMode ? 'glass-card hover:border-slate-705' : 'glass-card-light border-slate-200/50 shadow-sm')
                  }`}
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                        darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {faq.category}
                      </span>
                      <h3 className={`text-sm md:text-base font-bold transition-colors ${
                        isOpen 
                          ? (darkMode ? 'text-cyan-400' : 'text-blue-600') 
                          : (darkMode ? 'text-white hover:text-slate-300' : 'text-slate-800 hover:text-slate-950')
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`p-1.5 rounded-lg shrink-0 ${
                        darkMode ? 'bg-slate-950 text-slate-450' : 'bg-slate-50 text-slate-500'
                      }`}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className={`px-6 pb-6 pt-1 text-xs md:text-sm leading-relaxed border-t ${
                          darkMode ? 'text-slate-300 border-slate-850/40' : 'text-slate-600 border-slate-100'
                        }`}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Footer CTA of FAQs */}
        <div className={`mt-10 p-5 rounded-2xl border text-center backdrop-blur-md ${
          darkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-slate-200 shadow-sm'
        }`}>
          <p className={`text-xs flex flex-wrap items-center justify-center gap-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <Sparkles size={13} className="text-cyan-400" />
            <span>Have a specific complex software requirement or integrations inquiry?</span>
            <a
              href="#contact-section"
              className={`font-semibold underline ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'}`}
            >
              Inquire via custom message
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
