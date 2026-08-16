import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Walkthrough";
const PAGE_PATH = "/walkthrough";
const DATE_PUBLISHED = "2026-08-16";
const DATE_MODIFIED = "2026-08-16";
const AUTHOR = "Mortal Shell 2 Wiki Team";
const PUBLISHER = {
  "@type": "Organization",
  name: "Mortal Shell 2 Wiki",
  url: "https://mortal-shell2.wiki/",
};
const DESCRIPTION =
  "Mortal Shell 2 walkthrough — how to start the game and get overpowered early. First two main quests, your first Shell, Axe and Daggers, early Tar Stones, Nail Shot +3, and the 135k Gloom per hour farming loop. Video guide included.";
const YOUTUBE_WATCH = "https://www.youtube.com/watch?v=U7NplpDTIxA";
const YOUTUBE_EMBED_ID = "U7NplpDTIxA";
const YOUTUBE_NAME = "Do This FIRST in Mortal Shell 2! (Get OP With ZERO Skill)";
const YOUTUBE_THUMB = "https://i.ytimg.com/vi/U7NplpDTIxA/hqdefault.jpg";

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
    publishedTime: `${DATE_PUBLISHED}T00:00:00Z`,
    modifiedTime: `${DATE_MODIFIED}T00:00:00Z`,
    authors: [AUTHOR],
    tags: ["Mortal Shell 2", "Walkthrough", "Beginner Guide", "Farming"],
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
   JSON-LD: Article + VideoObject + FAQPage 用 @graph 合并
   ============================================================ */
const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mortal Shell 2 Walkthrough — How to Start and Get OP Early",
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      author: { "@type": "Organization", name: AUTHOR },
      publisher: PUBLISHER,
      mainEntityOfPage: pageURL(PAGE_PATH),
      image: OG_IMAGE,
    },
    {
      "@type": "VideoObject",
      name: YOUTUBE_NAME,
      description:
        "Step-by-step Mortal Shell 2 beginner guide. Complete your first two main quests instantly, unlock your first Shell and the Axe and Daggers, collect every early Tar Stone, push Nail Shot to +3, then set up the 135,000 Gloom per hour infinite farming loop.",
      thumbnailUrl: [YOUTUBE_THUMB],
      embedUrl: `https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`,
      contentUrl: YOUTUBE_WATCH,
      uploadDate: DATE_PUBLISHED,
      publisher: PUBLISHER,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do you get overpowered early in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Follow the opening route laid out above. Complete the first two main quests back to back, unlock your first Shell and the Axe and Daggers secondary weapon, collect every early Tar Stone, push the Nail Shot to +3, then take the 135,000 Gloom per hour infinite farming loop online. You walk out of the tutorial zone already ahead of the intended power curve, with enough resources to buy every early upgrade. Route it all step-by-step on the Mortal Shell 2 interactive map so you do not skip a single Tar Stone chest or Beacon checkpoint.",
          },
        },
        {
          "@type": "Question",
          name: "What is the first Shell and weapon in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your first Shell unlocks during the opening two main quests, paired with the Axe and Daggers as your secondary weapon. This combination is intentionally strong for a starting loadout — the dagger interrupts enemy attacks and the axe chops through the first few bosses without needing upgrades. Pair them with the tank Mortal Shell 2 build for maximum forgiveness, or with the agile build once you unlock a second Shell from the roster.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an early Gloom farming loop in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Once the first two main quests are cleared and the starting Shell is unlocked, the video above sets up a 135,000 Gloom per hour infinite farming loop. The loop runs on repeatable enemy spawns just outside the first Beacon, so you can bank Gloom before committing to any shrine upgrades or before entering the next region. Enough Gloom buys every early Tar Stone socket, maxes Nail Shot quickly, and lets you save rare drops for the late game.",
          },
        },
        {
          "@type": "Question",
          name: "Where do you get Axe and Daggers in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Axe and Daggers unlock alongside your first Shell during the opening pair of main quests. The weapon is part of the tutorial rewards, so you cannot miss it if you follow the objectives in order. Grab it, then slot it next to any one-handed blade you find later. Use the off-hand dagger parry window against the first three bosses in the Mortal Shell 2 boss guide to unlock their critical damage stagger windows almost every single attempt.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get Nail Shot +3 in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nail Shot levels up by consuming specific Tar Stone sockets at shrines. To reach Nail Shot +3 in the opening run, collect every Tar Stone sitting on the ground and in chests between the first Beacon and the end of the second main quest. The route in the video visits them all in order, with no backtracking required. Nail Shot +3 is the biggest early power spike because it kills most normal enemies in a single volley while you save your Shell's health bar for boss windows.",
          },
        },
      ],
    },
  ],
};

export default function WalkthroughPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />
      <main className="container">
        <a href="/" className="article-back">
          &larr; Back to Home
        </a>

        <span className="eyebrow">Walkthrough &amp; Beginner Guide</span>
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          Wondering how to start Mortal Shell 2 and get overpowered with
          almost no skill? This opening walkthrough charts the fastest
          route out of the gate, including the first two main quests,
          your first Shell, the Axe and Daggers secondary weapon, every
          early Tar Stone, Nail Shot pushed to +3, and the broken 135,000
          Gloom per hour farming loop. Content is based on the Open Beta;
          full chapter-by-chapter walkthroughs go live after the August
          20, 2026 launch.
        </p>

        {/* 1. How to Start Mortal Shell 2 — OP Early Route */}
        <section className="article mt-12">
          <h2>How to Start Mortal Shell 2 — The OP Early Route</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Work through the steps in order and you exit the tutorial
            already past the intended difficulty curve. Mark every chest
            and Beacon on the{" "}
            <a href="/map/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
              Mortal Shell 2 interactive map
            </a>{" "}
            so you do not need to retrace steps.
          </p>
          <ol className="mt-6 list-decimal space-y-4 pl-6">
            <li>
              <strong>Complete the first two main quests instantly.</strong>
              The opening route runs you through the first two main quests
              back to back with no detours, no grinding, and no wasted
              travel. Follow the objectives in the exact order shown in
              the video and you clear the tutorial threshold in a few
              minutes flat. The second quest hands over your first Shell
              and the Axe and Daggers secondary weapon as rewards, so
              nothing carries without them.
            </li>
            <li>
              <strong>Unlock the first Shell and the Axe and Daggers.</strong>
              Your first Shell unlocks during the opening two quests,
              alongside the Axe and Daggers as a permanent secondary
              weapon slot. This is a strong early loadout. The dagger
              gives you an interrupt with generous parry frames and the
              axe handles every opening boss cleanly. Match the Shell
              with the tank, hybrid, or agile setup from the{" "}
              <Link href="/builds/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 builds
              </Link>{" "}
              page before you move out of the starting area.
            </li>
            <li>
              <strong>Collect every early Tar Stone in the starting
              zones.</strong>
              Grab every Tar Stone sitting on the ground, in the side
              chests, and on the shelf of the first weapon cottage before
              moving on. Each one funds an early Tarstone socket at the
              shrine. Leaving them for later forces backtracking that you
              can avoid with the route above. The full list of Tar Stone
              spots is already pinned on the interactive map if you want
              to tick them off individually.
            </li>
            <li>
              <strong>Push Nail Shot to +3 as soon as possible.</strong>
              Nail Shot +3 is the key early power spike. With the socket
              maxed out, most normal enemies die to a single volley and
              you can save Shell health bar swaps strictly for boss
              fight windows. Reserve the upgrade shrines for Nail Shot
              before you spend any points on other side skills. Compare
              the openers against other starting options on the{" "}
              <Link href="/weapons/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 weapons
              </Link>{" "}
              list if you want to swap the secondary weapon later.
            </li>
            <li>
              <strong>Bring the 135,000 Gloom per hour farming loop
              online.</strong>
              Once the first two quests are done, the video walkthrough
              sets up a repeatable enemy spawn just outside the first
              Beacon that reliably produces 135,000 Gloom per hour. Run
              the loop long enough to bank every Tar Stone socket and
              Nail Shot upgrade before you move past the starting
              region. Enough Gloom also covers every early shrine
              upgrade and leaves rare upgrade drops for the late game.
              Pull the loop down once you can one-shot the regular
              enemies outside Sunken Village — from there the world
              opens into the{" "}
              <Link href="/bosses/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
                Mortal Shell 2 boss
              </Link>{" "}
              roster in earnest.
            </li>
          </ol>
        </section>

        {/* 2. Opening Video Walkthrough + YouTube 跳转徽章 */}
        <section className="article">
          <h2>Opening Video Walkthrough</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            The video below runs the full opening route step-by-step,
            with timestamps for every Tar Stone chest and every farming
            loop reset. Watch it in full before you start a fresh run,
            or jump straight to YouTube for 4K playback with chapter
            markers in the description.
          </p>
          <div className="mt-8">
            <div
              className="overflow-hidden rounded-lg border"
              style={{
                borderColor: "var(--color-gold)",
                aspectRatio: "16 / 9",
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
                boxShadow:
                  "0 0 0 1px rgba(212,175,55,.15), 0 12px 36px rgba(0,0,0,.45)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
                title={YOUTUBE_NAME}
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
            <p
              className="mt-2 text-center text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Full opening walkthrough. Every step in the OP early route,
              plus chapter markers for each farming loop reset.
            </p>
          </div>
        </section>

        {/* 3. Note + Upcoming Chapters 预告 */}
        <section
          className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-6"
        >
          <p
            className="text-sm"
            style={{
              color: "var(--color-gold)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            This opening guide is based on the Mortal Shell 2 Open Beta.
            Full chapter-by-chapter walkthroughs go live after the
            August 20, 2026 launch.
          </p>
          <p
            style={{
              margin: ".6rem 0 0",
              fontSize: ".9rem",
              color: "var(--text-secondary)",
            }}
          >
            Check back on launch day for the next five chapters covering
            Mushroom Village, Disciple's Grotto, Hall of Illusions, Sunken
            Village, and the endgame. Follow the{" "}
            <Link
              href="/updates/"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 updates
            </Link>{" "}
            page or subscribe to the RSS feed to get each walkthrough
            chapter the moment it goes live. For a refresher on basic
            mechanics, read the{" "}
            <Link
              href="/tips/"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 beginner tips
            </Link>{" "}
            before your first play session.
          </p>
        </section>

        {/* 4. FAQ */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <h3>How do you get overpowered early in Mortal Shell 2?</h3>
            <p>
              Follow the opening route above from start to finish.
              Complete the first two main quests back to back, unlock
              your first Shell and the Axe and Daggers secondary weapon,
              collect every early Tar Stone, push Nail Shot to +3, then
              bring the 135,000 Gloom per hour infinite farming loop
              online. You walk out of the starting zone already well
              past the intended power curve, with enough resources to
              max every early upgrade and still have Gloom left over for
              rare shrine sockets. Mark the exact route on the Mortal
              Shell 2 interactive map before your run so you never miss
              a Tar Stone or a Beacon checkpoint.
            </p>

            <h3>What is the first Shell and weapon in Mortal Shell 2?</h3>
            <p>
              Your first Shell unlocks during the first two main quests,
              along with the Axe and Daggers as your secondary weapon.
              This combination is intentionally tuned as a forgiving
              starting loadout. The dagger parry interrupts nearly every
              normal enemy attack and the axe chops through the opening
              three bosses before you need any upgrades at all. Match it
              with the tank Mortal Shell 2 build if you want maximum
              forgiveness, or swap to the agile build once a second
              Shell unlocks from the full Shell roster.
            </p>

            <h3>Is there an early Gloom farming loop in Mortal Shell 2?</h3>
            <p>
              Yes, there is. Once the first two main quests are cleared
              and your first Shell is in hand, the opening video sets up
              a 135,000 Gloom per hour infinite farming loop using the
              repeatable enemy spawns right outside the first Beacon.
              The loop resets cleanly every run without needing to rest
              at a shrine or travel to another area. Run the loop long
              enough to socket every early Tar Stone, push Nail Shot all
              the way to +3, and bank the rest for rare upgrades in the
              mid-game regions.
            </p>

            <h3>Where do you get Axe and Daggers in Mortal Shell 2?</h3>
            <p>
              Axe and Daggers unlock as part of the opening two main
              quests, paired with your first Shell. The weapon is a
              tutorial reward so you cannot miss it if you follow the
              objectives in the order they appear. Slot it as your
              secondary weapon next to any one-handed blade you find
              later. The off-hand dagger parry window works especially
              well against the first three bosses in the boss guide and
              consistently opens up the stagger window for extra
              critical damage.
            </p>

            <h3>How do you get Nail Shot +3 in Mortal Shell 2?</h3>
            <p>
              Nail Shot levels up by consuming specific Tar Stone
              sockets at shrines. To reach Nail Shot +3 in the opening
              run without any backtracking, collect every Tar Stone on
              the ground and in every chest between the first Beacon and
              the end of the second main quest. The route in the video
              visits them all in order so you never need to retrace.
              Nail Shot +3 is the most impactful early upgrade because
              most normal enemies die to a single volley, which saves
              Shell health bars and Shell swaps strictly for boss fight
              windows.
            </p>
          </div>
        </section>

        {/* 5. 底部发售标识 */}
        <section className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p
            className="text-sm"
            style={{
              color: "var(--color-gold)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Opening walkthrough verified in Mortal Shell 2 Open Beta.
            Full chapter guides will be updated after the
            August 20, 2026 launch.
          </p>
          <p
            style={{
              margin: ".6rem 0 0",
              fontSize: ".9rem",
              color: "var(--text-secondary)",
            }}
          >
            Chapter routing and every Beacon, chest, and boss location
            are already mapped on the{" "}
            <a
              href="/map/"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 map
            </a>{" "}
            so you can plot your next run well before launch.
          </p>
        </section>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
