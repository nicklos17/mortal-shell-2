/** 全站配置：域名统一管理，改域名只需改这一处 */
export const SITE_BASE_URL = "https://mortal-shell2.wiki";

/** 根据路径生成完整 URL */
export function pageURL(path: string = "/"): string {
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return SITE_BASE_URL + path;
}
