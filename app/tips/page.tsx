export const dynamic = 'force-static';
import type { Metadata } from "next";
import type { ReactNode } from "react";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Tips – 18 Beginner Combat Tips";
const PAGE_PATH = "/tips";
const DATE_PUBLISHED = "2026-08-16";
const DATE_MODIFIED = "2026-08-16";
const AUTHOR = "Mortal Shell 2 Wiki Team";
const PUBLISHER = {
  "@type": "Organization",
  name: "Mortal Shell 2 Wiki",
  url: "https://mortal-shell2.wiki/",
};
const DESCRIPTION =
  "18 tested Mortal Shell 2 beginner tips: no-stamina combat, Shell swapping, the 135k Gloom farm loop, best early weapons, and every first-boss strategy.";

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
    tags: ["Mortal Shell 2", "Tips", "Beginner Guide", "Combat", "Farming"],
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
   Shell 名 → /shells/[slug] 锚链辅助（复用 weapons 页同款逻辑）
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
    `(?<!\\w)(${patterns.map((s) => s.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")).join("|")})(?!\\w)`,
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
        style={{
          color: "var(--color-gold)",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
        }}
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
   JSON-LD @graph: Article + FAQPage
   ============================================================ */
const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mortal Shell 2 Tips: Combat, Shells, Weapons, and Farming",
      description: DESCRIPTION,
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      author: { "@type": "Organization", name: AUTHOR },
      publisher: PUBLISHER,
      mainEntityOfPage: pageURL(PAGE_PATH),
      image: OG_IMAGE,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the best Mortal Shell 2 tips for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pair the tank build with Eredrim to absorb two or three mistakes before spending a Shell swap. Activate every Beacon on sight in a new region, pick up the Axe and Daggers from the first cottage for the forgiving off-hand parry window, and push Nail Shot to plus three before leaving the starting zones. Save rare upgrade drops for the mid-game. Early Tar Stone sockets cover the first round of shrine upgrades on their own. Follow the opening route on the Mortal Shell 2 walkthrough to cut down wasted travel before any boss attempt.",
          },
        },
        {
          "@type": "Question",
          name: "How do you upgrade Shells in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shell upgrades come from spending Gloom at shrines on individual nodes inside each Shell's own tree. There is no shared global level. Pick one Shell and sink the first five shrine upgrades strictly into nodes that fit its role before spreading points to a second or third Shell. Tar Stone sockets found in the field bump certain nodes up one grade without costing Gloom, so socket them at shrines before committing to the next purchase. Cross-check each Shell's recommended role and build direction on the full Shells roster and the Mortal Shell 2 builds tier list before spending your first rare drop.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a way to farm Gloom early in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After the first two main quests, repeatable enemy spawns just outside the first Beacon set up a 135,000 Gloom per hour loop you can run without resting or traveling. Run it until you bank every early Tar Stone socket and Nail Shot reaches plus three, then move on with the story. Running the loop longer gives worse returns because early upgrades stop scaling and you save more time by pushing into the second region where drops pay more per run. The exact reset is laid out step by step in the opening walkthrough guide.",
          },
        },
        {
          "@type": "Question",
          name: "Which weapon should beginners use in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Beginners should use the Axe and Daggers secondary weapon with any forgiving one-handed primary blade until they reach the Hallowed Sword altar directly in front of the Great Arbiter of Flesh arena. Axe and Daggers gives an off-hand dagger parry with forgiving timing almost any new player can land, and the axe cuts cleanly through the first three bosses with zero upgrades. Once you unlock the Hallowed Sword and The Iconoclast later in the run, compare every confirmed option on the full Mortal Shell 2 weapons page to pick the scaling grade that fits your Shell.",
          },
        },
        {
          "@type": "Question",
          name: "Any tips for beating the first boss in Mortal Shell 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For the first boss, sit through one full attack cycle before swinging. Learn the exact recovery window after the longest combo, then attack only during that window. Swap Shells immediately once the first one drops to low health so the second Shell reserve stays fresh for the phase two burst. Save the Nail Shot volley for the staggered state after the boss slams into the ground, and run the 135k Gloom loop first so you can afford one extra shrine upgrade before entering the arena. Pick the matching counter strategy from the full Mortal Shell 2 boss guide if you get stuck for more than three attempts.",
          },
        },
      ],
    },
  ],
};

/* ============================================================
   SECTIONS：6 个分类 × 每类 3 条 tips（body 允许 Shell 名自动锚链）
   ============================================================ */
type Tip = { title: string; body: string; };

const SECTIONS: { heading: string; tips: Tip[]; }[] = [
  {
    heading: "Mortal Shell 2 Combat Tips",
    tips: [
      {
        title: "Attack freely because the stamina bar is gone",
        body:
          "Mortal Shell 2 has no stamina bar. Swing whenever you have an opening. Stop only when the enemy begins their windup. Do not conserve attacks the way you would in classic soulslikes. Press the advantage until the animation tells you to back off, then reposition before their attack lands.",
      },
      {
        title: "Shell swap mid-combat to reset your health bar",
        body:
          "Every Shell swap resets the current Shell's health bar and gives a brief invulnerability frame. Keep one Shell swap in reserve specifically for phase two openings. When a boss roars into its second phase, swap instantly. The invulnerability frames absorb the burst and you walk into the new phase at full health instead of limping there on a sliver.",
      },
      {
        title: "Use the dagger off-hand parry on every overhead swing",
        body:
          "The Axe and Daggers off-hand parry window lines up almost perfectly with every enemy overhead swing. Time the tap on the way down instead of on the way up and you will break poise on almost every humanoid. The resulting stagger gives a free backstab with the dagger that applies an extra poison tick if you have a poison infusion socketed.",
      },
    ],
  },
  {
    heading: "Mortal Shell 2 Shell and Build Tips",
    tips: [
      {
        title: "Match Shell to role and sink upgrades that direction",
        body:
          "Each Shell pulls a different role and a different damage scaling mix. Lazlo wants pure Strength tank setups. Tiel runs the agile Dexterity path. Eredrim leans Strength plus holy side grades. Proxima slots into the middle hybrid option. Pick one Shell and spend five shrine upgrades strictly in that Shell's tree before opening a second one. Spreading upgrades evenly across the whole roster leaves every Shell weak when you need them in a tight boss window.",
      },
      {
        title: "Start with the beginner build if this is your first run",
        body:
          "The beginner Mortal Shell 2 build is built around forgiveness, not raw damage. Pair Lazlo or Eredrim with the tank build direction, grab the Axe and Daggers, socket poison into the dagger, and let the Shell swap invulnerability frames carry you through every arena. Switch to the agile build on your second run once you know the attack patterns. Build rankings and every Shell pairing live on the Mortal Shell 2 builds page.",
      },
      {
        title: "Save rare Shell drops for the final act",
        body:
          "Rare Shell-specific upgrade drops only show up three or four times per region. Do not burn them in the starting zones on nodes that Tar Stone sockets can easily cover. Hold the rare drops until your main Shell tree enters the final three nodes. That is where the percentage gains outpace anything the common Tar Stones can provide.",
      },
    ],
  },
  {
    heading: "Mortal Shell 2 Weapon Tips",
    tips: [
      {
        title: "Axe and Daggers carries the entire opening run",
        body:
          "Axe and Daggers unlocks alongside your first Shell during the opening quests and stays usable well into the middle boss rush. The axe cuts through armor and the dagger gives the off-hand parry. You can safely wait until the Hallowed Sword altar in front of the Great Arbiter of Flesh before swapping to a two-hander as your primary swing.",
      },
      {
        title: "Hallowed Sword shockwave cuts illusion clones in one hit",
        body:
          "The Hallowed Sword holy shockwave from its charged heavy attack passes straight through skeletons and Vrannic illusions. In the Hall of Illusions chambers you can clear three clones in one swing, so you identify the real boss in seconds instead of wasting time on each fake body. The shockwave also staggers Circle of the Grasping Root if you charge it during the frog's melee windup.",
      },
      {
        title: "Nail Shot plus three kills most normal enemies in one volley",
        body:
          "Push Nail Shot to plus three before you leave the starting zones. The socket costs are cheap when you combine early Tar Stones with the opening Gloom loop. Once Nail Shot hits plus three you can clear hallway trash without swinging a weapon, which preserves Shell swaps and Shell health reserves for the actual boss rooms. Nail Shot also interrupts most charge attacks if you fire the volley on the first frame of the windup.",
      },
    ],
  },
  {
    heading: "Mortal Shell 2 Exploration Tips",
    tips: [
      {
        title: "Activate every Beacon the second you see it",
        body:
          "Beacons are your only fast travel anchor and your only guaranteed checkpoint when you die with no Shell swap left. Activate the Beacon first, explore the region second, then clean up the collectibles. If you skip the Beacon you risk losing ten or fifteen minutes of progress when a patrol around a corner catches you mid-loot animation. Every Beacon position is already marked on the Mortal Shell 2 interactive map so you can trace your route before you head out.",
      },
      {
        title: "Check behind breakable walls and false mirrors",
        body:
          "Breakable wooden walls hide Tar Stone chests in almost every side cave. False mirrors open when you hug them in the Hall of Illusions corridors. Walk the perimeter of every room once with a light attack held. You will crack at least one hidden side room per region. The Smoldering Mace, a hidden Tar Stone, and the Disciple's Grotto Hammer and Chisel chest all sit behind these hidden walls. Pin each chest spot on the interactive map so you do not rerun empty rooms on later playthroughs.",
      },
      {
        title: "Shortcut every door you walk through from the far side",
        body:
          "Mortal Shell 2 is loaded with one-way shortcut bars and shortcut ladders that unlock from the far side of a region. Every time you enter a new area from the main path, hunt for the shortcut that lets you skip back to the Beacon in thirty seconds. You will thank yourself during the fifth attempt of a long boss run when you respawn at the Beacon and jog back in half a minute instead of fighting the same patrol chain all over again.",
      },
    ],
  },
  {
    heading: "Mortal Shell 2 Boss Tips",
    tips: [
      {
        title: "Sit through one full attack cycle before you swing",
        body:
          "Every boss in the Beta has one long combo that hides a tiny safe window at the end. Walk into the arena without attacking, roll through the longest combo the boss can produce, and memorize the exact moment of recovery. Only then start your damage sequence. Trying to punish the first small opening almost always runs you into the start of a longer chain you did not know existed. Detailed recovery windows and phase splits live on the Mortal Shell 2 bosses page for every confirmed encounter.",
      },
      {
        title: "Swap Shells immediately as a new phase starts",
        body:
          "Phase transitions lock the boss in place for one or two seconds while they roar or change weapons. Use this exact window to swap. The swap invulnerability absorbs any lingering damage from the phase transition animation and you start the new phase at full Shell health with all reserves intact. This one habit alone removes more cheap deaths than any damage upgrade you can buy at a shrine.",
      },
      {
        title: "Use poison DOT to chip tanky bosses without trading",
        body:
          "Tar Golem, Great Arbiter of Flesh, and Magdalena all take extra damage from stacked poison ticks while their guard is up. Pair the poison DOT build from the builds page with the dagger off-hand poison backstab and you can stack three or four poison layers in one opening. Walk away while the ticks finish the job and only re-enter the fight to refresh the stack once the last poison tick runs out.",
      },
    ],
  },
  {
    heading: "Mortal Shell 2 Progression and Farming Tips",
    tips: [
      {
        title: "Bring the 135k Gloom per hour loop online early",
        body:
          "The 135,000 Gloom per hour farming loop unlocks right after the first two main quests. Run it until Nail Shot is plus three and your main Shell has the first five shrine nodes bought out. Then stop and move on with the story. Running the loop longer gives worse returns because early upgrades stop scaling and you save more time by progressing into the second region where drops pay more per run. The exact reset walkthrough is on the walkthrough page with timestamps.",
      },
      {
        title: "Buy role-defining shrine nodes before anything else",
        body:
          "Spend your first shrine budget on the nodes that define your Shell's role. If you run the tank build on Lazlo, buy the extra Shell health block first, then the damage reduction, then the extra Shell swap. If you run Dexterity on Tiel, buy the dodge frame extension first and the heavy attack damage second. Do not buy tiny one-percent resistances when the core role nodes are still open.",
      },
      {
        title: "Farm illusion clones after Vrannic for Tar Stones",
        body:
          "Once you clear the first three illusion rooms in the Hall of Illusions, the clone spawns respawn every time you walk back from the nearest Beacon. Clones drop Tar Stone fragments at a much higher rate than world spawns do. Run a full sweep, activate the Beacon to reset the room, then repeat. You walk out with enough Tar Stone fragments to socket four or five additional Tarstone infusions in one evening.",
      },
    ],
  },
];

/* ============================================================
   页面
   ============================================================ */
export default function TipsPage() {
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

        <span className="eyebrow">Tips and Tricks</span>
        <h1>{TITLE}</h1>
        <span className="title-rule" />

        <p className="lede">
          Mortal Shell 2 tips written for new players. How fighting works,
          which Shells and builds perform in the opening hours, which weapons
          to chase first, how to explore and avoid backtracking, how to
          survive your first pass through each boss arena, and how to farm
          without grinding forever.
        </p>

        {SECTIONS.map((section) => (
          <section key={section.heading} className="article">
            <h2>{section.heading}</h2>
            <ul className="tip-list">
              {section.tips.map((tip) => (
                <li key={tip.title}>
                  <strong>{tip.title}</strong>
                  <span>{linkifyShells(tip.body)}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* 关联页内链 */}
        <section className="article">
          <h2>Need more detail?</h2>
          <p>
            The{" "}
            <Link
              href="/shells"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Shells hub
            </Link>{" "}
            lists every playable Shell and its role. The full{" "}
            <Link
              href="/weapons"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 weapons
            </Link>{" "}
            page breaks down stats and scaling grades. The{" "}
            <Link
              href="/builds"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Builds page
            </Link>{" "}
            pairs each Shell with a working weapon setup. Step-by-step
            routing lives in the{" "}
            <Link
              href="/walkthrough"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 walkthrough
            </Link>
            . Each fight counter strategy is written up on the{" "}
            <Link
              href="/bosses"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 boss
            </Link>{" "}
            cards. Every chest, Beacon, and hidden room is marked on the{" "}
            <a
              href="/map"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              Mortal Shell 2 interactive map
            </a>
            .
          </p>
        </section>

        <AdBanner />

        {/* FAQ，与 FAQPage JSON-LD 严格同步 */}
        <section className="article">
          <h2>Mortal Shell 2 Tips FAQ</h2>
          <div className="faq">
            <h3>What are the best Mortal Shell 2 tips for beginners?</h3>
            <p>
              Pair the tank build with{" "}
              <a
                href="/shells/eredrim"
                style={{
                  color: "var(--color-gold)",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                Eredrim
              </a>{" "}
              to absorb two or three mistakes before spending a Shell swap.
              Activate every Beacon on sight in a new region, pick up the Axe
              and Daggers from the first cottage for the forgiving off-hand
              parry window, and push Nail Shot to plus three before leaving
              the starting zones. Save rare upgrade drops for the mid-game.
              Early Tar Stone sockets cover the first round of shrine
              upgrades on their own. Follow the opening route on the{" "}
              <Link
                href="/walkthrough"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Mortal Shell 2 walkthrough
              </Link>{" "}
              to cut down wasted travel before any boss attempt.
            </p>

            <h3>How do you upgrade Shells in Mortal Shell 2?</h3>
            <p>
              Shell upgrades come from spending Gloom at shrines on
              individual nodes inside each Shell's own tree. There is no
              shared global level. Pick one Shell and sink the first five
              shrine upgrades strictly into nodes that fit its role before
              spreading points to a second or third Shell. Tar Stone sockets
              found in the field bump certain nodes up one grade without
              costing Gloom, so socket them at shrines before committing to
              the next purchase. Cross-check each Shell's recommended role
              and build direction on the full{" "}
              <Link
                href="/shells"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Shells
              </Link>{" "}
              roster and the{" "}
              <Link
                href="/builds"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Mortal Shell 2 builds
              </Link>{" "}
              tier list before spending your first rare drop.
            </p>

            <h3>Is there a way to farm Gloom early in Mortal Shell 2?</h3>
            <p>
              Yes. After the first two main quests, repeatable enemy spawns
              just outside the first Beacon set up a 135,000 Gloom per hour
              loop you can run without resting or traveling. Run it until
              you bank every early Tar Stone socket and Nail Shot reaches
              plus three, then move on with the story. Running the loop
              longer gives worse returns because early upgrades stop scaling
              and you save more time by pushing into the second region where
              drops pay more per run. The exact reset is laid out step by
              step in the opening{" "}
              <Link
                href="/walkthrough"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                walkthrough guide
              </Link>
              .
            </p>

            <h3>Which weapon should beginners use in Mortal Shell 2?</h3>
            <p>
              Beginners should use the Axe and Daggers secondary weapon with
              any forgiving one-handed primary blade until they reach the
              Hallowed Sword altar directly in front of the Great Arbiter of
              Flesh arena. Axe and Daggers gives an off-hand dagger parry
              with forgiving timing almost any new player can land, and the
              axe cuts cleanly through the first three bosses with zero
              upgrades. Once you unlock the Hallowed Sword and The Iconoclast
              later in the run, compare every confirmed option on the full{" "}
              <Link
                href="/weapons"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Mortal Shell 2 weapons
              </Link>{" "}
              page to pick the scaling grade that fits your Shell.
            </p>

            <h3>Any tips for beating the first boss in Mortal Shell 2?</h3>
            <p>
              For the first boss, sit through one full attack cycle before
              swinging. Learn the exact recovery window after the longest
              combo, then attack only during that window. Swap Shells
              immediately once the first one drops to low health so the
              second Shell reserve stays fresh for the phase two burst. Save
              the Nail Shot volley for the staggered state after the boss
              slams into the ground, and run the 135k Gloom loop first so
              you can afford one extra shrine upgrade before entering the
              arena. Pick the matching counter strategy from the full{" "}
              <Link
                href="/bosses"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Mortal Shell 2 boss
              </Link>{" "}
              guide if you get stuck for more than three attempts.
            </p>
          </div>
        </section>

        <p className="note">
          For zone-by-zone routing and precise
          chest markers, open the{" "}
          <a
            href="/map"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Mortal Shell 2 interactive map
          </a>
          .
        </p>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
