'use client';

import { motion } from 'framer-motion';
import { Globe2, Award, Users, Rocket } from 'lucide-react';
import { useCallback } from 'react';
import "../../styles/homepage.css";

export default function Highlight() {
    const items = [
        {
            icon: <Award className="w-6 h-6 text-cyan-400" />,
            title: "Pengalaman",
            value: "3+ Tahun",
            desc: "Membangun sistem digital yang fungsional & estetik.",
            color: "cyan",
        },
        {
            icon: <Users className="w-6 h-6 text-indigo-400" />,
            title: "Klien & Kolaborator",
            value: "50+",
            desc: "Telah dipercaya oleh brand, kreator, dan komunitas.",
            color: "indigo",
        },
        {
            icon: <Rocket className="w-6 h-6 text-teal-400" />,
            title: "Proyek Selesai",
            value: "100%",
            desc: "Setiap proyek diselesaikan dengan komitmen penuh.",
            color: "teal",
        },
        {
            icon: <Globe2 className="w-6 h-6 text-purple-400" />,
            title: "Jangkauan",
            value: "Global",
            desc: "Terhubung dengan klien dari berbagai wilayah.",
            color: "purple",
        },
    ];

    // ✨ Mouse reactive border
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    }, []);

    return (
        <section className="relative z-10 py-20 px-6 sm:px-12 text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        data-color={item.color}
                        onMouseMove={handleMouseMove}
                        className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="content relative z-10 flex flex-col items-center text-center">
                            <div className="p-3 rounded-xl bg-white/5 mb-3">{item.icon}</div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                {item.value}
                            </h3>
                            <p className="text-sm font-semibold text-gray-300 mt-1">{item.title}</p>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
