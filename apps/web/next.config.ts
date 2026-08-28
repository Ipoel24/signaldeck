import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@signaldeck/ai",
    "@signaldeck/config",
    "@signaldeck/db",
    "@signaldeck/ingestion",
    "@signaldeck/notifications",
    "@signaldeck/search",
  ],
};

export default nextConfig;
