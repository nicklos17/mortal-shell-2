import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";
import MapCanvasWrapper from "./MapCanvasWrapper";

export const metadata: Metadata = {
  title: "Mortal Shell 2 Interactive Map – All Locations & Routes",
  description:
    "Interactive Mortal Shell 2 map with every Shell, boss, Tarstone, Beacon, and collectible location. Plan routes, find hidden items, and track your progress with our clickable map.",
  alternates: {
    canonical: pageURL("/map"),
  },
  openGraph: {
    title: "Mortal Shell 2 Interactive Map – All Locations & Routes",
    description:
      "Interactive Mortal Shell 2 map with every Shell, boss, Tarstone, Beacon, and collectible location.",
    url: pageURL("/map"),
    images: ["/assets/map-og.webp"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Map Locations",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hardened Shell",
      url: pageURL("/shells/#hardened"),
      item: {
        "@type": "Place",
        name: "Temple of the Iron Path",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5,
          longitude: -0.09,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "First Boss Arena",
      url: pageURL("/bosses/#first"),
      item: {
        "@type": "Place",
        name: "First Boss Arena",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.505,
          longitude: -0.08,
        },
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an interactive map for Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our interactive map shows all Shell locations, bosses, Tarstones, Beacons, and hidden collectibles in Mortal Shell 2.",
      },
    },
    {
      "@type": "Question",
      name: "How many locations are in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 features multiple areas including Shell locations, boss arenas, Tarstone shrines, Beacons, and hidden collectibles. Our map covers all of them.",
      },
    },
    {
      "@type": "Question",
      name: "Can I plan a route through Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, use our interactive map to plan your route. Click markers for details and use the text list below to find specific locations.",
      },
    },
  ],
};

export default function MapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="container">
        <span className="eyebrow">Explore Every Corner</span>
        <h1>Mortal Shell 2 Interactive Map</h1>
        <span className="title-rule" />

        <p className="lede">
          Explore every Mortal Shell 2 location with our interactive map — all
          Shells, bosses, Tarstones, Beacons, and hidden collectibles marked.
          Click any marker for details, or use the text list below to jump
          straight to what you need.
        </p>

        {/* 交互地图（CSR，用户用） */}
        <div className="map-frame">
          <MapCanvasWrapper />
          <noscript>
            <img
              src="/assets/map-static.webp"
              alt="Mortal Shell 2 interactive map showing all Shell, boss, Tarstone, and Beacon locations"
            />
          </noscript>
        </div>

        {/* 文字版点位清单（SSG，Google 用 + 用户跳转用） */}
        <section>
          <h2>All Shell Locations</h2>
          <ul className="loc-list">
            <li>
              <a href="/shells/#hardened">Hardened Shell</a>{" "}
              <span className="loc-note">
                — Found in the Temple of the Iron Path, after the second
                Tarstone shrine.
              </span>
            </li>
            <li>
              <a href="/shells/#nimble">Nimble Shell</a>{" "}
              <span className="loc-note">
                — Location TBD (update coming on launch).
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2>Boss Locations</h2>
          <ul className="loc-list">
            <li>
              <a href="/bosses/#first">First Boss</a>{" "}
              <span className="loc-note">
                — Arena location, nearest Beacon, recommended Shell.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2>Tarstones &amp; Beacons</h2>
          <ul className="loc-list">
            <li>
              <span className="loc-note">
                Full Tarstone and Beacon list will be added on launch day —
                August 20, 2026.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2>Hidden Collectibles &amp; Shortcuts</h2>
          <ul className="loc-list">
            <li>
              <span className="loc-note">
                Hidden items and shortcut routes will be mapped after release.
              </span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
