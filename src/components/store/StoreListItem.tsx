import type { Store } from "@/types/index";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface StoreListItemProps {
  store: Store;
}

export function StoreListItem({ store }: StoreListItemProps) {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;

  return (
    <li
      style={{
        padding: "16px 0",
        borderBottom: "1px solid rgba(255,144,33,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <CategoryBadge category={store.category} />
      <p
        style={{
          fontFamily: "'Cormorant Garant', serif",
          color: "#fdf6ee",
          fontSize: 17,
          fontWeight: 600,
        }}
      >
        {store.name}
      </p>
      <p
        style={{
          color: "rgba(253,246,238,0.55)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          lineHeight: 1.4,
        }}
      >
        {store.address}
      </p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#ff9021",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,144,33,0.3)",
          paddingBottom: 1,
          alignSelf: "flex-start",
        }}
      >
        Itinéraire →
      </a>
    </li>
  );
}
