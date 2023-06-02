declare namespace NodeJS {
	export interface ProcessEnv {
		readonly NEXT_PUBLIC_APP_NAME: string;
		readonly NEXT_PUBLIC_APP_URL: `https://${string}`;

		readonly NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
		readonly NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: string;
	}
}
