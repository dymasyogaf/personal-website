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
      {/* 🌈 Background Global - GPU accelerated */}
      <section className="fixed inset-0 -z-10 overflow-hidden"
                 style={{
                   background: 'var(--background)',
                   willChange: 'auto',
                   contain: 'layout style paint'
                 }}>
        {/* Orb Kiri - Optimized */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none"
             style={{
               background: 'var(--orb-1)',
               transform: 'translate3d(0,0,0)',
               willChange: 'auto',
               contain: 'layout style paint'
             }} />
        {/* Orb Kanan - Optimized */}
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
             style={{
               background: 'var(--orb-2)',
               transform: 'translate3d(0,0,0)',
               willChange: 'auto',
               contain: 'layout style paint'
             }} />
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
