import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  variant: "compact" | "full";
}

const gradients: Record<string, string> = {
  boeuf:           "linear-gradient(145deg, #1c0e06 0%, #3d1408 55%, #180c04 100%)",
  poulet:          "linear-gradient(145deg, #1c0e06 0%, #2c1c04 55%, #180c04 100%)",
  "porc-asiatique": "linear-gradient(145deg, #0e0e04 0%, #141c06 55%, #1c0e06 100%)",
};

export function ProductCard({ product, variant }: ProductCardProps) {
  const isCompact = variant === "compact";
  const gradient = gradients[product.id] ?? gradients.boeuf;

  return (
    <article
      className="card-hover"
      style={{
        background: "#1c0e06",
        border: "1px solid rgba(255,144,33,0.12)",
        borderTop: "2px solid #ff9021",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 28px rgba(0,0,0,0.45)",
        height: "100%",
      }}
    >
      {/* Gradient image placeholder */}
      <div
        style={{
          background: gradient,
          height: isCompact ? 200 : 280,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          borderBottom: "1px solid rgba(255,144,33,0.08)",
        }}
      >
        {/* Large decorative background text */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            fontFamily: "'Cormorant Garant', serif",
            fontSize: "clamp(56px, 9vw, 96px)",
            fontWeight: 600,
            color: "rgba(255,144,33,0.07)",
            lineHeight: 1,
            textAlign: "center",
            padding: "0 20px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {product.name}
        </span>
        {/* Centered tagline */}
        <p
          style={{
            position: "relative",
            zIndex: 1,
            color: "rgba(255,144,33,0.75)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          {product.tagline}
        </p>
      </div>

      <div
        style={{
          padding: isCompact ? "20px 20px 24px" : "28px 28px 32px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "#ff9021",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 8,
          }}
        >
          {product.tagline}
        </p>
        <h3
          style={{
            fontFamily: "'Cormorant Garant', serif",
            color: "#fdf6ee",
            fontSize: isCompact ? 26 : 32,
            fontWeight: 600,
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            color: "rgba(253,246,238,0.65)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            lineHeight: 1.75,
            marginBottom: 16,
          }}
        >
          {isCompact ? product.description.slice(0, 100) + "…" : product.description}
        </p>

        {!isCompact && (
          <ul style={{ marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
            {product.benefits.map((b) => (
              <li
                key={b}
                style={{
                  color: "rgba(253,246,238,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  paddingBottom: 8,
                  borderBottom: "1px solid rgba(255,144,33,0.07)",
                }}
              >
                <span style={{ color: "#ff9021", flexShrink: 0, marginTop: 1 }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {isCompact && (
          <Link
            href="/notre-gamme"
            aria-label={`Découvrir ${product.name}`}
            style={{
              color: "#ff9021",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,144,33,0.35)",
              paddingBottom: 2,
              alignSelf: "flex-start",
              marginTop: "auto",
              letterSpacing: "0.03em",
            }}
          >
            Découvrir →
          </Link>
        )}
      </div>
    </article>
  );
}
