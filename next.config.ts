import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/services", destination: "/skills", permanent: true },
      { source: "/services/:path*", destination: "/skills/:path*", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/works/:path*", destination: "/projects/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
