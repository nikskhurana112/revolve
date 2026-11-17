import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

const choices = [
  {
    name: "Massage Therapy",
    description: "See what to expect, view session options and book with registered massage therapist Martin Pan.",
    action: { label: "Plan your massage visit", href: "/services/massage-therapy#first-visit" },
    secondary: { label: "See times with Martin", href: site.booking.massageWithMartin },
  },
  {
    name: "Acupuncture",
    description: "Start with a 75-minute consultation and treatment with Jessie Li, Registered Acupuncturist.",
    action: { label: "Book initial acupuncture", href: site.booking.initialAcupuncture },
    secondary: { label: "About acupuncture", href: "/services/acupuncture" },
  },
  {
    name: "Traditional Chinese Medicine",
    description: "Explore herbal medicine, cupping and other TCM options with Registered TCM Practitioner Jessie Li.",
    action: { label: "Explore TCM care", href: "/services/herbal-medicine" },
    secondary: { label: "Call about TCM", href: site.phone.href },
  },
  {
    name: "Counselling",
    description: "Meet Dr. Anu Patel in a free 15-minute virtual consultation and ask about getting started.",
    action: { label: "Book a free consultation", href: site.booking.counsellingConsult },
    secondary: { label: "About counselling", href: "/services/counselling" },
  },
];

export function NewPatients() {
  return (
    <Section
      id="new-patients"
      aria-labelledby="new-patients-title"
      className="scroll-mt-24 bg-sand py-12 sm:py-16 lg:py-18"
    >
      <Container>
        <SectionHeading
          id="new-patients-title"
          title="New to Revolve?"
          description="Choose a service to get started with your first visit at our Fairview clinic, across from Vancouver General Hospital."
        />
        <ul className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {choices.map(({ name, description, action, secondary }) => (
            <li key={name} className="flex flex-col rounded-3xl border border-line bg-white p-5 lg:p-6">
              <h3 className="text-2xl leading-tight text-ink">{name}</h3>
              <p className="mt-2 mb-5 text-ink-soft">{description}</p>
              <div className="mt-auto flex flex-col items-start gap-2">
                <ButtonLink href={action.href} variant="secondary" externalIcon={false}>
                  {action.label}
                </ButtonLink>
                <ButtonLink
                  href={secondary.href}
                  className="h-auto rounded-none bg-transparent px-0 text-brand-700 underline underline-offset-4 hover:bg-transparent hover:text-brand-900"
                  variant="ghost"
                  size="sm"
                  externalIcon={false}
                >
                  {secondary.label}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-ink-soft">
          <strong className="text-ink">Need help choosing?</strong> Call{" "}
          <a href={site.phone.href} className="font-medium text-brand-700 underline underline-offset-4">
            {site.phone.display}
          </a>{" "}
          and we can help you find the right appointment.
        </p>
      </Container>
    </Section>
  );
}
