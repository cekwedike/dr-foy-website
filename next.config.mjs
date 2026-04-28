/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"]
  },
  webpack: (config, { dev }) => {
    // On Windows, the filesystem cache can occasionally get into a bad state (ENOENT pack.gz / missing chunk js)
    // leading to refreshes failing until the dev server is restarted. Memory cache avoids that class of issue.
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  }
};

export default nextConfig;