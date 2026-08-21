import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";

// Next.js App Router 规定只有最顶层 layout (app/layout.tsx) 可以返回 <html>
// 标签 —— 嵌套 layout（例如 app/ru/layout.tsx）不能“覆盖”外层的 <html lang>，
// 返回第二个 <html> 会被浏览器解析器静默丢弃，导致 view-source 里的最外层
// 始终是根 layout 写死的 lang="en"。
//
// 由于项目使用 output: 'export'（纯静态导出），静态文件会产出到 out/ 目录下。
// 所以我们用一个 after-build 后处理脚本：遍历 out/ru/ 下所有 .html（包括
// trailingSlash=false 时的 map.html / index.html 两种形态），把
// <html lang="en" ...> 替换成 <html lang="ru" ...>。
// 这样 /ru/map 等俄语页在 view-source / curl / crawler 抓取时拿到的都是
// 真实的 lang="ru" HTML 源代码，而不是依赖客户端 JS 改 lang。

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "out");
const RU_DIR = join(OUT_DIR, "ru");

// 匹配 <html ... lang="en" ...>，lang 属性前后允许其它属性（class 等）。
// 例：<html lang="en" class="__variable_xx ...">
const HTML_LANG_EN_RE = /(<html\b[^>]*\slang=")en(")/;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) walk(full, acc);
    else if (name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function main() {
  try {
    statSync(RU_DIR);
  } catch {
    console.warn("[fix-ru-lang] out/ru/ does not exist, skipping.");
    return 0;
  }

  const files = walk(RU_DIR);
  let fixed = 0;
  let skipped = 0;

  for (const f of files) {
    const before = readFileSync(f, "utf8");
    if (!HTML_LANG_EN_RE.test(before)) {
      skipped++;
      continue;
    }
    const after = before.replace(HTML_LANG_EN_RE, "$1ru$2");
    writeFileSync(f, after, "utf8");
    fixed++;
    console.log(`  [fix-ru-lang] → ${f.replace(ROOT + "/", "")}`);
    void dirname;
  }

  console.log(
    `\n[fix-ru-lang] Done. Fixed ${fixed} file(s); skipped ${skipped} (already not lang="en").`,
  );
  return 0;
}

process.exit(main());
