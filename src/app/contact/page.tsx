'use client';

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

export default function Kontak() {
    // 🌀 Efek mouse reactive border

    return (
        <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 overflow-hidden"
                 style={{ color: 'var(--foreground)' }}>
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
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
                    Hubungi Saya
                </span>

                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
                    Siap Bekerja Sama{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Denganmu
                    </span>
                </h2>

                <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Jangan ragu untuk menghubungi saya melalui media sosial atau WhatsApp untuk proyek, kolaborasi, atau sekadar diskusi seputar ide digital.
                </p>
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
                    <div
                        key={i}
                        data-color={item.color}
                        className="card-reactive border-reactive flex items-center gap-5 backdrop-blur-xl p-5 rounded-2xl transition-all duration-500"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--card-border)'
                        }}
                    >
                        <div className="gloss-top"></div>
                        <div className="inner-shadow"></div>

                        <div className="p-3 rounded-xl icon-swatch">
                            {item.icon}
                        </div>

                        <div>
                            <h4 className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.title}</h4>
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    className="text-base sm:text-lg font-medium hover:text-cyan-400 transition"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {item.value}
                                </Link>
                            ) : (
                                <p className="text-base sm:text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                                    {item.value}
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                {/* 🌐 Sosial Media */}
                <div className="flex justify-center flex-wrap gap-6 mt-10">
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
                            data-color={social.color}
                            className="card-reactive border-reactive p-4 rounded-xl backdrop-blur-md transition-all duration-500 cursor-pointer"
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderColor: 'var(--card-border)'
                            }}
                        >
                            <Link href={social.href} target="_blank" title={social.label}>
                                {social.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
