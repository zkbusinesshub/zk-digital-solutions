import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Star, Sparkles, MessageSquare, 
  ArrowUpRight, ShieldCheck, Mail, Phone, MapPin 
} from 'lucide-react';

// Data imports
import { TESTIMONIALS } from './data';

// Component imports
import ThemeToggle from './components/ThemeToggle';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import ProjectShowcase from './components/ProjectShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import FAQAccordion from './components/FAQAccordion';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadPct, setLoadPct] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // loading simulation counting nicely
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPct((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); // Slight delay for smooth fade
          return 100;
        }
        return prev + 4;
      });
    }, 45);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection to update sticky bar visual density
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Case Studies', href: '#portfolio-section' },
    { name: 'Metrics', href: '#why-choose-us' },
    { name: 'Reviews', href: '#testimonials-section' },
    { name: 'FAQs', href: '#faq-section' },
    { name: 'Insights', href: '#blog-section' },
    { name: 'Contact', href: '#contact-section' }
  ];

  return (
    <div className={`transition-colors duration-300 min-h-screen relative overflow-x-hidden ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Background Mesh Gradients to create perfect Frosted Glass backdrop */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[35%] left-[-100px] w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* 1. Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="loading-screen"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center font-sans text-white p-4"
          >
            {/* Logo concept */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-500 flex items-center justify-center font-display font-extrabold text-white text-3xl shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                ZK
              </div>
              <h1 className="text-xl font-display font-extrabold mt-4 tracking-wider">
                ZK DIGITAL SOLUTIONS
              </h1>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                A Venture of ZK Business Hub
              </span>
            </motion.div>

            {/* Loading status bar progress */}
            <div className="w-64 h-1 bg-slate-900 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
                style={{ width: `${loadPct}%` }}
              />
            </div>
            
            {/* Count percentage */}
            <span className="text-[11px] font-mono font-bold text-slate-450 mt-3 tracking-widest">
              LAUNCHING ENGINES: {loadPct}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp and custom Chat Modal widget state */}
      <FloatingWhatsApp darkMode={darkMode} />

      {/* 2. Interactive Navigation Bar */}
      <nav
        id="sticky-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? (darkMode ? 'glass-panel py-3 shadow-lg' : 'glass-panel-light py-3 border-b border-slate-200/50 shadow-md')
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo brand signature */}
          <a href="#hero-section" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-base transition-transform group-hover:scale-105 shadow-md relative">
              <img 
                src="/logo.png" 
                alt="ZK" 
                className="w-full h-full object-cover hidden absolute inset-0" 
                onLoad={(e) => { e.currentTarget.classList.remove('hidden'); }} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                referrerPolicy="no-referrer"
              />
              <span className="logo-fallback z-10">ZK</span>
            </div>
            <div className="flex flex-col leading-none font-sans">
              <span className={`font-display font-bold text-sm tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                ZK Digital Solutions
              </span>
              <span className="text-[9px] text-slate-500 font-bold tracking-wider mt-0.5">
                ZK BUSINESS HUB VENTURE
              </span>
            </div>
          </a>

          {/* Nav links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                id={`nav-item-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={link.name}
                href={link.href}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                  darkMode
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/40'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Functional Actions Row */}
          <div className="flex items-center gap-4">
            
            {/* Theme Toggle Module */}
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Quick Contact CTAs (Desktop Only) */}
            <a
              id="nav-cta-direct"
              href="#contact-section"
              className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                darkMode
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_4px_12px_rgba(6,182,212,0.2)]'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_12px_rgba(37,99,235,0.15)]'
              }`}
            >
              <span>Consultation</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile collapse button */}
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-900 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
              }`}
              aria-label="Open navigation list"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t overflow-hidden ${
                darkMode ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
              }`}
            >
              <div className="px-6 py-4 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    id={`mobile-nav-item-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold py-2 px-3 rounded-lg transition-all ${
                      darkMode ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* CTA inside mobile collapse */}
                <a
                  id="mobile-nav-cta"
                  href="#contact-section"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-center py-3 rounded-xl text-xs font-bold block transition-colors ${
                    darkMode ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  Consultation Hub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 3. Hero Frame Section */}
      <HeroSection darkMode={darkMode} />

      {/* 4. About Block Section */}
      <AboutSection darkMode={darkMode} />

      {/* 5. Services Grid Block */}
      <ServicesGrid darkMode={darkMode} />

      {/* 6. Why Choose Us (Counters) */}
      <WhyChooseUs darkMode={darkMode} />

      {/* 7. Case Studies Projects Section */}
      <ProjectShowcase darkMode={darkMode} />

      {/* 8. Testimonials Review Block */}
      <section id="testimonials-section" className="py-24 relative overflow-hidden font-sans">
        <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 border ${
              darkMode ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800/30' : 'bg-blue-50 text-blue-700'
            }`}>
              <ShieldCheck size={12} className="text-cyan-400" />
              <span>Core Operational Integrity</span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Foundational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pledges & Purity</span>
            </h2>
            <p className={`text-xs md:text-sm leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              True digital success comes from absolute honesty. Founded by Usman Pathan under ZK Business Hub, we hold ourselves accountable to strict visual and operational rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, index) => (
              <motion.div
                id={`testimonial-card-${test.id}`}
                key={test.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-3xl border flex flex-col justify-between hover:scale-[1.01] transition-transform backdrop-blur-xl ${
                  darkMode 
                    ? 'glass-card' 
                    : 'glass-card-light'
                }`}
              >
                <div>
                  {/* Stars indicators */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment block */}
                  <p className={`text-xs md:text-sm leading-relaxed italic mb-6 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    "{test.comment}"
                  </p>
                </div>

                {/* Profile Block */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/10">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-800/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className={`text-xs md:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {test.name}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-semibold block">
                      {test.role}, {test.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQs Section */}
      <FAQAccordion darkMode={darkMode} />

      {/* 10. Insight Blogs Section */}
      <BlogPreview darkMode={darkMode} />

      {/* 11. Custom Contact Section (Includes Google maps coordinates) */}
      <ContactForm darkMode={darkMode} />

      {/* 12. Corporate Footer Block */}
      <footer className={`py-16 border-t ${
        darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand signature and signature block */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-base relative">
                <img 
                  src="/logo.png" 
                  alt="ZK" 
                  className="w-full h-full object-cover hidden absolute inset-0" 
                  onLoad={(e) => { e.currentTarget.classList.remove('hidden'); }} 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  referrerPolicy="no-referrer"
                />
                <span className="logo-fallback z-10">ZK</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-display font-bold text-sm tracking-wide ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  ZK Digital Solutions
                </span>
                <span className="text-[9px] text-slate-500 font-bold tracking-wider mt-0.5 uppercase">
                  Venture of ZK Business Hub
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              ZK Digital Solutions is a modern digital brand focused on creating websites and online solutions for businesses, startups and local brands. Founded by Usman Pathan under ZK Business Hub.
            </p>
            
            <div className="text-xs font-semibold flex items-center gap-1">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span>Bhiwandi, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick structural routing directory links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Platform Directory
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about-section" className="hover:text-cyan-400 hover:underline">About Us</a>
              <a href="#services-section" className="hover:text-cyan-400 hover:underline">Services</a>
              <a href="#portfolio-section" className="hover:text-cyan-400 hover:underline">Portfolio</a>
              <a href="#why-choose-us" className="hover:text-cyan-400 hover:underline">Why Choose Us</a>
              <a href="#faq-section" className="hover:text-cyan-400 hover:underline">FAQ Help</a>
              <a href="#blog-section" className="hover:text-cyan-400 hover:underline">Insights</a>
            </div>
          </div>

          {/* Administrative contact specs */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Registered Office Address
            </h4>
            <div className="space-y-2 leading-relaxed">
              <p>
                Bhiwandi, Maharashtra, India
              </p>
              <p className="flex items-center gap-2">
                <strong>Enquiry Registry:</strong> 
                <a href="mailto:zkbusinesshub@gmail.com" className="underline hover:text-cyan-400">zkbusinesshub@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Metadata details */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>
            © {new Date().getFullYear()} ZK Digital Solutions. All professional rights reserved.
          </span>
          <div className="flex items-center gap-4 text-[11px]">
            <span>A Specialized Digital Venture associated with **ZK Business Hub**</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
