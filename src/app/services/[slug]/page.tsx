import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleAlert, Check, Phone } from "lucide-react";
import { getConditions } from "@/content/conditions";
import { faqs } from "@/content/faqs";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { getTeamMembers } from "@/content/team";
import { clinicId, JsonLd } from "@/components/json-ld";
import { ConditionsGrid } from "@/components/sections/conditions-grid";
import { CounsellingConsult, CtaBand } from "@/components/sections/cta-band";
import { FaqList, faqSchema } from "@/components/sections/faq";
import { FeaturedStory } from "@/components/sections/featured-story";
import { IcbcBanner } from "@/components/sections/icbc-banner";
import { MassageFirstVisit } from "@/components/sections/massage-first-visit";
import { PageHero } from "@/components/sections/page-hero";
import { PractitionerCard, PractitionerRow } from "@/components/sections/team-cards";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ ...service.meta, path: `/services/${slug}` });
}

const relatedFaqs: Record<string, string[]> = {
  "massage-therapy": [
    "What are the benefits of massage therapy?",
    "What is direct billing?",
    "Is there parking nearby?",
  ],
  acupuncture: [
    "Does acupuncture hurt?",
    "I was in a car accident. Is acupuncture covered?",
    "What is direct billing?",
  ],
  "herbal-medicine": ["What is direct billing?", "How do I book an appointment?"],
  counselling: ["How do I book an appointment?", "Is there parking nearby?"],
};

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const practitioners = getTeamMembers(service.practitioners);
  const conditions = getConditions(service.conditions);
  const pageFaqs = faqs.filter((f) => relatedFaqs[slug]?.includes(f.question));
  const isCounselling = slug === "counselling";
  const isMassage = slug === "massage-therapy";

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: `/services/${slug}` },
        ]}
        eyebrow={service.eyebrow}
        title={service.name}
        lead={service.summary}
        image={service.image}
        imageAlt={service.imageAlt}
        actions={
          <>
            <ButtonLink href={isMassage ? "#first-visit" : service.bookingUrl} size="lg">
              {isMassage ? "Plan your first visit" : service.bookingLabel}
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary" size="lg">
              <Phone aria-hidden className="size-4" />
              {site.phone.display}
            </ButtonLink>
          </>
        }
      />

      {isMassage && <MassageFirstVisit />}

      <Section className="bg-white">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={`About ${service.navLabel}`} />
            <div className="prose-rt mt-8">
              {service.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {service.note && (
              <p className="mt-8 flex gap-3 rounded-2xl bg-sand p-5 text-sm leading-relaxed text-ink-soft">
                <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
                {service.note}
              </p>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="rounded-4xl bg-cream p-7 ring-1 ring-line sm:p-8">
                <h2 className="font-display text-2xl text-ink">{service.benefitsTitle}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-ink">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lime-400">
                        <Check aria-hidden className="size-3 text-ink" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {practitioners.length > 0 && (
                <div>
                  <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Your {practitioners.length > 1 ? "practitioners" : "practitioner"}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {practitioners.map((m) => (
                      <PractitionerRow key={m.slug} member={m} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Techniques" title={service.techniquesTitle} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.techniques.map((t) => (
              <li key={t.title} className="reveal rounded-4xl bg-white p-7 ring-1 ring-line">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <t.icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-6 text-2xl text-ink">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{t.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {slug === "acupuncture" && <IcbcBanner id="icbc" />}
      {isCounselling && <CounsellingConsult />}

      {slug === "acupuncture" && (
        <Section>
          <Container>
            <FeaturedStory />
          </Container>
        </Section>
      )}

      {conditions.length > 0 && (
        <Section className={slug === "acupuncture" ? "pt-0 sm:pt-0 lg:pt-0" : undefined}>
          <Container>
            <SectionHeading eyebrow="Conditions" title="Conditions we often help with" />
            <div className="mt-10">
              <ConditionsGrid
                conditions={conditions}
                includeCounselling={false}
                columns={conditions.length % 3 === 0 ? 3 : 2}
              />
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Meet your practitioner"
            title={practitioners.length > 1 ? "The people behind your care" : `Meet ${practitioners[0]?.shortName}`}
          />
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {practitioners.map((m) => (
              <PractitionerCard key={m.slug} member={m} />
            ))}
          </div>
        </Container>
      </Section>

      {pageFaqs.length > 0 && (
        <Section>
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title="Common questions" />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={pageFaqs} />
            </div>
          </Container>
          <JsonLd data={faqSchema(pageFaqs)} />
        </Section>
      )}

      <CtaBand
        className="pb-20"
        title={
          <>
            Ready to feel <em className="text-brand-700">better?</em>
          </>
        }
        text={`Book online in minutes, or call us at ${site.phone.display}.`}
        primary={{ label: service.bookingLabel, href: service.bookingUrl }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          name: service.name,
          description: service.summary,
          url: `${site.url}/services/${slug}`,
          provider: { "@id": clinicId },
          areaServed: { "@type": "City", name: site.address.city },
        }}
      />
    </>
  );
}
