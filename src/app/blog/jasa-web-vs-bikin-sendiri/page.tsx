import Link from "next/link";

export const metadata = {
  title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
  description:
    "Bingung pilih jasa web atau DIY? Ini perbandingan biaya, waktu, dan hasilnya.",
  alternates: {
    canonical: "/blog/jasa-web-vs-bikin-sendiri",
  },
  openGraph: {
    title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
    description: "Bingung pilih jasa web atau DIY? Ini perbandingan biaya, waktu, dan hasilnya.",
    url: "https://dyogaf.web.id/blog/jasa-web-vs-bikin-sendiri",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Web vs Bikin Sendiri | Dyogaf Studio",
    description: "Bingung pilih jasa web atau DIY? Ini perbandingan biaya, waktu, dan hasilnya.",
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
          Banyak pemilik bisnis kecil bingung: mending bikin website sendiri atau pakai jasa web?
          Jawabannya tergantung waktu, budget, dan target hasil.
        </p>

        <h2 className="text-2xl font-bold">Kalau bikin sendiri</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Cocok untuk yang punya waktu belajar dan kebutuhan sederhana. Biaya lebih hemat, tapi kamu
          harus siap belajar teknis dan mengurus semuanya sendiri.
        </p>

        <h2 className="text-2xl font-bold">Kalau pakai jasa web developer</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Cocok kalau kamu butuh hasil cepat, tampilan profesional, dan siap fokus ke bisnis. Jasa web
          juga biasanya sudah paham SEO, sehingga peluang muncul di Google lebih besar.
        </p>

        <h2 className="text-2xl font-bold">Mana yang paling cocok?</h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Kalau tujuanmu branding dan penjualan, jasa web bisa jadi investasi yang tepat. Kalau masih
          tahap coba-coba, bikin sendiri juga tidak masalah. Yang penting, website harus jelas dan
          mudah diakses.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          Dyogaf Studio siap membantu jasa web di Palembang dengan kualitas modern dan SEO-friendly.
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
