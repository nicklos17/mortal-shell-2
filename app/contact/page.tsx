import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Contact Us – Mortal Shell 2 Guide";
const PAGE_PATH = "/contact";
const DESCRIPTION =
  "Report an error, contribute a map location, or reach the team behind the Mortal Shell 2 wiki.";

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

export default function ContactPage() {
  return (
    <main className="container">
      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>

      <span className="eyebrow">Contact</span>
      <h1>Contact Us</h1>
      <span className="title-rule" />

      <section className="article">
        <h2>Report an error or outdated information</h2>
        <p>
          Found something wrong on the map or in a guide? Tell us and
          we&rsquo;ll verify and fix it — usually within 24&ndash;48 hours.
          Please include the page URL and what you believe is incorrect.
        </p>
      </section>

      <section className="article">
        <h2>Contribute a location or strategy</h2>
        <p>
          We welcome verified contributions from players. If you&rsquo;ve
          found a Shell, boss, or collectible that&rsquo;s missing from our
          map, send us the details (name, rough location, and a screenshot if
          possible). We&rsquo;ll confirm it before publishing and credit
          contributors.
        </p>
      </section>

      <section className="article">
        <h2>Business and press</h2>
        <p>
          For partnerships, advertising, or media inquiries, use the same
          address with &ldquo;Business&rdquo; in the subject line.
        </p>
      </section>

      <section className="article">
        <h2>Reach us</h2>
        <p>
          Email:{" "}
          <strong>
            <a
              href="mailto:support@mortal-shell2.wiki"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
            >
              support@mortal-shell2.wiki
            </a>
          </strong>
          <br />
          Response time: typically within 48 hours.
        </p>
        <p>
          You can also find the community discussions on Reddit (
          <code>r/MortalShell</code>) and the official game Discord.
        </p>
      </section>

      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>
    </main>
  );
}
