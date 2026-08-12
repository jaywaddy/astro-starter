import type { TGlobalData } from "@lib/types";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, getCollection, getEntry } from "astro:content";

const globalData = await getEntry("global", "data");
const blogPosts = await getCollection("blog");
const galleryEntries = await getCollection("gallery");

export const data: TGlobalData = globalData?.data;
export const allCollections = [
	blogPosts,
	galleryEntries,
	//
];

const collectionSchema = {
	title: seoString(50, 60),
	metaTitle: seoString(50, 60).optional(),
	dateCreated: z.date(),
	dateUpdated: z.date().optional(),
	description: seoString(60, 160),
	metaDescription: seoString(60, 160).optional(),
	draft: z.boolean().default(false),
};

function seoString(_min: number, _max: number): z.ZodString {
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
	schema: z.object(collectionSchema),
});

const gallery = defineCollection({
	loader: glob({
		base: "./src/content/gallery",
		pattern: "**/*.(md|mdx)",
	}),
	schema: z.object(collectionSchema),
});

const global = defineCollection({
	loader: file("./src/lib/config.json"),
});

export const collections = { blog, gallery, global };
