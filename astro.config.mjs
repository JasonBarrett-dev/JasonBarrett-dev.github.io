import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jasonbarrett-dev.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
