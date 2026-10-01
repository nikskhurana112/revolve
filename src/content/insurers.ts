export type Insurer = { name: string; logo: string; width: number; height: number };

/** Logo dimensions are the intrinsic pixel sizes of the trimmed PNGs in /public/images/insurers. */
export const insurers: Insurer[] = [
  { name: "ICBC", logo: "/images/insurers/icbc.png", width: 161, height: 159 },
  { name: "Medical Services Plan of BC", logo: "/images/insurers/msp.png", width: 145, height: 160 },
  { name: "WorkSafeBC", logo: "/images/insurers/worksafebc.png", width: 376, height: 72 },
  { name: "Pacific Blue Cross", logo: "/images/insurers/pacific-blue-cross.png", width: 299, height: 59 },
  { name: "Canada Life", logo: "/images/insurers/canada-life.png", width: 242, height: 88 },
  { name: "Sun Life", logo: "/images/insurers/sun-life.png", width: 454, height: 111 },
  { name: "Manulife", logo: "/images/insurers/manulife.png", width: 249, height: 46 },
  { name: "Green Shield Canada", logo: "/images/insurers/green-shield.png", width: 336, height: 149 },
  { name: "Desjardins Insurance", logo: "/images/insurers/desjardins.png", width: 320, height: 89 },
];
