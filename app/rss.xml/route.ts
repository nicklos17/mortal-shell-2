// app/rss.xml/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // 构建时生成一次，不额外消耗运行时

const SITE = "https://mortal-shell2.wiki";

// 👇 唯一的维护点：以后每次发新内容，往这个数组里加一个对象即可（pubDate 用 ISO 字符串）
const items: {
    title: string;
    link: string;
    pubDateISO: string; // 例如 "2026-08-14T09:00:00Z"
    desc: string; // HTML 字符串，已包含 <p> 标签
}[] = [
    {
        title: "Mortal Shell 2 Release Date Confirmed: August 20, 2026",
        link: `${SITE}/updates/mortal-shell-2-release-date`,
        pubDateISO: "2026-08-14T09:00:00Z",
        desc: `<p>Mortal Shell 2 launches <strong>August 20, 2026</strong> on PC, PS5, and Xbox Series X|S. Eight playable Shells, no stamina bar, and the new Hand Cannon weapon. Open Beta live now.</p>`,
    },
    {
        title: "Interactive Map Now Live: All Shells, Bosses & Collectibles",
        link: `${SITE}/map`,
        pubDateISO: "2026-08-14T13:00:00Z",
        desc: `<p>Our <strong>Mortal Shell 2 interactive map</strong> is live: every confirmed Shell, boss arena, Tarstone, and Beacon on one clickable map, with route planning and a location index.</p>`,
    },
    {
        title: "All 8 Shells Explained: Playstyles, Abilities & Locations",
        link: `${SITE}/shells`,
        pubDateISO: "2026-08-13T15:00:00Z",
        desc: `<p>The complete Shell roster: Proxima, Tiel, Gragu, Eredrim, Smert, Sariel, Lazlo, Genessa — playstyle, signature ability, and beta-confirmed locations.</p>`,
    },
    {
        title: "Builds Guide: 8 Shells, Comparison Table & Playstyle Picks",
        link: `${SITE}/builds`,
        pubDateISO: "2026-08-13T18:00:00Z",
        desc: `<p>All eight Shells, a builds comparison table, and playstyle-based recommendations. Full loadouts confirmed after the August 20 launch.</p>`,
    },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function pad(n: number): string {
    return String(n).padStart(2, "0");
}

// 用真实日期推导星期，避免手写 "Fri" 与实际日期不符（如 8/15/2026 实际是周六）
// 时区以 EST（UTC-5）展示：先把 UTC 瞬时时间减去 5 小时，再取该 EST 本地时刻的各字段
function toRFC822(iso: string): string {
    const d = new Date(iso);
    const est = new Date(d.getTime() - 5 * 60 * 60 * 1000);
    return `${DAYS[est.getUTCDay()]}, ${pad(est.getUTCDate())} ${MONTHS[est.getUTCMonth()]} ${est.getUTCFullYear()} ${pad(est.getUTCHours())}:${pad(est.getUTCMinutes())}:${pad(est.getUTCSeconds())} EST`;
}

function escapeXML(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export async function GET() {
    const body = items
        .map(
            (it) => `
  <item>
    <title>${escapeXML(it.title)}</title>
    <link>${it.link}</link>
    <guid isPermaLink="true">${it.link}</guid>
    <pubDate>${toRFC822(it.pubDateISO)}</pubDate>
    <description><![CDATA[${it.desc}
      <p><a href="${it.link}">Read more →</a></p>]]></description>
  </item>`
        )
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Mortal Shell 2 Guide</title>
  <link>${SITE}/</link>
  <description>Complete Mortal Shell 2 guide and wiki. Updated daily around the August 20, 2026 launch.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <generator>Mortal Shell 2 Guide</generator>
  <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${body}
</channel>
</rss>`;

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=0, must-revalidate",
        },
    });
}
