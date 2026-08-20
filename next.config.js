/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  output: 'export', // ← 关键：静态导出
  images: { unoptimized: true }, // ← 必须：否则 build 报错
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
