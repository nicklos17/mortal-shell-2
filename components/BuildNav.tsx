import Link from "next/link";

type BuildEntry = {
  slug: string;
  name: string;
  tagline: string;
};

const BUILDS: readonly BuildEntry[] = [
  { slug: "proxima", name: "Proxima", tagline: "Starter Build" },
  { slug: "tiel", name: "Tiel", tagline: "Starter Build" },
  { slug: "eredrim", name: "Eredrim", tagline: "Frost Breaker" },
  { slug: "gragu", name: "Gragu", tagline: "Brawler" },
  { slug: "genessa", name: "Genessa", tagline: "Phantom Summoner" },
  { slug: "lazlo", name: "Lazlo", tagline: "Heat Tank" },
  { slug: "smert", name: "Smert", tagline: "Time-Stop Chaos" },
  { slug: "sariel", name: "Sariel", tagline: "Curse, Break" },
];

export default function BuildNav({ current }: { current: string; }) {
  return (
    <nav className="build-nav" aria-label="Other Mortal Shell 2 Builds">
      <h3>Other Mortal Shell 2 Builds</h3>
      <div className="build-nav-grid">
        {BUILDS.filter((b) => b.slug !== current).map((b) => (
          <Link
            key={b.slug}
            href={`/builds/${b.slug}`}
            className="build-nav-tile"
          >
            <span className="build-nav-name">{b.name}</span>
            <span className="build-nav-tagline">{b.tagline}</span>
          </Link>
        ))}
      </div>
      <p className="build-nav-utility">
        <Link
          href="/builds"
          className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
        >
          All Builds
        </Link>{" "}
        &middot;{" "}
        <Link
          href="/map"
          className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
        >
          Interactive Map
        </Link>{" "}
        &middot;{" "}
        <Link
          href="/shells"
          className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
        >
          Shells Guide
        </Link>
      </p>
    </nav>
  );
}
