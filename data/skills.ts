export type SkillGroup = {
  name: string;
  icon: "layers" | "server" | "database" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: "layers",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: ["Node.js", "C# / .NET", "Prisma ORM", "Sanity CMS", "APIs REST"],
  },
  {
    name: "Bases de datos",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL / NoSQL"],
  },
  {
    name: "Herramientas",
    icon: "wrench",
    skills: ["Git", "GitHub", "Vercel", "Stripe", "Clerk", "Resend"],
  },
];