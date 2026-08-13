import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";

const PAGE_PATH = "/updates";

export const metadata: Metadata = {
  title: "Mortal Shell 2 Updates",
  description:
    "Latest Mortal Shell 2 updates, patch notes, balance changes, release news, and new content drops. Stay current with every change to the game.",
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: "Mortal Shell 2 Updates",
    description:
      "Latest Mortal Shell 2 updates, patch notes, balance changes, and release news.",
    url: pageURL(PAGE_PATH),
  },
};

type UpdatePost = {
  slug: string;
  title: string;
  datePublished: string; // ISO
  dateModified?: string;
  author: string;
  excerpt: string;
  tags: string[];
};

export const updatePosts: UpdatePost[] = [
  {
    slug: "mortal-shell-2-release-date",
    title: "Mortal Shell 2 Release Date",
    datePublished: "2026-08-14T09:00:00Z",
    author: "Mortal Shell 2 Guide Staff",
    excerpt:
      "Cold Symmetry has officially confirmed the Mortal Shell 2 release date. The sequel to the cult soulslike arrives on August 20, 2026 for Steam, PS5, and Xbox Series X|S.",
    tags: ["News", "Release Date", "Announcement"],
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mortal Shell 2 Updates",
  itemListElement: updatePosts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: pageURL(`/updates/${p.slug}`),
    name: p.title,
    item: {
      "@type": "Article",
      headline: p.title,
      datePublished: p.datePublished,
      author: { "@type": "Organization", name: p.author },
      mainEntityOfPage: pageURL(`/updates/${p.slug}`),
    },
  })),
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function UpdatesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="container">
        <span className="eyebrow">Patch Notes &amp; News</span>
        <h1>Mortal Shell 2 Updates</h1>
        <span className="title-rule" />

        <p className="lede">
          Track every Mortal Shell 2 update — release dates, patch notes,
          balance changes, hotfixes, and new content. We update this page the
          moment Cold Symmetry ships a new build.
        </p>

        <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
          {updatePosts.map((post) => (
            <article className="card" key={post.slug}>
              <time
                className="eyebrow"
                dateTime={post.datePublished}
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                {formatDate(post.datePublished)}
              </time>
              <h2>
                <a href={`/updates/${post.slug}/`}>{post.title}</a>
              </h2>
              <p>{post.excerpt}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                {post.tags.map((t) => (
                  <span key={t} className="eyebrow" style={{
                    padding: "2px 10px",
                    border: "var(--border-gold)",
                    borderRadius: "2px",
                  }}>{t}</span>
                ))}
              </div>
              <a href={`/updates/${post.slug}/`} className="card-link">
                Read the full update →
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
