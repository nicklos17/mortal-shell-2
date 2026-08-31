export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import { BOSSES } from "@/lib/bosses-data";
import AdBanner from "@/components/AdBanner";

const TITLE = "Mortal Shell 2 Bosses";
const PAGE_PATH = "/bosses";
const DESCRIPTION =
  "All 8 Mortal Shell 2 bosses confirmed in the full release. Attack patterns, weak points, recommended builds, and phase-by-phase strategies for every boss encounter.";
const YOUTUBE_WATCH = "https://www.youtube.com/watch?v=YbWMPZxZm2o";
const YOUTUBE_EMBED_ID = "YbWMPZxZm2o";

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
  name: "Mortal Shell 2 Bosses",
  itemListElement: BOSSES.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${b.name} (${b.region})`,
    url: pageURL(`${PAGE_PATH}#${b.id}`),
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many bosses are in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 has 8 bosses. Circle of the Grasping Root, Gloombound Ritualist, Great Arbiter of Flesh, Magdalena the Lady of the Woods, Tainted Vestige, Tar Golem, The Wandering Shepherd, and Vrannic the Grand Illusionist. A full release may add optional and late-game bosses.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the hardest boss in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tar Golem and Vrannic the Grand Illusionist sit at the top of the Mortal Shell 2 boss list. Tar Golem chains five-hit axe combos with almost no recovery between swings, punishing any Shell that trades carelessly. Vrannic layers tracking orbs, illusion clones, and a room-wide beam, all at once. Great Arbiter of Flesh and Magdalena round out the upper tier.",
      },
    },
    {
      "@type": "Question",
      name: "How do you beat Magdalena, the Lady of the Woods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To beat Magdalena in Mortal Shell 2, strafe diagonally during the charge instead of dodging back, then punish the long recovery with a full combo. When she spins the 360-degree flame ring, close through the outer edge in the first quarter turn and Harden if needed. Stack poison DOT once at the start of the fight and let the tick damage run while you focus on dodging. Her arena is wide, so you always have room to reset and re-engage rather than forcing a bad trade.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Mortal Shell 2 boss order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fight Tainted Vestige and Circle of the Grasping Root early. Both sit at the low end and reward you with useful seals before the mid-tier trio of Gloombound Ritualist, and Wandering Shepherd. Save Great Arbiter of Flesh for just before you reach Tiel's corpse, then close with Magdalena, Tar Golem, and Vrannic once your Shell trees are deeper. Mark each boss arena on the Mortal Shell 2 interactive map so you can backtrack without losing time.",
      },
    },
  ],
};

/* ============================================================
   子组件：Boss strategy card，服务端直出
   ============================================================ */
function BossCard({ boss }: { boss: (typeof BOSSES)[number]; }) {
  return (
    <article
      id={boss.id}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-5 scroll-mt-24"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-amber-300">
          {boss.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="shrink-0 rounded bg-green-500/15 px-2 py-0.5 text-xs text-green-400">
            Confirmed
          </span>
          <span
            className={`shrink-0 rounded px-2 py-0.5 text-xs ${boss.difficulty === "Easy"
              ? "bg-emerald-500/15 text-emerald-400"
              : boss.difficulty === "Medium"
                ? "bg-amber-500/15 text-amber-400"
                : boss.difficulty === "Hard"
                  ? "bg-orange-500/15 text-orange-400"
                  : "bg-red-500/15 text-red-400"
              }`}
          >
            {boss.difficulty}
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm text-white/70">{boss.description}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/40">
            Weakness
          </h4>
          <p className="mt-1 text-sm">{boss.weakness}</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/40">
            Reward
          </h4>
          <p className="mt-1 text-sm">{boss.reward}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xs uppercase tracking-wider text-white/40">
          Attacks
        </h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {boss.attacks.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xs uppercase tracking-wider text-white/40">
          Strategy
        </h4>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          {boss.strategy.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>

      <p className="mt-4 text-xs text-white/40">
        Source: {boss.source}. Region: {boss.region}
      </p>
    </article>
  );
}

/* ============================================================
   页面
   ============================================================ */
export default function BossesPage() {
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

        <span className="eyebrow">Boss Encounters &amp; Strategies</span>
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          The full Mortal Shell 2 boss roster confirmed in the full
          playtest. Eight encounters range from living trees and flaming
          wheels to illusionists and a dual-axe golem of smoldering tar.
          Each entry below lists confirmed location, weak point, attack
          patterns, and the play-tested strategy from our playthrough. Full
          phase breakdowns, drop tables, and recommended Shell pairings.
        </p>

        {/* 首屏 YouTube 通关视频 + 跳转徽章 */}
        <div className="mt-10">
          <div
            className="overflow-hidden rounded-lg border"
            style={{
              borderColor: "var(--color-gold)",
              aspectRatio: "16 / 9",
              width: "100%",
              maxWidth: "900px",
              margin: "0 auto",
              boxShadow: "0 0 0 1px rgba(212,175,55,.15), 0 12px 36px rgba(0,0,0,.45)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
              title="Mortal Shell 2 full playthrough — all 8 bosses (YouTube)"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={YOUTUBE_WATCH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: "#FF0000",
                color: "#fff",
                boxShadow: "0 6px 16px rgba(255,0,0,.35)",
                textDecoration: "none",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
              </svg>
              Watch on YouTube
            </a>
          </div>
          <p className="mt-2 text-center text-xs" style={{ color: "var(--text-secondary)" }}>
            Full Mortal Shell 2 speedrun — every boss in a single run.
          </p>
        </div>

        {/* 1. Boss 表格总览 */}
        <section className="article mt-12">
          <h2>All Mortal Shell 2 Bosses</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Jump to any boss strategy card below the table, or use the{" "}
            <a href="/map" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 interactive map
            </a>{" "}
            to locate each arena in the world.
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
                    Boss
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Region
                  </th>
                  <th
                    style={{
                      padding: ".5rem 1rem .5rem 0",
                      fontWeight: 400,
                      letterSpacing: ".04em",
                    }}
                  >
                    Weakness
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
                {BOSSES.map((b) => (
                  <tr key={b.id} className="border-b border-white/5">
                    <td
                      style={{
                        padding: ".5rem 1rem .5rem 0",
                        fontWeight: 500,
                      }}
                    >
                      <a
                        href={`${PAGE_PATH}#${b.id}`}
                        style={{
                          color: "var(--color-gold)",
                          textDecoration: "none",
                        }}
                      >
                        {b.name}
                      </a>
                    </td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>{b.region}</td>
                    <td style={{ padding: ".5rem 1rem .5rem 0" }}>{b.weakness}</td>
                    <td style={{ padding: ".5rem 0" }}>{b.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <AdBanner />

        {/* 2. Boss Strategies — 每个 boss 一个卡片 */}
        <section className="article">
          <h2>Boss Strategies</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Every confirmed boss has its own card with attacks,
            weak points, and a tested strategy. Tune your loadout ahead of
            the fight with the{" "}
            <Link href="/builds" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 builds
            </Link>{" "}
            guide, pick a counter blade from the full{" "}
            <a href="/weapons" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 weapons
            </a>{" "}
            roster, and read the{" "}
            <Link href="/shells" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Shell roster
            </Link>{" "}
            to know which vessel matches each matchup.
          </p>
          <div className="mt-6 space-y-4">
            {BOSSES.map((boss) => (
              <BossCard key={boss.id} boss={boss} />
            ))}
          </div>
        </section>

        {/* 3. 发售后更新提示 */}
        <section className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p
            className="text-sm"
            style={{
              color: "var(--color-gold)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Boss list verified
          </p>
          <p style={{ margin: ".6rem 0 0", fontSize: ".9rem", color: "var(--text-secondary)" }}>
            we will add phase-by-phase damage windows, exact
            drop tables, parry timings, and video references for each
            encounter. Boss arenas and adjacent Beacons are already marked
            on the{" "}
            <a href="/map" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 map
            </a>{" "}
            so you can plan a route.
          </p>
        </section>

        {/* 4. FAQ */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <h3>How many bosses are in Mortal Shell 2?</h3>
            <p>
              Mortal Shell 2 has 8 bosses confirmed in the full release.
              Circle of the Grasping Root, Gloombound Ritualist, Great
              Arbiter of Flesh, Magdalena the Lady of the Woods, Tainted
              Vestige, Tar Golem, The Wandering Shepherd, and Vrannic the
              Grand Illusionist make up the current count. The full release
              may add optional or endgame bosses, and this page updates the
              same day they are documented. Pin your progression order to
              the{" "}
              <a href="/walkthrough" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 walkthrough
              </a>{" "}
              and check the map so you do not miss a single arena.
            </p>

            <h3>Who is the hardest boss in Mortal Shell 2?</h3>
            <p>
              Tar Golem and Vrannic the Grand Illusionist top the
              Mortal Shell 2 hardest boss ranking. Tar Golem chains five-hit
              axe combos with almost no recovery, so any Shell that trades
              poorly gets stunlocked. Vrannic layers tracking orbs,
              illusion clones, and a room-wide beam, forcing the player to
              solve crowd control, positioning, and a burst check all at
              once. Great Arbiter of Flesh and Magdalena sit just below
              them.
            </p>

            <h3>How do you beat Magdalena, the Lady of the Woods?</h3>
            <p>
              Beat Magdalena by strafing diagonally through her charge, not
              rolling back. The charge ends with a long opening you can
              punish with a full combo. When she starts the 360-degree
              flame spin, close through the outer edge in the first
              quarter-turn. Harden if you misjudge the timing. Stack poison
              DOT early in the fight and let the ticks run while you focus
              on dodging. The arena is wide enough to reset whenever needed,
              so do not force a punish when you are out of position.
            </p>

            <h3>What boss should I fight first in Mortal Shell 2?</h3>
            <p>
              Start with Tainted Vestige in the hidden cave near Disciple's
              Grotto, then Circle of the Grasping Root in the clearing past
              Mushroom Village. Both bosses sit on the easier end and drop
              seals you want before tackling the mid-tier roster. Working
              the list in difficulty order also gives you Shell Points at a
              pace that matches the curve of each arena.
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
