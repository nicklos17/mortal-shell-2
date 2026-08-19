import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Builds – Best Shell, Weapon & Tarstone Combos";
const PAGE_PATH = "/builds";
const DESCRIPTION =
  "Mortal Shell 2 builds: Shell picks, best weapons, sidearms, Tarstone combos, and Shell Bonding priorities. Start with the Proxima build at just 14 points.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: pageURL(PAGE_PATH),
    type: "article",
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
    title: TITLE,
    description: DESCRIPTION,
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

/* ============================================================
   JSON-LD：ItemList（目前仅 Proxima 一个 build）
   ============================================================ */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Builds",
  numberOfItems: 2,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Proxima Starter Build",
      url: pageURL("/builds/proxima"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tiel Starter Build",
      url: pageURL("/builds/tiel"),
    },
  ],
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
      name: "What is the best build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best starter build in Mortal Shell 2 is the Proxima build. It pairs the Duality Stone with Arbiter's Prize and the Axe and Dagger, and comes online at just 14 Shell Bonding points. The combination delivers high damage and survivability through a near-infinite Resolve and Biosampler loop.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need for a build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mortal Shell 2 build combines five elements: your Shell choice, a primary weapon, a sidearm, Tarstones (such as the Duality Stone), and your Shell Bonding tree allocation. Your build comes together when these elements synergize into a self-sustaining combat loop.",
      },
    },
    {
      "@type": "Question",
      name: "How many Shell Bonding points do I need for a starter build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most starter builds come online at around 14 Shell Bonding points. The Proxima starter build, for example, uses 14 points across Attunement, Exo Shell, Bio Hazard, and Seizure nodes before scaling into a 21-point version for late game.",
      },
    },
  ],
};

/* ============================================================
   页面
   ============================================================ */
export default function BuildsPage() {
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
        <a href="/" className="article-back">
          &larr; Back to Home
        </a>

        <span className="eyebrow">Loadouts &amp; Setups</span>
        <h1>Mortal Shell 2 Builds</h1>
        <span className="title-rule" />

        <p className="lede">
          A build in Mortal Shell 2 combines five elements: your{" "}
          <strong>Shell</strong>, your <strong>primary weapon</strong>, your{" "}
          <strong>sidearm</strong>, your <strong>Tarstones</strong>, and your{" "}
          <strong>Shell Bonding</strong> tree. The goal is finding a synergy
          loop where each piece feeds the next.
        </p>

        {/* 1. Proxima Build 卡片（唯一真内容） */}
        <section id="proxima" className="article mt-12">
          <h2>Proxima Starter Build</h2>
          <p>
            Pairing the <strong>Duality Stone</strong> with{" "}
            <strong>Arbiter&apos;s Prize</strong> and the{" "}
            <strong>Axe and Dagger</strong>, this setup turns every light combo
            into a rapid-fire chain that rebuilds Resolve, refills Biosampler
            charges, and melts bosses with <strong>Blood Curse</strong> procs.
            It comes online at just <strong>14 Shell Bonding points</strong>{" "}
            and scales into a 21-point late-game version.
          </p>
          <p>
            This is the strongest build we&apos;ve tested in the Open Beta.
            Read our full breakdown for the skill tree allocation, item
            locations, and how the Resolve loop works.
          </p>
          <Link
            href="/builds/proxima/"
            className="cta"
          >
            Read the full Proxima Build Guide →
          </Link>
        </section>

        {/* 2. Tiel Build 卡片 */}
        <section id="tiel" className="article">
          <h2>Tiel Starter Build</h2>
          <p>
            Tiel&apos;s loop runs on <strong>Shadow Strike</strong>:
            <strong> Escalation</strong> stacks 10 Poison on every strike,{" "}
            <strong>Death Mark</strong> adds crit chance, crit damage, and
            Fragile, and <strong>Poison Burst</strong> detonates the poison for
            burst damage. It comes online at{" "}
            <strong>14 Shell Bonding points</strong> and scales through
            23-point and maxed 40-point versions, one-shotting endgame mobs
            with stealth chains.
          </p>
          <Link
            href="/builds/tiel/"
            className="cta"
          >
            Read the full Tiel Build Guide →
          </Link>
        </section>

        {/* 3. 更多 builds：纯文字说明，不放空链接 */}
        <section className="article">
          <h2>More Builds Coming After Launch</h2>
          <p>
            We&apos;re testing additional Shell and weapon combinations from
            the full release. Once we&apos;ve validated each build against
            end-game content, we&apos;ll publish individual build guides here,
            one page per build.
          </p>
          <p>
            For Shell mechanics and Bonding trees, see our{" "}
            <Link
              href="/shells/"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Shells guide
            </Link>
            . Item and weapon locations are marked on the{" "}
            <Link
              href="/map/"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              interactive map
            </Link>
            .
          </p>
        </section>

        {/* 4. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>
          <div className="faq">
            <h3>What is the best build in Mortal Shell 2?</h3>
            <p>
              The best starter build in Mortal Shell 2 is the Proxima build.
              It pairs the Duality Stone with Arbiter&apos;s Prize and the Axe
              and Dagger, and comes online at just 14 Shell Bonding points.
              The combination delivers high damage and survivability through a
              near-infinite Resolve and Biosampler loop.
            </p>

            <h3>What do I need for a build in Mortal Shell 2?</h3>
            <p>
              A Mortal Shell 2 build combines five elements: your Shell
              choice, a primary weapon, a sidearm, Tarstones (such as the
              Duality Stone), and your Shell Bonding tree allocation. Your
              build comes together when these elements synergize into a
              self-sustaining combat loop.
            </p>

            <h3>How many Shell Bonding points do I need for a starter build?</h3>
            <p>
              Most starter builds come online at around 14 Shell Bonding
              points. The Proxima starter build, for example, uses 14 points
              across Attunement, Exo Shell, Bio Hazard, and Seizure nodes
              before scaling into a 21-point version for late game.
            </p>
          </div>
        </section>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
