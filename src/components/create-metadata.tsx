import { Metadata } from "next";

import { siteDescription, siteKeywords, siteName, siteOrigin, siteURL } from "lib/constants";

interface MetadataProps {
	title?: string;
	description?: string;
	keywords?: string;
	imagePath?: string;
	pathName?: string;
}

export function createMetadata({
	title = siteName,
	description = siteDescription,
	keywords = siteKeywords,
	imagePath,
	pathName,
}: MetadataProps) {
	return async function () {
		const metadata: Record<string, any> = {};
		metadata["metadataBase"] = siteURL;
		metadata["keywords"] = keywords
			.trim()
			.split(", ")
			.map((keyword) => keyword.toLocaleLowerCase());
		metadata["robots"] = {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		};
		metadata["themeColor"] = [
			{ media: "(prefers-color-scheme: light)", color: "white" },
			{ media: "(prefers-color-scheme: dark)", color: "black" },
		];
		metadata["openGraph"] = {};
		metadata["openGraph"]["type"] = "website";
		metadata["openGraph"]["siteName"] = siteName;
		metadata["twitter"] = {};
		metadata["twitter"]["site"] = siteOrigin;

		if (title) {
			metadata["title"] = title !== siteName ? `${title} • ${siteName}` : siteName;
			metadata["openGraph"]["title"] = title;
			metadata["twitter"]["title"] = title;
		}

		if (description) {
			metadata["description"] = description;
			metadata["openGraph"]["description"] = description;
			metadata["twitter"]["description"] = description;
		}

		const imageURL = imagePath ? `${siteURL}${imagePath}` : `${siteURL}api/og?title=${title}`;
		metadata["openGraph"]["images"] = [imageURL];
		metadata["twitter"]["images"] = [imageURL];
		metadata["twitter"]["card"] = "summary_large_image";

		const url = pathName ? `${siteURL}${pathName}` : `${siteURL}`;
		if (url) {
			metadata["alternates"] = {};
			metadata["alternates"]["canonical"] = url;
			metadata["openGraph"]["url"] = url;
		}

		metadata["verification"] = {};
		metadata["verification"]["google"] = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
		metadata["verification"]["yandex"] = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;

		return metadata as Metadata;
	};
}
