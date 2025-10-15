'use client';

import {
    Users,
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

export default function AboutPage() {
    return (
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 text-white overflow-hidden">
            {/* 🌌 Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d22] to-[#0a0a1a]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto flex flex-col gap-24">
                {/* 🔹 1. Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Tentang Dyogaf
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        <span className="text-cyan-400 font-semibold">Dyogaf Digital Studio</span> adalah ruang kolaboratif
                        yang lahir dari visi untuk menyatukan <strong>teknologi</strong>, <strong>nilai kemanusiaan</strong>,
                        dan <strong>makna kreatif</strong> dalam satu harmoni.
                        Kami percaya bahwa desain dan kode bisa lebih dari sekadar tampilan — mereka bisa bercerita, menginspirasi, dan berdampak.
                    </p>
                </div>

                {/* 🔹 2. Filosofi & Cerita */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Filosofi & Awal Mula
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Nama <span className="text-cyan-400 font-semibold">Dyogaf</span> berasal dari pendirinya —{" "}
                            <strong>Dymas Yoga Febratama</strong>, seorang digital creator yang percaya bahwa setiap karya digital
                            seharusnya memiliki <em>jiwa dan tujuan</em>.
                            Dari perjalanan pribadi sebagai desainer dan developer independen, Dyogaf tumbuh menjadi studio yang membantu brand, bisnis, dan individu untuk membangun identitas digital yang otentik.
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Kami tidak sekadar membuat website — kami merancang <strong>pengalaman digital</strong> yang hidup,
                            interaktif, dan bermakna, dengan sentuhan futuristik namun tetap humanis.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-2xl group-hover:blur-3xl transition-all" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg">
                            <p className="text-gray-300 text-base leading-relaxed">
                                “Kami percaya setiap pixel punya makna, setiap interaksi punya emosi, dan setiap proyek adalah ekspedisi
                                menuju masa depan yang lebih bernilai.”
                            </p>
                            <p className="mt-4 text-right text-cyan-400 font-semibold">— Tim Dyogaf</p>
                        </div>
                    </div>
                </div>

                {/* 🔹 3. Visi & Nilai */}
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-center mb-10">
                        Visi & Nilai Kami
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Kiri — Visi */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(99,102,241,0.1)]">
                            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Visi Kami</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Menjadi <strong>studio digital</strong> yang tidak hanya membangun website,
                                tetapi juga menghadirkan <em>experience</em> yang hidup — menghubungkan manusia, nilai, dan teknologi
                                dalam satu kesatuan yang bermakna.
                            </p>
                        </div>

                        {/* Kanan — Statistik */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { value: '3+', label: 'Tahun Pengalaman', icon: <Clock className="w-6 h-6 text-cyan-400" /> },
                                { value: '50+', label: 'Proyek & Klien Puas', icon: <FolderCheck className="w-6 h-6 text-indigo-400" /> },
                                { value: '24/7', label: 'Dukungan & Komunikasi', icon: <HeartHandshake className="w-6 h-6 text-teal-400" /> },
                                { value: '∞', label: 'Karya Bermakna', icon: <Infinity className="w-6 h-6 text-purple-400" /> },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col justify-center items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:scale-[1.03] transition-all"
                                >
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                                        {stat.icon}
                                    </div>
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
                                desc: 'Membawa ide-ide baru dengan semangat eksplorasi dan keberanian mencoba hal baru.',
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
                                title: 'Visioner',
                                desc: 'Melihat jauh ke depan — merancang strategi digital yang tahan waktu.',
                            },
                            {
                                icon: <Compass className="w-6 h-6 text-teal-400" />,
                                title: 'Petualangan',
                                desc: 'Setiap proyek adalah perjalanan kreatif yang menantang dan menyenangkan.',
                            },
                            {
                                icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
                                title: 'Humanis',
                                desc: 'Kami membangun hubungan yang tulus, kolaboratif, dan penuh makna.',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition-all text-center"
                            >
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
                        Dari Palembang ke dunia 🌍 — Dyogaf telah bekerja dengan berbagai klien dari sektor kreatif, pendidikan, dan bisnis digital.
                        Kami hadir bukan hanya untuk membangun website, tapi juga membangun <strong>makna</strong> di dunia digital.
                    </p>
                </div>

                {/* 🔹 5. Penutup */}
                <div className="relative mt-20 text-center max-w-3xl mx-auto">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-3xl rounded-full" />
                    <p className="relative text-gray-300 text-base leading-relaxed backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg">
                        <Sparkles className="w-5 h-5 text-cyan-400 inline-block mr-2" />
                        <span className="font-semibold text-cyan-400">Dyogaf</span> — tempat di mana kreativitas, teknologi, dan nilai hidup bersatu.
                        Setiap proyek adalah perjalanan spiritual dan teknologis menuju karya yang bermakna. ✨
                    </p>
                </div>
            </div>
        </section>
    );
}
