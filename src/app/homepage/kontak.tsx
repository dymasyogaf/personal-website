'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Kontak() {
    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 text-white overflow-hidden">
            {/* 🌟 Heading */}
            <div className="text-center mb-16">
                <span className="px-5 py-1 text-xs uppercase tracking-[0.25em] bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-gray-300">
                    Hubungi Saya
                </span>

                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold">
                    Siap Bekerja Sama <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Denganmu</span>
                </h2>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    Jangan ragu untuk menghubungi saya! Baik untuk proyek, kolaborasi, atau sekadar diskusi seputar ide digital.
                </p>
            </div>

            {/* 📬 Grid Kontak */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                {/* 📝 Kiri: Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="text-sm text-gray-300">Nama</label>
                            <input
                                type="text"
                                className="w-full mt-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition"
                                placeholder="Masukkan nama kamu"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300">Email</label>
                            <input
                                type="email"
                                className="w-full mt-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition"
                                placeholder="contoh@email.com"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="text-sm text-gray-300">Pesan</label>
                        <textarea
                            rows={5}
                            className="w-full mt-2 bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none transition resize-none"
                            placeholder="Tulis pesan kamu di sini..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold py-3 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-transform"
                    >
                        Kirim Pesan
                    </button>
                </motion.form>

                {/* 📞 Kanan: Info Kontak */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    {[
                        {
                            icon: <Mail className="w-6 h-6 text-cyan-400" />,
                            title: 'Email',
                            value: 'dymasyoga02@gmail.com',
                            href: 'mailto:dymasyoga02@gmail.com',
                        },
                        {
                            icon: <Phone className="w-6 h-6 text-cyan-400" />,
                            title: 'Telepon / WhatsApp',
                            value: '+62 812-3456-7890',
                            href: 'https://wa.me/6281234567890',
                        },
                        {
                            icon: <MapPin className="w-6 h-6 text-cyan-400" />,
                            title: 'Lokasi',
                            value: 'Palembang, Indonesia',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all duration-500"
                        >
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
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
