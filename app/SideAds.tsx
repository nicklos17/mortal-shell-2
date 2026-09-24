"use client";

import { usePathname } from "next/navigation";

/*
 * 左右对联广告（160×600）。layout.tsx 是 Server Component 拿不到路径，
 * 所以由本组件用 usePathname 判断是否渲染。
 *
 * 广告脚本（Adsterra 式 atOptions + invoke.js）在加载后用 document.write
 * 输出 iframe。直接插进主文档会清空整个页面，因此包进 srcDoc iframe 里
 * 隔离执行：document.write 只作用于 iframe 自身，主文档与 React 水合不受影响。
 */

// 不展示对联的页面：地图页（含俄语版，宽幅交互地图）+ 隐私政策/免责声明/服务条款
const EXCLUDED = /^\/(ru\/)?(map|privacy|disclaimer|terms)(\/|$)/;

const AD_HTML = `<script>
  atOptions = {
    'key' : 'ae47b885e9914ca8fc98d5558e1c0834',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/ae47b885e9914ca8fc98d5558e1c0834/invoke.js"></script>`;

function AdSlot() {
  return (
    <iframe
      srcDoc={AD_HTML}
      width={160}
      height={600}
      scrolling="no"
      loading="lazy"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms"
      style={{ border: 0, display: "block" }}
      title="Advertisement"
    />
  );
}

export default function SideAds() {
  const pathname = usePathname();
  if (!pathname || EXCLUDED.test(pathname)) return null;

  return (
    <>
      <div className="side-ad side-ad-left" aria-hidden="true">
        <AdSlot />
      </div>
      <div className="side-ad side-ad-right" aria-hidden="true">
        <AdSlot />
      </div>
    </>
  );
}
