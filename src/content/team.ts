export type Discipline = "acupuncture" | "massage" | "counselling";

export type TeamMember = {
  slug: string;
  name: string;
  /** How the person is addressed in running copy, e.g. "Jessie". */
  shortName: string;
  role: string;
  credentials?: string;
  discipline: Discipline;
  image: string;
  /** CSS object-position so faces sit consistently in portrait crops. */
  imagePosition?: string;
  summary: string;
  bio: string[];
  focus: string[];
  modalities?: string[];
};

export const disciplineLabels: Record<Discipline, string> = {
  acupuncture: "Acupuncture & TCM",
  massage: "Massage Therapy",
  counselling: "Counselling",
};

export const team: TeamMember[] = [
  {
    slug: "jessie-li",
    name: "Zhihua (Jessie) Li",
    shortName: "Jessie",
    role: "Registered Acupuncturist & TCM Practitioner",
    discipline: "acupuncture",
    image: "/images/team/jessie-li.jpg",
    imagePosition: "50% 25%",
    summary:
      "From a family of Traditional Chinese Medicine practitioners, Jessie restores balance by strengthening the body's constitution.",
    bio: [
      "Zhihua (Jessie) comes from a Traditional Chinese Medicine family in China and is a Registered Acupuncturist and TCM Practitioner in good standing with the College of Complementary Health Professionals of BC. With a strong foundation in holistic TCM principles and extensive clinical experience, she is dedicated to helping patients relieve illness, prevent disease, and improve their overall quality of life.",
      "Jessie believes that physical discomfort is closely connected to diet, lifestyle, and emotional health. When unhealthy habits persist, the body shifts away from balance. Her approach focuses on regulating and strengthening the body's constitution, allowing symptoms to resolve more naturally and completely.",
    ],
    focus: [
      "Acute & chronic pain",
      "Digestive issues",
      "Depression, anxiety & sleep",
      "Allergies",
      "Menopause symptoms",
      "Children's developmental concerns",
      "Immune support",
    ],
    modalities: [
      "Acupuncture",
      "Facial acupuncture",
      "Gua sha",
      "Fire cupping",
      "Moxibustion",
      "Chinese herbal medicine",
      "Food therapy",
      "Emotional wellness support",
    ],
  },
  {
    slug: "martin-pan",
    name: "Martin Pan",
    shortName: "Martin",
    role: "Registered Massage Therapist",
    credentials: "RMT",
    discipline: "massage",
    image: "/images/team/martin-pan.jpg",
    imagePosition: "50% 30%",
    summary:
      "Brings personal training and Canadian Armed Forces experience to a holistic, proactive approach to massage therapy.",
    bio: [
      "Martin Pan is a Registered Massage Therapist with the College of Complementary Health Professionals of BC. He integrates his knowledge of personal training and his experience in the Canadian Armed Forces to provide a holistic and proactive approach for his clients.",
      "He enjoys practicing mixed martial arts and a round of golf in his free time.",
    ],
    focus: ["Proprioceptive Neuromuscular Facilitation (PNF)", "Deep tissue work"],
  },
  {
    slug: "anu-patel",
    name: "Dr. Anu Patel",
    shortName: "Dr. Anu",
    role: "Registered Counsellor",
    credentials: "MPCC-P",
    discipline: "counselling",
    image: "/images/team/anu-patel.jpg",
    imagePosition: "50% 25%",
    summary: "Brings together neuroscience, mindfulness and evidence-based counselling for a truly holistic approach.",
    bio: [
      "Dr. Anu is a Master Practitioner in Clinical Counselling – Provisional (MPCC-P) and a Registered Counsellor with the Canadian Professional Counsellors Association (CPCA). She provides highly effective, personalized counselling by fostering a trustworthy relationship with her clients through unconditional positive regard and non-judgemental listening.",
      "She has specific training in effective communication, trauma release, handling relationship conflicts, and supporting clients with substance use disorders.",
      "With a science career and a meditation practice spanning more than 15 years, Dr. Anu brings together evidence-based neuroscience, the effects of meditation on human emotions, and counselling to create a truly holistic approach. She holds a doctorate in Medicinal Chemistry and continues to serve the scientific community through active research and development.",
    ],
    focus: [
      "Trauma & post-traumatic stress",
      "Anxiety & depression",
      "Relationship & family conflict",
      "Substance use & recovery",
      "Mindfulness-based care",
    ],
  },
];

export function getTeamMember(slug: string) {
  return team.find((m) => m.slug === slug);
}

export function getTeamMembers(slugs: string[]) {
  return slugs.map(getTeamMember).filter((m): m is TeamMember => Boolean(m));
}
