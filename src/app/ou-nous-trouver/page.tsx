import { PageHeader } from "@/components/ui/PageHeader";
import { StoreMap } from "@/components/store/StoreMap";
import { StoreListItem } from "@/components/store/StoreListItem";
import { stores } from "@/data/stores";

export const metadata = {
  title: "Où Nous Trouver",
  description:
    "Trouvez nos bouillons d'os artisanaux dans 16 boutiques partenaires à Nantes : épiceries fines, boucheries et magasins bio.",
};

const categoryOrder = ["epicerie", "boucherie", "bio", "strategique"] as const;
const categoryLabels: Record<string, string> = {
  epicerie: "Épiceries fines",
  boucherie: "Boucheries",
  bio: "Magasins bio",
  strategique: "Lieux stratégiques",
};

export default function OuNousTrouverPage() {
  const storesByCategory = categoryOrder.map((cat) => ({
    key: cat,
    label: categoryLabels[cat],
    items: stores.filter((s) => s.category === cat),
  }));

  return (
    <main style={{ flex: 1 }}>
      <PageHeader
        title="Où Nous Trouver"
        eyebrow="16 boutiques partenaires"
        subtitle="Retrouvez nos bouillons d'os dans une sélection d'épiceries fines, boucheries et magasins bio à Nantes."
      />

      {/* Map + List layout */}
      <section style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Interactive map */}
          <div style={{ height: 520, position: "sticky", top: 80 }}>
            <StoreMap stores={stores} />
          </div>

          {/* Categorised list */}
          <div>
            {storesByCategory.map(({ key, label, items }) =>
              items.length === 0 ? null : (
                <div key={key} style={{ marginBottom: 40 }}>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garant', serif",
                      color: "#fdf6ee",
                      fontSize: 22,
                      fontWeight: 600,
                      marginBottom: 4,
                      paddingBottom: 8,
                      borderBottom: "2px solid rgba(255,144,33,0.2)",
                    }}
                  >
                    {label}
                  </h2>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {items.map((store) => (
                      <StoreListItem key={store.id} store={store} />
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
