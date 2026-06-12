/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/errand",
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;
