'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';

export default function Tentang() {
    // 🧠 Fungsi untuk mengikuti posisi mouse (efek glow interaktif)
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
                    Tentang Kami
                </span>

                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
                    Transformasi Digital{' '}
                    <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Terdepan
                    </span>
                </h2>
            </div>

            {/* 🌌 Bingkai Besar dengan Efek Glow */}
            <div
                className="section-glow max-w-6xl mx-auto relative z-10"
                onMouseMove={handleMouseMove}
            >
                <div className="section-content grid md:grid-cols-2 gap-10">
                    {/* 🧩 Kiri: Deskripsi */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-10"
                    >
                        {[
                            {
                                icon: '⚡',
                                title: 'Inovasi Berkelanjutan',
                                text: (
                                    <>
                                        Sebagai{' '}
                                        <span className="text-cyan-400 font-semibold">
                                            Digital Marketer
                                        </span>
                                        ,{' '}
                                        <span className="text-cyan-400 font-semibold">
                                            Web Developer
                                        </span>
                                        , dan{' '}
                                        <span className="text-cyan-400 font-semibold">
                                            Adventurer
                                        </span>
                                        , saya berfokus menciptakan pengalaman digital berkesan
                                        dengan sentuhan humanis dan futuristik. Menggabungkan
                                        strategi, desain, dan teknologi untuk menghasilkan karya
                                        yang bermakna.
                                    </>
                                ),
                                gradient: 'from-cyan-500 to-indigo-600',
                            },
                            {
                                icon: '✅',
                                title: 'Kualitas Terjamin',
                                text: (
                                    <>
                                        Fokus pada detail, performa, dan kemudahan penggunaan.
                                        Saya mengembangkan website{' '}
                                        <span className="text-cyan-400 font-medium">WordPress</span>{' '}
                                        dan sistem digital dengan pendekatan modern — SEO-friendly,
                                        cepat, dan responsif.
                                    </>
                                ),
                                gradient: 'from-indigo-500 to-cyan-400',
                            },
                            {
                                icon: '👥',
                                title: 'Tim Profesional',
                                text: (
                                    <>
                                        Didukung oleh kolaborasi dengan desainer, fotografer, dan
                                        kreator digital untuk menghadirkan hasil berkualitas tinggi,
                                        mulai dari branding, visual, hingga sistem berbasis web.
                                    </>
                                ),
                                gradient: 'from-blue-500 to-teal-400',
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* 📊 Kanan: Statistik Interaktif */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        {[
                            { number: '3+', label: 'Tahun Pengalaman' },
                            { number: '50+', label: 'Klien & Proyek Selesai' },
                            { number: '24/7', label: 'Dukungan & Komunikasi' },
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
