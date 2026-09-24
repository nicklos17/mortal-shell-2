import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { SITE_BASE_URL, OG_IMAGE, OG_IMAGE_W, OG_IMAGE_H } from "@/lib/site-config";
// Leaflet 的基础 CSS 必须在 SSR 首屏静态 CSS bundle 中（而不是懒加载 MapCanvas
// chunk 里），否则 L.map() 构造时（MapCanvas hydration + useEffect 执行瞬间）
// .leaflet-container 等关键样式还没注入 → Leaflet 读取到 0 尺寸/缺样式，造成
// 经典的“漆黑/空地图”故障。之前从 unpkg 外链 → 再改到 MapCanvas 内 import 都
// 有“懒加载 CSS 与 L.map() 之间的时序竞争”，这里在服务器组件里 import 可以保证
// 到达浏览器 HTML 第一字节时，Leaflet CSS 已经和 globals.css 合并好。
import "leaflet/dist/leaflet.css";
import "./globals.css";
import SideAds from "./SideAds";

// Cinzel 700/800/900 自托管（加粗字重覆盖所有“粗体-标题”使用场景）
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--font-cinzel",
});

// Cormorant Garamond 600 自托管（用于引用/引言样式）
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-cormorant-garamond",
});

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
  other: {
    "google-adsense-account": "ca-pub-1682851839434735",
    "yandex-verification": "b04aef314edee774"
  },
  openGraph: {
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
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: "Mortal Shell 2 Wiki",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${cormorantGaramond.variable}`}
    >
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
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/" className="brand">
              Mortal Shell 2 Wiki
            </a>
            <nav>
              <a href="/map">Map</a>
              <a href="/shells">Shells</a>
              <a href="/bosses">Bosses</a>
              <a href="/builds">Builds</a>
              <a href="/weapons">Weapons</a>
              <a href="/walkthrough">Walkthrough</a>
              <a href="/tips">Tips</a>
              <a href="/updates">Updates</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>
              Mortal Shell 2 Wiki is a fan-made resource. Mortal Shell is a
              trademark of Cold Symmetry and Playstack Ltd. All screenshots
              belong to their respective owners.
            </p>
            <nav>
              <a href="/about">About</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/contact">Contact</a>
              <a href="/rss.xml">RSS</a>
            </nav>
          </div>
        </footer>
        <SideAds />
      </body>
    </html>
  );
}
