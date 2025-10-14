'use client';

import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-10 text-white py-16 px-6 sm:px-12 border-t border-white/10 backdrop-blur-xl bg-white/5">
            {/* Efek cahaya lembut di belakang footer */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {/* 🧭 Kolom 1 */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Dymas Yoga Febratama
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Digital Marketer, Web Developer, dan Adventurer yang menciptakan
                        pengalaman digital berkesan dengan sentuhan humanis dan futuristik.
                    </p>
                </div>

                {/* 🔗 Kolom 2 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-indigo-300">Navigasi</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-cyan-400 transition">Beranda</Link></li>
                        <li><Link href="/projects" className="hover:text-cyan-400 transition">Proyek</Link></li>
                        <li><Link href="/about" className="hover:text-cyan-400 transition">Tentang Saya</Link></li>
                        <li><Link href="/contact" className="hover:text-cyan-400 transition">Kontak</Link></li>
                    </ul>
                </div>

                {/* 📞 Kolom 3 */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-indigo-300">Hubungi Saya</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-indigo-400" />
                            dymasyoga@example.com
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            Palembang, Indonesia
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-blue-400" />
                            +62 812-3456-789
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
            <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-xs tracking-wider">
                © {new Date().getFullYear()} Dymas Yoga Febratama — All rights reserved.
            </div>
        </footer>
    );
}
