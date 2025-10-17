'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Tentang', href: '/about' },
        { name: 'Layanan', href: '/services' },
        { name: 'Proyek', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontak', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
            <nav
                className="
                    flex items-center justify-between
                    w-[94%] sm:w-[90%] md:w-[88%] lg:w-[82%] xl:w-[75%]
                    px-5 sm:px-8 md:px-10 py-3
                    border border-white/10
                    bg-white/10 dark:bg-[#0b1120]/70
                    backdrop-blur-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                    rounded-2xl
                    mt-4
                    transition-all duration-300
                "
            >
                {/* 🌈 Logo */}
                <Link
                    href="/"
                    className="font-extrabold text-lg md:text-xl tracking-widest text-white select-none whitespace-nowrap"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        Dyogaf
                    </span>
                </Link>

                {/* 📱 Tombol Menu Mobile / Tablet */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                    {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>

                {/* 🧭 Menu Desktop / Tablet */}
                <ul className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-8 xl:gap-10 text-sm font-medium text-gray-300">
                    {menuItems.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            (item.href !== '/' && pathname.startsWith(item.href));

                        return (
                            <li key={item.name} className="relative">
                                <Link
                                    href={item.href}
                                    className={`
                                        transition relative after:content-['']
                                        after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                                        after:bg-gradient-to-r after:from-indigo-400 after:to-cyan-400
                                        ${isActive
                                            ? 'text-white after:w-full'
                                            : 'hover:text-white after:w-0 hover:after:w-full text-gray-300'}
                                        after:transition-all after:duration-300
                                    `}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* ☀️ Mode & CTA */}
                <div className="hidden md:flex items-center gap-3 lg:gap-5 whitespace-nowrap">
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
                            px-4 md:px-5 py-2 rounded-full
                            bg-gradient-to-r from-indigo-500 to-cyan-400
                            text-white font-semibold
                            hover:scale-[1.03] active:scale-95 transition
                            shadow-[0_0_20px_rgba(99,102,241,0.3)]
                            text-sm md:text-base
                        "
                    >
                        HUBUNGI KAMI <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </nav>

            {/* 📱 Overlay Menu (Mobile & Tablet) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="md:hidden fixed inset-0 z-40 bg-[#0b1120]/95 backdrop-blur-2xl flex flex-col justify-start items-center pt-28 px-6"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <div className="w-full max-w-sm bg-white/10 border border-white/10 rounded-3xl p-8 text-center text-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                            <p className="uppercase tracking-widest text-xs text-indigo-300 mb-6">
                                Navigasi
                            </p>

                            <div className="flex flex-col gap-3">
                                {menuItems.map((item) => {
                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== '/' && pathname.startsWith(item.href));

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`w-full py-3 rounded-xl text-base font-medium transition
                                                ${isActive
                                                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white'
                                                    : 'bg-white/5 hover:bg-white/15 text-gray-200'}
                                            `}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>

                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-6 w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold hover:scale-[1.02] transition text-sm"
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
