import type { Metadata } from "next";
import Link from "next/link";
import { FactStrip } from "@/components/ui/FactStrip";
import { ProductCard } from "@/components/product/ProductCard";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { products } from "@/data/products";
import { recipes } from "@/data/recipes";

export const metadata: Metadata = {
  title: "Bouillonnantes — Bouillons d'os artisanaux à Nantes",
  description:
    "Trois bouillons d'os artisanaux — Bœuf, Poulet, Porc Asiatique — produits à Nantes. Disponibles dans 16 épiceries fines, boucheries et magasins bio.",
  openGraph: {
    title: "Bouillonnantes — Bouillons d'os artisanaux à Nantes",
    description:
      "Trois bouillons d'os artisanaux produits à Nantes. Un ingrédient gourmet, pas un complément alimentaire.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <main style={{ flex: 1 }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0e0702",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: 64,
        }}
      >
        {/* Content — centré verticalement dans l'espace restant */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "48px 24px 40px",
          }}
        >
          {/* Pulsing amber line */}
          <div
            aria-hidden="true"
            style={{
              width: 1,
              height: 64,
              background: "linear-gradient(to bottom, transparent, #ff9021 35%, #ff9021 65%, transparent)",
              marginBottom: 32,
              animation: "pulseAmber 2.8s ease-in-out infinite",
            }}
          />

          <p
            style={{
              color: "#ff9021",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              marginBottom: 24,
            }}
          >
            Artisanal · Nantes · Bio
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: "clamp(36px, 5vw, 70px)",
              fontWeight: 600,
              lineHeight: 1.05,
              maxWidth: 760,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            Le bouillon d&apos;os qui réchauffe et nourrit
          </h1>

          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 460,
              marginBottom: 40,
            }}
          >
            Trois références artisanales — Bœuf, Poulet, Porc Asiatique — produites à
            Nantes et disponibles dans 16&nbsp;boutiques partenaires.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link
              href="/ou-nous-trouver"
              style={{
                background: "#ff9021",
                color: "#180c04",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                padding: "15px 40px",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
              }}
            >
              Où nous trouver
            </Link>
            <Link
              href="/notre-histoire"
              style={{
                color: "rgba(253,246,238,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                textDecoration: "none",
                borderBottom: "1px solid rgba(253,246,238,0.3)",
                paddingBottom: 2,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Notre histoire →
            </Link>
          </div>
        </div>

        {/* Scroll indicator — zone fixe en bas, jamais en overlap */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            height: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              color: "rgba(253,246,238,0.3)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
            }}
          >
            Défiler
          </span>
          <div
            style={{
              width: 1,
              height: 36,
              background: "linear-gradient(to bottom, rgba(255,144,33,0.7), transparent)",
              animation: "scrollBounce 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── Fact strip ───────────────────────────────────────── */}
      <FactStrip />

      {/* ── Products ─────────────────────────────────────────── */}
      <section style={{ background: "#180c04", padding: "96px 24px 80px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <RevealOnScroll style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                color: "#ff9021",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                marginBottom: 14,
              }}
            >
              Nos bouillons
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garant', serif",
                color: "#fdf6ee",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Trois caractères, une exigence
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 44,
            }}
          >
            {products.map((product, i) => (
              <RevealOnScroll key={product.id} delay={i * 90} style={{ height: "100%" }}>
                <ProductCard product={product} variant="compact" />
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/notre-gamme"
              style={{
                color: "#ff9021",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,144,33,0.4)",
                paddingBottom: 2,
              }}
            >
              Voir toute la gamme →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Le Rituel — cream inversion ──────────────────────── */}
      <section
        style={{
          background: "#f5e8d0",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <RevealOnScroll style={{ maxWidth: 640, margin: "0 auto" }}>
          <p
            style={{
              color: "#8b4000",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              marginBottom: 18,
            }}
          >
            Un geste quotidien
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#180c04",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Le Rituel
          </h2>
          <p
            style={{
              color: "rgba(24,12,4,0.72)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Chaud dans une tasse au réveil, comme base de sauce à midi, ou en bouillon
            de cuisson le soir. Le bouillon d&apos;os s&apos;intègre là où vous ne
            l&apos;attendiez pas.
          </p>
          <Link
            href="/le-rituel"
            style={{
              color: "#180c04",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "2px solid rgba(24,12,4,0.35)",
              paddingBottom: 3,
            }}
          >
            Découvrir le rituel →
          </Link>
        </RevealOnScroll>
      </section>

      {/* ── Recipes ──────────────────────────────────────────── */}
      <section style={{ background: "#1c0e06", padding: "96px 24px 80px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <RevealOnScroll style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                color: "#ff9021",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                marginBottom: 14,
              }}
            >
              En cuisine
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garant', serif",
                color: "#fdf6ee",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Idées recettes
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 44,
            }}
          >
            {featuredRecipes.map((recipe, i) => (
              <RevealOnScroll key={recipe.slug} delay={i * 90} style={{ height: "100%" }}>
                <RecipeCard recipe={recipe} />
              </RevealOnScroll>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/recettes"
              style={{
                color: "#ff9021",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,144,33,0.4)",
                paddingBottom: 2,
              }}
            >
              Voir toutes les recettes →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — solid amber ─────────────────────────────────── */}
      <section
        style={{
          background: "#ff9021",
          padding: "96px 24px",
          textAlign: "center",
        }}
      >
        <RevealOnScroll>
          <p
            style={{
              color: "rgba(24,12,4,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: 18,
            }}
          >
            16 boutiques partenaires à Nantes
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#180c04",
              fontSize: "clamp(32px, 5vw, 68px)",
              fontWeight: 600,
              lineHeight: 1.05,
              marginBottom: 40,
              maxWidth: 720,
              margin: "0 auto 40px",
            }}
          >
            Trouvez votre bouillon près de chez vous
          </h2>
          <Link
            href="/ou-nous-trouver"
            style={{
              background: "#180c04",
              color: "#fdf6ee",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              padding: "17px 48px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            Voir la carte
          </Link>
        </RevealOnScroll>
      </section>

    </main>
  );
}
