// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  fonts: [
      {
          provider: fontProviders.fontsource(),
          name: "Inter",
          cssVariable: "--font-inter",
          fallbacks: ["sans-serif"],
          weights: ["100 900"],
          styles: ["italic", "normal"],
      },
	],

  integrations: [mdx()],
});