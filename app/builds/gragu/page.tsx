export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import BannerAd from "@/components/BannerAd";
import BuildNav from "@/components/BuildNav";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Gragu Build Gudie";
const PAGE_PATH = "/builds/gragu";
const DESCRIPTION =
  "Best Mortal Shell 2 Gragu build: Staggering Blow carry, Revered Heart sustain, Veteran's Battle Axe + burn, and the best melee Tarstones with final tips.";

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
  headline: "Mortal Shell 2 Gragu Build – Best Guide",
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
      name: "What are Gragu's abilities in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gragu has Staggering Blow (a charge-up punch that lunges forward, dealing more damage the longer you charge) and Revered Heart (a unique heal — you gain heal charges as you defeat enemies, keeping you topped up on the move).",
      },
    },
    {
      "@type": "Question",
      name: "What is the best weapon for Gragu in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Veteran's Battle Axe is recommended — it has great stagger damage that knocks enemies around and creates openings to charge Staggering Blow, and it can be infused with burn so many humanoid enemies sit on fire and stop attacking you.",
      },
    },
    {
      "@type": "Question",
      name: "How do you sustain health with Gragu in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gragu gains Revered Heart heal charges by defeating enemies, and Heartless kills regular enemies instantly and heals you on top. You can keep yourself topped up without resting, and at max Revered Heart you gain extra gloom, 15 resolve and 20 health per kill.",
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
    ability: "Escalation",
    points: "2 (priority #1)",
    effect:
      "Increases Staggering Blow damage up to +50% on the first upgrade, +15% on the second. The first point is priority number one; a third point for just 5% more isn't worth it.",
  },
  {
    ability: "Blood Thirst",
    points: "Skip (early game only)",
    effect:
      "Kills replenish Revered Heart faster. Great when learning mechanics, but once you know the enemies you rarely need healing point-for-point.",
  },
  {
    ability: "Heart Work",
    points: "Skip",
    effect:
      "Blood Curse mitigation/immunity and a 3% chance to fully replenish Revered Heart. Hard to trigger Blood Curse on most enemies and 3% is too low to build around.",
  },
  {
    ability: "Attunement",
    points: "Max",
    effect:
      "Staggering Blow costs 50% less resolve at max — use it twice as much. Kill enemies with it to replenish the resolve cost and keep spamming it.",
  },
  {
    ability: "Harvest",
    points: "Recommended",
    effect:
      "Heal more per Revered Heart and hold up to 8 heals instead of 3. Essential for boss fights, especially on New Game Plus.",
  },
  {
    ability: "Maniac",
    points: "Optional (bosses)",
    effect:
      "Melee damage +40% against enemies you've never fought. Useless against most enemies, great for first-time boss fights.",
  },
  {
    ability: "Anger",
    points: "Boss-fight pick",
    effect:
      "Staggering Blow applies weak, fragile and break stacks — useful in boss fights where you spam the ability.",
  },
  {
    ability: "Bloodlust",
    points: "Skip (boss-fight only)",
    effect:
      "Next melee attack after a heal deals +100% damage, 50% chance to cure all debuffs, 15 Warp stacks. Better in boss fights; not worth points on the landscape.",
  },
  {
    ability: "Devour",
    points: "Core",
    effect:
      "At max Revered Heart, defeating enemies grants extra gloom, 15 resolve and 20 health. Stay at max stacks while exploring to keep these buffs rolling and fuel Staggering Blow spam.",
  },
  {
    ability: "Heartless",
    points: "Max (core)",
    effect:
      "Staggering Blow rips out the heart of small/medium humanoids, killing them instantly, healing you and exploding for AoE damage. Instantly kills regular enemies and keeps you topped up.",
  },
  {
    ability: "Hunger",
    points: "Optional (boss clutch)",
    effect:
      "When you have zero Revered Hearts, critical chance is increased up to 60%. Hard to maintain (kills refill heals), but great in late boss fights to push over the edge.",
  },
  {
    ability: "Fortify",
    points: "Skip (early tree only)",
    effect:
      "Resting at a Beacon replenishes up to 3 Revered Hearts. Once you get going you don't need it at all.",
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
export default function GraguBuildPage() {
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
          <span>Gragu Build</span>
        </nav>

        <span className="eyebrow">Brawler Build</span>
        <h1>
          Mortal Shell 2 Gragu Build Guide
        </h1>

        <p className="intro-link">
          <strong>New to Gragu?</strong> Start with our
          <a href="/shells/gragu" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
            Gragu Shell Overview
          </a>
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />
        <p className="lede">
          Gragu is an absolute monster — the tankiest shell in the game,
          carried by the <strong>Staggering Blow</strong> fist ability and
          endless <strong>Revered Heart</strong> sustain. He can use almost
          any weapon, and the fist is what carries him through everything.
        </p>

        <BannerAd />

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Gragu is likely the third or fourth shell you&apos;ll get,
            depending on which direction you go. He&apos;s tied for the
            second-highest health pool with Eredrim, and you can make a
            strong argument he&apos;s the tankiest character in the game.
            Unlike some shells that focus on a single status effect, he can
            basically use any weapon in the game — even though he has a
            slight emphasis on Blood Curse, it&apos;s honestly not that
            important to the build.
          </p>
        </section>

        <AdBanner />

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Gragu Abilities</h2>

          <h3>Staggering Blow</h3>
          <p>
            This allows him to charge up a punch that lunges forward a decent
            distance, dealing more damage the longer you charge it. It&apos;s
            basically his bread-and-butter ability, and tons of passives make
            it stronger and stronger. This is one of the reasons he&apos;s so
            versatile — it&apos;s the ability that really carries him through
            the game.
          </p>

          <h3>Revered Heart</h3>
          <p>
            A healing form that works differently from other characters. By
            default Gragu starts with zero heals, but as he defeats enemies
            he gains more and more. It sounds punishing at first, but the
            more you kill, the more heals you get back — so he&apos;s
            actually one of the easier characters once you&apos;ve killed a
            few enemies, since you can go a little way, heal, then keep
            replenishing your Revered Heart and always have heals instead of
            running out and resting. On top of that, he has a lot of passive
            healing from his shell abilities.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Gragu Shell Abilities (Skill Tree)</h2>

          <SkillTreeTable nodes={SKILL_TREE} />
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Gragu</h2>
          <p>
            Honestly, you can use whatever you like for both melee and
            ranged — there&apos;s no perfect weapon for this build. Gragu&apos;s
            Blood Curse effect is minimal and doesn&apos;t trigger easily, so
            you don&apos;t need to lean toward a Blood Curse-inflicting
            weapon like you might in other builds.
          </p>

          <h3>Veteran&apos;s Battle Axe (Melee)</h3>
          <p>
            I use this for a couple of reasons. First, I love the stagger
            damage — it knocks enemies around so they can&apos;t hit me
            easily, creating openings to charge Staggering Blow. Second, you
            can infuse it with burn: when you hit a lot of the humanoid
            enemies they sit on fire and stop attacking you, which prevents
            you from taking damage, so you don&apos;t have to heal, and again
            opens up the chance to use Staggering Blow.
          </p>

          <h3>Ranged Weapon</h3>
          <p>
            Use whatever you want. I don&apos;t use ranged attacks at all
            with this build — Gragu benefits predominantly from melee. I do
            have the Lost Clot Stone slotted on my weapon so I can throw it
            if I ever need a ranged option. A nice bonus: if you&apos;re
            knocked out of your shell, throwing the melee weapon counts
            toward getting back into it, unlike other ranged weapons.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones</h2>

          <h3>Melee Weapon Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Thief Stone</strong> — attack more quickly, shoring up
              the Battle Axe&apos;s slow swing speed.
            </li>
            <li>
              <strong>Grudge Stone</strong> (alternative) — for more critical
              hits if you have it and not Thief Stone.
            </li>
            <li>
              <strong>Inflamed Claw Stone</strong> — infuses the weapon with
              fire for the burn effect.
            </li>
          </ul>

          <p>
            <em>
              Ranged weapon stones are up to you — since you never use ranged
              attacks, pick whatever makes sense.
            </em>
          </p>

          <h3>Support Stones (All-In on Melee)</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — increases melee critical
              chance.
            </li>
            <li>
              <strong>Headsman Stone</strong> — increases melee critical
              damage.
            </li>
            <li>
              <strong>Berserker Stone</strong> — more melee damage as your
              health drops. Doesn&apos;t trigger often since you stay topped
              up, but gets you out of a bad spot if you fall below 50%
              health.
            </li>
            <li>
              <strong>Bullwork Stone</strong> — up to 20% damage reduction
              for 4 seconds after defeating an enemy, letting you play a
              berserker playstyle and run rampant.
            </li>
          </ul>

          <h3>Consumable</h3>
          <p>
            <strong>Common Moonshine</strong> (passive) — extra damage
            reduction to stack even more mitigation. You can also use it in
            the active slot to grant Resolve if you want. Here I stack damage
            reduction so I can chew through enemies, and even when they hit
            me I heal back up to full easily.
          </p>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips</h2>
          <ul className="list-disc pl-6">
            <li>
              The fist (Staggering Blow) is absolutely cheesy but it carries
              you through pretty much anything — it doesn&apos;t really
              matter what weapons you use.
            </li>
            <li>
              You can use it in boss fights if you play smartly. Don&apos;t
              charge it all the way most of the time, but you can stun-lock
              bosses.
            </li>
            <li>
              With Common Moonshine as your active item, pop one in between
              Staggering Blows to top yourself back up and keep stunning a
              boss.
            </li>
            <li>
              Stay at max Revered Heart while exploring to keep the Devour
              bonuses (extra gloom, 15 resolve, 20 health per kill) rolling.
            </li>
            <li>
              Heartless instantly kills regular enemies and heals you, so you
              rarely need to spend heals on the landscape — save them for
              boss fights.
            </li>
          </ul>
        </section>

        <BannerAd />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Gragu FAQ</h2>
          <div className="faq">
            <h3>What are Gragu&apos;s abilities in Mortal Shell 2?</h3>
            <p>
              Gragu has <strong>Staggering Blow</strong> (a charge-up punch
              that deals more damage the longer you charge) and{" "}
              <strong>Revered Heart</strong> (a unique heal — you gain heal
              charges as you defeat enemies, keeping you topped up on the
              move).
            </p>

            <h3>What is the best weapon for Gragu in Mortal Shell 2?</h3>
            <p>
              The <strong>Veteran&apos;s Battle Axe</strong> — great stagger
              damage that knocks enemies around and creates openings to
              charge Staggering Blow, and it can be infused with burn so many
              humanoid enemies sit on fire and stop attacking you.
            </p>

            <h3>How do you sustain health with Gragu in Mortal Shell 2?</h3>
            <p>
              Gragu gains <strong>Revered Heart</strong> heal charges by
              defeating enemies, and <strong>Heartless</strong> kills regular
              enemies instantly and heals you on top. At max Revered Heart
              you gain extra gloom, 15 resolve and 20 health per kill.
            </p>
          </div>
        </section>

        <BuildNav current="gragu" />

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
