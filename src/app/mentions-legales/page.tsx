import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et politique de confidentialité du site Bouillonnantes.",
};

export default function MentionsLegalesPage() {
  return (
    <main style={{ flex: 1 }}>
      <PageHeader title="Mentions Légales" />

      <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Éditeur du site
          </h2>
          <div
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            <p>Bouillonnantes SAS</p>
            <p>Nantes, France</p>
            <p>
              Contact :{" "}
              <a
                href="mailto:contact@bouillonnantes.fr"
                style={{ color: "#ff9021", textDecoration: "none" }}
              >
                contact@bouillonnantes.fr
              </a>
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Hébergement
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Ce site est hébergé par GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco,
            CA 94107, États-Unis). Les fichiers sont servis via un CDN mondial. Le site est une
            application statique : aucune donnée personnelle n&apos;est collectée ni stockée par
            l&apos;hébergeur au-delà des logs de connexion standard.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Données personnelles (RGPD)
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            Ce site ne collecte aucune donnée personnelle directement. Il n&apos;utilise pas de cookies
            analytiques, de traceurs publicitaires, ni de scripts de mesure d&apos;audience.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            Le formulaire de contact de la page «&nbsp;Devenir Revendeur&nbsp;» transmet les données
            saisies (nom, nom de boutique, email, message) vers le service tiers Formspree
            (Formspree, Inc., États-Unis), qui les achemine par email aux fondatrices. Ces données
            ne sont pas stockées sur ce site. En soumettant le formulaire, vous acceptez que vos
            informations soient traitées par Formspree conformément à leur politique de
            confidentialité.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
            de suppression de vos données. Pour exercer ces droits, contactez-nous à
            l&apos;adresse indiquée ci-dessus.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Cookies
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Ce site n&apos;utilise aucun cookie de traçage ou d&apos;analyse. Aucun bandeau de
            consentement n&apos;est nécessaire. La carte interactive («&nbsp;Où Nous Trouver&nbsp;»)
            charge les tuiles OpenStreetMap depuis des serveurs tiers, sans dépôt de cookie de
            suivi publicitaire.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Newsletter
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            En vous inscrivant à la newsletter Bouillonnantes, votre adresse email est transmise à
            Brevo (Sendinblue SAS, 55 rue d&apos;Amsterdam, 75008 Paris), notre prestataire d&apos;envoi
            d&apos;emails. Elle est utilisée exclusivement pour vous envoyer les communications auxquelles
            vous avez souscrit (actualités du projet, recettes). Elle n&apos;est pas revendue ni
            transmise à des tiers.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 12,
            }}
          >
            Votre inscription est soumise à un double opt-in : vous recevrez un email de confirmation
            et ne serez ajouté(e) à notre liste qu&apos;après avoir cliqué sur le lien de validation.
            Vous pouvez vous désabonner à tout moment via le lien présent dans chaque email.
          </p>
          <p
            style={{
              color: "rgba(253,246,238,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            Pour en savoir plus sur la gestion de vos données par Brevo :{" "}
            <a
              href="https://www.brevo.com/fr/legal/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff9021", textDecoration: "none" }}
            >
              politique de confidentialité de Brevo
            </a>
            .
          </p>
        </section>

        <section>
          <h2
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 26,
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Propriété intellectuelle
          </h2>
          <p
            style={{
              color: "rgba(253,246,238,0.6)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            L&apos;ensemble des contenus de ce site (textes, images, identité visuelle) sont la
            propriété exclusive de Bouillonnantes SAS. Toute reproduction, même partielle, est
            interdite sans accord préalable écrit.
          </p>
        </section>
      </article>
    </main>
  );
}
