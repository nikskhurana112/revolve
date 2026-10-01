import type { NextConfig } from "next";

/** Old WordPress URLs → new routes, so existing search rankings and bookmarks keep working. */
const legacyRedirects: [string, string][] = [
  ["/rmt-vancouver", "/services/massage-therapy"],
  ["/counselling-2", "/services/counselling"],
  ["/bells-palsy", "/conditions/bells-palsy"],
  ["/eczema-treatment", "/conditions/eczema"],
  ["/psoriasis", "/conditions/psoriasis"],
  ["/chronic-pain-relief", "/conditions/chronic-pain"],
  ["/skin-disorder", "/conditions/skin-disorders"],
  ["/m-l-testimony", "/testimonials"],
  ["/elementor-page-3497", "/careers"],
  ["/thank-you-for-contacting-us", "/contact"],
  ["/the-top-10-benefits-of-acupuncture", "/blog/top-10-benefits-of-acupuncture"],
  ["/hello-world", "/blog"],
  ["/home", "/"],
  ["/feed", "/blog"],
  ["/comments/feed", "/blog"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
        ],
      },
    ];
  },
};

export default nextConfig;
