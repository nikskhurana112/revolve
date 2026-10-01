import type { LucideIcon } from "lucide-react";
import { Activity, Droplets, Flower2, Leaf, ScanFace } from "lucide-react";

export type ConditionSection = {
  title: string;
  body: string[];
  list?: { title?: string; items: string[] };
  quote?: { text: string; source: string };
};

export type Condition = {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: ConditionSection[];
  services: string[];
  practitioners: string[];
  /** Show the Bell's Palsy recovery story on this page. */
  featuredStory?: boolean;
  meta: { title: string; description: string };
};

export const conditions: Condition[] = [
  {
    slug: "bells-palsy",
    name: "Bell's Palsy",
    icon: ScanFace,
    blurb: "Acupuncture support for facial nerve recovery.",
    lead: "Recovery is possible. We've had quite a few success stories — and we'll be with you through every step.",
    image: "/images/acupuncture-hands.jpg",
    imageAlt: "Acupuncturist gently placing a needle in a patient's hand",
    sections: [
      {
        title: "What is Bell's Palsy?",
        body: [
          "Bell's Palsy is a paralysis of the facial structures caused by damage to the facial nerve. It can occur at any time, at any age, for no apparent reason. Because the facial nerve controls the muscles on one side of the face, damage results in drooping on that side to varying degrees.",
          "In some cases the eye on the affected side cannot close, which risks damage to the cornea and eventually impaired vision — eye drops are often needed to keep the eye moist. Other complications can include lasting damage to the facial nerve and involuntary contraction of certain muscles.",
        ],
      },
      {
        title: "How we can help",
        body: [
          "Acupuncture is widely used as a complementary treatment alongside the care you receive from your physician or neurologist. Treatment is tailored to your presentation and adjusted visit by visit as your face responds.",
          "Every recovery is unique, and prognosis varies from case to case. What doesn't vary is our commitment: Revolve Therapy and all of our staff will be with you through each step toward recovery.",
        ],
      },
    ],
    services: ["acupuncture"],
    practitioners: ["jessie-li", "caldwell-lever"],
    featuredStory: true,
    meta: {
      title: "Bell's Palsy Acupuncture Treatment in Vancouver",
      description:
        "Acupuncture for Bell's Palsy in Vancouver. Read a patient's recovery story and book a free consultation with our registered acupuncturists.",
    },
  },
  {
    slug: "eczema",
    name: "Eczema",
    icon: Droplets,
    blurb: "A TCM alternative to long-term steroid creams.",
    lead: "Traditional Chinese Medicine offers an alternative approach to calming itchy, inflamed skin — from the inside out.",
    image: "/images/eczema.jpg",
    imageAlt: "Close-up of dry, irritated skin affected by eczema",
    sections: [
      {
        title: "What is eczema?",
        body: [
          "Also known as atopic dermatitis, eczema is an inflammatory skin disease characterized by itchy, scaly rashes. Affected areas usually appear very dry and thickened. On lighter skin these areas may first look reddish before turning brown; on darker skin, eczema can affect pigmentation, making the area lighter or darker.",
          "Eczema most often begins in children around two years of age and can persist through youth into adulthood.",
        ],
        list: {
          title: "Common complications include",
          items: [
            "Asthma",
            "Food allergies",
            "Chronic itchy, scaly skin",
            "Skin infections",
            "Sleep problems",
            "Mental health concerns",
          ],
        },
      },
      {
        title: "Eczema treatment in Vancouver",
        body: [
          "Typical treatment relies on steroid creams, but long-term use carries side effects of its own. Traditional Chinese Medicine offers an alternative approach, using individualized herbal formulas and acupuncture to clear internal heat, calm itching and support the skin's own healing.",
        ],
      },
    ],
    services: ["herbal-medicine", "acupuncture"],
    practitioners: ["jessie-li"],
    meta: {
      title: "Eczema Treatment in Vancouver | TCM & Acupuncture",
      description:
        "A Traditional Chinese Medicine approach to eczema (atopic dermatitis) in Vancouver, using herbal medicine and acupuncture. Book a free consultation.",
    },
  },
  {
    slug: "psoriasis",
    name: "Psoriasis",
    icon: Flower2,
    blurb: "Calming chronic, scaly plaques with TCM.",
    lead: "A chronic condition deserves a long-term plan. TCM works on the underlying imbalance, not just the surface.",
    image: "/images/psoriasis.jpg",
    imageAlt: "An open hand holding small white flowers",
    sections: [
      {
        title: "What is psoriasis?",
        body: [
          "Psoriasis is a chronic autoimmune skin disease that causes skin cells to grow too quickly, resulting in thick white, scaly or red patches. Plaques frequently appear on the elbows and knees but can affect any area, including the scalp, palms, soles of the feet and genitals.",
          "Unlike eczema, which tends to appear on the inner side of a joint, psoriasis is more likely to be found on the outer side.",
        ],
      },
      {
        title: "How Traditional Chinese Medicine can help",
        body: [
          "In TCM, skin conditions such as psoriasis are often treated with cleansing herbal formulas — like the centuries-old Three Yellow Cleanser — that clear internal heat and calm itching. Your practitioner will tailor a plan of herbal medicine and acupuncture to your pattern, and refine it as your skin responds.",
        ],
      },
    ],
    services: ["herbal-medicine", "acupuncture"],
    practitioners: ["jessie-li"],
    meta: {
      title: "Psoriasis Treatment in Vancouver | Traditional Chinese Medicine",
      description:
        "Traditional Chinese Medicine for psoriasis in Vancouver: individualized herbal medicine and acupuncture. Book a free consultation.",
    },
  },
  {
    slug: "chronic-pain",
    name: "Chronic Pain & Fibromyalgia",
    icon: Activity,
    blurb: "Acupuncture and massage for lasting relief.",
    lead: "Chronic pain affects every part of life. We combine acupuncture and massage therapy to help you move and rest more comfortably.",
    image: "/images/chronic-pain.jpg",
    imageAlt: "Black and white photo of a person holding their chest in discomfort",
    sections: [
      {
        title: "About chronic pain relief",
        body: [
          "Pain that lingers for months can disrupt sleep, mood, work and relationships. Rather than chase symptoms one at a time, we look at the whole picture and build a plan that may combine acupuncture, registered massage therapy and lifestyle guidance.",
        ],
        quote: {
          text: "Acupuncture is used as an adjunct treatment or an acceptable alternative to treat an ever-growing list of disorders: addiction, stroke, headache, menstrual cramps, tennis elbow, fibromyalgia, osteoarthritis, low back pain, carpal tunnel syndrome, asthma, infertility, pregnancy problems, dental pain, and side effects from cancer treatment.",
          source: "WebMD",
        },
      },
      {
        title: "Conditions we commonly see",
        body: [],
        list: {
          items: [
            "Low back & neck pain",
            "Fibromyalgia",
            "Headaches & migraines",
            "Osteoarthritis",
            "Tennis elbow & carpal tunnel",
            "Shoulder & sports injuries",
          ],
        },
      },
    ],
    services: ["acupuncture", "massage-therapy"],
    practitioners: ["jessie-li", "martin-pan", "justin-chu"],
    meta: {
      title: "Chronic Pain Relief in Vancouver | Acupuncture & Massage",
      description:
        "Chronic pain and fibromyalgia relief in Vancouver with acupuncture and registered massage therapy. Direct billing available.",
    },
  },
  {
    slug: "skin-disorders",
    name: "Skin Disorders",
    icon: Leaf,
    blurb: "Acne, dermatitis, rashes and more.",
    lead: "Centuries-old herbal formulas, individualized for your skin.",
    image: "/images/herbs.jpg",
    imageAlt: "Dried Traditional Chinese Medicine herbs and roots",
    sections: [
      {
        title: "Skin disorder treatments",
        body: [
          "Traditional Chinese Medicine uses the Three Yellow Cleanser (San Huang Xi Ji) to treat about 60% of skin disorders, including acne, eczema, dermatitis, rashes and psoriasis.",
          "The formula, in use for many centuries, combines four cleansing herbs with a “cold property” that clears internal heat (Qing Re), stops itching (Zhi Yang) and prevents secretions from oozing further (Shou Se). Three of the four herbs have a yellow hue — hence the name.",
        ],
        list: {
          title: "Skin concerns we see",
          items: ["Acne", "Eczema", "Dermatitis", "Rashes", "Psoriasis"],
        },
      },
    ],
    services: ["herbal-medicine", "acupuncture"],
    practitioners: ["jessie-li"],
    meta: {
      title: "Skin Disorder Treatment in Vancouver | Chinese Herbal Medicine",
      description:
        "Traditional Chinese Medicine for acne, dermatitis, rashes, eczema and psoriasis in Vancouver. Book a free consultation.",
    },
  },
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}

export function getConditions(slugs: string[]) {
  return slugs.map(getCondition).filter((c): c is Condition => Boolean(c));
}
