'use client';

import { motion } from 'framer-motion';
import "../../styles/homepage.css";
import { useCallback } from 'react';
import { Globe } from 'lucide-react';
import { SiWordpress, SiGooglecloud } from 'react-icons/si'; // ✅ Logo WordPress & Berdu
import { Rocket } from 'lucide-react';

export default function Layanan() {
    // ✨ Efek reaktif mengikuti kursor
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    const services = [
        {
            title: 'Website Development',
            desc: 'Buat website profesional yang responsif dan user-friendly untuk bisnis Anda.',
            icon: <Globe className="w-6 h-6 text-cyan-400" />,
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom Domain'],
            color: 'cyan',
        },
        {
            title: 'WordPress Development',
            desc: 'Kustomisasi WordPress sesuai kebutuhan dengan tema dan plugin terbaik.',
            icon: <SiWordpress className="w-6 h-6 text-[#21759B]" />, // 💙 Biru khas WordPress
            features: ['Custom Theme', 'Plugin Integration', 'E-commerce Ready', 'Content Management'],
            color: 'indigo',
        },
        {
            title: 'Berdu Platform',
            desc: 'Solusi platform berdu yang powerful untuk kebutuhan bisnis modern.',
            icon: <img src="/image/logo/berdu.jpeg" alt="Berdu" className="w-6 h-6" loading="lazy" />, // 🏢 Logo Berdu Original
            features: ['Admin Dashboard', 'User Management', 'Data Analytics', 'Cloud Hosting'],
            color: 'teal',
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect" style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    color: 'var(--accent)',
                    boxShadow: '0 4px 20px var(--shadow-light)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                    Layanan Utama
                </span>
                <h2 className="mt-5 section-title">
                    Transformasi digital dengan sentuhan berkelas
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Kreasikan pengalaman digital yang berbeda dengan elemen 3D, glassmorphism, dan animasi interaktif yang menjaga pengguna tetap terlibat.
                </p>
            </div>

            {/* 💼 Grid Layanan */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        onMouseMove={handleMouseMove}
                        data-color={service.color}
                        className="service-reactive p-8 rounded-3xl text-center transition-all duration-500"
                    >
                        <div className="relative z-10 flex flex-col items-center">
                            {/* 🌈 Ikon ala Hero/Highlight */}
                            <div className="icon-glass p-4 rounded-2xl mb-4">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{service.title}</h3>
                            <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>

                            <ul className="space-y-3 w-full">
                                {service.features.map((feat, j) => (
                                    <li
                                        key={j}
                                        className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border hover:bg-white/10 transition justify-center"
                                        style={{
                                            backgroundColor: 'var(--card-bg)',
                                            borderColor: 'var(--card-border)',
                                            color: 'var(--text-secondary)'
                                        }}
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
