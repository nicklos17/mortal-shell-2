import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Terms of Service – Mortal Shell 2 Guide";
const PAGE_PATH = "/terms";
const DESCRIPTION =
  "Terms of Service for using the Mortal Shell 2 wiki. By using this site you agree to these terms.";

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

export default function TermsPage() {
  return (
    <main className="container">
      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>

      <span className="eyebrow">Legal</span>
      <h1>Terms of Service</h1>
      <span className="title-rule" />

      <p className="text-sm text-white/50 mb-8">Last updated: August 15, 2026</p>

      <section className="article">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Mortal Shell 2 Guide (&ldquo;the Site&rdquo;),
          you agree to be bound by these Terms of Service. If you do not agree,
          please discontinue use of the Site.
        </p>
      </section>

      <section className="article">
        <h2>2. Description of Service</h2>
        <p>
          The Site provides an unofficial fan-made wiki and guide for the video
          game Mortal Shell 2, including but not limited to: Shell profiles,
          build recommendations, an interactive map, boss strategies, and news
          updates.
        </p>
      </section>

      <section className="article">
        <h2>3. Intellectual Property</h2>
        <p>
          The original content on this Site&mdash;including guide text, map
          data, build analyses, and editorial commentary&mdash;is our original
          work and is protected by copyright. You may not reproduce,
          redistribute, or republish it without permission.
        </p>
        <p>
          All game-related trademarks, character names, images, and assets
          referenced or displayed on the Site remain the exclusive property of
          Cold Symmetry / Playstack and their respective rights holders. The
          Site claims no ownership over such materials.
        </p>
      </section>

      <section className="article">
        <h2>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6">
          <li>Use the Site for any unlawful purpose</li>
          <li>Attempt to disrupt or overload the Site</li>
          <li>
            Scrape, republish, or redistribute Site content in bulk without
            written permission
          </li>
          <li>Submit false or misleading information through contact forms</li>
        </ul>
      </section>

      <section className="article">
        <h2>5. Accuracy of Information</h2>
        <p>
          We strive to keep the Site accurate, but we do not warrant that all
          content is error-free or up-to-date. Game data may change after the
          full release. Use the guides at your own discretion.
        </p>
      </section>

      <section className="article">
        <h2>6. Third-Party Links</h2>
        <p>
          The Site may contain links to external websites. We are not
          responsible for the content, privacy practices, or availability of
          those third-party sites.
        </p>
      </section>

      <section className="article">
        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Mortal Shell 2 Guide and its
          operators shall not be liable for any direct, indirect, incidental,
          or consequential damages arising from your use of the Site or
          reliance on its content.
        </p>
      </section>

      <section className="article">
        <h2>8. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Changes take
          effect immediately upon posting. Continued use of the Site after
          changes constitutes acceptance.
        </p>
      </section>

      <section className="article">
        <h2>9. Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <Link
            href="/contact"
            className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
          >
            our contact page
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
