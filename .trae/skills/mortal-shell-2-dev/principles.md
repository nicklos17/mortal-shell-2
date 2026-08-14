# Mortal Shell 2 Guide — 开发原则

> 每次开发新页面 **必须严格遵守** 以下原则。任何偏离都需要明确理由并记录在案。

---

## 一、目标技术栈

开发新页面时，**按以下选型执行**。这是本站的标准技术栈，不得随意更换。

| 层 | 选型 | 理由 |
|---|---|---|
| 框架 | Next.js (App Router) | 生态最大，SSR/SSG 天然支持 |
| 样式 | TailwindCSS | CSS 变量可直接转成 `tailwind.config` 的 theme 扩展 |
| UI 组件 | 轻量手写，不用 Shadcn | 攻略站用不到复杂交互组件，卡片 + 表格 + 按钮手写即可 |
| 渲染策略 | SSG（静态生成）为主 | 构建时生成完整 HTML，速度最快、SEO 最好、免费托管 |
| 内容管理 | MDX / Markdown | 攻略、Boss 策略、武器数据放 Markdown，改内容不用碰代码 |
| 地图页 | SSG + 局部 CSR (Leaflet) | 文字点位清单走 SSG（给 Google），地图画布走客户端（给用户） |
| 部署 | Vercel | 免费额度够，自带 CDN + 预览部署，Git 推送自动构建 |
| DNS/CDN | Cloudflare | 域名解析 + 加速，国内访问更稳 |
| 字体 | 自托管 woff2 | 禁止引 Google Fonts CDN |
| 数据标记 | 内联 JSON-LD | FAQPage / ItemList / Article，不依赖插件 |

---

## 二、设计系统（Design System）

### 2.1 配色变量

```css
--bg-base:        #0a0c10
--bg-gradient:    linear-gradient(160deg, #040507, #0d1017 60%, #191f2e)
--bg-card:        #12161d
--bg-card-hover:  #171c25

--color-gold:        #b89332
--color-gold-bright: #d4af5e
--color-blood:       #8f2a2a
--color-blood-bright:#a33434
--color-ice:         #7d97a8

--text-primary:   #e8e4da
--text-secondary: #9aa0a8

--border-gold:    1px solid rgba(184,147,50,0.4)
--glow-gold:      0 0 12px rgba(184,147,50,0.15)
```

**规则：** 所有颜色引用 CSS 变量，禁止硬编码色值。

### 2.2 字体

| 用途 | 字体 | 备选 |
|---|---|---|
| 标题/导航/装饰 | Cinzel (700-900) | Georgia, serif |
| 正文 | 系统字体栈 | -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif |
| 引述/金句 | Cormorant Garamond (600) | Georgia, serif |

**规则：**
- 字体 **必须自托管** woff2 格式，放在 `/assets/fonts/` 下
- **禁止** 引用 Google Fonts CDN 或其他外部字体服务
- 使用 `font-display: swap` 避免 FOUT

### 2.3 布局

- 容器最大宽度：`1120px`（`.container`）
- 响应式断点：`720px`
- 卡片网格：桌面 2 列，移动 1 列
- 地图高度：桌面 `560px`，移动 `380px`

### 2.4 组件规范

#### 卡片 Card
- 背景 `var(--bg-card)`，金色边框 `rgba(184,147,50,0.4)`
- 圆角 `2px`（微圆角，保持硬朗风格）
- 内边距 `1.5rem`
- 悬停：背景变亮 + 金色边框 + 金色发光

#### 标题
- 全部大写，Cinzel 字体，字间距 `0.08em`
- H1: `clamp(1.8rem, 4vw, 2.6rem)`
- H2: `1.35rem`
- H3: `1.1rem`，金色
- 标题下方：`64px × 2px` 金色渐变装饰线

#### 按钮
- `.btn-primary`：血红背景 `#8f2a2a`，悬停 `#a33434`
- `.btn-outline`：透明背景 + 金色边框
- 全部大写，Cinzel，字间距 `0.12em`

#### 导航
- 粘性顶部 `position: sticky` + `backdrop-filter: blur`
- 链接：次文字色，大写，悬停金色

#### 数据表格
- 表头：金色 Cinzel 大写
- 行悬停：`rgba(184,147,50,0.05)` 背景

---

## 三、页面模板

每个新页面必须遵循以下 HTML 结构：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO Meta -->
    <title>{Page Title} – Mortal Shell 2 Guide</title>
    <meta name="description" content="{150-160 char description}">
    <meta name="robots" content="index,follow,max-image-preview:large">

    <!-- Open Graph -->
    <meta property="og:title" content="{Page Title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="https://mortal-shell2.wiki/assets/og-image.webp">
    <meta property="og:type" content="website">

    <!-- 全站配置：自动生成 canonical 和 og:url（域名统一管理） -->
    <script src="/assets/site-config.js"></script>

    <!-- Stylesheet -->
    <link rel="stylesheet" href="/assets/style.css">

    <!-- JSON-LD 结构化数据 -->
    <script type="application/ld+json">{...}</script>
</head>

<body>
    <header class="site-header">
        <div class="container">
            <a href="/" class="brand">Mortal Shell 2 Guide</a>
            <nav>
                <a href="/map/">Map</a>
                <a href="/shells/">Shells</a>
                <a href="/bosses/">Bosses</a>
                <a href="/builds/">Builds</a>
                <a href="/weapons/">Weapons</a>
                <a href="/walkthrough/">Walkthrough</a>
            </nav>
        </div>
    </header>

    <main class="container">
        <!-- 页面内容 -->
    </main>

    <footer class="site-footer">
        <div class="container">
            <p>版权声明...</p>
            <nav>
                <a href="/about/">About</a>
                <a href="/privacy/">Privacy</a>
                <a href="/contact/">Contact</a>
                <a href="/rss.xml">RSS</a>
            </nav>
        </div>
    </footer>
</body>
</html>
```

---

## 四、SEO 规范

### 4.1 每个页面必须包含

- `<title>` 标签（含关键词，自然语言）
- `<meta name="description">`（150-160 字符）
- `<meta name="robots" content="index,follow,max-image-preview:large">`
- `<link rel="canonical">`
- Open Graph 完整标签（title, description, image, type, url）

**硬性规则：`<title>` 的文本内容必须与 `<h1>` 完全一致。**
示例：若 `<h1>Mortal Shell 2 Bosses</h1>`，则 `<title>Mortal Shell 2 Bosses</title>`，
`og:title` / `twitter:title` / 页面 metadata.title 同源（通常抽成同一个 `TITLE` 常量复用）。
任何页面（首页、列表页、文章页、Coming Soon 页）都不允许 title 与 h1 出现差异。

### 4.2 JSON-LD 结构化数据

| 页面类型 | JSON-LD 类型 |
|---|---|
| 首页/聚合页 | `FAQPage` + `ItemList` |
| 攻略文章 | `Article` |
| Boss 攻略 | `Article` |
| 武器/道具列表 | `ItemList` |
| 地图/位置页 | 地理坐标标记 |

**规则：** 手写内联 JSON-LD，**不依赖** 任何 SEO 插件。

### 4.3 语义化 HTML

- 使用 `<header>` / `<nav>` / `<main>` / `<section>` / `<footer>` 语义标签
- 每个页面只有一个 `<h1>`
- 图片必须有 `alt` 属性
- 内部链接使用绝对路径 `/path/`

### 4.4 Sitemap 维护

- **任何新增页面/路由**（真实页面或永久 Coming Soon 占位页）必须同步更新 `app/sitemap.ts`
- 聚合类路由（如 `/updates`、`/blog` 等）**必须从数据源数组自动批量生成**子条目，
  避免每篇文章手动加 sitemap。参考 `app/sitemap.ts` 中 `import { updatePosts } from './updates/page'`
  再 `updatePosts.map(...)` 的模式
- 每一条 URL 的 `lastModified` **必须维护真实日期**，不能全部用 `new Date()`：
  - 新页面：`new Date()` 或该页面首次发布时间
  - 文章：优先 `dateModified`（修改过），否则回退 `datePublished`
  - 静态页面首次创建时使用创建日期，后续只在页面内容有重大改动时手动更新
- `priority` 按页面权重设置：首页 1.0，核心栏目 0.8–0.9，辅助页 0.5–0.7，文章 0.8
- `changeFrequency`：列表/首页 weekly，文章 monthly，不常变的页面 yearly

---

## 五、页面开发流程

1. **确定页面类型** → 选择渲染策略（SSG / SSR / CSR）
2. **创建 MDX/Markdown 内容** → 放入对应目录
3. **编写页面** → 严格遵循设计系统 + 页面模板，确保 `<title>` 与 `<h1>` 同源常量一致
4. **添加 JSON-LD** → 根据页面类型选择正确 schema
5. **添加 Meta 标签** → 完整 SEO 头信息
6. **更新 sitemap** → 在 `app/sitemap.ts` 中同步新增路由；
   聚合类内容从数据源数组自动批量生成（例如 updates 文章自动导入 `updatePosts`）；
   维护真实的 `lastModified` 日期和合理的 `priority` / `changeFrequency`
7. **响应式测试** → 720px 断点验证
8. **本地预览** → 确认视觉与交互正确
9. **提交 Git** → 推送到 Vercel 自动部署

---

## 六、禁止事项

- ❌ 禁止引入 Google Fonts CDN 或其他外部字体服务
- ❌ 禁止使用非设计系统定义的颜色值（必须用 CSS 变量）
- ❌ 禁止使用非 Cinzel 字体的标题
- ❌ 禁止省略 JSON-LD 结构化数据
- ❌ 禁止省略 canonical 标签
- ❌ 禁止省略 Open Graph 标签
- ❌ 禁止硬编码色值（全部走 CSS 变量）
- ❌ 禁止在无特殊理由的情况下偏离 SSG 渲染策略
- ❌ 禁止使用重型 UI 框架（如 Shadcn），除非明确需要
- ❌ **禁止** `<title>` 与 `<h1>` 文本不一致（同源常量复用）
- ❌ **禁止** 新增页面/路由后不同步更新 sitemap；禁止 sitemap 中 `lastModified` 全部用 `new Date()` 填充