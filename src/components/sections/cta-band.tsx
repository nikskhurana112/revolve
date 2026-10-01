import Image from "next/image";
import type { ReactNode } from "react";
import { Video } from "lucide-react";
import { site } from "@/content/site";
import { getTeamMember } from "@/content/team";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function CtaBand({
  title,
  text,
  primary = { label: "Book an appointment", href: site.booking.main },
  secondary = { label: `Call ${site.phone.display}`, href: site.phone.href },
  className,
}: {
  title: ReactNode;
  text?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={cn("py-6", className)}>
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-lime-100 px-6 py-12 ring-1 ring-lime-200 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
            {text && <p className="mt-3 text-lg text-ink-soft">{text}</p>}
          </div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CounsellingConsult({ className }: { className?: string }) {
  const anu = getTeamMember("anu-patel")!;
  return (
    <section aria-labelledby="consult-title" className={cn("py-6", className)}>
      <Container>
        <div className="reveal grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-white p-6 ring-1 ring-line sm:p-10 md:grid-cols-[auto_1fr_auto] lg:px-14">
          <Image
            src={anu.image}
            alt={`Portrait of ${anu.name}`}
            width={160}
            height={160}
            className="size-28 rounded-full object-cover ring-4 ring-brand-50 sm:size-32"
            style={{ objectPosition: anu.imagePosition }}
          />
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              <Video aria-hidden className="size-4" /> Free · 15 minutes · Virtual
            </p>
            <h2 id="consult-title" className="mt-2 text-3xl leading-tight text-ink sm:text-4xl">
              Not sure where to start? Talk with {anu.name}.
            </h2>
            <p className="mt-2 max-w-xl text-ink-soft">
              Book a free 15-minute virtual consultation with our {anu.role.toLowerCase()} to see whether counselling is
              the right fit for you.
            </p>
          </div>
          <ButtonLink href={site.booking.counsellingConsult} size="lg">
            Book free consult
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
