import { ArrowUpRight, Quote } from "lucide-react";
import { site } from "@/content/site";
import { reviews } from "@/content/testimonials";
import { GoogleIcon } from "@/components/icons/social";
import { ButtonLink } from "@/components/ui/button";
import { Stars } from "@/components/ui/primitives";
import { formatDate } from "@/lib/utils";

export function RatingSummary() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-3xl bg-white p-5 ring-1 ring-line sm:p-6">
      <div className="flex items-center gap-4">
        <GoogleIcon className="size-10" />
        <div>
          <p className="flex items-center gap-2">
            <span className="font-display text-3xl leading-none text-ink">{site.rating.value.toFixed(1)}</span>
            <Stars rating={site.rating.value} />
          </p>
          <p className="mt-1 text-sm text-muted">Based on {site.rating.count} Google reviews</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:ml-auto">
        <ButtonLink href={site.maps.place} variant="secondary" size="sm">
          Read all reviews
        </ButtonLink>
        <ButtonLink href={site.maps.writeReview} variant="ghost" size="sm">
          Leave a review
        </ButtonLink>
      </div>
    </div>
  );
}

export function ReviewsGrid() {
  return (
    <ul className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>li]:mb-5 max-md:[&>li:nth-child(n+4)]:hidden">
      {reviews.map((r) => (
        <li key={r.author} className="reveal break-inside-avoid">
          <figure className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-7">
            <div className="flex items-center justify-between">
              <Stars />
              <Quote aria-hidden className="size-6 text-brand-200" />
            </div>
            <blockquote className="mt-4 leading-relaxed text-ink-soft">
              <p>“{r.text}”</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span
                aria-hidden
                className="grid size-10 place-items-center rounded-full bg-brand-100 font-medium text-brand-800"
              >
                {r.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="flex-1 text-sm">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1 font-medium text-ink hover:underline"
                >
                  {r.author}
                  <ArrowUpRight aria-hidden className="size-3.5 text-muted" />
                  <span className="sr-only">(Google profile, opens in a new tab)</span>
                </a>
                <span className="block text-muted">
                  Google review ·{" "}
                  <time dateTime={r.date}>{formatDate(r.date, { month: "short", year: "numeric" })}</time>
                </span>
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
