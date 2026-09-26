/** Personal brand / CV identity for Khat Vanna. */
export const SITE = {
  name: "Khat Vanna",
  shortName: "Vanna",
  title: "Khat Vanna — Portfolio & CV",
  role: "Founder & Full-Stack Developer",
  roleDetail: "Founder & Team Leader · Kalapak Code Team",
  university: "Norton University",
  degree: "Computer Science",
  tagline: "Building the future from Cambodia — full-stack, mobile, and AI-minded software.",
  description:
    "Portfolio and CV of Khat Vanna — Founder & Team Leader of Kalapak Code Team, Computer Science student at Norton University, and full-stack developer from Phnom Penh, Cambodia.",
  bio: "I am a Computer Science student at Norton University and the Founder & Team Leader of Kalapak Code Team. I build full-stack web and mobile products with Python, PHP, Laravel, JavaScript, React, and Flutter — and I lead teams that ship real-world software with purpose.",
  email: "khatvanna2005@gmail.com",
  phone: "092 745 117",
  phoneHref: "tel:+85592745117",
  location: "Phnom Penh, Cambodia",
  locationLine: "Based in",
  teamName: "Kalapak Code Team",
  teamUrl: "https://www.kalapak-team.space/",
  githubUrl: "https://github.com/Kalapak-Team",
  social: {
    github: "https://github.com/Kalapak-Team",
    telegram: "https://t.me/kalapakteam",
    team: "https://www.kalapak-team.space/",
  },
  photo: "/images/profile/khat-vanna.jpg",
  photoAlt: "Khat Vanna — Founder & Team Leader of Kalapak Code Team",
  skills: ["Full-Stack", "Mobile", "Leadership"] as const,
  tech: [
    "Python",
    "PHP",
    "Laravel",
    "JavaScript",
    "React",
    "Flutter",
    "Dart",
    "HTML/CSS",
    "Tailwind",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Git",
  ] as const,
  techGroups: [
    {
      title: "Languages & Frameworks",
      items: ["Python", "PHP", "Laravel", "JavaScript", "React", "Dart"],
    },
    {
      title: "Frontend & Mobile",
      items: ["HTML", "CSS", "Tailwind", "Flutter", "Firebase"],
    },
    {
      title: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
    },
  ] as const,
  languages: [
    { name: "Khmer", level: "Mother tongue" },
    { name: "English", level: "Good" },
    { name: "Chinese", level: "Basic" },
  ] as const,
  since: "2024",
  openToWork: true,
  password: "vanna",
} as const;

export const SITE_TITLE_SUFFIX = "Khat Vanna";

export const EXPERIENCE = [
  {
    org: "Kalapak Code Team",
    role: "Founder & Team Leader",
    period: "2024 — Present",
    points: [
      "Founded and leads an IT team specializing in modern web & mobile development",
      "Oversees project planning, task assignments, and team workflow",
      "Guides members in coding best practices, UI/UX, and system architecture",
    ],
  },
  {
    org: "Digital Divide Data — Cambodia",
    role: "Labeler Associate",
    period: "2024 — 2026",
    points: [
      "Worked on machine-learning data-labeling projects",
      "Supported AI model training and quality assurance",
    ],
  },
  {
    org: "Norton University",
    role: "Class Monitor · Computer Science",
    period: "2022 — Present",
    points: [
      "Assisted lecturers in managing class activities",
      "Helped coordinate assignments, attendance, and group tasks",
    ],
  },
  {
    org: "B.E.S.T Program — DDD",
    role: "Trainee",
    period: "2023 — 2024",
    points: [
      "Business Etiquette, English for Communication, Soft Skills, and Tech Skills Training",
    ],
  },
] as const;

export const EDUCATION = [
  {
    school: "Norton University",
    detail: "Computer Science",
    period: "2022 — Present",
  },
  {
    school: "Digital Divide Data",
    detail: "B.E.S.T Program",
    period: "2023 — 2024",
  },
  {
    school: "Hun Sen High School",
    detail: "Kamchay Mear",
    period: "2016 — 2022",
  },
  {
    school: "Maharishi International",
    detail: "English Language",
    period: "2016 — 2020",
  },
] as const;
