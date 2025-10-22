'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = useMemo(() => [
        { name: 'Home', href: '/' },
        { name: 'Tentang', href: '/about' },
        { name: 'Layanan', href: '/services' },
        { name: 'Proyek', href: '/projects' },
        { name: 'Blog', href: 'https://baca.dymasyogaf.my.id/' },
        { name: 'Kontak', href: '/contact' },
    ], []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
            <nav
                className={`
                    flex items-center justify-between
                    w-[94%] sm:w-[90%] md:w-[88%] lg:w-[82%] xl:w-[75%]
                    px-5 sm:px-8 md:px-10 py-3
                    border border-[var(--nav-border)]
                    backdrop-blur-2xl
                    rounded-2xl
                    mt-4
                    transition-all duration-300
                `}
                style={{
                    backgroundColor: 'var(--nav-bg)',
                    boxShadow: isScrolled
                        ? '0 12px 40px var(--shadow-hover)'
                        : '0 8px 32px var(--shadow-light)'
                }}
            >
                {/* 🌈 Logo */}
                <Link
                    href="/"
                    className="font-extrabold text-lg md:text-xl tracking-widest select-none whitespace-nowrap"
                    style={{ color: 'var(--foreground)' }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        Dyogaf
                    </span>
                </Link>

                {/* 📱 Tombol Menu Mobile / Tablet */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center w-9 h-9 rounded-full transition focus:outline-none focus:ring-2 focus:ring-cyan-400/50 hover-theme glow-effect"
                    aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
                    style={{
                        color: 'var(--foreground)',
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--card-border)',
                        border: '1px solid',
                        boxShadow: '0 2px 8px var(--shadow-light)'
                    }}
                >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* 🧭 Menu Desktop / Tablet */}
                <ul className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-8 xl:gap-10 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
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
                                            ? 'after:w-full'
                                            : 'hover:after:w-full after:w-0'}
                                        after:transition-all after:duration-300 hover-theme
                                    `}
                                    style={{
                                        color: isActive ? 'var(--foreground)' : 'var(--text-secondary)'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* ☀️ Mode & CTA */}
                <div className="hidden md:flex items-center gap-3 lg:gap-5 whitespace-nowrap">
                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="
                            inline-flex items-center gap-2
                            px-4 md:px-5 py-2 rounded-full
                            font-semibold
                            hover:scale-[1.03] active:scale-95 transition
                            text-sm md:text-base hover-theme
                        "
                        style={{
                            background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))',
                            color: 'white',
                            boxShadow: '0 0 20px var(--glow-hover)'
                        }}
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
                        className="md:hidden fixed inset-0 z-40 backdrop-blur-2xl flex flex-col justify-start items-center pt-28 px-6"
                        style={{ backgroundColor: 'var(--overlay-bg)' }}
                    >
                        <button
                            onClick={closeMenu}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                            aria-label="Tutup menu"
                            style={{ color: 'var(--foreground)' }}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="w-full max-w-sm rounded-3xl p-8 text-center glow-effect"
                             style={{
                                 backgroundColor: 'var(--card-bg)',
                                 border: '1px solid var(--card-border)',
                                 color: 'var(--text-secondary)',
                                 boxShadow: '0 8px 40px var(--shadow-hover)'
                             }}>
                            <p className="uppercase tracking-widest text-xs mb-6" style={{ color: 'var(--accent)' }}>
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
                                            className={`w-full py-3 rounded-xl text-base font-medium transition hover-theme
                                                ${isActive
                                                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white'
                                                    : ''}
                                            `}
                                            style={{
                                                backgroundColor: isActive ? '' : 'var(--card-bg)',
                                                color: isActive ? 'white' : 'var(--text-secondary)',
                                                borderColor: 'var(--card-border)'
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>

                            <Link
                                href="/contact"
                                onClick={closeMenu}
                                className="mt-6 w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl text-white font-semibold hover:scale-[1.02] transition text-sm hover-theme"
                                style={{
                                    background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))'
                                }}
                            >
                                HUBUNGI KAMI <ArrowUpRight className="w-4 h-4" />
                            </Link>

                            <div className="mt-6 flex items-center justify-center gap-2 pt-3" style={{ borderTop: '1px solid var(--card-border)' }}>
                                <ThemeToggle />
                                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    Theme
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
