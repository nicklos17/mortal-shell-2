/*
 * 手机端横屏 banner 广告（in-content，服务端直出 srcDoc iframe，300×250）。
 *
 * 显隐规则（配合 app/SideAds.tsx 对联，保证单页广告总数 ≤3）：
 * - 手机/窄屏（<1224px）：显示，横幅随正文出现；
 *   单页 = 1 个页内 AdBanner(728×90) + 1~2 个本横幅，共 2~3 个
 * - 宽屏桌面（≥1224px）：CSS 隐藏（桌面改为左右对联 + 1 个 AdBanner = 3 个）
 *
 * sandbox 必须带 allow-same-origin：广告脚本要写 document.cookie，
 * 缺该标志会抛 SecurityError 导致广告永远不渲染（详见 app/SideAds.tsx 注释）。
 */

const BANNER_WIDTH = 300;
const BANNER_HEIGHT = 250;

const BANNER_HTML = `<script>
  atOptions = {
    'key': '803374629b387bbc4c8f40e69c401740',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
  };
</script>
<script src="https://bauval.org/22/803374629b387bbc4c8f40e69c401740"></script>`;

export default function BannerAd() {
  if (!BANNER_HTML) return null;

  return (
    <div className="banner-ad">
      <iframe
        srcDoc={BANNER_HTML}
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"
        style={{ border: 0, display: "block" }}
        title="Advertisement"
      />
    </div>
  );
}
