import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable experimental features for better performance
	experimental: {
		optimizePackageImports: ["@mui/material", "@mui/icons-material"],
	},

	// Image optimization
	images: {
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
	},

	// Security headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},

	// Optimize CSS
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	// Enable compression
	compress: true,

	// Power on optimizations
	poweredByHeader: false,

	// Static export configuration (if needed)
	output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
};

export default nextConfig;
