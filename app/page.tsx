import type { Metadata } from "next";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import ReleaseCountdown, { InitialParts } from "./ReleaseCountdown";

const RELEASE_TARGET = Date.UTC(2026, 7, 20, 0, 0, 0);

function computeInitial(): InitialParts {
  const now = Date.now();
  const ms = RELEASE_TARGET - now;
  if (ms <= 0) {
    return { days: "0", hours: "00", minutes: "00", seconds: "00", expired: true };
  }
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return {
    days: String(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    expired: false,
  };
}

export const metadata: Metadata = {
  title: "Mortal Shell 2 Guide: Maps, Bosses, Builds & Weapons",
  description:
    "Mortal Shell 2 guide - Shell locations, interactive map, boss strategies, best builds, weapons database, and full walkthrough. Master Mortal Shell II.",
  alternates: {
    canonical: pageURL("/"),
  },
  openGraph: {
    title: "Mortal Shell 2 Guide: Maps, Bosses, Builds & Weapons",
    description:
      "Mortal Shell 2 guide - Shell locations, interactive map, boss strategies, best builds, weapons database, and walkthrough.",
    url: pageURL("/"),
    type: "website",
    siteName: "Mortal Shell 2 Guide",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Guide",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mortalshell",
    title: "Mortal Shell 2 Guide: Maps, Bosses, Builds & Weapons",
    description:
      "Mortal Shell 2 guide - Shell locations, interactive map, boss strategies, best builds, weapons database, and walkthrough.",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Guide",
      },
    ],
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
        text: "Mortal Shell 2 releases for PC (Steam), PS5, and Xbox.",
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
        <section className="hero">
          <div className="hero-title">
            <span className="eyebrow">Unofficial Fan Resource</span>
            <h1>Mortal Shell 2 Guide – Walkthrough, Maps, Bosses, Builds &amp; Weapons</h1>
            <span className="title-rule" />

            <p className="lede">
              Your complete resource for Mortal Shell II — every Shell
              location, boss strategy, weapon stat, and hidden secret, updated
              as we play through the game.
            </p>

            <div className="hero-cta">
              <a className="btn btn-outline" href="/map/">
                Open Interactive Map
              </a>
              <a className="btn btn-primary" href="/updates/">
                Latest Updates
              </a>
            </div>
          </div>

          <ReleaseCountdown initial={computeInitial()} />
        </section>

        <section className="article">
          <h2>What Is Mortal Shell 2?</h2>
          <p>
            Mortal Shell 2 is the sequel to Cold Symmetry's 2020 action RPG
            Mortal Shell. It continues the harsh combat and dark fantasy
            setting of the original while expanding the world, adding new
            Shells to inhabit, and refining the core systems. The game
            releases for PC via Steam, PlayStation 5, and Xbox Series X/S.
          </p>
          <p>
            You do not play as a fixed character. You control a vessel who can
            inhabit different Shells, each with its own stats, playstyle, and
            signature ability. The Shell system is what sets this series apart
            from other soulslike games. Eight Shells have been confirmed so
            far, ranging from heavy warrior types to agile mages and hybrid
            builds.
          </p>

          <h2>Key Features & Mechanics</h2>
          <p>
            The Shell system remains the foundation of combat. Each Shell
            changes your health pool, stamina regeneration, and access to
            specific weapons. Swapping between Shells at Tarstone shrines lets
            you adapt your build to the encounter ahead. A boss that punishes
            heavy armor might call for a faster Shell, while a dungeon with
            hordes of weak enemies favors high stamina and crowd control.
          </p>
          <p>
            Combat uses a stamina-based system where every action, from
            dodging to attacking to parrying, draws from the same pool.
            Managing stamina is the difference between surviving a fight and
            being one-shot. The game rewards patience. Reading enemy windups,
            timing parries, and knowing when to disengage matters more than
            spamming attacks.
          </p>
          <p>
            Tarstones serve as checkpoints and fast travel nodes. Beacons
            scattered across the map unlock quick travel routes once
            activated. Both are vital for navigation in the open world, which
            is larger than the first game and designed for exploration rather
            than linear progression.
          </p>

          <h2>Browse the Complete Guide</h2>
          <p>
            This guide covers every major system and location in Mortal Shell
            2. Use the <a href="/map/">interactive map</a> to plan your route
            and find every Shell, boss, Tarstone, and hidden collectible. Read
            up on each Shell's stats and location in the{' '}
            <a href="/shells/">Shells guide</a>. Study{' '}
            <a href="/bosses/">boss strategies</a> before heading into a
            fight. Browse weapon stats to find the right tool for your build.
            The eight sections below cover the full scope of what we track and
            update as we play through the game.
          </p>
        </section>

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
