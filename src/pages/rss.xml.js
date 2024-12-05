import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async(context) => {
    const posts = await getCollection("blog");
    return rss({
        title: 'Jalil Abdullayev',
        description: 'My journey learning Astro.',
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>en-us</language>`,
    })
}