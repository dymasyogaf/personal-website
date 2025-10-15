'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import "../../styles/homepage.css";

export default function Project() {
    const projects = [
        {
            title: "Website Portfolio Personal",
            desc: "Website elegan dengan konsep glassmorphism dan animasi halus. Dibangun dengan Next.js & Tailwind.",
            image: "/images/project1.webp",
            tag: "Creative Portfolio",
            link: "/projects/portfolio",
        },
        {
            title: "Sistem Wakaf Digital",
            desc: "Platform donasi & manajemen data wakaf berbasis WordPress, integrasi API dan dashboard custom.",
            image: "/images/project2.webp",
            tag: "Nonprofit Tech",
            link: "/projects/wakaf",
        },
        {
            title: "Landing Page Produk",
            desc: "Desain futuristik dengan CTA yang kuat, performa tinggi, dan SEO optimization maksimal.",
            image: "/images/project3.webp",
            tag: "Marketing Design",
            link: "/projects/landing",
        },
    ];

    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* ✨ Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Karya Kami
                </span>
                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-snug">
                    Proyek Digital <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Dyogaf</span>
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
                        className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]"
                    >
                        <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>

                        <div className="p-6 relative z-10">
                            <span className="text-xs uppercase text-cyan-400 font-medium">{project.tag}</span>
                            <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">{project.desc}</p>

                            <Link
                                href={project.link}
                                className="inline-block mt-5 text-sm font-semibold text-cyan-400 hover:text-indigo-300 transition"
                            >
                                Lihat Proyek →
                            </Link>
                        </div>

                        {/* 🔮 Overlay Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1120]/40 to-[#0b1120]/90 opacity-0 group-hover:opacity-100 transition duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                    Lihat Semua Proyek
                </Link>
            </div>
        </section>
    );
}
