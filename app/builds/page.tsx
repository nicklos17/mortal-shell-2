import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import { BUILDS } from "@/lib/builds-data";

const TITLE = "Mortal Shell 2 Builds";
const PAGE_PATH = "/builds";
const DESCRIPTION =
  "Top Mortal Shell 2 builds ranked by playstyle. Tank, DPS, speed, mage, poison DOT, summoner, hybrid, and beginner setups with best shell and weapon combinations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description:
      "Top Mortal Shell 2 builds ranked by playstyle. Tank, DPS, agile, mage, poison DOT, summoner, hybrid, and beginner setups.",
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
    description:
      "Top Mortal Shell 2 builds ranked by playstyle. Tank, DPS, agile, mage, poison DOT, summoner, hybrid, and beginner setups.",
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
        text: "There is no single best Mortal Shell 2 build. The strongest setup depends on the encounter and the player's preference. Tank builds like Black Beard excel at surviving punishing bosses. Agile builds like Tial dominate mobile targets and hit-and-run routing. Pure DPS collapses a fight fast but requires clean reads. Beginner players should start with Harros hybrid before branching into Mortal Shell 2 builds that fit their playstyle.",
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
        text: "Harros the Vassal is the safest starting point for new players. His balanced stat spread works with nearly every weapon and leaves room to test before committing to a specialized build. If you enjoy tank play, move to Black Beard or Eredirm. If you favor speed, respec toward Tial and the agile build. See the full Shell roster on our Shells page for each shell's recommended pairing.",
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

        {/* 1. 配装机制说明 */}
        <section className="article">
          <h2>How a Build Comes Together</h2>
          <p>
            Every Mortal Shell 2 build is the product of four layers. Get them
            working in the same direction and the whole setup exceeds the sum
            of its parts. Miss one and you end up with a hybrid that does
            nothing particularly well.
          </p>
          <ul>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Shell.</strong>{" "}
              The foundation. Sets HP, stamina resource pool, and signature
              ability. A given shell only really sings when the rest of the
              build pushes its strength instead of trying to patch its
              weakness. Full shell-by-shell details live on our{" "}
              <a href="/shells/">Shells guide</a>.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Weapon.</strong>{" "}
              Swing speed, reach, and damage profile must match the shell. A
              tank wastes a fast dagger the same way a speed build wastes a
              slow greatsword. See the{" "}
              <a href="/weapons/">Weapons database</a> for stat breakdowns once
              the list is finalized.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Tarstones.</strong>{" "}
              Elemental infusions and stat sockets. Every open slot is a chance
              to push your chosen multiplier higher. Crit builds stack crit
              chance first, then crit damage. Mage builds stack spell power and
              mana regen. Resistances fill in the last gaps once the primary
              tree is capped.
            </li>
            <li>
              <strong style={{ color: "var(--color-gold)" }}>Seals.</strong>{" "}
              Equipable passive and active modifiers. A build either leans on a
              single powerful seal or chains three smaller ones for utility.
              Specific seals and their locations are being mapped on our{" "}
              <a href="/map/">interactive map</a> as they are found.
            </li>
          </ul>
          <div className="note">
            <strong>A note before Aug 20 launch.</strong> The eight builds below
            use confirmed shells and mechanics from the open beta plus
            community-identified archetypes from pre-release coverage. Exact
            weapon names and seal numbers will be updated once the full game is
            out and we can verify every Tarstone socket and boss drop in a live
            run.
          </div>
        </section>

        {/* 2. 核心三要素 */}
        <section className="article">
          <h2>The Three Core Archetypes</h2>
          <p>
            Every specialized build clusters around one of three basic roles.
            Each archetype pairs most naturally with a different subset of the{" "}
            <a href="/shells/">all playable Shells in Mortal Shell 2</a>.
            Hybrid builds borrow from two, at the cost of not topping either.
            Before you scroll the setups below, decide which general direction
            matches your preference. Most players settle on one main archetype
            and keep a second loadout ready for matchups where the primary
            falls apart.
          </p>

          <div className="card-grid">
            <section className="card">
              <span className="eyebrow">Survive</span>
              <h2>Tank</h2>
              <p>
                Stand in the fire and laugh it off. Tanks trade damage output
                for health, mitigation, and recovery. The right choice when a
                boss hits hard enough to one-shot anything lighter, or when you
                are still learning a pattern and want bigger margins for error.
              </p>
            </section>
            <section className="card">
              <span className="eyebrow">Finish fast</span>
              <h2>DPS</h2>
              <p>
                Every stat point goes toward ending the fight sooner. Pure
                damage, crit chains, armor break, and lifesteal to turn damage
                dealt back into health. Dominant when you can stay behind a
                target or when a timer forces a kill window.
              </p>
            </section>
            <section className="card">
              <span className="eyebrow">Magic &amp; Range</span>
              <h2>Mage</h2>
              <p>
                Fight from behind a screen of elemental damage. Spellcasters
                pick a primary element, stack penetration for resistant
                targets, and use terrain to keep enemies at staff length.
                Poison DOT and summon setups are extended branches of the same
                core idea.
              </p>
            </section>
          </div>
        </section>

        {/* 3. 概览卡片表 */}
        <section className="article">
          <h2>Builds Overview</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "-.5rem" }}>
            Eight full Mortal Shell 2 builds. Each one has a recommended shell,
            gear set, talent priority, and playstyle notes. Jump to any entry
            from the list below, or read straight through for the full
            breakdown.
          </p>

          <table className="data">
            <thead>
              <tr>
                <th>Build</th>
                <th>Shell</th>
                <th>Role</th>
                <th>Tier</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {BUILDS.map((b) => (
                <tr key={b.id}>
                  <td>
                    <a
                      href={`#${b.id}`}
                      style={{ color: "var(--text-primary)", textDecoration: "none" }}
                    >
                      <strong>{b.name}</strong>
                    </a>
                  </td>
                  <td>{b.shellName}</td>
                  <td>{b.role}</td>
                  <td>{b.tier}</td>
                  <td>{b.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <p className="lede" style={{ fontSize: ".95rem", margin: "-.25rem 0 1.5rem" }}>
          Gear, seal, and Tarstone shrine locations for these builds are being
          catalogued and annotated on the{" "}
          <a href="/map/">Mortal Shell 2 interactive map</a>. Check there first
          before heading into a new region, to avoid doubling back for a socket
          or weapon that lives in an earlier zone.
        </p>

        {/* 4. 8 个 Build 详细卡片 */}
        <section className="article">
          <h2>Every Build, Breakdown</h2>
          <p>
            Below are full notes on each Mortal Shell 2 build, core idea, gear,
            talent order, and how to actually play the setup when the enemy is
            in front of you.
          </p>

          {BUILDS.map((b) => (
            <article key={b.id} id={b.id} className="build-card">
              <div className="build-head">
                <div>
                  <span className="eyebrow">
                    {b.role} &middot; Tier {b.tier} &middot; {b.difficulty}
                  </span>
                  <h3 style={{ fontSize: "1.35rem", marginTop: ".25rem", marginBottom: ".15rem" }}>
                    {b.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: ".95rem",
                      margin: 0,
                    }}
                  >
                    {b.tagline}
                  </p>
                </div>
                <div className="build-shell-chip">
                  {b.shellId ? (
                    <Link
                      href={`/shells/${b.shellId}`}
                      style={{ color: "var(--color-gold)" }}
                    >
                      {b.shellName}
                    </Link>
                  ) : (
                    <span style={{ color: "var(--text-secondary)" }}>
                      {b.shellName}
                    </span>
                  )}
                </div>
              </div>

              <p className="build-core">{b.coreIdea}</p>

              <div className="build-cols">
                <div>
                  <h4>Gear</h4>
                  <ul>
                    {b.gear.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Talent Priority</h4>
                  <ul>
                    {b.talents.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="build-play">
                <h4>How to Play</h4>
                <ul>
                  {b.playstyle.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="build-footer">
                <strong>Shines in:</strong>{" "}
                <span style={{ color: "var(--text-secondary)" }}>
                  {b.goodFor.join(" &middot; ")}
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* 5. 如何选择 */}
        <section className="article">
          <h2>Pick the Build That Fits You</h2>
          <p>
            The strongest build on paper is not always the one you should run.
            A tier-S agile build in unsteady hands collapses faster than a
            tier-B beginner setup played cleanly. If this is your first run
            through the game, read the{" "}
            <a href="/tips/">Mortal Shell 2 beginner tips</a> for the ground
            rules before committing to a loadout. The following rules of thumb
            narrow the eight setups down to a short list that matches what you
            actually enjoy.
          </p>

          <div className="card-grid">
            <section className="card">
              <span className="eyebrow">If you are new</span>
              <h2>Start with Beginner or Hybrid</h2>
              <p>
                Both are forgiving. Harros covers you while you learn parry
                timing and stamina management. Respec for free at any Tarstone
                shrine once a specific shell or weapon clicks.
              </p>
            </section>
            <section className="card">
              <span className="eyebrow">If you love trading hits</span>
              <h2>Go Tank</h2>
              <p>
                Black Beard or Eredirm absorb punishment that would break any
                other shell. Excellent against boss arenas that demand you
                stand your ground instead of rolling forever.
              </p>
            </section>
            <section className="card">
              <span className="eyebrow">If you dodge everything</span>
              <h2>Agile or Pure DPS</h2>
              <p>
                Tial turns clean evades into free damage. Pair him with the
                agile build for safe pressure, or drop straight into pure DPS
                if you can stay behind every target.
              </p>
            </section>
            <section className="card">
              <span className="eyebrow">If you prefer planning</span>
              <h2>Mage or Poison DOT</h2>
              <p>
                Pre-fight setup matters more than raw reflex. Stack the
                debuff, kite, manage mana or poison stacks, and let the
                numbers solve the room.
              </p>
            </section>
          </div>

          <p>
            For matchups against named encounters, cross-reference these
            setups with our <a href="/bosses/">boss strategies</a>, each
            boss page lists the top two or three Mortal Shell 2 builds that
            handle its specific mechanics. Route planning before heading into
            a new zone, including the Tarstone shrines and checkpoint order,
            is covered in the full{" "}
            <a href="/walkthrough/">Mortal Shell 2 walkthrough</a>.
          </p>
        </section>

        {/* 6. FAQ */}
        <section className="article">
          <h2>Frequently Asked Questions</h2>

          <div className="faq">
            <h3>What is the best Mortal Shell 2 build?</h3>
            <p>
              There is no single best Mortal Shell 2 build. The strongest
              setup depends on the encounter and the player's preference. Tank
              builds like Black Beard excel at surviving punishing bosses.
              Agile builds like Tial dominate mobile targets and hit-and-run
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
              If you enjoy tank play, move to Black Beard or Eredirm. If you
              favor speed, respec toward Tial and the agile build. See the
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
              the boss at the end. Our boss strategies section lists
              recommended builds per encounter.
            </p>
          </div>
        </section>

        {/* 7. 收尾 CTA */}
        <section className="article">
          <h2>More Resources for Your Loadout</h2>
          <p>
            A build is only half the run. Your shell needs to be found in the
            open world first, use the{" "}
            <a href="/map/">Mortal Shell 2 interactive map</a> to plan the
            route and grab every shell, seal, and Tarstone shrine along the
            way. Once the loadout is in place, each named encounter has its
            own quirks that favor some setups over others. Read the dedicated{" "}
            <a href="/bosses/">Mortal Shell 2 boss guide</a> for build
            recommendations matched to each boss. Weapon-specific tuning is
            coming once we finish the full-database entry for each drop
            location.
          </p>
          <div className="hero-cta">
            <a className="btn btn-outline" href="/shells/">
              Pick Your Shell
            </a>
            <a className="btn btn-primary" href="/bosses/">
              Boss Build Recommender
            </a>
          </div>
        </section>

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
