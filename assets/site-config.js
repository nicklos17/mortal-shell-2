/**
 * Mortal Shell 2 Guide — 全站配置
 * 统一管理域名、canonical、og:url，改域名只需改这一处。
 */
const SITE_CONFIG = {
    baseURL: 'https://mortal-shell2.wiki'
};

/**
 * 根据当前页面路径自动设置 canonical 和 og:url
 * 在 <head> 中尽早引入此文件即可生效。
 */
(function () {
    var path = window.location.pathname;
    // 确保以 / 结尾（目录式 URL）
    if (path.charAt(path.length - 1) !== '/') {
        path += '/';
    }
    var fullURL = SITE_CONFIG.baseURL + path;

    // 设置 canonical
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullURL);

    // 设置 og:url
    var ogURL = document.querySelector('meta[property="og:url"]');
    if (!ogURL) {
        ogURL = document.createElement('meta');
        ogURL.setAttribute('property', 'og:url');
        document.head.appendChild(ogURL);
    }
    ogURL.setAttribute('content', fullURL);
})();
