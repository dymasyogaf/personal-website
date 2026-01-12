'use client';

import { Globe2, Award, Users, Rocket } from 'lucide-react';

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

    return (
        <section className="relative z-10 py-20 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {items.map((item, i) => (
                    <div
                        key={i}
                        data-color={item.color}
                        className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="content relative z-10 flex flex-col items-center text-center">
                            <div className="p-3 rounded-xl mb-3" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>{item.icon}</div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                {item.value}
                            </h3>
                            <p className="text-sm font-semibold mt-1" style={{ color: 'var(--text-secondary)' }}>{item.title}</p>
                            <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
