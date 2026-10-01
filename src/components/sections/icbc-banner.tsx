import Image from "next/image";
import { Car, Check } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container, Orbits } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function IcbcBanner({ className, id }: { className?: string; id?: string }) {
  return (
    <section id={id} aria-labelledby="icbc-title" className={cn("py-6", className)}>
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-brand-700 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <Orbits className="absolute -top-40 -right-40 w-[36rem] text-white" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-brand-50 ring-1 ring-white/15">
                <Car aria-hidden className="size-4 text-lime-300" />
                Been in a motor vehicle accident?
              </p>
              <h2 id="icbc-title" className="mt-5 text-3xl leading-tight font-normal sm:text-[2.75rem]">
                With an ICBC claim, you&apos;re automatically eligible for{" "}
                <em className="text-lime-300">12 free acupuncture sessions.</em>
              </h2>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-brand-50">
                {["We bill ICBC directly", "Open 7 days a week", "Evening appointments until 8pm"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <Check aria-hidden className="size-4 text-lime-300" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="rounded-2xl bg-white p-3">
                <Image src="/images/insurers/icbc.png" alt="ICBC" width={161} height={159} className="h-14 w-auto" />
              </div>
              <ButtonLink href={site.booking.main} variant="lime" size="lg">
                Book your first session
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
