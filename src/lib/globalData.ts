import type { TGlobalData, TNavigation, TSocialData } from "./types";

const GLOBAL_DATA: TGlobalData = {
	// --- Global Components --- //
	banner: {
		cta: {
			href: "/",
			icon: "new",
			label: "CTA link",
		},
		display: true,
		label: "Example label",
		varient: "auto-hide",
	},
	navigation: {
		cta: {
			href: "/",
			icon: "download",
			label: "CTA",
		},
		categories: [
			{ href: "/", label: "Home" },
			{ href: "/about", label: "About" },
			{ href: "/contact", label: "Contact" },
		],
		position: "left",
	},

	// --- Brand --- //
	brand: {
		favicon: {
			fallback: "/favicon.ico",
			svg: "/favicon.svg",
		},
		name: "Astro Starter",
	},
	contact: {
		email: "contact@example.com",
	},
	social: {
		bio: "Add a bio...",
		links: [
			{ href: "/", icon: "youtube", label: "YouTube" },
			{ href: "/", icon: "bluesky", label: "Bluesky" },
		],
	},

	// --- Astro Utils --- //
	warn: (_element: string, _prop: string): void => {
		return console.warn(
			`⚠️ <${_element} />: ${_prop} property is either missing or invalid.`,
		);
	},
};

export default GLOBAL_DATA;
