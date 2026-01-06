import Link from "next/link";

export const metadata = {
  title: "Apa Itu Web Developer? | Dyogaf Studio",
  description:
    "Penjelasan tentang tugas web developer, skill dasar, dan cara mulai belajar dari nol.",
  alternates: {
    canonical: "/blog/apa-itu-web-developer",
  },
  openGraph: {
    title: "Apa Itu Web Developer? | Dyogaf Studio",
    description:
      "Penjelasan tentang tugas web developer, skill dasar, dan cara mulai belajar dari nol.",
    url: "https://dyogaf.web.id/blog/apa-itu-web-developer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apa Itu Web Developer? | Dyogaf Studio",
    description:
      "Penjelasan tentang tugas web developer, skill dasar, dan cara mulai belajar dari nol.",
  },
};

export default function PostPage() {
  return (
    <article className="relative z-10 min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-28" style={{ color: "var(--foreground)" }}>
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--text-muted)" }}>
            Panduan Pemula
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Apa Itu Web Developer? Tugas, Skill, dan Cara Mulai
          </h1>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            <time dateTime="2026-01-06">2026-01-06</time> • 5 min
          </div>
        </header>

        <p style={{ color: "var(--text-secondary)" }}>
          Web developer adalah orang yang membangun, mengembangkan, dan mengelola website—mulai dari
          halaman sederhana seperti profil bisnis sampai aplikasi web yang kompleks seperti
          dashboard, sistem login, atau web app. Di tahun 2026, kebutuhan web developer makin besar
          karena hampir semua bisnis dan personal brand butuh website yang cepat, rapi, dan mudah
          ditemukan di Google.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu sering dengar istilah front-end dan back-end, itu masih satu dunia yang sama:
          dunia web development. Front-end fokus ke tampilan yang dilihat pengguna, sedangkan
          back-end fokus ke sistem di balik layar seperti database, autentikasi, dan logika
          aplikasi.
        </p>

        <h2 className="text-2xl font-bold">Tugas Utama Web Developer</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Secara sederhana, tugas web developer adalah memastikan website berjalan dengan baik,
          cepat, aman, dan nyaman dipakai. Berikut beberapa contoh tugas yang biasa dikerjakan:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>
            <strong>Membuat tampilan website (UI)</strong>: menyusun layout, warna, font, dan
            komponen agar terlihat profesional dan mudah dipahami.
          </li>
          <li>
            <strong>Mengatur fungsionalitas dan data</strong>: membuat form kontak, login user,
            sistem checkout, atau mengambil data dari database.
          </li>
          <li>
            <strong>Membuat website responsif (mobile-friendly)</strong>: memastikan tampilan rapi
            di berbagai ukuran layar.
          </li>
          <li>
            <strong>Optimasi performa dan keamanan</strong>: website cepat, aman dari spam, malware,
            dan celah keamanan sederhana.
          </li>
          <li>
            <strong>Maintenance dan update</strong>: update konten, perbaikan bug, hingga peningkatan
            fitur.
          </li>
        </ul>

        <h2 className="text-2xl font-bold">Skill Dasar Web Developer yang Perlu Dipelajari</h2>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>
            <strong>HTML</strong>: untuk struktur halaman (judul, paragraf, tombol, form).
          </li>
          <li>
            <strong>CSS</strong>: untuk tampilan (warna, layout, responsive).
          </li>
          <li>
            <strong>JavaScript</strong>: untuk interaksi (menu, slider, validasi form, efek dinamis).
          </li>
          <li>
            <strong>Dasar SEO</strong>: struktur heading (H1–H3), meta title, meta description, dan
            optimasi gambar (alt text).
          </li>
          <li>
            <strong>Git &amp; GitHub</strong> (nilai plus): menyimpan versi project dan kolaborasi.
          </li>
          <li>
            <strong>Framework</strong> (opsional setelah dasar kuat): React, Vue, atau Laravel/Node.js.
          </li>
        </ul>

        <h2 className="text-2xl font-bold">Cara Mulai Belajar Web Developer (Step by Step)</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Biar belajarnya tidak loncat-loncat, kamu bisa ikuti urutan yang simpel ini:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>
            <strong>Bikin proyek kecil</strong>: halaman profil sederhana berisi foto, bio, skill,
            dan link sosial media.
          </li>
          <li>
            <strong>Naik level</strong>: bikin landing page promosi jasa/produk lengkap dengan CTA
            WhatsApp.
          </li>
          <li>
            <strong>Latihan responsif</strong>: pastikan layout enak dilihat di HP dan laptop.
          </li>
          <li>
            <strong>Belajar SEO dasar</strong>: judul jelas, struktur heading rapi, konten menjawab
            pertanyaan orang.
          </li>
          <li>
            <strong>Bangun portofolio</strong>: simpan project di GitHub atau buat halaman portofolio
            khusus.
          </li>
        </ul>

        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu butuh mentor, review project, atau ingin website langsung jadi untuk kebutuhan
          bisnis, memakai jasa web developer di Palembang bisa membantu mempercepat proses—baik
          untuk belajar maupun produksi website profesional.
        </p>

        <div className="pt-4">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition">
            Kembali ke Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
