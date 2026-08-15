import type { Metadata } from "next";
import Link from "next/link";
import { pageURL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";

const TITLE = "Privacy Policy – Mortal Shell 2 Guide";
const PAGE_PATH = "/privacy";
const DESCRIPTION =
  "How we handle your data on Mortal Shell 2 Guide: analytics, cookies, affiliate links, and your rights under GDPR and CCPA.";

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

export default function PrivacyPage() {
  return (
    <main className="container">
      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>

      <span className="eyebrow">Legal</span>
      <h1>Privacy Policy</h1>
      <span className="title-rule" />

      <p className="text-sm text-white/50 mb-8">Last updated: August 14, 2026</p>

      <section className="article">
        <h2>1. Information we collect</h2>
        <p>
          Mortal Shell 2 Guide does not require an account, and we do not ask
          for your name, email, or any personal information to use the site.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Local progress data</strong> — features like the
            interactive map&rsquo;s &ldquo;collected&rdquo; checkboxes are
            stored <em>only in your browser</em> using localStorage. This data
            never leaves your device and is not visible to us.
          </li>
          <li>
            <strong>Anonymous analytics</strong> — if enabled, we use a
            privacy-respecting analytics service to understand aggregate
            traffic (pages visited, approximate region, device type). This
            data is anonymized and cannot identify you personally.
          </li>
          <li>
            <strong>Server logs</strong> — our hosting provider (Vercel /
            Cloudflare) may log standard technical data such as IP address,
            browser type, and timestamps for security and performance purposes.
          </li>
        </ul>
      </section>

      <section className="article">
        <h2>2. Cookies</h2>
        <p>
          We do not use tracking cookies for advertising. The only local
          storage used is the functional localStorage described above, which is
          required for progress-tracking features to work.
        </p>
      </section>

      <section className="article">
        <h2>3. Affiliate links</h2>
        <p>
          Some outbound links (for example, store pages such as Steam) may be
          affiliate links. If you click one and make a purchase, we may receive
          a commission at no additional cost to you. Affiliate links do not
          change the price you pay and do not influence our editorial content.
        </p>
      </section>

      <section className="article">
        <h2>4. Third-party services</h2>
        <p>
          We rely on the following third parties to operate this site. Each has
          its own privacy policy:
        </p>
        <ul className="list-disc pl-6">
          <li>Vercel — hosting and content delivery</li>
          <li>Cloudflare — DNS and security</li>
          <li>[Google Analytics — only if you enable it]</li>
        </ul>
      </section>

      <section className="article">
        <h2>5. Your rights (GDPR &amp; CCPA)</h2>
        <p>
          Because we do not collect personal data, there is little to access or
          delete. If you have any request regarding your data or this policy,
          contact us through the{" "}
          <Link href="/contact/" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">
            Contact page
          </Link>
          . We respond to all requests.
        </p>
      </section>

      <section className="article">
        <h2>6. Children&rsquo;s privacy</h2>
        <p>
          This site is a video game guide and is not directed at children under
          13. We do not knowingly collect personal information from children.
        </p>
      </section>

      <section className="article">
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this policy as the site evolves. The &ldquo;Last
          updated&rdquo; date at the top reflects the most recent revision.
        </p>
      </section>

      <Link href="/" className="article-back">
        &larr; Back to Home
      </Link>
    </main>
  );
}
