import type { CollectionEntry } from "astro:content";
import type { TIcon } from "@components/ui/Icon.astro";

export type TBanner = {
	cta: TCta;
	display: boolean;
	label: string;
	varient: "auto-hide" | "constant" | "manual-hide";
};

export type TBlog = CollectionEntry<"blog">;

export type TBrand = {
	bio?: string;
	contact: {
		description?: string;
		email?: string;
		location?: string;
		phoneNumber?: string;
		timeZone?: string;
		socialLinks?: TCta[];
		title?: string;
	};
	favicon: {
		fallback: string;
		svg: string;
	};
	name: string;
};

export type TCategory = {
	collection?: TCollection;
	href: string;
	label: string;
	plural?: string;
	singular?: string;
};

export type TCollection = "blog" | "gallery";

export type TCollectionGroup = {
	icon?: TIcon;
	label: string;
	links?: TCategory[];
	plural?: string;
	singular?: string;
};

export type TCta = {
	href?: string;
	icon?: TIcon;
	label?: string;
};

export type TDev = {
	enableGrid: boolean;
	hidePage: boolean;
	showGridLines: boolean;
	showLayouts: boolean;
};

export type TGallery = CollectionEntry<"gallery">;

export type TGlobalConfig = {
	banner: TBanner;
	brand?: TBrand;
	dev: TDev;
	navigation: TNavigation;
};

export type TImage = {
	alt: string;
	path: string;
};

export type TInputFieldType =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "textarea"
	| "time"
	| "url"
	| "week";

export type TNavigation = {
	background: "dynamic" | "static";
	cta: TCta;
	categories: TCategory[];
	position: "left" | "center" | "right";
};
