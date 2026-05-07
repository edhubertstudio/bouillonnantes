import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Pourquoi Bouillonnantes",
  description:
    "Découvrez la philosophie de Bouillonnantes : un bouillon d'os pensé pour les amateurs de bonne cuisine, pas pour les rayons compléments alimentaires.",
};

export default function PourquoiPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Pourquoi Bouillonnantes"
        eyebrow="Notre manifeste"
        subtitle="Un bouillon d'os pensé pour la table, pas pour l'étagère à compléments."
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
            Le bouillon d&apos;os est un ingrédient de cuisine
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
            Avant d&apos;être un rituel bien-être, le bouillon d&apos;os est un fond de cuisine.
            C&apos;est ce qui donne de la profondeur à un risotto, de la rondeur à une sauce, et de la
            chaleur à un bol du matin. Pendant des siècles, les cuisinières le préparaient elles-mêmes
            — longtemps, patiemment, avec les bons os.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Nous, nous avons simplement décidé de le faire à leur place. Avec les mêmes exigences.
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
            Un sourcing local et organique, par conviction
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
            Nos os proviennent de boucheries artisanales sélectionnées autour de Nantes. Chaque
            référence est conçue à partir d&apos;animaux élevés en plein air, nourris sans OGM,
            certifiés bio. Pas par effet de mode — parce que ça change le goût.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Un bouillon mijoté 18 heures à partir d&apos;os issus de l&apos;élevage intensif ne ressemble
            pas — ni en goût, ni en texture — à celui préparé à partir d&apos;os de bœuf Charolais
            sélectionnés par un boucher qui connaît l&apos;éleveur. Cette différence, nous la défendons.
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
            Pour les amateurs de bonne cuisine, pas pour les compteurs de collagène
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
            Oui, notre bouillon est riche en collagène naturel. Oui, il peut s&apos;intégrer dans un
            rituel matinal. Mais ce n&apos;est pas le prisme depuis lequel nous l&apos;avons conçu.
            Nous l&apos;avons conçu pour Sophie qui cherche une base de soupe digne de ce nom. Pour Marc
            qui veut proposer quelque chose d&apos;authentiquement local dans son épicerie fine. Pour
            vous, qui aimez bien manger.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Le bouillon d&apos;os Bouillonnantes se trouve dans les rayons épicerie fine, pas dans
            les rayons compléments alimentaires. Et ce positionnement, il est délibéré.
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
            href="/notre-gamme"
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
            Découvrir nos bouillons
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
            Où nous trouver →
          </Link>
        </div>
      </article>
    </main>
  );
}
