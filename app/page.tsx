import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mortal Shell 2 Guide – Shells, Map, Bosses & Builds",
  description:
    "Complete Mortal Shell 2 guide covering all Shell locations, interactive map, boss strategies, best builds, weapons database, and full walkthrough. Master Mortal Shell II.",
  alternates: {
    canonical: pageURL("/"),
  },
  openGraph: {
    title: "Mortal Shell 2 Guide – Shells, Map, Bosses & Builds",
    description:
      "Complete Mortal Shell 2 guide covering all Shell locations, interactive map, boss strategies, best builds, weapons database, and full walkthrough.",
    url: pageURL("/"),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does Mortal Shell 2 release?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 releases on August 20, 2026 for PC (Steam), PS5, and Xbox.",
      },
    },
    {
      "@type": "Question",
      name: "How many Shells are in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 features several new Shells. See our All Shells page for complete locations and abilities.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an interactive map for Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we have a complete interactive map showing all Shell locations, bosses, Tarstones, Beacons, and hidden collectibles.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our best builds guide covers top Shell and weapon combinations for different playstyles.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find a Mortal Shell 2 walkthrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our full walkthrough covers every area, boss, and secret in Mortal Shell 2.",
      },
    },
  ],
};

const cards = [
  {
    eyebrow: "Explore",
    title: "Interactive Map",
    href: "/map/",
    desc: "Full Mortal Shell 2 interactive map with all Shell locations, Tarstones, Beacons, boss arenas, and hidden collectibles. Plan your route before you dive in.",
    link: "Open Interactive Map →",
  },
  {
    eyebrow: "Discover",
    title: "All Shells & Locations",
    href: "/shells/",
    desc: "Every playable Shell in Mortal Shell 2 — stats, abilities, and exact locations. Learn which Shell fits your playstyle.",
    link: "View All Shells →",
  },
  {
    eyebrow: "Strategies",
    title: "Boss Guide",
    href: "/bosses/",
    desc: "Detailed boss strategies for every encounter — attack patterns, weak points, recommended Shells, and phase-by-phase breakdowns.",
    link: "Read Boss Guide →",
  },
  {
    eyebrow: "Optimize",
    title: "Best Builds",
    href: "/builds/",
    desc: "Top Mortal Shell 2 builds ranked by playstyle — tank, DPS, speed, and hybrid setups. Shell + weapon combinations that dominate.",
    link: "Explore Builds →",
  },
  {
    eyebrow: "Database",
    title: "Weapons Database",
    href: "/weapons/",
    desc: "Complete Mortal Shell 2 weapons list with stats, scaling, special moves, and where to find each one.",
    link: "Browse Weapons →",
  },
  {
    eyebrow: "Full Guide",
    title: "Full Walkthrough",
    href: "/walkthrough/",
    desc: "Step-by-step Mortal Shell 2 walkthrough covering every area, every boss, and every ending.",
    link: "Start Walkthrough →",
  },
  {
    eyebrow: "New Player",
    title: "Beginner Tips",
    href: "/tips/",
    desc: "Essential Mortal Shell 2 tips every new player needs — mechanics explained, early-game priorities, and mistakes to avoid.",
    link: "Read Tips →",
  },
  {
    eyebrow: "Fresh",
    title: "Patch Notes & Updates",
    href: "/updates/",
    desc: "Latest Mortal Shell 2 updates, balance changes, bug fixes, and new content — tracked and explained.",
    link: "Check Updates →",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="container">
        <span className="eyebrow">Unofficial Fan Resource</span>
        <h1>Mortal Shell 2 Guide</h1>
        <span className="title-rule" />

        <p className="lede">
          Your complete resource for Mortal Shell II — every Shell location,
          boss strategy, weapon stat, and hidden secret, updated as we play
          through the game.
        </p>

        <div className="card-grid">
          {cards.map((card) => (
            <section className="card" key={card.href}>
              <span className="eyebrow">{card.eyebrow}</span>
              <h2>
                <a href={card.href}>{card.title}</a>
              </h2>
              <p>{card.desc}</p>
              <a href={card.href} className="card-link">
                {card.link}
              </a>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
