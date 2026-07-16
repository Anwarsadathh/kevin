export type Company = {
  key: string;
  name: string;
  initials: string;
  /** drop file in /public/logos and set this, e.g. "/logos/learnscape.svg" */
  logo?: string;
  role: string;
  sector: string;
  year: string;
  blurb: string;
  points: string[];
  href?: string;
  image?: string;
};

export const PARENT = {
  name: "Kwin Syndicate Holdings Pvt. Ltd.",
  short: "Kwin Syndicate Holdings",
  initials: "KS",
  logo: undefined as string | undefined,
  role: "Founder",
  blurb:
    "The holding company behind every venture — a group built to solve meaningful problems across education, consulting, and hospitality through innovation, technology, and strategic execution.",
};

export const COMPANIES: Company[] = [
  {
    key: "learnscape",
    name: "LearnScape Edu Pvt. Ltd.",
    initials: "LS",
    logo: "/logos/learnscape.png",
    role: "Founder & CEO",
    sector: "Education Technology",
    year: "2023",
    blurb:
      "A technology-driven education company building India's most trusted education ecosystem — connecting students directly with colleges while eliminating misinformation and unnecessary complexity.",
    points: [
      "500+ partner colleges and universities across India",
      "Direct admissions in as little as 10 minutes",
      "AI-powered guidance and career counselling",
    ],
    href: "https://learnscapeedu.com",
  },
  {
    key: "investbetter",
    name: "Invest Better",
    initials: "IB",
    logo: "/logos/investbetter.png",
    role: "Founder",
    sector: "Business Consulting",
    year: "—",
    blurb:
      "A business consulting and growth ecosystem designed to help startups, entrepreneurs, and businesses scale with the right systems, strategy, and leadership.",
    points: [
      "Business strategy and startup advisory",
      "Brand building and fundraising strategy",
      "Team building and organizational development",
    ],
  },
  {
    key: "caffe",
    name: "Caffè Latte Lounge",
    initials: "CL",
    logo: "/logos/caffe.png",
    role: "Founder",
    sector: "Hospitality",
    year: "2022",
    blurb:
      "The first venture — a hospitality business that provided hands-on experience in customer experience, branding, marketing, finance, operations, and team management.",
    points: [
      "Founded at age 18",
      "Hands-on operations and team management",
      "The foundation for everything that followed",
    ],
  },
];