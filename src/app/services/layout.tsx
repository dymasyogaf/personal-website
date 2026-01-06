export const metadata = {
  title: "Services | Dyogaf Studio",
  description: "Layanan jasa web, WordPress, dan pengembangan platform modern untuk bisnis dan personal.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Dyogaf Studio",
    description: "Layanan jasa web, WordPress, dan pengembangan platform modern untuk bisnis dan personal.",
    url: "https://dyogaf.web.id/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Dyogaf Studio",
    description: "Layanan jasa web, WordPress, dan pengembangan platform modern untuk bisnis dan personal.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
