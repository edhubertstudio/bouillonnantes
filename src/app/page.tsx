export default function HomePage() {
  return (
    <main
      style={{ background: "#180c04", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Eyebrow */}
      <p
        style={{ color: "#ff9021", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.15em" }}
        className="text-sm uppercase mb-6"
      >
        Artisanal · Nantes · Bio
      </p>

      {/* Heading */}
      <h1
        style={{ fontFamily: "'Cormorant Garant', serif", color: "#fdf6ee", lineHeight: 1.1 }}
        className="text-5xl md:text-7xl font-semibold mb-6 max-w-3xl"
      >
        Le bouillon d&apos;os qui réchauffe et nourrit
      </h1>

      {/* Body */}
      <p
        style={{ color: "rgba(253,246,238,0.65)", fontFamily: "'DM Sans', sans-serif" }}
        className="text-lg leading-relaxed max-w-xl mb-10"
      >
        Trois références artisanales — Bœuf, Poulet, Porc Asiatique — produites à Nantes et disponibles dans
        16&nbsp;boutiques partenaires.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#"
          style={{
            background: "#ff9021",
            color: "#180c04",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
          className="px-8 py-4 text-sm uppercase min-w-[200px] text-center"
        >
          Où nous trouver
        </a>
        <a
          href="#"
          style={{ color: "#fdf6ee", fontFamily: "'DM Sans', sans-serif", borderBottom: "1px solid rgba(253,246,238,0.3)" }}
          className="text-sm pb-1"
        >
          Notre histoire →
        </a>
      </div>

      {/* Fact strip */}
      <div
        style={{ borderTop: "1px solid rgba(255,144,33,0.15)" }}
        className="flex gap-8 sm:gap-12 mt-20 pt-10"
      >
        {[
          ["16", "boutiques"],
          ["3", "références"],
          ["100%", "bio"],
          ["2", "fondatrices"],
        ].map(([num, label]) => (
          <div key={label} className="text-center">
            <p style={{ color: "#ff9021", fontFamily: "'Cormorant Garant', serif" }} className="text-3xl font-semibold">
              {num}
            </p>
            <p style={{ color: "rgba(253,246,238,0.5)", fontFamily: "'DM Sans', sans-serif" }} className="text-xs uppercase tracking-widest mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
