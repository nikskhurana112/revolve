import { Car, Phone } from "lucide-react";
import Link from "next/link";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Logo } from "@/components/logo";
import { OpenStatus } from "@/components/open-status";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <>
      <div className="hidden bg-ink text-sm text-brand-100 md:block">
        <Container className="flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <Car aria-hidden className="size-4 text-lime-400" />
            <span>
              ICBC claim? You&apos;re eligible for{" "}
              <strong className="font-medium text-white">12 free acupuncture sessions</strong>.
            </span>
            <Link href="/services/acupuncture#icbc" className="ml-1 text-lime-300 underline-offset-4 hover:underline">
              Learn more<span className="sr-only"> about ICBC acupuncture coverage</span>
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <OpenStatus tone="light" />
            <a href={site.phone.href} className="inline-flex items-center gap-2 hover:text-white">
              <Phone aria-hidden className="size-3.5" />
              {site.phone.display}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-lg supports-[backdrop-filter]:bg-cream/75">
        <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Logo />
          <DesktopNav items={mainNav} />
          <div className="flex items-center gap-2">
            <a
              href={site.phone.href}
              className="hidden size-11 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-brand-50 sm:inline-flex xl:hidden"
              aria-label={`Call ${site.phone.display}`}
            >
              <Phone aria-hidden className="size-4.5" />
            </a>
            <ButtonLink href={site.booking.main} size="sm" className="hidden px-5 sm:inline-flex" externalIcon={false}>
              Book now
            </ButtonLink>
            <MobileNav items={mainNav} />
          </div>
        </Container>
      </header>
    </>
  );
}
