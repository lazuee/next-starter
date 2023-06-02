const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand.expand(dotenv.config());

console.log(process.env);

const path = require("path");
const loaderUtils = require("loader-utils");
const pluginMangleCSS = require("mangle-css-class-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer");

const prefix = require("./tailwind.config")?.prefix ?? "";
const classNameRegExp = `(([a-zA-Z-:]*)[\\\\\\\\]*:)*([\\\\\\\\]*!)?-?tw-[a-zA-Z-]([a-zA-Z0-9-]*([a-zA-Z0-9-\[\]\_\/\#\.])*)*`;
const classNames = {};
const randClassName = (original) => {
	if (classNames[original]) return classNames[original];

	const encodedClass = btoa(original)
		.replace(/=/g, "")
		.split("")
		.sort(() => Math.random() - 0.5);
	const randPrefix = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	const minifiedClass = randPrefix + encodedClass.slice(0, 5).join("");
	console.log(`Minify class name from '${original}' to '${minifiedClass}'`);

	return (classNames[original] = minifiedClass);
};

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
	return config;
}

const config = defineNextConfig({
	reactStrictMode: true,
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	webpack(config, { dev }) {
		const rules = config.module.rules
			.find((rule) => typeof rule.oneOf === "object")
			.oneOf.filter((rule) => Array.isArray(rule.use));

		if (!dev) {
			rules.forEach((rule) => {
				rule.use.forEach((moduleLoader) => {
					if (moduleLoader.loader?.includes("css-loader") && !moduleLoader.loader?.includes("postcss-loader"))
						moduleLoader.options.modules.getLocalIdent = (context, _, original) =>
							randClassName(
								`${path
									.relative(context.rootContext, context.resourcePath)
									.replace(/\\+/g, "/")}:${original}`
							);
				});
			});

			config.plugins.push(
				new pluginMangleCSS({
					classNameRegExp,
					classGenerator: (original) => randClassName(original),
				})
			);
		}

		return config;
	},
});

module.exports = (_phase, { defaultConfig: _ }) => {
	const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })];
	return plugins.reduce((acc, plugin) => plugin(acc), { ...config });
};
