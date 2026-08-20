export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "About Us – Mortal Shell 2 Guide & Wiki";
const PAGE_PATH = "/about";
const DESCRIPTION =
  "Learn who runs this Mortal Shell 2 wiki, how we verify every Shell, boss, and map location, and why you can trust our guide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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

export default function AboutPage() {
  return (
    <main className="container">
      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>

      <span className="eyebrow">About</span>
      <h1>About Mortal Shell 2 Guide</h1>
      <span className="title-rule" />

      <p className="lede">
        Mortal Shell 2 Guide is a fan-made wiki and strategy resource for
        <strong> Mortal Shell 2</strong>, the soulslike sequel from Cold
        Symmetry and Playstack. We are not affiliated with, endorsed by, or
        sponsored by the developers or publishers. All game names, logos, and
        trademarks belong to their respective owners.
      </p>

      <section className="article mt-12">
        <h2>Why we built this guide</h2>
        <p>
          When Mortal Shell 2 was announced, most coverage was scattered
          across forum threads and hour-long videos. We built this guide to
          put every Shell location, boss strategy, build, and map marker in
          one place — organized, searchable, and updated the moment new
          information is confirmed.
        </p>
      </section>

      <section className="article">
        <h2>How we verify our content</h2>
        <p>
          Every fact on this site goes through one of three sources before it
          is published:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Hands-on testing</strong> — we play the game ourselves
            and confirm locations, mechanics, and boss behavior in-game.
          </li>
          <li>
            <strong>Video walkthroughs</strong> — we cross-check community
            video guides and convert verified footage into written, structured
            content.
          </li>
          <li>
            <strong>Community reports</strong> — reader submissions are
            reviewed and confirmed before they appear on the map or in any
            guide.
          </li>
        </ul>
      </section>

      <section className="article">
        <h2>Our commitment</h2>
        <p>
          this guide updates daily with confirmed
          locations, boss strategies, and builds. The date on every page
          shows when it was last updated.
        </p>
      </section>

      <section className="article">
        <h2>How this site is funded</h2>
        <p>
          This site is reader-supported. Some outbound links (such as store
          pages) may be affiliate links, which means we may earn a small
          commission at no extra cost to you. This never affects what we
          recommend or how we prioritize content.
        </p>
      </section>

      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>
    </main>
  );
}
