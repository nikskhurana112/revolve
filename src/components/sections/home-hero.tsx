import Image from "next/image";
import { ArrowRight, BadgeCheck, Car } from "lucide-react";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { GoogleIcon } from "@/components/icons/social";
import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Orbits, Stars } from "@/components/ui/primitives";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grain absolute inset-0 opacity-60" />
      <Orbits className="absolute top-1/2 -right-40 w-[56rem] -translate-y-1/2 text-brand-400 max-lg:hidden" />

      <Container className="relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="animate-fade-up">
            <Eyebrow>
              <span className="sm:hidden">Vancouver health clinic</span>
              <span className="max-sm:hidden">Vancouver · Massage · Acupuncture · Counselling</span>
            </Eyebrow>
          </div>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-light tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.5rem]">
            Arrive in discomfort.{" "}
            <span className="block">
              Leave feeling{" "}
              <em className="relative font-normal whitespace-nowrap text-brand-700">
                relieved.
                <svg
                  aria-hidden
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-lime-400"
                >
                  <path
                    d="M3 14 C 80 4, 200 2, 297 10"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Professional, personalized treatment with patient-centred care. We combine Western and Eastern modalities
            into one holistic approach — individualized therapies that revolve around you.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <ButtonLink href={site.booking.main} size="lg">
              Book an appointment
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore services
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>

          <ul className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft [animation-delay:320ms]">
            <li>
              <a
                href={site.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <GoogleIcon className="size-5" />
                <span className="font-semibold text-ink">{site.rating.value.toFixed(1)}</span>
                <Stars rating={site.rating.value} />
                <span className="underline-offset-4 group-hover:underline">{site.rating.count} Google reviews</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck aria-hidden className="size-5 text-brand-600" />
              Direct billing available
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck aria-hidden className="size-5 text-brand-600" />
              Open 7 days a week
            </li>
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:mr-0 lg:max-w-none xl:pl-10">
          <div className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-brand-100 shadow-lift">
            <Image
              src="/images/massage-hands.jpg"
              alt="Registered massage therapist treating a client's lower back"
              fill
              priority
              sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, 86vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-[18%] left-0 w-[42%] animate-fade-up overflow-hidden rounded-full border-[6px] border-cream shadow-lift [animation-delay:360ms]">
            <div className="relative aspect-square">
              <Image
                src="/images/acupuncture-back.jpg"
                alt="Acupuncture needles along a patient's back"
                fill
                sizes="(min-width: 1024px) 240px, 40vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 left-[8%] flex max-w-[17rem] animate-fade-up items-start gap-3 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line [animation-delay:480ms] sm:-bottom-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime-100 text-lime-700">
              <Car aria-hidden className="size-5" />
            </span>
            <p className="text-sm leading-snug text-ink-soft">
              <strong className="block font-semibold text-ink">ICBC claim?</strong>
              12 free acupuncture sessions, billed directly.
            </p>
          </div>

          <div className="absolute top-[6%] right-0 hidden animate-fade-up items-center gap-3 rounded-full bg-white/95 py-2 pr-4 pl-2 shadow-lift ring-1 ring-line backdrop-blur [animation-delay:560ms] sm:flex lg:-right-2">
            <div className="flex -space-x-2.5">
              {team.slice(0, 4).map((m) => (
                <Image
                  key={m.slug}
                  src={m.image}
                  alt=""
                  width={40}
                  height={40}
                  className="size-9 rounded-full object-cover ring-2 ring-white"
                  style={{ objectPosition: m.imagePosition }}
                />
              ))}
            </div>
            <p className="text-sm leading-tight">
              <strong className="block font-semibold text-ink">{team.length} registered</strong>
              <span className="text-muted">practitioners</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
