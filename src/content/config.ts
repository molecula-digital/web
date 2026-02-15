import { defineCollection, z } from "astro:content";

const blogSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: image().optional(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Molecula Digital"),
  });

const blogCollection = defineCollection({ schema: blogSchema });

export const collections = {
  blog: blogCollection,
};
