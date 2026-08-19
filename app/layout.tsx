import type { Metadata } from "next";
import { SITE_BASE_URL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
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
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Guide",
      },
    ],
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_BASE_URL}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_MEASUREMENT_ID ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`.trim(),
              }}
            />
          </>
        ) : null}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="brand">
              Mortal Shell 2 Guide
            </a>
            <nav>
              <a href="/map/">Map</a>
              <a href="/shells/">Shells</a>
              <a href="/bosses/">Bosses</a>
              <a href="/builds/">Builds</a>
              <a href="/weapons/">Weapons</a>
              <a href="/walkthrough/">Walkthrough</a>
              <a href="/tips/">Tips</a>
              <a href="/updates/">Updates</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>
              Mortal Shell 2 Guide is a fan-made resource. Mortal Shell is a
              trademark of Cold Symmetry and Playstack Ltd. All screenshots
              belong to their respective owners.
            </p>
            <nav>
              <a href="/about/">About</a>
              <a href="/privacy/">Privacy</a>
              <a href="/terms/">Terms of Service</a>
              <a href="/disclaimer/">Disclaimer</a>
              <a href="/contact/">Contact</a>
              <a href="/rss.xml">RSS</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
