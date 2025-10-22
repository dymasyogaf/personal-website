'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    
    // Update DOM
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    const metaTileColor = document.querySelector('meta[name="msapplication-TileColor"]') as HTMLMetaElement;
    const themeColor = newTheme === 'dark' ? '#060b18' : '#ffffff';
    
    if (metaThemeColor) metaThemeColor.content = themeColor;
    if (metaTileColor) metaTileColor.content = themeColor;
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 overflow-hidden group hover-theme glow-effect"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        border: '1px solid',
        boxShadow: '0 2px 8px var(--shadow-light)'
      }}
    >
      {/* Background gradient animation */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(to bottom right, var(--gradient-from), var(--gradient-to))',
          opacity: 0.2
        }}
      />
      
      {/* Icon container with animation */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                rotate: { duration: 0.3 }
              }}
              className="absolute"
            >
              <Moon className="w-5 h-5 drop-shadow-sm" style={{ color: 'var(--accent)' }} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                rotate: { duration: 0.3 }
              }}
              className="absolute"
            >
              <Sun className="w-5 h-5 drop-shadow-sm" style={{ color: 'var(--accent)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{
          background: 'linear-gradient(to bottom right, var(--gradient-from), var(--gradient-to))',
          opacity: 0.3
        }}
      />
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ borderColor: 'var(--card-border)', border: '1px solid' }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileTap={{ scale: 1.2, opacity: 0.5 }}
        transition={{ duration: 0.1 }}
      />
    </button>
  );
}