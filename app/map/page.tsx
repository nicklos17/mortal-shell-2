export const dynamic = 'force-static';
import type { Metadata } from "next";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import MapCanvasWrapper from "./MapCanvasWrapper";
import AdBanner from "@/components/AdBanner";

const title = "Mortal Shell 2 Interactive Map – All Locations";
const description = "Interactive map with every Shell, boss, Tarstone &amp; Beacon location in Mortal Shell 2, plus hidden collectibles and a recommended route order.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageURL("/map"),
  },
  openGraph: {
    title,
    description,
    url: pageURL("/map"),
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mortalshell",
    title,
    description,
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Map",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a Mortal Shell 2 map?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, use our Mortal Shell 2 map to find every Shell, boss, Tarstone and Beacon. The interactive map above shows all confirmed locations, and the text lists below cover every collectible spot in detail.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an interactive map for Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our interactive map shows all Shell locations, bosses, Tarstones, Beacons, and hidden collectibles in Mortal Shell 2.",
      },
    },
    {
      "@type": "Question",
      name: "How many locations are in Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 spans multiple areas including Marrow Keep, Mushroom Village, and more dungeons, boss arenas, and hidden areas beyond.Our map covers all confirmed locations and is updated continuously.",
      },
    },
    {
      "@type": "Question",
      name: "Can I plan a route through Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, use our interactive map to plan your route. Click markers for details and use the text list below to find specific locations.",
      },
    },
    {
      "@type": "Question",
      name: "When will the map be fully updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The map is updated continuously as we play through the full release. Confirmed locations are marked, and new spots are added every day.",
      },
    },
    {
      "@type": "Question",
      "name": "Where are all the Gates in Mortal Shell 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All Gates are marked on our interactive map. Jump to the Gates section for the full list, or enable the Gates category in the map's filter sidebar to see every Gate location highlighted."
      }
    },
    {
      "@type": "Question",
      "name": "Where are the Key Items in Mortal Shell 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key Items (Glands, keys, and special relics) are tracked on our map under the Key Items category. Enable it in the filter sidebar to see every Key Item location in one pass."
      }
    },
    {
      "@type": "Question",
      "name": "Where are all the Weapons and Sidearms in Mortal Shell 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Weapon and Sidearm location is marked on our interactive map. Use the Weapons and Sidearms anchors, or toggle their categories in the filter sidebar to plan your loadout."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find Map Fragments and Corrupted Statues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Map Fragments and Corrupted Statues are rare collectibles marked on our map. Enable their categories in the filter sidebar to track down every fragment and statue for completion."
      }
    }
  ],
};

export default function MapPage() {
  return (
    <>
      {/* High-priority preload for the 600KB base map image. Without this,
          base.webp only starts downloading AFTER Leaflet + MapCanvas +
          map-markers are downloaded, parsed, hydrated, and useEffect ran —
          typically ~1-4 seconds after HTML reaches the browser. This link
          fires during HTML head parsing, shaving ~1-3s off time-to-paint.
          fetchpriority="high" guarantees the browser does NOT deprioritise
          it vs. hero images / above-the-fold assets. */}
      <link
        rel="preload"
        as="image"
        href="/assets/images/map/base.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="container">
        <span className="eyebrow">Explore Every Corner</span>
        <h1>Mortal Shell 2 Map</h1>
        <span className="title-rule" />

        <p className="lede">
          Explore every Mortal Shell 2 location with our interactive map: all
          Shells, bosses, Tarstones, Beacons, and hidden collectibles marked.
          Click any marker for details, or use the text list below to jump
          straight to what you need.
        </p>

        {/* 交互地图（CSR，用户用） */}
        <div className="map-frame">
          <MapCanvasWrapper />
          <noscript>
            <img
              src="/assets/images/map/base.webp"
              alt="Mortal Shell 2 interactive map showing all Shell, boss, Tarstone, and Beacon locations"
              width="1200"
              height="1200"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </noscript>
        </div>

        <section>
          <h2>How to use this interactive map</h2>
          <p>
            The Mortal Shell 2 interactive map above shows every confirmed
            location in the game. Each marker is color-coded by type: gold for
            Shells, red for boss arenas, blue for Tarstone shrines, and white
            for Beacons. Click any marker to see the location name and a short
            description of what you will find there.
          </p>
          <p>
            If you are on a mobile device, tap a marker to expand its info
            popup. You can also pinch to zoom in and out. The map supports
            panning by dragging with one finger on touch screens, or by
            clicking and dragging with a mouse on desktop.
          </p>
          <p>
            Below the interactive map you will find text versions of every
            location list. These are useful if you want to quickly look up a
            specific spot without loading the map, or if you are on a slow
            connection. Each entry in the text list links to the relevant
            guide page where you can read more about that Shell, boss, or
            item.
          </p>
          <p>
            We update the Mortal Shell 2 interactive map as new information
            becomes available.
          </p>
        </section>

        <section>
          <h2>Mortal Shell 2 route map: best exploration order</h2>
          <p>
            Planning your route through Mortal Shell 2 saves time and reduces
            backtracking. The game opens with a linear prologue that teaches
            basic mechanics, then opens into an interconnected world where you
            choose where to go next. A smart route map helps you grab the
            best Shells early and avoid wandering into a boss arena
            underprepared.
          </p>
          <p>
            Here is the exploration order we recommend based on our playthrough of the full game:
          </p>
          <ol className="loc-list">
            <li>
              <strong>Prologue area.</strong> The prologue is linear and
              cannot be skipped. Use this section to learn the combat
              system: parrying, dodging, and the stamina-free attack chains
              that are new to the sequel.
            </li>
            <li>
              <strong>Marrow Keep.</strong> After the prologue, you arrive at
              Marrow Keep. Talk to Zhirelle, who directs you toward Widow&apos;s
              Overlook. This is your first branching point. Do not rush
              through Marrow Keep without exploring its side corridors, as
              the first Tarstone shrine is hidden in a side room.
            </li>
            <li>
              <strong>Widow&apos;s Overlook to Mushroom Village.</strong>
              Follow the path from Widow&apos;s Overlook down into Mushroom
              Village. Tiel, the second Shell you can pick up, is located in
              the northeast of the village near the Ritual Grounds dungeon.
              Grab Tiel before attempting the Ritual Grounds, because his
              speed and dodge-focused kit will help
              you against the enemies inside.
            </li>
            <li>
              <strong>Ritual Grounds dungeon.</strong> This is the first
              major dungeon after the prologue. The enemies here hit hard
              and fast. Switch to Tiel for his mobility, or come back
              later with Eredrim to tank through the damage.
            </li>
            <li>
              <strong>Open world exploration.</strong> After clearing the
              Ritual Grounds, the world opens up. Head to the next area
              marked on the interactive map to claim your next Shell, then
              circle back to any boss arenas you skipped.
            </li>
          </ol>
          <p>
            Use the Mortal Shell 2 route map above to visualize this path.
            You can plan your route by clicking through the markers and
            reading the descriptions. The route order is not forced: you can
            tackle areas in any order after the prologue. But following this
            sequence gives you two Shells and at least one Tarstone upgrade
            before the first difficult boss.
          </p>
        </section>

        <section>
          <h2>Mortal Shell 2 location map: every collectible spot</h2>
          <p>
            The Mortal Shell 2 location map below lists every confirmed
            collectible and point of interest. Each entry includes the area
            name, how to reach it, and what you get for finding it. We are
            adding new locations as they are confirmed.
          </p>
          <p>
            Confirmed locations are marked, and we keep expanding this
            Mortal Shell 2 location map to cover the full open world,
            including every dungeon, hidden room, and optional boss, as
            we verify them in the full release.
          </p>
        </section>

        <section>
          <h2>All Shell locations</h2>
          <p>
            Shells are the bodies you inhabit in Mortal Shell 2. Each Shell
            has its own stat spread, abilities, and playstyle. Finding them
            early gives you more options for boss fights and exploration.
            Here are the confirmed Shell locations:
          </p>
          <ul className="loc-list">
            <li>
              <a href="/shells/proxima">Proxima</a>{" "}
              <span className="loc-note">
                : slightly northeast from the Blackridge Pass Beacon.
              </span>
            </li>
            <li>
              <a href="/shells/tiel">Tiel</a>{" "}
              <span className="loc-note">
                : from the Widow&apos;s Overlook Beacon, head southeast to
                reach the Graveyard.
              </span>
            </li>
            <li>
              <a href="/shells/gragu">Gragu</a>{" "}
              <span className="loc-note">
                : pick up the Heart of Vatra from the temple at the far east
                side of the map, then give the Heart to Gragu in the tavern.
              </span>
            </li>
            <li>
              <a href="/shells/eredrim">Eredrim</a>{" "}
              <span className="loc-note">
                : defeat the boss at the center of the Citadel of Penance.
              </span>
            </li>
            <li>
              <a href="/shells/smert">Smert</a>{" "}
              <span className="loc-note">
                : fill up the 3 small pools of blood near the Outskirts of
                Nochte Beacon by defeating enemies in the pools or by
                offering your own blood.
              </span>
            </li>
            <li>
              <a href="/shells/sariel">Sariel</a>{" "}
              <span className="loc-note">
                : defeat Sariel at the shown location, then follow him into
                the dungeon. At the final encounter arena, destroy the 4
                stone tablets or he will keep respawning.
              </span>
            </li>
            <li>
              <a href="/shells/lazlo">Lazlo</a>{" "}
              <span className="loc-note">
                : behind the miniboss in the Royal Crypt of Mammon.
              </span>
            </li>
            <li>
              <a href="/shells/genessa">Genessa</a>{" "}
              <span className="loc-note">
                : first get the Sester&apos;s Censer from the dungeon near
                the Athen, then take it to Genessa in Marrow Keep.
              </span>
            </li>
          </ul>
          <p>
            For full details on each Shell&apos;s abilities, playstyle, and
            tips, visit the{" "}
            <a href="/shells">Shells guide</a>. The guide covers all 8
            confirmed Shells with stats, signature abilities, and
            recommendations for which Shell to use against each boss.
          </p>
        </section>

        <section>
          <h2>Boss locations</h2>
          <p>
            Boss arenas in Mortal Shell 2 are spread across the open world.
            Some are tied to main story progression, while others are
            optional and hidden off the beaten path. Here are the confirmed
            boss locations:
          </p>
          <ul className="loc-list">
            <li>
              <a href="/bosses/#tar-golem">Tar Golem</a>{" "}
              <span className="loc-note">
                : prologue boss. This fight is unavoidable and serves as the
                game&apos;s first real combat test. The Tar Golem uses slow,
                heavy attacks that teach you the dodge and parry timing.
                Focus on learning the patterns rather than memorizing a
                specific strategy.
              </span>
            </li>
            <li>
              <a href="/bosses/#ritual-grounds">Ritual Grounds boss</a>{" "}
              <span className="loc-note">
                : found at the end of the Ritual Grounds dungeon, northeast
                of Mushroom Village. The nearest Tarstone shrine is inside
                the dungeon entrance. Recommended Shell: Tiel for his dodge
                mobility, or Eredrim if you prefer to absorb hits and trade.
              </span>
            </li>
            <li>
              <a href="/bosses/#first">First Boss Arena</a>{" "}
              <span className="loc-note">
                : a separate arena location confirmed in the full release. The
                nearest Beacon is marked on the interactive map above. Recommended
                Shell depends on the boss type — we are documenting each
                encounter in detail.
              </span>
            </li>
          </ul>
          <p>
            <a href="/bosses">boss guide</a> covers strategies, recommended
            Shells, and item drops for each boss in the game.
          </p>
        </section>

        <section>
          <h2>Tarstones &amp; Beacons</h2>
          <p>
            Tarstones are upgrade shrines where you spend resources to
            improve your Shell&apos;s abilities and stats. They also serve
            as respec stations — at any shrine you can reallocate stat
            points to rebuild a setup from scratch, which is why Tarstone
            positions matter when planning your{" "}
            <a href="/builds">Mortal Shell 2 builds</a> route. Beacons are
            fast-travel points that let you move between discovered areas
            without walking back. Both are marked on the interactive map
            above.
          </p>
          <p>
            Here is what we know so far:
          </p>
          <ul className="loc-list">
            <li>
              <span className="loc-note">
                Marrow Keep Tarstone: found in a side room off the main
                corridor. This is the first Tarstone you encounter and is
                unmissable if you explore thoroughly.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Ritual Grounds Tarstone: located just inside the dungeon
                entrance. Activate it before proceeding deeper into the
                dungeon, because dying without a active Tarstone means
                restarting from the last Beacon.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Nearby shrine Tarstone: found after the second shrine in the
                temple area. This one is easy to miss if you rush through
                the corridor without checking the side rooms.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Beacons: three Beacon locations are confirmed so far. They are
                marked in blue on the interactive map. The full Beacon network
                is being mapped as we explore the open world.
              </span>
            </li>
          </ul>
          <p>
            Tarstone upgrades are permanent and carry over between Shells, so
            it is worth finding every shrine even if you do not plan to use
            the resources immediately.
          </p>
        </section>

        <section id="location-types">
          <h2>All location types on the Mortal Shell 2 map</h2>
          <p>The Mortal Shell 2 map marks <strong>12 confirmed location types</strong>. Use the anchors below to jump straight to the ones you need, or enable each category in the map's filter sidebar to highlight its markers.</p>

          <h3 id="beacons">Beacons</h3>
          <p>Beacons are fast-travel points scattered across Fallgrim and the deeper areas. Touching a Beacon unlocks it as a quick-travel destination, letting you bounce between regions without trekking back. Light every Beacon you pass — they are the backbone of efficient exploration.</p>

          <h3 id="gates">Gates</h3>
          <p>Gates are sealed doorways that block progression until you meet a specific condition — usually defeating a boss or using a Gland. Each Gate leads to a new area or a major shortcut. If a path is blocked, the Gate's location type marks exactly where to return once you have the key it needs.</p>

          <h3 id="shells">Shells</h3>
          <p>Shells are the wearable forms you inhabit in Mortal Shell. Each Shell has its own stats, unique abilities, and a distinct playstyle — from the balanced Tiel to the tanky Eredrim. Collecting a Shell unlocks that body permanently and changes how you approach every fight.</p>

          <h3 id="weapons">Weapons</h3>
          <p>Weapons (known as weapons in-game) are your primary melee tools. Each weapon in Mortal Shell 2 has a distinct moveset, reach, and weight class. Some are found in the world, others are tied to specific locations or quests. Pick the one that matches your build's focus.</p>

          <h3 id="sidearms">Sidearms</h3>
          <p>Sidearms are ranged secondary weapons that complement your main melee setup. They give you a way to poke enemies from a safe distance, trigger switches, or stagger foes before you close in. A good sidearm rounds out any build.</p>

          <h3 id="dungeons">Dungeons</h3>
          <p>Dungeons are the major instanced areas of Mortal Shell 2 — self-contained zones with their own enemies, loot, and usually a boss at the end. Clearing a Dungeon yields powerful rewards and often the Glands needed to open later Gates.</p>

          <h3 id="bone-gates">Bone Gates</h3>
          <p>Bone Gates are special Gates that open only with specific items or after completing a particular objective, distinct from standard Gates. They guard some of the game's most valuable secrets and are easy to walk past — mark them and come back prepared.</p>

          <h3 id="corrupted-statues">Corrupted Statues</h3>
          <p>Corrupted Statues are cursed shrines that lock away part of their reward until you cleanse them. Interacting without the right item can trigger a fight or a curse. Cleansing every Corrupted Statue is often tied to trophy and completion objectives.</p>

          <h3 id="map-fragments">Map Fragments</h3>
          <p>Map Fragments are collectible pieces that, when assembled, reveal hidden locations on your in-game map. Finding them is part of the completionist loop — each fragment fills in a previously blank section of the world.</p>

          <h3 id="tarstones">Tarstones</h3>
          <p>Tarstones are the game's core resource for building and upgrading. Infusing Tarstone fragments into your Shell, weapon, or sidearm shapes your build's direction. Tarstone shrines are marked on the map and are worth hitting during every run.</p>

          <h3 id="key-items">Key Items</h3>
          <p>Key Items are quest and progression items you carry in your inventory — items like Glands, keys, and special relics. They unlock Gates, advance side quests, and are required to reach certain endgame areas. Track which Key Items you still need to avoid backtracking.</p>

          <h3 id="enemies">Enemies and collectibles</h3>
          <p>Beyond fixed points, the map also tracks notable enemy encounters and hidden collectibles. These include lootables, lore items, and rare spawns. Toggle these categories in the filter to plan a clean sweep of an area.</p>
        </section>

        <section>
          <h2>Hidden collectibles &amp; shortcuts</h2>
          <p>
            Mortal Shell 2 hides items, shortcuts, and optional areas
            throughout its open world. Some are tucked behind illusory walls
            or require a specific Shell ability to access. Here is what we
            have confirmed so far:
          </p>
          <ul className="loc-list">
            <li>
              <span className="loc-note">
                Mushroom Village hidden room: a small chamber behind the
                waterfall in the village&apos;s lower section. Contains a
                consumable item and a shortcut back to Widow&apos;s
                Overlook. You need Tiel&apos;s Shadow Strike to phase
                through the wall.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Marrow Keep shortcut: a one-way drop from the upper corridor
                back to the entrance. Saves time when returning from the
                Tarstone shrine. Look for a broken railing near the
                library room.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Temple side passage: an optional path behind the temple that
                leads to a small reward chest.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Hidden collectibles and shortcut routes will be fully mapped
                after release. If you find something we missed, let us know
                via the{" "}
                <a href="/contact">contact page</a>.
              </span>
            </li>
          </ul>
        </section>

        <AdBanner />

        <section>
          <h2>Frequently asked questions</h2>
          <h3>Is there a Mortal Shell 2 map?</h3>
          <p>
            Yes, use our Mortal Shell 2 map to find every Shell, boss,
            Tarstone and Beacon. The interactive map above shows all
            confirmed locations, and the text lists below cover every
            collectible spot in detail. We update the map with new markers
            as the community discovers them.
          </p>
          <h3>Is there an interactive map for Mortal Shell 2?</h3>
          <p>
            Yes. The map at the top of this page is fully interactive. You
            can click markers, zoom in and out, and pan across the world.
            Each marker opens a popup with the location name and a short
            description.
          </p>
          <h3>How many locations are in Mortal Shell 2?</h3>
          <p>
            The map currently covers a handful of locations across two areas:
            Marrow Keep and Mushroom Village. The full game is expected to
            have many more, including additional dungeons, boss arenas, and
            hidden areas. Our map will cover all of them.
          </p>
          <h3>Can I plan a route through Mortal Shell 2?</h3>
          <p>
            Yes. Use the route map section above to see our recommended
            exploration order. You can also click through the markers on
            the interactive map to build your own route.
          </p>
          <h3>When will the map be fully updated?</h3>
          <p>
            The map is updated continuously as we play through the full
            release. Confirmed locations are marked, and new spots are
            added every day.
          </p>

          <p className="article-back">
            <a href="/">Back to Mortal Shell 2 home</a>
          </p>
        </section>
      </main>
    </>
  );
}
