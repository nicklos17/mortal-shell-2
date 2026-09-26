export const dynamic = 'force-static';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import ShellWheel from "./ShellWheel";
import { SHELLS } from "@/lib/shells";
import { ShellIcon } from "@/lib/shell-icon";
import AdBanner from "@/components/AdBanner";
import BannerAd from "@/components/BannerAd";

const TITLE = "Mortal Shell 2 Shells";
const PAGE_PATH = "/shells";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Every playable Shell in Mortal Shell 2 explained — how the Shell system works, how many Shells there are, their names, playstyles, and signature abilities. Your complete Shells class guide.",
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description:
      "Every playable Shell in Mortal Shell 2 — names, playstyles, locations, and signature abilities.",
    url: pageURL(PAGE_PATH),
    type: "website",
    siteName: "Mortal Shell 2 Wiki",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Wiki",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mortalshell",
    title: TITLE,
    description:
      "Every playable Shell in Mortal Shell 2 — names, playstyles, locations, and signature abilities.",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Wiki",
      },
    ],
  },
};

/* ============================================================
   页面
   ============================================================ */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Shells",
  itemListElement: SHELLS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
  })),
};

export default function ShellsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="container">
        <span className="eyebrow">Classes &amp; Playable Characters</span>
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          Shells are the heart of Mortal Shell II. You don&apos;t build one fixed
          character — you are <strong style={{ color: "var(--color-gold)" }}>the
            Harbinger</strong>, a shapeless being who awakens and inhabits the
          fallen bodies of forgotten warriors. Each Shell is a complete
          &ldquo;class&rdquo; with its own stats, combat identity, and signature
          abilities you can swap between at will.
        </p>

        <div className="note">
          <strong>Not sure who to pick?</strong> See our{" "}
          <Link href="/shells/best-shell">Mortal Shell 2 best Shell tier list</Link>{" "}
          →
        </div>

        <BannerAd />

        {/* 总览：宿主 ↔ 躯壳 关系图 */}
        <section className="article">
          <h2>How the Shell System Works</h2>
          <ShellWheel shells={SHELLS} />
          <p>
            Instead of a traditional level-up-and-pick-a-class loop, Mortal
            Shell II hands you a roster of <strong style={{ color: "var(--color-gold)" }}>eight
              playable Shells</strong> scattered across the world. Find a Shell,
            awaken it, and you can slip into its body to fight as that warrior.
            Swap whenever the situation demands — a fast assassin for a
            hit-and-run, a heavy tank to weather a boss, a sustain Shell to
            outlast a swarm.
          </p>
          <ul>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Swap to adapt.</strong>{" "}
              Each Shell plays like its own class; switching re-shapes your
              entire moveset and stats.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>A built-in safety net.</strong>{" "}
              If a Shell&apos;s health is depleted, your true form is knocked
              out of the body rather than dying outright — you lose the Shell&apos;s
              powers temporarily, but can reclaim the body and keep fighting.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Grow each Shell independently.</strong>{" "}
              Spend Shell Points on individual Shell skill trees, and clear
              areas / reach checkpoints to earn stat increases for that Shell.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Recover their memories.</strong>{" "}
              Discovering a Shell&apos;s lost memories unlocks deeper abilities
              and fleshes out its backstory.
            </li>
          </ul>

          <div className="note">
            <strong>How many Shells, and where are they?</strong> There are{" "}
            <strong>eight playable Shells</strong> in total (not counting the
            Harbinger). Most have confirmed in-game locations:{" "}
            <strong>Proxima</strong> northeast of Blackridge Pass Beacon,{" "}
            <strong>Tiel</strong> southeast of the Widow&apos;s Overlook
            Beacon, <strong>Gragu</strong> in the tavern (needs the Heart of
            Vatra), <strong>Eredrim</strong> at the Citadel of Penance,{" "}
            <strong>Smert</strong> near the Outskirts of Nochte Beacon,{" "}
            <strong>Sariel</strong> through a dungeon encounter,{" "}
            <strong>Lazlo</strong> in the Royal Crypt of Mammon, and{" "}
            <strong>Genessa</strong> in Marrow Keep (needs the Sester&apos;s
            Censer).
          </div>
        </section>

        <AdBanner />

        {/* 概括表 */}
        <section className="article">
          <h2>The Shell Roster at a Glance</h2>
          <table className="data">
            <thead>
              <tr>
                <th>Shell</th>
                <th>Playstyle</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {SHELLS.map((s) => (
                <tr key={s.id}>
                  <td>
                    <Link href={`/shells/${s.id}`} style={{ color: "var(--text-primary)", textDecoration: "none" }}>
                      <strong>{s.name}</strong>
                    </Link>
                  </td>
                  <td>{s.role}</td>
                  <td>{s.location}</td>
                  <td>
                    {s.status}
                    {s.prologueOnly && (
                      <span className="shell-badge prologue">Prologue Only</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* 逐个 Shell 配图卡片（点击跳转到子页面） */}
        <section className="article">
          <h2>Every Shell, Explained</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Select a Shell to open its full profile — playstyle, signature
            ability, lore, and where to find it. Not sure where to start? Our{" "}
            <Link href="/shells/best-shell">
              best Shell tier list
            </Link>{" "}
            ranks all eight from S to C.
          </p>
          <div className="shell-detail">
            {SHELLS.map((s) => (
              <Link key={s.id} href={`/shells/${s.id}`} className="card shell-link shell-card">
                <figure className="shell-figure">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    title={s.imageTitle}
                    width={400}
                    height={400}
                    className="shell-image"
                  />
                  <figcaption className="shell-figcaption">
                    A portrait of {s.name} — one of the 8 playable Shells in
                    Mortal Shell 2.
                  </figcaption>
                </figure>
                <div className="shell-head">
                  <span className="shell-emblem">
                    <ShellIcon id={s.id} />
                  </span>
                  <div>
                    <span className="shell-name">{s.name}</span>
                  </div>
                </div>
                <span className="shell-role">{s.role}</span>
                {s.prologueOnly && (
                  <span className="shell-badge prologue">Prologue Only</span>
                )}
                <p style={{ color: "var(--text-secondary)", fontSize: ".95rem" }}>
                  {s.desc}
                </p>
                <div className="shell-sig">
                  <strong>Signature</strong>
                  <p style={{ margin: ".35rem 0 0", color: "var(--text-secondary)" }}>
                    {s.signature}
                  </p>
                </div>
                <div className="shell-sig">
                  <strong>Location</strong>
                  <p style={{ margin: ".35rem 0 0", color: "var(--text-secondary)" }}>
                    {s.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 收尾 */}
        <section className="article">
          <h2>Building Your Loadout</h2>
          <p>
            Shells are only half the build. In Mortal Shell II your combat
            identity is shaped by layering Shells with{" "}
            <a href="/weapons">weapons</a>, Tarstones (elemental weapon
            infusions) and Seals (equipable passive/active modifiers). Start
            by picking the Shell whose tempo fits you, then lean into its
            strengths with the right stone and seal combos. Our dedicated{" "}
            <a href="/builds">best Mortal Shell 2 builds</a> guide walks
            through eight setups with talent priority and playstyle notes for
            every major archetype. For matchups against specific encounters,
            see our <a href="/bosses">boss strategies</a>.
          </p>
          <div className="hero-cta">
            <a className="btn btn-outline" href="/map">
              Find Shells on the Map
            </a>
            <a className="btn btn-primary" href="/builds">
              Browse Builds
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
