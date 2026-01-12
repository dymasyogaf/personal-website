'use client';

import Link from "next/link";
import {  } from "react";

const posts = [
  {
    slug: "cara-membuat-website-pertama",
    title: "Cara Membuat Website Pertama untuk Pemula (Step by Step)",
    desc: "Panduan step by step untuk pemula: dari tujuan, domain, hingga SEO-friendly.",
    date: "2026-01-06",
    read: "6 min",
    tags: ["Pemula", "Jasa Web", "Web Developer Palembang"],
    color: "cyan",
  },
  {
    slug: "apa-itu-web-developer",
    title: "Apa Itu Web Developer? Tugas, Skill, dan Cara Mulai",
    desc: "Penjelasan sederhana tentang web developer, skill yang dibutuhkan, dan langkah pertama belajar.",
    date: "2026-01-06",
    read: "5 min",
    tags: ["Web Developer", "Pemula", "Karier"],
    color: "indigo",
  },
  {
    slug: "jasa-web-vs-bikin-sendiri",
    title: "Jasa Web vs Bikin Sendiri: Mana yang Cocok untuk Bisnis Kecil?",
    desc: "Bingung pilih jasa web atau DIY? Ini perbandingan biaya, waktu, dan hasilnya.",
    date: "2026-01-06",
    read: "6 min",
    tags: ["Jasa Web", "Bisnis", "Digital Marketing"],
    color: "purple",
  },
];

export default function BlogPage() {

  return (
    <section
      className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28 overflow-visible"
      style={{ color: "var(--foreground)" }}
    >
      <div className="relative max-w-6xl mx-auto flex flex-col gap-16">
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
            Blog Dyogaf Studio
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Blog Web Developer Dyogaf
          </h1>
          <p
            className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Topik ringan seputar web developer, jasa web, dan strategi digital yang mudah dipahami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              data-color={post.color}
              className="card-reactive relative rounded-3xl p-6 transition-all duration-500"
            >
              <div className="content space-y-3">
                <div
                  className="flex flex-wrap items-center gap-3 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.read}</span>
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-cyan-400 transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--text-secondary)" }}>{post.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border"
                      style={{
                        borderColor: "var(--card-border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
