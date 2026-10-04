export type SkillGroup = {
  name: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "APIs", "SQL", "NoSQL", "MySQL", "Prisma"],
  },
  {
    name: "Herramientas",
    skills: ["Sanity", "Clerk", "Stripe", "Resend", "Inteligencia artificial"],
  },
];
