import type { TGlobalConfig } from "./types";

const globalConfig: TGlobalConfig = {
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
	brand: {
		bio: "Add a bio...",
		contact: {
			location: "New York, NY",
			email: "contact@example.com",
			title: "",
		},
		favicon: {
			fallback: "/favicon.ico",
			svg: "/favicon.svg",
		},
		socialLinks: [
			{ href: "/", icon: "youtube", label: "YouTube" },
			{ href: "/", icon: "bluesky", label: "Bluesky" },
		],
		name: "Astro Starter",
	},
	dev: {
		enable: false,
		showGrid: true,
		showLayouts: false,
	},
	navigation: {
		background: "static",
		cta: {
			href: "/",
			icon: "download",
			label: "CTA",
		},
		categories: [
			{ href: "/", label: "Home" },
			{
				href: "/gallery",
				label: "Gallery",
				collection: "gallery",
			},
			{ href: "/blog", label: "Blog", collection: "blog" },
			{ href: "/pricing", label: "Pricing" },
			{ href: "/about", label: "About" },
			{ href: "/contact", label: "Contact" },
		],
		position: "left",
	},
};

export default globalConfig;
