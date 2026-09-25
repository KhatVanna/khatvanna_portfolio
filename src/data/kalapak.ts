/** Kalapak Code Team — cosmic crew */
export type TeamMember = {
  name: string;
  role: string;
  title: string;
  image: string;
  accent: string;
};

export const KALAPAK_TEAM: TeamMember[] = [
  {
    name: "Khat Vanna",
    role: "Founder & Team Leader",
    title: "Full-Stack Developer",
    image: "/images/team/kalapak/khat-vanna.jpg",
    accent: "#7b2fff",
  },
  {
    name: "Rom Chamraeun",
    role: "Co-Founder",
    title: "Full-Stack Developer",
    image: "/images/team/kalapak/rom-chamraeun.jpg",
    accent: "#4f46e5",
  },
  {
    name: "Phuem Norng",
    role: "Co-Founder",
    title: "Full-Stack Developer",
    image: "/images/team/kalapak/phuem-norng.jpg",
    accent: "#0ea5e9",
  },
  {
    name: "Pheun Seanghai",
    role: "Co-Founder",
    title: "Full-Stack Developer",
    image: "/images/team/kalapak/pheun-seanghai.jpg",
    accent: "#06b6d4",
  },
];

export const KALAPAK = {
  name: "Kalapak Code Team",
  since: "2024",
  url: "https://www.kalapak-team.space/",
  github: "https://github.com/Kalapak-Team",
  email: "kalapakteam@gmail.com",
  telegram: "https://t.me/kalapakteam",
  blurb:
    "A student-driven engineering collective from Cambodia — building real-world software with purpose, collaboration, and pride.",
  mission: [
    { id: "01", title: "Research", body: "Explore cutting-edge technologies and breakthroughs." },
    { id: "02", title: "Document", body: "Compile and share knowledge with the community." },
    { id: "03", title: "Develop", body: "Build powerful, high-quality software solutions." },
    { id: "04", title: "Showcase", body: "Share our work and ideas with the world." },
    { id: "05", title: "Help Others", body: "Uplift people through code and shared knowledge." },
  ],
} as const;
