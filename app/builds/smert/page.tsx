export const dynamic = 'force-static';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import AdBanner from "@/components/AdBanner";
import BuildNav from "@/components/BuildNav";

const TITLE = "Mortal Shell 2 Smert Build – Time-Stop Chaos Build";
const PAGE_PATH = "/builds/smert";
const DESCRIPTION =
  "Best Mortal Shell 2 Smert build: stop time with Miracle, stack Chaos for huge detonations, chain it infinitely. Black Needle & best Tarstones.";

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
      name: "What is the best Smert build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Time-Stop Chaos build: sacrifice half your health to activate Miracle, stack Chaos stacks on frozen enemies with your fists, detonate them for massive damage, then chain Miracle over and over — Devotion refills your resolve while faithful, so you can almost always go right back in.",
      },
    },
    {
      "@type": "Question",
      name: "How does Smert's Miracle ability work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miracle sacrifices half of Smert's health to halt time and enter a fighting stance where he punches (and can unlock kicks). Attacks apply Chaos stacks that apply random status effects, and when Miracle expires the stacks detonate for damage. You can sacrifice more health to stay longer.",
      },
    },
    {
      "@type": "Question",
      name: "What weapon should I use for the Smert build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Black Needle is the only weapon that can be infused with Phantom, adding delayed AoE detonations on top of your Miracle explosions. Since you spend most of your time unarmed inside Miracle, the weapon matters less — but Black Needle is the best pairing for this build.",
      },
    },
    {
      "@type": "Question",
      name: "How do I chain Miracle infinitely in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fervor raises Deadly Revelation's threshold to 35% health, so you're almost always faithful. Devotion then gives a 20% chance to fully refill your resolve whenever you gain resolve — so by the time Miracle ends, your resolve bar is full and you can activate it again immediately.",
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
    ability: "No Overtime",
    points: "3 points",
    effect:
      "Miracle lasts longer before going into overtime and you take reduced damage in overtime. You want Miracle as long as possible — it's possible to stack up to 100 Chaos stacks on a single target in overtime.",
  },
  {
    ability: "Devotion",
    points: "Core (1st–2nd priority)",
    effect:
      "While faithful, every time you gain resolve you have a 20% chance to fill resolve completely plus extra resolve. By the time Miracle ends, your resolve bar is basically full — so you can go right back into Miracle if the target isn't dead.",
  },
  {
    ability: "Absolution",
    points: "0 (skip)",
    effect:
      "Mitigation vs poison/burn/lightning, more mitigation while faithful (up to 40%), heal on negating a condition, and Miracle cures negative conditions. Unnecessary — you can abuse Miracle and rarely get hit.",
  },
  {
    ability: "Striker",
    points: "Max",
    effect:
      "Increases the Chaos stacks you inflict while punching inside Miracle and increases detonation damage. This is your core damage scaling — max it out.",
  },
  {
    ability: "Fervor",
    points: "Important",
    effect:
      "Raises the faith threshold from 10% up to 35% health. You'll drop below it around the second Miracle of any run, unlocking Devotion's resolve refill much more reliably.",
  },
  {
    ability: "Resilience",
    points: "0 (skip)",
    effect:
      "Chance to negate a fatal blow and heal at low health (threshold up to 25%). You're inside Miracle whenever you're in danger — nothing can attack you in there, so this isn't useful.",
  },
  {
    ability: "Kicker",
    points: "Optional (unarmed only)",
    effect:
      "Kick in fighting stance inflicts Chaos stacks and detonates them immediately, with a 15% chance to double the stacks first. Only worth a point if you play unarmed — this build doesn't.",
  },
  {
    ability: "Tenacity",
    points: "0 (skip)",
    effect:
      "Miracle costs less resolve while faithful. Unnecessary — Devotion refills your resolve and Miracle can be cast with your full bar. Waste of points.",
  },
  {
    ability: "Last Vow",
    points: "0 (skip)",
    effect:
      "The unarmed playstyle: removes your melee weapon for fists dealing 20 damage / 15 stagger per attack, 15% chance to restore 5 health, 12% fist crit, 15% massive stagger. Damage is simply too low (struggles even in New Game+), and Tarstones don't apply to unarmed attacks — gimped by design.",
  },
  {
    ability: "Beat Down",
    points: "Recommended",
    effect:
      "Ground punch in fighting stance: applies 8 Chaos stacks to all enemies in range, increases the radius, and ends Miracle. Perfect to use right as Miracle is about to run out — apply stacks to everyone nearby before the detonation.",
  },
  {
    ability: "Blessing",
    points: "Recommended",
    effect:
      "While faithful (below 35% thanks to Fervor), any healing you receive deals 20 splash damage. Combine with Welt Cap's passive healing for constant free AoE damage.",
  },
  {
    ability: "Limitless",
    points: "Important",
    effect:
      "While in Miracle, every 25 stacks you apply gives a 15% chance to extend Miracle by 3 seconds (fully upgraded). You stack 60–75 stacks a run, so it triggers roughly every other Miracle — more damage, more Chaos, more detonations.",
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
export default function SmertBuildPage() {
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
          <span>Smert Build</span>
        </nav>

        <span className="eyebrow">Time-Stop Chaos Build</span>
        <h1>Mortal Shell 2 Smert Build – Time-Stop Chaos Build</h1>

        <p className="intro-link">
          <strong>New to Smert?</strong> Start with our{" "}
          <a
            href="/shells/smert"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Smert Shell Overview
          </a>{" "}
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />

        <figure className="shell-portrait-wrap">
          <Image
            src="/assets/images/build/smert.png"
            alt="Smert Time-Stop Chaos build in Mortal Shell 2"
            title="Smert Build – Mortal Shell 2"
            width={608}
            height={800}
            className="shell-portrait"
          />
        </figure>

        <p className="lede">
          Smert is an absolute beast — arguably one of the{" "}
          <strong>strongest shells in Mortal Shell 2</strong> when built right.
          His <strong>Miracle</strong> stops time at the cost of half his
          health, letting him stack <strong>Chaos</strong> on frozen enemies
          and detonate them for huge damage. This guide shows the weapon build
          and why it beats the unarmed playstyle.
        </p>

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Smert is tied with Genessa for the lowest health pool in the game,
            so he&apos;s quite squishy — but it doesn&apos;t matter, because of
            his abilities. His kit revolves around <strong>Miracle</strong>:
            freeze time using your health, beat the crap out of enemies while
            they can&apos;t move, and detonate the{" "}
            <strong>Chaos stacks</strong> you piled on them. Built correctly,
            Smert is probably one of the strongest shells in the game — even
            downright cheesy. There are two ways to play him (weapon vs.
            unarmed), and this guide explains why the weapon build wins.
          </p>
        </section>

        <AdBanner />

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Smert Abilities: Miracle &amp; Deadly Revelation</h2>

          <h3>Miracle</h3>
          <p>
            Sacrifices <strong>half of his health</strong> to halt time and
            enter a fighting stance where he punches with his fists (kicks can
            be unlocked). While enemies are frozen, your attacks inflict{" "}
            <strong>Chaos stacks</strong>, which apply a random status effect.
            When Miracle expires — or when you detonate them early — the stacks
            deal damage to the target. You can sacrifice more health to stay in
            Miracle longer, though you normally don&apos;t need to. Think of it
            as: <em>freeze time by spending health, then beat the crap out of
              things.</em>
          </p>

          <h3>Deadly Revelation</h3>
          <p>
            At <strong>10% or lower health</strong>, Smert is &quot;faithful&quot;
            and gains more resolve back from melee attacks. That sounds
            suicidal — except inside Miracle, nothing can hit you. With
            passives that buff the resolve you get back, you can almost always
            chain Miracle over and over, and your health becomes almost
            irrelevant.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Smert Shell Abilities (Skill Tree)</h2>

          <SkillTreeTable nodes={SKILL_TREE} />
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Smert</h2>

          <h3>Black Needle (Melee)</h3>
          <p>
            The weapon isn&apos;t super important — you spend most of your time
            unarmed inside Miracle. But the <strong>Black Needle</strong> is
            the pick because it&apos;s the <strong>only weapon in the game
              that can be infused with Phantom</strong>: a delayed detonation
            that deals area and stagger damage. Combined with the splash
            damage from your constant healing (Welt Cap + Blessing) and your
            passives, you stack a lot of explosion damage around you that adds
            up over time.
          </p>

          <h3>Ranged / Sidearm</h3>
          <p>
            Use any ranged weapon you like — you&apos;re not relying on range,
            and all your resolve goes to Miracle. Avoid sidearm abilities
            entirely if you can. The Black Needle&apos;s Infused Stone throw
            covers the rare ranged need.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones</h2>

          <h3>Weapon Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Thief Stone</strong> — faster attacks from Warp stacks;
              and since Warp stacks carry into Miracle, you build Chaos stacks
              faster inside too. Win-win.
            </li>
            <li>
              <strong>Night Grasp Stone</strong> — infuses the Black Needle
              with Phantom, the core of this build.
            </li>
            <li>
              <strong>Infused Stone</strong> — a thrown projectile from your
              melee weapon for rare ranged needs (optional).
            </li>
          </ul>
          <p>
            <em>
              Alternative weapon stone: Parasitic Stone — gain Leech stacks on
              kills that raise your max health, which pushes your faith
              threshold higher and makes you far less likely to die.
            </em>
          </p>

          <h3>Support Stones (Melee-Focused)</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — melee crit chance.
            </li>
            <li>
              <strong>Headsman Stone</strong> — melee crit damage. Both appear
              to boost the Miracle detonation, which can crit.
            </li>
            <li>
              <strong>Berserker Stone</strong> — more melee damage as your
              health drops. Naturally synergistic: this build plays below 50%
              health most of the time.
            </li>
            <li>
              <strong>Bullwork Stone</strong> — damage reduction after
              defeating an enemy. You&apos;re killing constantly at low
              health, so it&apos;s a little extra protection.
            </li>
          </ul>
          <p>
            <em>
              Alternative support: Devout Stone — refund resolve on sidearm
              kills if you like using a ranged weapon.
            </em>
          </p>

          <h3>Passive Item</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Welt Cap</strong> — continuously regenerate health while
              at low health. With this build you&apos;re at low health
              constantly, so it keeps replenishing the health you spend on
              Miracle — and every tick triggers Blessing&apos;s 20 splash
              damage around you. This is the build&apos;s quiet MVP.
            </li>
          </ul>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips</h2>
          <ul className="list-disc pl-6">
            <li>
              Chain Miracle: Fervor keeps you faithful below 35% health,
              Devotion refills your resolve inside Miracle, so you can almost
              always go straight back in until the target dies.
            </li>
            <li>
              Use Beat Down right as Miracle is about to expire — it slaps 8
              Chaos stacks on everything in range before the detonation.
            </li>
            <li>
              Stack as fast as you can inside Miracle: Striker maxes your Chaos
              application, and Limitless gives you roughly a 50% chance per
              Miracle to extend it by 3 seconds.
            </li>
            <li>
              Don&apos;t play unarmed (Last Vow): damage is too low for New
              Game+, and Tarstones don&apos;t apply to fists — you lose crit
              chance and crit damage entirely.
            </li>
            <li>
              Welt Cap + Blessing means every heal tick deals 20 splash AoE —
              free damage while you fight, in Miracle or out.
            </li>
          </ul>
        </section>

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Smert FAQ</h2>
          <div className="faq">
            <h3>What is the best Smert build in Mortal Shell 2?</h3>
            <p>
              The <strong>Time-Stop Chaos</strong> build: sacrifice half your
              health to activate <strong>Miracle</strong>, stack Chaos stacks
              on frozen enemies with your fists, detonate them for massive
              damage, then chain Miracle over and over —{" "}
              <strong>Devotion</strong> refills your resolve while faithful, so
              you can almost always go right back in.
            </p>

            <h3>How does Smert&apos;s Miracle ability work in Mortal Shell 2?</h3>
            <p>
              Miracle sacrifices half of Smert&apos;s health to halt time and
              enter a fighting stance where he punches (and can unlock kicks).
              Attacks apply Chaos stacks that apply random status effects, and
              when Miracle expires the stacks detonate for damage. You can
              sacrifice more health to stay longer.
            </p>

            <h3>What weapon should I use for the Smert build in Mortal Shell 2?</h3>
            <p>
              The <strong>Black Needle</strong> is the only weapon that can be
              infused with Phantom, adding delayed AoE detonations on top of
              your Miracle explosions. Since you spend most of your time unarmed
              inside Miracle, the weapon matters less — but Black Needle is the
              best pairing for this build.
            </p>

            <h3>How do I chain Miracle infinitely in Mortal Shell 2?</h3>
            <p>
              <strong>Fervor</strong> raises Deadly Revelation&apos;s threshold
              to 35% health, so you&apos;re almost always faithful.{" "}
              <strong>Devotion</strong> then gives a 20% chance to fully refill
              your resolve whenever you gain resolve — so by the time Miracle
              ends, your resolve bar is full and you can activate it again
              immediately.
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

        <BuildNav current="smert" />

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
