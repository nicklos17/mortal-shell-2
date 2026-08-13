import type { MetadataRoute } from 'next';
import { pageURL } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            { userAgent: 'Google-Extended', disallow: '/' },
            { userAgent: 'Bytespider', disallow: '/' },
            { userAgent: 'Amazonbot', disallow: '/' },
            { userAgent: 'Applebot-Extended', disallow: '/' },
        ],
        sitemap: pageURL('/sitemap.xml'),
    };
}
