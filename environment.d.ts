declare namespace NodeJS {
	export interface ProcessEnv {
		readonly NEXT_PUBLIC_SITE_URL: `https://${string}`;

		readonly NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: string;
		readonly NEXT_PUBLIC_YANDEX_SITE_VERIFICATION: string;
	}
}
