'use client';

import Hero from './homepage/hero';
import Highlight from './homepage/highlight';
import Layanan from './homepage/layanan';
import Projek from './homepage/project';
import Testimoni from './homepage/testimoni';
import Tentang from './homepage/tentang';
import Kontak from './homepage/kontak';
import LazySection from '@/components/LazySection';

// ✅ Background global dengan efek gradient animasi dan orbs lembut
export default function HomePage() {
  return (
    <>
      {/* 🌈 Background Global */}
      <section className="fixed inset-0 -z-10 animate-[gradientFlow_20s_ease_infinite bg-[length:300%_300%] overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, var(--background), var(--card), var(--background))' }}>
        {/* Orb Kiri */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[180px]"
             style={{ background: 'var(--orb-1)' }} />
        {/* Orb Kanan */}
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[200px]"
             style={{ background: 'var(--orb-2)' }} />
      </section>

      {/* 🌟 Section Components - Critical sections load immediately */}
      <Hero />
      <Highlight />
      
      {/* 🚀 Lazy loaded sections for better performance */}
      <LazySection rootMargin="100px">
        <Layanan />
      </LazySection>
      
      <LazySection rootMargin="100px">
        <Projek />
      </LazySection>
      
      <LazySection rootMargin="100px">
        <Testimoni />
      </LazySection>
      
      <LazySection rootMargin="100px">
        <Tentang />
      </LazySection>
      
      <LazySection rootMargin="50px">
        <Kontak />
      </LazySection>
    </>
  );
}
