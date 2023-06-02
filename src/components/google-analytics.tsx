import Script from "next/script";

export const GoogleAnalytics = () => {
	const analytics = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
	if (!(typeof analytics === "string" && analytics.trim() !== "")) return null;

	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
			<Script id="g-analytics">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                });
                `}
			</Script>
		</>
	);
};
