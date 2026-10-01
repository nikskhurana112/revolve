"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav({ items }: { items: NavItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  // Close after client-side navigation.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  // Lock page scroll while the native modal dialog is open.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const observer = new MutationObserver(() => {
      document.documentElement.classList.toggle("overflow-hidden", dialog.open);
    });
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-flex size-11 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-brand-50 lg:hidden"
        aria-label="Open menu"
        aria-haspopup="dialog"
      >
        <Menu aria-hidden className="size-5" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClick={(e) => e.target === dialogRef.current && close()}
        className="m-0 ml-auto h-dvh max-h-dvh w-full max-w-md bg-cream p-0 text-ink backdrop:bg-ink/40 backdrop:backdrop-blur-sm open:animate-fade-up open:[animation-duration:0.3s]"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="font-display text-xl">Menu</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-line hover:bg-brand-50"
              aria-label="Close menu"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.label} className="py-1">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={expanded === item.label}
                        onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                        className="flex w-full items-center justify-between py-3 text-left font-display text-2xl"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden
                          className={cn(
                            "size-5 text-brand-600 transition-transform",
                            expanded === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      <ul hidden={expanded !== item.label} className="mb-3 space-y-1 pl-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className="block rounded-xl px-3 py-2.5 text-ink-soft hover:bg-brand-50 aria-[current=page]:bg-brand-50 aria-[current=page]:text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={item.href}
                            className="block rounded-xl px-3 py-2.5 font-medium text-brand-700 hover:bg-brand-50"
                          >
                            View all {item.label.toLowerCase()} →
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block py-3 font-display text-2xl aria-[current=page]:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-line bg-white px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <ButtonLink href={site.booking.main} size="lg" className="w-full">
              Book an appointment
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium ring-1 ring-line hover:bg-brand-50"
              >
                <Phone aria-hidden className="size-4" /> Call
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium ring-1 ring-line hover:bg-brand-50"
              >
                <Mail aria-hidden className="size-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
