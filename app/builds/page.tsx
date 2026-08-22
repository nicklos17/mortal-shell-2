export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Best Mortal Shell 2 Builds &amp; Tarstone Combos";
const PAGE_PATH = "/builds";
const DESCRIPTION =
  "Mortal Shell 2 builds for every playstyle: Shell picks, weapons, Tarstone combos &amp; Bonding priorities. Start with the Proxima build at just 14 points.";

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
   JSON-LD：ItemList（目前仅 Proxima 一个 build）
   ============================================================ */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Builds",
  numberOfItems: 8,
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Eredrim Frost Breaker Build",
      url: pageURL("/builds/eredrim"),
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Gragu Brawler Build",
      url: pageURL("/builds/gragu"),
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Genessa Phantom Summoner Build",
      url: pageURL("/builds/genessa"),
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Lazlo Heat Tank Build",
      url: pageURL("/builds/lazlo"),
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Smert Time-Stop Chaos Build",
      url: pageURL("/builds/smert"),
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Sariel Thorn Tank Build",
      url: pageURL("/builds/sariel"),
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
            This is the strongest build we&apos;ve tested.
            Read our full breakdown for the skill tree allocation, item
            locations, and how the Resolve loop works.
          </p>
          <Link
            href="/builds/proxima"
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
            href="/builds/tiel"
            className="cta"
          >
            Read the full Tiel Build Guide →
          </Link>
        </section>

        {/* 3. Eredrim Build 卡片 */}
        <section id="eredrim" className="article">
          <h2>Eredrim Frost Breaker Build</h2>
          <p>
            Eredrim&apos;s loop runs on <strong>Ethereal Diapason</strong>{" "}
            and <strong>Slaughter</strong> stacking: break entire groups with
            a 360° shockwave, finish with ripostes for 10 Slaughter stacks
            each, and melt frozen targets for <strong>200% damage</strong>{" "}
            using the frost-infused <strong>Great Martyr&apos;s Blade</strong>{" "}
            — the only melee weapon that can carry a frost infusion.
          </p>
          <Link
            href="/builds/eredrim"
            className="cta"
          >
            Read the full Eredrim Build Guide →
          </Link>
        </section>

        {/* 4. Gragu Build 卡片 */}
        <section id="gragu" className="article">
          <h2>Gragu Brawler Build</h2>
          <p>
            Gragu is the tankiest shell in the game, carried by the{" "}
            <strong>Staggering Blow</strong> fist ability and endless{" "}
            <strong>Revered Heart</strong> sustain. Escalation and Attunement
            let you spam the charged punch, <strong>Heartless</strong>{" "}
            instantly kills regular enemies and heals you, and{" "}
            <strong>Devour</strong> keeps the buffs rolling at max hearts.
            Pair it with the burn-infused{" "}
            <strong>Veteran&apos;s Battle Axe</strong> for near-unkillable
            brawling.
          </p>
          <Link
            href="/builds/gragu"
            className="cta"
          >
            Read the full Gragu Build Guide →
          </Link>
        </section>

        {/* 5. Genessa Build 卡片 */}
        <section id="genessa" className="article">
          <h2>Genessa Phantom Summoner Build</h2>
          <p>
            Genessa&apos;s loop runs on <strong>Faithful Doubles</strong> and{" "}
            <strong>Phantom</strong> stacking: summon phantoms that attack with
            your equipped weapon, stack Phantom marks on enemies, and detonate
            for <strong>huge AoE explosions</strong> at 12 stacks. Carried by
            the Phantom-infused <strong>Black Needle</strong>, with{" "}
            <strong>Augmentation</strong> for resolve-free spamming and{" "}
            <strong>Distraction</strong> turning summons into mini-tanks. She&apos;s
            the squishiest shell in the game, so this build keeps her safe behind
            an army of phantoms.
          </p>
          <Link
            href="/builds/genessa"
            className="cta"
          >
            Read the full Genessa Build Guide →
          </Link>
        </section>

        {/* 6. Lazlo Build 卡片 */}
        <section id="lazlo" className="article">
          <h2>Lazlo Heat Tank Build</h2>
          <p>
            Lazlo&apos;s loop runs on his <strong>Heat meter</strong> and{" "}
            <strong>Retribution</strong> shockwave: spam the AoE burn attack to
            build Heat, fire an <strong>overheat shockwave</strong> for massive
            damage and burn stacks, then go ham with melee while his armor is
            on cooldown — <strong>Rush</strong> hands you 20 Warp stacks and
            15% crit to punish everything nearby. Carried by the burn-infused{" "}
            <strong>Veteran&apos;s Battle Axe</strong> and stacking up to{" "}
            <strong>30% damage reduction</strong> at full Heat. Lazlo has the
            highest health pool in the game — the ultimate unkillable tank.
          </p>
          <Link
            href="/builds/lazlo"
            className="cta"
          >
            Read the full Lazlo Build Guide →
          </Link>
        </section>

        {/* 7. Smert Build 卡片 */}
        <section id="smert" className="article">
          <h2>Smert Time-Stop Chaos Build</h2>
          <p>
            Smert&apos;s loop runs on <strong>Miracle</strong>: sacrifice half
            your health to halt time, stack <strong>Chaos</strong> on frozen
            enemies with your fists, and detonate the stacks for massive damage.
            <strong> Fervor</strong> raises the faith threshold to 35% so
            you&apos;re almost always faithful, <strong>Devotion</strong> has a
            20% chance to fully refill your resolve on every gain — so by the
            time Miracle ends, you can go right back in. Carried by the
            Phantom-infused <strong>Black Needle</strong> and the{" "}
            <strong>Welt Cap</strong> passive that triggers{" "}
            <strong>Blessing</strong> splash damage on every heal tick. Arguably
            one of the strongest shells in the game.
          </p>
          <Link
            href="/builds/smert"
            className="cta"
          >
            Read the full Smert Build Guide →
          </Link>
        </section>

        {/* 8. Sariel Build 卡片 */}
        <section id="sariel" className="article">
          <h2>Sariel Thorn Tank Build</h2>
          <p>
            Sariel&apos;s loop runs on <strong>Curse</strong>: tag enemies
            with <strong>Exodus of Thorns</strong> at range so their next
            attack is completely negated, then swing freely through their
            combos. His <strong>Pain</strong> mechanic converts incoming
            damage into a recoverable white bar that melee hits regenerate,
            making him far tankier than his middling HP suggests. Two paths:
            the <strong>Thornfall damage build</strong> turns Exodus into a
            ranged nuke, while the <strong>Entitlement break build</strong>
            triggers 10 Trauma stacks by clearing Pain point-blank — pick
            one and commit. Carried by the Curse-infused{" "}
            <strong>Iconoclast</strong> greatsword and the{" "}
            <strong>Zealot Stone</strong> to fuel endless Exodus casts.
          </p>
          <Link
            href="/builds/sariel"
            className="cta"
          >
            Read the full Sariel Build Guide →
          </Link>
        </section>

        <AdBanner />

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
