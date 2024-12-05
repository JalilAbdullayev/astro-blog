// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-js-blog.netlify.app",
    integrations: [preact()],
});