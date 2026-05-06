import type { Metadata } from "next";
import { SiteNav } from "@/components/nav/SiteNav";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bouillonnantes — Bouillons d'os artisanaux à Nantes",
  description:
    "Bouillons d'os artisanaux produits à Nantes. Trois références : Bœuf, Poulet, Porc Asiatique. Disponibles dans 16 épiceries fines et boucheries.",
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
      <body className="min-h-screen flex flex-col">
          <SiteNav />
          <div style={{ paddingTop: 64, flex: 1, display: "flex", flexDirection: "column" }}>{children}</div>
          <Footer />
        </body>
    </html>
  );
}
