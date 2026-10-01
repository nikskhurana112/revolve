import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#faf8f3",
    theme_color: "#1d5c66",
    icons: [{ src: "/images/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
