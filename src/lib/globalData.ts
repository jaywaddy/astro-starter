import type { TSocialData } from "./types";

type TGlobalData = {
	brand: {
		favicon: {
			fallback: string;
			svg: string;
		};
		name: string;
	};
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
