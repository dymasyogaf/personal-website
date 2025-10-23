import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PerformanceMonitor from "../components/PerformanceMonitor";
import { GeistSans, GeistMono } from "geist/font";
import { preloadCriticalResources } from "@/utils/performance-optimizer";
import { initializeWebVitalsOptimization } from "@/utils/web-vitals-optimizer";
import { enablePerformanceTesting } from "@/utils/performance-test";

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
      </head>
      <body className="relative min-h-screen overflow-x-hidden font-sans antialiased" style={{ color: 'var(--foreground)' }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance optimization and theme detection
              (function() {
                // Preload critical resources immediately
                if (typeof window !== 'undefined') {
                  // Preload critical images
                  const criticalImages = [
                    '/image/logo/berdu.jpeg',
                    '/image/homepage/website-portfolio-personal.png'
                  ];
                  
                  criticalImages.forEach(src => {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = src;
                    link.setAttribute('fetchpriority', 'high');
                    document.head.appendChild(link);
                  });
                  
                  // Optimize font loading
                  const fontLink = document.createElement('link');
                  fontLink.rel = 'preload';
                  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
                  fontLink.as = 'style';
                  document.head.appendChild(fontLink);
                }
                
                // Theme detection and persistence
                const storedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                // Determine initial theme
                let theme = 'light';
                if (storedTheme) {
                  theme = storedTheme;
                } else if (systemPrefersDark) {
                  theme = 'dark';
                }
                
                // Apply theme to document
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.toggle('dark', theme === 'dark');
                
                // Update meta theme-color
                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                const metaTileColor = document.querySelector('meta[name="msapplication-TileColor"]');
                const themeColor = theme === 'dark' ? '#060b18' : '#ffffff';
                
                if (metaThemeColor) metaThemeColor.content = themeColor;
                if (metaTileColor) metaTileColor.content = themeColor;
                
                // Listen for system theme changes (only if no stored preference)
                if (!storedTheme) {
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                    const newTheme = e.matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', newTheme);
                    document.documentElement.classList.toggle('dark', newTheme === 'dark');
                    
                    const newThemeColor = newTheme === 'dark' ? '#060b18' : '#ffffff';
                    if (metaThemeColor) metaThemeColor.content = newThemeColor;
                    if (metaTileColor) metaTileColor.content = newThemeColor;
                  });
                }
                
                // Performance optimization: reduce layout shifts
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(() => {
                    // Preload non-critical resources during idle time
                    const preloadResources = [
                      '/image/homepage/website-fundrising.png',
                      '/image/homepage/landing-page-produk.png'
                    ];
                    
                    preloadResources.forEach(src => {
                      const link = document.createElement('link');
                      link.rel = 'prefetch';
                      link.as = 'image';
                      link.href = src;
                      document.head.appendChild(link);
                    });
                    
                    // Initialize Web Vitals optimization
                    initializeWebVitalsOptimization();
                  });
                } else {
                  // Fallback for browsers without requestIdleCallback
                  setTimeout(() => {
                    initializeWebVitalsOptimization();
                  }, 100);
                }
                
                // Enable performance testing in development
                if (process.env.NODE_ENV === 'development') {
                  enablePerformanceTesting();
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
        <Navbar />

        {/* 🪄 Main Page Content */}
        <main className="relative z-0">
          {children}
        </main>

        {/* 🔗 footer Global */}
        <Footer />
        
        {/* 📊 Performance Monitor - Only in development */}
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
      </body>
    </html>
  );
}
