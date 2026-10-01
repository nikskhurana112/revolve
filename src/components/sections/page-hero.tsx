import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, JsonLd } from "@/components/json-ld";
import { Container, Eyebrow, Orbits } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="inline-flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:text-ink hover:underline">
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden className="size-3.5" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  imagePosition,
  actions,
  aside,
  className,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  const hasVisual = Boolean(image || aside);
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div aria-hidden className="bg-grain absolute inset-0 opacity-60" />
      <Orbits className="absolute -top-72 -right-72 w-[48rem] text-brand-400 max-md:hidden" />
      <Container
        className={cn(
          "relative grid gap-12 pt-10 pb-16 sm:pt-12 lg:pb-24",
          hasVisual && "items-center lg:grid-cols-12",
        )}
      >
        <div className={cn(hasVisual ? "lg:col-span-7" : "max-w-3xl")}>
          <Breadcrumbs items={crumbs} />
          {eyebrow && (
            <div className="mt-10">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1
            className={cn(
              "text-[2.6rem] leading-[1.04] font-light tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]",
              eyebrow ? "mt-5" : "mt-10",
            )}
          >
            {title}
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</p>}
          {actions && (
            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:180ms] sm:flex-row sm:flex-wrap">
              {actions}
            </div>
          )}
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mr-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-brand-100 shadow-lift">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
            </div>
          </div>
        )}
        {!image && aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}
