import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid rgba(255,144,33,0.1)", padding: "40px 24px", marginTop: "auto", backgroundColor: "#180c04" }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <p style={{ fontFamily: "'Cormorant Garant', serif", color: "#fdf6ee", fontSize: 18, fontWeight: 600 }}>
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
    </footer>
  );
}
