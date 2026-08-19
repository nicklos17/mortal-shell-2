export const dynamic = 'force-static';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageURL } from "@/lib/site-config";
import { SHELLS, getShell, shellSlugs } from "@/lib/shells";
import { ShellIcon } from "@/lib/shell-icon";

export function generateStaticParams() {
  return shellSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const shell = getShell(slug);
  if (!shell) return { title: "Shell not found — Mortal Shell 2" };
  const desc = `${shell.name} — ${shell.tagline} ${shell.signature}`;
  return {
    title: `${shell.name} — Mortal Shell 2 Shell Guide`,
    description: desc,
    alternates: { canonical: pageURL(`/shells/${slug}`) },
    openGraph: {
      title: `${shell.name} — Mortal Shell 2 Shell`,
      description: desc,
      url: pageURL(`/shells/${slug}`),
    },
  };
}

export default async function ShellDetailPage({
  params,
}: {
  params: Promise<{ slug: string; }>;
}) {
  const { slug } = await params;
  const shell = getShell(slug);
  if (!shell) notFound();

  const others = SHELLS.filter((s) => s.id !== shell.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: shell.name,
    description: shell.desc,
    image: shell.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container">
        <div className="article-back">
          <Link href="/shells">← All Shells</Link>
        </div>

        <span className="eyebrow">Shell Profile</span>
        <h1>{shell.name}</h1>
        <span className="title-rule" />

        <div className="shell-hero">
          <span className="shell-emblem">
            <ShellIcon id={shell.id} />
          </span>
          <div className="shell-hero-meta">
            <span className="shell-role">{shell.role}</span>
            <span className={`shell-badge ${shell.status === "TBA" ? "tba" : ""}`}>
              {shell.status}
            </span>
            {shell.prologueOnly && (
              <span className="shell-badge prologue">Prologue Only</span>
            )}
          </div>
        </div>

        <p className="lede">{shell.tagline}</p>

        <figure>
          <Image
            src={shell.image}
            alt={shell.imageAlt}
            title={shell.imageTitle}
            width={800}
            height={800}
            className="shell-portrait"
          />
        </figure>

        <section className="article">
          <h2>Overview</h2>
          <p>{shell.desc}</p>

          <div className="shell-callout">
            <strong>Signature Ability</strong>
            <p>{shell.signature}</p>
          </div>

          <h2>Playstyle</h2>
          <p>{shell.playstyle}</p>

          <h2>Backstory &amp; Lore</h2>
          <p>{shell.lore}</p>

          <span className="shell-section-label">Key Abilities</span>
          <ul className="shell-tips">
            {shell.abilities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          {shell.tips.length > 0 && (
            <>
              <span className="shell-section-label">Tips for Playing {shell.name}</span>
              <ul className="shell-tips">
                {shell.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </>
          )}

          <h2>Where to Find {shell.name}</h2>
          <p>{shell.location}</p>

          <p className="article-back">
            <Link href="/shells">← Back to all Mortal Shell 2 Shells</Link>
          </p>
        </section>

        <section className="article">
          <h2>Other Shells</h2>
          <div className="shell-nav">
            {others.map((o) => (
              <Link key={o.id} href={`/shells/${o.id}`}>
                {o.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
