import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = service.icon;
  return (
    <article
      className={cn(
        "group reveal relative flex flex-col overflow-hidden rounded-4xl bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <Image
          src={service.cardImage}
          alt=""
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-full bg-white/95 text-brand-700 shadow-soft backdrop-blur">
          <Icon aria-hidden className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl leading-tight text-ink">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {service.navLabel}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{service.summary}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
          Learn more
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
      {/* Focus ring for the stretched link */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-4xl ring-brand-600 ring-offset-2 group-has-[a:focus-visible]:ring-2"
      />
    </article>
  );
}

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
