export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "SmartCloth Logistics",
    category: "Comercio electrónico y logística",
    description:
      "Plataforma de comercio electrónico que integra ventas, inventario, distribución y análisis de datos. Proyecto final para el título intermedio de Analista en Sistemas Informáticos, desarrollado durante un año por un equipo de cuatro estudiantes, desde el análisis hasta la implementación.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "MySQL",
      "Sanity",
      "Clerk",
      "Stripe",
      "Resend",
    ],
    links: [
      {
        label: "Ver repositorio",
        href: "https://github.com/fassardi245/SmartCloth",
      },
    ],
  },
  {
    title: "Plásticos RT",
    category: "Sitio institucional y catálogo",
    description:
      "Sitio web para presentar la empresa, su equipo y el catálogo de materias primas plásticas, con información de contacto y ubicación. El proyecto sigue en desarrollo.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    status: "En desarrollo",
    links: [
      {
        label: "Ver demo",
        href: "https://plasticos-rt.vercel.app/es",
      },
    ],
  },
  {
    title: "Biblioteca Dashboard",
    category: "Gestión y análisis de datos",
    description:
      "Dashboard de reservas de libros con reportes de ventas, títulos más alquilados y rentabilidad. Incluye semaforización para facilitar la lectura de resultados; desarrollado para una materia de bases de datos con autenticación y persistencia en MySQL.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "MySQL",
      "Clerk",
    ],
    links: [
      {
        label: "Ver repositorio",
        href: "https://github.com/FranCrov/biblioteca-dashboard",
      },
    ],
  },
];
