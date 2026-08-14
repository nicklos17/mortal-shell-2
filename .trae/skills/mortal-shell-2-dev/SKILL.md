---
name: "mortal-shell-2-dev"
description: "Mortal Shell 2 Guide 网站开发规范与流程。开发新页面、新增路由、修改现有页面时必须调用。"
---

# Mortal Shell 2 Guide — 网站开发 Skill

> 本 Skill 基于 `.skills/principles.md` 原则文件，结合实际开发经验提炼。
> 每次开发新页面或修改现有页面时，**必须按以下流程执行**。

---

## 一、开发前准备（必做清单）

每次开始编码前，依次确认以下项：

### 1.1 读取原则文件
- 读取 `.skills/principles.md`，确认设计系统配色、字体、组件规范无变更

### 1.2 确认项目结构
```
mortal-shell-2/
├── app/
│   ├── layout.tsx              ← 根布局（header/footer/GA/Leaflet CSS）
│   ├── page.tsx                ← 首页
│   ├── globals.css             ← 全站样式（CSS 变量 + @font-face + Tailwind）
│   ├── robots.ts               ← robots.txt 路由
│   ├── sitemap.ts              ← sitemap.xml 路由
│   ├── manifest.ts             ← PWA manifest 路由
│   ├── [...slug]/page.tsx      ← catch-all Coming Soon 页
│   ├── map/                    ← 地图页（SSG + Leaflet CSR）
│   ├── shells/                 ← Shells 页（SSG + ShellWheel Client Component）
│   │   ├── page.tsx            ← 页面主文件（Server Component）
│   │   └── ShellWheel.tsx      ← 外圈交互组件（Client Component，图片+悬停简介）
│   ├── updates/                ← Updates 列表页 + 文章子页
│   └── ReleaseCountdown.tsx    ← 首页倒计时组件（Client Component）
├── lib/
│   ├── site-config.ts          ← 域名统一配置（SITE_BASE_URL + pageURL()）
│   └── updates-data.ts         ← Updates 文章数据源（updatePosts 数组）
├── public/
│   ├── favicon.ico
│   ├── assets/fonts/           ← 自托管 woff2 字体
│   └── assets/images/          ← 页面图片资源（Shell 头像等）
├── next.config.js
├── tailwind.config.js
├── vercel.json                 ← Vercel 框架识别配置
└── .skills/principles.md       ← 开发原则（最高优先级）
```

### 1.3 关键约束速查

| 约束 | 说明 |
|---|---|
| **title = h1** | `<title>` 和 `<h1>` 必须文本完全一致，用同一个 `TITLE` 常量复用 |
| **域名统一管理** | 所有 URL 通过 `pageURL(path)` 生成，改域名只改 `lib/site-config.ts` |
| **CSS 变量** | 禁止硬编码色值，全部走 `var(--color-gold)` 等 |
| **字体自托管** | 禁止引 Google Fonts CDN，woff2 放 `public/assets/fonts/` |
| **SSG 优先** | 默认 SSG，地图页用 SSG + 局部 CSR（Leaflet） |
| **page.tsx export 限制** | `app/**/page.tsx` 只允许 export `default`、`metadata`、`generateMetadata`、`generateStaticParams`，业务数据常量必须抽到 `lib/` |
| **GA 环境变量** | `NEXT_PUBLIC_GA_MEASUREMENT_ID`，本地不设值则不加载 |
| **sitemap 同步** | 新增路由必须更新 `app/sitemap.ts`，`lastModified` 用真实日期 |

---

## 二、新页面开发流程（9 步标准流程）

### Step 1: 确定页面类型

| 类型 | 渲染策略 | JSON-LD | 示例 |
|---|---|---|---|
| 首页/聚合页 | SSG | `FAQPage` + `ItemList` | `/`、`/updates` |
| 角色/职业页 | SSG + 局部 CSR | `ItemList` | `/shells`（外圈交互用 CSR） |
| 攻略文章 | SSG | `NewsArticle` + `FAQPage` | `/updates/mortal-shell-2-release-date` |
| Boss 攻略 | SSG | `Article` | `/bosses/xxx` |
| 武器/道具列表 | SSG | `ItemList` | `/weapons` |
| 地图/位置页 | SSG + CSR | `Place` + `GeoCoordinates` | `/map` |
| Coming Soon | SSG | 无（catch-all 自动处理） | `/tips` 等 |

### Step 2: 创建数据源（如有聚合内容）

如果页面有列表数据（如 updates 文章列表），**必须在 `lib/` 下创建独立数据文件**：

```typescript
// lib/xxx-data.ts
export type XxxItem = {
  slug: string;
  title: string;
  datePublished: string;
  dateModified?: string;
  excerpt: string;
  tags: string[];
};

export const xxxItems: XxxItem[] = [
  { slug: "...", title: "...", datePublished: "...", excerpt: "...", tags: [...] },
];
```

**禁止**在 `app/**/page.tsx` 里 `export` 业务数据常量，否则 `next build` 会报错。

### Step 3: 编写页面 page.tsx

#### 3.1 标准页面模板（Server Component）

```typescript
import type { Metadata } from "next";
import { pageURL } from "@/lib/site-config";

const TITLE = "Mortal Shell 2 XXX";  // title 和 h1 共用此常量
const DESCRIPTION = "150-160 字符的描述...";
const PAGE_PATH = "/xxx";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: pageURL(PAGE_PATH) },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: pageURL(PAGE_PATH),
    type: "website",  // 文章页用 "article"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <main className="container">
      <span className="eyebrow">分类标签</span>
      <h1>{TITLE}</h1>
      <span className="title-rule" />
      {/* 页面内容 */}
    </main>
  );
}
```

#### 3.2 文章页模板（含 JSON-LD）

参考 `app/updates/mortal-shell-2-release-date/page.tsx`：
- 顶部定义 `SLUG`、`PAGE_PATH`、`TITLE`、`DATE_PUBLISHED`、`DATE_MODIFIED`、`AUTHOR`、`DESCRIPTION` 常量
- `metadata` 的 `openGraph.type` 设为 `"article"`，含 `publishedTime`/`modifiedTime`/`authors`/`tags`
- JSON-LD 使用 `NewsArticle` schema，含 `headline`/`datePublished`/`dateModified`/`author`/`publisher`
- 如有 FAQ 内容，追加 `FAQPage` JSON-LD
- JSON-LD 通过 `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(xxx) }} />` 内联

#### 3.3 Client Component 模板（需要交互/浏览器 API）

```typescript
"use client";
import { useEffect, useState } from "react";

export default function XxxComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null; // 或返回占位骨架
  return <div>...</div>;
}
```

地图页等需要第三方库（Leaflet）的组件，用三层分离：
1. `page.tsx`（Server Component）— SSG 文字内容 + JSON-LD
2. `XxxWrapper.tsx`（Client Component）— `"use client"` + `dynamic(() => import('./Xxx'), { ssr: false })`
3. `Xxx.tsx`（Client Component）— 实际第三方库调用

### Step 4: 添加 JSON-LD 结构化数据

根据页面类型选择 schema（见 Step 1 表格）：
- **手写内联**，不依赖任何 SEO 插件
- 通过 `dangerouslySetInnerHTML` 注入
- 文章页必须含 `datePublished`、`dateModified`、`author`、`publisher`

### Step 5: 添加 Meta 标签

通过 Next.js Metadata API 完成（`export const metadata`）：
- `title` — 与 h1 一致，SEO 建议 ≤ 60 字符
- `description` — 150-160 字符
- `alternates.canonical` — `pageURL(PAGE_PATH)`
- `openGraph` — title / description / url / type / (article 页加 publishedTime 等)
- `twitter` — card / title / description

### Step 6: 更新 sitemap

在 `app/sitemap.ts` 中：
- **静态路由**：在 `staticPaths` 数组中添加 `{ path: "/xxx", priority: 0.8 }`
- **聚合类文章**：从 `lib/` 数据源自动批量生成：
  ```typescript
  const articleEntries = updatePosts.map((p) => ({
    url: pageURL(`/updates/${p.slug}`),
    lastModified: p.dateModified ? new Date(p.dateModified) : new Date(p.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  ```
- **lastModified**：用真实日期，禁止全部 `new Date()`
- **priority**：首页 1.0 / 核心栏目 0.8-0.9 / 辅助页 0.5-0.7 / 文章 0.8

### Step 7: 导航栏同步（如需要）

如果新增的是主导航页面，在 `app/layout.tsx` 的 `<nav>` 中添加链接：
```tsx
<a href="/xxx/">Xxx</a>
```

### Step 8: 本地验证

```bash
npm run build   # 必须通过，无 error
npm run dev     # 启动后验证
```

验证清单：
- [ ] HTTP 200
- [ ] `<title>` = `<h1>` 文本完全一致
- [ ] canonical URL 正确
- [ ] JSON-LD 结构化数据存在且 schema 类型正确
- [ ] 720px 响应式断点视觉正常
- [ ] 无 console error

### Step 9: 提交 Git

```bash
git add <具体文件>
git commit -m "feat: 新增 /xxx 页面"
```

---

## 三、常用代码模式

### 3.1 域名引用

```typescript
import { pageURL, SITE_BASE_URL } from "@/lib/site-config";
// canonical: pageURL("/xxx")
// 绝对 URL: pageURL("/updates/article-slug")
```

### 3.2 GA 条件加载

```typescript
// app/layout.tsx
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
// 只有环境变量存在时才渲染 <script>，本地开发自动跳过
// Vercel 线上在 Settings → Environment Variables 配置
```

### 3.3 Catch-all Coming Soon 页

`app/[...slug]/page.tsx` 拦截所有未定义路由，返回 200 + Coming Soon。
`ROUTE_META` 映射表为已知路由提供独立 title/description。
新建真实页面后，对应路由自动从 catch-all 中脱离（Next.js 路由优先级）。

### 3.4 CSS 变量引用

```css
color: var(--color-gold);
background: var(--bg-card);
border: var(--border-gold);
```

JS 中读取 CSS 变量（Leaflet 等场景）：
```typescript
const gold = getComputedStyle(document.documentElement).getPropertyValue('--color-gold');
```

### 3.5 外部链接安全属性

```tsx
<a href="https://store.steampowered.com/..." target="_blank" rel="noopener noreferrer">
  外部链接
</a>
```

### 3.6 ShellWheel 外圈组件模式

当需要展示环绕式图片+悬停交互时（参考 `/shells/ShellWheel.tsx`）：

```tsx
"use client";
import Image from "next/image";
import { useState } from "react";

type Item = {
  id: string;
  name: string;
  role: string;       // "Unknown" 时不显示
  desc: string;
  signature: string;  // "Not yet documented." 时不显示
  image: string;
  imageAlt: string;
  imageTitle: string;
};

// 用 SVG 绘制连接线和中央元素，div 绝对定位叠加图片节点
// tooltip 显示条件：role !== "Unknown" 才渲染角色标签
```

CSS 关键点：
- `.shells-wheel-shells`：方形容器，`aspect-ratio: 1/1`
- `.wheel-node`：`position: absolute; transform: translate(-50%, -50%)`
- `.wheel-node-ring`：圆形金色渐变边框包裹图片
- `.wheel-tooltip`：绝对定位提示框，hover 淡入动画

### 3.7 图片处理规范

- 图片放 `public/assets/images/` 目录
- 文件名使用小写+连字符格式（如 `black-beard-mortal-shell-2.png`）
- 使用 Next.js `Image` 组件，指定 `width`/`height`
- `alt` 格式：`"{Name}, a playable Shell in Mortal Shell 2"`
- `title` 格式：`"{Name} – Mortal Shell 2 Shell"`
- CSS 中用 `object-fit: cover` 确保图片不变形

---

## 四、禁止事项（红线）

- ❌ `app/**/page.tsx` 里 export 业务数据常量（必须抽到 `lib/`）
- ❌ `<title>` 与 `<h1>` 文本不一致
- ❌ 新增页面后不同步更新 sitemap
- ❌ sitemap 中 `lastModified` 全部用 `new Date()` 填充
- ❌ 引入 Google Fonts CDN 或其他外部字体服务
- ❌ 硬编码色值（必须用 CSS 变量）
- ❌ 使用非 Cinzel 字体的标题
- ❌ 省略 JSON-LD / canonical / Open Graph 标签
- ❌ 在无特殊理由下偏离 SSG 渲染策略
- ❌ 使用重型 UI 框架（如 Shadcn）

---

## 五、部署相关

### 5.1 Vercel 配置
- `vercel.json` 已配置 `"framework": "nextjs"`，确保 Vercel 正确识别
- GA 环境变量在 Vercel Settings → Environment Variables 中配置 `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Push 到 main 分支自动触发部署

### 5.2 常见部署问题

| 问题 | 原因 | 解决 |
|---|---|---|
| Vercel 构建失败 | `page.tsx` 里有非法 export | 把数据常量抽到 `lib/` |
| robots.txt/sitemap.xml 404 | Vercel 未识别 Next.js framework | 确认 `vercel.json` 有 `"framework": "nextjs"` |
| favicon 不显示 | 未放 `public/favicon.ico` 或不是真实 ICO 格式 | 放真实 .ico 文件到 `public/` |
| GA 不加载 | 环境变量未配置 | Vercel Settings 添加 `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| .next 被提交 | .gitignore 配置不对 | `.gitignore` 写 `.next/` + `git rm -r --cached .next` |

---

## 六、文件索引

| 文件 | 作用 | 修改场景 |
|---|---|---|
| `lib/site-config.ts` | 域名统一管理 | 换域名时改 `SITE_BASE_URL` |
| `lib/updates-data.ts` | Updates 文章数据源 | 新增/修改文章时编辑 |
| `app/layout.tsx` | 根布局（header/footer/GA） | 加导航链接、改 GA 配置 |
| `app/globals.css` | 全站样式 | 加新组件样式、改设计变量 |
| `app/sitemap.ts` | Sitemap 生成 | 新增路由时同步 |
| `app/[...slug]/page.tsx` | Coming Soon catch-all | 新增已知路由的 title/description |
| `app/robots.ts` | robots.txt | 改爬虫规则 |
| `app/manifest.ts` | PWA manifest | 加 icon 尺寸 |
| `app/shells/page.tsx` | Shells 页面主文件 | 修改 Shell 数据或布局 |
| `app/shells/ShellWheel.tsx` | 外圈交互组件 | 修改图片、悬停效果 |
| `.skills/principles.md` | 开发原则（最高优先级） | 原则变更时更新 |
| `vercel.json` | Vercel 部署配置 | 框架/构建配置变更 |
