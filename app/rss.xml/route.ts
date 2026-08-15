// app/rss.xml/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-static";

const SITE = "https://mortal-shell2.wiki";

type FeedItem = {
    title: string;
    link: string;
    pubDate: string;
    desc: string;
};

const items: FeedItem[] = [
    {
        title: "Mortal Shell 2 Release Date Confirmed: August 20, 2026",
        link: `${SITE}/updates/mortal-shell-2-release-date`,
        pubDate: "Fri, 15 Aug 2026 10:00:00 +0000",
        desc: `<p>Mortal Shell 2 launches <strong>August 20, 2026</strong> on PC, PS5, and Xbox Series X|S. Eight playable Shells, no stamina bar, and the new Hand Cannon weapon.</p>`,
    },
    // ... 其余 3 条同上结构
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
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}