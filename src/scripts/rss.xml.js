import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const GET = async(context) => {
    return rss({
        title: 'Jalil Abdullayev',
        description: 'My journey learning Astro.',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    })
}