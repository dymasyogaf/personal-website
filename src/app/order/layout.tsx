import "../../styles/order.css";

export const metadata = {
  title: "Order | Dyogaf Studio",
  description: "Form order jasa web, WordPress, dan platform Dyogaf Studio.",
  alternates: {
    canonical: "/order",
  },
  openGraph: {
    title: "Order | Dyogaf Studio",
    description: "Form order jasa web, WordPress, dan platform Dyogaf Studio.",
    url: "https://dyogaf.web.id/order",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order | Dyogaf Studio",
    description: "Form order jasa web, WordPress, dan platform Dyogaf Studio.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
