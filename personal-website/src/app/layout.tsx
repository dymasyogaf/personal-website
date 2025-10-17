import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GeistSans, GeistMono } from "geist/font";

export const metadata = {
  title: "Dymas Yoga Febratama",
  description: "Digital Marketer • Web Developer • Adventurer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden text-white font-sans antialiased">
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
