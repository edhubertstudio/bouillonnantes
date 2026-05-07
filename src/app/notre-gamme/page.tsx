import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Notre Gamme",
  description: "Découvrez nos trois bouillons d'os artisanaux : Bœuf, Poulet et Porc Asiatique. Produits à Nantes à partir d'ingrédients bio.",
};

export default function NotreGammePage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Header */}
      <section style={{ background: "#1c0e06", padding: "80px 24px 60px", textAlign: "center", borderBottom: "1px solid rgba(255,144,33,0.1)" }}>
        <p style={{ color: "#ff9021", fontFamily: "'DM Sans', sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
          Artisanal · Bio · Nantes
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garant', serif", color: "#fdf6ee", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 600, lineHeight: 1.1, marginBottom: 20 }}>
          Notre Gamme
        </h1>
        <p style={{ color: "rgba(253,246,238,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          Trois références, trois caractères — tous mijotés lentement à partir d&apos;os sélectionnés et d&apos;épices bio.
        </p>
      </section>

      {/* Products */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="full" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "rgba(255,144,33,0.05)", borderTop: "1px solid rgba(255,144,33,0.1)", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(253,246,238,0.6)", fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 20 }}>
          Trouvez nos bouillons dans 16 boutiques partenaires à Nantes
        </p>
        <Link
          href="/ou-nous-trouver"
          style={{ background: "#ff9021", color: "#180c04", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, padding: "14px 32px", textDecoration: "none", letterSpacing: "0.05em", textTransform: "uppercase", display: "inline-block" }}
        >
          Où nous trouver
        </Link>
      </section>
    </main>
  );
}
