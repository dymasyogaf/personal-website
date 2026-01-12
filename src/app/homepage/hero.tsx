'use client';

import { ArrowRight, Play, Sparkles, Globe2, Compass, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';

// ✨ Efek Typewriter
function DynamicFocus() {
  const texts = useMemo(() => [
    'Website Futuristik',
    'Digital Branding Humanis',
    'Web Development Modern',
    'Strategi Kreatif & SEO',
  ], []);
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = isDeleting ? 60 : 100;
    const pause = isDeleting ? 800 : 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts]);

  return (
    <div className="relative h-8 overflow-hidden w-max">
      <span className="font-semibold px-3 py-1 rounded-full backdrop-blur-sm text-sm sm:text-base"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: '0 2px 8px var(--shadow-light)'
            }}>
        {texts[index].substring(0, subIndex)}
        <span className="animate-pulse" style={{ color: 'var(--accent)' }}>|</span>
      </span>
    </div>
  );
}

export default function Hero() {
  // 🌌 Efek glow interaktif (cursor) - throttled with requestAnimationFrame
  const rafId = useRef<number | null>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(() => {
        if (target) {
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
          target.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
        }
        rafId.current = null;
      });
    }
  }, []);

  const cardData = useMemo(() => [
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      label: 'Inovasi',
      value: 'Futuristik',
      color: 'cyan',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
      label: 'Kreativitas',
      value: 'Tanpa Batas',
      color: 'indigo',
    },
    {
      icon: <Compass className="w-6 h-6 text-teal-400" />,
      label: 'Petualangan',
      value: 'Digital',
      color: 'teal',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-purple-400" />,
      label: 'Klien',
      value: 'Global',
      color: 'purple',
    },
  ], []);

  return (
    <section className="relative z-10 flex items-center justify-center min-h-[90vh] pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-8 md:px-16 overflow-hidden"
             style={{ color: 'var(--foreground)' }}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

        {/* 🧭 KIRI — Deskripsi */}
        <div className="text-left flex flex-col items-start space-y-6">
          <span className="inline-block px-5 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md rounded-full border glow-effect"
                style={{
                  color: 'var(--accent)',
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--accent)',
                  borderWidth: '2px',
                  boxShadow: '0 4px 20px var(--shadow-light)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}>
            Studio Digital Kreatif
          </span>

          <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Dyogaf Studio
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-1 text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] font-light"
                  style={{ color: 'var(--foreground)' }}>
              Web Developer untuk Brand Modern
            </span>
          </h1>

          <p className="text-[0.9rem] sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg"
             style={{ color: 'var(--text-secondary)' }}>
            Kami membangun <span className="font-semibold" style={{ color: 'var(--accent)' }}>website</span> dan{' '}
            <span className="font-semibold" style={{ color: 'var(--accent)' }}>identitas digital</span> untuk brand modern.
            Dyogaf Studio fokus sebagai Web Developer dengan sentuhan futuristik dan nilai humanis. Setiap proyek adalah ekspedisi kreatif yang menggabungkan teknologi, desain, dan makna.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm tracking-widest"
               style={{ color: 'var(--text-secondary)' }}>
            <span className="uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Fokus saat ini:</span>
            <DynamicFocus />
          </div>

          {/* 🎯 CTA */}
          <div className="pt-6 flex flex-wrap gap-4">
            <Link
              href="/order"
              onMouseMove={handleMouseMove}
              className="button-reactive px-6 py-3 rounded-full font-semibold text-base"
              style={{
                background: 'linear-gradient(to right, var(--gradient-from), var(--gradient-to))',
                color: 'white'
              }}
            >
              Pesan Sekarang <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="https://dymasyogaf.is-a.dev/"
              onMouseMove={handleMouseMove}
              className="button-reactive px-6 py-3 rounded-full text-base"
              data-color="secondary"
              style={{
                border: '1px solid var(--card-border)',
                color: 'var(--foreground)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              Lihat Portfolio
            </Link>
            <Link
              href="/blog"
              onMouseMove={handleMouseMove}
              className="button-reactive px-6 py-3 rounded-full text-base"
              data-color="secondary"
              style={{
                border: '1px solid var(--card-border)',
                color: 'var(--foreground)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              Baca Blog
            </Link>
          </div>
        </div>

        {/* ⚡ KANAN — 4 Card Kecil */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-md mx-auto">
          {cardData.map((card, index) => (
            <div
              key={index}
              data-color={card.color}
              className="card-reactive p-5 sm:p-6 text-center transition-all w-full"
              onMouseMove={handleMouseMove}
            >
              <div className="content flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl"
                     style={{
                       background: 'var(--card-bg)',
                       border: '1px solid var(--card-border)',
                       boxShadow: '0 2px 8px var(--shadow-light)'
                     }}>
                  {card.icon}
                </div>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {card.value}
                </p>
                <p className="text-xs sm:text-sm tracking-wide font-medium" style={{ color: 'var(--text-muted)' }}>{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
