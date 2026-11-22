import Image from "next/image";
import { Leaf, Puzzle, Stethoscope } from "lucide-react";
import { insurers } from "@/content/insurers";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container, Orbits, Section, SectionHeading } from "@/components/ui/primitives";

// Not steps: the first-visit steps live in the "New to Revolve Therapy?" section.
const pillars = [
  {
    icon: Stethoscope,
    title: "Western, evidence-based care",
    text: "Registered massage therapy and counselling, grounded in clinical assessment and current research.",
  },
  {
    icon: Leaf,
    title: "Eastern traditions",
    text: "Acupuncture and Traditional Chinese Medicine, including herbal medicine and cupping, look at your health as a whole.",
  },
  {
    icon: Puzzle,
    title: "Combined when it helps",
    text: "With four disciplines under one roof, your care can bring therapies together, such as massage alongside acupuncture, without going between clinics.",
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
          <ul className="mt-10 space-y-6">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="reveal flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-700 shadow-soft ring-1 ring-line">
                  <pillar.icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ul>
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
