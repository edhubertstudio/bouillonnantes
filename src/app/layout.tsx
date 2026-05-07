import type { Metadata } from "next";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bouillonnantes.github.io/bouillonnantes"),
  title: {
    default: "Bouillonnantes — Bouillons d'os artisanaux à Nantes",
    template: "%s — Bouillonnantes",
  },
  description:
    "Bouillons d'os artisanaux produits à Nantes. Trois références : Bœuf, Poulet, Porc Asiatique. Disponibles dans 16 épiceries fines et boucheries.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Bouillonnantes",
    title: "Bouillonnantes — Bouillons d'os artisanaux à Nantes",
    description:
      "Bouillons d'os artisanaux produits à Nantes. Trois références : Bœuf, Poulet, Porc Asiatique. Disponibles dans 16 épiceries fines et boucheries.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Bouillonnantes" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:wght@400;600&family=DM+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#180c04", color: "#fdf6ee" }}>
          <SiteNav />
          <div style={{ paddingTop: 64, flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#180c04" }}>{children}</div>
          <Footer />
        </body>
    </html>
  );
}
