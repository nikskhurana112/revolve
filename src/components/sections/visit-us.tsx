import { Clock, Mail, MapPin, Navigation, Phone, SquareParking } from "lucide-react";
import { formatTime, fullAddress, site } from "@/content/site";
import { OpenStatus } from "@/components/open-status";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

export function HoursList() {
  return (
    <dl className="divide-y divide-line">
      {site.hours.map((h) => (
        <div key={h.label} className="flex justify-between gap-4 py-2.5">
          <dt className="text-ink-soft">{h.label}</dt>
          <dd className="font-medium text-ink tabular-nums">
            {formatTime(h.open)} – {formatTime(h.close)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={`Map showing ${site.name} at ${fullAddress}`}
        src={site.maps.embed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 grayscale-[35%] saturate-[0.85]"
        allowFullScreen
      />
    </div>
  );
}

export function VisitUs() {
  return (
    <Section id="visit" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="Visit the clinic"
          title="Across from Vancouver General Hospital"
          description="We're on West 8th Avenue between Laurel and Willow, with free 2-hour street parking one block away on 7th Avenue."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <MapEmbed className="reveal min-h-80 overflow-hidden rounded-4xl bg-sand ring-1 ring-line lg:col-span-3 lg:min-h-[30rem]" />

          <div className="reveal flex flex-col gap-6 rounded-4xl bg-cream p-7 ring-1 ring-line sm:p-8 lg:col-span-2">
            <ul className="space-y-5">
              <li className="flex gap-4">
                <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="font-medium text-ink">{fullAddress}</p>
                  <p className="mt-0.5 text-sm text-muted">{site.address.landmark}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <a href={site.phone.href} className="font-medium text-ink hover:text-brand-700">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <a href={`mailto:${site.email}`} className="font-medium break-all text-ink hover:text-brand-700">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4">
                <SquareParking aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <p className="text-sm leading-relaxed text-ink-soft">{site.parking}</p>
              </li>
            </ul>

            <div className="rounded-3xl bg-white p-5 ring-1 ring-line">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Clock aria-hidden className="size-4 text-brand-600" /> Hours
                </p>
                <OpenStatus />
              </div>
              <div className="mt-3">
                <HoursList />
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              <ButtonLink href={site.booking.main} className="flex-1">
                Book online
              </ButtonLink>
              <ButtonLink href={site.maps.directions} variant="secondary" className="flex-1" externalIcon={false}>
                <Navigation aria-hidden className="size-4" />
                Directions
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
