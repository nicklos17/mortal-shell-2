// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            // 屏蔽 AI 训练爬虫（保留你 CF 版已有的策略）
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            { userAgent: 'Google-Extended', disallow: '/' },
            { userAgent: 'Bytespider', disallow: '/' },
            { userAgent: 'Amazonbot', disallow: '/' },
            { userAgent: 'Applebot-Extended', disallow: '/' },
        ],
        // 顺手把 sitemap 指到 Next.js 默认路由（之前 CF 版写的是 sitemap-index.xml，对不上）
        sitemap: 'https://mortal-shell2.wiki/sitemap.xml',
    };
}