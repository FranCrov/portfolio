export type ProjectLogo = {
  src: string;
};

export type Project = {
  title: string;
  tone: "brand" | "tangerine" | "night";
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
    category: "Comercio electrÃ³nico y logÃ­stica",
    summary:
      "Plataforma de comercio electrÃ³nico que integra ventas, inventario, distribuciÃ³n y anÃ¡lisis de datos. Un sistema completo, con pagos, emails transaccionales y control de acceso por roles.",
    detail:
      "Trabajo prÃ¡ctico en equipo con Teo Fassardi, desarrollado durante el Ãºltimo aÃ±o de la carrera. Cada integrante desarrollÃ³ una parte del sistema y el repositorio es compartido.",
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
    title: "PlÃ¡sticos RT",
    tone: "tangerine",
    category: "Sitio institucional y catÃ¡logo",
    summary:
      "Sitio web para presentar la empresa, su equipo y el catÃ¡logo de materias primas plÃ¡sticas, con informaciÃ³n de contacto y ubicaciÃ³n.",
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
    category: "GestiÃ³n y anÃ¡lisis de datos",
    summary:
      "Dashboard de reservas de libros con reportes de ventas, tÃ­tulos mÃ¡s alquilados y rentabilidad. Incluye semaforizaciÃ³n para facilitar la lectura de resultados.",
    detail:
      "Desarrollado para una materia de bases de datos, con autenticaciÃ³n y persistencia en MySQL.",
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