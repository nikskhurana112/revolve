import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Flame,
  HandHeart,
  Hand,
  HeartHandshake,
  Layers,
  Leaf,
  MoveHorizontal,
  Sparkles,
  Sprout,
  Target,
  Waves,
  Wind,
} from "lucide-react";
import { site } from "./site";

export type Technique = { title: string; description: string; icon: LucideIcon };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  eyebrow: string;
  /** One-line description for menus. */
  blurb: string;
  /** Card-length description. */
  summary: string;
  image: string;
  imageAlt: string;
  cardImage: string;
  intro: string[];
  techniquesTitle: string;
  techniques: Technique[];
  benefitsTitle: string;
  benefits: string[];
  practitioners: string[];
  conditions: string[];
  bookingUrl: string;
  bookingLabel: string;
  note?: string;
  meta: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "massage-therapy",
    name: "Registered Massage Therapy",
    navLabel: "Massage Therapy",
    icon: HandHeart,
    eyebrow: "RMT in Vancouver",
    blurb: "Deep tissue, myofascial release, Swedish & PNF",
    summary:
      "Book with Martin Pan, Registered Massage Therapist, at our Fairview clinic across from Vancouver General Hospital.",
    image: "/images/massage-hands.jpg",
    imageAlt: "Registered massage therapist working on a client's lower back",
    cardImage: "/images/massage-back.jpg",
    intro: [
      "Martin uses a range of techniques to address everything from chronic tension to sports recovery.",
      "Massage therapy has been shown to increase circulation, manage stress, reduce pain and improve range of motion — and the emotional benefits are just as real. Whether you're looking for a relaxation massage or a deep pressure session, your treatment is tailored to what your body needs that day.",
    ],
    techniquesTitle: "Our massage therapy modalities",
    techniques: [
      {
        title: "Deep Tissue Massage",
        icon: Target,
        description:
          "Accurately targets the troubled area to work deep into the knots. Very effective for chronic pain, delayed-onset muscle soreness and general tension.",
      },
      {
        title: "Myofascial Release",
        icon: Layers,
        description:
          "Longer hours and poor posture — especially when working from home — build up adhesions in the fascia. This technique addresses the fascial layer and releases that daily build-up.",
      },
      {
        title: "Swedish Massage Techniques",
        icon: Waves,
        description:
          "Broad strokes, tapotement and muscle stripping help ease the sympathetic nervous system and lower heart rate and blood pressure, leading to deep relaxation.",
      },
      {
        title: "PNF Stretching",
        icon: MoveHorizontal,
        description:
          "Proprioceptive Neuromuscular Facilitation relaxes a muscle by activating its opposite, making the target fibres easier to lengthen. Especially helpful for athletes and referred pain.",
      },
      {
        title: "Manual Lymphatic Drainage",
        icon: Wind,
        description:
          "A gentle, rhythmic technique that encourages the natural movement of lymph to reduce swelling and support recovery.",
      },
      {
        title: "Trigger Point Release",
        icon: Hand,
        description:
          "Sustained, focused pressure on hyper-irritable spots in the muscle to relieve local and referred pain.",
      },
    ],
    benefitsTitle: "What massage therapy can help with",
    benefits: [
      "Reduces pain",
      "Manages stress",
      "Improves range of motion",
      "Improves sleep",
      "Increases circulation",
      "Supports injury recovery",
    ],
    practitioners: ["martin-pan"],
    conditions: ["chronic-pain"],
    bookingUrl: site.booking.massageWithMartin,
    bookingLabel: "See times with Martin",
    meta: {
      title: "Registered Massage Therapy (RMT) in Vancouver",
      description:
        "Book registered massage therapy with Martin Pan in Fairview, Vancouver, across from VGH. See first-visit options and details on direct billing and parking.",
    },
  },
  {
    slug: "acupuncture",
    name: "Acupuncture & Traditional Chinese Medicine",
    navLabel: "Acupuncture & TCM",
    icon: Sparkles,
    eyebrow: "Acupuncture in Vancouver",
    blurb: "Needling, cupping, gua sha & moxibustion",
    summary:
      "Acupuncture and traditional Chinese techniques encourage the natural flow within your body. Our registered acupuncturist has a particular focus on Bell's palsy, chronic pain and eczema.",
    image: "/images/acupuncture-back.jpg",
    imageAlt: "Fine acupuncture needles placed along a patient's back",
    cardImage: "/images/acupuncture-hands.jpg",
    intro: [
      "Acupuncture is an ancient therapeutic practice that involves the gentle insertion of very thin needles into specific points on the body. It aims to stimulate the body's natural healing processes and restore balance — encouraging the flow of vital energy, or qi.",
      "Our registered acupuncturist combines needling with complementary Traditional Chinese Medicine techniques, tailoring every treatment to your condition and how you're feeling that day.",
    ],
    techniquesTitle: "Techniques we offer",
    techniques: [
      {
        title: "Acupuncture",
        icon: Sparkles,
        description:
          "Precise placement of fine, single-use needles — adjusted in location and pressure to your comfort.",
      },
      {
        title: "Facial Acupuncture",
        icon: Leaf,
        description:
          "Gentle needling of the face, used for facial nerve concerns such as Bell's Palsy and for overall facial wellness.",
      },
      {
        title: "Cupping & Fire Cupping",
        icon: Layers,
        description: "Suction cups lift and release tissue to ease muscle tension and encourage circulation.",
      },
      {
        title: "Gua Sha",
        icon: Waves,
        description: "A smooth tool is stroked along the skin to relieve tension and stagnation in the soft tissue.",
      },
      {
        title: "Moxibustion",
        icon: Flame,
        description:
          "Gentle warmth from the herb mugwort applied near acupuncture points to warm and nourish the body.",
      },
      {
        title: "Superficial Needling",
        icon: Hand,
        description: "A very light needling style — ideal if you're new to acupuncture or more sensitive.",
      },
    ],
    benefitsTitle: "Why people choose acupuncture",
    benefits: [
      "Pain relief",
      "Stress reduction",
      "Better sleep",
      "Improved mood",
      "Digestive health",
      "Headache & migraine relief",
      "Allergy relief",
      "Hormonal balance",
    ],
    practitioners: ["jessie-li"],
    conditions: ["bells-palsy", "chronic-pain", "eczema", "psoriasis"],
    bookingUrl: site.booking.main,
    bookingLabel: "Book acupuncture",
    note: "Individual responses to treatment vary. Acupuncture is often used alongside — not instead of — conventional medical care.",
    meta: {
      title: "Acupuncture & Traditional Chinese Medicine in Vancouver",
      description:
        "Registered acupuncture in Vancouver with acupuncture, cupping, gua sha and moxibustion. ICBC claims eligible for 12 free sessions. Direct billing available.",
    },
  },
  {
    slug: "herbal-medicine",
    name: "Chinese Herbal Medicine & Moxibustion",
    navLabel: "Herbal Medicine",
    icon: Sprout,
    eyebrow: "Traditional Chinese Medicine",
    blurb: "Custom herbal formulas, food therapy & moxa",
    summary:
      "Traditional Chinese Herbal Medicine helps the body regain its self-regulating functions and improve overall vitality — an alternative approach for skin conditions such as eczema and psoriasis.",
    image: "/images/herbs.jpg",
    imageAlt: "Dried Traditional Chinese Medicine herbs and roots",
    cardImage: "/images/cupping.jpg",
    intro: [
      "Chinese herbal medicine has been refined over centuries to help the body regain its self-regulating functions and improve overall vitality. Formulas are tailored to your constitution and adjusted as you progress.",
      "One example is the Three Yellow Cleanser (San Huang Xi Ji), traditionally used for around 60% of skin disorders, including acne, eczema, dermatitis, rashes and psoriasis. Its four cleansing herbs have a “cold property” that clears internal heat (Qing Re), stops itching (Zhi Yang) and prevents secretions from oozing further (Shou Se). Three of the four herbs have a yellow hue — hence the name.",
    ],
    techniquesTitle: "How we use herbal medicine",
    techniques: [
      {
        title: "Individualized Formulas",
        icon: Sprout,
        description:
          "Herbal formulas selected for your specific pattern and constitution, reviewed at every follow-up.",
      },
      {
        title: "Moxibustion",
        icon: Flame,
        description: "Warming therapy with mugwort to support circulation, digestion and overall vitality.",
      },
      {
        title: "Food Therapy",
        icon: Leaf,
        description: "Practical dietary guidance grounded in TCM principles, because what you eat shapes how you heal.",
      },
    ],
    benefitsTitle: "Often used for",
    benefits: [
      "Eczema & dermatitis",
      "Psoriasis",
      "Acne & rashes",
      "Digestive concerns",
      "Low energy & vitality",
      "Menopause symptoms",
    ],
    practitioners: ["jessie-li"],
    conditions: ["eczema", "psoriasis", "skin-disorders"],
    bookingUrl: site.booking.main,
    bookingLabel: "Book a consultation",
    note: "Please tell your practitioner about any medications or supplements you take so herbal formulas can be prescribed safely.",
    meta: {
      title: "Chinese Herbal Medicine & Moxibustion in Vancouver",
      description:
        "Traditional Chinese herbal medicine, moxibustion and food therapy in Vancouver for eczema, psoriasis, skin disorders and overall vitality.",
    },
  },
  {
    slug: "counselling",
    name: "Counselling",
    navLabel: "Counselling",
    icon: HeartHandshake,
    eyebrow: "Counselling in Vancouver",
    blurb: "Evidence-based, mindfulness-informed support",
    summary:
      "A safe, supportive and confidential space to explore life's challenges, strengthen emotional well-being and develop healthy coping strategies.",
    image: "/images/counselling-session.jpg",
    imageAlt: "A counsellor listening to a client in a calm, comfortable office",
    cardImage: "/images/counselling-tea.jpg",
    intro: [
      "We provide personalized, evidence-based counselling that combines the latest therapeutic approaches with mindfulness practices. Our goal is to help you build resilience, improve emotional well-being, and navigate life's challenges with confidence and support.",
      "No matter where you are on your journey, we're here to provide a safe, compassionate and supportive space where healing and personal growth can begin.",
    ],
    techniquesTitle: "Our approach",
    techniques: [
      {
        title: "Evidence-based therapy",
        icon: Brain,
        description: "Therapeutic approaches grounded in research and tailored to your unique needs and goals.",
      },
      {
        title: "Mindfulness-informed",
        icon: Leaf,
        description: "Drawing on more than 15 years of meditation practice to help you regulate emotions and stress.",
      },
      {
        title: "Non-judgemental space",
        icon: HeartHandshake,
        description: "Unconditional positive regard and careful listening, so you can speak openly and feel heard.",
      },
    ],
    benefitsTitle: "We can help with",
    benefits: [
      "Trauma & post-traumatic stress",
      "Anxiety & depression",
      "Relationship & family conflict",
      "Couples counselling",
      "Substance use & addiction recovery",
      "New parent & postpartum challenges",
      "Health concerns & life transitions",
      "Stress management",
    ],
    practitioners: ["anu-patel"],
    conditions: [],
    bookingUrl: site.booking.counsellingConsult,
    bookingLabel: "Book a free 15-min consult",
    note: "If you are in crisis or thinking about suicide, call or text 9-8-8 any time, or call 9-1-1 in an emergency.",
    meta: {
      title: "Counselling in Vancouver",
      description:
        "Personalized, evidence-based counselling in Vancouver for anxiety, depression, trauma, relationships and life transitions. Book a free 15-minute virtual consultation.",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServices(slugs: string[]) {
  return slugs.map(getService).filter((s): s is Service => Boolean(s));
}
