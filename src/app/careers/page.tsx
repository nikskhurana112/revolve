import { Briefcase, Check, Clock, MapPin } from "lucide-react";
import { fullAddress, site } from "@/content/site";
import { PageHero } from "@/components/sections/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, Tag } from "@/components/ui/primitives";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Careers — Hiring a Registered Massage Therapist",
  description:
    "Join our growing team at Revolve Therapy Health Services in Vancouver. We're hiring a passionate, caring Registered Massage Therapist (RMT).",
  path: "/careers",
});

const applyHref = `mailto:${site.email}?subject=${encodeURIComponent("RMT application – Revolve Therapy")}`;

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", path: "/careers" }]}
        eyebrow="Join us"
        title={
          <>
            Grow your practice with a <em className="text-brand-700">caring</em> team
          </>
        }
        lead="Join our growing team at Revolve Therapy Health Services — a friendly, multidisciplinary clinic across from Vancouver General Hospital."
      />

      <Section className="pt-4 sm:pt-6 lg:pt-8">
        <Container className="max-w-4xl">
          <article className="rounded-[2.5rem] bg-white p-7 ring-1 ring-line sm:p-12">
            <div className="flex flex-wrap gap-2">
              <Tag>Now hiring</Tag>
              <Tag>Massage Therapy</Tag>
            </div>
            <h2 className="mt-6 text-3xl leading-tight text-ink sm:text-4xl">Registered Massage Therapist (RMT)</h2>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-ink-soft">
              <li className="inline-flex items-center gap-2">
                <MapPin aria-hidden className="size-4 text-brand-600" /> {fullAddress}
              </li>
              <li className="inline-flex items-center gap-2">
                <Clock aria-hidden className="size-4 text-brand-600" /> Flexible opportunities
              </li>
              <li className="inline-flex items-center gap-2">
                <Briefcase aria-hidden className="size-4 text-brand-600" /> Vancouver, BC
              </li>
            </ul>

            <div className="prose-rt mt-8">
              <p>
                We&apos;re looking for a passionate and caring RMT to join our friendly clinic environment. You&apos;ll
                work alongside a registered acupuncturist and TCM practitioner, and a counsellor, with the support of a
                team that values patient-centred care.
              </p>
            </div>

            <h3 className="mt-10 font-sans text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Why Revolve
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Flexible opportunities",
                "Friendly clinic environment",
                "Multidisciplinary team",
                "Central location across from VGH",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-ink">
                  <span className="grid size-5 place-items-center rounded-full bg-lime-400">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-cream p-6 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
              <p className="text-ink-soft">
                <strong className="block text-ink">Send us your resume today.</strong>
                Questions? Call {site.phone.display}.
              </p>
              <ButtonLink href={applyHref} size="lg">
                Apply by email
              </ButtonLink>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
