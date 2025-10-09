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
		title: z.string(),
		description: z.string()
	}),
});

export const collections = { blog, useai };
