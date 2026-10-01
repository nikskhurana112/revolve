import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3 rounded-lg", className)}
      aria-label="Revolve Therapy Health Services — home"
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={344}
        height={260}
        priority
        className="h-9 w-auto transition-transform duration-500 group-hover:-rotate-6 sm:h-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] tracking-tight sm:text-2xl",
            tone === "dark" ? "text-ink" : "text-white",
          )}
        >
          Revolve Therapy
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-semibold tracking-[0.24em] uppercase",
            tone === "dark" ? "text-brand-600" : "text-brand-200",
          )}
        >
          Health Services
        </span>
      </span>
    </Link>
  );
}
