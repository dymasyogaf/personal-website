'use client';

import {
    Rocket,
    Lightbulb,
    HeartHandshake,
    Compass,
    Infinity,
    FolderCheck,
    Clock,
    Sparkles,
    Globe2,
} from 'lucide-react';
import "../../styles/about.css";
import { useCallback } from 'react';
import { motion } from "framer-motion";

export default function AboutPage() {
    // 🌀 Efek mouse reactive border
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    }, []);

    return (
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 bg-transparent overflow-visible"
                 style={{ color: 'var(--foreground)' }}>
            <div className="relative max-w-7xl mx-auto flex flex-col gap-24">

                {/* 🔹 1. Header (mirip bagian Hubungi Saya) */}
                <div className="text-center space-y-6">
                    {/* ✨ Label kecil */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--accent)',
                            borderWidth: '2px',
                            color: 'var(--accent)',
                            boxShadow: '0 4px 20px var(--shadow-light)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        Tentang Kami
                    </motion.span>

                    {/* 🌈 Judul besar */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span style={{ color: 'var(--foreground)' }}>Kenali Lebih Dekat </span>
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Tentang Dyogaf
                        </span>
                    </h1>

                    {/* 📄 Deskripsi singkat */}
                    <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <span className="font-semibold" style={{ color: 'var(--accent)' }}>Dyogaf Digital Studio</span> adalah ruang kolaboratif
                        yang lahir dari semangat eksplorasi, teknologi, dan kemanusiaan.
                        Kami percaya bahwa desain dan kode bukan hanya tampilan —
                        tapi perjalanan yang penuh makna dan nilai.
                    </p>
                </div>

                {/* 🔹 2. Filosofi & Cerita */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Filosofi & Awal Mula
                        </h2>
                        <p className="leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>
                            Nama <span className="font-semibold" style={{ color: 'var(--accent)' }}>Dyogaf</span> diambil dari pendirinya,
                            <strong> Dymas Yoga Febratama</strong> — seorang digital creator dan petualang
                            yang percaya bahwa setiap karya digital harus punya <em>jiwa</em> dan <em>arah</em>.
                            Dari perjalanan mandiri hingga kolaborasi global,
                            Dyogaf tumbuh sebagai studio yang menghadirkan teknologi dengan rasa kemanusiaan.
                        </p>
                        <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
                            Kami tidak hanya membangun website, tapi merancang <strong>pengalaman digital</strong> —
                            hidup, interaktif, dan menyentuh sisi manusia. Setiap proyek adalah ekspedisi kreatif,
                            dan setiap piksel adalah langkah menuju makna.
                        </p>
                    </div>

                    <div
                        onMouseMove={handleMouseMove}
                        data-color="cyan"
                        className="card-reactive border-reactive backdrop-blur-xl rounded-2xl p-8 shadow-lg transition-all"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--card-border)'
                        }}
                    >
                        <div className="gloss-top"></div>
                        <div className="inner-shadow"></div>
                        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            “Kami percaya setiap pixel punya makna, setiap interaksi punya emosi,
                            dan setiap proyek adalah ekspedisi menuju masa depan yang lebih bernilai.”
                        </p>
                        <p className="mt-4 text-right font-semibold" style={{ color: 'var(--accent)' }}>— Tim Dyogaf</p>
                    </div>
                </div>

                {/* 🔹 3. Visi & Nilai */}
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-center mb-10">
                        Visi & Nilai Kami
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Visi */}
                        <div
                            onMouseMove={handleMouseMove}
                            data-color="indigo"
                            className="card-reactive border-reactive backdrop-blur-xl rounded-2xl p-8"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)'
                            }}
                        >
                            <div className="gloss-top"></div>
                            <div className="inner-shadow"></div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Visi Kami</h3>
                            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                Menjadi <strong>studio digital petualang</strong> yang tak hanya membangun website,
                                tapi juga menghadirkan <em>pengalaman hidup</em> — menghubungkan nilai, manusia, dan teknologi
                                menjadi satu kesatuan yang bermakna.
                            </p>
                        </div>

                        {/* Statistik */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { value: '3+', label: 'Tahun Pengalaman', color: 'cyan', icon: <Clock className="w-6 h-6 text-cyan-400" /> },
                                { value: '50+', label: 'Proyek & Klien Puas', color: 'indigo', icon: <FolderCheck className="w-6 h-6 text-indigo-400" /> },
                                { value: '24/7', label: 'Dukungan & Komunikasi', color: 'teal', icon: <HeartHandshake className="w-6 h-6 text-teal-400" /> },
                                { value: '∞', label: 'Karya Bermakna', color: 'purple', icon: <Infinity className="w-6 h-6 text-purple-400" /> },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    onMouseMove={handleMouseMove}
                                    data-color={stat.color}
                                    className="card-reactive border-reactive flex flex-col justify-center items-center gap-3 backdrop-blur-xl rounded-2xl p-8 text-center"
                                    style={{
                                        backgroundColor: 'var(--card-bg)',
                                        borderColor: 'var(--card-border)'
                                    }}
                                >
                                    <div className="gloss-top"></div>
                                    <div className="inner-shadow"></div>
                                    <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(to bottom right, var(--card-bg), var(--card-border))' }}>{stat.icon}</div>
                                    <h3 className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</h3>
                                    <p className="text-xs tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nilai-nilai */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Rocket className="w-6 h-6 text-cyan-400" />,
                                title: 'Inovatif',
                                desc: 'Membawa ide baru dengan semangat eksplorasi dan keberanian mencoba hal baru.',
                                color: 'cyan',
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
                                title: 'Visioner',
                                desc: 'Melihat jauh ke depan — membangun strategi digital yang tahan waktu.',
                                color: 'indigo',
                            },
                            {
                                icon: <Compass className="w-6 h-6 text-teal-400" />,
                                title: 'Petualangan',
                                desc: 'Setiap proyek adalah perjalanan yang menantang dan menyenangkan.',
                                color: 'teal',
                            },
                            {
                                icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
                                title: 'Humanis',
                                desc: 'Membangun hubungan yang tulus, kolaboratif, dan penuh makna.',
                                color: 'purple',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                onMouseMove={handleMouseMove}
                                data-color={item.color}
                                className="card-reactive border-reactive backdrop-blur-xl rounded-2xl p-6 text-center"
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--card-border)'
                                }}
                            >
                                <div className="gloss-top"></div>
                                <div className="inner-shadow"></div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="p-3 rounded-xl" style={{ background: 'linear-gradient(to bottom right, var(--card-bg), var(--card-border))' }}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔹 4. Global Impact */}
                <div className="text-center mt-20 space-y-4">
                    <Globe2 className="w-10 h-10 text-cyan-400 mx-auto" />
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Kolaborasi & Dampak Global
                    </h2>
                    <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        Dari Palembang ke dunia 🌍 — Dyogaf telah bekerja sama dengan berbagai klien di bidang kreatif,
                        edukasi, dan bisnis digital. Kami hadir bukan hanya untuk membangun website,
                        tapi untuk menanamkan makna di dunia digital.
                    </p>
                </div>

                {/* 🔹 5. Penutup */}
                <div
                    onMouseMove={handleMouseMove}
                    className="footer-reactive relative mt-20 text-center max-w-3xl mx-auto p-6"
                >
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <Sparkles className="w-5 h-5 inline-block mr-2" style={{ color: 'var(--accent)' }} />
                        <span className="font-semibold" style={{ color: 'var(--accent)' }}>Dyogaf</span> — menjelajah dunia digital
                        dengan jiwa petualang dan hati yang bermakna. Setiap proyek adalah perjalanan menuju masa depan yang lebih indah. ✨
                    </p>
                </div>
            </div>
        </section>
    );
}
