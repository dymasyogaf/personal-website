export const metadata = {
  title: "About | Dyogaf Studio",
  description: "Tentang Dyogaf Studio dan Dymas Yoga Febratama, web developer Palembang dan digital marketing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Dyogaf Studio",
    description: "Tentang Dyogaf Studio dan Dymas Yoga Febratama, web developer Palembang dan digital marketing.",
    url: "https://dyogaf.web.id/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Dyogaf Studio",
    description: "Tentang Dyogaf Studio dan Dymas Yoga Febratama, web developer Palembang dan digital marketing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
