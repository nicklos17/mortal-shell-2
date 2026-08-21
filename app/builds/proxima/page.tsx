export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Proxima Build – Best Starter Guide (14 & 21 Points)";
const PAGE_PATH = "/builds/proxima";
const DESCRIPTION =
  "Best Mortal Shell 2 Proxima build: Duality Stone plus Arbiter's Prize, 14-point and 21-point Shell Bonding trees, and Blood Curse boss melting.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: pageURL(PAGE_PATH),
    type: "article",
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
    description: DESCRIPTION,
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
   JSON-LD：Article
   ============================================================ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mortal Shell 2 Proxima Build – Best Starter Guide (14 & 21 Points)",
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageURL(PAGE_PATH),
  },
  publisher: {
    "@type": "Organization",
    name: "Mortal Shell 2 Wiki",
  },
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
};

/* ============================================================
   JSON-LD：FAQPage
   ============================================================ */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Proxima build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strongest Proxima build pairs the Duality Stone with Arbiter's Prize, using the Axe and Dagger and the Biosampler skill to stack Stasis, proc Blood Curse, and rebuild Resolve nearly infinitely. 14 points in Shell Bonding is the entry point; 21 points adds Lightning stacks and splash damage.",
      },
    },
    {
      "@type": "Question",
      name: "What items do you need for a Proxima build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Four items: the Duality Stone (every light attack strikes twice), Arbiter's Prize (permanent Blood Curse Infusion), Auspicious Stone (melee crit chance), and Headsman Stone (crit damage). Pair them with the Axe and Dagger weapon.",
      },
    },
    {
      "@type": "Question",
      name: "How does Blood Curse work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blood Curse builds up on an enemy's health bar with every hit. Once it reaches 100%, a massive chunk of their health is removed instantly. It's strongest when combined with high hit-count setups like the Duality Stone.",
      },
    },
  ],
};

/* ============================================================
   Shell Bonding 分配表
   ============================================================ */
type BondingNode = {
  tier: number;
  node: string;
  points: number;
  effect: string;
};

const BONDING_14: BondingNode[] = [
  {
    tier: 1,
    node: "Attunement",
    points: 3,
    effect:
      "50% less Resolve cost on Biosampler → four charges, constantly churning out slashes",
  },
  {
    tier: 1,
    node: "Exo Shell",
    points: 3,
    effect: "100% mitigation chance while using Biosampler; 40% while aiming",
  },
  {
    tier: 2,
    node: "Bio Hazard",
    points: 1,
    effect:
      "150% increased damage on every Biosampler hit — your damage source",
  },
  {
    tier: 3,
    node: "Seizure",
    points: 1,
    effect:
      "Biosampler inflicts 20 Stasis stacks — slows enemies, lets you land huge hit chains",
  },
];

const BONDING_21: BondingNode[] = [
  {
    tier: 1,
    node: "Attunement",
    points: 3,
    effect: "50% less Resolve cost on Biosampler",
  },
  {
    tier: 1,
    node: "Exo Shell",
    points: 3,
    effect: "100% mitigation while using Biosampler",
  },
  {
    tier: 2,
    node: "Bio Hazard",
    points: 3,
    effect: "180% increased Biosampler damage + inflicts Lightning stacks",
  },
  {
    tier: 3,
    node: "Seizure",
    points: 2,
    effect: "20 Stasis stacks + splash damage",
  },
];

function BondingTable({ nodes }: { nodes: BondingNode[]; }) {
  return (
    <div className="overflow-x-auto">
      <table className="data" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Node</th>
            <th>Points</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((n) => (
            <tr key={`${n.node}-${n.points}`}>
              <td>{n.tier}</td>
              <td style={{ fontWeight: 600 }}>{n.node}</td>
              <td>{n.points}</td>
              <td>{n.effect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ============================================================
   页面
   ============================================================ */
export default function ProximaBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> ›<Link href="/builds">Builds</Link> ›
          <span>Proxima Build</span>
        </nav>

        <span className="eyebrow">Starter Build</span>
        <h1>Mortal Shell 2 Proxima Build Guide</h1>

        <p className="intro-link">
          <strong>New to Proxima?</strong> Start with our
          <a href="/shells/proxima" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
            Proxima Shell Overview
          </a>
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />
        <p className="lede">
          This Proxima build will carry you through your first playthrough
          with ease. By pairing easy-to-acquire weapons with powerful
          Tarstones, the setup delivers formidable damage and excellent
          survivability — and it comes online early, making it the ideal
          starter build in Mortal Shell 2.
        </p>

        {/* 1. Why Proxima */}
        <section id="why-proxima" className="article mt-12">
          <h2>Why Proxima Is the Perfect Starter Shell</h2>
          <p>
            The entire build revolves around one feedback loop: the{" "}
            <strong>Duality Stone</strong> makes every light-combo attack
            strike twice, which rapidly rebuilds your{" "}
            <strong>Resolve</strong>, which in turn refunds your{" "}
            <strong>Biosampler</strong> charges. Because Biosampler powers
            everything else in this build, the loop is nearly infinite once
            it&apos;s running — constant slashes, constant Stasis stacks,
            constant Resolve uptime.
          </p>
          <p>
            Below, we break down the full mechanics, the Shell Bonding skill
            tree, and exactly where to find the four essential items that make
            this build so effective.
          </p>
        </section>

        {/* 2. Core Items */}
        <section id="core-items" className="article">
          <h2>The Four Core Items &amp; How They Synergize</h2>
          <p>
            Everything hinges on four items. Three of them are Tarstones —{" "}
            <strong>Duality Stone</strong>,{" "}
            <strong>Arbiter&apos;s Prize</strong>, and the crit pair below —
            and the fourth is the <strong>Axe and Dagger</strong>, one of the
            first weapons you can find in the entire game. None of them are
            rare drops; they&apos;re all accessible early.
          </p>

          <h3>Duality Stone — The Backbone</h3>
          <p>
            The <strong>Duality Stone</strong> is arguably the backbone of the
            whole build. Every single one of your light combo attacks strikes
            twice. Without it, your combo is one-two-three. With it, every hit
            lands twice — turning your attacks into a whirlwind of strikes.
          </p>
          <p>
            Why this matters: more hits means more Resolve, and more Resolve
            means more <strong>Biosampler</strong> charges. It also means
            twice the Blood Curse procs (below) and twice the Stasis stacking
            from the Seizure node.
          </p>

          <h3>Arbiter&apos;s Prize — Blood Curse</h3>
          <p>
            The <strong>Arbiter&apos;s Prize</strong> grants a permanent{" "}
            <strong>Blood Curse Infusion</strong>. Here&apos;s how Blood Curse
            works: watch the Blood Curse icon on the boss&apos;s health bar.
            Every hit builds it up; once it hits <strong>100%</strong>, a
            massive chunk of the boss&apos;s health is stripped away instantly.
          </p>
          <p>
            Because the Duality Stone doubles your hit count, you&apos;re
            proccing Blood Curse at maximum speed. This shortens boss fights
            substantially — the build is an absolute blaster for your first
            playthrough.
          </p>

          <h3>Auspicious Stone &amp; Headsman Stone — The Crit Pair</h3>
          <p>
            Two more stones round out the damage: the{" "}
            <strong>Auspicious Stone</strong> boosts your melee crit chance,
            and the <strong>Headsman Stone</strong> boosts critical hit
            damage. Even unleveled, this combination hits like a truck — pair
            all four items with the Axe and Dagger and you have a setup that
            pushes you straight through the early game. All four item
            locations are marked on our{" "}
            <Link
              href="/map"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              interactive map
            </Link>
            .
          </p>
        </section>

        {/* 3. 14-Point Tree */}
        <section id="skill-tree-14" className="article">
          <h2>Shell Bonding Tree — 14-Point Starter Build</h2>
          <p>
            To unlock the build&apos;s full potential, max out Proxima&apos;s{" "}
            <strong>Shell Bonding</strong> as quickly as possible. For a
            starter build, you want to reach <strong>tier three</strong> as
            fast as you can — this is the point where the build truly comes
            online.
          </p>

          <BondingTable nodes={BONDING_14} />

          <p>
            That&apos;s <strong>14 points</strong> — your entry-level starting
            build. Stasis plus Duality means double value for every light
            attack, so you&apos;re racking up far more hits than an enemy can
            respond to. If you&apos;re still leveling and tier three isn&apos;t
            unlocked, dump extra points into Bio Hazard in the meantime — but
            the moment tier three is available, respec into this shape.
          </p>
        </section>

        {/* 4. Survivability */}
        <section id="survivability" className="article">
          <h2>Grafted Armor &amp; Exo Shell — Survivability Loop</h2>
          <p>
            One of Proxima&apos;s strongest mechanics is her{" "}
            <strong>Grafted Armor</strong>, and the Exo Shell branch makes it
            proc far more often. Three points here are a non-negotiable
            priority, primarily for the bottom node: a brief{" "}
            <strong>30% mitigation chance after dodging</strong> — you&apos;ll
            see it trigger as blue dust around Proxima. This saves you in boss
            fights and when you close distance into a heavy overhead attack.
          </p>
          <p>Two more nodes in this branch are worth noting:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Resolve on mitigation</strong> — whenever Grafted Armor
              mitigates damage, you gain Resolve. There are two nodes for
              this, and one can also inflict{" "}
              <strong>Lightning stacks</strong>. This creates a
              self-sustaining loop: dodge → mitigate → gain Resolve → refill
              Biosampler → slash again.
            </li>
            <li>
              <strong>Mitigate while sprinting</strong> — a flexible option if
              you prefer a more evasive playstyle. (The bottom
              mitigation-effectiveness node wasn&apos;t worth the points in
              this allocation.)
            </li>
          </ul>
        </section>

        {/* 5. 21-Point Tree */}
        <section id="skill-tree-21" className="article">
          <h2>21-Point Version — Where the Build Ramps Up</h2>
          <p>
            Once you&apos;ve got more points to spend, this is where the build
            really ramps up:
          </p>

          <BondingTable nodes={BONDING_21} />

          <p>
            Every Biosampler hit is now stacking Stasis, splashing damage to
            surrounding enemies, and rebuilding Resolve fast enough to keep
            the loop nearly infinite. This is an excellent spot to be — and a
            natural transition point into an end-game lightning Proxima build.
          </p>
        </section>

        {/* 6. Item Locations —— 物品获取位置尚未确认，整段先注释掉。
            位置确认后取消注释，并把各条 [位置待补] 替换为真实获取位置。
        <section id="item-locations" className="article">
          <h2>Where to Find the Items</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Axe and Dagger</strong> — one of the first weapons in
              the game, [位置待补：从视频补具体获取位置]
            </li>
            <li>
              <strong>Duality Stone</strong> — [位置待补]
            </li>
            <li>
              <strong>Arbiter&apos;s Prize</strong> — [位置待补]
            </li>
            <li>
              <strong>Auspicious Stone</strong> — [位置待补]
            </li>
            <li>
              <strong>Headsman Stone</strong> — [位置待补]
            </li>
          </ul>
          <p>
            All locations are marked on our{" "}
            <Link
              href="/map"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              interactive map
            </Link>
            . For the full Shell Bonding breakdown, see our{" "}
            <Link
              href="/shells"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Shells guide
            </Link>
            .
          </p>
        </section>
        */}

        <AdBanner />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Proxima Build FAQ</h2>
          <div className="faq">
            <h3>What is the best Proxima build in Mortal Shell 2?</h3>
            <p>
              The strongest Proxima build pairs the{" "}
              <strong>Duality Stone</strong> with{" "}
              <strong>Arbiter&apos;s Prize</strong>, using the{" "}
              <strong>Axe and Dagger</strong> and the{" "}
              <strong>Biosampler</strong> skill to stack Stasis, proc Blood
              Curse, and rebuild Resolve nearly infinitely. 14 points in Shell
              Bonding is the entry point; 21 points adds Lightning stacks and
              splash damage.
            </p>

            <h3>
              What items do you need for a Proxima build in Mortal Shell 2?
            </h3>
            <p>
              Four items: the <strong>Duality Stone</strong> (every light
              attack strikes twice), <strong>Arbiter&apos;s Prize</strong>{" "}
              (permanent Blood Curse Infusion),{" "}
              <strong>Auspicious Stone</strong> (melee crit chance), and{" "}
              <strong>Headsman Stone</strong> (crit damage). Pair them with
              the <strong>Axe and Dagger</strong> weapon.
            </p>

            <h3>How does Blood Curse work in Mortal Shell 2?</h3>
            <p>
              Blood Curse builds up on an enemy&apos;s health bar with every
              hit. Once it reaches <strong>100%</strong>, a massive chunk of
              their health is removed instantly. It&apos;s strongest when
              combined with high hit-count setups like the Duality Stone.
            </p>
          </div>
        </section>

        <p className="mt-10">
          <Link
            href="/builds/tiel"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Tiel Build
          </Link>{" "}
          ·{" "}
          <Link
            href="/builds/eredrim"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Eredrim Build
          </Link>{" "}
          ·{" "}
          <Link
            href="/builds/gragu"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Gragu Build
          </Link>
        </p>

        <p>
          <Link
            href="/builds"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            All Mortal Shell 2 Builds
          </Link>{" "}
          ·{" "}
          <Link
            href="/map"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Interactive Map
          </Link>{" "}
          ·{" "}
          <Link
            href="/shells"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Shells Guide
          </Link>
        </p>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
