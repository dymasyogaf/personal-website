'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Sparkles, Globe2, PenTool, MonitorSmartphone, Megaphone } from 'lucide-react';

export default function ProjectPage() {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    

    const projects = useMemo(() => [
        {
            title: "Website Portfolio Personal",
            desc: "Website elegan dengan konsep glassmorphism dan animasi halus. Dibangun dengan Next.js & Tailwind.",
            image: "/image/homepage/website-portfolio-personal.png",
            tag: "Creative Portfolio",
            link: "https://dymasyogaf.is-a.dev/",
            color: "cyan",
        },
        {
            title: "Website Fundrising",
            desc: "Platform donasi & manajemen data wakaf berbasis WordPress, integrasi API dan dashboard custom.",
            image: "/image/homepage/website-fundrising.png",
            tag: "Nonprofit Tech",
            link: "https://alquransantri.com",
            color: "indigo",
        },
        {
            title: "Landing Page Produk",
            desc: "Desain futuristik dengan CTA yang kuat, performa tinggi, dan SEO optimization maksimal.",
            image: "/image/homepage/landing-page-produk.png",
            tag: "Marketing Design",
            link: "https://alquransantri.org/",
            color: "teal",
        },
    ], []);

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    };

    const narrativeData = useMemo(() => [
        {
            icon: <PenTool className="w-7 h-7 text-cyan-400" />,
            title: "Artikel SEO",
            desc: "Meningkatkan visibilitas website melalui artikel SEO-friendly. Mulai dari topik keislaman, rental kendaraan, hingga layanan hukum. Semua dengan strategi kata kunci yang terukur.",
            clients: "alfatihah.com, rentalmotor99.com, birohukumindonesia.com",
            color: "cyan",
        },
        {
            icon: <MonitorSmartphone className="w-7 h-7 text-indigo-400" />,
            title: "Website Development",
            desc: "Membangun website modern, cepat, dan mobile-friendly. Fokus pada pengalaman pengguna dan performa, dari portal berita hingga platform milenial.",
            clients: "WordPress, Next.js, Laravel, Elementor",
            color: "indigo",
        },
        {
            icon: <Megaphone className="w-7 h-7 text-purple-400" />,
            title: "Landing Page Konversi",
            desc: "Desain landing page futuristik dengan CTA kuat untuk karantina Qur'an, pesantren, hingga platform qurban — tampil menarik dan siap konversi.",
            clients: "Program Karantina Qur'an, Gerakan Wakaf Sumur",
            color: "purple",
        },
    ], []);

    return (
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 overflow-visible"
                 style={{ color: 'var(--foreground)' }}>
            <div className="relative max-w-7xl mx-auto flex flex-col gap-24">

                {/* 🔹 Header */}
                <div className="text-center space-y-6">
                    {/* 🌟 Badge kecil */}
                    <span
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
                        Proyek yang Telah Dikerjakan
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Siap Berkarya Bersamamu
                    </h1>
                    <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Setiap karya adalah perjalanan digital yang bermakna — membangun, menulis, dan merancang
                        pengalaman yang memberi nilai. Inilah jejak proyek Dyogaf yang menyatukan teknologi dan jiwa manusia.
                    </p>
                </div>

                {/* 🧭 Narasi Utama */}
                <div className="grid md:grid-cols-3 gap-10">
                    {narrativeData.map((item, i) => (
                        <div
                            key={i}
                            data-color={item.color}
                            className="card-reactive border-reactive backdrop-blur-xl rounded-2xl p-8 text-center"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)'
                            }}
                        >
                            <div className="gloss-top"></div>
                            <div className="inner-shadow"></div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-3 rounded-xl icon-swatch">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                                <p className="text-xs italic mt-2" style={{ color: 'var(--text-muted)' }}>Klien: {item.clients}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 💼 Grid Project Cards */}
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            data-color={project.color}
                            className="card-reactive border-reactive relative rounded-3xl overflow-hidden transition-all duration-500 group"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)'
                            }}
                        >
                            <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                                <div className={`absolute inset-0 rounded-t-3xl ${loadedImages.has(i) ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                                     style={{ backgroundColor: 'var(--background)' }} />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition-all duration-500 ${loadedImages.has(i) ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
                                    style={{ mixBlendMode: 'multiply' }}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onLoad={() => handleImageLoad(i)}
                                    onError={() => handleImageLoad(i)}
                                />
                            </div>

                            <div className="p-6 relative z-10 content">
                                <span className="text-xs uppercase font-medium tracking-wider" style={{ color: 'var(--accent)' }}>
                                    {project.tag}
                                </span>
                                <h3 className="mt-2 text-xl font-bold" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{project.desc}</p>

                                <Link
                                    href={project.link}
                                    className="inline-flex items-center mt-5 text-sm font-semibold text-cyan-400 hover:text-indigo-300 transition"
                                >
                                    Lihat Proyek →
                                </Link>
                            </div>

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"
                                 style={{
                                     background: 'linear-gradient(to bottom, transparent, var(--card-bg))',
                                     opacity: 0.9
                                 }} />
                        </div>
                    ))}
                </div>

                {/* 🌍 Penutup */}
                <div className="text-center mt-20 space-y-4">
                    <Globe2 className="w-10 h-10 text-cyan-400 mx-auto" />
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Dari Palembang ke Dunia 🌍
                    </h2>
                    <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        Dyogaf telah berkolaborasi dengan berbagai pihak — dari komunitas hingga lembaga — menciptakan karya digital yang hidup dan bermakna.
                    </p>
                </div>

                {/* ✨ CTA */}
                <div
                    data-color="cyan"
                    className="footer-reactive relative mt-20 text-center max-w-3xl mx-auto p-6"
                >
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <Sparkles className="w-5 h-5 inline-block mr-2" style={{ color: 'var(--accent)' }} />
                        <span className="font-semibold" style={{ color: 'var(--accent)' }}>Dyogaf</span> — menjelajah dunia digital dengan semangat kreatif,
                        jiwa petualang, dan hati yang bermakna.
                        Mari wujudkan proyek impianmu bersama kami. ✨
                    </p>
                </div>
            </div>
        </section>
    );
}
