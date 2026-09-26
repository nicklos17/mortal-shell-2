import type { MetadataRoute } from "next";
import { pageURL } from "@/lib/site-config";
import { updatePosts } from "@/lib/updates-data";
import { SHELLS } from "@/lib/shells";

export const dynamic = 'force-static';


/**
 * Sitemap lastModified 规则：
 *  - 每个页面固定一个「创建日期」（createdAt），首次上线那天写一次就不动了
 *  - 当页面内容/标题/SEO 真的有改动时，把该路由加入 CHANGED_TODAY，lastModified
 *    会自动取「当天日期」（由系统时间决定，构建当天就是当天）
 *  - 未加入 CHANGED_TODAY 的页面，无论怎么 rebuild，lastModified 保持 createdAt 不变
 *  - CHANGED_TODAY 用完一天后需要清空（次日就不再标记为"今天改了"）
 *
 *  绝对禁止：全量 `new Date()` 把所有页面 lastmod 一起刷新。
 */

// 今天日期（本地时区的「年月日」，再转 UTC 零点，保证 XML 中看起来就是"今天那一天"）。
// 用本地日期，因为改页面发生在开发者的"今天"，不管 UTC 怎么跨日。
const TODAY = (() => {
  const d = new Date();
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
})();

/**
 * 今天确实改了内容/标题/SEO 的页面列表。
 * 每次改完某个页面，把对应的 path 加进来，就一行。
 * 第二天可以清空，保持列表清爽。
 */
const CHANGED_TODAY: ReadonlySet<string> = new Set([
  "",        // /：正文加入 best Shell tier list 内链（2026-09-26）
  "/shells", // /shells：正文加入 best Shell tier list 内链（2026-09-26）
  "/builds", // /builds：lede 加入 best Shell tier list 内链（2026-09-26）
  "/tips",   // /tips：Need more detail 段加入 best Shell tier list 内链（2026-09-26）
  "/updates", // /updates：best Shell tier list 迁出 updates 列表（2026-09-26）
]);

// Shell 详情页：今天改了内容的 slug 专属 changed set。
// 没有改动就保持空 Set，不要留着旧批次的 slug。
const CHANGED_TODAY_SHELLS: ReadonlySet<string> = new Set([
  // 全部 8 个详情页加入 tier list 内链（2026-09-26），次日清空
  "proxima",
  "tiel",
  "gragu",
  "eredrim",
  "smert",
  "sariel",
  "lazlo",
  "genessa",
]);

type StaticRoute = {
  path: string;
  createdAt: string; // "YYYY-MM-DD"，首次上线日期
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ROUTES: StaticRoute[] = [
  { path: "", createdAt: "2026-08-14", priority: 1.0, changeFrequency: "weekly" },
  { path: "/map", createdAt: "2026-08-14", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ru/map", createdAt: "2026-08-22", priority: 0.8, changeFrequency: "weekly" },
  { path: "/updates", createdAt: "2026-08-14", priority: 0.9, changeFrequency: "weekly" },
  { path: "/shells", createdAt: "2026-08-14", priority: 0.8, changeFrequency: "weekly" },
  { path: "/shells/best-shell", createdAt: "2026-09-26", priority: 0.8, changeFrequency: "monthly" },
  { path: "/bosses", createdAt: "2026-08-14", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds", createdAt: "2026-08-14", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/proxima", createdAt: "2026-08-18", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/tiel", createdAt: "2026-08-19", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/eredrim", createdAt: "2026-08-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/gragu", createdAt: "2026-08-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/genessa", createdAt: "2026-08-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/lazlo", createdAt: "2026-08-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/smert", createdAt: "2026-08-21", priority: 0.8, changeFrequency: "monthly" },
  { path: "/builds/sariel", createdAt: "2026-08-22", priority: 0.8, changeFrequency: "monthly" },
  { path: "/weapons", createdAt: "2026-08-14", priority: 0.8, changeFrequency: "monthly" },
  { path: "/walkthrough", createdAt: "2026-08-14", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tips", createdAt: "2026-08-14", priority: 0.7, changeFrequency: "yearly" },
  { path: "/about", createdAt: "2026-08-14", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", createdAt: "2026-08-14", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", createdAt: "2026-08-14", priority: 0.5, changeFrequency: "yearly" },
  { path: "/disclaimer", createdAt: "2026-08-14", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", createdAt: "2026-08-14", priority: 0.6, changeFrequency: "yearly" },
];

// Shell 详情页首次上线日期（与 Shell 数据文件同一天创建）
const SHELLS_CREATED_AT = new Date("2026-08-14T00:00:00Z");

function pickLast(createdAt: Date, pathKey: string): Date {
  return CHANGED_TODAY.has(pathKey) ? TODAY : createdAt;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((r) => ({
    url: pageURL(r.path),
    lastModified: pickLast(new Date(`${r.createdAt}T00:00:00Z`), r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const shellEntries = SHELLS.map((s) => ({
    url: pageURL(`/shells/${s.id}`),
    // Shell 详情页：默认按首次创建日期；单独改了某个 Shell 子页时，
    // 把它的 slug 加入上方 CHANGED_TODAY_SHELLS 即可。
    lastModified: CHANGED_TODAY_SHELLS.has(s.id) ? TODAY : SHELLS_CREATED_AT,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries = updatePosts.map((p) => ({
    url: pageURL(`/updates/${p.slug}`),
    // 文章页：dateModified 优先，没有就用 datePublished（由文章自身决定，跟随内容编辑）
    lastModified: p.dateModified ? new Date(p.dateModified) : new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // RSS feed — 独立于页面路由，使用固定的 lastmod（由用户提供）
  const rssEntry: MetadataRoute.Sitemap[number] = {
    url: pageURL("/rss.xml"),
    lastModified: new Date("2026-08-15T12:00:00.000Z"),
    changeFrequency: "daily",
    priority: 0.5,
  };

  return [...staticEntries, ...shellEntries, ...articleEntries, rssEntry];
}
