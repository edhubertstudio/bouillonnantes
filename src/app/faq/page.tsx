import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur les bouillons d'os Bouillonnantes : qu'est-ce que c'est, comment l'utiliser, où l'acheter, conservation et convenance alimentaire.",
};

const faqs = [
  {
    q: "Qu'est-ce qu'un bouillon d'os artisanal ?",
    a: "Un bouillon d'os est obtenu en faisant mijoter des os (bœuf, poulet, porc) dans de l'eau pendant une longue durée — chez nous, minimum 18 heures. Cette cuisson lente libère le collagène, les minéraux et les acides aminés naturellement présents dans les os. Le résultat est un liquide riche, savoureux, avec une texture légèrement gélatineuse quand il refroidit — signe d'une extraction complète.",
  },
  {
    q: "Comment utiliser le bouillon d'os Bouillonnantes ?",
    a: "De trois façons principales : chaud dans une grande tasse le matin (avec un peu de citron et d'épices), comme base de sauce ou de cuisson pour sublimer un risotto ou une poêlée, ou en fond de bouillon pour vos soupes et ramen. Consultez notre section Le Rituel pour des idées concrètes.",
  },
  {
    q: "Où trouver vos bouillons d'os ?",
    a: "Nos trois références sont disponibles dans 16 boutiques partenaires à Nantes : épiceries fines, boucheries artisanales et magasins bio sélectionnés. Consultez notre carte interactive pour trouver le point de vente le plus proche.",
  },
  {
    q: "Quelle est la durée de conservation ?",
    a: "Nos bouillons sont pasteurisés et se conservent au réfrigérateur 10 jours après ouverture. Non ouverts, ils se conservent jusqu'à la date indiquée sur l'emballage. Vous pouvez également les congeler jusqu'à 3 mois sans perte de qualité — idéal pour en avoir toujours sous la main.",
  },
  {
    q: "Vos bouillons conviennent-ils à tous les régimes alimentaires ?",
    a: "Nos bouillons sont naturellement sans gluten et sans lactose. Ils contiennent de l'extrait d'animal (bœuf, poulet ou porc) et ne conviennent donc pas aux végétariens et végans. Le Bouillon de Poulet est le plus léger en matières grasses. Le Porc Asiatique contient des épices (gingembre, citronnelle, anis étoilé) — vérifiez la liste des ingrédients si vous avez des sensibilités spécifiques.",
  },
  {
    q: "Vos produits sont-ils certifiés bio ?",
    a: "Oui. Tous nos os et ingrédients proviennent d'élevages certifiés agriculture biologique. Nos fournisseurs sont sélectionnés dans la région nantaise pour leur engagement sur la qualité d'élevage et la traçabilité des animaux.",
  },
];

export default function FaqPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="FAQ"
        eyebrow="Questions fréquentes"
        subtitle="Tout ce que vous voulez savoir sur nos bouillons d'os artisanaux."
      />

      <section style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {faqs.map(({ q, a }) => (
            <article key={q}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  color: "#fdf6ee",
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                {q}
              </h3>
              <p
                style={{
                  color: "rgba(253,246,238,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                {a}
              </p>
            </article>
          ))}
        </div>

        {/* CTA — no dead end */}
        <div
          style={{
            borderTop: "1px solid rgba(255,144,33,0.15)",
            marginTop: 64,
            paddingTop: 40,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Link
            href="/ou-nous-trouver"
            style={{
              background: "#ff9021",
              color: "#180c04",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              padding: "14px 28px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            Où nous trouver
          </Link>
          <Link
            href="/devenir-revendeur"
            style={{
              color: "#ff9021",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,144,33,0.4)",
              paddingBottom: 2,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Devenir revendeur →
          </Link>
        </div>
      </section>
    </main>
  );
}
