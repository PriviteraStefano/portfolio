import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: 'https://priviterastefano.github.io',
    base: '/portfolio',
    compressHTML: true,
    allowImportingTsExtensions: true,
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