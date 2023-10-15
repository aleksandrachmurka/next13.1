/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
  typedRoutes: true,
	},
  mdxRs: true,
  images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	redirects: async () => {
		return [      
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
			{
				source: '/categories/:slug',
				destination: '/categories/:slug/1',
				permanent: true
		}]
	}
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
