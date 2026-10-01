import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

const variants = {
  primary: "bg-brand-700 text-white shadow-soft hover:bg-brand-800 hover:shadow-lift active:bg-brand-900",
  secondary: "bg-white text-ink ring-1 ring-inset ring-line hover:ring-brand-300 hover:bg-brand-50 shadow-soft",
  lime: "bg-lime-400 text-ink hover:bg-lime-300 shadow-soft",
  light: "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/15 backdrop-blur",
  ghost: "text-brand-700 hover:text-brand-900 hover:bg-brand-50",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-[0.95rem] gap-2",
  lg: "h-14 px-7 text-base gap-2.5",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Show the external-link arrow for off-site links. Defaults to true for http(s) URLs. */
  externalIcon?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  externalIcon,
  ...props
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);

  if (isExternal(href)) {
    const opensNewTab = href.startsWith("http");
    const showIcon = externalIcon ?? opensNewTab;
    return (
      <a
        href={href}
        className={classes}
        {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
        {showIcon && <ArrowUpRight aria-hidden className="size-4 shrink-0 opacity-80" />}
        {opensNewTab && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
