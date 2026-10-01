import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/content/site";

/** Thumb-reachable call/book actions on small screens. Hidden from lg up, where the header CTA is visible. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-3">
        <a
          href={site.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 font-medium text-ink ring-1 ring-line"
        >
          <Phone aria-hidden className="size-4" />
          Call
        </a>
        <a
          href={site.booking.main}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-700 font-medium text-white shadow-soft"
        >
          <CalendarCheck aria-hidden className="size-4" />
          Book an appointment
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
