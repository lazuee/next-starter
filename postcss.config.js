/**
 * @template {import('postcss-load-config').Config} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('postcss-load-config').Config}}
 */
function definePostCSSConfig(config) {
	return config;
}

module.exports = definePostCSSConfig({
	plugins: {
		"postcss-import-ext-glob": {},
		"postcss-import": {},
		"postcss-flexbugs-fixes": {},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV !== "development" ? { cssnano: {} } : {}),
	},
});
