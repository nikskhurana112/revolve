import { conditions } from "./conditions";
import { services } from "./services";

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
      description: s.blurb,
    })),
  },
  {
    label: "Conditions",
    href: "/conditions",
    children: conditions.map((c) => ({
      label: c.name,
      href: `/conditions/${c.slug}`,
      description: c.blurb,
    })),
  },
  { label: "Our Team", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
  },
  {
    title: "Conditions",
    links: conditions.map((c) => ({ label: c.name, href: `/conditions/${c.slug}` })),
  },
  {
    title: "Clinic",
    links: [
      { label: "Our Team", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Journal", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
