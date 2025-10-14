'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    return (
        <header
            className="
        fixed top-0 left-0 z-50 w-full
        sm:top-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto
        flex justify-center
      "
        >
            <nav
                className="
          flex items-center justify-between gap-6
          w-full sm:w-auto
          px-5 sm:px-10 py-3
          border border-white/10
          bg-white/10 dark:bg-[#0b1120]/70
          backdrop-blur-2xl
          shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          rounded-none sm:rounded-full
          transition-all duration-300
        "
            >
                {/* 🌈 Logo */}
                <Link href="/" className="font-extrabold text-lg tracking-widest text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        Dyogaf
                    </span>
                </Link>

                {/* 📱 Tombol Menu Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                    {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>

                {/* 🧭 Menu Desktop */}
                <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                    <li><Link href="/services" className="hover:text-white transition">Layanan</Link></li>
                    <li><Link href="/about" className="hover:text-white transition">Tentang</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition">Kontak</Link></li>
                </ul>

                {/* ☀️ Tombol Mode + CTA */}
                <div className="hidden sm:flex items-center gap-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                        {isDark ? (
                            <Sun className="w-4 h-4 text-yellow-400" />
                        ) : (
                            <Moon className="w-4 h-4 text-gray-300" />
                        )}
                    </button>

                    <Link
                        href="/contact"
                        className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-gradient-to-r from-indigo-500 to-cyan-400
              text-white font-semibold
              hover:opacity-90 transition
              shadow-[0_0_20px_rgba(99,102,241,0.3)]
            "
                    >
                        HUBUNGI KAMI <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </nav>

            {/* 📱 Menu Mobile (Fullscreen Overlay) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="sm:hidden fixed inset-0 z-40 flex justify-center items-start pt-24 px-6 bg-[#0b1120]/90 backdrop-blur-2xl"
                    >
                        <div className="w-full max-w-sm bg-white/10 border border-white/10 rounded-3xl p-6 text-center text-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                            <p className="uppercase tracking-widest text-xs text-indigo-300 mb-6">
                                Navigasi
                            </p>

                            <div className="flex flex-col gap-3">
                                {['Home', 'Layanan', 'Tentang', 'Kontak'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/15 transition text-base font-medium"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-6 w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition text-sm"
                            >
                                HUBUNGI KAMI <ArrowUpRight className="w-4 h-4" />
                            </Link>

                            <div className="mt-6 flex items-center justify-center gap-2 pt-3 border-t border-white/10">
                                <button
                                    onClick={() => setIsDark(!isDark)}
                                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                                >
                                    {isDark ? (
                                        <>
                                            <Sun className="w-4 h-4 text-yellow-400" /> <span>Mode Terang</span>
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-4 h-4 text-gray-400" /> <span>Mode Gelap</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
