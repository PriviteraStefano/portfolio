import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import {socials} from "./src/data/social";

// https://astro.build/config
export default defineConfig({
    site: 'https://lexingtonthemes.com',
    compressHTML: true,
    integrations: [
        tailwind(),
        sitemap(),
        icon({
            include: {
                hugeicons: ["*"],
                "fa6-brands": ["*"],
                teenyicons: ["*"],
                "akar-icons": ["*"],
                "devicon-plain": ["*"],
            }
        })]
});