import "../../styles/project.css";

export const metadata = {
  title: "Projects | Dyogaf Studio",
  description:
    "Portofolio proyek Dyogaf: website, landing page, dan karya digital untuk brand dan bisnis.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Dyogaf Studio",
    description:
      "Portofolio proyek Dyogaf: website, landing page, dan karya digital untuk brand dan bisnis.",
    url: "https://dyogaf.web.id/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Dyogaf Studio",
    description:
      "Portofolio proyek Dyogaf: website, landing page, dan karya digital untuk brand dan bisnis.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
