import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.md*', base: "./src/data/blog/" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
			.optional(),
		heroImage: z.string().optional(),
		tags: z.string().array().optional(),
		ai: z.string().or(z.null()).optional(),
	}),
});

const useai = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.yaml*', base: "./src/data/how-i-use-ai/" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		tools: z.array(z.object({
			title: z.string(),
			description: z.string(),
			tools: z.array(z.string())
		}))
	}),
});

const goals = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.yaml*', base: "./src/data/list/" }),
	schema: z.object({
		text: z.string(),
		sub: z.string(),
		done: z.boolean(),
		date: z.string().optional(),
		note: z.string().optional(),
	}),
});

const quotes = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.yaml*', base: "./src/data/quotes/" }),
	schema: z.object({
		text: z.string(),
		source: z.string().optional(),
		author: z.string().optional(),
		url: z.string().optional(),
	}),
});

const friends = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.yaml*', base: "./src/data/friends/" }),
	schema: z.array(z.object({
		name: z.string(),
		url: z.string(),
		description: z.string(),
	})),
});

const photos = defineCollection({
	loader: glob({ pattern: '**\/[^_]*.yaml*', base: "./src/data/photos/" }),
	schema: z.object({
		alt: z.string().optional(),
		date: z.string().optional(),
		location: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, useai, goals, quotes, friends, photos };
