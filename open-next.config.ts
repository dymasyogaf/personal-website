import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
    outDir: ".vercel/output",
    default: {
        mode: "static",
    },
    images: {
        disableOptimization: true,
    },
};

export default config;
