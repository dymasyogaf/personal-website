import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GeistSans, GeistMono } from "geist/font";

export const metadata = {
  title: "Dyogaf Studio",
  description: "Digital Marketer • Web Developer • Adventurer",
  metadataBase: new URL('https://dyogaf.my.id'),
  openGraph: {
    title: "Dyogaf Studio",
    description: "Digital Marketer • Web Developer • Adventurer",
    type: "website",
    locale: "id_ID",
    siteName: "Dyogaf Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyogaf Studio",
    description: "Digital Marketer • Web Developer • Adventurer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Preconnect untuk sumber daya eksternal */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        
        {/* Preload untuk font Geist */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          />
        </noscript>
        
        {/* Optimasi viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        
        {/* Theme color untuk mobile browser */}
        <meta name="theme-color" content="#060b18" />
        <meta name="msapplication-TileColor" content="#060b18" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest untuk PWA */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden text-white font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
              
              // Preload critical resources
              const preloadResources = () => {
                const criticalImages = [
                  '/image/logo/berdu.jpeg',
                  '/image/homepage/website-portfolio-personal.png'
                ];
                
                criticalImages.forEach(src => {
                  const link = document.createElement('link');
                  link.rel = 'preload';
                  link.as = 'image';
                  link.href = src;
                  document.head.appendChild(link);
                });
              };
              
              // Run after DOM is loaded
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', preloadResources);
              } else {
                preloadResources();
              }
            `,
          }}
        />
        {/* 🌌 Animated Global Gradient Background */}
        <div className="absolute inset-0 -z-20 animate-[gradient_20s_ease_infinite] bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.25),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.25),transparent_50%),linear-gradient(to_bottom,#060b18,#0a0f24,#060b18)] bg-[length:200%_200%]" />

        {/* 🌫️ Subtle Overlay Layer for smooth blending */}
        <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-[2px]" />

        {/* ✨ Floating Light Orbs (global aesthetic glow) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-indigo-600/25 blur-[160px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/25 blur-[180px] animate-pulse" />
          <div className="absolute top-[50%] left-[60%] w-[300px] h-[300px] bg-purple-500/15 blur-[120px] animate-pulse" />
        </div>

        {/* 🧭 Navbar Global */}
        <Navbar />

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
