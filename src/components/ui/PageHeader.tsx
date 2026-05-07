interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <section
      style={{
        background: "#0a0602",
        padding: "96px 24px 72px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,144,33,0.08)",
      }}
    >
      {/* Large decorative background title */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Cormorant Garant', serif",
          fontSize: "clamp(80px, 15vw, 200px)",
          fontWeight: 600,
          color: "rgba(255,144,33,0.04)",
          lineHeight: 1,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {title}
      </span>

      <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Amber decorative line */}
        <div
          aria-hidden="true"
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, #ff9021 40%, #ff9021 60%, transparent)",
            margin: "0 auto 28px",
            opacity: 0.7,
          }}
        />

        {eyebrow && (
          <p
            style={{
              color: "#ff9021",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          style={{
            fontFamily: "'Cormorant Garant', serif",
            color: "#fdf6ee",
            fontSize: "clamp(40px, 7vw, 84px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: subtitle ? 22 : 0,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              color: "rgba(253,246,238,0.58)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
