import type { CollectionEntry } from "astro:content";
import type { TIcon } from "@components/ui/Icon.astro";

export type TBlog = CollectionEntry<"blog">;

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

export type TGallery = CollectionEntry<"gallery">;

export type TImage = {
	alt: string;
	path: string;
};
