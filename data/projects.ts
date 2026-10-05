export type ProjectLogo = {
  src: string;
};

export type Project = {
  title: string;
  tone: "brand" | "spark" | "night";
  wide?: boolean;
  category: string;
  summary: string;
  detail?: string;
  technologies: string[];
  status?: string;
  logo: ProjectLogo;
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "SmartCloth Logistics",
    tone: "night",
    wide: true,
    category: "Comercio electrónico y logística",
    summary:
      "Plataforma de comercio electrónico que integra ventas, inventario, distribución y análisis de datos. Un sistema completo, con pagos, emails transaccionales y control de acceso por roles.",
    detail:
      "Trabajo práctico en equipo con Teo Fassardi, desarrollado durante el último año de la carrera. Cada integrante desarrolló una parte del sistema y el repositorio es compartido.",
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
    logo: {
      src: "/logos/smartcloth.png",
    },
    links: [
      {
        label: "Repositorio del equipo",
        href: "https://github.com/fassardi245/SmartCloth",
      },
    ],
  },
  {
    title: "Plásticos RT",
    tone: "spark",
    category: "Sitio institucional y catálogo",
    summary:
      "Sitio web para presentar la empresa, su equipo y el catálogo de materias primas plásticas, con información de contacto y ubicación.",
    detail: "El proyecto sigue en desarrollo.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    status: "En desarrollo",
    logo: {
      src: "/logos/plasticos-rt.png",
    },
    links: [
      {
        label: "Ver demo",
        href: "https://plasticos-rt.vercel.app/es",
      },
    ],
  },
  {
    title: "Biblioteca Dashboard",
    tone: "brand",
    category: "Gestión y análisis de datos",
    summary:
      "Dashboard de reservas de libros con reportes de ventas, títulos más alquilados y rentabilidad. Incluye semaforización para facilitar la lectura de resultados.",
    detail:
      "Desarrollado para una materia de bases de datos, con autenticación y persistencia en MySQL.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "MySQL",
      "Clerk",
    ],
    logo: {
      src: "/logos/biblioteca.png",
    },
    links: [
      {
        label: "Ver repositorio",
        href: "https://github.com/FranCrov/biblioteca-dashboard",
      },
    ],
  },
];