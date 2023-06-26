import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Buzz’s Blog',
        description: 'A humble Astronaut’s guide to the stars',
        site: "https://tailblog.pl",
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.intro,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}