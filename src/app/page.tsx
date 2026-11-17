import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { conditions } from "@/content/conditions";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { JsonLd } from "@/components/json-ld";
import { Approach, StatsBand } from "@/components/sections/approach";
import { ConditionsGrid } from "@/components/sections/conditions-grid";
import { CounsellingConsult } from "@/components/sections/cta-band";
import { FaqList, faqSchema } from "@/components/sections/faq";
import { FeaturedStory } from "@/components/sections/featured-story";
import { HomeHero } from "@/components/sections/home-hero";
import { IcbcBanner } from "@/components/sections/icbc-banner";
import { InsurersStrip } from "@/components/sections/insurers-strip";
import { RatingSummary, ReviewsGrid } from "@/components/sections/reviews";
import { NewPatients } from "@/components/sections/new-patients";
import { TeamGrid } from "@/components/sections/team-cards";
import { VisitUs } from "@/components/sections/visit-us";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <NewPatients />
      <InsurersStrip />

      <Approach />
      <StatsBand />

      <Section aria-labelledby="conditions-title">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Conditions we treat"
                id="conditions-title"
                title={<>Specialized care for complex conditions</>}
                description="Our practitioners have particular experience with facial nerve recovery, chronic skin conditions and persistent pain."
              />
              <ButtonLink href="/conditions" variant="secondary" className="mt-8">
                All conditions <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ConditionsGrid conditions={conditions} columns={2} />
          </div>
        </Container>
      </Section>

      <IcbcBanner />

      <Section aria-labelledby="team-title">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Meet the team"
              id="team-title"
              title={<>Registered practitioners who take the time to listen</>}
            />
            <ButtonLink href="/about" variant="secondary" className="self-start lg:self-auto">
              Meet everyone <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-14">
            <TeamGrid members={team} />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="stories-title" className="bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Patient stories"
            id="stories-title"
            title={<>What our clients have to say</>}
            align="center"
          />
          <div className="mt-14 space-y-10">
            <FeaturedStory />
            <RatingSummary />
            <ReviewsGrid />
          </div>
        </Container>
      </Section>

      <CounsellingConsult className="pt-20" />

      <Section aria-labelledby="faq-title">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              id="faq-title"
              title={<>Frequently asked questions</>}
              description={
                <>
                  Can&apos;t find what you&apos;re looking for? Call us at{" "}
                  <a
                    href={site.phone.href}
                    className="font-medium text-brand-700 underline underline-offset-4 hover:decoration-2"
                  >
                    {site.phone.display}
                  </a>
                  .
                </>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </Container>
      </Section>

      <VisitUs />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
