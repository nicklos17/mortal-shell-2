"use client";

import dynamic from "next/dynamic";

const MapCanvas = dynamic(() => import("./MapCanvas"), {
  ssr: false,
  loading: () => (
    <p style={{ color: "var(--text-secondary)", padding: "2rem" }}>
      Loading map…
    </p>
  ),
});

export default function MapCanvasWrapper() {
  return <MapCanvas />;
}
