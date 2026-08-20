/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✨ 新增：开启纯静态导出，消除 Serverless 层
  trailingSlash: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;