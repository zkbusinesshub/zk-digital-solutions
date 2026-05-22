import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowUpRight, ArrowRight, User, Clock, Calendar, Check, Send } from 'lucide-react';
import { BLOGS } from '../data';
import { BlogPost } from '../types';

interface BlogPreviewProps {
  darkMode: boolean;
}

export default function BlogPreview({ darkMode }: BlogPreviewProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmailSub('');
      }, 2500);
    }
  };

  return (
    <section id="blog-section" className="py-24 relative overflow-hidden font-sans">
      {/* Decorative background circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            darkMode ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-800/30' : 'bg-blue-50 text-blue-800'
          }`}>
            <BookOpen size={12} />
            <span>Digital Knowledge Hub</span>
          </div>
          <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Latest Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insights & Trends</span>
          </h2>
          <p className={`text-xs md:text-sm leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We regularly catalog industry shifts. Read reviews compiled by ZK Digital Solutions engineers regarding AI integrations, SEO modifications, and visual frameworks.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOGS.map((blog, index) => (
            <motion.div
              id={`blog-card-${blog.id}`}
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden border flex flex-col justify-between group backdrop-blur-xl ${
                darkMode 
                  ? 'glass-card hover:border-white/20' 
                  : 'glass-card-light shadow shadow-slate-100 hover:shadow-md'
              }`}
            >
              {/* Image banner */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className={`absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                  darkMode ? 'bg-slate-950/85 text-cyan-400 border border-slate-800' : 'bg-white text-blue-600 shadow-sm'
                }`}>
                  {blog.category}
                </span>
              </div>

              {/* Text content block */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className={`flex items-center gap-4 text-[11px] mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className={`text-base md:text-lg font-display font-bold mb-3 leading-snug group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {blog.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed mb-6 line-clamp-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {blog.excerpt}
                  </p>
                </div>

                {/* Author Block + Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/40 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={blog.author.avatarUrl}
                      alt={blog.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-slate-800/20"
                      referrerPolicy="no-referrer"
                    />
                    <span className={`text-[11px] font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {blog.author.name}
                    </span>
                  </div>

                  <button
                    id={`btn-read-blog-${blog.id}`}
                    onClick={() => setSelectedPost(blog)}
                    className={`text-xs font-bold flex items-center gap-1 cursor-pointer ${
                      darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <span>Read Article</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Newsletter Box */}
        <div className={`p-8 md:p-10 rounded-2xl border backdrop-blur-xl ${
          darkMode 
            ? 'glass-card' 
            : 'glass-card-light'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-2">
              <h3 className={`text-xl md:text-2xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Stay Informed with Strategic Reports
              </h3>
              <p className={`text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Get high-quality analyses once a month covering search rank algorithmic changes, visual components, and UI optimizations directly from ZK Business Hub partners.
              </p>
            </div>

            <div className="md:col-span-5">
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={subscribed ? 'Successfully Subscribed!' : emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  disabled={subscribed}
                  placeholder="Enter your enterprise email..."
                  className={`w-full py-3 pl-4 pr-12 rounded-xl text-xs sm:text-sm outline-none transition-all ${
                    subscribed 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 cursor-not-allowed'
                      : (darkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' 
                          : 'bg-white border-slate-200 text-slate-9o0 focus:border-blue-500 shadow-sm')
                  }`}
                />
                
                <button
                  id="submit-newsletter"
                  type="submit"
                  disabled={subscribed}
                  className={`absolute right-1.5 top-1.5 p-2 rounded-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center ${
                    subscribed 
                      ? 'bg-emerald-500 text-white'
                      : (darkMode ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950' : 'bg-blue-600 hover:bg-blue-500 text-white')
                  }`}
                  aria-label="Subscribe newsletter"
                >
                  {subscribed ? <Check size={14} /> : <Send size={14} />}
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Blog Post Deep-dive Modal representing full content read page */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                id="blog-modal-body"
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 25 }}
                className={`w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border relative z-10 font-sans backdrop-blur-2xl ${
                  darkMode 
                    ? 'glass-card text-white border-white/10' 
                    : 'glass-card-light text-slate-800'
                }`}
              >
                {/* Close */}
                <button
                  id="close-blog-modal"
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-slate-950/70 text-white hover:bg-slate-900 p-2 rounded-xl z-20 shadow border border-slate-800/40 transition-colors"
                >
                  <Clock size={14} className="hidden" />
                  <span>Close</span>
                </button>

                {/* Banner */}
                <div className="relative aspect-[21/9] w-full">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-slate-950/10" />
                  <span className="absolute bottom-4 left-6 z-20 text-[9px] font-bold bg-cyan-400 text-slate-950 px-2.5 py-1 rounded uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                </div>

                {/* Details text block */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className={`text-lg md:text-xl font-display font-bold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {selectedPost.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-400 pb-3 border-b border-slate-800/40">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {selectedPost.readTime}</span>
                    <span className="flex items-center gap-1"><User size={12} /> Written by {selectedPost.author.name}</span>
                  </div>

                  <div className={`space-y-4 text-xs md:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    <p>
                      In the modern business landscape of 2026, building a digital presence stretches far beyond throwing together a template using cookie-cutter builders. Modern agency models value clean layout structures, lightweight React components, and targeted search engine indicators to elevate discoverability.
                    </p>
                    <p className="font-semibold block pl-3 border-l-2 border-cyan-400">
                      "At ZK Digital Solutions, under the guidelines of ZK Business Hub, we synchronize modular styling with advanced AI workflows to deploy performance layouts that convert traffic to business opportunities safely."
                    </p>
                    <p>
                      Whether you are scaling a travel portal with maps, organizing high-contrast dark interfaces for fitness memberships, or introducing custom calligraphy displays for religious portals, performance scales and user satisfaction remain our top operational benchmarks.
                    </p>
                  </div>

                  {/* Free Guide offer footer */}
                  <div className="pt-6 border-t border-slate-800/40 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Interested in reading more premium documentation?</span>
                    <a
                      href="#contact-section"
                      onClick={() => setSelectedPost(null)}
                      className={`text-xs font-semibold px-4 py-2 rounded-xl transition-colors ${
                        darkMode ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950' : 'bg-blue-600 hover:bg-blue-500 text-white'
                      }`}
                    >
                      Inquire details
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
