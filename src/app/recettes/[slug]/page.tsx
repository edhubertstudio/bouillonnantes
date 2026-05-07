import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.description,
  };
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <main style={{ flex: 1 }}>
      {/* Header */}
      <section
        style={{
          background: "#1c0e06",
          padding: "80px 24px 60px",
          borderBottom: "1px solid rgba(255,144,33,0.1)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <CategoryBadge category={recipe.difficulty} />
            <span
              style={{
                color: "rgba(253,246,238,0.65)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
              }}
            >
              {recipe.timeMinutes} min
            </span>
            <CategoryBadge category={recipe.productRef} />
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {recipe.title}
          </h1>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            {recipe.description}
          </p>
        </div>
      </section>

      {/* Dish image placeholder */}
      <div
        style={{
          background: "rgba(255,144,33,0.05)",
          height: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(255,144,33,0.1)",
        }}
      >
        <span
          style={{
            color: "rgba(255,144,33,0.3)",
            fontFamily: "'Cormorant Garant', serif",
            fontSize: 16,
          }}
        >
          {recipe.title}
        </span>
      </div>

      {/* Ingredients + Steps */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {/* Ingredients */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garant', serif",
                color: "#fdf6ee",
                fontSize: 28,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Ingrédients
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    color: "rgba(253,246,238,0.75)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.5,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(255,144,33,0.08)",
                  }}
                >
                  <span style={{ color: "#ff9021", flexShrink: 0, marginTop: 2 }}>—</span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garant', serif",
                color: "#fdf6ee",
                fontSize: 28,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              Préparation
            </h2>
            <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              {recipe.steps.map((step, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    color: "rgba(253,246,238,0.75)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: "#ff9021",
                      fontFamily: "'Cormorant Garant', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      flexShrink: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA — no dead end */}
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
            fontSize: 15,
            marginBottom: 24,
          }}
        >
          Vous souhaitez cuisiner cette recette ?
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
          Où trouver nos bouillons
        </Link>
      </section>
    </main>
  );
}
