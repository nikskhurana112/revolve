import { ArrowUpRight, CalendarPlus, Compass, RotateCcw } from "lucide-react";
import Link from "next/link";
import { fullAddress, site } from "@/content/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";
import { OpenStatus } from "@/components/open-status";
import { PageHero } from "@/components/sections/page-hero";
import { HoursList, MapEmbed } from "@/components/sections/visit-us";
import { Container, Section } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

export const metadata = pageMetadata({
  title: "Contact & Book",
  description: `Book online or contact Revolve Therapy Health Services at ${fullAddress}. Call ${site.phone.display}. Open 7 days a week.`,
  path: "/contact",
});

const paths = [
  {
    icon: CalendarPlus,
    title: "New patients",
    text: "Book an initial appointment or a consultation with one of our practitioners.",
    href: site.booking.main,
    cta: "Book initial visit",
  },
  {
    icon: RotateCcw,
    title: "Existing patients",
    text: "Book a follow-up appointment with your practitioner.",
    href: site.booking.practitioners,
    cta: "Book follow-up",
  },
  {
    icon: Compass,
    title: "Not sure what you need?",
    text: "Get familiar with our services and team before you book.",
    href: "/services",
    cta: "Explore services",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact us"
        title={
          <>
            We&apos;d love to <em className="text-brand-700">hear from you</em>
          </>
        }
        lead="Book online in a few clicks, give us a call, or send a message and we'll get back to you as soon as possible."
      />

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <ul className="grid gap-5 md:grid-cols-3">
            {paths.map((p) => {
              const external = p.href.startsWith("http");
              const Comp = external ? "a" : Link;
              return (
                <li key={p.title}>
                  <Comp
                    href={p.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full flex-col rounded-4xl bg-white p-7 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-lime-100 group-hover:text-lime-700">
                      <p.icon aria-hidden className="size-6" />
                    </span>
                    <span className="mt-6 font-display text-2xl text-ink">{p.title}</span>
                    <span className="mt-2 flex-1 leading-relaxed text-ink-soft">{p.text}</span>
                    <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-brand-700">
                      {p.cta}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                      {external && <span className="sr-only">(opens in a new tab)</span>}
                    </span>
                  </Comp>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="rounded-[2.5rem] bg-white p-7 ring-1 ring-line sm:p-10 lg:col-span-7">
              <h2 className="text-3xl text-ink sm:text-4xl">Send us a message</h2>
              <p className="mt-2 text-ink-soft">
                For booking changes, please call us or use the online booking system.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-[2.5rem] bg-ink p-7 text-brand-100 sm:p-10">
                <h2 className="font-display text-3xl text-white">You can find us at</h2>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.18em] text-lime-300 uppercase">Location</dt>
                    <dd className="mt-1.5 text-lg text-white">
                      <a href={site.maps.place} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {fullAddress}
                        <span className="sr-only"> (opens Google Maps in a new tab)</span>
                      </a>
                      <span className="mt-1 block text-sm text-brand-200">{site.address.landmark}</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.18em] text-lime-300 uppercase">Phone</dt>
                    <dd className="mt-1.5 text-lg text-white">
                      <a href={site.phone.href} className="hover:underline">
                        {site.phone.display}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.18em] text-lime-300 uppercase">Email</dt>
                    <dd className="mt-1.5 text-lg break-all text-white">
                      <a href={`mailto:${site.email}`} className="hover:underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 flex gap-3">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (opens in a new tab)"
                    className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <InstagramIcon className="size-5" />
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook (opens in a new tab)"
                    className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <FacebookIcon className="size-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-white p-7 ring-1 ring-line sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-2xl text-ink">Hours</h2>
                  <OpenStatus />
                </div>
                <div className="mt-4">
                  <HoursList />
                </div>
                <p className="mt-4 text-sm text-muted">{site.parking}</p>
              </div>
            </aside>
          </div>

          <MapEmbed className="mt-8 h-96 overflow-hidden rounded-[2.5rem] bg-sand ring-1 ring-line" />
        </Container>
      </Section>
    </>
  );
}
