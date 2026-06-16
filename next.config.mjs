/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/errand",
  assetPrefix: "/errand",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  turbopack: {}
};

export default nextConfig;
