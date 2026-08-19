import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <a href="/" className="article-back">
        &larr; Back to Home
      </a>

      <span className="eyebrow">404</span>
      <h1>Page Not Found</h1>
      <span className="title-rule" />

      <p className="lede">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="card">
        <span className="eyebrow">Where to go</span>
        <h2>Try one of these instead</h2>
        <p>
          The sections below cover every Mortal Shell 2 topic currently live
          on this site.
        </p>
        <ul className="tip-list">
          <li>
            <strong>
              <Link
                href="/map"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Interactive Map
              </Link>
            </strong>
            <span>Beacons, chests, Shell locations, and hidden rooms.</span>
          </li>
          <li>
            <strong>
              <Link
                href="/bosses"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Bosses
              </Link>
            </strong>
            <span>Strategies for every confirmed encounter.</span>
          </li>
          <li>
            <strong>
              <Link
                href="/walkthrough"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Walkthrough
              </Link>
            </strong>
            <span>Opening route, early upgrade path, and farming loop.</span>
          </li>
          <li>
            <strong>
              <Link
                href="/tips"
                className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
              >
                Tips
              </Link>
            </strong>
            <span>18 beginner tips across combat, Shells, exploration, and bosses.</span>
          </li>
        </ul>
        <a href="/" className="card-link">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
