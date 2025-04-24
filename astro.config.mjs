// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import playformCompress from "@playform/compress";


export default defineConfig({
  site:'sergiodd.github.io',
  integrations: [
    tailwind(),
    astroIcon({
      include: {
        mdi: ["*"],
        'ri': ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,   
      },
    })
  ],
});
