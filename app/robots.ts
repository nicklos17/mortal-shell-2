import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ① 搜索引擎 + 默认：全部放行
            {
                userAgent: '*',
                allow: '/',
            },
            // ② AI 引用类爬虫：放行（GEO 流量核心，让 AI 搜索能引用你）
            {
                userAgent: [
                    'GPTBot',          // ChatGPT / OpenAI 搜索
                    'OAI-SearchBot',   // OpenAI 搜索结果引用
                    'ChatGPT-User',    // ChatGPT 交互式抓取
                    'PerplexityBot',   // Perplexity 引用
                    'ClaudeBot',       // Claude 产品抓取与引用（Anthropic 产品用，非训练）
                    'Google-Extended', // 谷歌 AI Overview / Gemini 引用（不影响正常索引）
                    'Applebot-Extended', // Apple Intelligence / Siri 引用
                ],
                allow: '/',
            },
            // ③ 纯训练类爬虫：禁止（只白嫖训练，不产生引荐流量）
            {
                userAgent: [
                    'anthropic-ai',   // Anthropic 模型训练（区别于上面的 ClaudeBot）
                    'CCBot',          // Common Crawl，AI 训练数据源
                    'Bytespider',     // 字节跳动训练爬虫（抓取量大、无引荐回报）
                    'Meta-ExternalAgent', // Meta AI 训练
                    'Amazonbot',      // Amazon 训练爬虫
                ],
                disallow: '/',
            },
        ],
        sitemap: 'https://mortal-shell2.wiki/sitemap.xml',
        host: 'https://mortal-shell2.wiki',
    };
}