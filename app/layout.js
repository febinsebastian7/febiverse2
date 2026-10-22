import "./globals.css";
import { personName, siteDescription, siteName, siteUrl } from "./site";

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: personName + " | " + siteName,
    template: "%s | " + siteName,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: personName + " | " + siteName,
    description: siteDescription,
    url: siteUrl ? "/" : undefined,
    images: siteUrl
      ? [
          {
            url: "/images/febin-hero.png",
            alt: "Febin Sebastian",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: personName + " | " + siteName,
    description: siteDescription,
    images: siteUrl ? ["/images/febin-hero.png"] : undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
