import type { MetadataRoute } from 'next';
import { pageURL } from '@/lib/site-config';
import { updatePosts } from '@/lib/updates-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: Array<{ path: string; priority: number; }> = [
    { path: "", priority: 1.0 },
    { path: "/map", priority: 0.9 },
    { path: "/updates", priority: 0.9 },
    { path: "/shells", priority: 0.8 },
    { path: "/bosses", priority: 0.8 },
    { path: "/builds", priority: 0.8 },
    { path: "/weapons", priority: 0.8 },
    { path: "/walkthrough", priority: 0.8 },
    { path: "/tips", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/privacy", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
  ];

  const staticEntries = staticPaths.map(({ path, priority }) => ({
    url: pageURL(path),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));

  const articleEntries = updatePosts.map((p) => ({
    url: pageURL(`/updates/${p.slug}`),
    lastModified: p.dateModified ? new Date(p.dateModified) : new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}

