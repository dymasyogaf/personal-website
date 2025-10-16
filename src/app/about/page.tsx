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
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 text-white overflow-hidden">
            {/* 🌌 Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d22] to-[#0a0a1a]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.12),transparent_70%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto flex flex-col gap-24">
                {/* 🔹 1. Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Tentang Dyogaf
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        <span className="text-cyan-400 font-semibold">Dyogaf Digital Studio</span> adalah ruang kolaboratif
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
                        <p className="text-gray-300 leading-relaxed text-base">
                            Nama <span className="text-cyan-400 font-semibold">Dyogaf</span> diambil dari pendirinya,
                            <strong> Dymas Yoga Febratama</strong> — seorang digital creator dan petualang
                            yang percaya bahwa setiap karya digital harus punya <em>jiwa</em> dan <em>arah</em>.
                            Dari perjalanan mandiri hingga kolaborasi global,
                            Dyogaf tumbuh sebagai studio yang menghadirkan teknologi dengan rasa kemanusiaan.
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Kami tidak hanya membangun website, tapi merancang <strong>pengalaman digital</strong> —
                            hidup, interaktif, dan menyentuh sisi manusia. Setiap proyek adalah ekspedisi kreatif,
                            dan setiap piksel adalah langkah menuju makna.
                        </p>
                    </div>

                    <div
                        onMouseMove={handleMouseMove}
                        data-color="cyan"
                        className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg transition-all"
                    >
                        <div className="gloss-top"></div>
                        <div className="inner-shadow"></div>
                        <p className="text-gray-300 text-base leading-relaxed">
                            “Kami percaya setiap pixel punya makna, setiap interaksi punya emosi,
                            dan setiap proyek adalah ekspedisi menuju masa depan yang lebih bernilai.”
                        </p>
                        <p className="mt-4 text-right text-cyan-400 font-semibold">— Tim Dyogaf</p>
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
                            className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                        >
                            <div className="gloss-top"></div>
                            <div className="inner-shadow"></div>
                            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Visi Kami</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
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
                                    className="card-reactive border-reactive flex flex-col justify-center items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
                                >
                                    <div className="gloss-top"></div>
                                    <div className="inner-shadow"></div>
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">{stat.icon}</div>
                                    <h3 className="text-3xl font-bold text-cyan-300">{stat.value}</h3>
                                    <p className="text-gray-400 text-xs tracking-wider uppercase">{stat.label}</p>
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
                                className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                            >
                                <div className="gloss-top"></div>
                                <div className="inner-shadow"></div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
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
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
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
                    <p className="text-gray-300 text-base leading-relaxed">
                        <Sparkles className="w-5 h-5 text-cyan-400 inline-block mr-2" />
                        <span className="font-semibold text-cyan-400">Dyogaf</span> — menjelajah dunia digital
                        dengan jiwa petualang dan hati yang bermakna. Setiap proyek adalah perjalanan menuju masa depan yang lebih indah. ✨
                    </p>
                </div>

            </div>
        </section>
    );
}
