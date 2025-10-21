'use client';

import { ArrowRight, Play, Sparkles, Globe2, Compass, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback, useMemo } from 'react';
import "../../styles/homepage.css";

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
    <div className="relative h-7 overflow-hidden w-max">
      <span className="font-semibold text-cyan-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm text-sm sm:text-base">
        {texts[index].substring(0, subIndex)}
        <span className="animate-pulse text-cyan-400">|</span>
      </span>
    </div>
  );
}

export default function Hero() {
  // 🌌 Efek glow interaktif (cursor)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
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
    <section className="relative z-10 flex items-center justify-center min-h-[90vh] pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-8 md:px-16 text-white overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

        {/* 🧭 KIRI — Deskripsi */}
        <div className="text-left flex flex-col items-start space-y-6">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-300 bg-white/10 border border-white/10 backdrop-blur-md px-4 py-1 rounded-full">
            Studio Digital Kreatif
          </span>

          <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Dyogaf
            <br className="hidden sm:block" />
            <span className="block mt-1 text-white/70 text-[1.3rem] sm:text-[1.6rem] md:text-[1.9rem] font-light">
              Digital Studio for the Future
            </span>
          </h1>

          <p className="text-[0.9rem] sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md sm:max-w-lg">
            Kami membangun <span className="text-cyan-400 font-semibold">website</span> dan{' '}
            <span className="text-cyan-400 font-semibold">identitas digital</span> dengan sentuhan futuristik
            dan nilai humanis. Setiap proyek adalah ekspedisi kreatif — menggabungkan teknologi, desain, dan makna.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm tracking-widest text-gray-300">
            <span className="uppercase text-gray-400">Fokus saat ini:</span>
            <DynamicFocus />
          </div>

          {/* 🎯 CTA */}
          <div className="pt-3 flex flex-wrap gap-3">
            <Link
              href="/projects"
              onMouseMove={handleMouseMove}
              className="button-reactive from-cyan-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base"
            >
              Jelajahi Karya Kami <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>

            <Link
              href="/about"
              onMouseMove={handleMouseMove}
              className="button-reactive border border-white/20 text-white/90 px-6 py-3 rounded-full text-sm sm:text-base backdrop-blur-md"
              data-color="secondary"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Tentang Dyogaf
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
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20">
                  {card.icon}
                </div>
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {card.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 tracking-wide">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
