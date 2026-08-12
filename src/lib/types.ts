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
		title?: string;
	};
	favicon: {
		fallback: string;
		svg: string;
	};
	socialLinks?: TCta[];
	name: string;
};

export type TCollection = "blog" | "gallery" | "global";

export type TCta = {
	href?: string;
	icon?: TIcon;
	label?: string;
};

export type TGallery = CollectionEntry<"gallery">;

export type TGlobal = CollectionEntry<"global">;

export type TGlobalData = {
	banner: TBanner;
	brand?: TBrand;
	navigation: TNavigation;
	warn: (_element: string, _prop: string) => void;
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
	categories: {
		href: string;
		label: string;
		collection?: TCollection;
	}[];
	position: "left" | "center" | "right";
};
