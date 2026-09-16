import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    area: z.enum([
      "defensa-penal",
      "representacion-de-victimas",
      "criminalidad-organizada",
      "proceso-penal",
    ]),
    readingMinutes: z.number().int().positive(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articulos };
