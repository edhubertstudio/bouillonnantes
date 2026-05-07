import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
        background: "#180c04",
      }}
    >
      <p
        style={{
          color: "#ff9021",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: 20,
        }}
      >
        Erreur 404
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garant', serif",
          color: "#fdf6ee",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        Page introuvable
      </h1>
      <p
        style={{
          color: "rgba(253,246,238,0.55)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          lineHeight: 1.7,
          maxWidth: 400,
          marginBottom: 40,
        }}
      >
        Cette page n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil.
      </p>
      <Link
        href="/"
        style={{
          background: "#ff9021",
          color: "#180c04",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: 13,
          padding: "16px 36px",
          textDecoration: "none",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          display: "inline-block",
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
