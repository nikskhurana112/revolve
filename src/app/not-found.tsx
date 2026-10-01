import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Orbits } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Orbits className="absolute top-1/2 left-1/2 w-[48rem] -translate-x-1/2 -translate-y-1/2 text-brand-400" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-5xl leading-tight font-light text-ink sm:text-6xl">
          This page has <em className="text-brand-700">moved on</em>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Browse services <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
        <p className="mt-10 text-sm text-muted">
          Need help? Call us at{" "}
          <a
            href={site.phone.href}
            className="font-medium text-brand-700 underline underline-offset-4 hover:decoration-2"
          >
            {site.phone.display}
          </a>
        </p>
      </Container>
    </section>
  );
}
