import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, ArrowUpRight } from 'lucide-react';

interface FloatingWhatsAppProps {
  darkMode: boolean;
}

export default function FloatingWhatsApp({ darkMode }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [service, setService] = useState('Website Development');
  const [message, setMessage] = useState('');

  const servicesOption = [
    'Website Development',
    'AI Website Creation',
    'Business Portfolio Websites',
    'Tours & Travel Websites',
    'Graphic Designing',
    'Social Media Management',
    'SEO Optimization',
    'Digital Marketing/Video Editing',
    'Other Business Branding'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-filled WhatsApp link
    // Formulate a professional business message
    const intro = `Hello Usman Pathan @ ZK Digital Solutions (Venture of ZK Business Hub)!`;
    const body = `My name is ${name || 'Interested Client'}. I would like to inquire about "${service}".`;
    const details = message ? ` Details: ${message}` : '';
    
    const fulText = encodeURIComponent(`${intro}\n\n${body}${details}`);
    const waNumber = '910000000000'; // India Headquarters business target placeholder
    window.open(`https://wa.me/${waNumber}?text=${fulText}`, '_blank');
    
    setIsOpen(false);
    setName('');
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-modal"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={`w-[340px] rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] mb-4 border transition-colors duration-300 ${
              darkMode 
                ? 'bg-slate-900 border-slate-800 text-white' 
                : 'bg-white border-slate-100 text-slate-800'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-cyan-500 p-4 relative text-white">
              <button
                id="close-wa"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display font-medium text-lg leading-none">
                    ZK
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ZK Digital Solutions</h4>
                  <p className="text-[11px] text-cyan-100">Typically replies within a few minutes</p>
                </div>
              </div>
            </div>

            {/* Simulated Welcoming Bubble */}
            <div className={`p-4 text-xs space-y-3 max-h-[220px] overflow-y-auto ${darkMode ? 'bg-slate-950/40' : 'bg-slate-50'}`}>
              <div className={`p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs leading-relaxed ${
                darkMode ? 'bg-slate-850 text-slate-300' : 'bg-white text-slate-600 shadow-sm'
              }`}>
                👋 Hello! Welcome to ZK Digital Solutions. Founded by Usman Pathan under ZK Business Hub, we create clean, custom websites and digital solutions directly from Bhiwandi, Maharashtra, India.
                <br /><br />
                Fill in the form below to immediately start a direct WhatsApp chat with Usman Pathan.
              </div>
            </div>

            {/* Simple Dynamic Input Fields */}
            <form onSubmit={handleSubmit} className="p-4 space-y-3 border-t border-slate-800/10">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Your Name</label>
                <input
                  id="wa-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-3 py-2 rounded-lg text-xs outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-800 border border-slate-700/60 focus:border-cyan-500 text-white' 
                      : 'bg-slate-100 border border-slate-200 focus:border-blue-500 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Interested Service</label>
                <select
                  id="wa-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg text-xs outline-none transition-all ${
                    darkMode 
                      ? 'bg-slate-850 border border-slate-750 focus:border-cyan-500 text-white' 
                      : 'bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900'
                  }`}
                >
                  {servicesOption.map((srv) => (
                    <option key={srv} value={srv} className={darkMode ? 'bg-slate-900' : 'bg-white'}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Your Message (Optional)</label>
                <textarea
                  id="wa-msg"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us a bit about your business..."
                  className={`w-full px-3 py-2 rounded-lg text-xs outline-none transition-all resize-none ${
                    darkMode 
                      ? 'bg-slate-800 border border-slate-700/60 focus:border-cyan-500 text-white' 
                      : 'bg-slate-100 border border-slate-200 focus:border-blue-500 text-slate-900'
                  }`}
                />
              </div>

              <button
                id="submit-wa"
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-xs transition-transform active:scale-[0.98] cursor-pointer shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
              >
                <Send size={13} />
                <span>Open WhatsApp Chat</span>
                <ArrowUpRight size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Circle */}
      <motion.button
        id="whatsapp-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-[0_8px_30px_rgba(6,182,212,0.3)] relative group ${
          darkMode 
            ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400' 
            : 'bg-blue-600 text-white hover:bg-blue-500'
        }`}
        aria-label="Direct WhatsApp business contact"
      >
        <span className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping opacity-60" />
        <MessageSquare size={24} className="transition-transform duration-300 group-hover:rotate-6" />
      </motion.button>
    </div>
  );
}
