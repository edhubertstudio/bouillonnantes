"use client";

import dynamic from "next/dynamic";
import type { Store } from "@/types/index";

const LeafletMapInner = dynamic(
  () => import("./LeafletMapInner").then((m) => m.LeafletMapInner),
  {
    ssr: false,
    loading: () => <div style={{ width: "100%", height: "100%", background: "#1c0e06" }} />,
  }
);

interface StoreMapProps {
  stores: Store[];
}

export function StoreMap({ stores }: StoreMapProps) {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 400 }}>
      <LeafletMapInner stores={stores} />
    </div>
  );
}
