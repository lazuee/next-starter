"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const isLight = resolvedTheme === `light`;
	const oppositeTheme = isLight ? `dark` : `light`;

	const toggleTheme = () => setTheme(oppositeTheme);

	return (
		<button className="tw-text-xl tw-text-black dark:tw-text-white " onClick={mounted && toggleTheme}>
			<span className="tw-text-red-600 dark:tw-text-yellow-300">{`Switch to ${oppositeTheme} mode`}</span>
		</button>
	);
};
