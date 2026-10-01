import { site } from "./site";

export type Faq = { question: string; answer: string[]; list?: string[] };

export const faqs: Faq[] = [
  {
    question: "Does acupuncture hurt?",
    answer: [
      "It's a common misconception that acupuncture is very painful — it isn't. Our acupuncturists are highly skilled in the placement of needles, both in location and pressure, and we offer gentle styles such as superficial needling if you're new or sensitive. Just let us know your preferences.",
    ],
  },
  {
    question: "What are the benefits of massage therapy?",
    answer: [
      "Massage therapy benefits you both physically and emotionally. People often emphasize the physical side, but both are equally important. Benefits can include:",
    ],
    list: ["Reduced pain", "Stress management", "Improved range of motion", "Better sleep"],
  },
  {
    question: "What is direct billing?",
    answer: [
      "With direct billing, we submit the claim to your insurance provider on your behalf. Depending on your policy, you pay less at each visit instead of paying in full and waiting for a reimbursement. We direct bill ICBC, MSP, WorkSafeBC and most major extended health providers.",
    ],
  },
  {
    question: "I was in a car accident. Is acupuncture covered?",
    answer: [
      "Yes — with an ICBC claim you are automatically eligible for 12 free acupuncture sessions, and we bill ICBC directly. Bring your claim number to your first appointment.",
    ],
  },
  {
    question: "Is there parking nearby?",
    answer: [
      `There's plenty of free 2-hour street parking on 7th Avenue. If it's full, call us at ${site.phone.display} and we'll direct you to overflow parking. We're across the street from Vancouver General Hospital, between Laurel and Willow.`,
    ],
  },
  {
    question: "How do I book an appointment?",
    answer: [
      `Book online any time through our secure booking system, or call us at ${site.phone.display}. New counselling clients can start with a free 15-minute virtual consultation.`,
    ],
  },
];
