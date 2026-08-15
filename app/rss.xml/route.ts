// app/rss.xml/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // 构建时生成一次，不额外消耗运行时

const SITE = "https://mortal-shell2.wiki";

type FeedItem = {
    title: string;
    link: string;
    pubDate: string;
    desc: string; // HTML 字符串，已包含 <p> 标签
};

// 👇 唯一的维护点：以后每次发新内容，往这个数组里塞一个对象即可
const items: FeedItem[] = [
    {
        title: "Mortal Shell 2 Release Date Confirmed: August 20, 2026",
        link: `${SITE}/updates/mortal-shell-2-release-date`,
        pubDate: "Fri, 15 Aug 2026 10:00:00 +0000",
        desc: `<p>Mortal Shell 2 launches <strong>August 20, 2026</strong> on PC, PS5, and Xbox Series X|S. Eight playable Shells, no stamina bar, and the new Hand Cannon weapon. Open Beta live now.</p>`,
    },
    {
        title: "Interactive Map Now Live: All Shells, Bosses & Collectibles",
        link: `${SITE}/map`,
        pubDate: "Fri, 15 Aug 2026 09:00:00 +0000",
        desc: `<p>Our <strong>Mortal Shell 2 interactive map</strong> is live: every confirmed Shell, boss arena, Tarstone, and Beacon on one clickable map, with route planning and a location index.</p>`,
    },
    {
        title: "All 8 Shells Explained: Playstyles, Abilities & Locations",
        link: `${SITE}/shells`,
        pubDate: "Fri, 15 Aug 2026 08:00:00 +0000",
        desc: `<p>The complete Shell roster: Eredrim the Venerable, Harros the Vassal, Tiel the Acolyte, and more — playstyle, signature ability, and beta-confirmed locations. Unconfirmed Shells are clearly marked.</p>`,
    },
    {
        title: "Builds Guide: 8 Shells, Comparison Table & Playstyle Picks",
        link: `${SITE}/builds`,
        pubDate: "Fri, 15 Aug 2026 07:00:00 +0000",
        desc: `<p>All eight Shells, a builds comparison table, and playstyle-based recommendations. Full loadouts confirmed after the August 20 launch.</p>`,
    },
];

export async function GET() {
    const body = items
        .map(
            (it) => `
  <item>
    <title>${it.title}</title>
    <link>${it.link}</link>
    <guid isPermaLink="true">${it.link}</guid>
    <pubDate>${it.pubDate}</pubDate>
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