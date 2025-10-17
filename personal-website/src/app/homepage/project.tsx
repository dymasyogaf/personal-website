'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import "../../styles/homepage.css";

export default function Project() {
    // ✨ Efek kursor reaktif
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }, []);

    const projects = [
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
    ];


    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Karya Kami
                </span>
                <h2 className="mt-5 section-title">
                    Proyek Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Dyogaf</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
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
                    >
                        {/* 🖼️ Gambar */}
                        <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>

                        {/* 📄 Konten */}
                        <div className="p-6 relative z-10 content">
                            <span className="text-xs uppercase text-cyan-400 font-medium tracking-wider">
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

                        {/* ✨ Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1120]/40 to-[#0b1120]/90 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />
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
