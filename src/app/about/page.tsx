import Image from "next/image";
import { Check, HeartPulse, Scale, ShieldCheck, Users } from "lucide-react";
import { site } from "@/content/site";
import { disciplineLabels, team } from "@/content/team";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading, Tag } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About Us & Our Team",
  description:
    "Meet the registered acupuncturists, massage therapists and counsellor at Revolve Therapy Health Services in Vancouver.",
  path: "/about",
});

const values = [
  {
    icon: HeartPulse,
    title: "Patient-centred",
    text: "Treatment plans built around your goals, history and preferences — never a one-size-fits-all routine.",
  },
  {
    icon: Scale,
    title: "Balanced by design",
    text: "Western and Eastern modalities combined into one holistic approach, so you get the best of both.",
  },
  {
    icon: ShieldCheck,
    title: "Registered & accountable",
    text: "Care delivered by registered professionals who stay current with their training and standards.",
  },
  {
    icon: Users,
    title: "Clear communication",
    text: "We explain what we're doing and why, so you can take an active, confident role in your healing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About Revolve Therapy"
        title={
          <>
            Individualized therapies that <em className="text-brand-700">revolve around you</em>
          </>
        }
        lead="Revolve Therapy Health Services is a Vancouver counselling, massage therapy and acupuncture clinic. We provide professional, effective and personalized treatment with patient-centred care — combining Western and Eastern modalities into one holistic approach."
        actions={
          <>
            <ButtonLink href={site.booking.practitioners} size="lg">
              Book with a practitioner
            </ButtonLink>
            <ButtonLink href="#team" variant="secondary" size="lg">
              Meet the team
            </ButtonLink>
          </>
        }
      />

      <Section className="bg-white">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Our values" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="reveal rounded-4xl bg-cream p-7 ring-1 ring-line">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft">
                  <v.icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="team">
        <Container>
          <SectionHeading
            eyebrow="Meet our team"
            title="The practitioners behind your care"
            description="A small, dedicated team of registered professionals across acupuncture, Traditional Chinese Medicine, massage therapy and counselling."
          />

          <div className="mt-16 space-y-8">
            {team.map((m, i) => (
              <article
                key={m.slug}
                id={m.slug}
                aria-labelledby={`${m.slug}-name`}
                className="reveal grid gap-8 rounded-[2.5rem] bg-white p-6 ring-1 ring-line sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
              >
                <div className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-last")}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-brand-100">
                    <Image
                      src={m.image}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover"
                      style={{ objectPosition: m.imagePosition }}
                    />
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <Tag>{disciplineLabels[m.discipline]}</Tag>
                  <h3 id={`${m.slug}-name`} className="mt-4 text-4xl leading-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2 font-medium text-brand-700">
                    {m.role}
                    {m.credentials && `, ${m.credentials}`}
                  </p>
                  <div className="prose-rt mt-6">
                    {m.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                        Areas of focus
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {m.focus.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-ink">
                            <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {m.modalities && (
                      <div>
                        <h4 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                          Treatments offered
                        </h4>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {m.modalities.map((mod) => (
                            <li key={mod}>
                              <Tag>{mod}</Tag>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <ButtonLink
                      href={
                        m.discipline === "counselling" ? site.booking.counsellingConsult : site.booking.practitioners
                      }
                      variant="secondary"
                    >
                      {m.discipline === "counselling" ? "Book a free 15-min consult" : `Book with ${m.shortName}`}
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        className="pb-20"
        title="Want to join our team?"
        text="We're hiring a Registered Massage Therapist to join our friendly clinic."
        primary={{ label: "View careers", href: "/careers" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Revolve Therapy practitioners",
          itemListElement: team.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
              image: `${site.url}${m.image}`,
              url: `${site.url}/about#${m.slug}`,
              worksFor: { "@id": `${site.url}/#clinic` },
            },
          })),
        }}
      />
    </>
  );
}
