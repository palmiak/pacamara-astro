import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        intro: z.string(),
        tag: z.string(),
        image: z.string().optional(),
        author: z.string(),
        pubDate: z.date()
    }),
});

export const collections = {
    'blog': blogCollection,
};