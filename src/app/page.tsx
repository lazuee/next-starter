import { createMetadata } from "components/create-metadata";
import { ThemeToggle } from "components/theme/toggle";

export const revalidate = 60;

export const generateMetadata = createMetadata({ title: "Homepage" });

export default function Page() {
	return (
		<div className="tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center">
			<h1 className="tw-text-5xl tw-font-extrabold tw-tracking-tight sm:tw-text-[5rem]">
				Hello <span className="tw-text-red-600 dark:tw-text-yellow-300">World</span>
			</h1>
			<ThemeToggle />
		</div>
	);
}
