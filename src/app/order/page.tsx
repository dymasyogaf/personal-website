'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Globe,
    ShoppingCart,
    FileText,
    Send,
    CheckCircle,
    ArrowRight,
    Sparkles,
    User,
    Mail,
    Phone,
    MessageSquare,
    Package,
} from 'lucide-react';
import { SiWordpress } from 'react-icons/si';

type ServiceType = 'website' | 'wordpress' | 'berdu' | '';

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: ServiceType;
    budget: string;
    timeline: string;
    description: string;
}

export default function OrderPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const services = useMemo(() => [
        {
            id: 'website' as ServiceType,
            title: 'Website Development',
            desc: 'Website modern dengan Next.js, React, atau custom stack',
            icon: <Globe className="w-6 h-6 text-cyan-400" />,
            price: 'Mulai Rp 1.500.000',
            color: 'cyan',
        },
        {
            id: 'wordpress' as ServiceType,
            title: 'WordPress Development',
            desc: 'Website WordPress dengan tema & plugin custom',
            icon: <SiWordpress className="w-6 h-6 text-[#21759B]" />,
            price: 'Mulai Rp 800.000',
            color: 'indigo',
        },
        {
            id: 'berdu' as ServiceType,
            title: 'Berdu Platform',
            desc: 'Toko online & website bisnis berbasis Berdu',
            icon: <Image src="/image/logo/berdu.jpeg" alt="Berdu" width={24} height={24} className="rounded" />,
            price: 'Mulai Rp 500.000',
            color: 'purple',
        },
    ], []);


    const budgetOptions = useMemo(() => [
        { value: '500k-1jt', label: 'Rp 500.000 - Rp 1.000.000' },
        { value: '1jt-2jt', label: 'Rp 1.000.000 - Rp 2.000.000' },
        { value: '2jt-5jt', label: 'Rp 2.000.000 - Rp 5.000.000' },
        { value: '5jt+', label: 'Rp 5.000.000+' },
        { value: 'flexible', label: 'Fleksibel / Diskusi' },
    ], []);

    const timelineOptions = useMemo(() => [
        { value: '1-2minggu', label: '1-2 Minggu' },
        { value: '2-4minggu', label: '2-4 Minggu' },
        { value: '1-2bulan', label: '1-2 Bulan' },
        { value: 'flexible', label: 'Fleksibel' },
    ], []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (serviceId: ServiceType) => {
        setFormData(prev => ({ ...prev, service: serviceId }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Buat pesan WhatsApp
        const message = `
🌟 *ORDER BARU - Dyogaf Studio*

👤 *Nama:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *WhatsApp:* ${formData.phone}

📦 *Layanan:* ${services.find(s => s.id === formData.service)?.title || '-'}
💰 *Budget:* ${budgetOptions.find(b => b.value === formData.budget)?.label || '-'}
⏰ *Timeline:* ${timelineOptions.find(t => t.value === formData.timeline)?.label || '-'}

📝 *Deskripsi Proyek:*
${formData.description}
        `.trim();

        // Encode untuk URL WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/6283178772170?text=${encodedMessage}`;

        // Simulasi delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Redirect ke WhatsApp setelah 1.5 detik
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-28">
                <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
                        Order Terkirim! 🎉
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Anda akan diarahkan ke WhatsApp untuk konfirmasi...
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </section>
        );
    }


    return (
        <section className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 py-28" style={{ color: 'var(--foreground)' }}>
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center space-y-6">
                    <span
                        className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--accent)',
                            borderWidth: '2px',
                            color: 'var(--accent)',
                            boxShadow: '0 4px 20px var(--shadow-light)',
                        }}
                    >
                        <ShoppingCart className="w-4 h-4 inline-block mr-2" />
                        Form Order
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Pesan Layanan
                    </h1>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Isi form di bawah untuk memulai proyek digitalmu. Kami akan menghubungi kamu melalui WhatsApp untuk diskusi lebih lanjut.
                    </p>
                </div>

                {/* Service Selection */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Package className="w-5 h-5 text-cyan-400" />
                        Pilih Layanan
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {services.map((service, i) => (
                            <div
                                key={service.id}
                                data-color={service.color}
                                onClick={() => handleServiceSelect(service.id)}
                                className={`service-card cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                                    formData.service === service.id
                                        ? 'ring-2 ring-cyan-400 scale-[1.02]'
                                        : ''
                                }`}
                                style={{
                                    backgroundColor: 'var(--card-bg)',
                                    borderColor: formData.service === service.id ? 'var(--accent)' : 'var(--card-border)',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-semibold" style={{ color: 'var(--foreground)' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        {service.desc}
                                    </p>
                                    <span className="text-xs font-medium text-cyan-400">
                                        {service.price}
                                    </span>
                                    {formData.service === service.id && (
                                        <div className="absolute top-3 right-3">
                                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Order Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    {/* Personal Info */}
                    <div
                        data-color="cyan"
                        className="form-card p-8 rounded-2xl space-y-6"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                        }}
                    >
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <User className="w-5 h-5 text-cyan-400" />
                            Informasi Pribadi
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Nama Lengkap *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Masukkan nama lengkap"
                                        className="input-field w-full pl-11 pr-4 py-3 rounded-xl outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="email@example.com"
                                        className="input-field w-full pl-11 pr-4 py-3 rounded-xl outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Nomor WhatsApp *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="08xxxxxxxxxx"
                                        className="input-field w-full pl-11 pr-4 py-3 rounded-xl outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div
                        data-color="indigo"
                        className="form-card p-8 rounded-2xl space-y-6"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                        }}
                    >
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <FileText className="w-5 h-5 text-indigo-400" />
                            Detail Proyek
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Budget *
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    required
                                    className="input-field w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 cursor-pointer"
                                >
                                    <option value="">Pilih budget</option>
                                    {budgetOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Timeline *
                                </label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    required
                                    className="input-field w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 cursor-pointer"
                                >
                                    <option value="">Pilih timeline</option>
                                    {timelineOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                                <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    Deskripsi Proyek *
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-cyan-400" />
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        placeholder="Ceritakan tentang proyek yang ingin kamu buat, fitur yang dibutuhkan, referensi desain, dll..."
                                        className="input-field w-full pl-11 pr-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting || !formData.service}
                            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all duration-500 ease-out hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden cta-solid"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                                    Mengirim...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Kirim Order via WhatsApp
                                </>
                            )}
                        </button>

                        {!formData.service && (
                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                * Pilih layanan terlebih dahulu
                            </p>
                        )}
                    </div>
                </form>

                {/* CTA Footer */}
                <div
                    className="footer-reactive relative text-center max-w-3xl mx-auto p-8 rounded-2xl"
                    style={{
                        backgroundColor: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                    }}
                >
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <Sparkles className="w-5 h-5 text-cyan-400 inline-block mr-2" />
                        Punya pertanyaan sebelum order? Hubungi kami langsung untuk konsultasi gratis! 💬
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition"
                    >
                        Lihat Kontak Kami <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
