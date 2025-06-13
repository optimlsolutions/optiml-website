/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import testimonialDataNl from "./nl/testimonialData.json";
import siteDataNl from "./nl/siteData.json";
import navDataNl from "./nl/navData.json";
import faqDataNl from "./nl/faqData.json";
import faqDataEn from "./en/faqData.json";
import navDataEn from "./en/navData.json";
import siteDataEn from "./en/siteData.json";
import testimonialDataEn from "./en/testimonialData.json";

export const dataTranslations = {
  nl: {
    faqData: faqDataNl,
    navData: navDataNl,
    siteData: siteDataNl,
    testimonialData: testimonialDataNl,
  },
	en: {
		siteData: siteDataEn,
		navData: navDataEn,
		faqData: faqDataEn,
		testimonialData: testimonialDataEn,
	},
	
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Examples
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  nl: {
		hero_text_line1: "Decision Intelligence.",
  		hero_text_line2: "Engineered for Impact.",
		hero_description: `Transforming ideas into beautiful, functional designs that leave lasting impressions.`,
		back_to_all_posts: "Back to all posts",
		updated: "Updated",
		share_this_article: "Share this article",
	},
	en: {
		hero_text_line1: "Decision Intelligence.",
  		hero_text_line2: "Engineered for Impact.",
		hero_description: `Optimization & Machine Learning Solutions for Planning, Scheduling, and Business Impact.`,
		back_to_all_posts: "Back to all posts",
		updated: "Updated",
		share_this_article: "Share this article",
	},
	
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  nl: {
		overviewKey: "overview",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		blogKey: "blog",
		projectsKey: "projects",
	},
	en: {
		overviewKey: "overview",
		categoryKey: "categories",
		categoryKey2: "categories/*",
		categoryKey3: "categories",
		blogKey: "blog",
		projectsKey: "projects",
	},
	
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
	blog: {
		en: "blog",
		nl: "blog"
	},
	projects: {
		en: "projects",
		nl: "projects"
	},
	// Add more collections/locales as needed
} as const;
