export const dynamic = 'force-static';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import AdBanner from "@/components/AdBanner";
import BannerAd from "@/components/BannerAd";
import BuildNav from "@/components/BuildNav";

const TITLE = "Mortal Shell 2 Lazlo Build Guide – Heat Tank Build";
const PAGE_PATH = "/builds/lazlo";
const DESCRIPTION =
  "Best Mortal Shell 2 Lazlo build: max Heat for overheat spikes, flame shockwave AoE & burn stacks with Veteran's Battle Axe. Best Tarstones.";

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
  headline: TITLE,
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
      name: "What is the best Lazlo build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Heat Tank build: keep your Heat meter maxed with Retribution for up to 30% damage reduction, use the overheat shockwave for massive AoE burn damage, then go ham with melee while armor is on cooldown using Veteran's Battle Axe and melee crit Tarstones.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lazlo's Heat mechanic work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using Retribution heats Lazlo up. At max Heat, Warmed Up grants +30% damage, +35% resolve gain and +10% damage reduction. Using Retribution at full Heat triggers an overheat shockwave — devastating damage and burn stacks — but puts his armor on a 7-9 second cooldown, during which he loses his damage reduction.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best weapon for Lazlo in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Veteran's Battle Axe is the only weapon that can be infused with the burn status effect (via the Inflamed Claw Stone). Its R2 cleaving moveset and running R2 are strong, and burn stacks pile on top of the burn stacks your Retribution shockwave already applies.",
      },
    },
    {
      "@type": "Question",
      name: "What Tarstones should I use for the Lazlo build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thief Stone for Warp stacks on strike, Inflamed Claw Stone for permanent burn infusion (prioritize upgrading this first), Lost Clot Stone for a ranged throw, then Auspicious Stone for crit chance, Headsman Stone for crit damage, Bullwork Stone for damage reduction on kill, and Berserker Stone for up to 65% more melee damage as health drops.",
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
    ability: "Worthy Armor",
    points: "Light (can re-spec)",
    effect:
      "Reduces the resolve cost of Retribution so you can use it every time it's off cooldown. The author only put a couple points in and thinks you can steal points back here.",
  },
  {
    ability: "Warmed Up",
    points: "Core",
    effect:
      "Lazlo scales with his Heat meter: at max Heat, +30% damage, +35% resolve from melee, +10% damage reduction. At 50% Heat you get half the bonuses. You're almost always heated up, so this is almost always on.",
  },
  {
    ability: "Inner Fire",
    points: "0 (skip)",
    effect:
      "Burn mitigation, burn immunity, and Warp stacks when burned. There just aren't enough enemies that apply burn to justify it.",
  },
  {
    ability: "Temperament",
    points: "Damage + radius",
    effect:
      "Increases Retribution's damage and radius, and can ignite the ground for 5 seconds. The damage and radius nodes are the priority — you want to hit as many enemies as possible.",
  },
  {
    ability: "Adaption",
    points: "1 point",
    effect:
      "Shortens Lazlo's armor cooldown after an overheat shockwave, getting him back into the fight sooner. The second point costs 3 shell points for 1 second — not worth it.",
  },
  {
    ability: "Incandescence",
    points: "Max (50%)",
    effect:
      "When armor comes off cooldown, your Heat meter auto-fills to 50% (the max). That lets you fire two normal shockwaves, and your third one is automatically overheated — that's the one that deals the most damage and stacks the most burn, so you want it as often as possible.",
  },
  {
    ability: "Breaker",
    points: "First break nodes",
    effect:
      "Retribution gains break damage (+15 then +20). The 15% instant-break node costs 3 points for a chance you usually don't need — the overheated shockwave kills most enemies anyway.",
  },
  {
    ability: "Furnace",
    points: "Strong (core DR)",
    effect:
      "At full Heat, enemies that strike Lazlo suffer 2 burn stacks (which interrupts their attacks and deals damage) and he gains another +10% damage reduction. Full stack: 10% (Fortified Plate) + 10% (Warmed Up) + 10% (Furnace) = 30% damage reduction, stackable with Bullwork Stone and Common Moonshine.",
  },
  {
    ability: "Detonation",
    points: "0 (skip)",
    effect:
      "Explodes and ignites the ground when knocked out of your shell — planning for failure, and better earlier in the tree. Skip it.",
  },
  {
    ability: "Inflamed",
    points: "Core",
    effect:
      "Heat meter no longer drains over time, Retribution no longer costs resolve, inflicts 10 burn stacks, and the overheat shockwave has a 30% chance not to deactivate his armor — letting you chain 3–4 overheat shockwaves in a row. Devastating.",
  },
  {
    ability: "Rekindle",
    points: "0 (skip)",
    effect:
      "Regenerate health and resolve every second as Heat drains, plus +15 health/resolve when fully empty. Costs 6 points to reach the final node for a payoff that isn't worth it — your Heat barely drains anyway.",
  },
  {
    ability: "Rush",
    points: "Important",
    effect:
      "When armor is down after an overheat shockwave, gain 20 Warp stacks instantly (attack speed), plus 15% critical chance while armor is down. This is your window to go ham with melee.",
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
export default function LazloBuildPage() {
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
          <span>Lazlo Build</span>
        </nav>

        <span className="eyebrow">Heat Tank Build</span>
        <h1>Mortal Shell 2 Lazlo Build Guide – Heat Tank Build</h1>

        <p className="intro-link">
          <strong>New to Lazlo?</strong> Start with our{" "}
          <a
            href="/shells/lazlo"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Lazlo Shell Overview
          </a>{" "}
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />

        <figure className="shell-portrait-wrap">
          <Image
            src="/assets/images/build/lazlo.png"
            alt="Lazlo Heat Tank build in Mortal Shell 2"
            title="Lazlo Build – Mortal Shell 2"
            width={520}
            height={682}
            className="shell-portrait"
          />
        </figure>

        <p className="lede">
          Lazlo is the tankiest shell in Mortal Shell 2 — highest health pool
          in the game, tons of damage mitigation, and a{" "}
          <strong>Heat meter</strong> that powers his{" "}
          <strong>Retribution shockwave</strong>. This guide builds him around
          maxing Heat for <strong>overheat spikes</strong>, stacking{" "}
          <strong>burn</strong>, and going ham with melee while his armor
          cools down.
        </p>

        <BannerAd />

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Lazlo is likely the sixth, seventh, or eighth shell you&apos;ll
            get, depending on the route you take in the second region.
            He&apos;s a tanky boy: the highest health pool of any shell, heavy
            damage mitigation, and he can take a beating and keep ticking.
            Playing Lazlo is all about managing his Heat cycle — knowing when
            to fire Retribution, when to hold it, and when to push into the
            overheat spike.
          </p>
        </section>

        <AdBanner />

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Lazlo Abilities: Retribution &amp; Heat Mechanic</h2>

          <h3>Retribution</h3>
          <p>
            An AoE shockwave that puts <strong>burn stacks</strong> on enemies,
            upgraded to deal more damage and break enemies as well. Every use
            fills his <strong>Heat meter</strong>. As Heat rises, Lazlo gains
            bonuses from his passives — more damage, more resolve, more damage
            reduction. When fully heated, using Retribution fires a devastating{" "}
            <strong>overheat shockwave</strong> that applies massive burn stacks
            — but then puts his armor on cooldown for roughly 7–9 seconds,
            dropping his damage reduction and heat bonuses. The cycle:
            shockwave, shockwave, shockwave, <em>massive shockwave</em>,
            vulnerable window, repeat.
          </p>

          <h3>Fortified Plate</h3>
          <p>
            A flat <strong>10% damage reduction</strong> whenever his armor is
            on — which is most of the time. One of the main reasons Lazlo is so
            hard to bring down.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Lazlo Shell Abilities (Skill Tree)</h2>

          <SkillTreeTable nodes={SKILL_TREE} />
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Lazlo</h2>

          <h3>Veteran&apos;s Battle Axe (Melee — Best in Slot)</h3>
          <p>
            The top pick for this build. Its cleaving R2 moveset (especially
            the running R2) is clean, and it&apos;s the{" "}
            <strong>only weapon in the game that can be infused with the burn
              status effect</strong>. That matters: burn stacks from your axe
            pile right on top of the burn stacks your Retribution shockwave
            already applies, dealing substantial damage over time. The pairing
            is a core reason this build works.
          </p>

          <h3>Sidearm / Ranged</h3>
          <p>
            You can use any sidearm you like — resolve goes into Retribution
            here, not into sidearm skills. The weapon skill on the
            Veteran&apos;s Battle Axe throws the axe as a ranged attack when
            you genuinely need reach, but the build doesn&apos;t depend on it.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones</h2>

          <h3>Weapon Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Thief Stone</strong> — gain 5 Warp stacks every swing.
              Combined with the 20 stacks from Rush as armor goes on cooldown,
              you hit the 30-stack cap almost instantly for a massive attack
              speed boost.
            </li>
            <li>
              <strong>Inflamed Claw Stone</strong> — puts burn infusion on the
              Veteran&apos;s Battle Axe (the only weapon that can take it).{" "}
              <strong>Upgrade to permanent infusion as fast as you can — this
                is your #1 tar core priority.</strong>
            </li>
            <li>
              <strong>Lost Clot Stone</strong> — throw your melee weapon at
              the target for AoE damage: a solid ranged option that also
              counts as a melee attack (can revive you if you get knocked out
              of your shell).
            </li>
          </ul>

          <h3>Support Stones (Melee-Focused)</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — melee crit chance.
            </li>
            <li>
              <strong>Headsman Stone</strong> — melee crit damage.
            </li>
            <li>
              <strong>Bullwork Stone</strong> — damage reduction from
              defeating enemies. Stacks with your Heat-based damage reduction
              to get very tanky.
            </li>
            <li>
              <strong>Berserker Stone</strong> — up to{" "}
              <strong>65% more melee damage</strong> as your health drops.
              Works great because Lazlo tanks hits so well and has the biggest
              health pool in the game.
            </li>
          </ul>
          <p>
            <em>
              Ranged stones are a free slot — pick whatever fits your sidearm.
              Common Moonshine as a passive item adds even more damage
              reduction: with full Heat you can reach ~34% damage reduction, a
              genuinely insane amount of damage reduction.
            </em>
          </p>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips</h2>
          <ul className="list-disc pl-6">
            <li>
              Manage the cycle: shockwave, shockwave, shockwave,{" "}
              <strong>overheat shockwave</strong>, then go ham with melee while
              armor is down — Rush gives you the crit and Warp stacks to punish
              anything nearby.
            </li>
            <li>
              Spam Retribution whenever it&apos;s off cooldown, especially once
              Inflamed removes its resolve cost and gives a 30% chance to keep
              your armor on for another overheat.
            </li>
            <li>
              Let enemies hit you while Heat is full: Furnace applies burn
              stacks and interrupts them, and the 30% damage reduction makes
              trades cheap on a huge health pool.
            </li>
            <li>
              Don&apos;t spend shell points on Detonation, Rekindle, or Inner
              Fire — planning around failure or niche burn interactions isn&apos;t
              worth it when you can put points into the Heat core.
            </li>
          </ul>
        </section>

        <BannerAd />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Lazlo FAQ</h2>
          <div className="faq">
            <h3>What is the best Lazlo build in Mortal Shell 2?</h3>
            <p>
              The <strong>Heat Tank</strong> build: keep your Heat meter maxed
              with <strong>Retribution</strong> for up to 30% damage reduction,
              use the <strong>overheat shockwave</strong> for massive AoE burn
              damage, then go ham with melee while armor is on cooldown using{" "}
              <strong>Veteran&apos;s Battle Axe</strong> and melee crit
              Tarstones.
            </p>

            <h3>How does Lazlo&apos;s Heat mechanic work in Mortal Shell 2?</h3>
            <p>
              Using Retribution heats Lazlo up. At max Heat,{" "}
              <strong>Warmed Up</strong> grants +30% damage, +35% resolve
              gain, and +10% damage reduction. Using Retribution at full Heat
              triggers an <strong>overheat shockwave</strong> — devastating
              damage and burn stacks — but puts his armor on a 7–9 second
              cooldown, during which he loses his damage reduction.
            </p>

            <h3>What is the best weapon for Lazlo in Mortal Shell 2?</h3>
            <p>
              The <strong>Veteran&apos;s Battle Axe</strong> is the only weapon
              that can be infused with the burn status effect (via the{" "}
              <strong>Inflamed Claw Stone</strong>). Its R2 cleaving moveset
              and running R2 are strong, and the burn stacks it applies pile on
              top of the burn stacks your Retribution shockwave already puts on
              enemies — the pair is the core of this build.
            </p>

            <h3>
              What Tarstones should I use for the Lazlo build in Mortal Shell
              2?
            </h3>
            <p>
              <strong>Thief Stone</strong> for Warp stacks on strike (hit the
              30-stack cap almost instantly),{" "}
              <strong>Inflamed Claw Stone</strong> for permanent burn infusion
              — prioritize this upgrade above everything else — and{" "}
              <strong>Lost Clot Stone</strong> for a ranged throw that counts
              as melee. Support: <strong>Auspicious Stone</strong> for crit
              chance, <strong>Headsman Stone</strong> for crit damage,{" "}
              <strong>Bullwork Stone</strong> for damage reduction on kill, and{" "}
              <strong>Berserker Stone</strong> for up to 65% more melee damage
              as your health drops.
            </p>
          </div>
        </section>

        <p>
          Looking for collectibles? Open our{" "}
          <Link
            href="/map"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Mortal Shell 2 Interactive Map
          </Link>{" "}
          to see all Shell, boss, Tarstone &amp; Beacon locations.
        </p>

        <BuildNav current="lazlo" />

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
