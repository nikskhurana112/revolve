import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import type { Condition } from "@/content/conditions";
import { cn } from "@/lib/utils";

function Tile({
  href,
  icon: Icon,
  title,
  text,
  className,
}: {
  href: string;
  icon: Condition["icon"];
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group reveal flex items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft hover:ring-brand-200",
        className,
      )}
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-lime-100 group-hover:text-lime-700">
        <Icon aria-hidden className="size-6" />
      </span>
      <span className="flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="font-display text-xl text-ink">{title}</span>
          <ArrowRight
            aria-hidden
            className="size-4 shrink-0 text-brand-600 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
          />
        </span>
        <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-soft">{text}</span>
      </span>
    </Link>
  );
}

export function ConditionsGrid({
  conditions,
  includeCounselling = true,
  columns = 3,
}: {
  conditions: Condition[];
  includeCounselling?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", columns === 3 && "lg:grid-cols-3")}>
      {conditions.map((c) => (
        <Tile key={c.slug} href={`/conditions/${c.slug}`} icon={c.icon} title={c.name} text={c.blurb} />
      ))}
      {includeCounselling && (
        <Tile
          href="/services/counselling"
          icon={HeartHandshake}
          title="Anxiety, Stress & Trauma"
          text="Evidence-based, mindfulness-informed counselling."
        />
      )}
    </div>
  );
}
