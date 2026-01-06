export const metadata = {
  title: "Contact | Dyogaf Studio",
  description: "Hubungi Dyogaf Studio untuk jasa web, konsultasi project, dan digital marketing.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Dyogaf Studio",
    description: "Hubungi Dyogaf Studio untuk jasa web, konsultasi project, dan digital marketing.",
    url: "https://dyogaf.web.id/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Dyogaf Studio",
    description: "Hubungi Dyogaf Studio untuk jasa web, konsultasi project, dan digital marketing.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
