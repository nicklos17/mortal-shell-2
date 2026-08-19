import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE =
  "Mortal Shell 2 Tiel Build – Best Starter Guide (14, 23 & 40 Points)";
const PAGE_PATH = "/builds/tiel";
const DESCRIPTION =
  "The best Mortal Shell 2 Tiel build: Shadow Strike poison detonation, crit-stacking Death Mark synergy, 14/23/40-point skill trees, and where to find every item.";

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
   JSON-LD：Article
   ============================================================ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mortal Shell 2 Tiel Build – Best Starter Guide (14, 23 & 40 Points)",
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageURL(PAGE_PATH),
  },
  publisher: {
    "@type": "Organization",
    name: "Mortal Shell 2 Guide",
  },
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
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
      name: "What is the best Tiel build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best Tiel build stacks Shadow Strike crit with poison detonation: Escalation inflicts 10 Poison stacks, Death Mark adds crit chance and damage, and Poison Burst detonates the stacks for burst. It runs on the Duality Stone and works from the 14-point starter version through the 40-point endgame version.",
      },
    },
    {
      "@type": "Question",
      name: "What items do you need for a Tiel build in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Duality Stone is non-negotiable, plus the Axe and Dagger upgraded to the Axatana, the Torpor Stone for permanent Stasis infusion, and the Acolyte, Auspicious, and Headsman Stones for crit. Your infusion slot is either the Serpent Stone for extra Poison stacks or Arbiter's Prize for Blood Curse.",
      },
    },
    {
      "@type": "Question",
      name: "How does poison detonation work in the Tiel build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Shadow Strike with Escalation applies 10 Poison stacks. Poison Burst then detonates up to 4 stacks whenever you land a Shadow Strike on a poisoned enemy, dealing a flat burst of damage on top of the strike itself.",
      },
    },
  ],
};

/* ============================================================
   Shell Bonding 分配表（Node / Points / Effect 三列）
   ============================================================ */
type TielNode = {
  node: string;
  points: string;
  effect: ReactNode;
};

const BONDING_14: TielNode[] = [
  {
    node: "Escalation",
    points: "3",
    effect: (
      <>
        Shadow Strike damage <strong>+140%</strong>, and every strike inflicts{" "}
        <strong>10 Poison stacks</strong>
      </>
    ),
  },
  {
    node: "Poison Burst",
    points: "1",
    effect: (
      <>
        Shadow Strike on a poisoned enemy detonates <strong>4 stacks</strong> —
        roughly <strong>+40 damage</strong> per strike early on
      </>
    ),
  },
  {
    node: "Death Mark",
    points: "3",
    effect: (
      <>
        Shadow Strike gains <strong>+23% crit chance</strong> and{" "}
        <strong>+120% crit damage</strong>, plus{" "}
        <strong>10 Fragile stacks</strong> (bonus weapon damage taken)
      </>
    ),
  },
  {
    node: "Night Stride",
    points: "1",
    effect: (
      <>
        Shadow Dash activation window <strong>+20%</strong> — your
        get-out-of-jail card in boss fights
      </>
    ),
  },
];

const BONDING_23: TielNode[] = [
  {
    node: "Lethality",
    points: "3",
    effect: (
      <>
        <strong>+20 Resolve</strong> every time you kill an enemy — keeps your
        charges rolling even more aggressively
      </>
    ),
  },
  {
    node: "Lingering Shadow",
    points: "4",
    effect: (
      <>
        <strong>50% chance</strong> to immediately reactivate Lingering Shadow
        after a backstab — dodge and chain another backstab for free
      </>
    ),
  },
  {
    node: "Ambush",
    points: "1",
    effect: (
      <>
        Flat <strong>+150% damage</strong> on backstabs (maxed out in the
        endgame version)
      </>
    ),
  },
  {
    node: "Shadow Stalk",
    points: "1",
    effect: (
      <>
        Gain <strong>+2 damage per 0.5s</strong> spent in shadow — a
        boss-fight powerhouse that stacks with Lasting Legacy
      </>
    ),
  },
];

const BONDING_40: TielNode[] = [
  {
    node: "Ambush (max)",
    points: "+3",
    effect: (
      <>
        Backstabs deal <strong>+150% damage</strong>, plus{" "}
        <strong>+25% crit chance</strong> and <strong>+120% crit damage</strong>
      </>
    ),
  },
  {
    node: "Critical Roll (Tier 4)",
    points: "1",
    effect: (
      <>
        After a Shadow Strike, the <strong>next melee strike is guaranteed to
        crit</strong>
      </>
    ),
  },
  {
    node: "Shadow Dash",
    points: "1",
    effect: (
      <>
        Leaves a shadow clone that inflicts <strong>2 Poison stacks</strong> on
        any enemy that strikes it, up to <strong>3 times</strong> — more fuel
        for detonation
      </>
    ),
  },
];

function NodeTable({ nodes }: { nodes: TielNode[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="data" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Node</th>
            <th>Points</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          {nodes.map((n) => (
            <tr key={`${n.node}-${n.points}`}>
              <td style={{ fontWeight: 600 }}>{n.node}</td>
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
   物品获取位置表（Item / Location 两列）
   ============================================================ */
type ItemLocation = {
  item: string;
  location: ReactNode;
};

const ITEM_LOCATIONS: ItemLocation[] = [
  {
    item: "Axe and Dagger",
    location: (
      <>
        Inside the <strong>Shrine of Trials</strong> dungeon.
      </>
    ),
  },
  {
    item: "Duality Stone",
    location: (
      <>
        <strong>Noctian Gate</strong> beacon — cleanse the gate; it sits on the
        west side of the map near the West Gate.
      </>
    ),
  },
  {
    item: "Axatana",
    location: (
      <>
        Unlocks after a boss in the south of the map. Head from the{" "}
        <strong>Silent Steps</strong> beacon to the water, loop right around
        the giant Stasis object, cross the bridges past the giant slugs to the{" "}
        <strong>Forgotten Tower</strong> island. Inside, climb the stairs,
        shoot the bell to raise the platform, cross, drop down, press the
        button on the left to kill the enemy — the Axatana is right there.
      </>
    ),
  },
  {
    item: "Torpor Stone",
    location: (
      <>
        Inside the <strong>Withered Shaws</strong> gate, at{" "}
        <strong>Oenite Falls</strong>. Behind the beacon in the waterfall is a
        secret entrance — the chest is inside.
      </>
    ),
  },
  {
    item: "Auspicious Stone",
    location: (
      <>
        At the entrance of <strong>Mushroom Village</strong>, in the chest by
        the front entrance (easy from the beacon).
      </>
    ),
  },
  {
    item: "Headsman Stone",
    location: (
      <>
        Spawn at <strong>Mammon&apos;s Outskirts</strong>, run across the
        bridge, drop down, then head left of the archway all the way around —
        careful not to fall. Chest is right there.
      </>
    ),
  },
  {
    item: "Arbiter's Prize",
    location: (
      <>
        Just south of <strong>Widow&apos;s Overlook</strong>, right at the
        start of the game. Check both the corpse and the boss/mini-boss drops
        in that area.
      </>
    ),
  },
];

function LocationTable({ items }: { items: ItemLocation[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="data" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.item}>
              <td style={{ fontWeight: 600 }}>{it.item}</td>
              <td>{it.location}</td>
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
export default function TielBuildPage() {
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
          <span>Tiel Build</span>
        </nav>

        <span className="eyebrow">Starter Build</span>
        <h1>Mortal Shell 2 Tiel Build Guide</h1>
        <span className="title-rule" />

        <p className="lede">
          This Mortal Shell 2 Tiel build will have you shredding through your
          first playthrough and the end game with ease. By combining a lethal
          pairing of easy-to-acquire weapons and Tarstones, the setup provides
          incredible burst damage and crowd control from the moment it comes
          online — and it scales all the way to a maxed-out 40-point endgame
          version.
        </p>

        {/* 1. Why Tiel */}
        <section id="why-tiel" className="article mt-12">
          <h2>Why Tiel Is the Perfect Starter Shell</h2>
          <p>
            Tiel&apos;s identity is built around{" "}
            <strong>Shadow Strike</strong>: you dip into stealth, land a
            strike, and vanish again. That in-and-out rhythm is the entire loop
            of this build, and it pays off immediately because the early skill
            tree turns every Shadow Strike into a{" "}
            <strong>
              poison bomb with a critical hit slapped on top
            </strong>
            .
          </p>
          <p>
            Below we break down the mechanics, the skill tree at three
            progression points, and exactly where to find every item that makes
            this Tiel build so effective.
          </p>
        </section>

        {/* 2. How It Works */}
        <section id="how-it-works" className="article">
          <h2>How the Tiel Build Works: Poison, Fragile &amp; Crits</h2>
          <p>
            The damage engine is a three-layer loop that comes online almost
            immediately:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Escalation</strong> makes every Shadow Strike hit harder
              and inflicts <strong>10 Poison stacks</strong> on the target.
            </li>
            <li>
              <strong>Death Mark</strong> adds{" "}
              <strong>crit chance and crit damage</strong> to every Shadow
              Strike, and also applies <strong>10 Fragile stacks</strong> —
              Fragile means the affected target takes bonus damage from weapon
              attacks, so everything that follows hits even harder.
            </li>
            <li>
              <strong>Poison Burst</strong> detonates up to{" "}
              <strong>4 Poison stacks</strong> whenever you Shadow Strike a
              poisoned enemy, adding a flat chunk of damage on top of the
              strike. In the early game that is roughly{" "}
              <strong>40 bonus damage per Shadow Strike</strong> — a huge
              return for one skill point.
            </li>
          </ul>
          <p>
            Because every Shadow Strike refunds charges quickly and Tiel can
            dip straight back into stealth, you are constantly cycling{" "}
            <em>strike → detonate → vanish → repeat</em>. As you spec deeper,
            that same loop keeps scaling.
          </p>
        </section>

        {/* 3. 14-Point Tree */}
        <section id="skill-tree-14" className="article">
          <h2>14-Point Starter Tiel Build</h2>
          <p>
            Get Tiel&apos;s shell affinity up to at least{" "}
            <strong>tier three</strong> as quickly as possible — that is when
            the build comes online. Here is the core 14-point allocation:
          </p>

          <NodeTable nodes={BONDING_14} />

          <p>
            <em>
              Note: the video calls this the 14-point version; the four core
              nodes above are the ones it breaks down, with the remaining
              points filling out the tier path to unlock the next section.
            </em>
          </p>
          <p>
            The way you play Tiel at the start is{" "}
            <strong>very in and out</strong>: shadow step in, stab, detonate
            the poison, and shadow dash out before the enemy can swing back.
            You will notice charges returning quickly — two charges back before
            the kill even lands — and that flow state is the whole class in
            miniature.
          </p>
        </section>

        {/* 4. 23-Point Tree */}
        <section id="skill-tree-23" className="article">
          <h2>Mid-Game Upgrade: 23-Point Tiel Build</h2>
          <p>
            The mid-game version pushes the loop into overdrive with three
            additions:
          </p>

          <NodeTable nodes={BONDING_23} />

          <p>
            <em>
              Point count per the video (&ldquo;taking us up to 23
              points&rdquo;); Lingering Shadow&apos;s exact point cost is not
              stated in the transcript and is inferred from the total.
            </em>
          </p>
          <p>
            <strong>Weapons at this stage:</strong> the mid-game Tiel build
            uses the <strong>Axe and Dagger</strong> — one of the easiest
            weapons in the game to grab — and it hinges on easy-to-find
            infusions. You have two solid options:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Serpent Stone</strong> — grants Poison stacks, which
              plays straight into your detonation loop (more poison to pop).
            </li>
            <li>
              <strong>Arbiter&apos;s Prize</strong> — permanent Blood Curse
              Infusion. Fill the Blood Curse icon on a boss to 100% and a
              massive chunk of its health is stripped away instantly. Pairing
              it with your crits means two damage engines proccing at once.
            </li>
          </ul>
          <p>
            The <strong>Duality Stone</strong> is non-negotiable in this
            build: it makes every light-combo attack strike twice. One-two-three
            becomes a six-hit flurry, doubling your Resolve gain, your Poison
            stacks, and your crit opportunities. You stay with this stone for
            the entire build, so grab it as soon as possible and start leveling
            it — it also works with the Axatana, the endgame weapon.
          </p>
        </section>

        {/* 5. 40-Point Tree */}
        <section id="skill-tree-40" className="article">
          <h2>Endgame: 40-Point Maxed Tiel Build</h2>
          <p>
            The final form of this Tiel build absolutely slaps. It finishes the
            core nodes and adds two new ones, then lets you choose how to spend
            your last points.
          </p>

          <NodeTable nodes={BONDING_40} />

          <h3>Spending the Final Points: Two Routes</h3>
          <p>
            <strong>Route A — Full DPS:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Shadow Stalk +3</strong> — now{" "}
              <strong>+4 damage per 0.5s</strong> spent in shadow.
            </li>
            <li>
              <strong>Lasting Legacy +2</strong> —{" "}
              <strong>+4 Shadow stacks</strong>, lengthening the stealth window
              that feeds Shadow Stalk.
            </li>
          </ul>
          <p>
            <strong>Route B — Defensive/safe:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>
              Take <strong>1 point out of Poison Burst</strong>,{" "}
              <strong>1 from the top of Escalation</strong>,{" "}
              <strong>1 from Shadow Stalk</strong>, and{" "}
              <strong>1 from Lasting Legacy</strong>.
            </li>
            <li>
              Dump all four into <strong>Nightstride</strong> — Shadow Dash now
              deals <strong>stagger damage (+50)</strong> and gets a{" "}
              <strong>massive activation window</strong>, making dodging
              genuinely comfortable.
            </li>
          </ul>
          <p>
            Both routes work nicely — the author swaps between them through the
            playthrough. If your dodging is confident, go full DPS; if you are
            still learning the class, the defensive route is the safer bet.
          </p>
          <p>
            In practice the final form feels absurd: Shadow Strike, crit,
            poison detonation, straight back into stealth, and the charges are
            already refunded before the victim lands. One-shots against
            endgame mobs are routine, and anything that survives is slowed to
            a crawl by Stasis.
          </p>
        </section>

        {/* 6. Core Items */}
        <section id="items" className="article">
          <h2>Core Items &amp; How They Synergize</h2>
          <p>
            Like the Proxima build, this Tiel setup hinges on a handful of
            easy-to-acquire pieces. The <strong>Duality Stone</strong> is the
            single non-negotiable — it makes every light-combo attack strike
            twice, which doubles your Poison stacks, Resolve gain, and crit
            chances. You stay with it for the <em>entire</em> build.
          </p>
          <p>
            Your weapon chain moves from the <strong>Axe and Dagger</strong> in
            the early and mid game to the <strong>Axatana</strong> in the
            endgame — the best-in-slot choice for any fast-swinging, Duality
            Stone setup. Endgame, the <strong>Acolyte Stone</strong> takes over
            from your early crit stones: maxed at level three, charged attacks
            gain <strong>+15% crit chance and +150% crit damage</strong>, and
            the Resolve cost drops to <strong>30</strong>.
          </p>
          <p>
            The <strong>Torpor Stone</strong> is another endgame
            non-negotiable: a permanent <strong>Stasis infusion</strong> on
            your weapon. Every stack slows the target further — you can watch
            them crawl while you line up a charged strike. Against bosses, that
            extra time is the difference between trading hits and walking away
            clean.
          </p>
        </section>

        {/* 7. Item Locations —— Serpent Stone 与 Acolyte Stone 位置
            视频未覆盖，先不列出；位置确认后往 ITEM_LOCATIONS 数组追加即可。 */}
        <section id="item-locations" className="article">
          <h2>Where to Find Every Tiel Build Item</h2>
          <p>
            Everything is deliberately easy to reach, and the locations below
            follow natural early-game progression. All of them are marked on
            our{" "}
            <Link
              href="/map"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              interactive map
            </Link>
            .
          </p>

          <LocationTable items={ITEM_LOCATIONS} />
        </section>

        {/* 8. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Mortal Shell 2 Tiel Build FAQ</h2>
          <div className="faq">
            <h3>What is the best Tiel build in Mortal Shell 2?</h3>
            <p>
              The best Tiel build stacks Shadow Strike crit with poison
              detonation: Escalation inflicts 10 Poison stacks, Death Mark adds
              crit chance and damage, and Poison Burst detonates the stacks for
              burst. It runs on the Duality Stone and works from the 14-point
              starter version through the 40-point endgame version.
            </p>

            <h3>What items do you need for a Tiel build?</h3>
            <p>
              The Duality Stone is non-negotiable, plus the Axe and Dagger
              upgraded to the Axatana, the Torpor Stone for permanent Stasis
              infusion, and the Acolyte, Auspicious, and Headsman Stones for
              crit. Your infusion slot is either the Serpent Stone for extra
              Poison stacks or Arbiter&apos;s Prize for Blood Curse.
            </p>

            <h3>How does poison detonation work in the Tiel build?</h3>
            <p>
              Every Shadow Strike with Escalation applies 10 Poison stacks.
              Poison Burst then detonates up to 4 stacks whenever you land a
              Shadow Strike on a poisoned enemy, dealing a flat burst of damage
              on top of the strike itself.
            </p>
          </div>
        </section>

        <p className="mt-10">
          Looking for a slower, tankier alternative? See our{" "}
          <Link
            href="/builds/proxima"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Proxima Build
          </Link>
          . For the full breakdown of every shell, check the{" "}
          <Link
            href="/shells"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Shells guide
          </Link>
          .
        </p>

        <p>
          <Link
            href="/builds"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            All Mortal Shell 2 Builds
          </Link>{" "}
          ·{" "}
          <Link
            href="/map"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Interactive Map
          </Link>{" "}
          ·{" "}
          <Link
            href="/shells"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Shells Guide
          </Link>
        </p>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
