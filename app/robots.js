import { siteUrl } from "./site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteUrl ? siteUrl + "/sitemap.xml" : undefined,
  };
}
