import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { recipes } from "@/data/recipes";

export const metadata = {
  title: "Recettes",
  description:
    "Découvrez nos recettes à base de bouillon d'os artisanal : ramen, risotto, soupe, sauces. Des idées simples pour cuisiner avec Bouillonnantes.",
};

export default function RecettesPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Recettes"
        eyebrow="En cuisine"
        subtitle="Des idées pour cuisiner avec nos bouillons d'os — du ramen du dimanche soir à la sauce du chef du mardi."
      />

      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* CTA no dead end */}
      <section
        style={{
          background: "rgba(255,144,33,0.05)",
          borderTop: "1px solid rgba(255,144,33,0.1)",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(253,246,238,0.6)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Envie de cuisiner ? Trouvez nos bouillons près de chez vous.
        </p>
        <Link
          href="/ou-nous-trouver"
          style={{
            background: "#ff9021",
            color: "#180c04",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            padding: "14px 32px",
            textDecoration: "none",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            display: "inline-block",
          }}
        >
          Où nous trouver
        </Link>
      </section>
    </main>
  );
}
