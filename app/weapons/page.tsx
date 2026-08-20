export const dynamic = 'force-static';
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import { WEAPONS } from "@/lib/weapons-data";

const TITLE = "Mortal Shell 2 Weapons";
const PAGE_PATH = "/weapons";
const DESCRIPTION =
  "Complete Mortal Shell 2 weapons list — stats, scaling, special abilities, locations, sidearms, and playstyle breakdowns verified.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
   JSON-LD
   ============================================================ */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Weapons",
  itemListElement: WEAPONS.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${w.name} (${w.type})`,
    url: pageURL(`${PAGE_PATH}#${w.id}`),
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many weapons are in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seven weapons are confirmed in the Mortal Shell 2 Open Beta roster: Axatana, Axe and Dagger, Hallowed Sword, Hammer and Chisel, The Iconoclast, Martyr's Blade, and Smoldering Mace. The full release is expected to add more one-handed options, heavier two-handers, ranged Hand Cannon variants, and secret late-game drops.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best weapon in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the Open Beta, Hallowed Sword sits at the top of the Mortal Shell 2 weapon rankings for its consistent raw damage, holy shockwave crowd control, and a pickup location that sits in your path before the punishing Great Arbiter of Flesh fight. Smoldering Mace is a strong second for players who want a single-handed option with burn stacks and ground fire AOE, especially for the Hall of Illusions content. Final rankings will settle once we have full release drops to compare.",
      },
    },
    {
      "@type": "Question",
      name: "Mortal Shell 2 weapons tier list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full Mortal Shell 2 weapons tier list goes live after release once every hidden weapon, infusion, and boss drop is in hand. For the current Beta the rough ranking is S: Hallowed Sword. A: The Iconoclast, Smoldering Mace, Martyr's Blade. B: Axatana, Axe and Dagger. C: Hammer and Chisel (strong poise damage but tight parry timing limits it). We will publish complete S/A/B/C tier tables with recommended Shell pairings, so bookmark this page and check back on the day of release.",
      },
    },
    {
      "@type": "Question",
      name: "How do you get Hallowed Sword in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hallowed Sword sits on the altar directly in front of the Great Arbiter of Flesh arena, past the Widow's Overlook beacon. Grab it before you trigger the fight. The walk to the altar is linear once you reach Widow's Overlook. Activate the beacon first so you have a checkpoint in case the Arbiter one-shots you on the first attempt. The holy shockwave from the weapon also cuts down the Arbiter's first phase cleanly, so the weapon is made for that exact encounter.",
      },
    },
    {
      "@type": "Question",
      name: "Mortal Shell 2 weapon scaling explained",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 weapon scaling follows a letter grade system from S down to E. S means the weapon gains an enormous amount of damage from that stat, and E means barely any benefit. Axatana and Martyr's Blade lean Dexterity. The Iconoclast and Hallowed Sword lean Strength. Holy weapons like Hallowed Sword and Martyr's Blade also pull Faith for extra holy tick damage. Unlike the original Mortal Shell, weapon scaling is bound to the Shell you are wearing rather than a separate character level, so swapping Shells re-rolls the effective grade. Tarstone infusions can push a grade up by one step at shrines, up to the S cap.",
      },
    },
  ],
};

/* ============================================================
   WeaponCard 中 Shell 名 → /shells/[slug] 锚链辅助
   ============================================================ */
const SHELL_LINK: Record<string, string> = {
  "Proxima": "/shells/proxima",
  "Tiel": "/shells/tiel",
  "Gragu": "/shells/gragu",
  "Eredrim": "/shells/eredrim",
  "Smert": "/shells/smert",
  "Sariel": "/shells/sariel",
  "Lazlo": "/shells/lazlo",
  "Genessa": "/shells/genessa",
};

function linkifyShells(text: string): ReactNode[] {
  const patterns = Object.keys(SHELL_LINK).sort((a, b) => b.length - a.length);
  const regex = new RegExp(
    `(?<!\\w)(${patterns.map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?!\\w)`,
    "g"
  );
  const result: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }
    const name = match[1];
    const href = SHELL_LINK[name];
    result.push(
      <a
        key={`${match.index}-${name}`}
        href={href}
        className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
      >
        {name}
      </a>
    );
    lastIndex = match.index + name.length;
  }
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }
  return result.length ? result : [text];
}

/* ============================================================
   Weapon detail card，服务端直出
   ============================================================ */
function WeaponCard({ weapon }: { weapon: (typeof WEAPONS)[number]; }) {
  return (
    <article
      id={weapon.id}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-5 scroll-mt-24"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-amber-300">
          {weapon.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="shrink-0 rounded bg-green-500/15 px-2 py-0.5 text-xs text-green-400">
            Beta Confirmed
          </span>
          <span className="shrink-0 rounded bg-white/10 px-2 py-0.5 text-xs text-white/60">
            {weapon.type}
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm text-white/70">{weapon.description}</p>

      <dl className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Weapon Type
          </dt>
          <dd className="mt-1">{weapon.type}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Damage Type
          </dt>
          <dd className="mt-1">{weapon.damageType}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Primary Stats
          </dt>
          <dd className="mt-1">{weapon.primaryStats}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Scaling
          </dt>
          <dd className="mt-1">{weapon.scaling}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Special Ability
          </dt>
          <dd className="mt-1">{weapon.specialAbility}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-white/40">
            How to Obtain
          </dt>
          <dd className="mt-1">{weapon.obtain}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Playstyle Notes
          </dt>
          <dd className="mt-1">{linkifyShells(weapon.playstyle)}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-wider text-white/40">
            Beta Notes
          </dt>
          <dd className="mt-1 text-white/70">{linkifyShells(weapon.betaNotes)}</dd>
        </div>
      </dl>

      <p className="mt-4 text-xs text-white/40">
        Location: {weapon.location}. Source: {weapon.source}.
      </p>
    </article>
  );
}

/* ============================================================
   页面
   ============================================================ */
export default function WeaponsPage() {
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

        <span className="eyebrow">Weapons &amp; Equipment</span>
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          All weapons confirmed in the Mortal Shell 2 Open Beta — weapon
          types, stats, damage scaling, and known locations. Axatana,
          dual-wield pairs, heavy two-handers, and an ultra greatsword all
          sit in the current roster. Each weapon card below covers how to
          find it, the special ability attached to it, and which Shells get
          the most out of the swing patterns.
        </p>

        {/* 1. 武器总览表格 */}
        <section className="article mt-12">
          <h2>Mortal Shell 2 Weapon List</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Click any weapon name to jump to its detail card. Each chest and
            drop location is also marked on the{" "}
            <a href="/map" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 interactive map
            </a>
            .
          </p>
          <div className="overflow-x-auto">
            <table
              className="data"
              style={{ width: "100%", borderCollapse: "collapse", fontSize: ".875rem" }}
            >
              <thead>
                <tr
                  className="border-b border-white/10"
                  style={{ textAlign: "left", color: "var(--text-secondary)" }}
                >
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Weapon
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Type
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Damage Type
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Scaling
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Location
                  </th>
                  <th
                    style={{
                      padding: ".5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {WEAPONS.map((w) => (
                  <tr key={w.id} className="border-b border-white/5">
                    <td
                      style={{
                        padding: ".5rem 1rem .5rem 0",
                        fontWeight: 500,
                      }}
                    >
                      <a
                        href={`${PAGE_PATH}#${w.id}`}
                        style={{
                          color: "var(--color-gold)",
                          textDecoration: "none",
                        }}
                      >
                        {w.name}
                      </a>
                    </td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>{w.type}</td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>
                      {w.damageType}
                    </td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>{w.scaling}</td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>
                      {w.location}
                    </td>
                    <td style={{ padding: ".5rem 0" }}>{w.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Weapon Details — H3 卡片 */}
        <section className="article">
          <h2>Weapon Details</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Every weapon confirmed in the Beta gets its own card with stats,
            special mechanics, and a pick order. Match each weapon to its
            ideal Shell on the{" "}
            <Link href="/shells" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Shell roster
            </Link>{" "}
            or plug it into the{" "}
            <Link href="/builds" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 builds
            </Link>{" "}
            guide for a full playstyle setup.
          </p>
          <div className="mt-6 space-y-4">
            {WEAPONS.map((weapon) => (
              <WeaponCard key={weapon.id} weapon={weapon} />
            ))}
          </div>
        </section>

        {/* 3. FAQ */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <h3>How many weapons are in Mortal Shell 2?</h3>
            <p>
              Seven weapons are confirmed from the Mortal Shell 2 Open Beta:
              Axatana, Axe and Dagger, Hallowed Sword, Hammer and Chisel,
              The Iconoclast, Martyr's Blade, and Smoldering Mace. That is
              the count for the Beta slice. Cold Symmetry has teased more
              one-handed blades, heavy two-handers with the Heavy
              Instruments classification, and a Hand Cannon that works as a
              ranged slot rather than a pure melee swing. The full release
              will almost certainly expand the roster.
            </p>

            <h3>What is the best weapon in Mortal Shell 2?</h3>
            <p>
              For the current Beta, Hallowed Sword is the strongest Mortal
              Shell 2 weapon. It sits directly on your path to the Great
              Arbiter of Flesh, its raw two-handed damage punishes nearly
              every enemy type, and the holy shockwave clears the Hall of
              Illusions clones without forcing you to identify the real
              Vrannic first. Smoldering Mace is a close second for anyone
              who prefers a single-handed swing with long reach and burn
              stacks. The Iconoclast takes the top Strength weapon slot
              once you unlock it after the Wandering Shepherd.
            </p>

            <h3>Mortal Shell 2 weapons tier list</h3>
            <p>
              the rough ranking is as follows. S tier: Hallowed
              Sword. A tier: The Iconoclast, Smoldering Mace, Martyr's
              Blade. B tier: Axatana for its two-form stance play and Axe
              and Dagger for its poison backstab windows. C tier: Hammer
              and Chisel, held back by its tight perfect-parry window even
              though its raw poise damage is strong when you land it. We
              will publish full S, A, B, C tiers with recommended Shell
              pairings and Tarstone infusions for each entry once every
              secret weapon is accounted for.
            </p>

            <h3>How do you get Hallowed Sword in Mortal Shell 2?</h3>
            <p>
              Pick up the Hallowed Sword from the altar right in front of
              the Great Arbiter of Flesh arena, past the Widow's Overlook
              beacon. The route is linear once you reach the overlook.
              Activate Widow's Overlook first so you have a checkpoint,
              walk the short path down to the open area, and the altar sits
              just before the fog gate. Grab the sword, then engage the
              Arbiter. The holy shockwave from the sword actually counters
              the Arbiter's long swing recovery, so Cold Symmetry placed
              the weapon in exactly the right spot for that matchup. Full
              step-by-step routing and every adjacent chest location is
              covered in the{" "}
              <a href="/walkthrough" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 walkthrough
              </a>
              .
            </p>

            <h3>Mortal Shell 2 weapon scaling explained</h3>
            <p>
              Mortal Shell 2 uses a letter-grade scaling system from S down
              to E. S means the weapon gains a large amount of damage from
              the stat it is tied to. E means almost no bonus. Dexterity
              weapons like Axatana and Martyr's Blade scale best with the
              agile Shells, Strength weapons like The Iconoclast and
              Hallowed Sword want a strength-focused tank, and holy
              options gain extra tick damage from Faith grade letters. The
              key difference from the original Mortal Shell is that scaling
              grades come attached to the Shell you are wearing, not a
              shared player level. Swap Shells and the effective grade
              shifts. At shrines you socket Tarstone infusions to push a
              grade one step higher, up to the S cap. Match the grade to
              the Shell and the damage numbers jump dramatically. Full
              grade tables are in the{" "}
              <Link href="/tips" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 beginner tips
              </Link>{" "}
              once you need to plan out your shrine infusions.
            </p>
          </div>
        </section>

        {/* 4. MS2 vs MS1 weapon 变化比较 */}
        <section className="article">
          <h2>Mortal Shell 2 vs Mortal Shell — Weapon Changes</h2>
          <p>
            In the original Mortal Shell, weapons fell into a small set of
            one-handed and two-handed categories with relatively uniform
            swing speeds and no weapon-specific mechanics beyond a niche
            special attack. The sequel expands the weapon system in every
            direction. Each weapon in the Open Beta has its own distinct
            swing patterns, stance swaps, or hold-charge abilities that
            change how the weapon fights. Axatana toggles between short and
            extended stances mid-combat. Hammer and Chisel gives you a
            perfect-parry poise-break tool on the off-hand. The new
            Ultra Greatsword classification, represented by The Iconoclast,
            actually swings faster than heavy greatswords in the first
            game, and the Heavy Instruments category promises even slower,
            more armored swings later in the roster.
          </p>
          <p>
            Scaling is another major shift. Original Mortal Shell weapons
            had loose stat ties that rarely changed how you built out a
            Shell. Mortal Shell 2 weapon scaling letters bind directly to
            the Shell you are wearing, so a Strength S weapon like The
            Iconoclast feels like a different blade on Tiel
            compared to Eredrim. The Hand Cannon, which is
            the first real ranged slot in the series, further opens up
            mixed builds that are not possible in the first game. Tarstone
            infusions also let you bump a scaling letter one grade higher
            at shrines, so a weapon that feels mediocre at base grade can
            become the backbone of a focused build once you have the right
            Shell and a matching Tarstone socket.
          </p>
        </section>

        {/* 5. 底部发售标识 */}
        <section className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p style={{ margin: ".6rem 0 0", fontSize: ".9rem", color: "var(--text-secondary)" }}>
            Infusion tables, precise grade percentiles, and every hidden
            weapon drop go live within the first week of release. Weapon
            chest locations and nearby beacons are already mapped on the{" "}
            <a href="/map" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 map
            </a>{" "}
            so you can plan a clean pickup order.
          </p>
        </section>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
