interface CategoryBadgeProps {
  category: string;
}

const labels: Record<string, string> = {
  epicerie: "Épicerie fine",
  boucherie: "Boucherie",
  bio: "Magasin bio",
  strategique: "Lieu stratégique",
  facile: "Facile",
  moyen: "Moyen",
  "avancé": "Avancé",
  boeuf: "Bœuf",
  poulet: "Poulet",
  "porc-asiatique": "Porc Asiatique",
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        border: "1px solid rgba(255,144,33,0.4)",
        color: "#ff9021",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {labels[category] ?? category}
    </span>
  );
}
