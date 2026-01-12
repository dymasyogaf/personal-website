import "../../styles/project.css";

export const metadata = {
  title: "Blog | Dyogaf Studio",
  description:
    "Artikel pemula tentang web developer, jasa web, dan digital marketing dari Dyogaf Studio.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Dyogaf Studio",
    description:
      "Artikel pemula tentang web developer, jasa web, dan digital marketing dari Dyogaf Studio.",
    url: "https://dyogaf.web.id/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Dyogaf Studio",
    description:
      "Artikel pemula tentang web developer, jasa web, dan digital marketing dari Dyogaf Studio.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
