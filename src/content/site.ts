export const site = {
  name: "Revolve Therapy Health Services",
  shortName: "Revolve Therapy",
  tagline: "Individualized therapies that revolve around you.",
  description:
    "Vancouver counselling, registered massage therapy, acupuncture and Traditional Chinese Medicine clinic across from VGH. Personalized, patient-centred care with direct billing.",
  url: "https://revolvetherapy.ca",
  locale: "en_CA",

  phone: { display: "(604) 876-8618", href: "tel:+16048768618", e164: "+16048768618" },
  email: "revolvetherapyltd@gmail.com",

  address: {
    unit: "Suite 116",
    street: "828 West 8th Ave",
    city: "Vancouver",
    region: "BC",
    country: "CA",
    landmark: "Between Laurel St & Willow St, across from Vancouver General Hospital",
  },

  parking:
    "Free 2-hour street parking is available on 7th Avenue. If it's full, call us and we'll direct you to overflow parking.",

  maps: {
    place: "https://maps.google.com/?cid=4832416483803105229",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Revolve+Therapy+Health+Services,+828+W+8th+Ave,+Vancouver,+BC",
    embed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sRevolve+Therapy+Health+Services,+828+W+8th+Ave,+Vancouver,+BC",
    writeReview: "https://search.google.com/local/writereview?placeid=ChIJg2w7H45zhlQRzYfTUzAxEEM",
  },

  booking: {
    main: "https://revolvetherapy.janeapp.com/",
    practitioners: "https://revolvetherapy.janeapp.com/#/list",
    massageWithMartin: "https://revolvetherapy.janeapp.com/#/staff_member/1",
    initialAcupuncture: "https://revolvetherapy.janeapp.com/#/staff_member/12/treatment/83",
    counsellingConsult: "https://revolvetherapy.janeapp.com/#/staff_member/15/treatment/87",
  },

  social: {
    instagram: "https://www.instagram.com/revolvetherapy.ca/",
    facebook: "https://www.facebook.com/revolvetherapy.ca/",
  },

  /** Snapshot of the Google Business Profile. Update when the review count changes. */
  rating: { value: 5.0, count: 18 },

  /** Day numbers follow JS Date#getDay(): 0 = Sunday. Times are 24h, America/Vancouver. */
  hours: [
    { label: "Monday – Friday", days: [1, 2, 3, 4, 5], open: "08:00", close: "20:00" },
    { label: "Saturday", days: [6], open: "10:00", close: "20:00" },
    { label: "Sunday", days: [0], open: "10:00", close: "16:00" },
  ],
  timeZone: "America/Vancouver",
} as const;

export type Hours = (typeof site.hours)[number];

export const fullAddress = `${site.address.unit} – ${site.address.street}, ${site.address.city}, ${site.address.region}`;

export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour}${suffix}` : `${hour}:${String(m).padStart(2, "0")}${suffix}`;
}
