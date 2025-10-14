'use client';

import Hero from './homepage/hero';
import Layanan from './homepage/layanan';
import Tentang from './homepage/tentang';
import Kontak from './homepage/kontak';

// ✅ Background global dengan efek gradient animasi dan orbs lembut
export default function HomePage() {
  return (
    <>
      {/* 🌈 Background Global */}
      <section className="fixed inset-0 -z-10 animate-[gradientFlow_20s_ease_infinite] bg-[linear-gradient(135deg,#0f172a,#1e293b,#0a0f24)] bg-[length:300%_300%] overflow-hidden">
        {/* Orb Kiri */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[180px]" />
        {/* Orb Kanan */}
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-cyan-500/25 rounded-full blur-[200px]" />
      </section>

      {/* 🌟 Section Components */}
      <Hero />
      <Layanan />
      <Tentang />
      <Kontak />
    </>
  );
}
