export const siteName = "FEBIVERSE";
export const personName = "Febin Sebastian";
export const siteDescription =
  "Febin Sebastian is a video editor, web developer, and digital content creator focused on building engaging digital experiences and visual content. Through FEBIVERSE, he showcases his creative work, web projects, and services.";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = configuredUrl
  ? configuredUrl.replace(/\/$/, "")
  : undefined;
