export const dynamic = 'force-static';
import type { Metadata } from "next";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import BannerAd from "@/components/BannerAd";

const SLUG = "mortal-shell-2-release-date";
const PAGE_PATH = `/updates/${SLUG}`;
const TITLE = "Mortal Shell 2 Release Date";
const DATE_PUBLISHED = "2026-08-14T09:00:00Z";
const DATE_MODIFIED = "2026-08-14T09:00:00Z";
const AUTHOR = "Mortal Shell 2 Wiki Staff";
const DESCRIPTION =
  "Mortal Shell 2 releases on August 20, 2026. Confirmed platforms, pre-order details, gameplay changes, and everything we know about the upcoming Cold Symmetry soulslike sequel.";

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
    tags: ["Mortal Shell 2", "Release Date", "Announcement", "Cold Symmetry"],
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
  "@type": "NewsArticle",
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
    "Mortal Shell 2 release date, Mortal Shell 2 August 20 2026, Mortal Shell 2 platforms, Cold Symmetry, Playstack",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Mortal Shell 2 release date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 releases globally on August 20, 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms will Mortal Shell 2 be on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mortal Shell 2 launches on Steam, PlayStation 5, and Xbox Series X|S.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mortal Shell 2 coming to PS4 or Xbox One?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold Symmetry has not announced PS4 or Xbox One versions. Mortal Shell 2 is current-gen only at launch.",
      },
    },
    {
      "@type": "Question",
      name: "Who is publishing Mortal Shell 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Playstack returns as publisher for Mortal Shell 2, continuing the partnership from the original Mortal Shell.",
      },
    },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReleaseDateArticlePage() {
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
          <span className="eyebrow">News · Announcement</span>
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
            After months of teases and speculation, Cold Symmetry has officially
            locked in the Mortal Shell 2 release date. The follow-up to 2020&apos;s
            surprise soulslike hit arrives in just a few days.
          </p>

          <h2>August 20, 2026 — Mark Your Calendar</h2>
          <p>
            Mortal Shell 2 launches globally on{" "}
            <strong>Thursday, August 20, 2026</strong>. The date was confirmed
            during Cold Symmetry&apos;s summer showcase alongside a brand-new
            story trailer putting the sequel&apos;s larger, more open world on
            full display.
          </p>

          <blockquote>
            &ldquo;We built Mortal Shell to see if a smaller, tighter take on
            soulslike combat could find its audience. It did. Mortal Shell 2 is
            what happens when we let ourselves go deeper, wider, and darker.&rdquo;
            <cite>— Anton Gonzalez, Creative Director, Cold Symmetry</cite>
          </blockquote>

          <BannerAd />

          <h2>Confirmed Platforms</h2>
          <p>Mortal Shell 2 will be available at launch on:</p>
          <ul>
            <li>Steam</li>
            <li>PlayStation 5 (with exclusive DualSense haptics)</li>
            <li>Xbox Series X|S (Smart Delivery included)</li>
          </ul>
          <p>
            No last-gen (PS4 / Xbox One) versions have been announced, and Cold
            Symmetry has stated that the sequel is &ldquo;built from the ground
            up for current-gen hardware and SSD storage.&rdquo;
          </p>

          <h2>Pre-order Details</h2>
          <p>
            Pre-orders open on the publisher&apos;s official storefront on August
            16, 2026. Two editions are confirmed:
          </p>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <section className="card">
              <h3>Standard Edition</h3>
              <p>Base game + launch-day Known Locations map item.</p>
            </section>
            <section className="card">
              <h3>Deluxe Edition</h3>
              <p>
                Base game + digital artbook, original soundtrack, &ldquo;The
                Hermit&rdquo; bonus Shell skin, and 48-hour early access.
              </p>
            </section>
          </div>

          <h2>What&apos;s Changing in the Sequel</h2>
          <p>
            Cold Symmetry has outlined several key departures from the original
            Mortal Shell formula:
          </p>
          <ul>
            <li>
              <strong>Larger, more interconnected worlds.</strong> No more
              strictly linear area transitions — the sequel is designed around
              shortcuts, hidden gates, and looping routes.
            </li>
            <li>
              <strong>New Shells and returning favorites.</strong> Play as
              multiple new vessels in addition to a few classic Shells that
              Cold Symmetry is &ldquo;reworking from the skeleton out.&rdquo;
            </li>
            <li>
              <strong>Overhauled Harden system.</strong> The signature
              freeze-to-block mechanic now supports partial hardens, parry
              chains, and Shell-specific counters.
            </li>
            <li>
              <strong>New weapon category: Heavy Instruments.</strong> Slow,
              high-risk two-handers with super armor on windup attacks.
            </li>
            <li>
              <strong>Improved Tar economy.</strong> Tarstones no longer expire
              on death, and there&apos;s a new shrine system for long runs.
            </li>
          </ul>

          <h2>What We Know About the Story</h2>
          <p>
            Set centuries after the first Mortal Shell, the sequel takes place
            in a fractured realm where the old gods have crumbled into false
            idols. Players awaken as an unnamed Vessel whose body can hold
            multiple Shells at once — a narrative explanation for the more
            flexible class-switching system teased in previews.
          </p>
          <p>
            Our full story breakdown will go live on launch day, and we will be
            updating our <a href="/walkthrough">walkthrough</a> hour-by-hour
            as we progress.
          </p>

          <h2>Next Steps Between Now and Launch</h2>
          <ol>
            <li>August 16 — Pre-orders open; pre-load goes live on Steam.</li>
            <li>August 18 — Pre-load unlocks on PS5 and Xbox Series X|S.</li>
            <li>
              August 19 — Playstack hosts a launch livestream with developer
              commentary and late-game boss reveal.
            </li>
            <li>
              <strong>August 20, 2026 — Mortal Shell 2 global launch.</strong>
            </li>
          </ol>

          <p>
            Bookmarks this page and our <a href="/updates">Updates</a>{" "}
            feed — we will publish every patch note, balance pass, and DLC
            announcement the instant they go live.
          </p>

          <BannerAd />

          <p className="article-back">
            <a href="/updates">← Back to all Mortal Shell 2 updates</a>
          </p>
        </article>
      </main>
    </>
  );
}
