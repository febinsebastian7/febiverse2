import { siteUrl } from "./site";

export default function sitemap() {
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: siteUrl + "/about",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
