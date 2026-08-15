import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";
import MapCanvasWrapper from "./MapCanvasWrapper";

export const metadata: Metadata = {
  title: "Mortal Shell 2 Interactive Map – All Locations & Routes",
  description:
    "Interactive Mortal Shell 2 map with all Shell, boss, Tarstone, Beacon and collectible locations. Plan routes and find hidden items.",
  alternates: {
    canonical: pageURL("/map"),
  },
  openGraph: {
    title: "Mortal Shell 2 Interactive Map – All Locations & Routes",
    description:
      "Interactive Mortal Shell 2 map with every Shell, boss, Tarstone, Beacon, and collectible location.",
    url: pageURL("/map"),
    images: ["/assets/map-og.webp"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Map Locations",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hardened Shell",
      url: pageURL("/shells/#hardened"),
      item: {
        "@type": "Place",
        name: "Temple of the Iron Path",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.5,
          longitude: -0.09,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "First Boss Arena",
      url: pageURL("/bosses/#first"),
      item: {
        "@type": "Place",
        name: "First Boss Arena",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.505,
          longitude: -0.08,
        },
      },
    },
  ],
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
        text: "Mortal Shell 2 features multiple areas including Shell locations, boss arenas, Tarstone shrines, Beacons, and hidden collectibles. Our map covers all of them.",
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
        text: "The map will be updated on launch day, August 20, 2026. Beta locations are already marked, and the full open world will be mapped within the first week of release.",
      },
    },
  ],
};

export default function MapPage() {
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
        <span className="eyebrow">Explore Every Corner</span>
        <h1>Mortal Shell 2 Interactive Map</h1>
        <span className="title-rule" />

        <p className="lede">
          Explore every Mortal Shell 2 location with our interactive map: all
          Shells, bosses, Tarstones, Beacons, and hidden collectibles marked.
          Click any marker for details, or use the text list below to jump
          straight to what you need.
        </p>

        <div className="map-tips">
          Marked locations are placeholders held against known beta and
          trailer footage. Real coordinates and a full overworld tile layer
          will be added once the game opens to the public on August 20,
          2026.
        </div>

        {/* 交互地图（CSR，用户用） */}
        <div className="map-frame">
          <MapCanvasWrapper />
          <noscript>
            <img
              src="/assets/map-static.webp"
              alt="Mortal Shell 2 interactive map showing all Shell, boss, Tarstone, and Beacon locations"
              width="800"
              height="450"
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
            becomes available. Beta locations are already marked. The full
            open world will be mapped within the first week of launch on
            August 20, 2026.
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
            Here is the exploration order we recommend based on beta content
            and pre-release footage:
          </p>
          <ol className="loc-list">
            <li>
              <strong>Prologue area.</strong> You start as Harros, the
              balanced Shell. The prologue is linear and cannot be skipped.
              You will lose Harros after the Tar Golem boss fight, so use this
              time to learn the combat system: parrying, dodging, and the
              stamina-free attack chains that are new to the sequel.
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
              Village. Tiel the Acolyte, the second Shell available in the beta, is
              located in the northeast of the village near the Ritual
              Grounds dungeon. Grab Tiel the Acolyte before attempting the Ritual
              Grounds, because his speed and dodge-focused kit will help
              you against the enemies inside.
            </li>
            <li>
              <strong>Ritual Grounds dungeon.</strong> This is the first
              major dungeon after the prologue. The enemies here hit hard
              and fast. If you are still using Harros, consider switching to
              Tiel the Acolyte for his mobility, or come back later with Eredrim the Venerable to
              tank through the damage.
            </li>
            <li>
              <strong>Open world exploration.</strong> After clearing the
              Ritual Grounds, the world opens up. We recommend heading to
              the Temple of the Iron Path next to claim the Hardened Shell,
              then circling back to any boss arenas you skipped.
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
            Currently confirmed locations come from the closed beta and
            official trailers. After launch on August 20, 2026, we will
            expand this Mortal Shell 2 location map to cover the full open
            world, including every dungeon, hidden room, and optional boss.
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
              <a href="/shells/harros">Harros, the Vassal</a>{" "}
              <span className="loc-note">
                : found in the prologue, right after your first meeting with
                the UnderMether. Interact with the body in the center of the
                chamber. He is lost after the Tar Golem boss fight in the
                beta build, so make sure to learn the combat basics while
                you have him.
              </span>
            </li>
            <li>
              <a href="/shells/tial">Tiel the Acolyte</a>{" "}
              <span className="loc-note">
                : found in Mushroom Village, northeast area, near the
                Ritual Grounds dungeon. Zhirelle at Marrow Keep points you
                toward Widow&apos;s Overlook, which leads down to the
                village. Tiel the Acolyte is the second Shell available in the beta and
                the best choice for players who prefer speed over
                durability.
              </span>
            </li>
            <li>
              <a href="/shells/eredirm">Eredirm the Venerable</a>{" "}
              <span className="loc-note">
                : hidden somewhere in the open world. The exact area has not
                been revealed yet. Like all Shells, you claim him by finding
                and inhabiting the body. Check back after launch for the
                precise location.
              </span>
            </li>
            <li>
              <a href="/shells/sester">Sester Mask</a>{" "}
              <span className="loc-note">
                : confirmed via official footage but the in-game location is
                not yet known. The pale smiling mask and branch-crown make
                this Shell easy to identify once you spot it. Location will
                be mapped after release.
              </span>
            </li>
            <li>
              <a href="/shells/blackbeard">Black Beard</a>{" "}
              <span className="loc-note">
                : community-identified by his distinctive black beard and
                warrior silhouette. Official location pending. We will add
                the marker to the map as soon as the game ships.
              </span>
            </li>
            <li>
              <a href="/shells/dommymommy">Dommy Mommy</a>{" "}
              <span className="loc-note">
                : community-identified Shell. Location pending. Check the
                interactive map after launch day for the exact spot.
              </span>
            </li>
            <li>
              <a href="/shells/skeletonman">Skeleton Man</a>{" "}
              <span className="loc-note">
                : community-identified by his skeletal warrior silhouette.
                Location pending. Will be added to the map on launch day.
              </span>
            </li>
            <li>
              <a href="/shells/blackmage">Black Mage</a>{" "}
              <span className="loc-note">
                : community-identified as a sorcery or elemental archetype.
                Location pending. Will be mapped after release.
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
                heavy attacks that teach you the dodge and parry timing. You
                fight it as Harros, so focus on learning the patterns rather
                than memorizing a specific strategy.
              </span>
            </li>
            <li>
              <a href="/bosses/#ritual-grounds">Ritual Grounds boss</a>{" "}
              <span className="loc-note">
                : found at the end of the Ritual Grounds dungeon, northeast
                of Mushroom Village. The nearest Tarstone shrine is inside
                the dungeon entrance. Recommended Shell: Tiel the Acolyte for his dodge
                mobility, or Eredrim the Venerable if you prefer to absorb hits and trade.
              </span>
            </li>
            <li>
              <a href="/bosses/#first">First Boss Arena</a>{" "}
              <span className="loc-note">
                : a separate arena location confirmed in beta footage. The
                nearest Beacon is marked on the interactive map above.
                Recommended Shell depends on the boss type, which we will
                document in detail after launch.
              </span>
            </li>
          </ul>
          <p>
            More boss locations will be added as they are discovered after
            launch. The full{" "}
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
            <a href="/builds/">Mortal Shell 2 builds</a> route. Beacons are
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
                Temple of the Iron Path Tarstone: found after the second
                shrine in the temple area. This one is easy to miss if you
                rush through the temple corridor without checking the side
                rooms.
              </span>
            </li>
            <li>
              <span className="loc-note">
                Beacons: at least three Beacon locations are confirmed in
                the beta. They are marked in blue on the interactive map.
                The full Beacon network will be mapped on launch day,
                August 20, 2026.
              </span>
            </li>
          </ul>
          <p>
            Tarstone upgrades are permanent and carry over between Shells, so
            it is worth finding every shrine even if you do not plan to use
            the resources immediately.
          </p>
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
                Overlook. You need Tiel the Acolyte&apos;s Shadow Strike to phase
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
                Temple side passage: an optional path in the Temple of the
                Iron Path that leads to a small reward chest. The passage
                is behind a locked door that opens with a specific item
                found later in the game.
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
            The beta contains a handful of locations across two areas:
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
            The map will be updated on launch day, August 20, 2026. Beta
            locations are already marked. The full open world will be
            mapped within the first week of release.
          </p>

          <p className="article-back">
            <a href="/">Back to Mortal Shell 2 home</a>
          </p>
        </section>
      </main>
    </>
  );
}
