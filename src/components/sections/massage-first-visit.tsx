import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

const details = [
  {
    title: "What to expect",
    text: "Like every first visit at Revolve Therapy, your therapist reviews your health history, discusses your concerns and goals, does any assessments needed and builds a treatment plan with you, including the pressure you prefer.",
  },
  {
    title: "Session options",
    text: "Options include 30 minutes ($90), 45 minutes ($120) and 60 minutes ($140). Confirm the current fee when you book. Call us if you need help choosing a length.",
  },
  {
    title: "Direct billing",
    text: "We offer direct billing for many extended health plans. Bring your insurance details and check your plan for RMT coverage and any amount you may need to pay.",
  },
  {
    title: "Getting here",
    text: `Find us at ${site.address.unit}, ${site.address.street}, across from Vancouver General Hospital. ${site.parking}`,
  },
];

export function MassageFirstVisit() {
  return (
    <Section
      id="first-visit"
      aria-labelledby="first-visit-title"
      className="scroll-mt-24 bg-sand py-12 sm:py-16 lg:py-18"
    >
      <Container>
        <SectionHeading id="first-visit-title" title="Your first massage appointment" />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {details.map(({ title, text }) => (
            <div key={title} className="rounded-3xl border border-line bg-white p-5 lg:p-6">
              <h3 className="text-2xl leading-tight text-ink">{title}</h3>
              <p className="mt-2 text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={site.booking.main}>Book massage therapy</ButtonLink>
          <ButtonLink href={site.phone.href} variant="secondary">
            Call {site.phone.display}
          </ButtonLink>
          <ButtonLink href={site.maps.directions} variant="secondary">
            Get directions
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
