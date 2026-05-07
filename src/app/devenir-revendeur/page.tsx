import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/form/ContactForm";

export const metadata = {
  title: "Devenir Revendeur",
  description:
    "Vous tenez une épicerie fine, une boucherie ou un magasin bio à Nantes ? Découvrez notre offre partenaire et contactez-nous pour référencer nos bouillons d'os artisanaux.",
};

const avantages = [
  {
    title: "Trois références prêtes à vendre",
    body: "Bœuf, Poulet, Porc Asiatique — des références qui couvrent un large spectre de clientèle, de l'amateur de cuisine classique au curieux de saveurs asiatiques.",
  },
  {
    title: "Un positionnement épicerie fine",
    body: "Nos produits sont conçus pour les rayons épicerie fine et boucherie artisanale — pas pour la grande distribution. Ils s'adressent à une clientèle exigeante, prête à payer le juste prix pour un produit authentique.",
  },
  {
    title: "Un accompagnement à l'intégration",
    body: "Nous fournissons les fiches produits, les visuels, et les informations nutritionnelles. Nous pouvons organiser une dégustation en boutique si vous le souhaitez.",
  },
  {
    title: "Un partenariat de proximité",
    body: "Nous livrons en circuit court, directement depuis Nantes. Vous connaîtrez les fondatrices par leur prénom. Les commandes et la logistique sont pensées pour s'adapter à votre volume.",
  },
];

export default function DevenirRevendeurPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Devenir Revendeur"
        eyebrow="Partenariat"
        subtitle="Nous cherchons des partenaires qui partagent notre conviction : que la qualité d'un ingrédient compte autant que le geste du cuisinier."
      />

      {/* Proposition */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            marginBottom: 80,
          }}
        >
          {avantages.map(({ title, body }) => (
            <article
              key={title}
              style={{
                background: "#1c0e06",
                border: "1px solid rgba(255,144,33,0.1)",
                padding: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garant', serif",
                  color: "#fdf6ee",
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "rgba(253,246,238,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.75,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        {/* Contact form */}
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 32,
              fontWeight: 600,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Prenons contact
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.55)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Remplissez le formulaire ci-dessous. Léa ou Claire vous répondra sous 48 heures.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
