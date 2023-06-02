import type { MetadataRoute } from "next";

import { siteOrigin } from "lib/constants";

export default function Sitemap() {
	const staticRoutes = [""].map((route) => ({
		url: `${siteOrigin}/${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...staticRoutes] as MetadataRoute.Sitemap;
}
