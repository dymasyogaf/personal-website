import "./globals.css";
import OptimizedNavbar from "../components/OptimizedNavbar";
import Footer from "../components/Footer";
import { GeistSans, GeistMono } from "geist/font";

export const metadata = {
  title: "Dyogaf Studio | Web Developer Palembang",
  description:
    "Dyogaf Studio - Dymas Yoga Febratama, web developer Palembang dan digital marketing. Jasa web modern, cepat, dan SEO-friendly.",
  metadataBase: new URL("https://dyogaf.web.id"),
  keywords: [
    "Dyogaf",
    "Dymas Yoga",
    "Dymas Yoga Febratama",
    "Web Developer Palembang",
    "Digital Marketing",
    "Jasa Web",
  ],
  openGraph: {
    title: "Dyogaf Studio | Web Developer Palembang",
    description:
      "Dyogaf Studio - Dymas Yoga Febratama, web developer Palembang dan digital marketing. Jasa web modern, cepat, dan SEO-friendly.",
    type: "website",
    locale: "id_ID",
    siteName: "Dyogaf Studio",
    url: "https://dyogaf.web.id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyogaf Studio | Web Developer Palembang",
    description:
      "Dyogaf Studio - Dymas Yoga Febratama, web developer Palembang dan digital marketing. Jasa web modern, cepat, dan SEO-friendly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "v76LIQ3-E2hg4BD4MZAMvF8I1cSIB6VD1Okgpz4kiXI",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Dymas Yoga Febratama",
      "alternateName": ["Dyogaf", "Dymas Yoga"],
      "url": "https://dyogaf.web.id",
      "jobTitle": ["Web Developer", "Digital Marketer"],
      "knowsAbout": [
        "Web Developer Palembang",
        "Digital Marketing",
        "Jasa Web",
      ],
    },
    {
      "@type": "WebSite",
      "name": "Dyogaf Studio",
      "url": "https://dyogaf.web.id",
      "inLanguage": "id-ID",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect untuk sumber daya eksternal */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        
        {/* DNS prefetch untuk domain yang mungkin dibutuhkan */}
        <link rel="dns-prefetch" href="https://baca.dymasyogaf.my.id" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Preload untuk font Geist - menggunakan next/font */}
        
        {/* Optimasi viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        
        {/* Theme color untuk mobile browser - akan diupdate via JavaScript */}
        <meta name="theme-color" content="#060b18" />
        <meta name="msapplication-TileColor" content="#060b18" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest untuk PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden font-sans antialiased theme-transition" style={{ color: 'var(--foreground)' }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance optimization and theme detection
              (function() {
                const criticalImages = [
                  '/image/logo/berdu.jpeg',
                  '/image/homepage/website-portfolio-personal.png'
                ];

                const preloadImage = (rel, src, highPriority) => {
                  const link = document.createElement('link');
                  link.rel = rel;
                  link.as = 'image';
                  link.href = src;
                  if (highPriority) link.setAttribute('fetchpriority', 'high');
                  document.head.appendChild(link);
                };

                criticalImages.forEach(src => preloadImage('preload', src, true));

                // Theme detection and persistence
                const storedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                const metaTileColor = document.querySelector('meta[name="msapplication-TileColor"]');

                const applyTheme = (nextTheme) => {
                  document.documentElement.setAttribute('data-theme', nextTheme);
                  document.documentElement.classList.toggle('dark', nextTheme === 'dark');

                  const themeColor = nextTheme === 'dark' ? '#060b18' : '#ffffff';
                  if (metaThemeColor) metaThemeColor.content = themeColor;
                  if (metaTileColor) metaTileColor.content = themeColor;
                };

                const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
                applyTheme(initialTheme);

                // Listen for system theme changes (only if no stored preference)
                if (!storedTheme) {
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                    applyTheme(e.matches ? 'dark' : 'light');
                  });
                }

                // Performance optimization: Preload non-critical resources during idle time
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(() => {
                    const preloadResources = [
                      '/image/homepage/website-fundrising.png',
                      '/image/homepage/landing-page-produk.png'
                    ];

                    preloadResources.forEach(src => preloadImage('prefetch', src, false));
                  });
                }
              })();
              
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
            `,
          }}
        />
        {/* 🌌 Animated Global Gradient Background */}
        <div className="absolute inset-0 -z-20 animate-[gradient_20s_ease_infinite]" style={{
          background: 'radial-gradient(circle at 20% 30%, var(--orb-1), transparent 50%), radial-gradient(circle at 80% 70%, var(--orb-2), transparent 50%), linear-gradient(to bottom, var(--background), var(--card), var(--background))',
          backgroundSize: '200% 200%'
        }} />

        {/* 🌫️ Subtle Overlay Layer for smooth blending */}
        <div className="absolute inset-0 -z-10" style={{
          background: 'var(--background)',
          opacity: 0.1,
          filter: 'blur(2px)'
        }} />

        {/* ✨ Floating Light Orbs (global aesthetic glow) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] blur-[160px] animate-pulse" style={{ background: 'var(--orb-1)' }} />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] blur-[180px] animate-pulse" style={{ background: 'var(--orb-2)' }} />
          <div className="absolute top-[50%] left-[60%] w-[300px] h-[300px] blur-[120px] animate-pulse" style={{ background: 'var(--orb-3)' }} />
        </div>

        {/* 🧭 Navbar Global */}
        <OptimizedNavbar />

        {/* 🪄 Main Page Content */}
        <main className="relative z-0">
          {children}
        </main>

        {/* 🔗 footer Global */}
        <Footer />
      </body>
    </html>
  );
}
