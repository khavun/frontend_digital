import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    // Resolve '@' to 'src'
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    
    // Return the modified config
    return config;
  },
};

export default nextConfig;

