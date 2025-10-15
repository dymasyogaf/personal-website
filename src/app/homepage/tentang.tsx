'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { Rocket, Lightbulb, Compass, HeartHandshake } from 'lucide-react';
import "../../styles/homepage.css";

export default function Tentang() {
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* ✨ Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Tentang Dyogaf
                </span>

                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
                    <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Dyogaf
                    </span>{' '}
                    — Studio Digital Kreatif
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Kami menciptakan pengalaman digital berjiwa manusia dengan pendekatan futuristik.
                    Dyogaf hadir untuk membantu brand tumbuh, berinteraksi, dan menginspirasi melalui
                    desain, strategi, dan teknologi.
                </p>
            </div>

            {/* 🌌 Bingkai Utama */}
            <div className="section-glow max-w-6xl mx-auto relative z-10" onMouseMove={handleMouseMove}>
                <div className="section-content grid lg:grid-cols-2 gap-10">
                    {/* KIRI */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Visi Dyogaf */}
                        <div className="card-reactive bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                Visi Kami
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Menjadi studio digital yang tidak hanya membangun website, tetapi juga
                                menghadirkan *experience* yang hidup — menghubungkan manusia, nilai, dan teknologi
                                dalam satu kesatuan yang bermakna.
                            </p>
                        </div>

                        {/* Nilai-nilai Dyogaf */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
                                    title: 'Inovatif',
                                    text: 'Membawa ide-ide baru dalam setiap proyek dengan semangat eksplorasi.',
                                },
                                {
                                    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
                                    title: 'Visioner',
                                    text: 'Melihat jauh ke depan — membangun strategi digital jangka panjang.',
                                },
                                {
                                    icon: <Compass className="w-6 h-6 text-teal-400" />,
                                    title: 'Petualangan',
                                    text: 'Terinspirasi oleh perjalanan dan tantangan, setiap proyek adalah ekspedisi kreatif.',
                                },
                                {
                                    icon: <HeartHandshake className="w-6 h-6 text-cyan-300" />,
                                    title: 'Humanis',
                                    text: 'Membangun hubungan yang tulus, kolaboratif, dan penuh makna.',
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="card-reactive bg-white/5 hover:bg-white/10 transition-all p-5 rounded-xl border border-white/10 flex flex-col items-start gap-3"
                                    onMouseMove={handleMouseMove}
                                >
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* KANAN */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        {[
                            { number: '3+', label: 'Tahun Pengalaman' },
                            { number: '50+', label: 'Proyek & Klien Puas' },
                            { number: '24/7', label: 'Dukungan & Komunikasi' },
                            { number: '∞', label: 'Karya Bermakna' },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="card-reactive bg-white/10 backdrop-blur-md py-8 px-6 text-center transition-all duration-500 relative"
                                onMouseMove={handleMouseMove}
                            >
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                                        {stat.number}
                                    </h4>
                                    <p className="uppercase tracking-widest text-sm text-gray-300">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
