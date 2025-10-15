'use client';

import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative z-10 text-white py-20 px-6 sm:px-12 border-t border-white/10 bg-transparent backdrop-blur-xl">
            {/* ✨ Garis cahaya lembut di atas footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            />

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {/* 🧭 Profil */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Dyogaf Studio
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Dymas Yoga Febratama — Digital Marketer, Web Developer (WordPress),
                        dan Adventurer.  
                        <br />
                        Membangun ekosistem digital yang humanis, modern, dan berkarakter.
                    </p>
                </div>

                {/* 🔗 Navigasi */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-indigo-300">Navigasi</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {[
                            { href: '/', label: 'Beranda' },
                            { href: '/projects', label: 'Proyek' },
                            { href: '/about', label: 'Tentang Saya' },
                            { href: '/contact', label: 'Kontak' },
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                whileHover={{ x: 6 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Link href={item.href} className="hover:text-cyan-400 transition">
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* 📞 Kontak & Sosial Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-indigo-300">Hubungi Saya</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            <Link
                                href="mailto:dymasyoga02@gmail.com"
                                className="hover:text-cyan-400 transition"
                            >
                                dymasyoga02@gmail.com
                            </Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            Palembang, Indonesia
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-cyan-400" />
                            <Link
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                className="hover:text-cyan-400 transition"
                            >
                                +62 812-3456-7890
                            </Link>
                        </li>
                    </ul>

                    {/* 🔗 Social Media */}
                    <div className="flex gap-4 mt-6">
                        {[
                            { icon: <Github className="w-5 h-5" />, href: 'https://github.com/' },
                            { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/' },
                            { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/' },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 text-gray-300 hover:text-cyan-400"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* 🧡 Garis bawah footer */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-xs tracking-wider"
            >
                © {new Date().getFullYear()} Dymas Yoga Febratama — All rights reserved.
            </motion.div>
        </footer>
    );
}
