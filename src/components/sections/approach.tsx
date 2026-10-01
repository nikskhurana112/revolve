import Image from "next/image";
import { ClipboardList, Ear, RefreshCw } from "lucide-react";
import { insurers } from "@/content/insurers";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container, Orbits, Section, SectionHeading } from "@/components/ui/primitives";

const steps = [
  {
    icon: Ear,
    title: "Listen & assess",
    text: "Every first visit starts with your history, your goals and your preferences — so treatment fits you, not a template.",
  },
  {
    icon: ClipboardList,
    title: "Build your plan",
    text: "We draw on evidence-based Western techniques and Traditional Chinese Medicine to design a plan that may combine therapies.",
  },
  {
    icon: RefreshCw,
    title: "Treat, track & adjust",
    text: "Each session is tailored to how you're feeling that day, and your plan evolves as you progress.",
  },
];

export function Approach() {
  return (
    <Section className="relative overflow-hidden bg-sand">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <Orbits className="absolute -top-16 -left-16 w-[30rem] text-brand-400" />
          <div className="reveal relative mx-auto aspect-[5/6] max-w-md overflow-hidden rounded-[2.5rem] rounded-tl-[999px] shadow-lift">
            <Image
              src="/images/acupuncture-hands.jpg"
              alt="Acupuncturist gently placing a needle in a patient's hand"
              fill
              sizes="(min-width: 1024px) 448px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Our approach"
            title={
              <>
                Western evidence. <em className="text-brand-700">Eastern wisdom.</em> One plan built around you.
              </>
            }
            description="Revolve Therapy brings registered massage therapy, acupuncture, Traditional Chinese Medicine and counselling under one roof — so your care is coordinated, not fragmented."
          />
          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="reveal flex gap-5">
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
        </div>
      </Container>
    </Section>
  );
}

export function StatsBand() {
  const stats = [
    { value: String(services.length), label: "Disciplines under one roof" },
    { value: "7", label: "Days a week, evenings included" },
    { value: site.rating.value.toFixed(1), label: `Google rating from ${site.rating.count} reviews` },
    { value: String(insurers.length), label: "Direct-billing partners" },
  ];
  return (
    <section aria-label="Clinic at a glance" className="relative overflow-hidden bg-ink py-16 text-white">
      <Orbits className="absolute -bottom-80 -left-40 w-[50rem] text-brand-300" />
      <Container className="relative">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal flex flex-col-reverse border-l border-white/15 pl-5 sm:pl-6">
              <dt className="mt-2 text-sm leading-snug text-brand-100 sm:text-base">{s.label}</dt>
              <dd className="font-display text-5xl font-light text-lime-300 sm:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
