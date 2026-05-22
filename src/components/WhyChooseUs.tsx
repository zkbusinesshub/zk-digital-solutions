import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Zap, Laptop, Brain, ShieldAlert, BadgeInfo } from 'lucide-react';
import { WHY_CHOOSE_US_STATS } from '../data';

// Stat Counter component
function Counter({ value, suffix, label, darkMode }: { key?: string; value: number; suffix: string; label: string; darkMode: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.2; // Speed of numerical counting
      const totalMiliseconds = duration * 1000;
      const stepTime = Math.max(Math.floor(totalMiliseconds / end), 12);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className={`p-6 rounded-2xl border text-center transition-all backdrop-blur-xl ${
      darkMode 
        ? 'glass-card hover:border-cyan-400/30' 
        : 'glass-card-light hover:border-blue-500/30 shadow-sm'
    }`}>
      <span className={`text-3xl md:text-5xl font-display font-extrabold tracking-tight block mb-2 ${
        darkMode ? 'text-cyan-400 text-glow-cyan' : 'text-blue-600'
      }`}>
        {count}{suffix}
      </span>
      <span className={`text-xs font-semibold uppercase tracking-wider block ${
        darkMode ? 'text-slate-400' : 'text-slate-600'
      }`}>
        {label}
      </span>
    </div>
  );
}

interface WhyChooseUsProps {
  darkMode: boolean;
}

export default function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  // Why Choose Us array matching exactly:
  // Affordable Solutions, Fast Delivery, Modern Designs, Mobile Friendly, AI Powered Workflow, 24/7 Support
  const benefits = [
    {
      title: 'Affordable Solutions',
      desc: 'Tiered corporate plans and flexible local packages designed to yield max returns without draining initial operating runway.',
      icon: ShieldCheck,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      title: 'Fast Delivery',
      desc: 'Streamlined development sprints and pre-built module libraries engineered to securely launch websites ahead of competitor timelines.',
      icon: Zap,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      title: 'Modern Designs',
      desc: 'Stunning layout aesthetics centering around high-fidelity micro-interactions, dark visual elements, and bespoke typography pairings.',
      icon: Laptop,
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      title: 'Mobile Friendly',
      desc: '100% fluid components automatically wrapping nicely on phones and tablets to capture every active mobile buyer intent.',
      icon: BadgeInfo,
      color: 'text-cyan-400 bg-cyan-400/10'
    },
    {
      title: 'AI Powered Workflow',
      desc: 'Next-gen automated content, code drafting, and prompt refinement tools ensuring rapid build cycles and future-ready architectures.',
      icon: Brain,
      color: 'text-purple-400 bg-purple-400/10'
    },
    {
      title: '24/7 Support',
      desc: 'Always-available system monitoring, tech triage support, and proactive security logs checks carried out under ZK Business Hub.',
      icon: ShieldAlert,
      color: 'text-teal-400 bg-teal-400/10'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden font-sans">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text / Benefits list */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                Commitment to Quality Excellence
              </span>
              <h2 className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Why Modern Brands <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Choose ZK Digital Solutions</span>
              </h2>
              <p className={`text-xs md:text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                As the specialized tech venture of **ZK Business Hub**, we bring absolute institutional trust 
                and pixel-perfect UI engineering to every engagement. No template cloning, and no cutting corners.
              </p>
            </div>

            {/* Checklist of 6 custom points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((bn, i) => {
                const Icon = bn.icon;
                return (
                  <motion.div
                    id={`benefit-[${bn.title.toLowerCase().replace(/\s+/g, '-')}]`}
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex gap-4 items-start"
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 ${bn.color}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className={`text-sm md:text-base font-bold mb-1.5 ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {bn.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {bn.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column statistics cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-2xl border backdrop-blur-xl ${
              darkMode 
                ? 'glass-card' 
                : 'glass-card-light'
            }`}>
              <h3 className={`text-sm font-semibold tracking-wider uppercase mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                By The Numbers
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {WHY_CHOOSE_US_STATS.map((st) => (
                  <Counter
                    key={st.id}
                    value={st.value}
                    suffix={st.suffix}
                    label={st.label}
                    darkMode={darkMode}
                  />
                ))}
              </div>

              {/* Bottom Quote Banner */}
              <div className={`mt-6 p-4 rounded-xl border flex items-center gap-3 backdrop-blur-md ${
                darkMode 
                  ? 'bg-white/5 border-white/5 text-slate-300' 
                  : 'bg-white/55 border-slate-200 text-slate-705 shadow-sm'
              }`}>
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  Proven frameworks vetted by <strong>ZK Business Hub</strong> corporate leadership.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
