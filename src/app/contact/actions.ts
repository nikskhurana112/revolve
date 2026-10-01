"use server";

import { z } from "zod";
import { site } from "@/content/site";

const topics = ["general", "massage-therapy", "acupuncture", "herbal-medicine", "counselling", "billing"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[0-9+().\-\s]*$/, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  topic: z.enum(topics, "Please choose a topic."),
  message: z.string().trim().min(10, "Please add a few more details (at least 10 characters).").max(3000),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  values?: Record<string, string>;
};

async function deliver(data: z.infer<typeof schema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email delivery not configured; message logged instead:", data);
      return true;
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_FROM_EMAIL are not set; message was not delivered.");
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: data.email,
      subject: `Website enquiry (${data.topic}) — ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Topic: ${data.topic}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });
  if (!res.ok) console.error("[contact] Resend responded with", res.status, await res.text());
  return res.ok;
}

export async function submitContact(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const raw = Object.fromEntries(
    ["name", "email", "phone", "topic", "message"].map((k) => [k, String(formData.get(k) ?? "")]),
  );

  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactFormState["errors"]>;
      errors[key] ??= issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", errors, values: raw };
  }

  const ok = await deliver(parsed.data).catch((err) => {
    console.error("[contact] delivery failed", err);
    return false;
  });

  if (!ok) {
    return {
      status: "error",
      message: `Sorry, we couldn't send your message right now. Please call ${site.phone.display} or email ${site.email}.`,
      values: raw,
    };
  }

  return {
    status: "success",
    message: "Thank you for contacting us. We'll get back to you as soon as possible.",
  };
}
