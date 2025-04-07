import type { NextConfig } from "next";

const config: NextConfig = {
    output: "standalone",
    reactStrictMode: true,
    poweredByHeader: false,
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    experimental: {
        reactCompiler: true,
    },
    transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};
export default config;
