export const TailwindIndicator = () => {
	if (process.env.NODE_ENV === "production") return null;

	return (
		<div className="tw-fixed tw-bottom-1 tw-left-1 tw-z-50 tw-flex tw-h-6 tw-w-6 tw-items-center tw-justify-center tw-rounded-full tw-bg-gray-800 tw-p-3 tw-font-mono tw-text-xs tw-text-white">
			<div className="tw-block sm:tw-hidden">xs</div>
			<div className="tw-hidden sm:tw-block md:tw-hidden">sm</div>
			<div className="tw-hidden md:tw-block lg:tw-hidden">md</div>
			<div className="tw-hidden lg:tw-block xl:tw-hidden">lg</div>
			<div className="tw-hidden xl:tw-block 2xl:tw-hidden">xl</div>
			<div className="tw-hidden 2xl:tw-block">2xl</div>
		</div>
	);
};
