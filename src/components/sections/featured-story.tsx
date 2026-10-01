import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredStory } from "@/content/testimonials";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export function FeaturedStory({ className, linkToStory = true }: { className?: string; linkToStory?: boolean }) {
  const s = featuredStory;
  return (
    <figure
      className={cn(
        "reveal grid overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-line lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
        className,
      )}
    >
      <div className="relative aspect-square bg-white lg:aspect-auto lg:min-h-full">
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain p-4 sm:p-6"
        />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <Eyebrow>Patient story · {s.condition}</Eyebrow>
        <blockquote className="mt-6">
          <p className="font-display text-2xl leading-snug text-ink sm:text-[2rem]">“{s.pullQuote}”</p>
        </blockquote>
        <figcaption className="mt-6 text-ink-soft">
          <strong className="font-semibold text-ink">{s.author}</strong> — recovering from severe Bell&apos;s Palsy
        </figcaption>

        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line">
          {s.highlights.map((h) => (
            <div key={h.label} className="bg-cream p-4">
              <dt className="text-xs font-semibold tracking-wider text-muted uppercase">{h.label}</dt>
              <dd className="mt-1 font-medium text-ink">{h.value}</dd>
            </div>
          ))}
        </dl>

        {linkToStory && (
          <div className="mt-8">
            <ButtonLink href={`/testimonials#${s.id}`} variant="secondary">
              Read Michael&apos;s full story
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        )}
        <p className="mt-6 text-xs leading-relaxed text-muted">
          In the patient&apos;s own words. Individual results vary.
        </p>
      </div>
    </figure>
  );
}
