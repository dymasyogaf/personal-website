'use client';

import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Phone,
    Instagram,
    Facebook,
    Linkedin,
    Globe,
    Github,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';
import "../../styles/about.css"; // efek card-reactive tetap konsisten

export default function Kontak() {
    // 🌀 Efek mouse reactive border
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    }, []);

    return (
        <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300"
                >
                    Hubungi Saya
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-5 text-3xl sm:text-5xl font-extrabold"
                >
                    Siap Bekerja Sama{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Denganmu
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                >
                    Jangan ragu untuk menghubungi saya melalui media sosial atau WhatsApp untuk proyek, kolaborasi, atau sekadar diskusi seputar ide digital.
                </motion.p>
            </div>

            {/* 📞 Info Kontak */}
            <div className="max-w-3xl mx-auto flex flex-col justify-center space-y-8">
                {[
                    {
                        icon: <Phone className="w-6 h-6 text-cyan-400" />,
                        title: 'WhatsApp',
                        value: '+62 831-7877-2170',
                        href: 'https://wa.me/6283178772170',
                        color: 'cyan',
                    },
                    {
                        icon: <Mail className="w-6 h-6 text-indigo-400" />,
                        title: 'Email',
                        value: 'dymasyoga11@gmail.com',
                        href: 'mailto:dymasyoga11@gmail.com',
                        color: 'indigo',
                    },
                    {
                        icon: <MapPin className="w-6 h-6 text-purple-400" />,
                        title: 'Lokasi',
                        value: 'Palembang, Indonesia',
                        color: 'purple',
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        onMouseMove={handleMouseMove}
                        data-color={item.color}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="card-reactive border-reactive flex items-center gap-5 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-500"
                    >
                        <div className="gloss-top"></div>
                        <div className="inner-shadow"></div>

                        <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 rounded-xl">
                            {item.icon}
                        </div>

                        <div>
                            <h4 className="text-sm text-gray-400">{item.title}</h4>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    className="text-base sm:text-lg font-medium text-white hover:text-cyan-400 transition"
                                >
                                    {item.value}
                                </Link>
                            ) : (
                                <p className="text-base sm:text-lg font-medium text-white">
                                    {item.value}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}

                {/* 🌐 Sosial Media */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center flex-wrap gap-6 mt-10"
                >
                    {[
                        {
                            icon: <Instagram className="w-6 h-6 text-pink-400" />,
                            href: 'https://instagram.com/dymasyogaf',
                            label: 'Instagram',
                            color: 'pink',
                        },
                        {
                            icon: <Linkedin className="w-6 h-6 text-indigo-400" />,
                            href: 'https://linkedin.com/in/dymasyogaf',
                            label: 'LinkedIn',
                            color: 'indigo',
                        },
                        {
                            icon: <Facebook className="w-6 h-6 text-blue-400" />,
                            href: 'https://facebook.com/dymasyoga.50',
                            label: 'Facebook',
                            color: 'teal',
                        },
                        {
                            icon: <Github className="w-6 h-6 text-gray-300" />,
                            href: 'https://github.com/dymasyogaf',
                            label: 'GitHub',
                            color: 'gray',
                        },
                        {
                            icon: <Globe className="w-6 h-6 text-purple-400" />,
                            href: 'https://dymasyogaf.my.id',
                            label: 'Website',
                            color: 'purple',
                        },
                    ].map((social, i) => (
                        <div
                            key={i}
                            onMouseMove={handleMouseMove}
                            data-color={social.color}
                            className="card-reactive border-reactive p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer"
                        >
                            <Link href={social.href} target="_blank" title={social.label}>
                                {social.icon}
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
