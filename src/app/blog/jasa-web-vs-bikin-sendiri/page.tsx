import Link from "next/link";

export const metadata = {
  title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
  description:
    "Perbandingan jasa web dan bikin sendiri untuk bisnis kecil: waktu, budget, dan hasil.",
  alternates: {
    canonical: "/blog/jasa-web-vs-bikin-sendiri",
  },
  openGraph: {
    title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
    description:
      "Perbandingan jasa web dan bikin sendiri untuk bisnis kecil: waktu, budget, dan hasil.",
    url: "https://dyogaf.web.id/blog/jasa-web-vs-bikin-sendiri",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
    description:
      "Perbandingan jasa web dan bikin sendiri untuk bisnis kecil: waktu, budget, dan hasil.",
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
            Jasa Web vs Bikin Sendiri: Mana yang Cocok untuk Bisnis Kecil?
          </h1>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            <time dateTime="2026-01-06">2026-01-06</time> • 6 min
          </div>
        </header>

        <p style={{ color: "var(--text-secondary)" }}>
          Jasa web vs bikin website sendiri adalah pertanyaan yang sering muncul di kalangan pemilik
          bisnis kecil. Wajar banget, karena website sekarang bukan sekadar pajangan—tapi bisa jadi
          alat branding, tempat calon pelanggan percaya, dan jalur penjualan yang aktif 24 jam.
          Masalahnya, banyak orang bingung harus mulai dari mana: belajar bikin sendiri atau langsung
          pakai jasa web developer?
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Jawabannya tidak bisa &quot;satu untuk semua&quot;. Kamu perlu melihat tiga hal utama: waktu,
          budget, dan target hasil. Yuk kita bahas biar kamu bisa memilih yang paling cocok untuk
          bisnismu.
        </p>

        <h2 className="text-2xl font-bold">
          Opsi 1: Bikin Website Sendiri (Cocok untuk yang Suka Belajar)
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu bikin website sendiri, kamu punya kontrol penuh atas prosesnya. Ini cocok
          untuk bisnis kecil yang:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Masih tahap coba-coba dan ingin hemat biaya</li>
          <li>Kebutuhan websitenya sederhana (profil usaha, menu layanan, kontak)</li>
          <li>Punya waktu untuk belajar pelan-pelan</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Kelebihannya jelas: biaya lebih hemat dan kamu bisa mengatur isi website kapan saja. Kamu
          bisa pakai website builder atau CMS seperti WordPress dengan template.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Tapi ada konsekuensinya. Kamu harus siap mengurus hal teknis seperti:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Beli domain dan hosting</li>
          <li>Setting SSL, email bisnis, dan keamanan dasar</li>
          <li>Memastikan website mobile-friendly</li>
          <li>Optimasi kecepatan</li>
          <li>Dasar SEO (judul halaman, meta description, struktur heading, sitemap)</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu sibuk operasional (jualan, produksi, pelayanan), bagian teknis ini bisa terasa
          melelahkan dan bikin website malah nggak jadi-jadi.
        </p>

        <h2 className="text-2xl font-bold">
          Opsi 2: Pakai Jasa Web Developer (Cocok untuk Hasil Cepat dan Profesional)
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu ingin website yang rapi dan langsung siap dipakai, pakai jasa web developer
          biasanya lebih aman. Ini cocok untuk bisnis kecil yang:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Ingin tampil profesional sejak awal</li>
          <li>Butuh website cepat jadi (deadline promo, launching produk, rebranding)</li>
          <li>Ingin fokus ke bisnis, bukan pusing teknis</li>
          <li>Butuh website yang siap SEO dan cepat diakses</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Kelebihannya: kamu dapat website dengan struktur yang lebih terarah, desain lebih sesuai
          brand, dan biasanya sudah dipikirkan aspek penting seperti SEO friendly, mobile
          responsiveness, serta kecepatan loading.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Untuk bisnis kecil, SEO itu penting karena bisa mendatangkan calon pelanggan dari Google.
          Misalnya orang mencari &quot;catering Palembang&quot; atau &quot;jasa potong rambut terdekat&quot;.
          Website yang SEO-ready punya peluang lebih besar muncul di hasil pencarian.
        </p>

        <h2 className="text-2xl font-bold">Jadi, Mana yang Paling Cocok?</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Gunakan patokan sederhana ini:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Masih tahap tes pasar, budget terbatas, dan punya waktu belajar → bikin sendiri.</li>
          <li>
            Tujuan branding serius, menaikkan kepercayaan, dan meningkatkan penjualan → pakai jasa
            web.
          </li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Apa pun pilihanmu, pastikan website kamu jelas, mudah diakses di HP, loading cepat, dan
          punya tombol kontak/WhatsApp yang gampang ditemukan.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu butuh jasa web di Palembang dengan tampilan modern, cepat, dan SEO-friendly,
          Dyogaf Studio siap bantu dari nol sampai website kamu siap online dan siap dicari di
          Google.
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
