'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import "../../styles/homepage.css";

export default function CTA() {
    return (
        <section className="relative z-10 py-28 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🌌 Background mengikuti global layout dari page.tsx */}
            {/* Tidak perlu background tambahan di sini */}

            {/* ✨ Efek spotlight fokus ke CTA button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-[120px] animate-pulse"
            />

            {/* 💫 CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-5xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 sm:p-16 shadow-[0_0_60px_rgba(99,102,241,0.15)] overflow-hidden"
            >
                {/* 🩵 Efek kilau bergerak di belakang tombol */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.6, 0.2], x: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-cyan-400/20 blur-[80px] rounded-full"
                />

                {/* ✨ Label kecil */}
                <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
                    <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 rounded-full text-gray-300">
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

                <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
                    Kami siap membantu membangun website, strategi SEO, dan branding digital yang futuristik, fungsional, dan berkarakter. 
                </p>

                {/* 🎯 Tombol CTA */}
                <div className="mt-10 relative z-10">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-block"
                    >
                        <Link
                            href="/order"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold text-white hover:scale-[1.05] active:scale-95 transition-transform shadow-[0_0_25px_rgba(99,102,241,0.3)]"
                        >
                            Isi Form Order <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* 📍 Info bawah */}
                <div className="mt-10 text-sm text-gray-400 relative z-10">
                    <p>📍 Palembang, Indonesia</p>
                    <p>💬 Terbuka untuk proyek freelance & kolaborasi jangka panjang</p>
                </div>
            </motion.div>
        </section>
    );
}
