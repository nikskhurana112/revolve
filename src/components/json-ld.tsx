import { conditions } from "@/content/conditions";
import { services } from "@/content/services";
import { site } from "@/content/site";

type JsonLdObject = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const clinicId = `${site.url}/#clinic`;

export function clinicSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": clinicId,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/icon-512.png`,
    image: `${site.url}/opengraph-image`,
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.unit}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    hasMap: site.maps.place,
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayNames[d]}`),
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [site.social.instagram, site.social.facebook, site.maps.place],
    availableService: services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.name,
      url: `${site.url}/services/${s.slug}`,
    })),
    knowsAbout: conditions.map((c) => c.name),
    potentialAction: {
      "@type": "ReserveAction",
      target: site.booking.main,
      name: "Book an appointment",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
