const facts = [
  { number: "16", label: "boutiques" },
  { number: "3", label: "références" },
  { number: "100%", label: "bio" },
  { number: "2", label: "fondatrices" },
];

export function FactStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid rgba(255,144,33,0.15)",
        borderBottom: "1px solid rgba(255,144,33,0.1)",
        padding: "40px 24px",
        background: "#1c0e06",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "32px 48px",
        }}
      >
        {facts.map(({ number, label }) => (
          <div key={label} style={{ textAlign: "center", minWidth: 80 }}>
            <p
              style={{
                color: "#ff9021",
                fontFamily: "'Cormorant Garant', serif",
                fontSize: 36,
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {number}
            </p>
            <p
              style={{
                color: "rgba(253,246,238,0.65)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginTop: 6,
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
