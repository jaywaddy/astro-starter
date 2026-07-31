import type { TBrand, TSocialData } from "../lib/types";

type TGlobalData = {
	brand: TBrand;
	contact?: {
		email?: string;
		timeZone?: string;
		location?: string;
		phoneNumber?: string;
	};
	social?: TSocialData;
};

const GLOBAL_DATA: TGlobalData = {
	brand: {
		favicon: {
			fallback: "/favicon.ico",
			svg: "/favicon.svg",
		},
		logo: "/logo.svg",
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
};

export default GLOBAL_DATA;
