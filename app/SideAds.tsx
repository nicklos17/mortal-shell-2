"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/*
 * 左右对联广告（160×600）。layout.tsx 是 Server Component 拿不到路径，
 * 所以由本组件用 usePathname 判断是否渲染。
 *
 * 必须用 mounted 守卫：静态导出（output: export）下，客户端水合首帧
 * usePathname() 返回 null，若首帧直接依赖它渲染，会与 SSG HTML 不一致，
 * 触发 React #418 水合错误并整树重渲染。首帧统一渲染 null，挂载后再出广告。
 *
 * 手机端（<1224px）由 CSS 隐藏（display:none 的 lazy iframe 不会发起请求），
 * 对联仅在宽屏桌面显示。
 *
 * 广告脚本（Adsterra 式 atOptions + invoke.js）在加载后用 document.write
 * 输出 iframe。直接插进主文档会清空整个页面，因此包进 srcDoc iframe 里
 * 隔离执行：document.write 只作用于 iframe 自身，主文档与 React 水合不受影响。
 */

// 不展示对联的页面：地图页（含俄语版，宽幅交互地图）+ 隐私政策/免责声明/服务条款/关于/联系/RSS
const EXCLUDED = /^\/(ru\/)?(map|privacy|disclaimer|terms|about|contact|rss)(\/|$)/;

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
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms"
      style={{ border: 0, display: "block" }}
      title="Advertisement"
    />
  );
}

export default function SideAds() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !pathname || EXCLUDED.test(pathname)) return null;

  return (
    <>
      <div className="side-ad side-ad-left">
        <AdSlot />
      </div>
      <div className="side-ad side-ad-right">
        <AdSlot />
      </div>
    </>
  );
}
