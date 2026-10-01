"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  // When hover just opened a menu, the click that follows shouldn't immediately close it.
  const hoverOpenedAt = useRef(0);

  // Close the open menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        navRef.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${open}"]`)?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const openWithHover = (label: string, timeStamp: number) => {
    window.clearTimeout(closeTimer.current);
    if (open !== label) hoverOpenedAt.current = timeStamp;
    setOpen(label);
  };
  const toggle = (label: string, timeStamp: number) => {
    const justHovered = timeStamp - hoverOpenedAt.current < 500;
    setOpen((o) => (o === label && !justHovered ? null : label));
  };
  const closeWithDelay = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };

  return (
    <nav ref={navRef} aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) =>
          item.children ? (
            <DropdownItem
              key={item.label}
              item={item}
              active={isActive(pathname, item.href)}
              pathname={pathname}
              open={open === item.label}
              onToggle={(t) => toggle(item.label, t)}
              onPointerEnter={(t) => openWithHover(item.label, t)}
              onPointerLeave={closeWithDelay}
              onBlurOutside={() => setOpen(null)}
            />
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.95rem] text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink",
                  isActive(pathname, item.href) && "font-medium text-ink",
                )}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

function DropdownItem({
  item,
  active,
  pathname,
  open,
  onToggle,
  onPointerEnter,
  onPointerLeave,
  onBlurOutside,
}: {
  item: NavItem;
  active: boolean;
  pathname: string;
  open: boolean;
  onToggle: (timeStamp: number) => void;
  onPointerEnter: (timeStamp: number) => void;
  onPointerLeave: () => void;
  onBlurOutside: () => void;
}) {
  const panelId = useId();

  return (
    <li
      className="relative"
      onPointerEnter={(e) => e.pointerType === "mouse" && onPointerEnter(e.timeStamp)}
      onPointerLeave={(e) => e.pointerType === "mouse" && onPointerLeave()}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onBlurOutside();
      }}
    >
      <button
        type="button"
        data-menu-trigger={item.label}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={(e) => onToggle(e.timeStamp)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink",
          (active || open) && "text-ink",
          active && "font-medium",
        )}
      >
        {item.label}
        <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-200", open && "rotate-180")} />
      </button>

      <div id={panelId} hidden={!open} className="absolute top-full left-1/2 z-50 w-[34rem] -translate-x-1/2 pt-3">
        <div className="animate-fade-up overflow-hidden rounded-3xl bg-white p-2 shadow-lift ring-1 ring-line [animation-duration:0.35s]">
          <ul className="grid grid-cols-2 gap-1">
            {item.children!.map((child) => {
              const current = pathname === child.href;
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl p-3.5 transition-colors hover:bg-brand-50",
                      current && "bg-brand-50",
                    )}
                  >
                    <span className="block font-medium text-ink">{child.label}</span>
                    {child.description && (
                      <span className="mt-0.5 block text-sm leading-snug text-muted">{child.description}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={item.href}
            className="group mt-1 flex items-center justify-between rounded-2xl bg-sand px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-lime-100"
          >
            View all {item.label.toLowerCase()}
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </li>
  );
}
