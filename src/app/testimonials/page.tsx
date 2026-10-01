import Image from "next/image";
import { Check } from "lucide-react";
import { site } from "@/content/site";
import { featuredStory } from "@/content/testimonials";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { RatingSummary, ReviewsGrid } from "@/components/sections/reviews";
import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Testimonials & Patient Stories",
  description:
    "Read Michael's Bell's Palsy recovery story and Google reviews from patients of Revolve Therapy Health Services in Vancouver.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const s = featuredStory;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Testimonials", path: "/testimonials" }]}
        eyebrow="Testimonials"
        title={
          <>
            Stories of <em className="text-brand-700">relief</em> and recovery
          </>
        }
        lead={`Rated ${site.rating.value.toFixed(1)} out of 5 on Google. Here's what our patients have to say, in their own words.`}
        actions={
          <>
            <ButtonLink href="#bells-palsy-story" size="lg">
              Read Michael&apos;s story
            </ButtonLink>
            <ButtonLink href="#reviews" variant="secondary" size="lg">
              Google reviews
            </ButtonLink>
          </>
        }
      />

      <Section id={s.id} aria-labelledby="story-title" className="bg-white">
        <Container className="grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-32">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-brand-50 ring-1 ring-line">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                />
              </div>
              <dl className="divide-y divide-line rounded-3xl bg-cream px-6 ring-1 ring-line">
                {s.highlights.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4 py-3.5">
                    <dt className="text-sm text-muted">{h.label}</dt>
                    <dd className="text-right font-medium text-ink">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <Eyebrow>
              {s.condition} · <time dateTime={s.date}>{formatDate(s.date)}</time>
            </Eyebrow>
            <h2 id="story-title" className="mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              {s.author.replace(".", "")}&apos;s story
            </h2>
            <blockquote className="mt-8 border-l-4 border-lime-400 pl-6">
              <p className="font-display text-2xl leading-snug text-ink">“{s.pullQuote}”</p>
            </blockquote>

            <div className="prose-rt mt-10">
              {s.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && <h3>{section.heading}</h3>}
                  {section.body.map((p) => (
                    <p key={p} className="mt-5">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-5 space-y-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check aria-hidden className="mt-1.5 size-4 shrink-0 text-brand-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
              — {s.author}, {formatDate(s.date)}. Shared in the patient&apos;s own words and lightly edited for length.
              Individual results vary.
            </p>
          </article>
        </Container>
      </Section>

      <Section id="reviews" aria-labelledby="reviews-title" className="bg-sand">
        <Container>
          <SectionHeading id="reviews-title" eyebrow="Google reviews" title="What our clients have to say" />
          <div className="mt-12 space-y-10">
            <RatingSummary />
            <ReviewsGrid />
          </div>
        </Container>
      </Section>

      <CtaBand
        className="py-20"
        title="Start your own story"
        text="Book a consultation and let's build a plan that revolves around you."
      />
    </>
  );
}
