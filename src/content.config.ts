import { glob } from "astro/loaders";
import { z } from "astro/zod";
import {
	defineCollection,
	getCollection,
	type CollectionEntry,
} from "astro:content";
import GlobalData from "@lib/config";

export type TBlog = CollectionEntry<"blog">;

function string(_min: number, _max: number): z.ZodString {
	const siteTitleLength = GlobalData.brand.name.length;
	const newMin = _min - siteTitleLength;
	const newMax = _max - siteTitleLength;

	return z.string().min(newMin).max(newMax);
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
	}),
});

export const collections = { blog };

const blogPosts = await getCollection("blog");
export const allBlogPosts = blogPosts.sort((_older: TBlog, _newer: TBlog) => {
	return (
		_newer.data.dateCreated.valueOf() - _older.data.dateCreated.valueOf()
	);
});
