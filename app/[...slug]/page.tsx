import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";

/** 已知路由的 SEO 信息映射 */
const ROUTE_META: Record<string, { title: string; description: string }> = {
  shells: {
    title: "All Shells & Locations – Mortal Shell 2 Guide",
    description:
      "Every playable Shell in Mortal Shell 2 — stats, abilities, and exact locations. Full content coming soon.",
  },
  bosses: {
    title: "Boss Guide – Mortal Shell 2 Guide",
    description:
      "Detailed boss strategies for every encounter in Mortal Shell 2. Full content coming soon.",
  },
  builds: {
    title: "Best Builds – Mortal Shell 2 Guide",
    description:
      "Top Mortal Shell 2 builds ranked by playstyle. Full content coming soon.",
  },
  weapons: {
    title: "Weapons Database – Mortal Shell 2 Guide",
    description:
      "Complete Mortal Shell 2 weapons list with stats and locations. Full content coming soon.",
  },
  walkthrough: {
    title: "Full Walkthrough – Mortal Shell 2 Guide",
    description:
      "Step-by-step Mortal Shell 2 walkthrough covering every area, boss, and ending. Full content coming soon.",
  },
  tips: {
    title: "Beginner Tips – Mortal Shell 2 Guide",
    description:
      "Essential Mortal Shell 2 tips for new players. Full content coming soon.",
  },
  updates: {
    title: "Patch Notes & Updates – Mortal Shell 2 Guide",
    description:
      "Latest Mortal Shell 2 updates, balance changes, and new content. Full content coming soon.",
  },
  about: {
    title: "About – Mortal Shell 2 Guide",
    description: "About Mortal Shell 2 Guide — a fan-made resource.",
  },
  privacy: {
    title: "Privacy Policy – Mortal Shell 2 Guide",
    description: "Privacy policy for Mortal Shell 2 Guide.",
  },
  contact: {
    title: "Contact – Mortal Shell 2 Guide",
    description: "Contact the Mortal Shell 2 Guide team.",
  },
};

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = slug[0];
  const meta = ROUTE_META[key];

  if (meta) {
    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: pageURL("/" + slug.join("/")) },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: pageURL("/" + slug.join("/")),
      },
    };
  }

  return {
    title: "Coming Soon – Mortal Shell 2 Guide",
    description: "This page is coming soon. Stay tuned for updates.",
    alternates: { canonical: pageURL("/" + slug.join("/")) },
    openGraph: {
      title: "Coming Soon – Mortal Shell 2 Guide",
      description: "This page is coming soon. Stay tuned for updates.",
      url: pageURL("/" + slug.join("/")),
    },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const key = slug[0];
  const meta = ROUTE_META[key];
  const pageTitle = meta ? meta.title.split(" – ")[0] : "Coming Soon";

  return (
    <main className="container">
      <span className="eyebrow">Stay Tuned</span>
      <h1>{pageTitle}</h1>
      <span className="title-rule" />

      <p className="lede">
        We&apos;re working hard on this section. Mortal Shell 2 launches on
        August 20, 2026 — full content will be added around release day.
      </p>

      <div className="card">
        <span className="eyebrow">Coming Soon</span>
        <h2>Content In Progress</h2>
        <p>
          This page will be updated with complete information soon. In the
          meantime, explore our other resources:
        </p>
        <a href="/" className="card-link">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
