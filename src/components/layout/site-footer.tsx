import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerNav } from "@/content/navigation";
import { formatTime, fullAddress, site } from "@/content/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container, Orbits } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-brand-100">
      <Orbits className="absolute -top-96 -right-72 w-[44rem] text-brand-300" />

      <Container className="relative">
        {/* Closing call to action */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              Start your journey toward <em className="text-lime-300">wellness</em> today.
            </h2>
            <p className="mt-4 text-lg text-brand-100">
              Book online in minutes, or call us at{" "}
              <a
                href={site.phone.href}
                className="whitespace-nowrap text-white underline decoration-lime-400 underline-offset-4 hover:decoration-2"
              >
                {site.phone.display}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={site.booking.main} variant="lime" size="lg">
              Book an appointment
            </ButtonLink>
            <ButtonLink href="/contact" variant="light" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs leading-relaxed">
              Vancouver counselling, massage therapy and acupuncture clinic — {site.tagline.toLowerCase()}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Revolve Therapy on Instagram (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Revolve Therapy on Facebook (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase">Visit us</h3>
            <ul className="mt-4 space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-lime-400" />
                <a href={site.maps.place} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {fullAddress}
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-lime-400" />
                <a href={site.phone.href} className="hover:text-white">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-lime-400" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-lime-400" />
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  {site.hours.map((h) => (
                    <div key={h.label} className="contents">
                      <dt>{h.label.replace("Monday – Friday", "Mon – Fri")}</dt>
                      <dd className="text-white">
                        {formatTime(h.open)}–{formatTime(h.close)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-brand-200 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            Content on this site is for general information and is not a substitute for professional medical advice.{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
              Privacy
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
