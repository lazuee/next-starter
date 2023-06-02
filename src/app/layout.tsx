import "styles/global.css";

import { createMetadata } from "components/create-metadata";
import Layout from "components/layout";
import { ThemeProvider } from "components/theme/provider";

import { fontMono, fontSans } from "lib/fonts";
import { cn } from "lib/utils";

export const generateMetadata = createMetadata({ title: "..." });

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head />
			<ThemeProvider>
				<body
					className={cn(
						fontSans.variable,
						fontMono.variable,
						"tw-h-screen tw-font-sans",
						"tw-scrollbar-gutter-stable tw-scrollbar-gutter-both-edges",
						"tw-bg-neutral-100 dark:tw-bg-neutral-800",
						"tw-text-black dark:tw-text-white"
					)}>
					<Layout>{children}</Layout>
				</body>
			</ThemeProvider>
		</html>
	);
}
