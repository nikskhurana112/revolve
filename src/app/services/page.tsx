import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { conditions } from "@/content/conditions";
import { services } from "@/content/services";
import { ConditionsGrid } from "@/components/sections/conditions-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { IcbcBanner } from "@/components/sections/icbc-banner";
import { InsurersStrip } from "@/components/sections/insurers-strip";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Registered massage therapy, acupuncture, Traditional Chinese herbal medicine and counselling in Vancouver — personalized care with direct billing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="What we offer"
        title={
          <>
            Four disciplines. <em className="text-brand-700">One team.</em>
          </>
        }
        lead="Whether you're recovering from an injury, managing a chronic condition or simply need space to breathe, we combine evidence-based Western techniques with Traditional Chinese Medicine to meet you where you are."
      />

      <InsurersStrip />

      <Section className="pt-16 sm:pt-20">
        <Container className="space-y-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="reveal grid overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-line lg:grid-cols-2"
              >
                <div className={cn("relative min-h-72 bg-brand-50 lg:min-h-[28rem]", i % 2 === 1 && "lg:order-last")}>
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl">
                    <Link href={`/services/${s.slug}`} className="hover:text-brand-700">
                      {s.name}
                    </Link>
                  </h2>
                  <p className="mt-4 leading-relaxed text-ink-soft">{s.summary}</p>
                  <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {s.techniques.slice(0, 4).map((t) => (
                      <li key={t.title} className="flex items-center gap-2 text-sm text-ink">
                        <Check aria-hidden className="size-4 text-brand-600" />
                        {t.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href={`/services/${s.slug}`}>
                      Learn more <ArrowRight aria-hidden className="size-4" />
                    </ButtonLink>
                    <ButtonLink href={s.bookingUrl} variant="secondary">
                      {s.bookingLabel}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </Section>

      <IcbcBanner />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Specialized services"
            title="We specialize in treating these conditions"
            description="Traditional Chinese Medicine has long used formulas such as the Three Yellow Cleanser (San Huang Xi Ji) for skin disorders — one example of the time-tested approaches our practitioners draw on."
          />
          <div className="mt-12">
            <ConditionsGrid conditions={conditions} />
          </div>
        </Container>
      </Section>

      <CtaBand
        className="pb-20"
        title="Not sure which service is right for you?"
        text="Call us and we'll help you choose — or book a consultation and we'll build a plan together."
      />
    </>
  );
}
