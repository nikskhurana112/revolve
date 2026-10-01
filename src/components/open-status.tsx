"use client";

import { useSyncExternalStore } from "react";
import { formatTime, site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = { open: boolean; label: string };

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function nowInClinicTz() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { day: weekdays.indexOf(get("weekday")), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function hoursFor(day: number) {
  return site.hours.find((h) => (h.days as readonly number[]).includes(day));
}

function computeStatus(): Status {
  const { day, minutes } = nowInClinicTz();
  const today = hoursFor(day);
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { open: true, label: `Open now · until ${formatTime(today.close)}` };
  }
  if (today && minutes < toMinutes(today.open)) {
    return { open: false, label: `Closed · opens ${formatTime(today.open)} today` };
  }
  const tomorrow = hoursFor((day + 1) % 7);
  return { open: false, label: tomorrow ? `Closed · opens ${formatTime(tomorrow.open)} tomorrow` : "Closed" };
}

// Re-evaluate once a minute; the snapshot is cached so React sees a stable value between ticks.
let cached: Status | null = null;
let cachedKey = "";
function getSnapshot() {
  const key = String(Math.floor(Date.now() / 60_000));
  if (!cached || key !== cachedKey) {
    cached = computeStatus();
    cachedKey = key;
  }
  return cached;
}
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

export function OpenStatus({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const status = useSyncExternalStore(subscribe, getSnapshot, () => null);

  return (
    <span className={cn("inline-flex items-center gap-2 text-sm", className)} aria-live="polite">
      <span
        aria-hidden
        className={cn(
          "relative inline-flex size-2 rounded-full",
          status === null ? "bg-current opacity-30" : status.open ? "bg-emerald-500" : "bg-amber-500",
        )}
      >
        {status?.open && <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />}
      </span>
      <span className={cn(tone === "dark" ? "text-ink-soft" : "text-brand-100")}>
        {status?.label ?? "Open 7 days a week"}
      </span>
    </span>
  );
}
