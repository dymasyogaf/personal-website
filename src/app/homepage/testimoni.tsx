'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';
import "../../styles/homepage.css";

export default function Testimoni() {
    // ✨ Efek kursor reaktif seperti section lain
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    const testimonials = [
        {
            name: "FufuFafa",
            role: "Founder - KreativeLab",
            message:
                "Dyogaf membantu kami membangun identitas digital dengan desain yang elegan dan performa tinggi. Prosesnya cepat, komunikatif, dan hasilnya luar biasa.",
            avatar: "/image/testimoni/gibran.jpeg",
            color: "cyan",
        },
        {
            name: "Patrick Star",
            role: "Pelatih Timnas",
            message:
                "Website bisnis saya terlihat profesional dan mudah digunakan. Dyogaf benar-benar memahami kebutuhan klien dan detail kecil yang membuat beda.",
            avatar: "/image/testimoni/patrick.jpeg",
            color: "indigo",
        },
        {
            name: "Bahlil Lala",
            role: "TMB & LPG",
            message:
                "Kolaborasi bersama Dyogaf selalu menyenangkan. Mereka punya visi kuat untuk menghadirkan pengalaman digital yang meaningful dan inovatif.",
            avatar: "/image/testimoni/bahlil.jpeg",
            color: "teal",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            {/* 🧠 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect" style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    color: 'var(--accent)',
                    boxShadow: '0 4px 20px var(--shadow-light)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                    Kata Mereka
                </span>
                <h2 className="mt-5 section-title">
                    Suara <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Klien Kami</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Bukti nyata bagaimana Dyogaf membantu bisnis dan kreator digital mencapai potensi terbaiknya.
                </p>
            </div>

            {/* 💬 Grid Testimoni */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        onMouseMove={handleMouseMove}
                        data-color={t.color}
                        className="service-reactive relative group rounded-3xl p-8 text-center transition-all duration-500"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--card-border)'
                        }}
                    >
                        {/* ✨ Glow Hover */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-20 transition duration-500"></div>

                        {/* 💬 Quote Icon */}
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition">
                            <Quote className="w-10 h-10 text-cyan-400" />
                        </div>

                        {/* 👤 Avatar & Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="relative w-16 h-16 mb-4">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 opacity-30 blur-md"></div>
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 relative z-10">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed italic mb-5" style={{ color: 'var(--text-secondary)' }}>
                                “{t.message}”
                            </p>
                            <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{t.name}</h3>
                            <p className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
