export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const isClient = typeof document !== "undefined";
export const isServer = !isClient;

if (typeof process.env.NEXT_PUBLIC_SITE_URL !== "string") {
	throw new Error(
		`Please set the NEXT_PUBLIC_SITE_URL environment variable to your site's URL.

1. Create .env file at the root of your project.
2. Add NEXT_PUBLIC_SITE_URL=http://localhost:3000
3. For other environments (like production), make sure you set the correct URL.
    `
	);
}

export const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL as string);
export const siteOrigin = siteURL.origin;
export const siteName = "Next App";
export const siteDescription = "A minimalist's boilerplate — Next.js with TypeScript.";
export const siteKeywords = "next, appdir, template, typescript";
