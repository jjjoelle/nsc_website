import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const students = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/students" }),
  schema: z.object({
    name: z.string(),
    batch_start: z.number(),
    batch_end: z.number().optional(),
    linkedin: z.string().url().optional(),
    contact: z.string().optional(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["thesis", "short", "other"]),
    student: z.string(),
    abstract: z.string(),
    lab: z.string(),
    lab_url: z.string().url().optional(),
    supervisors: z.array(z.string()),
    year: z.number(),
    pdf_url: z.string().url().optional(),
    code_url: z.string().url().optional(),
    slides_url: z.string().url().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    summary: z.string().optional(),
    cover_image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { students, projects, posts };
