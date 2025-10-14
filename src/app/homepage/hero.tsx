'use client';

import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// ✨ Efek Typewriter
function DynamicFocus() {
    const texts = [
        'UI/UX Design Futuristik',
        'Web Development Modern',
        'Digital Marketing Kreatif',
        'Strategi Konten Efektif',
    ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        const speed = isDeleting ? 60 : 100;
        const pause = isDeleting ? 800 : 1500;

        const timeout = setTimeout(() => {
            if (!isDeleting && subIndex === current.length) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && subIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            } else {
                setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index]);

    return (
        <div className="relative h-7 overflow-hidden w-max">
            <span className="font-semibold text-indigo-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm text-sm sm:text-base">
                {texts[index].substring(0, subIndex)}
                <span className="animate-pulse text-indigo-400">|</span>
            </span>
        </div>
    );
}

// 🎬 HERO SECTION (Simplified, No Heavy Animation)
export default function Hero() {
    return (
        <section className="relative z-10 flex items-center justify-center min-h-[90vh] pt-28 sm:pt-32 px-4 sm:px-10 md:px-16 text-white overflow-hidden">
            <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14 max-w-6xl w-full">
                {/* 👋 Kiri: Deskripsi */}
                <div className="text-left md:pr-6 flex flex-col items-start">
                    <span className="text-xs sm:text-sm uppercase tracking-widest text-indigo-300 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full">
                        Solusi Digital
                    </span>

                    <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Dymas Yoga <br className="hidden sm:block" /> Febratama
                    </h1>

                    <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
                        Saya seorang <span className="text-indigo-400 font-semibold">Digital Marketer</span>,{' '}
                        <span className="text-indigo-400 font-semibold">Web Developer</span>, dan{' '}
                        <span className="text-indigo-400 font-semibold">Adventurer</span> yang suka menciptakan
                        pengalaman digital berkesan dengan sentuhan humanis dan futuristik.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm tracking-widest text-gray-300">
                        <span className="uppercase text-gray-400">Fokus saat ini:</span>
                        <DynamicFocus />
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-5 sm:px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] text-sm sm:text-base"
                        >
                            Lihat Proyekku <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 border border-white/20 backdrop-blur-md px-5 sm:px-6 py-3 rounded-full text-white/90 hover:bg-white/10 hover:scale-105 transition-transform text-sm sm:text-base"
                        >
                            <Play className="w-4 h-4 sm:w-5 sm:h-5" /> Profil Saya
                        </Link>
                    </div>
                </div>

                {/* 🎥 Kanan: Card Statistik */}
                <div className="grid grid-cols-2 gap-4 place-items-center">
                    {[
                        { label: 'Pengalaman', value: '+120', color: 'from-indigo-500 to-blue-400' },
                        { label: 'Skor Klien', value: '4.9★', color: 'from-cyan-400 to-indigo-400' },
                        { label: 'Interaktif', value: '3D', color: 'from-blue-400 to-indigo-500' },
                        { label: 'Dukungan', value: '24/7', color: 'from-indigo-400 to-cyan-400' },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 text-center shadow-[0_0_25px_rgba(99,102,241,0.1)] cursor-pointer transition-all hover:scale-105 hover:-translate-y-1"
                        >
                            <p className={`text-2xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                                {card.value}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">{card.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
