import type { MetadataRoute } from "next";
import { recipes } from "@/data/recipes";

export const dynamic = "force-static";

const BASE_URL = "https://bouillonnantes.github.io/bouillonnantes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/notre-gamme`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ou-nous-trouver`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/recettes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/pourquoi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/notre-histoire`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/le-rituel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/devenir-revendeur`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const recipeRoutes: MetadataRoute.Sitemap = recipes.map((r) => ({
    url: `${BASE_URL}/recettes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...recipeRoutes];
}
