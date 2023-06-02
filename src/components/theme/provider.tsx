"use client";

import { useEffect, useState } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</NextThemesProvider>
	);
};
