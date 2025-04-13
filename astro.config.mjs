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
                "hugeicons": ["react"],
                "fa6-brands": ["golang"],
                "devicon-plain": ["javascript","typescript", "java", "kotlin", "android", "flutter", "astro"],
                "lineicons": ["medium", "github", "linkedin", "envelope-1"]
            }
        })],
    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",

        routing: {
            prefixDefaultLocale: true,
        },
    }
});