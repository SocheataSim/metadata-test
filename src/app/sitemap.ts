import type { MetadataRoute } from "next";
import { courses } from "@/lib/course";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "http://localhost:3000";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    ...courses.map((c) => ({ url: `${base}/courses/${c.id}`, lastModified: new Date() })),
  ];
}