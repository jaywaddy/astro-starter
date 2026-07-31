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

export type TImage = {
	alt: string;
	path: string;
};

export type TNavigation = {
	categories: TCta[];
	cta: TCta;
	position: "left" | "center" | "right";
};

export type TSocialData = {
	bio?: string;
	links?: TCta[];
};
