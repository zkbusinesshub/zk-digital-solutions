import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      className={`relative w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        darkMode ? 'bg-slate-800 border border-cyan-500/30' : 'bg-slate-200 border border-slate-300'
      }`}
      aria-label="Toggle theme"
    >
      <div className={`flex items-center justify-between px-1 text-slate-400 text-xs select-none pointer-events-none`}>
        {darkMode ? <Moon size={12} className="text-cyan-400" /> : <div className="w-3" />}
        {!darkMode ? <Sun size={12} className="text-amber-500" /> : <div className="w-3" />}
      </div>
      <motion.div
        layout
        className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
          darkMode ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]' : 'bg-white shadow'
        }`}
        style={{ x: darkMode ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? (
          <Moon size={12} className="text-slate-950 font-bold" />
        ) : (
          <Sun size={12} className="text-amber-500 font-bold" />
        )}
      </motion.div>
    </button>
  );
}
