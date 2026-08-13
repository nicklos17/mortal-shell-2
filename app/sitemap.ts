import type { MetadataRoute } from 'next';
import { pageURL } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = ['', '/map', '/shells', '/bosses', '/builds', '/weapons',
        '/walkthrough', '/tips', '/updates'];
    return paths.map(path => ({
        url: pageURL(path),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
    }));
}
