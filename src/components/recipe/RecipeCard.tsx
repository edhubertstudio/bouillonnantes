import Link from "next/link";
import type { Recipe } from "@/types/index";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recettes/${recipe.slug}`}
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", height: "100%" }}
      aria-label={`Voir la recette : ${recipe.title}`}
    >
      <article
        className="card-hover"
        style={{
          background: "#1c0e06",
          border: "1px solid rgba(255,144,33,0.1)",
          borderTop: "2px solid rgba(255,144,33,0.55)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
          flex: 1,
        }}
      >
        {/* Gradient image placeholder */}
        <div
          style={{
            background: "linear-gradient(155deg, #1c0e06 0%, #2c1810 50%, #180c04 100%)",
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            borderBottom: "1px solid rgba(255,144,33,0.07)",
          }}
        >
          {/* Large decorative background text */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              fontFamily: "'Cormorant Garant', serif",
              fontSize: "clamp(44px, 6vw, 76px)",
              fontWeight: 600,
              color: "rgba(255,144,33,0.06)",
              lineHeight: 1,
              textAlign: "center",
              padding: "0 28px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            {recipe.title}
          </span>
          {/* Centered badges */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <CategoryBadge category={recipe.difficulty} />
            <span
              style={{
                color: "rgba(253,246,238,0.55)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.04em",
              }}
            >
              {recipe.timeMinutes} min
            </span>
          </div>
        </div>

        <div
          style={{
            padding: "20px 22px 24px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 22,
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {recipe.title}
          </h3>
          <p
            style={{
              color: "rgba(253,246,238,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              lineHeight: 1.65,
              marginTop: "auto",
            }}
          >
            {recipe.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
