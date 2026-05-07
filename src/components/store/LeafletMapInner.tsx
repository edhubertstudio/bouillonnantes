"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import type { Store } from "@/types/index";
import { StorePinCallout } from "./StorePinCallout";

// Leaflet default icon fix for static export
let L: typeof import("leaflet") | null = null;

interface LeafletMapInnerProps {
  stores: Store[];
}

export function LeafletMapInner({ stores }: LeafletMapInnerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    import("leaflet").then((leaflet) => {
      if (cancelled || !mapRef.current) return;
      L = leaflet.default;

      // Fix default marker icons broken by webpack/turbopack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const nantesCenter: [number, number] = [47.2184, -1.5536];
      const map = L.map(mapRef.current!, { zoomControl: true, scrollWheelZoom: false }).setView(
        nantesCenter,
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      stores.forEach((store) => {
        const marker = L!.marker([store.lat, store.lng]).addTo(map);
        marker.on("click", () => {
          setSelectedStore((prev) => (prev?.id === store.id ? null : store));
        });
      });

      map.on("click", (e) => {
        // Dismiss callout when clicking on the map background
        if (!(e.originalEvent.target as HTMLElement).closest(".store-callout")) {
          setSelectedStore(null);
        }
      });

      mapInstanceRef.current = map;
    });

    return () => {
      cancelled = true;
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [stores]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "100%", background: "#1c0e06" }}
      />
      {selectedStore && (
        <StorePinCallout
          store={selectedStore}
          onClose={() => setSelectedStore(null)}
        />
      )}
    </div>
  );
}
