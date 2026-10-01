import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

export function Section({
  className,
  as: Tag = "section",
  ...props
}: ComponentPropsWithoutRef<"section"> & { as?: ElementType }) {
  return <Tag className={cn("py-20 sm:py-24 lg:py-28", className)} {...props} />;
}

export function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "dark" ? "text-brand-700" : "text-lime-300",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-lime-500" : "bg-lime-400")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  id,
  as: Heading = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        id={id}
        className={cn(
          "mt-4 text-[2.1rem] leading-[1.08] font-normal sm:text-5xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-ink-soft" : "text-brand-100")}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Stars({ className, rating = 5 }: { className?: string; rating?: number }) {
  return (
    <span className={cn("inline-flex gap-0.5", className)} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden className={cn("size-4 text-[#E9A92C]", i < Math.round(rating) && "fill-[#F5B83D]")} />
      ))}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800 ring-1 ring-brand-100 ring-inset",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Decorative concentric arcs echoing the circular "revolve" motion of the logo. */
export function Orbits({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 600" fill="none" className={cn("pointer-events-none select-none", className)}>
      <circle cx="300" cy="300" r="290" stroke="currentColor" strokeOpacity="0.18" />
      <circle
        cx="300"
        cy="300"
        r="220"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <circle cx="300" cy="300" r="150" stroke="currentColor" strokeOpacity="0.12" />
      <path
        d="M 40 300 A 260 260 0 0 1 300 40"
        stroke="var(--color-lime-400)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <circle cx="300" cy="40" r="6" fill="var(--color-lime-400)" />
    </svg>
  );
}
