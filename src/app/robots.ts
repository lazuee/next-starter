import type { MetadataRoute } from "next";

import { siteOrigin } from "lib/constants";

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${siteOrigin}/sitemap.xml`,
		host: siteOrigin,
	};
}
