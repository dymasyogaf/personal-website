'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import "../../styles/project.css";
import { Sparkles, Globe2, PenTool, MonitorSmartphone, Megaphone } from 'lucide-react';

export default function ProjectPage() {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    const projects = useMemo(() => [
        {
            title: "Website Portfolio Personal",
            desc: "Website elegan dengan konsep glassmorphism dan animasi halus. Dibangun dengan Next.js & Tailwind.",
            image: "/image/homepage/website-portfolio-personal.png",
            tag: "Creative Portfolio",
            link: "/projects/portfolio",
            color: "cyan",
        },
        {
            title: "Website Fundrising",
            desc: "Platform donasi & manajemen data wakaf berbasis WordPress, integrasi API dan dashboard custom.",
            image: "/image/homepage/website-fundrising.png",
            tag: "Nonprofit Tech",
            link: "/projects/wakaf",
            color: "indigo",
        },
        {
            title: "Landing Page Produk",
            desc: "Desain futuristik dengan CTA yang kuat, performa tinggi, dan SEO optimization maksimal.",
            image: "/image/homepage/landing-page-produk.png",
            tag: "Marketing Design",
            link: "/projects/landing",
            color: "teal",
        },
    ], []);

    const handleImageLoad = useCallback((index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    }, []);

    const narrativeData = useMemo(() => [
        {
            icon: <PenTool className="w-7 h-7 text-cyan-400" />,
            title: "Artikel SEO",
            desc: "Meningkatkan visibilitas website melalui artikel SEO-friendly. Mulai dari topik keislaman, rental kendaraan, hingga layanan hukum. Semua dengan strategi kata kunci yang terukur.",
            clients: "al-fatihah.com, rentalmotor99.com, birohukumindonesia.com",
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
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 text-white overflow-visible">
            <div className="relative max-w-7xl mx-auto flex flex-col gap-24">

                {/* 🔹 Header */}
                <div className="text-center space-y-6">
                    {/* 🌟 Badge kecil */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300"
                    >
                        Proyek yang Telah Dikerjakan
                    </motion.span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Siap Berkarya Bersamamu
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                        Setiap karya adalah perjalanan digital yang bermakna — membangun, menulis, dan merancang
                        pengalaman yang memberi nilai. Inilah jejak proyek Dyogaf yang menyatukan teknologi dan jiwa manusia.
                    </p>
                </div>

                {/* 🧭 Narasi Utama */}
                <div className="grid md:grid-cols-3 gap-10">
                    {narrativeData.map((item, i) => (
                        <div
                            key={i}
                            onMouseMove={handleMouseMove}
                            data-color={item.color}
                            className="card-reactive border-reactive bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
                        >
                            <div className="gloss-top"></div>
                            <div className="inner-shadow"></div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                <p className="text-xs text-gray-500 italic mt-2">Klien: {item.clients}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 💼 Grid Project Cards */}
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                            onMouseMove={handleMouseMove}
                            data-color={project.color}
                            className="card-reactive border-reactive relative rounded-3xl overflow-hidden transition-all duration-500 group"
                        >
                            <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                                <div className={`absolute inset-0 bg-gray-800/20 rounded-t-3xl ${loadedImages.has(i) ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition-all duration-500 ${loadedImages.has(i) ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    onLoad={() => handleImageLoad(i)}
                                    onError={() => handleImageLoad(i)}
                                />
                            </div>

                            <div className="p-6 relative z-10 content">
                                <span className={`text-xs uppercase text-${project.color}-400 font-medium tracking-wider`}>
                                    {project.tag}
                                </span>
                                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{project.desc}</p>

                                <Link
                                    href={project.link}
                                    className="inline-flex items-center mt-5 text-sm font-semibold text-cyan-400 hover:text-indigo-300 transition"
                                >
                                    Lihat Proyek →
                                </Link>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1120]/40 to-[#0b1120]/90 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
                        </motion.div>
                    ))}
                </div>

                {/* 🌍 Penutup */}
                <div className="text-center mt-20 space-y-4">
                    <Globe2 className="w-10 h-10 text-cyan-400 mx-auto" />
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Dari Palembang ke Dunia 🌍
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Dyogaf telah berkolaborasi dengan berbagai pihak — dari komunitas hingga lembaga — menciptakan karya digital yang hidup dan bermakna.
                    </p>
                </div>

                {/* ✨ CTA */}
                <div
                    onMouseMove={handleMouseMove}
                    data-color="cyan"
                    className="footer-reactive relative mt-20 text-center max-w-3xl mx-auto p-6"
                >
                    <p className="text-gray-300 text-base leading-relaxed">
                        <Sparkles className="w-5 h-5 text-cyan-400 inline-block mr-2" />
                        <span className="font-semibold text-cyan-400">Dyogaf</span> — menjelajah dunia digital dengan semangat kreatif,
                        jiwa petualang, dan hati yang bermakna.
                        Mari wujudkan proyek impianmu bersama kami. ✨
                    </p>
                </div>
            </div>
        </section>
    );
}
