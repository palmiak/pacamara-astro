import { defineCollection, reference, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        intro: z.string(),
        tag: z.string(),
        image: z.string().optional(),
        author: reference('author'),
        pubDate: z.date()
    }),
});

const authorCollection = defineCollection({
    type: 'data', // v2.5.0 and later
    schema: z.object({
        displayName: z.string(),
        bio: z.string().optional(),
        photo: z.string().optional()
    }),
});

export const collections = {
    'blog': blogCollection,
    'author': authorCollection,
};