import type { TBlog, TGallery } from "@lib/types";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, getCollection } from "astro:content";
import globalConfig from "@lib/config";

export const blogPosts: TBlog[] = await getCollection("blog");
export const galleryEntries: TGallery[] = await getCollection("gallery");

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
	if (globalConfig.brand) {
		const siteTitleLength = globalConfig.brand.name.length;
		const newMin = _min - siteTitleLength;
		const newMax = _max - siteTitleLength;

		return z.string().min(newMin).max(newMax);
	}

	return z.string();
}

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.md",
	}),
	schema: ({ image }) =>
		z.object({
			...collectionSchema,
			thumbnail: image().optional(),
		}),
});

const gallery = defineCollection({
	loader: glob({
		base: "./src/content/gallery",
		pattern: "**/*.md",
	}),
	schema: ({ image }) =>
		z.object({
			...collectionSchema,
			thumbnail: image().optional(),
		}),
});

export const collections = { blog, gallery };
