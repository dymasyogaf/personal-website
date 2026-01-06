import Link from "next/link";

export const metadata = {
  title: "Cara Membuat Website Pertama untuk Pemula | Dyogaf Studio",
  description:
    "Panduan step by step untuk pemula: dari tujuan, domain, hingga SEO-friendly.",
  alternates: {
    canonical: "/blog/cara-membuat-website-pertama",
  },
  openGraph: {
    title: "Cara Membuat Website Pertama untuk Pemula | Dyogaf Studio",
    description:
      "Panduan step by step untuk pemula: dari tujuan, domain, hingga SEO-friendly.",
    url: "https://dyogaf.web.id/blog/cara-membuat-website-pertama",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Membuat Website Pertama untuk Pemula | Dyogaf Studio",
    description:
      "Panduan step by step untuk pemula: dari tujuan, domain, hingga SEO-friendly.",
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
            Cara Membuat Website Pertama untuk Pemula (Step by Step)
          </h1>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>
            <time dateTime="2026-01-06">2026-01-06</time> • 6 min
          </div>
        </header>

        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu baru mau mulai, bikin website itu sebenarnya tidak sesulit yang dibayangkan.
          Yang bikin terasa rumit biasanya karena terlalu banyak pilihan: domain, hosting, platform,
          desain, sampai cara bikin websitenya muncul di Google. Nah, di artikel ini kita bahas cara
          membuat website pertama untuk pemula secara step by step, sekaligus menerapkan konsep SEO
          friendly sejak awal. Cocok untuk website pribadi, portofolio, maupun bisnis kecil.
        </p>

        <h2 className="text-2xl font-bold">1) Tentukan tujuan website dan keyword utama</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Langkah pertama bukan desain, tapi tujuan. Website kamu untuk jualan, portofolio, atau
          profil bisnis? Tujuan ini menentukan struktur halaman dan konten yang akan kamu tulis.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Agar SEO-nya jalan, tentukan juga keyword utama (kata kunci target). Contoh:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>&quot;jasa pembuatan website Palembang&quot;</li>
          <li>&quot;website portofolio mahasiswa&quot;</li>
          <li>&quot;cara membuat website untuk pemula&quot;</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Keyword ini nanti dipakai di judul halaman, heading, dan isi artikel supaya Google paham
          topiknya.
        </p>

        <h2 className="text-2xl font-bold">2) Pilih nama domain yang mudah diingat dan relevan</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Nama domain itu alamat web kamu, misalnya <strong>dyogaf.web.id</strong>. Pilih yang pendek,
          mudah diingat, dan sesuai brand. Kalau belum tersedia, coba variasi yang tetap relevan.
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Pendek dan mudah diketik</li>
          <li>Sesuai nama brand atau nama kamu</li>
          <li>Tidak membingungkan (hindari angka atau tanda minus yang tidak perlu)</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Domain memang bukan faktor SEO terbesar, tapi domain yang jelas dan mudah diingat membuat
          orang lebih mudah balik lagi dan lebih percaya.
        </p>

        <h2 className="text-2xl font-bold">3) Tentukan platform yang cepat dan mudah dioptimasi</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Untuk pemula, kamu bisa pilih dua opsi:
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          <strong>A. Website builder (cepat jadi)</strong>
          <br />
          Cocok kalau kamu ingin cepat online. Tapi pastikan builder yang kamu pakai mendukung SEO
          dasar seperti edit meta title, meta description, dan struktur heading.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          <strong>B. WordPress atau dibuatkan web developer (lebih fleksibel)</strong>
          <br />
          Kalau kamu ingin tampilan lebih unik, performa lebih cepat, dan struktur SEO lebih rapi,
          WordPress atau jasa web developer biasanya lebih aman. Website yang cepat dan rapi
          strukturnya lebih mudah menang di Google.
        </p>

        <h2 className="text-2xl font-bold">4) Siapkan struktur halaman yang SEO-ready</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Minimal siapkan halaman berikut:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Home (ringkas dan jelas)</li>
          <li>Tentang (siapa kamu, kredibilitas)</li>
          <li>Layanan/Produk (detail yang kamu tawarkan)</li>
          <li>Portofolio/Testimoni (bukti kerja)</li>
          <li>Kontak (WhatsApp, email, lokasi)</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Tips SEO penting: gunakan URL yang rapi, contoh: <strong>/layanan/</strong>,
          <strong> /portofolio/</strong>, <strong>/kontak/</strong>. Hindari URL acak seperti
          <strong> /page?id=123</strong>.
        </p>

        <h2 className="text-2xl font-bold">5) Tulis konten yang mudah dibaca (dan disukai Google)</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Google suka konten yang membantu orang. Jadi tulis dengan struktur jelas:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Pakai heading (H2, H3)</li>
          <li>Paragraf pendek</li>
          <li>Poin-poin untuk memudahkan scan</li>
        </ul>
        <p style={{ color: "var(--text-secondary)" }}>
          Masukkan keyword utama secara natural di judul artikel, paragraf pertama, beberapa
          heading, dan isi artikel secukupnya (jangan dipaksa).
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Contoh judul SEO-friendly: &quot;Cara Membuat Website untuk Pemula: Panduan Step by Step yang
          SEO-Friendly&quot;.
        </p>

        <h2 className="text-2xl font-bold">6) Optimasi on-page SEO dasar</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Ini bagian yang sering dilewatkan pemula, padahal penting:
        </p>
        <ul className="list-disc pl-6" style={{ color: "var(--text-secondary)" }}>
          <li>Meta title: maksimal sekitar 60 karakter, mengandung keyword</li>
          <li>Meta description: sekitar 140–160 karakter, bikin orang tertarik klik</li>
          <li>Alt text gambar: isi deskripsi gambar, bukan &quot;IMG_123&quot;</li>
          <li>Internal link: tautkan ke halaman lain di website kamu</li>
        </ul>

        <h2 className="text-2xl font-bold">7) Pastikan website cepat dan mobile-friendly</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          SEO sekarang sangat dipengaruhi pengalaman pengguna. Pastikan tampilan rapi di HP, tombol
          mudah diklik, ukuran gambar tidak terlalu besar, dan halaman tidak berat karena animasi
          berlebihan. Kecepatan website berpengaruh ke ranking dan juga ke konversi.
        </p>

        <h2 className="text-2xl font-bold">8) Pasang tools penting: Search Console dan Analytics</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Supaya kamu bisa dipantau Google, pasang Google Search Console untuk submit sitemap dan
          cek performa keyword, serta Google Analytics untuk lihat traffic dan perilaku pengunjung.
          Setelah itu, submit sitemap agar halaman kamu lebih cepat terindeks.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          Kalau kamu butuh bantuan, Dyogaf Studio siap bantu membuat website modern dan SEO-friendly
          di Palembang maupun luar kota.
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
