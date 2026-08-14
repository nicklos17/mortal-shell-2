import type { MetadataRoute } from 'next';
import { pageURL } from '@/lib/site-config';
import { updatePosts } from '@/lib/updates-data';
import { SHELLS } from '@/lib/shells';

const SITE_CREATED_AT = new Date('2026-08-14T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  }> = [
      { path: "", priority: 1.0, changeFrequency: "weekly" },
      { path: "/map", priority: 0.9, changeFrequency: "weekly" },
      { path: "/updates", priority: 0.9, changeFrequency: "weekly" },
      { path: "/shells", priority: 0.8, changeFrequency: "weekly" },
      { path: "/bosses", priority: 0.8, changeFrequency: "monthly" },
      { path: "/builds", priority: 0.8, changeFrequency: "monthly" },
      { path: "/weapons", priority: 0.8, changeFrequency: "monthly" },
      { path: "/walkthrough", priority: 0.8, changeFrequency: "monthly" },
      { path: "/tips", priority: 0.7, changeFrequency: "yearly" },
      { path: "/about", priority: 0.6, changeFrequency: "yearly" },
      { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
      { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    ];

  const staticEntries = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: pageURL(path),
    lastModified: SITE_CREATED_AT,
    changeFrequency,
    priority,
  }));

  const shellEntries = SHELLS.map((s) => ({
    url: pageURL(`/shells/${s.id}`),
    lastModified: SITE_CREATED_AT,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleEntries = updatePosts.map((p) => ({
    url: pageURL(`/updates/${p.slug}`),
    lastModified: p.dateModified ? new Date(p.dateModified) : new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...shellEntries, ...articleEntries];
}
