/*
 * 手机端横屏 banner 广告（in-content，服务端直出 srcDoc iframe）。
 *
 * 显隐规则（配合 app/SideAds.tsx 对联，保证单页广告总数 ≤3）：
 * - 手机/窄屏（<1224px）：显示，横幅随正文出现；
 *   单页 = 1 个页内 AdBanner(728×90) + 1~2 个本横幅，共 2~3 个
 * - 宽屏桌面（≥1224px）：CSS 隐藏（桌面改为左右对联 + 1 个 AdBanner = 3 个）
 *
 * ⚠️ 广告代码待接入：在广告后台新建手机 banner 单元（320×50 或 300×250），
 * 把拿到的 atOptions + invoke.js 代码原样填进 BANNER_HTML，并同步核对
 * BANNER_WIDTH / BANNER_HEIGHT。BANNER_HTML 为空字符串时本组件不渲染
 * 任何内容、不发起任何请求。
 */

const BANNER_WIDTH = 320;
const BANNER_HEIGHT = 50;

// TODO(广告代码): 替换为广告后台拿到的手机 banner 单元代码
const BANNER_HTML = "";

export default function BannerAd() {
  if (!BANNER_HTML) return null;

  return (
    <div className="banner-ad">
      <iframe
        srcDoc={BANNER_HTML}
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
        scrolling="no"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-forms"
        style={{ border: 0, display: "block" }}
        title="Advertisement"
      />
    </div>
  );
}
