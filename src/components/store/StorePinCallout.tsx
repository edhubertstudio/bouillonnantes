"use client";

import { useEffect, useRef } from "react";
import type { Store } from "@/types/index";
import { CategoryBadge } from "@/components/ui/CategoryBadge";

interface StorePinCalloutProps {
  store: Store;
  onClose: () => void;
}

export function StorePinCallout({ store, onClose }: StorePinCalloutProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [store.id]);

  const mapsUrl = `geo:${store.lat},${store.lng}?q=${encodeURIComponent(store.address)}`;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label={store.name}
      tabIndex={-1}
      className="store-callout"
      style={{
        position: "absolute",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "#1c0e06",
        border: "1px solid rgba(255,144,33,0.3)",
        padding: "20px 24px",
        minWidth: 260,
        maxWidth: 340,
        outline: "none",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garant', serif",
            color: "#fdf6ee",
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.2,
            marginRight: 8,
          }}
        >
          {store.name}
        </h3>
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            background: "none",
            border: "none",
            color: "rgba(253,246,238,0.7)",
            cursor: "pointer",
            fontSize: 18,
            padding: 0,
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
      <div style={{ marginBottom: 12 }}>
        <CategoryBadge category={store.category} />
      </div>
      <p
        style={{
          color: "rgba(253,246,238,0.6)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          lineHeight: 1.5,
          marginBottom: 16,
        }}
      >
        {store.address}
      </p>
      <a
        href={mapsUrl}
        style={{
          color: "#ff9021",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,144,33,0.4)",
          paddingBottom: 1,
        }}
      >
        Itinéraire →
      </a>
    </div>
  );
}
