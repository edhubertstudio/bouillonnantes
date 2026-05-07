const facts = [
  "16 boutiques à Nantes",
  "3 références artisanales",
  "100% bio certifié",
  "2 fondatrices passionnées",
];

// Duplicate for seamless loop
const items = [...facts, ...facts];

export function FactStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,144,33,0.15)",
        borderBottom: "1px solid rgba(255,144,33,0.1)",
        background: "#1c0e06",
        overflow: "hidden",
        padding: "18px 0",
      }}
    >
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fact-strip-track { animation-play-state: paused !important; }
        }
      `}</style>

      <div
        className="fact-strip-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 28s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((fact, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "rgba(253,246,238,0.55)",
              paddingRight: 48,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: "#ff9021",
                marginRight: 16,
                fontSize: 8,
              }}
            >
              ✦
            </span>
            {fact}
          </span>
        ))}
      </div>
    </section>
  );
}
