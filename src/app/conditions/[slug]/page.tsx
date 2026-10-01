import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, ClipboardList, Info, MessageCircle, Phone, Quote } from "lucide-react";
import { conditions, getCondition } from "@/content/conditions";
import { getServices } from "@/content/services";
import { site } from "@/content/site";
import { getTeamMembers } from "@/content/team";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedStory } from "@/components/sections/featured-story";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/services-grid";
import { PractitionerRow } from "@/components/sections/team-cards";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conditions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return {};
  return pageMetadata({ ...condition.meta, path: `/conditions/${slug}` });
}

const steps = [
  {
    icon: MessageCircle,
    title: "Free consultation",
    text: "Tell us about your history, symptoms and goals, and ask anything you'd like.",
  },
  {
    icon: ClipboardList,
    title: "A personalized plan",
    text: "Your practitioner recommends a combination and frequency of treatments tailored to you.",
  },
  {
    icon: CalendarCheck,
    title: "Treatment & follow-up",
    text: "Each visit is adjusted to how you're responding, and we'll be with you every step of the way.",
  },
];

export default async function ConditionPage({ params }: PageProps<"/conditions/[slug]">) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const relatedServices = getServices(condition.services);
  const practitioners = getTeamMembers(condition.practitioners);
  const others = conditions.filter((c) => c.slug !== slug);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Conditions", path: "/conditions" },
          { name: condition.name, path: `/conditions/${slug}` },
        ]}
        eyebrow={`${condition.name} treatment in Vancouver`}
        title={condition.name}
        lead={condition.lead}
        image={condition.image}
        imageAlt={condition.imageAlt}
        actions={
          <>
            <ButtonLink href={site.booking.main} size="lg">
              Book a free consultation
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="secondary" size="lg">
              <Phone aria-hidden className="size-4" />
              {site.phone.display}
            </ButtonLink>
          </>
        }
      />

      <Section className="bg-white">
        <Container className="grid gap-14 lg:grid-cols-12">
          <article className="lg:col-span-7">
            {condition.sections.map((section, i) => (
              <section key={section.title} className={i > 0 ? "mt-14" : undefined}>
                <h2 className="text-3xl leading-tight text-ink sm:text-4xl">{section.title}</h2>
                {section.body.length > 0 && (
                  <div className="prose-rt mt-6">
                    {section.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                {section.quote && (
                  <figure className="mt-8 rounded-3xl bg-brand-50 p-7 ring-1 ring-brand-100">
                    <Quote aria-hidden className="size-7 text-brand-300" />
                    <blockquote className="mt-3 font-display text-xl leading-relaxed text-ink">
                      <p>{section.quote.text}</p>
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-muted">— {section.quote.source}</figcaption>
                  </figure>
                )}
                {section.list && (
                  <div className="mt-6">
                    {section.list.title && (
                      <h3 className="font-sans text-base font-semibold text-ink">{section.list.title}</h3>
                    )}
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {section.list.items.map((item) => (
                        <li key={item} className="rounded-full bg-sand px-4 py-2 text-sm text-ink ring-1 ring-line">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            <p className="mt-12 flex gap-3 rounded-2xl bg-sand p-5 text-sm leading-relaxed text-ink-soft">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-600" />
              This page is for general information only. Please continue to follow the advice of your physician, and let
              your practitioner know about any medications or treatments you&apos;re receiving.
            </p>
          </article>

          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="rounded-4xl bg-ink p-7 text-white sm:p-8">
                <h2 className="font-display text-2xl">What to expect</h2>
                <ol className="mt-6 space-y-5">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 font-display text-lime-300">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-sans font-semibold">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-100">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <ButtonLink href={site.booking.main} variant="lime" className="mt-8 w-full">
                  Book a free consultation
                </ButtonLink>
              </div>

              {practitioners.length > 0 && (
                <div>
                  <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    Practitioners who focus on this
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

      {condition.featuredStory && (
        <Section className="bg-sand">
          <Container>
            <SectionHeading eyebrow="Success stories" title="Recovery is possible" />
            <div className="mt-12">
              <FeaturedStory />
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <SectionHeading eyebrow="How we help" title="Related services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line pt-16 sm:pt-16 lg:pt-16">
        <Container>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            Other conditions we treat
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/conditions/${c.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-ink ring-1 ring-line transition-all hover:shadow-soft hover:ring-brand-200"
                >
                  <c.icon aria-hidden className="size-4 text-brand-600" />
                  {c.name}
                  <ArrowRight
                    aria-hidden
                    className="size-4 text-muted transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        className="pb-20"
        title="Have questions? Not sure what to do?"
        text={`Give us a call at ${site.phone.display} or book a free consultation.`}
        primary={{ label: "Book a free consultation", href: site.booking.main }}
      />
    </>
  );
}
