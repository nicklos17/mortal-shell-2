import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import { BUILDS } from "@/lib/builds-data";
import { SHELLS_FOR_BUILDS_COMPARISON } from "@/lib/shells-json";
import { SHELLS } from "@/data/shells";

const TITLE = "Mortal Shell 2 Builds";
const PAGE_PATH = "/builds";
const DESCRIPTION =
  "Mortal Shell 2 builds by playstyle. Tank, DPS, agile, mage, poison DOT, summoner, hybrid, and beginner setups with recommended Shell and weapon pairings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: pageURL(PAGE_PATH),
    type: "website",
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
   JSON-LD
   ============================================================ */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Builds",
  itemListElement: BUILDS.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${b.name} (${b.role})`,
    url: pageURL(`${PAGE_PATH}#${b.id}`),
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Mortal Shell 2 build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single best Mortal Shell 2 build. The strongest setup depends on the encounter and the player's preference. Tank builds like Black Beard excel at surviving punishing bosses. Agile builds like Tiel the Acolyte dominate mobile targets and hit-and-run routing. Pure DPS collapses a fight fast but requires clean reads. Beginner players should start with Harros hybrid before branching into Mortal Shell 2 builds that fit their playstyle.",
      },
    },
    {
      "@type": "Question",
      name: "How do builds work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Mortal Shell 2 build layers three choices. First you pick a Shell, which sets your base stats and signature ability. Then you pair it with a weapon whose swing style fits that Shell. Finally you socket Tarstones and Seals to push specific stats higher, such as crit, health, or mana regen. Swap between Shells at shrines to change your entire build between fights.",
      },
    },
    {
      "@type": "Question",
      name: "Which Shell should I start with for builds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harros the Vassal is the safest starting point for new players. His balanced stat spread works with nearly every weapon and leaves room to test before committing to a specialized build. If you enjoy tank play, move to Black Beard or Eredrim the Venerable. If you favor speed, respec toward Tiel the Acolyte and the agile build. See the full Shell roster on our Shells page for each shell's recommended pairing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I respec my Mortal Shell 2 build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shell Points and Tarstone choices can be reallocated at any Tarstone shrine, so a wrong build early on is not a permanent decision. Use the first playthrough to test several setups against different bosses, then lock into whichever feels most natural for your routing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need different builds for different bosses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mostly yes. A poison DOT build melts tanky flesh bosses but falls apart when the target resists poison. A spellcaster build clears crowds from range but needs a melee swap when an enemy closes distance. Prepare at least two loadouts before heading into a new area, one for general progression and one tuned for the boss at the end. Our boss strategies section lists recommended builds per encounter.",
      },
    },
  ],
};

/* ============================================================
   子组件（Shell 卡片），服务端可渲染，无 client 依赖
   ============================================================ */

function ShellCard({ shell }: { shell: (typeof SHELLS)[number]; }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-amber-300">{shell.name}</h3>
        {shell.confirmed ? (
          <span className="shrink-0 rounded bg-green-500/15 px-2 py-0.5 text-xs text-green-400">
            Confirmed
          </span>
        ) : (
          <span className="shrink-0 rounded bg-white/10 px-2 py-0.5 text-xs text-white/50">
            TBA
          </span>
        )}
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div>
          <dt className="text-white/40">Role</dt>
          <dd>{shell.role}</dd>
        </div>
        <div>
          <dt className="text-white/40">Difficulty</dt>
          <dd>{shell.difficulty}</dd>
        </div>
        <div>
          <dt className="text-white/40">Playstyle</dt>
          <dd>{shell.playstyle}</dd>
        </div>
        <div>
          <dt className="text-white/40">Build</dt>
          <dd>{shell.buildDirection}</dd>
        </div>
      </dl>

      <p className="mt-3 text-sm text-white/70">{shell.mechanic}</p>
    </article>
  );
}

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
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          Eight battle-tested Mortal Shell 2 builds covering every major
          playstyle. Shell choice is only the first step. Weapon, Tarstone
          sockets, and Seal loadout stack together to make a setup sing. Pick
          the archetype that fits how you want to fight, then lean into its
          strengths with the recommended shell and talent order below.
        </p>

        {/* 1. What Are Builds in Mortal Shell 2? */}
        <section className="article mt-12">
          <h2>What Are Builds in Mortal Shell 2?</h2>
          <p>
            In Mortal Shell 2, a build is built around one thing: your Shell.
            The game doubles the original&apos;s roster to eight playable
            Shells, and each Shell charts its own build direction. Health,
            agility, weapon affinity, and playstyle come locked to that
            character, not a stat menu. The sequel also removes the stamina
            bar, so the old soulslike loop of managing stamina to time your
            attacks is gone. Instead Mortal Shell 2 builds run on a rhythm
            of Shell-switching and weapon swaps. Pair each Shell with the
            right blade from the{" "}
            <a href="/weapons/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 weapon list
            </a>{" "}
            to turn a direction into an actual build. You don&apos;t respec a
            single character so much as swap between Shells to change your
            entire setup between fights.
          </p>
          <p>
            That shift away from stamina management is the single biggest
            force shaping every Mortal Shell 2 build. This guide breaks down
            all eight Shells, compares their roles in a single table, and
            points you to the best starting direction for your playstyle
            among Mortal Shell 2 builds. Details are refreshed continuously
            after the August 20 launch.
          </p>
        </section>

        {/* 2. All 8 Shells — 每个 Build 的 Foundation */}
        <section className="article">
          <h2>All 8 Shells — The Foundation of Every Build</h2>
          <p className="mb-6 text-white/70">
            Browse the full{" "}
            <Link href="/shells/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              all playable Shells in Mortal Shell 2
            </Link>{" "}
            roster. Confirmed Shells are filled in below; the rest go live on launch day.
            Each Shell has its own build direction.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SHELLS.map((shell) => (
              <ShellCard key={shell.id} shell={shell} />
            ))}
          </div>
        </section>

        {/* 3. 对比表格 + 说明（含发售后填充 tips） */}
        {/* 发售后数据填充说明 */}
        <div className="note">
          <p style={{ margin: 0, fontWeight: 500, color: "var(--color-gold)", marginBottom: ".4rem" }}>
            How we fill this in after August 20.
          </p>
          <p style={{ margin: "0 0 .4rem" }}>
            Rows and cards stay empty until real data is in hand. Structure does not change. You only edit the SHELLS array.
          </p>
          <ol style={{ margin: 0, paddingLeft: "1.15rem" }}>
            <li>
              When a Shell name goes official, paste it into the <code>name</code> field and set{" "}
              <code>confirmed</code> to <code>true</code>.
            </li>
            <li>
              Once role, difficulty, playstyle, and build direction are confirmed in a live run, write them into{" "}
              <code>role</code>, <code>difficulty</code>, <code>playstyle</code>, and{" "}
              <code>buildDirection</code>. Replace the generic text in <code>mechanic</code> with what the Shell does.
            </li>
            <li>
              Cards and the comparison table read from the same SHELLS list. One edit updates both places.
            </li>
            <li>
              To add a portrait, add an <code>image: string</code> field to each Shell object and wire an{" "}
              <code>Image</code> tag into the card. Follow the naming rule already in use. For example:{" "}
              <code>tiel-the-acolyte-mortal-shell-2.webp</code>.
            </li>
          </ol>
        </div>

        <section className="article">
          <h2>Mortal Shell 2 Builds Comparison Table</h2>
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
                    Shell
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Difficulty
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Playstyle
                  </th>
                  <th
                    style={{
                      padding: ".5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Build Direction
                  </th>
                </tr>
              </thead>
              <tbody>
                {SHELLS_FOR_BUILDS_COMPARISON.map((shell) => (
                  <tr
                    key={shell.id}
                    className="border-b border-white/5"
                  >
                    <td
                      style={{
                        padding: ".5rem 1rem .5rem 0",
                        fontWeight: 500,
                        color: "var(--color-gold)",
                      }}
                    >
                      {shell.name}
                    </td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>{shell.role}</td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>
                      {shell.difficulty}
                    </td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>
                      {shell.playstyle}
                    </td>
                    <td style={{ padding: ".5rem 0" }}>{shell.buildDirection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: ".75rem", fontSize: ".875rem", color: "var(--text-secondary)" }}>
            This Mortal Shell 2 builds comparison will be fully populated on
            launch day, August 20, 2026.
          </p>
        </section>
        <p className="lede" style={{ fontSize: ".95rem", margin: "-.25rem 0 1.5rem" }}>
          Gear, seal, and Tarstone shrine locations for these builds are being
          catalogued and annotated on the{" "}
          <a href="/map/">Mortal Shell 2 interactive map</a>. Check there first
          before heading into a new region, to avoid doubling back for a socket
          or weapon that lives in an earlier zone.
        </p>

        {/* 4. Best Builds by Playstyle（按打法选 build 的决策框架） */}
        <section className="mt-12">
          <h2>Best Builds by Playstyle</h2>
          <p>
            Not every player wants the same Mortal Shell 2 best build. Match
            the direction below to how you fight, then pick the Shell that
            fits. Final loadouts go live on launch day. This is the decision
            framework in the meantime.
          </p>

          <h3>New to soulslike games</h3>
          <p>
            Pick a Shell with high survivability and forgiving timing. With no
            stamina bar, your margin for error is wider than in most soulslike
            titles, but a sturdy Shell still forgives mistakes while you learn
            boss patterns.
          </p>

          <h3>Aggressive / in-your-face</h3>
          <p>
            Look for heavy-hitting Shells that can trade blows and use the new
            Hand Cannon to close distance. Shell-switching mid-fight lets you
            keep pressure on instead of backing off to heal.
          </p>

          <h3>Fast &amp; evasive</h3>
          <p>
            A light, mobile Shell rewards dodging and hit-and-run attacks.
            This style leans hardest on the Shell-switch rhythm, since you
            rely on quick swaps to stay alive rather than tanking damage.
          </p>

          <h3>Ranged / hybrid</h3>
          <p>
            The Hand Cannon changes the toolkit for ranged play. Pair it with
            a Shell that keeps you mobile, and you can soften bosses from
            range before closing in for the kill.
          </p>

          <p className="mt-3 text-sm text-white/50">
            Shell names and exact loadouts for each playstyle will be
            confirmed after the game launches on August 20, 2026.
          </p>
        </section>

        {/* 5. How to Choose Your Build（三问决策法） */}
        <section className="mt-12">
          <h2>How to Choose Your Build</h2>
          <p>
            Answer these three questions and the right Mortal Shell 2 build
            direction picks itself:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Do you prefer melee or ranged?</strong> The Hand Cannon
              opens up ranged play for the first time in the series. Prefer
              up close? Focus on a Shell with strong weapon affinity.
            </li>
            <li>
              <strong>Do you like switching or specializing?</strong> Mortal
              Shell 2 builds reward Shell-swapping mid-fight. If you love
              variety, build around two Shells that cover each other&apos;s
              weaknesses instead of one.
            </li>
            <li>
              <strong>How much do you fear death?</strong> The Shell system
              is your safety net. Losing a Shell is not losing progress.
              Beginners should treat their Shell as a second health bar.
            </li>
          </ul>
          <p>
            Still torn? Start with the comparison table above, then read the
            Shell cards for the two or three that match your answers. New
            players can also read our{" "}
            <Link href="/tips/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 beginner tips
            </Link>{" "}
            to get the basics down before committing to a build.
          </p>
        </section>

        {/* 6. More Build Guides Coming After Launch（发售占位/活页声明） */}
        <section className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h2>More Build Guides Coming After Launch</h2>
          <p>
            This page is a living guide. On launch day (August 20, 2026) we
            will fill in every Shell&apos;s confirmed role, difficulty, and
            best loadout. That includes weapons, items, and boss-fight
            recommendations pulled from a full hands-on testing pass.
            Bookmark this page and check back daily for the latest confirmed
            Mortal Shell 2 builds. The first week gets rolling boss updates
            and optimal Tarstone sockets. The first month adds speedrun and
            challenge builds as meta routes solidify, so revisit often once
            the post-launch patch notes land.
          </p>
          <p className="text-sm text-white/50">Last updated: August 14, 2026</p>
        </section>

        {/* 7. FAQ */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <h3>What is the best Mortal Shell 2 build?</h3>
            <p>
              There is no single best Mortal Shell 2 build. The strongest
              setup depends on the encounter and the player's preference. Tank
              builds like Black Beard excel at surviving punishing bosses.
              Agile builds like Tiel the Acolyte dominate mobile targets and hit-and-run
              routing. Pure DPS collapses a fight fast but requires clean
              reads. Beginner players should start with Harros hybrid before
              branching into Mortal Shell 2 builds that fit their playstyle.
            </p>

            <h3>How do builds work in Mortal Shell 2?</h3>
            <p>
              A Mortal Shell 2 build layers three choices. First you pick a
              Shell, which sets your base stats and signature ability. Then
              you pair it with a weapon whose swing style fits that Shell.
              Finally you socket Tarstones and Seals to push specific stats
              higher, such as crit, health, or mana regen. Swap between Shells
              at shrines to change your entire build between fights.
            </p>

            <h3>Which Shell should I start with for builds?</h3>
            <p>
              Harros the Vassal is the safest starting point for new players.
              His balanced stat spread works with nearly every weapon and
              leaves room to test before committing to a specialized build.
              If you enjoy tank play, move to Black Beard or Eredrim the Venerable. If you
              favor speed, respec toward Tiel the Acolyte and the agile build. See the
              full Shell roster on our Shells page for each shell's
              recommended pairing.
            </p>

            <h3>Can I respec my Mortal Shell 2 build?</h3>
            <p>
              Yes. Shell Points and Tarstone choices can be reallocated at any
              Tarstone shrine, so a wrong build early on is not a permanent
              decision. Use the first playthrough to test several setups
              against different bosses, then lock into whichever feels most
              natural for your routing.
            </p>

            <h3>Do I need different builds for different bosses?</h3>
            <p>
              Mostly yes. A poison DOT build melts tanky flesh bosses but
              falls apart when the target resists poison. A spellcaster build
              clears crowds from range but needs a melee swap when an enemy
              closes distance. Prepare at least two loadouts before heading
              into a new area, one for general progression and one tuned for
              the boss at the end. See the{" "}
              <Link href="/bosses/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 boss guide
              </Link>{" "}
              for each encounter's recommended build and strategy.
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
