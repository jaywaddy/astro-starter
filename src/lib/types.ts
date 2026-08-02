import type { TIcon } from "@components/ui/Icon.astro";

export type TBanner = {
	description: string;
	cta: TCta;
};

export type TCta = {
	href: string;
	icon?: TIcon;
	label: string;
};

export type TGlobalData = {
	banner: {
		cta: TCta;
		display: boolean;
		label: string;
		varient: "auto-hide" | "constant" | "manual-hide";
	};
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
	navigation: TNavigation;
	social?: TSocialData;
	warn: (_element: string, _prop: string) => void;
};

export type TImage = {
	alt: string;
	path: string;
};

export type TNavigation = {
	cta: TCta;
	categories: {
		href: string;
		label: string;
		collection?: string;
	}[];
	position: "left" | "center" | "right";
};

export type TSocialData = {
	bio?: string;
	links?: TCta[];
};
