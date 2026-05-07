import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Le Rituel",
  description:
    "Comment intégrer le bouillon d'os dans votre quotidien ? Trois moments simples : le matin dans une tasse, à midi comme base de sauce, le soir en bouillon de cuisson.",
};

const moments = [
  {
    time: "Le matin",
    title: "Dans une tasse, chaud",
    body: "Versez 250 ml de bouillon dans une tasse. Ajoutez une tranche de citron, une pincée de piment d'Espelette. Tenez la tasse à deux mains. C'est tout. Une façon de commencer la journée avec quelque chose de vrai — pas de poudres, pas d'actifs, juste un bouillon bien fait.",
  },
  {
    time: "Le midi",
    title: "Comme base de sauce",
    body: "Déglacer une poêle avec du bouillon de bœuf plutôt qu'avec de l'eau, ça change tout. La sauce se réduit, se concentre, prend de la profondeur en deux minutes. Le risotto, la sauce bourguignonne, la poêlée de champignons — ils méritent mieux que de l'eau chaude.",
  },
  {
    time: "Le soir",
    title: "En bouillon de cuisson",
    body: "Cuisez vos céréales — riz, quinoa, millet — dans du bouillon de poulet plutôt que dans de l'eau. Préparez votre ramen avec le Porc Asiatique comme fond. Utilisez le Bœuf pour braiser une épaule d'agneau. Ce n'est pas de la cuisine gastronomique — c'est juste une bonne habitude.",
  },
];

export default function LeRituelPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Le Rituel"
        eyebrow="Un geste quotidien"
        subtitle="Trois façons simples d'intégrer le bouillon d'os dans votre vie — sans protocole, sans comptage."
      />

      <section style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {moments.map(({ time, title, body }) => (
            <article key={time} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  color: "#ff9021",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {time}
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  color: "#fdf6ee",
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h2>
              <p
                style={{
                  color: "rgba(253,246,238,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
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
            href="/recettes"
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
            Voir les recettes
          </Link>
          <Link
            href="/ou-nous-trouver"
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
            {"Où nous trouver →"}
          </Link>
        </div>
      </section>
    </main>
  );
}
