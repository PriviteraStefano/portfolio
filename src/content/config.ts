import { z, defineCollection } from "astro:content";

/**
 * Schema for project data used in the `projects` collection.
 *
 * This schema is intentionally flexible to allow gradual migration of existing
 * project pages into data files. Fields that may not exist for every project
 * are marked optional.
 */
const projectSchema = z.object({
  // Core metadata
  slug: z.string().describe("URL slug for the project (e.g. 'aris-scripting')"),
  // Optional explicit locale if you prefer having it inside the file (you may
  // also store files under locale subfolders instead).
  locale: z.string().optional().describe("Locale code, e.g. 'en' or 'it'"),

  // Basic display fields
  title: z.string(),
  subtitle: z.string().optional(),
  period: z.string().optional(),

  // Narrative sections
  overview: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),

  // Structured lists
  keyAchievements: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),

  technologies: z
    .array(
      z.object({
        name: z.string(),
        proficiency: z.string().optional(),
      })
    )
    .optional(),

  techStack: z
    .object({
      title: z.string().optional(),
      items: z
        .array(
          z.object({
            category: z.string(),
            items: z.array(z.string()),
          })
        )
        .optional(),
    })
    .optional(),

  metrics: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),

  learnings: z.array(z.string()).optional(),

  // Optional media fields (paths are typically relative to `public/projects/{slug}/...`)
  hero_image: z.string().optional().describe("Path to a hero image (public/...)"),
  gallery: z.array(z.string()).optional().describe("Array of image paths"),

  // Optional testimonial block
  testimonial: z
    .object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
    })
    .optional(),
});

export const projects = defineCollection({
  type: "data",
  schema: projectSchema,
});

export const collections = {
  projects,
};
