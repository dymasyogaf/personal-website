'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo, useState, useRef } from 'react';
import "../../styles/homepage.css";

export default function Project() {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    // ✨ Efek kursor reaktif - throttled with requestAnimationFrame
    const rafId = useRef<number | null>(null);
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const target = e.currentTarget;
        const clientX = e.clientX;
        const clientY = e.clientY;

        if (!rafId.current) {
            rafId.current = requestAnimationFrame(() => {
                if (target) {
                    const rect = target.getBoundingClientRect();
                    target.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
                    target.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
                }
                rafId.current = null;
            });
        }
    }, []);

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

    const handleImageLoad = useCallback((index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    }, []);


    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 overflow-hidden" style={{ color: 'var(--foreground)' }}>
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect" style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    color: 'var(--accent)',
                    boxShadow: '0 4px 20px var(--shadow-light)',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
                    Karya Kami
                </span>
                <h2 className="mt-5 section-title">
                    Proyek Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Dyogaf</span>
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Kami mengubah ide menjadi pengalaman digital yang interaktif dan bernilai tinggi.
                </p>
            </div>

            {/* 💼 Grid Projects */}
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
                        className="card-reactive relative rounded-3xl overflow-hidden transition-all duration-500 group"
                        style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                    >
                        {/* 🖼️ Gambar */}
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
                                onError={() => handleImageLoad(i)} // Handle error to show placeholder
                            />
                        </div>

                        {/* 📄 Konten */}
                        <div className="p-6 relative z-10 content">
                            <span className="text-xs uppercase font-medium tracking-wider" style={{ color: 'var(--accent)' }}>
                                {project.tag}
                            </span>
                            <h3 className="mt-2 text-xl font-bold" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>

                            <Link
                                href={project.link}
                                className="inline-flex items-center mt-5 text-sm font-semibold text-cyan-400 hover:text-indigo-300 transition"
                            >
                                Lihat Proyek →
                            </Link>
                        </div>

                        {/* ✨ Hover Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"
                             style={{
                                 background: 'linear-gradient(to bottom, transparent, var(--card-bg))',
                                 opacity: 0.9
                             }} />
                    </motion.div>
                ))}
            </div>

            {/* 🎯 CTA */}
            <div className="text-center mt-16">
                <Link
                    href="/projects"
                    onMouseMove={handleMouseMove}
                    className="button-reactive from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base"
                >
                    Lihat Semua Proyek →
                </Link>
            </div>
        </section>
    );
}
