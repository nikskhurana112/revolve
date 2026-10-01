import { Plus } from "lucide-react";
import type { Faq } from "@/content/faqs";

/** Native <details> accordion: accessible and keyboard-friendly with zero JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-4xl bg-white px-6 ring-1 ring-line sm:px-8">
      {faqs.map((faq, i) => (
        <details key={faq.question} className="group py-2" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-4 text-left [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-lg font-medium text-ink">{faq.question}</h3>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-open:rotate-45 group-open:bg-lime-400 group-open:text-ink">
              <Plus aria-hidden className="size-4" />
            </span>
          </summary>
          <div className="pr-12 pb-5 leading-relaxed text-ink-soft">
            {faq.answer.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {faq.list && (
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {faq.list.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="size-1.5 rounded-full bg-lime-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...f.answer, ...(f.list ? [f.list.join(", ")] : [])].join(" "),
      },
    })),
  };
}
