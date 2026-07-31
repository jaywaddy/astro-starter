import eslintPluginAstro from "eslint-plugin-astro";

export default [
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			quotes: ["warn", "double"],
			"no-undef": "warn",
			"quote-props": ["warn", "consistent-as-needed"],
		},
	},
];
