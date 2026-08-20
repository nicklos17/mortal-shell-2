export const dynamic = 'force-static';
import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Disclaimer – Mortal Shell 2 Wiki";
const PAGE_PATH = "/disclaimer";
const DESCRIPTION =
  "Mortal Shell 2 Wiki is an unofficial fan wiki. We are not affiliated with Cold Symmetry or Playstack. Read our full disclaimer.";

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

export default function DisclaimerPage() {
  return (
    <main className="container">
      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>

      <span className="eyebrow">Legal</span>
      <h1>Disclaimer</h1>
      <span className="title-rule" />

      <p className="text-sm text-white/50 mb-8">Last updated: August 15, 2026</p>

      <section className="article">
        <p>
          Mortal Shell 2 Wiki (
          <Link
            href="/"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            https://mortal-shell2.wiki
          </Link>
          ) is an unofficial, fan-made wiki and guide. We are not affiliated
          with, endorsed by, or sponsored by Cold Symmetry, Playstack, or any of
          their parent companies, subsidiaries, or affiliates.
        </p>
        <p>
          All trademarks, game assets, character names, logos, and related
          intellectual property are the property of their respective owners. The
          use of these materials on this site is for informational and editorial
          purposes only and falls under fair use.
        </p>
        <p>
          The information on this website is provided in good faith and based on
          publicly available sources.
          Game content may change upon full release or through
          subsequent patches. We make no guarantees about the completeness,
          accuracy, or reliability of any guide, map location, build
          recommendation, or strategy published here.
        </p>
        <p>
          External links on this site may lead to third-party websites. We are
          not responsible for the content or practices of those sites.
        </p>
        <p>
          If you believe any content on this site infringes your rights, please
          contact us through the{" "}
          <Link
            href="/contact"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            Contact page
          </Link>
          .
        </p>
      </section>

      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>
    </main>
  );
}
