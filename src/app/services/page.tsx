"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import {
  Globe,
  Rocket,
  Sparkles,
  ShieldCheck,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import {
  SiWordpress,
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

export default function ServicesPage() {
  const services = useMemo(
    () =>
      [
        {
          title: "Website Development",
          desc: "Kami membangun website profesional, cepat, dan memukau — dirancang untuk menonjolkan identitas brand dan mengoptimalkan pengalaman pengguna.",
          icon: <Globe className="w-7 h-7 text-cyan-400" />,
          features: ["UI/UX Modern", "SEO Optimization", "Performance Boost", "Custom Domain Integration"],
          color: "cyan",
        },
        {
          title: "WordPress Development",
          desc: "WordPress bukan sekadar CMS — bagi kami, ia adalah kanvas digital. Kami kustomisasi tema, plugin, dan sistem agar sepenuhnya mencerminkan karakter unik bisnis Anda.",
          icon: <SiWordpress className="w-7 h-7 text-[#21759B]" />,
          features: ["Custom Themes", "Plugin Development", "WooCommerce Integration", "Security Hardening"],
          color: "indigo",
        },
        {
          title: "Berdu Platform",
          desc: "Bangun sistem berbasis Berdu — solusi platform lokal yang kuat untuk website, toko online, dan dashboard bisnis.",
          icon: <Image src="/image/logo/berdu.jpeg" alt="Berdu" width={32} height={32} />,
          features: ["Admin Dashboard", "User Management", "Data Analytics", "Cloud Hosting"],
          color: "sky",
        },
      ] as const,
    []
  );

  const workflow = useMemo(
    () =>
      [
        {
          icon: <Lightbulb />,
          title: "Konsultasi & Ideasi",
          text: "Kami mulai dengan memahami visi, audiens, dan nilai bisnis Anda.",
          color: "cyan",
        },
        {
          icon: <Code />,
          title: "Desain & Pengembangan",
          text: "Kami ubah ide menjadi desain interaktif dan kode berkualitas tinggi.",
          color: "purple",
        },
        {
          icon: <ShieldCheck />,
          title: "Testing & Keamanan",
          text: "Setiap proyek diuji dengan ketat untuk menjamin performa dan stabilitas.",
          color: "teal",
        },
        {
          icon: <Rocket />,
          title: "Peluncuran & Dukungan",
          text: "Kami bantu Anda meluncurkan proyek dan menyediakan dukungan berkelanjutan.",
          color: "indigo",
        },
      ] as const,
    []
  );

  const tools = useMemo(
    () =>
      [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-6 h-6" style={{ color: "var(--foreground)" }} />,
        },
        {
          name: "Laravel",
          icon: <SiLaravel className="w-6 h-6" style={{ color: "#DC2626" }} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-6 h-6" style={{ color: "#06B6D4" }} />,
        },
        {
          name: "Framer Motion",
          icon: <SiFramer className="w-6 h-6" style={{ color: "#8B5CF6" }} />,
        },
        {
          name: "WordPress",
          icon: <SiWordpress className="w-6 h-6" style={{ color: "#21759B" }} />,
        },
        {
          name: "Berdu",
          icon: <Image src="/image/logo/berdu.jpeg" alt="Berdu" width={24} height={24} />,
        },
      ] as const,
    []
  );

  return (
    <section
      className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 py-28 bg-transparent overflow-visible"
      style={{ color: "var(--foreground)" }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col gap-24">
        <div className="text-center space-y-6">
          <span
            className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--accent)",
              borderWidth: "2px",
              color: "var(--accent)",
              boxShadow: "0 4px 20px var(--shadow-light)",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            Layanan Kami
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Jasa Web Developer Dyogaf Studio
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Di Dyogaf Digital Studio, kami tak sekadar membuat website. Kami menciptakan pengalaman digital yang berkarakter dan bermakna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              data-color={service.color}
              className="card-reactive p-8 flex flex-col justify-between h-full min-h-[480px]"
            >
              <div className="flex flex-col items-center text-center gap-4 flex-grow">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {service.desc}
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-left w-full">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl border hover:bg-white/10 transition"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Bagaimana Kami Bekerja
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step) => (
              <div
                key={step.title}
                data-color={step.color}
                className="workflow-card flex flex-col items-center justify-center text-center p-8 h-[320px]"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 w-7 h-7">{step.icon}</div>
                </div>
                <h3 className="font-semibold text-lg mt-4" style={{ color: "var(--foreground)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mt-2 max-w-[240px]" style={{ color: "var(--text-secondary)" }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Teknologi yang Kami Gunakan
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="tech-reactive flex items-center gap-3 px-5 py-3">
                {tool.icon}
                <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-reactive relative mt-20 text-center max-w-3xl mx-auto p-8">
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <Sparkles className="w-5 h-5 text-cyan-400 inline-block mr-2" />
            Setiap proyek adalah perjalanan — dan kami siap menjadi kompas digitalmu.
          </p>

          <Link
            href="/order"
            className="relative inline-flex items-center gap-3 px-8 py-4 mt-8 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all duration-500 ease-out hover:shadow-[0_0_35px_rgba(56,189,248,0.35)] overflow-hidden cta-solid"
          >
            <span className="relative z-10 flex items-center gap-3">
              Isi Form Order <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
