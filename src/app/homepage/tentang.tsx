'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { Rocket, Lightbulb, Compass, HeartHandshake } from 'lucide-react';

export default function Tentang() {
    // 🧠 Efek reaktif seperti hero & highlight
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            {/* ✨ Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect" style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    color: 'var(--accent)',
                    boxShadow: '0 4px 20px var(--shadow-light)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                    Tentang Dyogaf
                </span>

                <h2 className="mt-5 section-title">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        Dyogaf
                    </span>{' '}
                    — Studio Digital Kreatif
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Kami menciptakan pengalaman digital berjiwa manusia dengan pendekatan futuristik.
                    Dyogaf hadir untuk membantu brand tumbuh, berinteraksi, dan menginspirasi melalui
                    desain, strategi, dan teknologi.
                </p>
            </div>

            {/* 🌌 Bingkai Utama */}
            <div
                className="relative z-10 max-w-6xl mx-auto rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl p-10 transition-all duration-500"
                onMouseMove={handleMouseMove}
            >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* ✨ KIRI - VISI DAN NILAI */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-8"
                    >
                        {/* 🎯 Visi */}
                        <div
                            className="card-reactive bg-white/[0.03] backdrop-blur-xl p-8 rounded-3xl border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
                            onMouseMove={handleMouseMove}
                            data-color="indigo"
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                                Visi Kami
                            </h3>
                            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                Menjadi studio digital yang tidak hanya membangun website, tetapi juga
                                menghadirkan *experience* yang hidup — menghubungkan manusia, nilai, dan teknologi
                                dalam satu kesatuan yang bermakna.
                            </p>
                        </div>

                        {/* 🌟 Nilai-nilai */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
                                    title: 'Inovatif',
                                    text: 'Membawa ide-ide baru dalam setiap proyek dengan semangat eksplorasi.',
                                    color: 'cyan',
                                },
                                {
                                    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
                                    title: 'Visioner',
                                    text: 'Melihat jauh ke depan — membangun strategi digital jangka panjang.',
                                    color: 'indigo',
                                },
                                {
                                    icon: <Compass className="w-6 h-6 text-teal-400" />,
                                    title: 'Petualangan',
                                    text: 'Terinspirasi oleh perjalanan dan tantangan, setiap proyek adalah ekspedisi kreatif.',
                                    color: 'teal',
                                },
                                {
                                    icon: <HeartHandshake className="w-6 h-6 text-cyan-300" />,
                                    title: 'Humanis',
                                    text: 'Membangun hubungan yang tulus, kolaboratif, dan penuh makna.',
                                    color: 'cyan',
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="card-reactive bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all"
                                    onMouseMove={handleMouseMove}
                                    data-color={item.color}
                                >
                                    <div className="relative p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-lg blur-md bg-gradient-to-br from-cyan-400/15 to-indigo-500/15"></div>
                                        <div className="relative z-10">{item.icon}</div>
                                    </div>
                                    <h4 className="text-lg font-semibold mt-3" style={{ color: 'var(--foreground)' }}>{item.title}</h4>
                                    <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ✨ KANAN - STATISTIK */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        {[
                            { number: '3+', label: 'Tahun Pengalaman', color: 'indigo' },
                            { number: '50+', label: 'Proyek & Klien Puas', color: 'cyan' },
                            { number: '24/7', label: 'Dukungan & Komunikasi', color: 'teal' },
                            { number: '∞', label: 'Karya Bermakna', color: 'indigo' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="card-reactive bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl py-8 px-6 text-center rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all"
                                onMouseMove={handleMouseMove}
                                data-color={stat.color}
                            >
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                                        {stat.number}
                                    </h4>
                                    <p className="uppercase tracking-widest text-sm" style={{ color: 'var(--text-muted)' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
