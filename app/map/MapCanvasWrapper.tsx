"use client";

import dynamic from "next/dynamic";

const MapCanvas = dynamic(() => import("./MapCanvas"), {
  ssr: false,
  // Placeholder skeleton that matches the actual ms2-map-wrap dimensions +
  // sidebar layout. Before this optimisation we showed a 1-line "Loading
  // map…" <p>, which (a) caused 2x the layout shift when the real Leaflet
  // container mounted at different height, and (b) made perceived wait
  // feel longer because the user stared at empty space during the dynamic
  // import + Leaflet init window.
  loading: () => (
    <div
      className="ms2-map-wrap"
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      <aside className="ms2-side">
        <h2 className="ms2-title">Locations</h2>
        <div style={{ height: 36, borderRadius: 4, background: "var(--bg-base)", border: "1px solid color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
        <div style={{ height: 36, borderRadius: 4, background: "var(--bg-base)", border: "1px solid color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
        <div style={{ height: 48, borderRadius: 4, background: "linear-gradient(90deg, color-mix(in srgb, var(--color-gold) 8%, transparent), transparent 50%)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ height: 36, borderRadius: 4, background: "var(--bg-base)", border: "1px solid color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
          <div style={{ height: 36, borderRadius: 4, background: "var(--bg-base)", border: "1px solid color-mix(in srgb, var(--color-gold) 25%, transparent)" }} />
        </div>
        <div>
          <div style={{ height: 14, width: 140, marginBottom: 8, background: "var(--bg-base)", borderRadius: 3 }} />
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ height: 40, marginBottom: 4, background: "color-mix(in srgb, var(--bg-card) 50%, transparent)", borderRadius: 4 }} />
          ))}
        </div>
        <div style={{ marginTop: "auto", height: 42, borderRadius: 999, border: "1px solid var(--color-blood)", opacity: 0.5 }} />
      </aside>
      <div className="ms2-map-host">
        <div
          id="map"
          style={{
            height: "600px",
            width: "100%",
            minHeight: "600px",
            background: "var(--bg-base)",
            backgroundImage:
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-gold) 8%, transparent) 0%, transparent 55%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            fontFamily: "Cinzel, serif",
            fontSize: 13,
            letterSpacing: ".08em",
          }}
        >
          Loading map…
        </div>
      </div>
    </div>
  ),
});

export default function MapCanvasWrapper() {
  return <MapCanvas />;
}
