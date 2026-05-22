import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Sparkles, Send, CheckCircle2, MessageSquare, Linkedin, Globe } from 'lucide-react';

interface ContactFormProps {
  darkMode: boolean;
}

export default function ContactForm({ darkMode }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Website Development');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const budgetOptions = [
    '$500 - $1,500',
    '$1,500 - $4,000',
    '$4,000 - $10,000',
    '$10,000+'
  ];

  const servicesOption = [
    'Website Development',
    'AI Website Creation',
    'Business Portfolio Websites',
    'Tours & Travel Websites',
    'Graphic Designing',
    'Social Media Management',
    'SEO Optimization',
    'Digital Marketing/Video Editing',
    'Business Branding'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate real server delivery
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      
      // Clear values after brief interval
      setTimeout(() => {
        setIsSent(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3500);
    }, 1500);
  };

  const handleWhatsAppRedirect = () => {
    const defaultMsg = encodeURIComponent("Hello ZK Digital Solutions! I would like to quickly sync up with Usman Pathan regarding a digital project.");
    const waNumber = '910000000000'; // India Headquarters business target placeholder
    window.open(`https://wa.me/${waNumber}?text=${defaultMsg}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-24 relative overflow-hidden font-sans">
      {/* Decorative lighting */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            darkMode ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30' : 'bg-blue-50 text-blue-800'
          }`}>
            <Sparkles size={12} className="animate-pulse" />
            <span>Launch Your Platform Today</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Growth Journey</span>
          </h2>
          <p className={`text-xs md:text-sm leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Ready to design a new website, build software with maps, or craft a custom corporate identity? 
            Submit details below and a digital specialist will reach out within 12 standard business hours.
          </p>
        </div>

        {/* Form and Contact details splitter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Modern contact form */}
          <div className="lg:col-span-7 flex">
            <div className={`w-full p-8 md:p-10 rounded-2xl border flex flex-col justify-between backdrop-blur-xl ${
              darkMode 
                ? 'glass-card' 
                : 'glass-card-light'
            }`}>
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    id="contact-form-flow"
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">Corporate/Full Name</label>
                        <input
                          id="cnt-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Jenkins Sarah"
                          className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white' 
                              : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">Business Email Address</label>
                        <input
                          id="cnt-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. sarah@nexusgroup.com"
                          className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white' 
                              : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">Target Service Required</label>
                        <select
                          id="cnt-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white' 
                              : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                          }`}
                        >
                          {servicesOption.map(srv => (
                            <option key={srv} value={srv} className={darkMode ? 'bg-slate-950' : 'bg-white'}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-2">Allocated Project Budget</label>
                        <select
                          id="cnt-budget"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm outline-none transition-all ${
                            darkMode 
                              ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white' 
                              : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                          }`}
                        >
                          {budgetOptions.map(b => (
                            <option key={b} value={b} className={darkMode ? 'bg-slate-950' : 'bg-white'}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-2">Brief Project Specifications</label>
                      <textarea
                        id="cnt-msg"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your brand targets, required timelines, or design references..."
                        className={`w-full px-4 py-3 rounded-xl text-xs md:text-sm outline-none transition-all resize-none ${
                          darkMode 
                            ? 'bg-slate-950 border border-slate-800 focus:border-cyan-500 text-white' 
                            : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                        }`}
                      />
                    </div>

                    <button
                      id="cnt-submit"
                      type="submit"
                      disabled={isSending}
                      className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-transform active:scale-98 cursor-pointer ${
                        darkMode 
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_4px_15px_rgba(6,182,212,0.3)]' 
                          : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_15px_rgba(37,99,235,0.2)]'
                      }`}
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Case Specifications...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Transmit Strategic Enquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    id="cnt-success-banner"
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 text-center space-y-4 my-auto flex flex-col items-center"
                  >
                    <CheckCircle2 size={56} className="text-emerald-500 animate-bounce" />
                    <h3 className={`text-xl md:text-2xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                      Enquiry Safely Dispatched!
                    </h3>
                    <p className={`text-xs md:text-sm max-w-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Thank you for contacting **ZK Digital Solutions**. <br />
                      Founder Usman Pathan and our specialized team from **ZK Business Hub** will review your inquiry and contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right panel: Static details, Direct WhatsApp action, Google Maps placeholder */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Contact Metrics */}
            <div className={`p-6 rounded-2xl border space-y-4 backdrop-blur-xl ${
              darkMode ? 'glass-card border-white/10' : 'glass-card-light'
            }`}>
              <h4 className={`text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-cyan-400' : 'text-blue-700'}`}>
                Contact Registry & Office info
              </h4>

              <div className="space-y-3">
                <div className="flex gap-3 items-start text-xs sm:text-sm">
                  <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className={`font-semibold block ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      Registered Office Location
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      Bhiwandi, Maharashtra, India
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs sm:text-sm">
                  <Mail size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className={`font-semibold block ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      Business Email Registry
                    </span>
                    <a 
                      href="mailto:zkbusinesshub@gmail.com" 
                      className={`hover:underline block ${darkMode ? 'text-cyan-450 text-glow-cyan' : 'text-blue-600'}`}
                    >
                      zkbusinesshub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start text-xs sm:text-sm">
                  <Sparkles size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className={`font-semibold block ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                      Founder
                    </span>
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                      Founded by Usman Pathan under ZK Business Hub.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/10">
                <button
                  id="direct-wa-chat"
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-400 border border-emerald-500/20 transition-colors cursor-pointer"
                >
                  <MessageSquare size={12} />
                  <span>WhatsApp Chat</span>
                </button>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-purple-500/15 hover:bg-purple-500/25 text-purple-400 border border-purple-500/20 transition-colors"
                >
                  <Instagram size={12} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Google Maps responsive visual placeholder */}
            <div className={`rounded-2xl overflow-hidden border grow flex flex-col min-h-[220px] backdrop-blur-xl ${
              darkMode ? 'glass-card border-white/10 shadow-lg' : 'glass-card-light'
            }`}>
              {/* If we use maps placeholder, we can use a beautiful interactive styled map or styled dark iframe coordinates matching Blue Area Islamabad.
                  Let's offer a highly functional and stunning custom vector map representation or responsive elegant iframe using styled parameters */}
              <div className="bg-slate-900 border-b border-slate-800 text-xs px-4 py-2 text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Globe size={11} className="text-cyan-400" />
                  <span>ZK Digital Solutions Office Map</span>
                </span>
                <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-emerald-400">Live Satellite Data</span>
              </div>
              <div className="relative grow bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* Styled dark iframe coordinates targeting Bhiwandi, Maharashtra, India */}
                <iframe
                  id="google-maps-frame"
                  title="ZK Business Hub Corporate Coordinates"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59825.86791244585!2d73.011883733221!3d19.29528731110756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd206df77d07%3A0xaad638d1e2e16d3f!2sBhiwandi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716382000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: darkMode ? 'invert(90%) hue-rotate(180deg) grayscale(30%)' : 'none' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
