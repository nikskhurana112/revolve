import type { MetadataRoute } from "next";
import { conditions } from "@/content/conditions";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, lastModified?: string) => ({
    url: `${site.url}${path}`,
    priority,
    ...(lastModified ? { lastModified } : {}),
  });

  return [
    entry("/", 1),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    entry("/conditions", 0.8),
    ...conditions.map((c) => entry(`/conditions/${c.slug}`, 0.8)),
    entry("/about", 0.7),
    entry("/testimonials", 0.6),
    entry("/contact", 0.7),
    entry("/blog", 0.5),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.5, p.date)),
    entry("/careers", 0.4),
    entry("/privacy", 0.2),
  ];
}
