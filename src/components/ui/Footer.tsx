import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#180c04", marginTop: "auto" }}>
      {/* Newsletter compact */}
      <div
        style={{
          borderTop: "1px solid rgba(255,144,33,0.1)",
          padding: "40px 24px",
        }}
      >
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <p
            style={{
              color: "rgba(253,246,238,0.45)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 12,
            }}
          >
            Newsletter
          </p>
          <div style={{ maxWidth: 420 }}>
            <NewsletterForm variant="compact" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,144,33,0.06)",
          padding: "20px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garant', serif", color: "#fdf6ee", fontSize: 16, fontWeight: 600 }}>
            Bouillonnantes
          </p>
          <p style={{ color: "rgba(253,246,238,0.65)", fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>
            Bouillons d&apos;os artisanaux · Nantes
          </p>
          <Link
            href="/mentions-legales"
            style={{ color: "rgba(253,246,238,0.65)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, textDecoration: "none" }}
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
