'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isTransitioning = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    // Get initial theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
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
      
      // Reset transition flag after animation completes
      setTimeout(() => {
        isTransitioning.current = false;
      }, 300);
    });
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
      className="relative w-10 h-10 rounded-full theme-transition focus:outline-none focus:ring-2 focus:ring-cyan-400/50 overflow-hidden group hover-theme glow-effect theme-toggle-optimized button-bg button-border button-shadow border"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Icon container with simplified animation */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Moon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}