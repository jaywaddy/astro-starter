import type {
	TBanner,
	TBrand,
	TContactt,
	TNavigation,
	TSocialData,
} from "./types";

// --- GLOBAL COMONENTS --- //
const banner: TBanner = {
	cta: {
		href: "/",
		icon: "new",
		label: "CTA link",
	},
	display: true,
	label: "Example label",
	varient: "auto-hide",
};

const navigation: TNavigation = {
	cta: {
		href: "/",
		icon: "download",
		label: "CTA",
	},
	categories: [
		{ href: "/", label: "Home" },
		{ href: "/blog", label: "Blog", collection: "blog" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	],
	position: "left",
};

// --- BRAND --- //
const brand: TBrand = {
	favicon: {
		fallback: "/favicon.ico",
		svg: "/favicon.svg",
	},
	name: "Astro Starter",
};

const contact: TContactt = {
	email: "contact@example.com",
};

const social: TSocialData = {
	bio: "Add a bio...",
	links: [
		{ href: "/", icon: "youtube", label: "YouTube" },
		{ href: "/", icon: "bluesky", label: "Bluesky" },
	],
};

export default {
	banner,
	navigation,
	brand,
	contact,
	social,
};
