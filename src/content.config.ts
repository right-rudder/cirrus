import { glob } from 'astro/loaders';
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    category: z.enum(['news', 'highlights']),
  }),
});

const faqsCollection = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    category: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { blog: blogCollection, faqs: faqsCollection };
