import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Lightbulb, Users, Target } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const values = [
    {
      icon: Compass,
      title: 'Our Purpose & Vision',
      desc: 'To revolutionize local enterprise reach through next-gen design systems, robust interfaces, and streamlined workflows.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      desc: 'We merge visual design disciplines with technical engineering parameters to deploy memorable digital solutions.'
    },
    {
      icon: Target,
      title: 'Actionable Strategies',
      desc: 'Our projects trace precisely to customer growth metrics, brand awareness factors, and revenue generation indices.'
    }
  ];

  return (
    <section id="about-section" className="py-24 relative overflow-hidden font-sans">
      {/* Glow backgrounds */}
      <div className="absolute top-10 left-12 w-80 h-80 bg-cyan-600/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Aesthetic Presentation Visual block */}
          <div className="lg:col-span-5 relative group">
            
            {/* Ambient Background frame */}
            <div className={`absolute -inset-1 rounded-3xl opacity-30 blur-lg transition duration-500 group-hover:opacity-50 ${
              darkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-gradient-to-r from-blue-600 to-blue-400'
            }`} />

            <div className={`relative p-8 rounded-3xl border space-y-6 backdrop-blur-xl ${
              darkMode 
                ? 'glass-card border-white/10' 
                : 'glass-card-light'
            }`}>
              
              {/* Graphic Logo concept representation */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center font-display font-extrabold text-white text-xl shadow-[0_4px_15px_rgba(6,182,212,0.3)]">
                  ZK
                </div>
                <div>
                  <h4 className={`font-display font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    ZK Digital Solutions
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                    Venture of ZK Business Hub
                  </p>
                </div>
              </div>

              {/* Styled quote frame */}
              <div className={`p-5 rounded-2xl border-l-4 backdrop-blur-md ${
                darkMode ? 'bg-white/5 border-white/5 border-l-cyan-400 text-slate-300' : 'bg-white/60 border-slate-200 border-l-blue-600 text-slate-650 shadow-sm'
              }`}>
                <p className="text-xs italic leading-relaxed">
                  "We believe that a brand's landing page is its secure digital gateway. By aligning custom typography with performance code, we build reliable growth channels."
                </p>
              </div>

              {/* Trust co-signature list and certification */}
              <div className="space-y-3.5 pt-4 border-t border-slate-800/10">
                <div className="flex justify-between text-xs items-center">
                  <span className="text-slate-400 font-medium">Platform Engineering</span>
                  <span className={`font-semibold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>100% Custom React</span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-slate-400 font-medium">Resource Partnership</span>
                  <span className="font-semibold text-slate-300">ZK Business Hub</span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-slate-400 font-medium">Headquarters</span>
                  <span className="font-semibold text-cyan-400">Bhiwandi, India</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: Content Block */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className={`text-xs font-semibold tracking-widest uppercase block mb-3 ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                Who We Are
              </span>
              <h2 className={`text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                ZK Digital Solutions
              </h2>
              <p className={`text-sm md:text-base leading-relaxed mb-4 font-medium ${
                darkMode ? 'text-slate-350' : 'text-slate-700'
              }`}>
                ZK Digital Solutions is a modern digital brand focused on creating websites and online solutions for businesses, startups and local brands.
              </p>
              <p className={`text-xs md:text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-slate-450' : 'text-slate-600'
              }`}>
                Founded by **Usman Pathan** under **ZK Business Hub**, we are committed to delivering high-quality, transparent and practical design and development services. We focus on true craftsmanship, clean code, and straightforward digital strategies directly from our headquarters in **Bhiwandi, Maharashtra, India** to help your venture establish a trustworthy online presence.
              </p>
            </div>

            {/* Split panels details */}
            <div className="space-y-4">
              {values.map((vl, index) => {
                const Icon = vl.icon;
                return (
                  <motion.div
                    id={`value-[${vl.title.toLowerCase().replace(/\s+/g, '-')}]`}
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-2xl border flex gap-4 items-start backdrop-blur-xl transition-all ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 hover:border-cyan-400/35 hover:bg-white/10' 
                        : 'bg-white/60 border-slate-900/10 hover:border-blue-500/35 hover:bg-white/80 shadow-sm'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${
                      darkMode ? 'bg-slate-950 text-cyan-400 border border-slate-800' : 'bg-white text-blue-600 border border-slate-100'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h4 className={`text-xs md:text-sm font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {vl.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {vl.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Parent company acknowledgement footer banner */}
            <div className={`p-4 rounded-2xl border mt-4 flex items-center justify-between text-xs gap-4 backdrop-blur-xl ${
              darkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-slate-900/10 shadow-sm'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0 animate-ping" />
                <span className={darkMode ? 'text-indigo-200' : 'text-indigo-800'}>
                  <strong>Powered by ZK Business Hub</strong> — Bringing enterprise-ready business structures, legal assurances, and consulting wisdom to modern platforms.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
