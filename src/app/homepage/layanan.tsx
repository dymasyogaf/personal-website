'use client';

import { motion } from 'framer-motion';

export default function Layanan() {
    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Layanan Utama
                </span>
                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-snug">
                    Transformasi digital dengan sentuhan berkelas
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Kreasikan pengalaman digital yang berbeda dengan elemen 3D, glassmorphism, dan animasi interaktif yang menjaga pengguna tetap terlibat.
                </p>
            </div>

            {/* 💼 Grid Layanan */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        title: 'Website Development',
                        desc: 'Buat website profesional yang responsif dan user-friendly untuk bisnis Anda.',
                        icon: '🌐',
                        features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Domain'],
                        gradient: 'from-indigo-600/40 to-blue-500/30',
                    },
                    {
                        title: 'WordPress Development',
                        desc: 'Kustomisasi WordPress sesuai kebutuhan dengan tema dan plugin terbaik.',
                        icon: '⚙️',
                        features: ['Custom Theme', 'Plugin Integration', 'E-commerce Ready', 'Content Management'],
                        gradient: 'from-purple-600/40 to-cyan-500/30',
                    },
                    {
                        title: 'Berdu Platform',
                        desc: 'Solusi platform berdu yang powerful untuk kebutuhan bisnis modern.',
                        icon: '🚀',
                        features: ['Admin Dashboard', 'User Management', 'Data Analytics', 'Cloud Hosting'],
                        gradient: 'from-cyan-500/40 to-blue-400/30',
                    },
                ].map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                    >
                        {/* ✨ Efek hover gradasi */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                        />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">{service.icon}</div>
                                <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-semibold">
                                    Specialized
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{service.desc}</p>

                            <ul className="space-y-3">
                                {service.features.map((feat, j) => (
                                    <li
                                        key={j}
                                        className="flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-full text-gray-300 border border-white/10 hover:bg-white/10 transition"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
