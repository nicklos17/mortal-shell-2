export const dynamic = 'force-static';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import AdBanner from "@/components/AdBanner";
import BuildNav from "@/components/BuildNav";

const TITLE = "Mortal Shell 2 Genessa Build – Faithful Doubles & Phantom";
const PAGE_PATH = "/builds/genessa";
const DESCRIPTION =
  "Mortal Shell 2 Genessa build: summon Faithful Doubles, stack Phantom for deadly AoE. Best Tarstones, Black Needle, Duality & full skill tree explained.";

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
      name: "What are Genessa's abilities in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Genessa has Faithful Doubles (summon phantoms that attack with your equipped weapon) and Duality (when knocked out of your shell she becomes a Stray version that summons clones copying her movements instead).",
      },
    },
    {
      "@type": "Question",
      name: "What is the best weapon for Genessa in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Black Needle is the only melee weapon that can be infused with Phantom, which synergizes with Faithful Doubles — every Phantom stack you add raises the detonation damage, and the Conqueror's Reward skill makes the phantoms land extra thrusts to stack Phantom faster.",
      },
    },
    {
      "@type": "Question",
      name: "How does Genessa's Duality work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instead of becoming the Harbinger, Genessa transforms into a red-masked Stray version that summons Stray Doubles copying her attacks. She can only return to her shell by resting at a Beacon, so avoid getting knocked out of your shell if possible.",
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
    ability: "Augmentation",
    points: "Mandatory",
    effect:
      "Reduces the cost of Faithful Doubles, and doubles regenerate resolve when they attack. Essential for spamming the ability non-stop.",
  },
  {
    ability: "Catalyst",
    points: "Contingency pick",
    effect:
      "Stray Doubles cost less resolve and last longer. You will get knocked out sometimes, so a longer window helps when it happens.",
  },
  {
    ability: "Timeless",
    points: "0 (skip)",
    effect:
      "Immunity to Stasis and reflects 2 Phantom stacks on the attacker. Enemies barely inflict Stasis, so this isn't worth it.",
  },
  {
    ability: "Affinity",
    points: "Max",
    effect:
      "Doubles deal more damage and attack more times before vanishing — more swings also means more Phantom stacks.",
  },
  {
    ability: "Instigation",
    points: "Core",
    effect:
      "Summoned doubles arrive with 10 Warp stacks and 4 Phantom stacks. Phantom is a delayed detonation (stagger damage + AoE explosion) — stacking 12 on a target detonates for huge area damage.",
  },
  {
    ability: "Intangible",
    points: "Recommended",
    effect:
      "When severed into Stray form, instantly summon up to 4 Faithful Doubles (with all your buffs) that charge enemies. A serious burst in a bad situation that can turn the tables fast.",
  },
  {
    ability: "Distraction",
    points: "Recommended",
    effect:
      "Enemies target your Faithful Doubles more reliably, and when a double is struck it bursts and applies Stasis stacks. Turns summons into mini-tanks so you can hit enemies in the back.",
  },
  {
    ability: "Communion",
    points: "Melee only (points tight)",
    effect:
      "Boosts Stray Double melee/ranged damage. I only took the melee nodes — there aren't enough points for everything.",
  },
  {
    ability: "Alteration",
    points: "0 (skip)",
    effect:
      "Play in Stray form by default with longer Stray Double duration. You trade a second health bar for double attacks — not worth it on a squishy melee build that gets one-shot.",
  },
  {
    ability: "Impetus",
    points: "First node (15%, I took 20%)",
    effect:
      "Faithful Doubles have a chance to perform your equipped weapon ability. The first 15% node is the key one; the 20% upgrade is a luxury.",
  },
  {
    ability: "Casualty",
    points: "1 point",
    effect:
      "Stray Doubles have a chance to apply your weapon and sidearm infusion. I play melee in Stray form, so one point is enough.",
  },
  {
    ability: "Mirage",
    points: "Important",
    effect:
      "Summon an additional Stray Double and protect against a fatal blow (two at max upgrade). The second Stray Double copying your attacks is the real prize.",
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
export default function GenessaBuildPage() {
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
          <span>Genessa Build</span>
        </nav>

        <span className="eyebrow">Phantom Summoner Build</span>
        <h1>Mortal Shell 2 Genessa Build – Faithful Doubles &amp; Phantom</h1>

        <p className="intro-link">
          <strong>New to Genessa?</strong> Start with our{" "}
          <a
            href="/shells/genessa"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Genessa Shell Overview
          </a>{" "}
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />

        <figure className="shell-portrait-wrap">
          <Image
            src="/assets/images/build/genessa.png"
            alt="Genessa Phantom Summoner build in Mortal Shell 2"
            title="Genessa Build – Mortal Shell 2"
            width={732}
            height={970}
            className="shell-portrait"
          />
        </figure>

        <p className="lede">
          Genessa is a deadly late-game summoner — her{" "}
          <strong>Faithful Doubles</strong> stack <strong>Phantom</strong>{" "}
          marks that detonate for huge AoE, carried by the{" "}
          <strong>Black Needle</strong>. She&apos;s also the squishiest shell
          in the game, so this build leans hard on letting her summons tank.
        </p>

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Genessa is one of the later shells you&apos;ll get, but she&apos;s
            absolutely deadly. Her claim to fame is summoning phantoms that
            attack enemies from a distance, making kills very easy. The catch:
            she has the lowest health of any shell in the game, so you have to
            play carefully — and that&apos;s exactly why this build revolves
            around keeping her summons in the fight while you stay safe.
          </p>
        </section>

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Genessa Abilities</h2>

          <h3>Faithful Doubles</h3>
          <p>
            This sends out a phantom that attacks with the weapon you have
            equipped — so deciding which weapon the phantoms will swing is
            important. When upgraded, the phantoms can also copy the weapon
            ability you have slotted, which matters a lot when choosing a
            weapon. This is her bread-and-butter ability.
          </p>

          <h3>Duality</h3>
          <p>
            Instead of being severed into the Harbinger when she runs out of
            health, Genessa transforms into a Stray version of herself with the
            red mask. Rather than casting Faithful Doubles, she summons Stray
            Doubles that copy her movements — melee or ranged — until they wear
            out. The downside: there is no way back to her shell except resting
            at a Beacon. Since Faithful Doubles is much stronger than Duality
            and she&apos;s very squishy, you don&apos;t want to get knocked out
            of your shell if you can help it — but you do have options to keep
            playing when it happens.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Genessa Shell Abilities (Skill Tree)</h2>

          <SkillTreeTable nodes={SKILL_TREE} />
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Genessa</h2>

          <h3>Black Needle (Melee)</h3>
          <p>
            The only weapon that can be infused with{" "}
            <strong>Phantom</strong>, and Phantom synergizes perfectly with
            Faithful Doubles — the more Phantom stacks on a target, the bigger
            the detonation. Even though your doubles will add most of the
            stacks, every stack you land helps, especially in boss fights.
          </p>
          <p>
            The other reason is <strong>Conqueror&apos;s Reward</strong>: it
            lets the spear (or your phantoms) land four additional strikes as a
            series of thrusts, stacking Phantom on the target very quickly and
            triggering deadly explosions when the weapon skill goes off.
          </p>

          <h3>Ranged / Sidearm</h3>
          <p>
            Totally up to you — I barely use a sidearm in this build because my
            resolve goes into summoning Faithful Doubles, and the summons work
            better as a ranged option anyway (more damage per resolve spent).
            Pick whatever sidearm you like; it won&apos;t define the build.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones For Genessa</h2>

          <h3>Weapon Stone</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Thief Stone</strong> — attack faster. Very strong here:
              once you&apos;re hitting enemies in the back while they attack
              your summons, you stack Warp extremely fast.
            </li>
          </ul>

          <h3>Support Stones (All-In on Melee)</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — melee critical chance.
            </li>
            <li>
              <strong>Headsman Stone</strong> — melee critical damage.
            </li>
            <li>
              <strong>Berserker Stone</strong> — more damage as your health
              drops (a fallback for when you&apos;re in a bad spot).
            </li>
            <li>
              <strong>Bullwork Stone</strong> — damage reduction after killing
              an enemy, letting you play aggressive.
            </li>
          </ul>
          <p>
            <em>
              If you prefer using a sidearm, swap Devout Stone in for Berserker
              or Bullwork to refund resources — but since I cast summons instead
              of using a sidearm, I stick with full melee stones.
            </em>
          </p>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips For Genessa</h2>
          <ul className="list-disc pl-6">
            <li>
              Dump summons onto a boss and keep stacking Phantom with your own
              attacks while the boss focuses them — the detonation burst is
              absolutely deadly.
            </li>
            <li>
              Groups of enemies are easy: send in your phantoms to AoE around
              and explode, clearing packs without exposing yourself.
            </li>
            <li>
              Don&apos;t get knocked out of your shell — Faithful Doubles is
              much stronger than Duality, and Genessa&apos;s low health makes
              Stray form risky. Rest at a Beacon to recover if you do get
              severed.
            </li>
            <li>
              Lean on Distraction: enemies hitting your doubles gives you free
              back attacks to stack Phantom even faster.
            </li>
          </ul>
        </section>

        <AdBanner />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Genessa FAQ</h2>
          <div className="faq">
            <h3>What are Genessa&apos;s abilities in Mortal Shell 2?</h3>
            <p>
              Genessa has <strong>Faithful Doubles</strong> (summon phantoms
              that attack with your equipped weapon) and{" "}
              <strong>Duality</strong> (when knocked out of your shell she
              becomes a Stray version that summons clones copying her movements
              instead).
            </p>

            <h3>What is the best weapon for Genessa in Mortal Shell 2?</h3>
            <p>
              The <strong>Black Needle</strong> is the only melee weapon that
              can be infused with <strong>Phantom</strong>, which synergizes
              with Faithful Doubles — every Phantom stack you add raises the
              detonation damage, and the Conqueror&apos;s Reward skill makes the
              phantoms land extra thrusts to stack Phantom faster.
            </p>

            <h3>How does Genessa&apos;s Duality work in Mortal Shell 2?</h3>
            <p>
              Instead of becoming the Harbinger, Genessa transforms into a
              red-masked Stray version that summons Stray Doubles copying her
              attacks. She can only return to her shell by resting at a Beacon,
              so avoid getting knocked out of your shell if possible.
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

        <BuildNav current="genessa" />

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
