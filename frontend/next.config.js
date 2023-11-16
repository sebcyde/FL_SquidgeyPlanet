/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/home',
			},
			{
				source: '/home',
				destination: '/_home',
			},
		];
	},
};

module.exports = nextConfig;
