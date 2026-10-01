"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitContact, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "block w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-ink ring-1 ring-line transition placeholder:text-muted/70 focus:ring-2 focus:ring-brand-600 focus:outline-none aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-600";

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-muted">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <CircleAlert aria-hidden className="size-4" /> {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const err = state.errors ?? {};
  const v = state.values ?? {};
  const describedBy = (name: keyof typeof err) => (err[name] ? `${name}-error` : undefined);

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-5">
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={cn(
          "rounded-2xl text-sm outline-none",
          state.status === "success" &&
            "flex items-start gap-3 bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200",
          state.status === "error" && "flex items-start gap-3 bg-red-50 p-4 text-red-900 ring-1 ring-red-200",
        )}
      >
        {state.status === "success" && <CircleCheck aria-hidden className="size-5 shrink-0" />}
        {state.status === "error" && <CircleAlert aria-hidden className="size-5 shrink-0" />}
        {state.message}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={err.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={Boolean(err.name)}
            aria-describedby={describedBy("name")}
            className={inputClasses}
          />
        </Field>
        <Field id="email" label="Email" error={err.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={Boolean(err.email)}
            aria-describedby={describedBy("email")}
            className={inputClasses}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={err.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={v.phone}
            aria-invalid={Boolean(err.phone)}
            aria-describedby={describedBy("phone")}
            className={inputClasses}
          />
        </Field>
        <Field id="topic" label="I'm asking about" error={err.topic}>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              required
              defaultValue={v.topic ?? ""}
              aria-invalid={Boolean(err.topic)}
              aria-describedby={describedBy("topic")}
              className={cn(inputClasses, "appearance-none pr-11")}
            >
              <option value="" disabled>
                Choose a topic
              </option>
              <option value="general">General question</option>
              <option value="massage-therapy">Massage therapy</option>
              <option value="acupuncture">Acupuncture & TCM</option>
              <option value="herbal-medicine">Herbal medicine</option>
              <option value="counselling">Counselling</option>
              <option value="billing">Insurance & direct billing</option>
            </select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>
      </div>

      <Field id="message" label="Message" error={err.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={v.message}
          aria-invalid={Boolean(err.message)}
          aria-describedby={["message-hint", describedBy("message")].filter(Boolean).join(" ")}
          className={cn(inputClasses, "resize-y")}
        />
        <p id="message-hint" className="mt-2 text-xs text-muted">
          Please don&apos;t include detailed medical information — we&apos;ll discuss that privately at your visit.
        </p>
      </Field>

      {/* Honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          By sending this form you agree to our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
            privacy policy
          </Link>
          .
        </p>
        <button type="submit" disabled={pending} className={buttonClasses("primary", "lg")}>
          {pending ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <Send aria-hidden className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
