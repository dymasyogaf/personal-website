'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import "../../styles/homepage.css";

export default function Testimoni() {
    const testimonials = [
        {
            name: "Rizky Maulana",
            role: "Founder - KreativeLab",
            message:
                "Dyogaf membantu kami membangun identitas digital dengan desain yang elegan dan performa tinggi. Prosesnya cepat, komunikatif, dan hasilnya luar biasa.",
            avatar: "/images/client1.webp",
        },
        {
            name: "Siti Rahmawati",
            role: "Owner - Rahayu Coffee",
            message:
                "Website bisnis saya terlihat profesional dan mudah digunakan. Dyogaf benar-benar memahami kebutuhan klien dan detail kecil yang membuat beda.",
            avatar: "/images/client2.webp",
        },
        {
            name: "Ahmad Fadillah",
            role: "Digital Strategist",
            message:
                "Kolaborasi bersama Dyogaf selalu menyenangkan. Mereka punya visi kuat untuk menghadirkan pengalaman digital yang meaningful dan inovatif.",
            avatar: "/images/client3.webp",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🧠 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Kata Mereka
                </span>
                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-snug">
                    Suara <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Klien Kami</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Bukti nyata bagaimana Dyogaf membantu bisnis dan kreator digital mencapai potensi terbaiknya.
                </p>
            </div>

            {/* 💬 Grid Testimoni */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                    >
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition">
                            <Quote className="w-10 h-10 text-cyan-400" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-white/10">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed italic mb-5">
                                “{t.message}”
                            </p>
                            <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
