'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';
import "../../styles/homepage.css";

export default function CTA() {
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    return (
        <section className="relative z-10 py-28 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            {/* 🌌 Cahaya lembut di background */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] bg-gradient-radial from-cyan-500/15 via-transparent to-transparent blur-[140px]"
            />

            {/* 💫 CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-5xl mx-auto text-center card-reactive bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] rounded-[2rem] p-10 sm:p-16 shadow-[0_0_60px_rgba(99,102,241,0.15)] overflow-hidden"
                onMouseMove={handleMouseMove}
                data-color="indigo"
            >
                {/* ✨ Label kecil */}
                <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
                    <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] rounded-full border glow-effect" style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--accent)',
                        borderWidth: '2px',
                        color: 'var(--accent)',
                        boxShadow: '0 4px 20px var(--shadow-light)',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                    }}>
                        Siap Berkolaborasi
                    </span>
                </div>

                {/* 🌍 Judul */}
                <h2 className="text-3xl sm:text-5xl font-extrabold leading-snug relative z-10">
                    Mulai Proyek Digitalmu{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Bersama Dyogaf
                    </span>
                </h2>

                <p className="mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                    Kami siap membantu membangun website, strategi SEO, dan branding digital yang futuristik, fungsional, dan berkarakter. 
                </p>

                {/* 🎯 Tombol CTA dengan efek reactive */}
                <div className="mt-10 relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="relative inline-flex group"
                        onMouseMove={handleMouseMove}
                        data-color="cyan"
                    >
                        {/* Efek cahaya mouse */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]"
                        >
                            Hubungi Kami <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* 📍 Info bawah */}
                <div className="mt-10 text-sm relative z-10" style={{ color: 'var(--text-muted)' }}>
                    <p>📍 Palembang, Indonesia</p>
                    <p>💬 Terbuka untuk proyek freelance & kolaborasi jangka panjang</p>
                </div>
            </motion.div>
        </section>
    );
}
