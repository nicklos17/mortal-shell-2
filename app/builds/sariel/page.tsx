export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AdBanner from "@/components/AdBanner";
import BannerAd from "@/components/BannerAd";
import BuildNav from "@/components/BuildNav";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 Sariel Build Guide – Best Curse & Break Setup";
const PAGE_PATH = "/builds/sariel";
const DESCRIPTION =
  "Mortal Shell 2 Sariel build: two distinct paths — Thornfall damage spam or Entitlement break DPS. Iconoclast, Zealot Stone, full Tarstone loadout.";

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
  headline: "Mortal Shell 2 Sariel Build – Best Curse & Break Setup",
  description: DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageURL(PAGE_PATH),
  },
  publisher: {
    "@type": "Organization",
    name: "Mortal Shell 2 Wiki",
  },
  datePublished: "2026-08-22",
  dateModified: "2026-08-22",
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
      name: "How does Sariel's Curse mechanic work in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sariel's Curse makes the next enemy attack deal zero damage to you — the enemy's attack is negated and they take damage from their own strike instead. Apply Curse with Exodus of Thorns at range, then safely rush in for melee. Keeping Curse active on enemies is the key to Sariel's tankiness: he has middling HP but becomes far harder to kill than he first appears as long as enemies stay cursed.",
      },
    },
    {
      "@type": "Question",
      name: "Which Sariel build is better — Thornfall damage or Entitlement break?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your playstyle. The Thornfall damage build turns Exodus of Thorns into a ranged nuke with splash damage, but the thorns come from the sky and roughly 50% miss — it's strong when it works but frustratingly inconsistent. The Entitlement break build focuses on Curse uptime and Pain clearing to trigger 10 Trauma stacks for break damage over time, which is more reliable and recommended early on before Thornfall becomes available at the bottom of the skill tree. Pick one path and commit — the two don't mix well.",
      },
    },
    {
      "@type": "Question",
      name: "What Tarstones should I use with Sariel in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the melee weapon: Zealot Stone (two fast attacks on the final swing + 150% resolve gain to fuel more Exodus of Thorns casts) and Cursed Blood Stone (infuse the weapon with Curse so every swing applies it — nice to have but not urgent since Exodus handles most cursing). Support stones: Auspicious Stone and Hallowed Shell Stone for crit chance and crit damage (staples on nearly every build), Berserker Stone for extra damage as health drops (replaceable with Retribution Stone if you riposte often), and Bulwark Stone for damage reduction after defeating an enemy.",
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
    ability: "Growth",
    points: "Skip early",
    effect:
      "Increases Exodus of Thorns damage and applies perforation stacks. Default Exodus damage is negligible and perforation doesn't help without a sidearm. Only invest if you're going the Thornfall damage route later — otherwise skip entirely.",
  },
  {
    ability: "Reaper",
    points: "Skip (\u26A0\uFE0F conflicts with Entitlement)",
    effect:
      "Increases the amount of Pain you regain when damaging an enemy. Generally overkill — you recover Pain easily with melee. The last upgrade lets ranged attacks clear Pain, which is nice for boss fights where you're scared to go in, but do NOT take Reaper if you're running the Entitlement build — clearing Pain at range triggers the Trauma explosion far from the target, wasting it.",
  },
  {
    ability: "Scourge",
    points: "Max (core)",
    effect:
      "Grants Curse immunity and — crucially — makes Curse last 30 seconds on enemies instead of a few seconds. This is fantastic: cursed enemies can't waste the debuff by hanging back, and bosses can't out-wait your Curse with long attack animations. Take this no matter which build you're playing.",
  },
  {
    ability: "Synthesis",
    points: "Max (core)",
    effect:
      "Exodus of Thorns recharges faster, letting you cast it more frequently. Universally good — whether you're using Exodus for Curse application, ranged damage, or both, more casts is always better. Max this no matter which build.",
  },
  {
    ability: "Entitlement",
    points: "Core (break build)",
    effect:
      "When Sariel cures all his Pain, he inflicts up to 10 stacks of Trauma on the target — break damage over time. This is the centerpiece of the alternate break-focused build. If you're not going max Exodus damage, absolutely take this. Do not put points in Reaper with this build, or your ranged Exodus casts will clear Pain and trigger the explosion at range, missing the boss entirely. You want to Curse the boss, run in, melee to clear Pain, then trigger Trauma point-blank.",
  },
  {
    ability: "Frailty",
    points: "Max (core)",
    effect:
      "When Sariel has no Pain, up to 100% of incoming damage becomes recoverable Pain instead of permanent health loss. This helps keep him topped off in fights and drastically reduces potion usage. Strong no matter how you play.",
  },
  {
    ability: "Torment",
    points: "2 pts (damage build only)",
    effect:
      "Increases Exodus stagger damage and adds break damage based on Sariel's current Pain. Looks great on paper but underperforms in practice — unless you're spamming Exodus to burn half your health bar, you won't benefit much. If you're running the Thornfall damage build, put a couple points here. If you're running Entitlement/break, skip it.",
  },
  {
    ability: "Reversal",
    points: "Recommended (break build)",
    effect:
      "When a cursed enemy attacks you, they deal 15 break damage to themselves (boss or regular enemy). Riposting also cures your Pain. This compounds beautifully with Entitlement — cursed enemies hurt themselves just by attacking, and riposting can trigger additional Trauma explosions. Even without Entitlement, the free break damage on cursed attackers is solid value.",
  },
  {
    ability: "Agonize",
    points: "Skip",
    effect:
      "At max Pain, Sariel slowly regenerates up to 40% of his Resolve. In theory this sustains Exodus spam, but in practice max Pain is extremely difficult to reach and maintain — any melee attack clears your Pain and stops the regeneration. It works against how Sariel is actually played. Don't take this.",
  },
  {
    ability: "Thornfall",
    points: "Max (damage build)",
    effect:
      "Increases Exodus damage by adding more thorns and giving them splash damage. Mandatory if you want Exodus to be a real damage ability. It's at the bottom of the tree so you won't reach it early. The major downside: thorns now come from the sky and their tracking is poor — roughly 50% of the time they hit nothing. This passive desperately needs a patch, but when it works it's very effective. Also makes it harder to spread Curse to multiple enemies since the thorns don't fan out the same way.",
  },
  {
    ability: "Restoration",
    points: "Recommended",
    effect:
      "Using a healing potion also cures some Pain. This is excellent when you have both missing HP and built-up Pain — pop a potion and you clear the white bar on top of the heal, effectively getting a much larger recovery. Great for clutch situations where you took a big hit and need to top off fast.",
  },
  {
    ability: "Affliction",
    points: "Skip",
    effect:
      "When you damage one cursed enemy, other cursed enemies also take damage. Sounds amazing on paper but is extremely hard to use in practice because it's difficult to curse multiple targets simultaneously. Unless you're using the default Exodus of Thorns without Thornfall, you'll almost never have more than two enemies cursed at once — and the payoff for only two targets isn't worth the point investment. You'd ideally want three or four linked together, but that almost never happens.",
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
export default function SarielBuildPage() {
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
          <span>Sariel Build</span>
        </nav>

        <span className="eyebrow">Thorn Tank Build</span>
        <h1>Mortal Shell 2 Sariel Build Guide</h1>

        <p className="intro-link">
          <strong>New to Sariel?</strong> Start with our
          <a href="/shells/sariel" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
            Sariel Shell Overview
          </a>
          — location, abilities, playstyle &amp; lore.
        </p>

        <span className="title-rule" />

        <figure className="shell-portrait-wrap">
          <Image
            src="/assets/images/build/sariel.png"
            alt="Serial Tank build in Mortal Shell 2"
            title="Serial Build – Mortal Shell 2"
            width={520}
            height={682}
            className="shell-portrait"
          />
        </figure>

        <p className="lede">
          Sariel is the last shell most players will find, with a{" "}
          <strong>middle-of-the-road HP pool</strong> that hides how tanky he
          truly is. His entire survival hinges on one mechanic:{" "}
          <strong>Curse</strong>. Curse an enemy and their next attack does
          nothing — they whiff and hurt themselves instead. Master this and he
          takes far less damage than shells with twice his health bar.
        </p>

        <BannerAd />

        {/* 1. Overview */}
        <section id="overview" className="article mt-12">
          <h2>Overview</h2>
          <p>
            Sariel has slightly less HP than Proxima and lacks her passive
            damage prevention. What he has instead is <strong>Curse</strong> —
            the strongest defensive tool in the game when used right. Apply it
            to an enemy and their next attack is completely negated; they take
            damage from their own swing instead. This lets you attack through
            enemy combos safely, making Sariel far tankier than his stat sheet
            suggests — as long as you keep Curse active.
          </p>
          <p>
            Sariel also introduces the <strong>Pain</strong> mechanic.
            Whenever he takes damage from any source, a white bar appears in
            his health bar. That white bar is recoverable — hit an enemy with
            a melee attack and the white portion regenerates into real health.
            The faster you counterattack after getting hit, the less damage
            sticks. This gives Sariel sustain that other shells simply
            don&apos;t have, but it also means you can&apos;t play passively:
            you have to stay aggressive to recover.
          </p>
          <p>
            He&apos;s probably the sixth or seventh shell you&apos;ll find —
            but if you get turned around exploring (like I did), you might
            stumble into him earlier. Either way, he has the highest skill
            ceiling on the roster, and this guide covers the two distinct ways
            to build him.
          </p>
        </section>

        <AdBanner />

        {/* 2. Abilities */}
        <section id="abilities" className="article">
          <h2>Sariel Abilities</h2>

          <h3>Exodus of Thorns</h3>
          <p>
            Sariel&apos;s signature ability shoots out parasitic thorns that{" "}
            <strong>lock onto nearby enemies and spread Curse</strong> between
            them. It&apos;s a ranged Curse applicator — you tag enemies from
            safety, then rush in for melee while they&apos;re cursed and
            can&apos;t hurt you. The downside: sometimes the bulk of the thorns
            concentrates on your locked target instead of spreading evenly,
            leaving other enemies curse-free. It also <strong>applies Pain to
              Sariel</strong> when cast, but you can clear that Pain through
            melee attacks afterward (or upgrade your passives so ranged
            attacks clear it too).
          </p>

          <h3>Pain Mechanic</h3>
          <p>
            Pain is Sariel&apos;s unique sustain system. Any damage he takes —
            from any source — creates a <strong>white bar</strong> on his
            health. That white bar is not lost HP; it&apos;s{" "}
            <strong>recoverable</strong>. Landing melee attacks regenerates the
            white portion back into real health. The catch: if you take
            another hit before you&apos;ve recovered the Pain, the white bar is
            overwritten and permanently lost. This rewards an aggressive,
            counter-punching playstyle — get hit, hit back immediately, and
            walk away with most of your health intact.
          </p>

          <h3>Purge</h3>
          <p>
            Purge changes how incoming damage works. When Sariel has{" "}
            <strong>no Pain</strong>, 50% of any damage he takes is converted
            into Pain (the recoverable white bar) instead of permanent health
            loss. At max upgrade, this goes up to <strong>100%</strong> —
            meaning every hit becomes fully recoverable if you counterattack
            fast enough. Purge also makes Sariel <strong>dodge faster at max
              Pain</strong>, but reaching max Pain is extremely difficult in
            practice, so most players won&apos;t build around this part of the
            ability.
          </p>
        </section>

        {/* 3. Skill Tree */}
        <section id="skill-tree" className="article">
          <h2>Sariel Shell Abilities (Skill Tree)</h2>
          <p>
            Sariel has <strong>12 passive abilities</strong>, and they split
            into two distinct builds. Pick one path and commit — mixing them
            dilutes both.
          </p>

          <SkillTreeTable nodes={SKILL_TREE} />

          <div className="card" style={{ marginTop: "2rem" }}>
            <h3 style={{ marginTop: 0 }}>Two Build Paths — Pick One</h3>
            <p>
              Sariel&apos;s skill tree splits into two clear directions.{" "}
              <strong>Commit to one.</strong>
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Thornfall Damage Build</strong> — turns Exodus of
                Thorns into a ranged nuke. Take Growth, Synthesis, Torment,
                and Thornfall. Spam Exodus from range, use melee only to
                regenerate Resolve. High damage ceiling but frustrated by
                Thornfall&apos;s poor tracking (&asymp;50% miss rate).
              </li>
              <li>
                <strong>Entitlement Break Build</strong> — focuses on Curse
                uptime and Pain clearing for Trauma explosions. Take Scourge,
                Synthesis, Frailty, Entitlement, Reversal, and Restoration.{" "}
                <strong>Do NOT take Reaper</strong> (ranged Pain clear wastes
                the Entitlement trigger). More reliable and recommended for
                early game before Thornfall is available.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Weapons */}
        <section id="weapons" className="article">
          <h2>Best Weapons for Sariel</h2>

          <h3>The Iconoclast (Melee) — Strongly Recommended</h3>
          <p>
            The Iconoclast is an Ultra Greatsword with{" "}
            <strong>S Strength / E Dexterity</strong> scaling and Slash +
            Strike damage, found in a chest behind the barn in the farming
            area of Sunken Village after defeating the Wandering Shepherd. Two
            reasons it&apos;s perfect for this build:
          </p>
          <ol className="list-decimal pl-6">
            <li>
              <strong>It can be infused with Curse.</strong> Sometimes Exodus
              of Thorns gets an enemy&apos;s Curse bar to 80% but not fully
              cursed — one swing of the Iconoclast pushes them over the edge,
              negating their next attack and letting you safely keep swinging.
              This is a huge consistency boost.
            </li>
            <li>
              <strong>Low stagger damage actually works in your favor.</strong>{" "}
              The Iconoclast doesn&apos;t stagger enemies as easily as other
              weapons, meaning on your second or third swing the enemy will
              often poise through and start attacking you — but if they&apos;re
              cursed, <strong>it doesn&apos;t matter</strong>. You can just
              keep swinging because their attack will deal zero damage and hurt
              them instead. The weapon&apos;s weakness becomes irrelevant when
              enemies are cursed.
            </li>
          </ol>

          <h3>Ranged Weapon — Flexible</h3>
          <p>
            You&apos;ll use most of your Resolve on Exodus of Thorns anyway, so
            the ranged weapon slot is flexible. The <strong>Forgotten
              Crossbow</strong> works well for picking off single targets at
            range with high damage. I experimented with the{" "}
            <strong>Cursed Child</strong> ranged weapon since it can be
            infused with Curse for ranged application, but it&apos;s too weak
            in terms of damage and less reliable overall than just using Exodus
            of Thorns — it didn&apos;t make sense to keep it.
          </p>
          <p>
            A fun option if you have the <strong>Summoning Stone</strong>{" "}
            (acquired quite late in the game): slot it into your ranged weapon
            and use Resolve to <strong>summon up to two recently slain
              enemies</strong> to fight for you, each attacking up to five times.
            It&apos;s not optimal, but it&apos;s incredibly fun and gives you
            something to do with your Resolve besides spamming Exodus.
          </p>
        </section>

        {/* 5. Tarstones */}
        <section id="tarstones" className="article">
          <h2>Recommended Tarstones</h2>

          <h3>Melee Weapon Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Zealot Stone</strong> — gives two fast attacks on the
              final swing instead of one slower attack, and generates{" "}
              <strong>150% Resolve on that last hit</strong>. Since you&apos;re
              swinging through enemy attacks (they&apos;re cursed), this works
              perfectly, and the bonus Resolve fuels more Exodus of Thorns
              casts — especially important for the Thornfall damage build.
            </li>
            <li>
              <strong>Cursed Blood Stone</strong> — infuses the weapon with
              Curse so every swing applies it. Nice to have at permanent, but{" "}
              <strong>not as urgent</strong> as in other builds since Exodus
              handles most Curse application. Eventually you&apos;ll want it
              maxed for consistency.
            </li>
            <li>
              <strong>Shriek Stone</strong> (weapon skill) — I have this
              slotted but honestly you can put whatever you want here. I rarely
              spend Resolve on the weapon skill with this build.
            </li>
          </ul>

          <h3>Ranged Weapon Stones</h3>
          <p>
            <em>
              Pick whatever makes sense — you&apos;ll rarely use ranged attacks
              with this build since Exodus of Thorns covers ranged damage and
              Curse application.
            </em>
          </p>

          <h3>Support Stones</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Auspicious Stone</strong> — increased melee critical
              chance. A staple on nearly every build.
            </li>
            <li>
              <strong>Hallowed Shell Stone</strong> — increased melee critical
              damage. Paired with Auspicious for the critical hit package.
            </li>
            <li>
              <strong>Berserker Stone</strong> — increased melee damage as
              health drops. Your health shouldn&apos;t drop often thanks to
              Curse protection, so this is replaceable. Swap in{" "}
              <strong>Retribution Stone</strong> if you find yourself
              riposting more often, or <strong>Devout Stone</strong> for bonus
              Resolve when defeating enemies with a ranged weapon.
            </li>
            <li>
              <strong>Bulwark Stone</strong> — up to 20% damage reduction for
              4 seconds after defeating an enemy. Sariel has
              middle-of-the-road HP, so this extra mitigation helps when Curse
              wears off and enemies are still attacking.
            </li>
          </ul>
        </section>

        {/* 6. Final Tips */}
        <section id="tips" className="article">
          <h2>Final Tips</h2>
          <ul className="list-disc pl-6">
            <li>
              Sariel lives and dies by <strong>Curse uptime</strong>. Always
              open with Exodus of Thorns to curse enemies before engaging in
              melee — never run in raw.
            </li>
            <li>
              The <strong>Pain mechanic rewards aggression</strong>. When you
              take a hit, don&apos;t back off — hit back immediately to
              recover the white bar before another attack overwrites it.
            </li>
            <li>
              For the Entitlement break build: Curse the boss, run in, melee
              to clear Pain, trigger Trauma at point-blank range.{" "}
              <strong>Do not clear Pain at range</strong> or the explosion
              misses.
            </li>
            <li>
              Do not take <strong>Reaper</strong> if you&apos;re running
              Entitlement — ranged Pain clear wastes your Trauma trigger.
            </li>
            <li>
              <strong>Scourge</strong> and <strong>Synthesis</strong> are
              universally mandatory no matter which build you choose. Max them
              both.
            </li>
            <li>
              <strong>Thornfall</strong> is powerful but frustrating — expect
              roughly half your thorns to miss due to poor tracking. It
              desperately needs a patch.
            </li>
            <li>
              I&apos;ve completely ignored the <strong>max Pain</strong> aspect
              of Sariel&apos;s kit — it&apos;s too difficult to reach and
              maintain with his current mechanics. Hopefully a future patch
              buffs this so you can lean into it more.
            </li>
          </ul>
          <p>
            This wraps up all our build guides for Mortal Shell 2 — one for
            every shell in the game. If any of these builds get updated with
            future patches, I&apos;ll revisit them.
          </p>
        </section>

        <BannerAd />

        {/* 7. FAQ（与 FAQPage 结构化数据一一对应） */}
        <section id="faq" className="article">
          <h2>Sariel FAQ</h2>
          <div className="faq">
            <h3>How does Sariel&apos;s Curse mechanic work in Mortal Shell 2?</h3>
            <p>
              Sariel&apos;s Curse makes the next enemy attack deal{" "}
              <strong>zero damage</strong> to you — the enemy&apos;s attack is
              negated and they take damage from their own strike instead. Apply
              Curse with <strong>Exodus of Thorns</strong> at range, then
              safely rush in for melee. Keeping Curse active on enemies is the
              key to Sariel&apos;s tankiness: he has middling HP but becomes
              far harder to kill than he first appears as long as enemies stay
              cursed.
            </p>

            <h3>Which Sariel build is better — Thornfall damage or Entitlement break?</h3>
            <p>
              It depends on your playstyle. The <strong>Thornfall damage
                build</strong> turns Exodus of Thorns into a ranged nuke with
              splash damage, but the thorns come from the sky and roughly 50%
              miss — it&apos;s strong when it works but frustratingly
              inconsistent. The <strong>Entitlement break build</strong>{" "}
              focuses on Curse uptime and Pain clearing to trigger 10 Trauma
              stacks for break damage over time, which is more reliable and
              recommended early on before Thornfall becomes available at the
              bottom of the skill tree. <strong>Pick one path and
                commit</strong> — the two don&apos;t mix well.
            </p>

            <h3>What Tarstones should I use with Sariel in Mortal Shell 2?</h3>
            <p>
              For the melee weapon: <strong>Zealot Stone</strong> (two fast
              attacks on the final swing + 150% Resolve gain to fuel more
              Exodus of Thorns casts) and <strong>Cursed Blood Stone</strong>{" "}
              (infuse the weapon with Curse so every swing applies it). Support
              stones: <strong>Auspicious Stone</strong> and{" "}
              <strong>Hallowed Shell Stone</strong> for crit chance and crit
              damage (staples on nearly every build),{" "}
              <strong>Berserker Stone</strong> for extra damage as health drops
              (replaceable with Retribution Stone if you riposte often), and{" "}
              <strong>Bulwark Stone</strong> for damage reduction after
              defeating an enemy.
            </p>
          </div>
        </section>

        <BuildNav current="sariel" />

        <a href="/" className="article-back">
          &larr; Back to Home
        </a>
      </main>
    </>
  );
}
