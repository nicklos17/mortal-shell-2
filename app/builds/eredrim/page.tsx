export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import AdBanner from "@/components/AdBanner";

const TITLE = "Mortal Shell 2 Eredrim Build – Best Guide (14 & 21 Points)";
const PAGE_PATH = "/builds/eredrim";
const DESCRIPTION =
  "Best Mortal Shell 2 Eredrim build: Eredrim abilities, Shell abilities breakdown, best weapons, recommended Tarstones, and final tips";

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
  headline: "Mortal Shell 2 Eredrim Build – Best Guide (14 & 21 Points)",
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageURL(PAGE_PATH),
  },
  publisher: {
    "@type": "Organization",
    name: "Mortal Shell 2 Wiki",
  },
  datePublished: "2026-08-21",
  dateModified: "2026-08-21",
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
      name: "What are Eredrim's abilities in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eredrim has Shoulder Bash, Ethereal Diapason, and a passive that grants Slaughter stacks on riposte, letting him kill low-health enemies early, stacking up to 100 times.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best weapon for Eredrim in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Great Martyr's Blade — the only melee weapon that can be infused with frost, and since Eredrim deals 100% extra damage to frozen enemies, it's the clear best pick.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Slaughter stacking mechanic work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eredrim gains Slaughter stacks on riposte. At high stacks he kills low-health enemies early, and at 100 stacks he gains damage resistance and other bonuses. Stacks are lost when you rest or get knocked out of your shell.",
      },
    },
  ],
};

/* ============================================================
   Shell Bonding 技能树推荐表
   ============================================================ */
type SkillNode = {
  ability: string;
  points: string;
  effect: string;
};

const SKILL_TREE: SkillNode[] = [
  {
    ability: "Alacrity",
    points: "Take later nodes",
    effect:
      "After killing an enemy with a riposte, Eredrim's abilities cost no resolve for 8 seconds — lets you chain Ethereal Diapason + riposte loops.",
  },
  {
    ability: "Massacre",
    points: "Recommended",
    effect:
      "Killing an enemy with a riposte grants 10 Slaughter stacks, getting to the 100 cap much faster.",
  },
  {
    ability: "Apathy",
    points: "Take last node",
    effect:
      "Deals 200% damage to frozen enemies (the key node for this frost build). Early frost-immunity nodes optional.",
  },
  {
    ability: "Anguish",
    points: "0 (skipped)",
    effect: "Improves Shoulder Bash — not used in this build.",
  },
  {
    ability: "Tank",
    points: "1 (one-point wonder)",
    effect:
      "Damage reduction per Slaughter stack; 15% at max stacks with just one point.",
  },
  {
    ability: "Consecration",
    points: "Optional",
    effect:
      "Heals with the healing item grant resolve back, 40% chance to restore all resolve — great for a pure ranged build.",
  },
  {
    ability: "Radiance",
    points: "Max",
    effect:
      "Improves Ethereal Diapason: more break damage, damage, and at the last upgrade, 200% range.",
  },
  {
    ability: "Carnage",
    points: "Ideally max",
    effect: "When you execute a low-health target they explode for damage.",
  },
  {
    ability: "Persistence",
    points: "Ideally 3 upgrades",
    effect:
      "Lose only 25% of Slaughter stacks when resting or knocked out of your shell.",
  },
  {
    ability: "Seal Affinity",
    points: "Recommended",
    effect:
      "Wider parry window and increased riposte damage — critical for building Slaughter stacks.",
  },
];

function SkillTreeTable({ nodes }: { nodes: SkillNode[]; }) {
  return (
    <div className="overflow-x-auto">
      <table className="data" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Ability</th>
            <th>Points</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((n) => (
            <tr key={n.ability}>
              <td style={{ fontWeight: 600 }}>{n.ability}</td>
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
export default function EredrimBuildPage() {
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
          <span>Eredrim Build</span>
        </nav>

        <span className="eyebrow">Frost Breaker Build</span>
        <h1>Mortal Shell 2 Eredrim Build – Best Guide (14 &amp; 21 Points)</h1>

        <p className="intro-link">
          <strong>New to Eredrim?</strong> Start with our
          <a href="/shells/eredrim" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
            Eredrim Shell Overview
          </a>
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />
        <p className="lede">
          This Eredrim build focuses on his{" "}
          <strong>Ethereal Diapason + Slaughter stacking</strong> playstyle —
          breaking groups of enemies, chaining ripostes, and dealing{" "}
          <strong>100% extra damage to frozen targets</strong> via the Great
          Martyr&apos;s Blade.
        </p>

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Eredrim is a fantastic all-around character making a return from
            the first game. He has a staggering amount of health — tied for
            the second highest health pool of all the shells — so when it
            comes to survivability, he has pretty good survivability. There
            are definitely different ways to play him; this is the setup
            that&apos;s been working for me.
          </p>
        </section>

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Eredrim Abilities</h2>

          <h3>Shoulder Bash</h3>
          <p>
            This allows him to charge up an attack where he charges forward,
            dealing break damage to the target. It takes quite a while to
            charge, though you can reduce the charge speed through passives.
            It&apos;s good at getting some break damage on a single target.
          </p>

          <h3>Ethereal Diapason</h3>
          <p>
            This sends out a shockwave around Eredrim in a 360° arc that deals
            break damage, and you can upgrade it to deal damage as well.
            It&apos;s really, really good at breaking tons of enemies
            simultaneously, and it&apos;s a big focal part of how I play
            Eredrim in this game.
          </p>

          <h3>Slaughter (Passive)</h3>
          <p>
            Whenever Eredrim ripostes an enemy, he gains a stack of Slaughter,
            which makes it so that when he deals damage to low-health enemies,
            they die early instead of having to reach 0%. He can stack this up
            to 100 stacks, and he can get other benefits from stacking
            Slaughter. This is a big part of playing Eredrim.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Eredrim Shell Abilities (Skill Tree)</h2>

          <SkillTreeTable nodes={SKILL_TREE} />
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Eredrim</h2>

          <h3>Great Martyr&apos;s Blade (Melee)</h3>
          <p>
            This is the only melee weapon that can be infused with frost in
            the game. If you want to capitalize on Eredrim&apos;s 100% extra
            damage to frozen enemies, you must use this weapon. Frost prevents
            enemies from moving and you deal increased damage to them while
            frozen. A running heavy attack with the permanent infusion will
            usually freeze an enemy instantly — you can start any fight with a
            running heavy attack and they&apos;re frozen, unable to do
            anything, and you kill them without ever getting hit.
          </p>

          <h3>Triarch Repeater (Ranged)</h3>
          <p>
            This is the only ranged weapon that can be infused with frost.
            However, I don&apos;t use it much in this build — most of my
            resolve goes to Ethereal Diapason, so there isn&apos;t much left
            for ranged attacks. It&apos;s not the greatest ranged weapon
            overall, but it&apos;s the only one that triggers frost, and once
            you freeze an enemy your damage goes up rapidly thanks to the
            extra 100%, which applies to ranged attacks too. If you&apos;d
            rather use a different ranged weapon, you absolutely can.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones</h2>

          <h3>Melee Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Thief Stone</strong> — grants Warp stacks when striking
              with the Great Martyr&apos;s Blade, increasing attack speed
              (caps at ~30 stacks, roughly 1% per stack). Shores up the
              weapon&apos;s very slow attack speed.
            </li>
            <li>
              <strong>Grudge Stone</strong> (alternative) — more critical
              hits, if you prefer that direction.
            </li>
            <li>
              <strong>Warden Stone</strong> — lets you infuse your attacks
              with frost. <strong>Getting to rank three is your first
                priority</strong>, because it makes the infusion permanent —
              this build doesn&apos;t shine until you have it.
            </li>
            <li>
              <strong>Captive Scavenge Stone</strong> — swing around, leap
              into the air and crash down. I don&apos;t use it much since
              resolve goes to Ethereal Diapason, but you can pick whatever
              fits.
            </li>
          </ul>

          <h3>Ranged Stone</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Unstable Stone</strong> — after 20 shots/hits (at max
              upgrade), deals splash damage. The extra single-target damage is
              what I&apos;m after. Alternatives: break damage on crits, or
              stacks that boost your melee damage against the target — both
              decent for boss fights.
            </li>
            <li>
              <strong>Frost Charged Stone</strong> — critical hits with the
              ranged weapon freeze the target. Only crits trigger it, so pair
              with Marksman Stone. There is no other ability stone for this
              weapon.
            </li>
          </ul>

          <h3>Support Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — increases melee critical
              chance.
            </li>
            <li>
              <strong>Headman Stone</strong> — increases critical damage, so
              crits hit much harder.
            </li>
            <li>
              <strong>Marksman Stone</strong> — increases ranged critical
              chance, helping you apply freeze stacks more often with the
              ranged weapon.
            </li>
            <li>
              <strong>Retribution Stone</strong> — boosts riposte damage by up
              to 20% at max level, critical for killing enemies with a riposte
              to gain 10 Slaughter stacks. If you don&apos;t care about
              Slaughter stacks, you can swap this for Berserking Stone for
              more melee damage when your health drops.
            </li>
          </ul>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips</h2>
          <ul className="list-disc pl-6">
            <li>
              Eredrim has so much extra damage against frozen enemies that it
              doesn&apos;t make sense to play him without the
              200%-damage-to-frozen node — it&apos;s only about six shell
              points for that extra 100% damage.
            </li>
            <li>
              It&apos;s very easy to freeze with the Great Martyr&apos;s
              Blade, so lean into it: start fights with a running heavy attack
              to freeze the first enemy instantly.
            </li>
            <li>
              Chain the loop: Ethereal Diapason to break a group → riposte to
              kill → Alacrity refunds resolve → repeat. You keep breaking
              enemies without ever getting attacked.
            </li>
            <li>
              Be aware Slaughter stacks reset when you rest or get knocked out
              of your shell — avoid resting when you&apos;ve built up a big
              stack.
            </li>
            <li>
              Killing enemies with a riposte grants 10 Slaughter stacks, so
              always try to finish with a riposte rather than a regular hit.
            </li>
          </ul>
        </section>

        <AdBanner />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Eredrim FAQ</h2>
          <div className="faq">
            <h3>What are Eredrim&apos;s abilities in Mortal Shell 2?</h3>
            <p>
              Eredrim has <strong>Shoulder Bash</strong>,{" "}
              <strong>Ethereal Diapason</strong>, and a passive that grants{" "}
              <strong>Slaughter</strong> stacks on riposte, letting him kill
              low-health enemies early, stacking up to 100 times.
            </p>

            <h3>What is the best weapon for Eredrim in Mortal Shell 2?</h3>
            <p>
              The <strong>Great Martyr&apos;s Blade</strong> — the only melee
              weapon that can be infused with frost, and since Eredrim deals
              100% extra damage to frozen enemies, it&apos;s the clear best
              pick.
            </p>

            <h3>How does the Slaughter stacking mechanic work?</h3>
            <p>
              Eredrim gains <strong>Slaughter stacks</strong> on riposte. At
              high stacks he kills low-health enemies early, and at 100 stacks
              he gains damage resistance and other bonuses. Stacks are lost
              when you rest or get knocked out of your shell.
            </p>
          </div>
        </section>

        <p className="mt-10">
          <Link
            href="/builds/proxima"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Proxima Build
          </Link>{" "}
          ·{" "}
          <Link
            href="/builds/tiel"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Tiel Build
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
