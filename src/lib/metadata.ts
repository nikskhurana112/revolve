import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Per-page metadata. Next.js merges `openGraph` shallowly, so the shared
 * Open Graph fields (including the image) are repeated here rather than
 * inherited from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  /** Social share image. Defaults to the generated brand card. */
  image?: string;
}): Metadata {
  const images = [{ url: image, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      url: path,
      title,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
