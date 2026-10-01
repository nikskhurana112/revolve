export type Review = {
  author: string;
  date: string;
  text: string;
  /** Google contributor profile URL, used as the citation link. */
  url: string;
};

/** Verbatim Google reviews from the clinic's Business Profile. */
export const reviews: Review[] = [
  {
    author: "Tina Lee",
    date: "2022-07-20",
    url: "https://www.google.com/maps/contrib/107906759639269783002/reviews",
    text: "I’ve been struggling with shoulder and neck pain because of an injury I had a few months ago. Honestly, I was scared of getting a massage in fear it would strain my shoulder more, but Martin was amazing in making sure I understood what he was working on throughout the massage. That made me feel better both physically and mentally!",
  },
  {
    author: "Danielle Miller",
    date: "2022-07-21",
    url: "https://www.google.com/maps/contrib/110747119696760296657/reviews",
    text: "David was fantastic. I’ve been to a number of RMTs and his therapeutic massage was one of the best I’ve ever received. Would highly recommend.",
  },
  {
    author: "Emily Feng",
    date: "2022-07-11",
    url: "https://www.google.com/maps/contrib/109223991965638600968/reviews",
    text: "Was here for the first time last week due to neck pains. My RMT David was extremely professional, listened to my needs and provided great service overall. Would highly recommend this clinic to my friends and family.",
  },
  {
    author: "Adrian Hui",
    date: "2022-05-22",
    url: "https://www.google.com/maps/contrib/116355206521753379098/reviews",
    text: "Super efficient! Staff took the time to ensure all our needs were met. They were very knowledgeable. Will definitely recommend!",
  },
  {
    author: "Jordan Welsh",
    date: "2022-07-21",
    url: "https://www.google.com/maps/contrib/117764658245755413936/reviews",
    text: "Awesome staff, David really gets into the muscles hard, and for those looking for that, I'd highly recommend this location, ill be going back next week before vacation",
  },
];

export const featuredStory = {
  id: "bells-palsy-story",
  author: "Michael L.",
  condition: "Bell's Palsy",
  date: "2022-08-08",
  image: "/images/story-progress.jpg",
  imageAlt: "Dated progress photos showing Michael's facial movement improving between May and July 2022",
  pullQuote:
    "Within 20 minutes, my right eye was able to close naturally… I estimate the right side of my face is 90–95% back to normal.",
  highlights: [
    { label: "Condition", value: "Bell's Palsy (severe)" },
    { label: "Treatment", value: "Weekly acupuncture" },
    { label: "Medical tape", value: "Stopped after ~4 visits" },
    { label: "Self-reported", value: "90–95% recovery" },
  ],
  /** Lightly copy-edited for readability; meaning unchanged. */
  sections: [
    {
      body: [
        "My review of Revolve Therapy is particularly addressed to skeptics like myself, and those with no experience in Traditional Chinese Medicine. I receive no compensation for this. My goal is to encourage anybody on the fence to give acupuncture a shot if they are considering it.",
        "Four months ago, near the end of March 2022, I left work early because of a severe headache. It was bright outside, and when I squinted to avoid looking into the sun, the right side of my face wouldn’t move. Concerned I was having a stroke, I visited the ER, where I was diagnosed with Bell’s Palsy (idiopathic facial palsy, or palsy of cranial nerve VII). Three independent medical professionals — the ER doctor, my neurologist, and a second opinion — noted my case as either severe or one of the worst they had ever seen.",
        "My neurologist suggested that acupuncture had worked for others, although the research linking recovery to acupuncture was thin — but that it would do no harm. I researched medical journals and found two very explainable issues behind the less-than-ideal research: most studies were done in regions where acupuncture is very popular and so don’t represent a global population, and the tests can’t truly be double-blind, since the person administering acupuncture has to know they are doing it.",
      ],
    },
    {
      heading: "Before my first appointment",
      body: [
        "My initial skepticism kept me from pursuing acupuncture right away. After two weeks of deliberation and absolutely zero improvement, I scheduled a consultation. An hour before my appointment I was:",
      ],
      list: [
        "Not able to close my right eye without medical tape",
        "Not able to taste from the front-right of my tongue",
        "Lubricating my eye several times a day",
        "Unable to pronounce consonants such as B, P, F and V",
        "Unable to keep a seal with my lips (no straws, or drinking without tilting my head)",
        "Hearing louder out of my right ear",
      ],
    },
    {
      heading: "During the first treatment",
      body: [
        "Within 20 minutes, my right eye was able to close naturally (it still wouldn’t blink), and I felt the ability to move the right side of my lips. I was nowhere near full motor ability after one session, but it was a quantum leap considering my state just two hours earlier. It was the momentum boost I was looking for.",
        "I now visit Revolve Therapy for one hour a week and estimate the right side of my face is 90–95% back to normal. While I don’t attribute all of the recovery to acupuncture alone, I have no choice but to believe it has been very helpful as a complementary treatment. I was warned I might need medical tape to close my eye for “several months” — instead, I stopped using it entirely after roughly four treatments.",
      ],
    },
    {
      heading: "What you can expect",
      body: [
        "Courteous staff, knowledgeable professionals and expert technique; direct billing with your insurance if they cover your treatment; punctuality, cleanliness and attention to client service; and simple scheduling with appointment reminders.",
        "Revolve Therapy is pretty no-frills — no waterfall, large glass windows or marble countertops. They have everything they need to provide a welcoming and professional environment, and the savings go directly into your pocket. Staff are extremely friendly and will go above and beyond to answer your questions. There’s chit-chat if you want it, and silence if you prefer that.",
        "As somebody who has almost fully recovered, I feel compelled to tell anybody with the same condition to at least try Traditional Chinese Medicine for themselves. The treatment is bespoke to your condition and can change based on how it looks that day. I have full faith in the staff at Revolve Therapy to do everything within their power to ensure you have an enjoyable experience and the best results they can deliver.",
      ],
    },
  ],
};
