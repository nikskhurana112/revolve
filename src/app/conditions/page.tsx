import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { conditions } from "@/content/conditions";
import { site } from "@/content/site";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedStory } from "@/components/sections/featured-story";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Conditions We Treat",
  description:
    "Acupuncture, Traditional Chinese Medicine and massage therapy in Vancouver for Bell's Palsy, eczema, psoriasis, chronic pain, fibromyalgia and skin disorders.",
  path: "/conditions",
});

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Conditions", path: "/conditions" }]}
        eyebrow="Conditions we treat"
        title={
          <>
            Specialized care for <em className="text-brand-700">complex</em> conditions
          </>
        }
        lead="Our practitioners have particular experience with facial nerve recovery, chronic skin conditions and persistent pain — often in combination with the care you receive from your physician."
        actions={
          <ButtonLink href={site.booking.main} size="lg">
            Book a free consultation
          </ButtonLink>
        }
      />

      <Section className="pt-4 sm:pt-6 lg:pt-8">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <li key={c.slug} className="reveal">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                      <c.icon aria-hidden className="size-5" />
                    </span>
                    <h2 className="mt-5 text-2xl text-ink">
                      <Link href={`/conditions/${c.slug}`} className="after:absolute after:inset-0">
                        {c.name}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{c.lead}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
                      Learn more <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-sand">
        <Container>
          <SectionHeading eyebrow="Recovery story" title="Hope, in a patient's own words" />
          <div className="mt-12">
            <FeaturedStory />
          </div>
        </Container>
      </Section>

      <CtaBand
        className="py-20"
        title="Have questions? Not sure what to do?"
        text={`Give us a call at ${site.phone.display} or book a free consultation.`}
        primary={{ label: "Book a free consultation", href: site.booking.main }}
      />
    </>
  );
}
