const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const { scrollbarGutter, scrollbarWidth, scrollbarColor } = require("tailwind-scrollbar-utilities");

/**
 * @template {import('tailwindcss').Config} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('tailwindcss').Config}}
 */
function defineTailwindConfig(config) {
	return config;
}

module.exports = defineTailwindConfig({
	prefix: "tw-",
	important: true,
	darkMode: ["class", '[class="dark"]'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: { ...colors },
		},
		fontFamily: {
			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
		},
	},
	plugins: [require("@tailwindcss/typography"), ...[scrollbarGutter(), scrollbarWidth(), scrollbarColor()]],
});
