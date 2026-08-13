// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mortal-shell2.wiki';
    const paths = ['', '/map', '/shells', '/bosses', '/builds', '/weapons',
        '/walkthrough', '/tips', '/news'];
    return paths.map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),   // 发售后内容更新会自动变
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
    }));
}