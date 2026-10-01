export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "numbered"; items: { title: string; text: string }[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "note"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  category: string;
  image: string;
  imageAlt: string;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "top-10-benefits-of-acupuncture",
    title: "The top 10 benefits of acupuncture",
    excerpt:
      "From pain relief to better sleep and hormonal balance, here's what acupuncture may help with — and what to keep in mind before your first visit.",
    date: "2023-07-07",
    readingMinutes: 4,
    category: "Acupuncture",
    image: "/images/acupuncture-back.jpg",
    imageAlt: "Fine acupuncture needles placed along a patient's back",
    body: [
      {
        type: "p",
        text: "Acupuncture is an ancient therapeutic practice that involves the gentle insertion of thin needles into specific points on the body. It aims to stimulate the body's natural healing processes and restore balance. By targeting these strategic points, acupuncture is believed to encourage the flow of vital energy, or qi, throughout the body.",
      },
      { type: "h2", text: "10 ways acupuncture may help" },
      {
        type: "numbered",
        items: [
          {
            title: "Pain relief",
            text: "Acupuncture is commonly used to alleviate many types of pain, including back pain, migraines, osteoarthritis and menstrual cramps.",
          },
          {
            title: "Stress reduction",
            text: "Acupuncture has been reported to promote relaxation, reduce anxiety and improve overall mental well-being.",
          },
          {
            title: "Improved sleep",
            text: "Many people find acupuncture sessions help improve their sleep quality and address issues such as insomnia or sleep disturbances.",
          },
          {
            title: "Enhanced mood",
            text: "Acupuncture may stimulate the release of endorphins and serotonin, which can positively affect mood and help ease symptoms of depression and anxiety.",
          },
          {
            title: "Immune support",
            text: "Some studies suggest acupuncture can enhance immune function by stimulating the production of immune cells and regulating immune responses.",
          },
          {
            title: "Digestive health",
            text: "Acupuncture has been used to address digestive disorders such as irritable bowel syndrome (IBS), acid reflux and nausea.",
          },
          {
            title: "Headache and migraine relief",
            text: "Acupuncture has been shown to reduce the frequency, intensity and duration of headaches and migraines for some people.",
          },
          {
            title: "Allergy relief",
            text: "Acupuncture may help ease allergy symptoms by reducing inflammation and regulating the immune responses associated with allergic reactions.",
          },
          {
            title: "Hormonal balance",
            text: "Acupuncture has been used to address hormonal imbalances, such as those related to menstrual irregularities, fertility and menopause symptoms.",
          },
          {
            title: "Complementary therapy",
            text: "Acupuncture can be used alongside conventional medical treatment to support overall health — for example during cancer care, chronic pain management and post-operative recovery.",
          },
        ],
      },
      {
        type: "image",
        src: "/images/acupuncture-hands.jpg",
        alt: "Acupuncturist gently placing a needle in a patient's hand",
        width: 933,
        height: 1400,
      },
      { type: "h2", text: "Our focus at Revolve Therapy" },
      {
        type: "p",
        text: "This holistic approach may help manage pain, improve sleep quality, enhance emotional well-being and support overall health. At Revolve Therapy Health Services we have a particular focus on conditions such as Bell's Palsy, eczema, psoriasis and chronic pain.",
      },
      {
        type: "note",
        text: "While acupuncture has been practiced for thousands of years and is generally considered safe, individual responses vary and research into its efficacy is ongoing. Talk with a qualified acupuncturist or healthcare professional about your specific needs to decide whether acupuncture is right for you.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
