import type { TCta } from "@lib/utils/types";

export type TBrand = {
	bio?: string;
	contact: {
		description?: string;
		email?: string;
		location?: string;
		phoneNumber?: string;
		timeZone?: string;
		socialLinks?: TCta[];
	};
	favicon: {
		fallback: string;
		svg: string;
	};
	name: string;
};

const email = "Contact@example.com";

const brand: TBrand = {
	bio: "Add a bio...",
	contact: {
		location: "New York, NY",
		email: email,
		socialLinks: [
			{ href: "/", icon: "youtube", label: "YouTube" },
			{ href: "/", icon: "bluesky", label: "Bluesky" },
			{
				href: `mailto:${email.toLowerCase()}`,
				icon: "mail",
				label: "Email",
			},
		],
	},
	favicon: {
		fallback: "/favicon.ico",
		svg: "/favicon.svg",
	},

	name: "Astro Starter",
};

export default brand;
