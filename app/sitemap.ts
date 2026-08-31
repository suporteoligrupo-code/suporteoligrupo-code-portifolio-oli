import type { MetadataRoute } from "next";
import { cases } from "./data/cases";

const baseUrl = "https://portfolio-oli-taupe.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cases`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...cases.map((item) => ({
      url: `${baseUrl}/cases/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
