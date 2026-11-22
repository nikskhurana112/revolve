import { ClipboardList, MessageCircle, NotebookPen, Stethoscope } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

// No practitioner names here: every first visit follows the same steps, and the team grows.
const steps = [
  {
    icon: NotebookPen,
    title: "Review your health history",
    text: "Including past injuries, conditions and any medications you take.",
  },
  {
    icon: MessageCircle,
    title: "Discuss your concerns and goals",
    text: "What brought you in, and what you would like to get out of treatment.",
  },
  {
    icon: Stethoscope,
    title: "Assess as needed",
    text: "Any assessments that help us understand your concerns.",
  },
  {
    icon: ClipboardList,
    title: "Build your treatment plan",
    text: "A personalized plan tailored to your needs, reviewed as you progress.",
  },
];

const choices = [
  {
    name: "Massage Therapy",
    description:
      "Registered massage therapy for tension, pain, injuries and sports recovery, with 30, 45 or 60-minute sessions.",
    action: { label: "Book massage therapy", href: site.booking.main },
    secondary: { label: "Session options and fees", href: "/services/massage-therapy#first-visit" },
  },
  {
    name: "Acupuncture",
    description: "Start with a 75-minute initial consultation and treatment with a Registered Acupuncturist.",
    action: { label: "Book initial acupuncture", href: site.booking.initialAcupuncture },
    secondary: { label: "About acupuncture", href: "/services/acupuncture" },
  },
  {
    name: "Traditional Chinese Medicine",
    description: "Explore herbal medicine, cupping and other TCM options with a Registered TCM Practitioner.",
    action: { label: "Explore TCM care", href: "/services/herbal-medicine" },
    secondary: { label: "Call about TCM", href: site.phone.href },
  },
  {
    name: "Counselling",
    description:
      "Start with a free 15-minute virtual consultation to ask questions and see if counselling is right for you.",
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
          title="New to Revolve Therapy?"
          description="Whichever service you choose, your first appointment follows the same steps. Your practitioner will:"
        />
        <ol className="mt-7 grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-line">
                <step.icon aria-hidden className="size-5" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-lime-400 text-xs font-semibold text-ink">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h3 className="mt-10 font-sans text-xl font-semibold text-ink sm:mt-14">Choose a service to get started</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
