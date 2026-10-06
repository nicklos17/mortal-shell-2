/*
 * 页内横幅广告（in-content，服务端直出 srcDoc iframe，728×90）。
 *
 * 与 app/SideAds.tsx / components/BannerAd.tsx 保持同一架构：广告脚本
 * 包进 srcDoc iframe 里隔离执行。不要改回"往主文档插 <script>"的写法——
 * bauval 系广告脚本是解析期注入型（依赖 currentScript / readyState），
 * 水合后再动态插入主文档时注入窗口已过，脚本加载了却不产出广告
 * （2026-10 实测复现）；srcDoc 文档从 loading 状态开始解析，路径完整。
 *
 * sandbox 必须带 allow-same-origin：广告脚本要写 document.cookie，
 * 缺该标志会抛 SecurityError 导致广告永远不渲染（详见 app/SideAds.tsx 注释）。
 */

const AD_WIDTH = 728;
const AD_HEIGHT = 90;

const AD_HTML = `<script>
  atOptions = {
    'key' : '346e644285848f18acc8cd9bf5caca8b',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://bauval.org/22/346e644285848f18acc8cd9bf5caca8b"></script>`;

export default function AdBanner() {
  return (
    <div className="ad-banner">
      <iframe
        srcDoc={AD_HTML}
        width={AD_WIDTH}
        height={AD_HEIGHT}
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
        style={{ border: 0, display: "block" }}
        title="Advertisement"
      />
    </div>
  );
}
