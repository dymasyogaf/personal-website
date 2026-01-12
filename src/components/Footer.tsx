'use client';

import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="footer-light relative z-10 py-20 px-6 sm:px-12 backdrop-blur-xl glow-effect"
            style={{
                color: 'var(--foreground)',
                borderTop: '1px solid var(--border)',
                backgroundColor: 'var(--card-bg)',
                boxShadow: '0 -4px 20px var(--shadow-light)'
            }}
        >
            {/* ✨ Garis cahaya lembut di atas footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {/* 🧭 Profil */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Dyogaf Studio
                    </h3>
                    <p className="text-sm leading-relaxed text-shadow-theme" style={{ color: 'var(--text-secondary)' }}>
                        Dyogaf Studio adalah ruang kolaboratif yang lahir dari semangat eksplorasi, teknologi, dan kemanusiaan. Kami percaya bahwa desain dan kode bukan hanya tampilan, tapi perjalanan yang penuh makna dan nilai.
                    </p>
                </div>

                {/* 🔗 Navigasi */}
                <div>
                    <h4 className="footer-accent text-lg font-semibold mb-4">Navigasi</h4>
                    <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {[
                            { href: '/', label: 'Beranda' },
                            { href: '/projects', label: 'Proyek' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/about', label: 'Tentang Saya' },
                            { href: '/contact', label: 'Kontak' },
                        ].map((item, i) => (
                            <li
                                key={i}
                            >
                                <Link href={item.href} className="hover:text-cyan-400 transition hover-theme" style={{ color: 'var(--text-secondary)' }}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 📞 Kontak & Sosial Media */}
                <div>
                    <h4 className="footer-accent text-lg font-semibold mb-4">Hubungi Saya</h4>
                    <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <li className="flex items-center gap-3">
                            <Mail className="footer-accent w-4 h-4" />
                            <Link
                                href="mailto:dymasyoga11@gmail.com"
                                className="hover:text-cyan-400 transition hover-theme"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                dymasyoga11@gmail.com
                            </Link>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="footer-accent w-4 h-4" />
                            <span style={{ color: 'var(--text-secondary)' }}>Palembang, Indonesia</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="footer-accent w-4 h-4" />
                            <Link
                                href="https://wa.me/6283178772170"
                                target="_blank"
                                className="hover:text-cyan-400 transition hover-theme"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                +62 831-7877-2170
                            </Link>
                        </li>
                    </ul>

                    {/* 🔗 Social Media */}
                    <div className="flex gap-4 mt-6">
                        {[
                            { icon: <Github className="w-5 h-5" />, href: 'https://github.com/dymasyogaf' },
                            { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/dymasyogaf/' },
                            { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/dymasyogaf' },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="p-2 rounded-full transition-all hover:scale-110 hover-theme glow-effect"
                                style={{
                                    color: 'var(--text-secondary)',
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: 'var(--card-border)',
                                    border: '1px solid',
                                    boxShadow: '0 2px 8px var(--shadow-light)'
                                }}
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* 🧡 Garis bawah footer */}
            <div
                className="mt-12 pt-6 text-center text-xs tracking-wider text-shadow-theme"
                style={{
                    borderTop: '1px solid var(--border)',
                    color: 'var(--text-muted)'
                }}
            >
                (c) {new Date().getFullYear()} Dyogaf Studio. All rights reserved.
            </div>
        </footer>
    );
}
