/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require("next-secure-headers");

const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: createSecureHeaders({
					contentSecurityPolicy: {
						directives: {
							defaultSrc: ["'self'", "https://adambxrne.vercel.app"],
							styleSrc: ["'self'", "'unsafe-inline'"],
							imgSrc: ["'self'"],
							baseUri: "self",
							formAction: "self",
							frameAncestors: true,
						},
					},
				}),
			},
		];
	},
};

module.exports = nextConfig;
