const facts = [
  { number: "16",   label: "Boutiques",   sub: "partenaires à Nantes" },
  { number: "3",    label: "Références",  sub: "artisanales" },
  { number: "100%", label: "Bio",         sub: "certifié" },
  { number: "2",    label: "Fondatrices", sub: "nantaises" },
];

export function FactStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,144,33,0.15)",
        borderBottom: "1px solid rgba(255,144,33,0.1)",
        background: "#1c0e06",
        padding: "48px 24px",
      }}
    >
      <style>{`
        .fact-strip-grid {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .fact-strip-item {
          text-align: center;
          padding: 0 24px;
        }
        .fact-strip-item + .fact-strip-item {
          border-left: 1px solid rgba(255,144,33,0.12);
        }
        @media (max-width: 640px) {
          .fact-strip-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
          }
          .fact-strip-item + .fact-strip-item {
            border-left: none;
          }
          .fact-strip-item:nth-child(even) {
            border-left: 1px solid rgba(255,144,33,0.12);
          }
          .fact-strip-item:nth-child(n+3) {
            border-top: 1px solid rgba(255,144,33,0.08);
            padding-top: 32px;
            margin-top: 32px;
          }
        }
      `}</style>

      <div className="fact-strip-grid">
        {facts.map(({ number, label, sub }) => (
          <div key={label} className="fact-strip-item">
            <p
              style={{
                fontFamily: "'Cormorant Garant', serif",
                color: "#ff9021",
                fontSize: "clamp(44px, 5vw, 64px)",
                fontWeight: 600,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {number}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#fdf6ee",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                marginBottom: 6,
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(253,246,238,0.45)",
                fontSize: 12,
                lineHeight: 1.4,
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
