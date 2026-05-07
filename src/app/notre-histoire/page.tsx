import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Notre Histoire",
  description:
    "L'histoire de Bouillonnantes : deux fondatrices nantaises, une ancienne directrice d'agence et une infirmière cuisinière, et leur passion pour le bouillon d'os artisanal.",
};

export default function NotreHistoirePage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Notre Histoire"
        eyebrow="Deux fondatrices, une obsession"
        subtitle="Une ancienne directrice d'agence et une infirmière passionnée de cuisine — réunies par leur conviction que le bouillon d'os mérite une meilleure place dans nos cuisines."
      />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Le point de départ : un bouillon de grand-mère modernisé
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            Léa avait l&apos;habitude de cuisiner des bouillons d&apos;os depuis des années — une tradition
            héritée de sa grand-mère bretonne qui ne jetait jamais une carcasse. Infirmière de formation,
            elle avait aussi la conviction, renforcée par son terrain quotidien, que la qualité de
            l&apos;alimentation influence directement la vitalité.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Claire, elle, sortait de 10 ans dans le conseil en communication. Elle savait construire
            une marque, raconter une histoire, et trouver les bons partenaires. Quand Léa lui a fait
            goûter son bouillon de bœuf aux côtes de bœuf Charolais, la décision s&apos;est prise
            en un dîner.
          </p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Nantes, ancrage de la marque
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            Le choix de Nantes n&apos;est pas anodin. La ville dispose d&apos;un tissu artisanal
            alimentaire dense — boucheries indépendantes engagées dans l&apos;élevage raisonné,
            épiceries fines exigeantes, marchés de producteurs actifs. C&apos;est ici qu&apos;elles
            ont trouvé leurs fournisseurs, leurs premiers points de vente, et une communauté de
            consommateurs prêts à payer le juste prix pour un produit qui tient ses promesses.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Aujourd&apos;hui, Bouillonnantes est référencée dans 16 boutiques de Nantes et de sa
            périphérie. Toute la production reste locale, en circuit court, avec des partenaires
            qu&apos;elles connaissent par leur prénom.
          </p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Trois références, une exigence constante
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            Elles ont commencé avec le Bœuf — le classique, le référentiel. Puis le Poulet, pour
            ceux qui cherchent quelque chose de plus léger mais tout aussi complexe. Et enfin le
            Porc Asiatique — leur référence signature, qui a surpris tout le monde, y compris
            leurs proches, par ses notes de gingembre et citronnelle.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Chaque recette est le fruit de dizaines d&apos;itérations. Chaque bouillon est mijoté
            un minimum de 18 heures. Chaque lot est goûté avant expédition. Pas de conservateurs,
            pas de raccourcis.
          </p>
        </section>

        {/* CTA — no dead end */}
        <div
          style={{
            borderTop: "1px solid rgba(255,144,33,0.15)",
            paddingTop: 40,
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Link
            href="/devenir-revendeur"
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
            Devenir revendeur
          </Link>
          <Link
            href="/notre-gamme"
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
            Découvrir nos bouillons →
          </Link>
        </div>
      </article>
    </main>
  );
}
