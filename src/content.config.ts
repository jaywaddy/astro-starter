import type { TGlobalData } from "@lib/types";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";
import {
	defineCollection,
	getEntry,
	type CollectionEntry,
} from "astro:content";

const globalData = await getEntry("global", "data");
export const data: TGlobalData = globalData?.data;

export type TBlog = CollectionEntry<"blog">;
export type TGlobal = CollectionEntry<"global">;

function string(_min: number, _max: number): z.ZodString {
	if (data.brand) {
		const siteTitleLength = data.brand?.name.length;
		const newMin = _min - siteTitleLength;
		const newMax = _max - siteTitleLength;

		return z.string().min(newMin).max(newMax);
	}

	return z.string();
}

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.(md|mdx)",
	}),
	schema: z.object({
		title: string(50, 60),
		metaTitle: z.optional(string(50, 60)),
		dateCreated: z.date(),
		dateUpdated: z.optional(z.date()),
		description: string(60, 160),
		metaDescription: z.optional(string(60, 160)),
		draft: z.boolean().default(false),
	}),
});

const global = defineCollection({
	loader: file("./src/lib/config.json"),
});

export const collections = { blog, global };
