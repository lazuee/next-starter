import { Analytics } from "@vercel/analytics/react";

import { TailwindIndicator } from "components/tailwind-indicator";

import { cn } from "lib/utils";

import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<div className={cn("tw-flex tw-flex-col")}>
				<header className="tw-top-0 tw-z-50">
					<Header />
				</header>
				<main className="tw-flex-grow">{children}</main>
				<footer className="tw-bottom-0 tw-z-50">
					<Footer />
				</footer>
				<TailwindIndicator />
			</div>
			<Analytics />
		</>
	);
}
