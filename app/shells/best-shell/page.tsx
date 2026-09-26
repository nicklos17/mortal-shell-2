export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import BannerAd from "@/components/BannerAd";

const SLUG = "best-shell";
const PAGE_PATH = `/shells/${SLUG}`;
const TITLE = "Mortal Shell 2 Best Shell";
const DATE_PUBLISHED = "2026-09-26T09:00:00Z";
const DATE_MODIFIED = "2026-09-26T09:00:00Z";
const AUTHOR = "Mortal Shell 2 Wiki Staff";
const DESCRIPTION =
  "All eight Mortal Shell 2 Shells ranked from S to C tier. Proxima and Smert top our list. Full reasoning, best picks by situation, and beginner recommendations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: pageURL(PAGE_PATH),
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    authors: [AUTHOR],
    tags: ["Mortal Shell 2", "Best Shell", "Tier List", "Shells"],
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  author: {
    "@type": "Organization",
    name: AUTHOR,
    url: pageURL("/"),
  },
  publisher: {
    "@type": "Organization",
    name: "Mortal Shell 2 Wiki",
    url: pageURL("/"),
    logo: {
      "@type": "ImageObject",
      url: pageURL("/favicon.ico"),
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageURL(PAGE_PATH),
  },
  keywords:
    "Mortal Shell 2 best shell, Mortal Shell 2 shell tier list, best shell in Mortal Shell 2, Mortal Shell 2 Proxima, Mortal Shell 2 Smert, Mortal Shell 2 beginner shell",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Shell in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proxima is the best Shell for most players. Her 15% passive damage mitigation, the Biosampler hook, and Lightning and Stasis crowd control give her an answer to every fight in the game. Smert is the damage pick, with time-stop attack windows, self-healing through Fight Stance, and Chaos stack detonations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best starting Shell for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proxima is the best beginner Shell because nothing in her kit demands perfect play. Eredrim works if you prefer trading hits over dodging, and Genessa suits players who want a built-in second chance through her Duality mechanic.",
      },
    },
    {
      "@type": "Question",
      name: "Do weapons and builds change the tier list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Shell is half of a build, and the right weapon and Tarstone pairing moves every Shell up or down at least half a tier. The Proxima starter build, which comes online at just 14 Shell Bonding points, is the clearest example of a loadout lifting its Shell above the rest of the roster.",
      },
    },
    {
      "@type": "Question",
      name: "How do you unlock the other Shells in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shells are found across the world rather than chosen at the start. Most are awakened near a Beacon, while Gragu, Lazlo, and Genessa require small side quests. Our Shells page lists the exact location for all eight, and the interactive map marks every one of them.",
      },
    },
  ],
};

type TierRow = {
  tier: "S" | "A" | "B" | "C";
  slug: string;
  name: string;
  role: string;
  verdict: string;
};

const TIER_ROWS: TierRow[] = [
  {
    tier: "S",
    slug: "proxima",
    name: "Proxima",
    role: "All-rounder / Control",
    verdict: "Best all-rounder: passive mitigation, a pull, and crowd control in one kit.",
  },
  {
    tier: "S",
    slug: "smert",
    name: "Smert",
    role: "Time Mage / Sustain",
    verdict: "Highest damage ceiling in the game, with healing built into his attacks.",
  },
  {
    tier: "A",
    slug: "tiel",
    name: "Tiel",
    role: "Assassin / Speed",
    verdict: "Fastest Shell with the best crits, but every advantage rides on clean dodges.",
  },
  {
    tier: "A",
    slug: "gragu",
    name: "Gragu",
    role: "Berserker / Fire",
    verdict: "Safest boss-killer while his kit is up; the health costs hurt consistency.",
  },
  {
    tier: "A",
    slug: "eredrim",
    name: "Eredrim",
    role: "Tank / Heavy",
    verdict: "Huge health pool and the most forgiving Shell for a first playthrough.",
  },
  {
    tier: "B",
    slug: "genessa",
    name: "Genessa",
    role: "Summoner / Control",
    verdict: "Very forgiving summoner with a second chance on death, but slow personal damage.",
  },
  {
    tier: "B",
    slug: "lazlo",
    name: "Lazlo",
    role: "Tank / Heat",
    verdict: "Dependable tank found so late in the game that most players move on first.",
  },
  {
    tier: "C",
    slug: "sariel",
    name: "Sariel",
    role: "Thorn Tank / Reflect",
    verdict: "Nearly unkillable in expert hands, punishing for everyone else.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BestShellPage() {
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
        <article className="article">
          <span className="eyebrow">Shells · Tier List</span>
          <h1>{TITLE}</h1>
          <span className="title-rule" />

          <p className="article-meta">
            <time dateTime={DATE_PUBLISHED}>
              Published {formatDate(DATE_PUBLISHED)}
            </time>
            {" · "}
            <span>By {AUTHOR}</span>
          </p>

          <p className="lede">
            Eight Shells, one question: which one deserves your Shell Points?
            We ranked every playable Shell in Mortal Shell 2 into an S to C
            tier list based on damage output, survivability, and how much of
            each kit works without perfect play.
          </p>

          <h2>How We Ranked the Shells</h2>
          <p>
            Every Shell was rated after a full release playthrough, judging
            four things: how much damage it deals in boss fights, how often it
            dies, how much of its kit still works when your execution slips,
            and how early it comes online. The rankings reflect the launch
            build of the game. We revisit the list after every balance pass,
            which we track in our Mortal Shell 2{" "}
            <Link href="/updates">updates feed</Link>.
          </p>
          <p>
            One caveat before the table: a Shell is only half of a build. The
            right weapon and Tarstone pairing moves any of these up or down at
            least half a tier, so pair this list with our{" "}
            <Link href="/builds">best Mortal Shell 2 builds</Link> before you
            commit.
          </p>

          <h2>Mortal Shell 2 Shell Tier List</h2>
          <table className="data">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Shell</th>
                <th>Role</th>
                <th>Why it lands there</th>
              </tr>
            </thead>
            <tbody>
              {TIER_ROWS.map((row) => (
                <tr key={row.slug}>
                  <td><strong>{row.tier}</strong></td>
                  <td>
                    <Link
                      href={`/shells/${row.slug}`}
                      style={{ color: "var(--text-primary)", textDecoration: "none" }}
                    >
                      <strong>{row.name}</strong>
                    </Link>
                  </td>
                  <td>{row.role}</td>
                  <td>{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>S Tier: Proxima and Smert</h2>
          <p>
            The two Shells that win everywhere, for everyone, at every stage of
            the game.
          </p>

          <h3>Proxima: the best Shell in Mortal Shell 2</h3>
          <p>
            Proxima takes the top spot because her strengths never expire. Her
            15% passive chance to mitigate any incoming hit, melee or ranged,
            matters as much in the final boss arena as it does in the first
            dungeon, and it can cancel the stagger that would otherwise lock
            you into a combo. The Biosampler hook gives her something no other
            Shell has: a way to drag distant enemies back to her, or to pull
            herself across the arena when a boss creates space.
          </p>
          <p>
            Add Lightning damage and Stasis stacks that slow everything around
            her, and she has an answer for every fight type in the game,
            singles and swarms alike. She is also the easiest Shell to learn,
            because nothing in her kit asks you to play perfectly. Our testing
            agrees with the tier: the <Link href="/builds/proxima">Proxima
            starter build</Link> is the strongest setup we have measured, and
            it comes online at just 14 Shell Bonding points.
          </p>

          <BannerAd />

          <h3>Smert: the damage king with a built-in medic</h3>
          <p>
            Smert wins fights on damage and wins long fights on sustain, which
            almost never goes together. His Miracle ability stops time and
            opens free attack windows no other Shell can copy; every stoppage
            is a chance to stack unarmed Chaos charges and detonate them for
            some of the biggest hits in the game. Burst kits usually fall over
            in extended fights, but Fight Stance regenerates health from his
            own attacks, so the longer the fight runs, the more he heals.
          </p>
          <p>
            He is genuinely beginner-friendly despite the exotic mechanics. You
            can ignore the time-stop tech for your first ten hours and still
            win on self-healing alone, then grow into the Chaos detonations
            when you want more. Our <Link href="/builds/smert">Smert
            time-stop build</Link> takes that detonation loop as far as it
            goes.
          </p>

          <h2>A Tier: Tiel, Gragu, and Eredrim</h2>
          <p>
            Excellent Shells with one real drawback each. Plenty of players
            will finish the game with one of these and never look back.
          </p>

          <h3>Tiel: the fastest hands on the roster</h3>
          <p>
            Tiel is the quickest Shell in the game. Shadow Strike dips him
            into stealth, phases him through attacks, and returns him with a
            devastating dagger strike, while Shadow Dash keeps him untouchable
            and staggers anything chasing him. High crit rate and crit damage,
            plus Poison stacks from the Bonding tree, make the hit-and-run
            loop lethal: strike, detonate, vanish, repeat.
          </p>
          <p>
            He misses S tier for one reason. The entire kit rides on the
            dodge, and a whiffed dodge hands the advantage back. Tiel punishes
            mistakes harder than anyone above him on this list. If your
            fundamentals are sharp he out-damages both S tier picks; if they
            are not, he feeds bosses. The <Link href="/builds/tiel">Tiel
            starter build</Link> covers the Shadow Strike loop with Escalation
            and Death Mark.
          </p>

          <h3>Gragu: the safest boss-killer, at a price</h3>
          <p>
            When his kit is online, Gragu is the safest boss-killer in the
            game. His flame AoE inflicts Inflamed and can interrupt enemy
            attack animations mid-swing, and his scaled-up single-target
            strikes delete boss health bars. The twist is that his strongest
            options spend his own health, so he is always trading his body for
            damage.
          </p>
          <p>
            That trade is why he sits in A tier instead of S. When cooldowns
            are down or his health is low, the weaknesses show, and he asks
            for real resource management to stay consistent. Aggressive
            players who enjoy that loop will not find a faster boss kill
            anywhere else on the roster.
          </p>

          <h3>Eredrim: the tank that eats hits other Shells must dodge</h3>
          <p>
            Eredrim trades speed for a massive health pool and hardening
            durability. He can simply absorb hits that any other Shell has to
            dodge, which makes him the most forgiving pick for a first
            playthrough. Shoulder Bash breaks into enemy lines with an area
            shockwave, Executioner finishes low-health enemies on the spot,
            and ripostes stack Slaughterer for fast mob clears.
          </p>
          <p>
            He is not higher because he is slow. Every strike is deliberate,
            spacing matters more than aggression, and his damage ceiling sits
            below the S tier kits. For pure survival, nothing on the roster
            beats him.
          </p>

          <BannerAd />

          <h2>B Tier: Genessa and Lazlo</h2>
          <p>
            Good Shells held back by tempo, timing, or both. Neither is a bad
            pick, and both shine in the right hands.
          </p>

          <h3>Genessa: the summoner with a second life</h3>
          <p>
            Genessa fights through her Faithful Doubles, clones that attack on
            her behalf and apply status effects such as Stasis, letting her
            control groups instead of dueling them head-on. Duality gives her
            a built-in second chance: on death she becomes Stray instead of
            fully severing. Together with a solid health pool, that makes her
            one of the most forgiving kits in the game.
          </p>
          <p>
            The problem is tempo. Her personal damage is thin, so clears run
            slower unless the clones carry the fight, and the Resolve that
            funds them runs out at the worst time. Beginners and crowd-control
            fans will love her. Anyone chasing kill speed should look one tier
            up.
          </p>

          <h3>Lazlo: the classic tank you meet too late</h3>
          <p>
            Lazlo is the roster&apos;s traditional tank: heavy armor and
            dependable swordplay built on fundamentals rather than gimmicks.
            He soaks big hits and builds Heat as he fights, then either pushes
            it into an overheat damage spike or vents it as a shockwave of
            flame for area clears.
          </p>
          <p>
            He lands in B tier because he is late and he is plain. You find
            him behind a miniboss in the Royal Crypt of Mammon, so by the time
            he exists you already have a Shell you know how to play. Once
            unlocked he is solid and forgiving, just rarely spectacular.
          </p>

          <h2>C Tier: Sariel</h2>
          <h3>Sariel: the expert-only pick</h3>
          <p>
            Sariel has the highest skill ceiling on the roster and the lowest
            floor. Her Pain mechanic converts damage taken into recoverable
            grey health, her parasitic thorns apply Curse, a debuff that can
            nullify or outright reflect enemy melee damage, and her dodge
            speed scales as Pain builds. Played well, she feels close to
            unkillable.
          </p>
          <p>
            Played like any other Shell, she falls apart. One clean hit drops
            built-up Pain for good, and rebuilding it means deliberately
            taking more damage, which is a hard habit to learn and a worse one
            to automate. We rate her C for the way most players will actually
            experience her. If you put in the hours and master the Pain loop,
            move her up your own personal list; in an expert&apos;s hands she
            plays like A tier.
          </p>

          <h2>The Best Shell for Every Situation</h2>
          <p>
            Tier lists flatten context. These are the picks we actually make,
            situation by situation:
          </p>
          <ul>
            <li>
              <strong>First playthrough:</strong> Proxima, with Eredrim as the
              alternative if you would rather trade hits than dodge them.
            </li>
            <li>
              <strong>Boss fights:</strong> Gragu for raw burst, Smert when
              the fight is long enough for his sustain to pay off. Our{" "}
              <Link href="/bosses">boss strategies</Link> note a recommended
              Shell for every encounter.
            </li>
            <li>
              <strong>Aggressive hit-and-run play:</strong> Tiel, no contest.
            </li>
            <li>
              <strong>Heavy dungeons and mob swarms:</strong> Proxima or
              Genessa, both of whom control groups instead of dueling them.
            </li>
            <li>
              <strong>Pure survival:</strong> Eredrim first, Lazlo second.
            </li>
          </ul>
          <p>
            Remember that weapons move these rankings. A great Shell with the
            wrong weapon underperforms a mid-tier Shell with the right one, so
            cross-check our <Link href="/weapons">weapons database</Link> and
            the <Link href="/builds">builds guide</Link> before you invest
            Shell Points.
          </p>

          <h2>Mortal Shell 2 Best Shell FAQ</h2>

          <h3>What is the best Shell in Mortal Shell 2?</h3>
          <p>
            Proxima is the best Shell for most players. Her 15% passive
            damage mitigation, the Biosampler hook, and Lightning and Stasis
            crowd control give her an answer to every fight in the game.
            Smert is the damage pick, with time-stop attack windows,
            self-healing through Fight Stance, and Chaos stack detonations.
          </p>

          <h3>What is the best starting Shell for beginners?</h3>
          <p>
            Proxima. Nothing in her kit demands perfect play, and she stays
            strong into the endgame. Eredrim works if you prefer trading hits
            over dodging, and Genessa suits players who want a second chance
            on death. More fundamentals live in our{" "}
            <Link href="/tips">beginner tips guide</Link>.
          </p>

          <h3>Do weapons and builds change the tier list?</h3>
          <p>
            Yes. A Shell is half of a build, and the right weapon and
            Tarstone pairing moves any Shell up or down at least half a tier.
            The Proxima starter build, online at just 14 Shell Bonding
            points, is the clearest example of a loadout lifting its Shell
            above the rest of the roster.
          </p>

          <h3>How do you unlock the other Shells?</h3>
          <p>
            Shells are found across the world rather than chosen at the
            start. Most are awakened near a Beacon, while Gragu, Lazlo, and
            Genessa need small side quests first. Our{" "}
            <Link href="/shells">Shells guide</Link> lists the exact location
            for all eight, and the <Link href="/map">interactive map</Link>{" "}
            marks every one of them.
          </p>

          <p>
            Disagree with a placement? That is what tier lists are for. Tell
            us which Shell carried your run through the{" "}
            <Link href="/contact">contact page</Link>, and check the{" "}
            <Link href="/updates">Updates feed</Link> after every patch to see
            how the rankings shift.
          </p>

          <BannerAd />

          <p className="article-back">
            <Link href="/shells">← Back to all Mortal Shell 2 Shells</Link>
          </p>
        </article>
      </main>
    </>
  );
}
